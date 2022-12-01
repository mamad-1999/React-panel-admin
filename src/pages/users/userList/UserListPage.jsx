import * as React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
// import component
import PanelLayout from "../../../components/PanelLayout/PanelLayout";
import Title from "../../../components/Title/Title";
import BoxLayout from "../../../components/BoxLayout/BoxLayout";
import AddButton from "../../../components/AddButton/AddButton";
// loading component
import Loading from "../../../components/Loading/Loading";
// custom hook
import { useGetApi } from "../../../hooks/useGetApi";
import useUpdateApi from "../../../hooks/useUpdateApi";
import useDeleteApi from "../../../hooks/useDeleteApi";

// confirm package
import { useConfirm } from "material-ui-confirm";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    // type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 160,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 200,
    renderCell: (params) => {
      const { row } = params;

      const deleteHandler = (e) => {
        const currentRow = params.row;
        row
          .onConfirm({ title: "Are you sure to delete?" })
          .then(() => {
            // onDelete === mutate
            row.onDelete(`/users/${currentRow.id}`);
          })
          .catch(() => {
            console.log("This action cancel");
          });
      };

      const editHandler = (e) => {
        const currentRow = params.row;
        row
          .onConfirm({ title: "Are you sure to edit?" })
          .then(() => {
            // send data without onSelect and onEdit
            const { onEdit, onDelete, ...other } = currentRow;
            // onEdit === mutate
            row.onEdit(other);
          })
          .catch(() => {
            console.log("This action cancel");
          });
      };

      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={editHandler}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={deleteHandler}
          >
            Delete
          </Button>
        </Stack>
      );
    },
  },
];

const UserListPage = () => {
  // Get
  const { data, isLoading } = useGetApi(["users"], "/users");
  // Delete
  const { mutate: deleteUser } = useDeleteApi(["users"]);
  // Edit
  const { mutate: editUser } = useUpdateApi("users", "/users", "put");
  const confirm = useConfirm();

  if (isLoading) {
    return <Loading />;
  }

  //Modify rows here:
  const modifiedRows = data.map((element) => {
    return {
      ...element,
      onDelete: deleteUser,
      onEdit: editUser,
      onConfirm: confirm,
    };
  });

  return (
    <PanelLayout>
      <BoxLayout justify="space-between">
        <Title>User list</Title>
        <AddButton text={"Add User"} link={"/userlist/adduser"} />
      </BoxLayout>
      <BoxLayout justify="start" gap={1}>
        <HelpCenterIcon />
        <Typography variant="body2">
          Double-click the table cells to enter edit mode
        </Typography>
      </BoxLayout>
      <BoxLayout>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={modifiedRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </BoxLayout>
    </PanelLayout>
  );
};

export default UserListPage;
