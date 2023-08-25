import { useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography, styled } from "@mui/material";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
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

const Note = ({ note }) => {
  const {
    deletedNotes,
    setNotes,
    setStarredNotes,
    setArchiveNotes,
    setDeletedNotes,
  } = useContext(DataContext);

  const deleteNote = () => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("deleteNotesKey", JSON.stringify(updatedNotes));
    setDeletedNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const starNote = () => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("deleteNotesKey", JSON.stringify(updatedNotes));
    setDeletedNotes(updatedNotes);
    setStarredNotes((prevArr) => [note, ...prevArr]);
  };

  const archiveNote = () => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    localStorage.setItem("deleteNotesKey", JSON.stringify(updatedNotes));
    setDeletedNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };

  useEffect(() => {
    localStorage.setItem("deleteNotesKey", JSON.stringify(deletedNotes));
  }, [deletedNotes]);

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note ? note.heading : ""}</Typography>
        <Typography>{note ? note.text : ""}</Typography>
      </CardContent>
      <CardActions style={{ cursor: "pointer" }}>
        <StarBorderIcon fontSize="small" onClick={() => starNote(note)} />
        <ArchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => archiveNote(note)}
        />
        <RestoreFromTrashIcon fontSize="small" onClick={() => deleteNote()} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
