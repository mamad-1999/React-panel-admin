import * as React from "react";
import { Box, Stack, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import PanelLayout from "../../components/PanelLayout/PanelLayout";

// custom hook
import { useGetApi } from "../../hooks/useGetApi";

// loading component
import Loading from "../../components/Loading/Loading";
import useDeleteApi from "../../hooks/useDeleteApi";

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
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
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
        row.onDelete(`/users/${currentRow.id}`);
      };

      return (
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            // onClick={onClick}
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
  const { data, isLoading } = useGetApi(["users"], "/users");
  const { mutate } = useDeleteApi(["users"]);

  if (isLoading) {
    return <Loading />;
  }

  //Modify rows here:
  const modifiedRows = data.map((element) => {
    return {
      ...element,
      onDelete: mutate,
    };
  });

  return (
    <PanelLayout>
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
    </PanelLayout>
  );
};

export default UserListPage;
