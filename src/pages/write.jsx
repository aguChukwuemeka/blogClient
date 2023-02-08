import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FcAddImage } from "react-icons/fc";
import { Grid, Button, TextField } from "@mui/material";
import content from "../assets/images/content.jpg";


const defaultValues = {
  title: "",
  image: "",
  description: "",
};

export default function Write() {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <React.Fragment>
      <img src={content} style={{marginBottom: "05em", padding: "0", width: "100%", height: "50vh"}}  alt="" />
      <form onSubmit={handleSubmit}>
        <div className="flex w-75 mx-auto flex-wrap">
          <div className="grow m-3">
            <div className="flex gap-4 my-4">
              <Grid item>
                <label htmlFor="image-input">
                  <IconContext.Provider
                    value={{ size: 30, className: "image__upload" }}
                  >
                    <FcAddImage />
                  </IconContext.Provider>
                </label>
                <input
                  type="file"
                  name="image"
                  id="image-input"
                  value={formValues.image}
                  style={{ display: "none" }}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item className="grow">
                <TextField
                  id="title-input"
                  name="title"
                  fullWidth
                  label="Title"
                  
                  type="text"
                  value={formValues.title}
                  onChange={handleInputChange}
                />
              </Grid>
            </div>
            <Grid item>
              <TextField
                id="description-input"
                name="description"
                label="Description"
                multiline
                fullWidth
                rows={10}
                type="areatext"
                value={formValues.description}
                onChange={handleInputChange}
              />
            </Grid>
          </div>

          <div className="button__container ms-auto">
            <Button
              variant="contained"
              className="flex"
              color="primary"
              type="submit"
            >
              Publish
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}
