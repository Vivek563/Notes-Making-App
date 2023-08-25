import { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import EmptyNotes from "../EmptyNotes";
import { Delete } from "@mui/icons-material";

// Components
import DeletedNote from "./DeleteNote";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const DeletedNotes = () => {
  const { deletedNotes, setDeletedNotes } = useContext(DataContext);

  const deleteNotesPermanent = () => {
    setDeletedNotes([]);
    localStorage.setItem("deleteNotesKey", JSON.stringify([]));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("deleteNotesKey"));
    if (items) setDeletedNotes(items);
  }, [setDeletedNotes]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {deletedNotes.length > 0 ? (
        <>
          <Button onClick={deleteNotesPermanent}>Delete Permanent </Button>
          <Grid container style={{ marginTop: "16px" }}>
            {deletedNotes.map((note) => {
              return (
                <Grid item key={note.id}>
                  <DeletedNote note={note} />
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <EmptyNotes
          Image={<Delete style={{ fontSize: "120px", color: "#f5f5f5" }} />}
          displayText={"No Notes to Delete"}
        />
      )}
    </Box>
  );
};

export default DeletedNotes;
