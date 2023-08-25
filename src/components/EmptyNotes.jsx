import { Typography, styled, Box } from "@mui/material";

const Text = styled(Typography)`
  font-size: 24px;
  color: #80868b;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
`;

const emptyNotes = ({ Image, displayText }) => {
  return (
    <Container>
      {Image}
      <Text>{displayText}</Text>
    </Container>
  );
};

export default emptyNotes;
