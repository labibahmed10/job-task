import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TableContent = () => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
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
          <tr class="hover text-center font-semibold">
            <td>
              <input className="w-5 h-5" type="checkbox" name="depends" id="" />
            </td>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td className="flex justify-center gap-10">
              <FaEdit className="w-8 h-8 cursor-pointer" />
              <RiDeleteBin2Fill className="w-8 h-8 cursor-pointer" />
            </td>
          </tr>
          <tr className="text-center">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {/* <button className="btn ">Add Note</button> */}
              <label for="my-modal-3" class="btn modal-button">
                open modal
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
