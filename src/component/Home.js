import React from "react";
import Header from "./Header";
import FormAddNew from "./FormAddNew";
import TableUser from "./TableUser";

function Home(props) {
  return (
    <>
      <Header />
      <FormAddNew />
      <TableUser />
    </>
  );
}

export default Home;
