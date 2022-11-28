import * as React from "react";
import { Box, Stack, Button } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";

import PanelLayout from "../../components/PanelLayout/PanelLayout";

// custom hook
import { useGetApi } from "../../hooks/useGetApi";

// loading component
import Loading from "../../components/Loading/Loading";

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
    width: 80,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 130,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 130,
  },
  {
    field: "actions",
    type: "actions",
    width: 200,
    renderCell: (params) => {
      const onClick = (e) => {
        const currentRow = params.row;
        return alert(JSON.stringify(currentRow, null, 4));
      };

      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={onClick}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={onClick}
          >
            Delete
          </Button>
        </Stack>
      );
    },
    // getActions: () => [
    //   <GridActionsCellItem icon={<DeleteIcon />} label="Edit" />,
    // ],
  },
];

const UserListPage = () => {
  const { data, isLoading } = useGetApi(["users"], "/users");

  if (isLoading) {
    return <Loading />;
  }
  return (
    <PanelLayout>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </PanelLayout>
  );
};

export default UserListPage;
