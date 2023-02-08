import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Sidebar from "../components/sidebar";
import content from "../assets/images/content.jpg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FiEdit } from "react-icons/fi";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function Detail() {
  return (
    <div style={{ margin: "auto 2em" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid sm={12} md={8}>
            <div class="">
              <div className="post__container">
                <img className="post__image" src={content} alt="" />
              </div>
              <div className="post__disc p-3">
                <h1 className="text-center my-6">
                  Lorem ipsum dolor sit amet consectetur
                  <div className="float-right d-line">
                    <IconContext.Provider
                      value={{
                        size: 19,
                        color: "blue",
                        className: "post__icon",
                      }}
                    >
                      <FiEdit />
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{
                        size: 19,
                        color: "red",
                        className: "post__icon",
                      }}
                    >
                      <RiDeleteBin6Line />
                    </IconContext.Provider>
                  </div>
                </h1>
                <h2 className="my-3 flex justify-between">
                  <span>Author :Emmanuel Chukwuemeka</span>
                  <span className="pr-2">1 hour ago</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  accusamus ex modi id ducimus impedit placeat debitis provident
                  fuga aut eligendi, possimus laudantium perspiciatis sed est.
                  Dolore voluptates magni aliquid. Totam accusamus ex modi id
                  ducimus impedit placeat debitis provident fuga aut eligendi,
                  possimus laudantium perspiciatis sed est. Dolore voluptates
                  magni aliquid. Totam accusamus ex modi id ducimus impedit
                  placeat debitis provident fuga aut eligendi, possimus
                  laudantium perspiciatis sed est. Dolore voluptates magni
                  aliquid. Totam accusamus ex modi id ducimus impedit placeat
                  debitis provident fuga aut eligendi, possimus laudantium
                  perspiciatis sed est. Dolore voluptates magni aliquid.
                </p>
              </div>
            </div>
          </Grid>
          <Grid sm={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
