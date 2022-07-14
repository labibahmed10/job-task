import React from "react";
import { useQuery } from "react-query";
import FormModal from "../FormModal/FormModal";
import TableContent from "../TableContent/TableContent";
import UpdateModal from "../UpdateModal/UpdateModal";

const HomePage = () => {
  const { isLoading, error, data, refetch } = useQuery("userData", () =>
    fetch("http://localhost:5000/allInfoOfUser").then((res) => res.json())
  );

  return (
    <section>
      <TableContent data={data} refetch={refetch} />
      <FormModal refetch={refetch} />
    </section>
  );
};

export default HomePage;
