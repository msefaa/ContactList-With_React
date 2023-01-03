import React, { useState } from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Accordion,
  HStack,
  Icon,
  Divider,
  Input,
  InputLeftElement,
  InputGroup,
  Heading,
} from "@chakra-ui/react";
import { AiFillPhone, AiOutlineUser } from "react-icons/ai";
function List({ contacts }) {
  const [filtertext, setFiltertext] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filtertext.toLowerCase())
    );
  });
  return (
    <>
      <div>
        <Heading mt={3} mb={5} textAlign="center">
          Contact List
        </Heading>
        <InputGroup size="md" mt={5} mb={5}>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineUser color="gray.300" />}
          />
          <Input
            placeholder="Filter Contact"
            value={filtertext}
            onChange={(e) => setFiltertext(e.target.value)}
          />
        </InputGroup>

        <Divider orientation="horizontal" />
      </div>
      <Accordion defaultIndex={[0]} allowMultiple>
        {filtered.map((c, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <HStack spacing={8}>
                    <AiOutlineUser />
                    <div>{c.fullname.toUpperCase()}</div>
                  </HStack>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
              <HStack
                sx={{
                  justifyContent: "space-between",
                }}
                spacing={8}
              >
                <div>+31 {c.phone_number}</div>
                <Icon as={AiFillPhone} mr={0} />
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default List;
