import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

const comment = {
  _id: "comment-001",
  author: "jane_doe",
  content: "This is great!",
  createdAt: "10/22/2026",
  updatedAt: "10/22/2026",
  __v: "",
};
// ACT 3 - Receive comment prop

function CommentCard() {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{/* ACT 1 - Render comment author */}</Author>
        <Typography>{/* ACT 1 - Render comment content */}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;
