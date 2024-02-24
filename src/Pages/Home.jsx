import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardRender from '../Components/CardRender';

export const Home = () => {
const [products,setProducts ] = useState([]);
//Logout
const navigate = useNavigate();
const logoutHandle = () => {
    alert('User Logged Out...')
    navigate('/login');
  };
  //Api Fetch

  useEffect(()=>{
    getData();
  },[]);
  const getData = () =>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
    // console.log(response.data)
    setProducts(response.data);
    })
    .catch((error)=>{
        console.log(error)
    });
  }
  return ( 
    <div>
    <div className="container d-flex">
      <h3><b>WelCome To Home Page</b></h3>
      <button onClick={logoutHandle} className='btn-danger rounded'>Logout</button>
      </div>
      <br /><br />
      <div className="container" style={{display:'flex',flexWrap:'wrap',gap:'50px'}}>
        {
          products.map((k,l)=>(
            <CardRender key={l}
            title={k.title}
            image={k.image}
            desc={k.description}
            id={k.id}
           />
          ))
        }
 
      </div>
    </div>
  )
}


