import { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

// Components
import StarredNote from "./StarredNote";
import EmptyNotes from "../EmptyNotes";

import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// Using Key here to avoid the Warning in the React Code
const StarredNotes = () => {
  const { starNotes, setStarredNotes } = useContext(DataContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("starNotesKey"));
    if (items) setStarredNotes(items);
  }, [setStarredNotes]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      {starNotes.length > 0 ? (
        <Grid container style={{ marginTop: "16px" }}>
          {starNotes.map((note) => {
            return (
              <Grid item key={note.id}>
                <StarredNote note={note} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <EmptyNotes
          Image={
            <StarBorderOutlinedIcon
              style={{ fontSize: "120px", color: "#f5f5f5" }}
            />
          }
          displayText={"Enjoy , No Important Notes"}
        />
      )}
    </Box>
  );
};

export default StarredNotes;
