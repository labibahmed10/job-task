import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateModal = ({ refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (updateData) => {
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
        if (data.acknowledged) {
          refetch();
          Swal.fire({ title: "Your information was updated!", icon: "success" });
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="updateModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="updateModal" class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="New Name"
              className="border px-1 rounded-md py-2 mt-6"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Your name is required!</p>}

            <input
              placeholder="New Number"
              type="number"
              className="border px-1 rounded-md py-2"
              {...register("number", { required: true })}
            />
            {errors.number && <p className="text-red-500">Your number is required!</p>}

            <input
              placeholder="New Email"
              type="email"
              className="border px-1 rounded-md py-2"
              {...register("mail", { required: true })}
            />
            {errors.mail && <p className="text-red-500">Your email is required!</p>}

            <input
              placeholder="New Hobbies"
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

export default UpdateModal;
