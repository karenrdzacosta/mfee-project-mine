import { Grid } from "@mui/material";

import { HomePage, PostPage, CategoriesPage } from "./components/Page";
// import { PageContainer } from "./components/Page/LoginPage/LoginPage.styles";
import NavBar from "./components/NavBar";

function App() {
  const page: string = "HomePage";
  return (
      <Grid container id="app" direction="column" height="100vh" wrap="nowrap">
        <NavBar />
        <Grid
          container
          item
          wrap="nowrap"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 84px)",
          }}
        >
          {page === "HomePage" && <HomePage />}
          {page === "PostPage" && <PostPage/>}
          {page === "CategoriesPage" && <CategoriesPage />}
        </Grid>
      </Grid>
  );
}

export default App;
