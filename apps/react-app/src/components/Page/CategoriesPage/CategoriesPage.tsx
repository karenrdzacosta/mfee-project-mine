import { Grid } from "@mui/material";

import { PageContainer } from "./CategoriesPage.styles";
import { useEffect, useState } from "react";
import { Category } from "../../../types";

import Table from "./../../Table";

const categories: Category[] = [
  { id: "663fef70d513515319551d1f", name: "Travel" },
  { id: "663fef70d513515319546d1f", name: "Food" },
];

function CategoriesPage() {
  const [rows, setRows] = useState<Category[]>([]);
  useEffect(() => {
    setRows(categories)
  },[])
  const handleEditItem = () => {};
  const handleDeleteItem = () => {};

  return (
    <PageContainer container>
      Categories Page
      <Grid item sx={{ justifyContent: "flex-end", display: "flex" }}>
        //Add category (Icon button)
      </Grid>
      <Grid item sx={{ flexGrow: 1 }}>
        <Table rows={rows} />
      </Grid>
      //Modal
    </PageContainer>
  );
}

export default CategoriesPage;
