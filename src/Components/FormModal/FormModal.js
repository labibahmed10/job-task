import React from "react";
import { useForm } from "react-hook-form";

// export default function FormModal() {
//   const { register, formState: { errors }, handleSubmit } = useForm();

//   const onSubmit = (data) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true })} />
//       {errors.firstName?.type === 'required' && "First name is required"}

//       <input {...register("lastName", { required: true })} />
//       {errors.lastName && <p>Last name is required</p>}

//       <input {...register("mail", { required: "Email Address is required" })} />
//       <p>{errors.mail?.message}</p>

//       <input type="submit" />
//     </form>
//   );
// }

const FormModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* //  <!-- The button to open modal --> */}

      {/* // <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input className="border px-1 rounded-md py-2 mt-6" {...register("name", { required: true })} />
            {errors.name && <p>Your name is required</p>}

            <input
              type="number"
              className="border px-1 rounded-md py-2"
              {...register("number", { required: true })}
            />
            {errors.number && <p>Please give your number</p>}

            <input
              type="email"
              className="border px-1 rounded-md py-2"
              {...register("mail", { required: true })}
            />
            {errors.mail && <p>Please provide your email</p>}

            <input className="border px-1 rounded-md py-2" {...register("hobbies", { required: true })} />
            {errors.hobbies && <p>Write your hobbies. (exm: Coding, writing articles etc)</p>}

            <input className="border rounded-md py-2 cursor-pointer" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
