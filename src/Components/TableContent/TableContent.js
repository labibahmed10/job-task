import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import UpdateModal from "../UpdateModal/UpdateModal";
import emailjs from "@emailjs/browser";

const TableContent = ({ data, refetch }) => {
  // to update a user information
  const [singleData, setSingleData] = useState([]);
  const { _id } = singleData;

  // query form
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

  // function to delete a user
  const deleteUserInfo = (uData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteUser/${uData?._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  // checking value of individual and sending them in email
  const [checked, isChecked] = useState(false);
  const { name, email, number, hobbies } = checked;

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
                <input onChange={() => isChecked(uData)} type="checkbox" className="checkbox" />
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
                <RiDeleteBin2Fill onClick={() => deleteUserInfo(uData)} className="w-8 h-8 cursor-pointer" />
                <button className="btn btn-sm">
                  {checked ? (
                    <a href={`mailto: info@redpositive.in?body=${[name, number, email, hobbies]}`}>Send</a>
                  ) : (
                    <div>Send</div>
                  )}
                </button>
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
