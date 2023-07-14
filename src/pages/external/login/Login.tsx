import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <VStack>
      <Container maxW="md" m="20vh">
        <LoginForm />
      </Container>
    </VStack>
  );
}
