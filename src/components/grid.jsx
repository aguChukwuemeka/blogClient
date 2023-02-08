import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Sidebar from "./sidebar";
import axios from "axios";
import Cards from "./card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const fetchPosts = async (posts) => {
      const res = await axios.get("/posts");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [posts]);
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid sm={12} md={8}>
          <Cards posts={posts} />
        </Grid>
        <Grid sm={12} md={4}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
}
