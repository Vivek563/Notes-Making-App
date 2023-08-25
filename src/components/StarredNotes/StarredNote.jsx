import { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";
import { Star } from "@mui/icons-material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 225px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow-wrap: anywhere;
`;

const Note = ({ note }) => {
  const {
    starNotes,
    setNotes,
    setStarredNotes,
    setDeletedNotes,
    setArchiveNotes,
  } = useContext(DataContext);

  const deleteNote = () => {
    const updatedNotes = starNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("starNotesKey", JSON.stringify(updatedNotes));
    setStarredNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  const starNote = (note) => {
    const updatedNotes = starNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("starNotesKey", JSON.stringify(updatedNotes));
    setStarredNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const archiveNote = () => {
    const updatedNotes = starNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("starNotesKey", JSON.stringify(updatedNotes));
    setStarredNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };

  useEffect(() => {
    localStorage.setItem("starNotesKey", JSON.stringify(starNotes));
  }, [starNotes]);

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note ? note.heading : ""}</Typography>
        <Typography>{note ? note.text : ""}</Typography>
      </CardContent>
      <CardActions style={{ cursor: "pointer" }}>
        <Star fontSize="small" onClick={() => starNote(note)} />
        <ArchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <DeleteOutlinedIcon fontSize="small" onClick={() => deleteNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
