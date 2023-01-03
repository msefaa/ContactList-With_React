import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineUserAdd, AiFillPhone, AiOutlineUser } from "react-icons/ai";
function Form({ setContacts, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });
  useEffect(() => {
    setForm({ fullname: "", phone_number: "" });
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    console.log({ form });
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    setContacts([...contacts, form]);
  };
  return (
    <Stack mt={5} spacing={4} as={"form"} w={"400"} onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <InputGroup size="md">
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineUser color="gray.300" />}
          />
          <Input
            name="fullname"
            value={form.fullname}
            placeholder="Fullname"
            onChange={onChangeInput}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Phone Number</FormLabel>

        <InputGroup>
          <InputLeftAddon children="+31" />
          <InputRightElement
            pointerEvents="none"
            children={<AiFillPhone color="gray.300" />}
          />
          <Input
            type="tel"
            name="phone_number"
            value={form.phone_number}
            placeholder="Phone Number"
            onChange={onChangeInput}
          />
        </InputGroup>

        <FormHelperText>
          We'll never share your Personel Information.
        </FormHelperText>
      </FormControl>

      <Button
        type="submit"
        mt={3}
        w={"full"}
        leftIcon={<AiOutlineUserAdd />}
        colorScheme="teal"
        variant="solid"
      >
        Add New Contact
      </Button>
    </Stack>
  );
}

export default Form;
