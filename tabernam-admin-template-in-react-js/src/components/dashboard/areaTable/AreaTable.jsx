import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";
import { useEffect, useState } from "react";
import axios from 'axios'
import UserProfile from "./UserProfile";
import Pagination from './Pagination'

const tbleheads=[
  'id',
  'name',
  'quantity',
  'price'
]
const AreaTable = () => {
  const[table,setTable]=useState([])

  const getTableData=async()=>{
    let response=await axios.get("http://localhost:3001/api/table")
    
    setTable(response.data)
  }

  useEffect(()=>{
    getTableData()
  },[])
  return (
    <>
    <div className="table-parent">
    <section className="content-area-table" style={{width:"60%",height:"90%"}}>
      <div className="data-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
             
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>

             
            </tr>
          </thead>
          <tbody>
            {table?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                   <td>{dataItem.id}</td>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.quantity}</td>
                  <td>{dataItem.price}</td>
                
                  
                 
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    </section>



    <UserProfile/>
    </div>
    <Pagination className="pagination-parent" />
    
   
  
    </>
  );
};

export default AreaTable;
