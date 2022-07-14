import React from "react";

const UpdateModal = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <div>
      <input type="checkbox" id="updateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="updateModal" className="btn btn-sm btn-circle absolute right-2 top-2">
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
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">Your email is required!</p>}

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
