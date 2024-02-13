import  './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../../dataTableSource';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';


const Datatable = ({columns}) => { 

  const location = useLocation();
  const path= location.pathname.split("/")[1];
  // console.log(location);
  // console.log(path);
  const {data,loading,error} = useFetch( `/${path}`); 
  // console.log(data);
  //whenever "data" changes;update this list
  const[list, setList] =  useState([]);

  useEffect(()=>{
    setList(data);
  },[data])

  const handleDelete = async (id)=>{
    try{
      //delete item; 
      await axios.delete(`/${path}/${id}`);
      //successful deletion; filter the  list
      setList(list.filter( (item)=> item._id !== id));
    }catch(err){
      console.log(err);
    }
  
  }

  const actionColumn=[
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params)=>{
        return(
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButtonn">View</div>
            </Link>
              <div className="deleteButton"
              onClick={()=> handleDelete(params.row._id)}> Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link to={`/${path}/new`}className="link">
          Add new {path}
        </Link>
      </div>
      {!loading &&(
      <DataGrid
        
         className="datagrid"
        //  rows={data}
        //  columns={userColumns.concat(actionColumn)}
        //  pageSize={9}
        //  rowsPerPageOptions={[9]}
        //  checkboxSelection
        //  getRowId={(row) => row._id}
        rows={list}// (data) from use fetch
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0,pageSize:10},
          },
        }}
        // pageSizeOptions={[5, 10]}
        // checkboxSelection
        getRowId={(row)=>row._id} //to get unique_id of stored users
      />)}
    </div>
  )
}

export default Datatable
