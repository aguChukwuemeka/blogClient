import React from "react";
// import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Sidebar from "../components/sidebar";
import content from "../assets/images/content.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

export default function Settings() {
  return (
    <div style={{ margin: "auto 2em" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid sm={12} md={8}>
            <div className="">
              <h1>Update Your Profile</h1>
              <h2 className="my-3 flex justify-between">
                <span>Profile Picture</span>
                <span className="pr-2">Delete Account</span>
              </h2>
              <div className="user__container">
                <img
                  className="user__picture rounded-circle"
                  src={content}
                  alt=""
                />
                <Badge bg="secondary">New</Badge>
              </div>
              <div className="post__disc p-3">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your username"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button variant="primary block ms-auto" type="submit">
                    Update
                  </Button>
                </Form>
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
