import React from "react";
import FormModal from "../FormModal/FormModal";
import TableContent from "../TableContent/TableContent";
import UpdateModal from "../UpdateModal/UpdateModal";

const HomePage = () => {
  return (
    <section>
      <TableContent />
      <FormModal />
      <UpdateModal />
    </section>
  );
};

export default HomePage;
