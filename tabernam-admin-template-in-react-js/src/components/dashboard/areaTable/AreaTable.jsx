import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import { useEffect, useState } from "react";
import axios from 'axios'
import UserProfile from "./UserProfile";
import Pagination from './Pagination'

const tableHeads = ['ID', 'Name', 'Quantity', 'Price'];

const AreaTable = () => {
  const [table, setTable] = useState([]);

  const getTableData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/table");
      setTable(response.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <>
    <div className="table-parent">
      <section className="content-area-table" style={{ width: "60%", height: "90%" }}>
        <div className="data-table-info">
          <h4 className="data-table-title">Latest Orders</h4>
        </div>
        <div className="data-table-diagram">
          <table>
            <thead>
              <tr>
                {tableHeads.map((head) => (
                  <th key={head}>{head}</th>
                ))}
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {table.map((dataItem) => (
                <tr key={dataItem.id}>
                  <td>{dataItem.id}</td>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.quantity}</td>
                  <td>{dataItem.price}</td>
                  {/* <td className="dt-cell-action">
                    <AreaTableAction />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <UserProfile />
    </div>
      <Pagination/>
      </>
  );
};

export default AreaTable;
