import { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// Components
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "../EmptyNotes";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const Notes = () => {
  const { notes, setNotes } = useContext(DataContext);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = reorder(notes, result.source.index, result.destination.index);
    setNotes(items);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("noteskey"));
    if (items) setNotes(items);
  }, [setNotes]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Form />
      {notes.length > 0 ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <Grid
                container
                style={{ marginTop: "16px" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {notes.map((note, index) => (
                  <Draggable key={note.id} draggableId={note.id} index={index}>
                    {(provided, snapshot) => (
                      <Grid
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        item
                      >
                        <Note note={note} />
                      </Grid>
                    )}
                  </Draggable>
                ))}
              </Grid>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <EmptyNotes
          Image={
            <LightbulbOutlinedIcon
              style={{ fontSize: "120px", color: "#f5f5f5" }}
            />
          }
          displayText={"Empty"}
        />
      )}
    </Box>
  );
};

export default Notes;
