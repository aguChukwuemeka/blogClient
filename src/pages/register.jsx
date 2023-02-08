import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Register() {
  const onSubmit = (event) => {
    return event.target.value;
  };
  const handleInputChange = () => {
    return false;
  };

  console.log(handleInputChange);
  console.log(onSubmit);
  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 50vh)",
        display: "flex",
        justifyContent: "center",
        alignItems: "middle",
      }}
    >
      <div className="">
        <h1 className="my-5">Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" />
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
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
