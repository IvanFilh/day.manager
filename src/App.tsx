import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Router from "./routing/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Router />
  </ChakraProvider>
);
