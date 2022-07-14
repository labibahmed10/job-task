import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import UpdateModal from "../UpdateModal/UpdateModal";

const TableContent = ({ data, refetch }) => {
  const [singleData, setSingleData] = useState([]);
  console.log(singleData);
  const { _id } = singleData;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const updateData = { ...data, _id };
    console.log(updateData);
    fetch("http://localhost:5000/allInfoOfUser", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({ title: "Your information was updated!", icon: "success" });
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <UpdateModal register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} />
      <table className="table w-full">
        <thead>
          <tr className="text-center">
            <th>Check</th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((uData, i) => (
            <tr key={i} className="hover text-center font-semibold">
              <td>
                <input className="w-5 h-5" type="checkbox" name="checkbox" id="" />
              </td>
              <td>{i + 1}</td>
              <td>{uData?.name}</td>
              <td>{uData?.number}</td>
              <td>{uData?.email}</td>
              <td>{uData?.hobbies}</td>
              <td className="flex justify-center items-center gap-6">
                <label onClick={() => setSingleData(uData)} htmlFor="updateModal" className="modal-button">
                  <FaEdit className="w-8 h-8 cursor-pointer" />
                </label>
                <RiDeleteBin2Fill className="w-8 h-8 cursor-pointer" />
                <button className="btn btn-sm">Send</button>
              </td>
            </tr>
          ))}

          <tr className="text-center">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <label htmlFor="formModal" className="btn modal-button">
                Add New
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
