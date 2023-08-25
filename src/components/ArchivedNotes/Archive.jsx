import { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 225px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow-wrap: anywhere;
`;

const Archive = ({ note }) => {
  const {
    archiveNotes,
    setNotes,
    setStarredNotes,
    setArchiveNotes,
    setDeletedNotes,
  } = useContext(DataContext);

  const deleteNote = () => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("archiveNotesKey", JSON.stringify(updatedNotes));
    setArchiveNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  const starNote = () => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("archiveNotesKey", JSON.stringify(updatedNotes));
    setArchiveNotes(updatedNotes);
    setStarredNotes((prevArr) => [note, ...prevArr]);
  };

  const archiveNote = () => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("archiveNotesKey", JSON.stringify(updatedNotes));
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  useEffect(() => {
    localStorage.setItem("archiveNotesKey", JSON.stringify(archiveNotes));
  }, [archiveNotes]);

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note ? note.heading : ""}</Typography>
        <Typography>{note ? note.text : ""}</Typography>
      </CardContent>
      <CardActions style={{ cursor: "pointer" }}>
        <StarBorderIcon fontSize="small" onClick={() => starNote(note)} />
        <UnarchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <DeleteOutlinedIcon fontSize="small" onClick={() => deleteNote()} />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
