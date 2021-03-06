import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormModal = ({ refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (userData) => {
    console.log(userData);

    fetch("http://localhost:5000/addInfoOfUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          refetch();
          Swal.fire({ title: "Thanks for sharing your information!", icon: "success" });
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="formModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="formModal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Your Name"
              className="border px-1 rounded-md py-2 mt-6"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Your name is required!</p>}

            <input
              placeholder="Your Number"
              type="number"
              className="border px-1 rounded-md py-2"
              {...register("number", { required: true })}
            />
            {errors.number && <p className="text-red-500">Your number is required!</p>}

            <input
              placeholder="Your Email"
              type="email"
              className="border px-1 rounded-md py-2"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Your email is required!</p>}

            <input
              placeholder="Your Hobbies"
              className="border px-1 rounded-md py-2"
              {...register("hobbies", { required: true })}
            />
            {errors.hobbies && (
              <p className="text-red-500">Write your hobbies (exm: Coding, writing articles etc)</p>
            )}

            <input className="border rounded-md py-2 cursor-pointer btn" type="submit" value="Save" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
