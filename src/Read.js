import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const Read = () => {

  const [data, setData] = useState([]);

  function getData() {
    axios.get('https://6347b1150484786c6e8612e0.mockapi.io/stproject')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }

  function handleDelete(id){
    axios.delete(`https://6347b1150484786c6e8612e0.mockapi.io/stproject4/${id}`
    ).then(() => {
      getData();
    })
  }

  const setToLocalStorage = (id,name,email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }


  useEffect(() => {
    getData();

  }, []);

  getData();
  return (
    <>
    <h2>Read Operation</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachData) => {
      return (
        <>
        <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>
        <Link to="/update">
          <button className="btn-success" onClick={()=> setToLocalStorage(
            eachData.id, 
            eachData.name, 
            eachData.email
            )
            }>
              Edit{""}
              </button>
          </Link>
        </td>
        <td>
        <button className="btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
        </td>
      
    </tr>
  
  </tbody>
        </>
      )
    })
    
}
</table>
    </>
  )
}

export default Read