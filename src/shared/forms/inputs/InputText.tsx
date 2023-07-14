import { Input } from "@chakra-ui/react";
import React from "react";

interface IProps {
  id: string;
  placeholder?: string;
  required?: boolean;
}

export default function InutText({
  id,
  placeholder = "",
  required,
}: IProps): JSX.Element {
  return (
    <Input
      variant="flushed"
      placeholder={placeholder}
      required={required}
      id={id}
    />
  );
}
