import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TableContent = ({ data }) => {
  console.log(data);

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
          {data?.map((uData, i) => (
            <tr class="hover text-center font-semibold">
              <td>
                <input className="w-5 h-5" type="checkbox" name="depends" id="" />
              </td>
              <td>{i + 1}</td>
              <td>{uData.name}</td>
              <td>{uData.number}</td>
              <td>{uData.email}</td>
              <td>{uData.hobbies}</td>
              <td className="flex justify-center items-center gap-6">
                <label for="updateModal" class="modal-button">
                  <FaEdit className="w-8 h-8 cursor-pointer" />
                </label>
                <RiDeleteBin2Fill className="w-8 h-8 cursor-pointer" />
                <button className="btn btn-sm">Send</button>
              </td>
            </tr>
          ))}
          {/* <tr class="hover text-center font-semibold">
            <td>
              <input className="w-5 h-5" type="checkbox" name="depends" id="" />
            </td>
            <td>1</td>
            <td>Harry Porter</td>
            <td>016302812121</td>
            <td>Purple@gmail.com</td>
            <td>Coding,lecture,paragraph</td>
            <td className="flex justify-center items-center gap-6">
              <label for="updateModal" class="modal-button">
                <FaEdit className="w-8 h-8 cursor-pointer" />
              </label>
              <RiDeleteBin2Fill className="w-8 h-8 cursor-pointer" />
              <button className="btn btn-sm">Send</button>
            </td>
          </tr> */}

          <tr className="text-center">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <label for="formModal" class="btn modal-button">
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
