import React from "react";

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover text-center">
            <th>
              <input type="checkbox" name="depends" id="" />
            </th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
          </tr>
          <tr className="text-center+">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button>Hello</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableContent;
