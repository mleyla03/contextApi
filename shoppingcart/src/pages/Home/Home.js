import { useContext, useEffect, useState } from "react";
import "./Home.css";
import {getAllProducts } from '../../api/requests'
import { Cartcontext } from "../../context/Context";

const Home = () => {
  const[products,setProducts] = useState([]);

  useEffect(()=>{
    getAllProducts().then(data=>{
      setProducts(data);
    })
  },[])
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (
    <div className="home">
      {products.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.url} alt="" />
            <h3>{item.name} {item.surname}</h3>
            <p>{item.age} age</p>
            <h3> {item.salary}</h3>
            
            
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;