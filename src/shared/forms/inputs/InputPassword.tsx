import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

interface IProps {
  id: string;
  placeholder?: string;
  required?: boolean;
}

export default function InputPassword({
  id,
  placeholder = "",
  required,
}: IProps): JSX.Element {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md" mt="2vh">
      <Input
        type={show ? "text" : "password"}
        variant="flushed"
        placeholder={placeholder}
        required={required}
        id={id}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
