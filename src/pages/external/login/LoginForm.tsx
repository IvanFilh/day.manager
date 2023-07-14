import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
  } from "@chakra-ui/react";
  import React from "react";

import InputText from "../../../shared/forms/inputs/InputText";
import InputPassword from "../../../shared/forms/inputs/InputPassword";

  
  export default function LoginForm() {
    return (
      <Card>
        <CardHeader>
          <Heading size="md" alignItems={"center"}>
            Enter
          </Heading>
        </CardHeader>
        <CardBody>
          <InputText id="login" placeholder="Login" required />
          <InputPassword id="login" placeholder="Password" required />
          <Button colorScheme="teal" size="md" mt="2vh" w="full" type="submit">
            Enter
          </Button>
        </CardBody>
      </Card>
    );
  }
  