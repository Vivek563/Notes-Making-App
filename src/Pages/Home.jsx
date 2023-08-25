import SwipeDrawer from "../components/SwipeDrawer";
import Notes from "../components/Notes/Notes";
import StarredNotes from "../components/StarredNotes/StarredNotes";
import Archives from "../components/ArchivedNotes/Archives";
import DeletedNotes from "../components/DeletedNotes/DeletedNotes";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/starred" element={<StarredNotes />} />
          <Route path="/archived" element={<Archives />} />
          <Route path="/trashed" element={<DeletedNotes />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
