import React, { useState } from "react";
import Form from "./form";
import List from "./list";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "sefa",
      phone_number: "123",
    },
    {
      fullname: "aytul",
      phone_number: "456",
    },
    {
      fullname: "ekrem",
      phone_number: "678",
    },
  ]);

  return (
    <>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </>
  );
}

export default Contacts;
