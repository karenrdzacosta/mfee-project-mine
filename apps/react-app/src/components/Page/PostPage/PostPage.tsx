import {
  Container,
  BannerContainer,
  CommentsContainer,
  DescriptionContainer,
} from "./PostPage.styles";

import Banner from "../../Banner";
import CommentCard from "../../CommentCard";

const post = {
  image: "https://ts.accenture.com/sites/BrandSpace/Image%20Library/Agribusiness%20-%20Brand-Approved-GettyImages-1144627849.jpeg",
  title: "Title 1",
  postID: "post-001",
  comments: [
    {
      _id: "001",
      author: "jane_doe",
      content: "Great job!",
      createdAt: "10/20/2026",
      updatedAt: "10/20/2026",
      __v: "",
    },
  ],
  description: "Description as part of Act 1",
};

function PostPage() {
  return (
    <Container container>
      Post page
      <BannerContainer item>
        {/* ACT 1 - Render Banner component */}
        {/* ACT 3 - Send postImage and postTitle as props to Banner component */}
      </BannerContainer>
      <DescriptionContainer item>
        <p>{/* ACT 1 - Render post description */}</p>
      </DescriptionContainer>
      <CommentsContainer item>
        {/* ACT 1 - Render Comments component */}
        {/* ACT 3 - Send comments as prop to Comments component */}
      </CommentsContainer>
    </Container>
  );
}

export default PostPage;
