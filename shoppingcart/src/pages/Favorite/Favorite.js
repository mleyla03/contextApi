import { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import "./Favorite.css";

const Favorite= () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;


  return (
    <div className="cart">
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.url} alt="" />
            <h3>{item.name}</h3>
            <h3>{item.surname}</h3>
            <p> {item.age} age</p>
            <h3>{item.salary}</h3>
            
            <button onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              delete
            </button>
          </div>
        );
      })}
   
    </div>
  );
};

export default Favorite;