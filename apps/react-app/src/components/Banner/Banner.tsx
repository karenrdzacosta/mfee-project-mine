import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { BannerContent, BannerTitle, Container } from "./Banner.styles";

const postImage = "https://ts.accenture.com/sites/BrandSpace/Image%20Library/Agribusiness%20-%20GettyImages-613707708.jpg"; // ACT 1 - Put some image URL
const postTitle = "Welcome To Act 1 from React"; //ACT 1 -  Write a title

function Banner() {
  return (
    <Container image={postImage}>
      <BannerContent>
        <Button sx={{ color: "white" }} startIcon={<ArrowBackIosIcon />}>
          View Posts
        </Button>
        <BannerTitle variant="h3">
          {postTitle}
        </BannerTitle>
      </BannerContent>
    </Container>
  );
}

export default Banner;
