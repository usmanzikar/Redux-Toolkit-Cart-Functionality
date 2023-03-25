import React, { useState, useEffect } from "react";
import "./home.css";
import { useDispatch} from "react-redux";
import { addcart } from "../../store/slices/cartSlice";
import toast,{Toaster} from 'react-hot-toast';

const Home = () => {

  const dispatch = useDispatch();

  const additem = (products)=>{
    dispatch(addcart(products))
    toast.success("Added To Cart");
  }

  const [data, setData] = useState();

  const getProductFromApi = async () => {
    const res = await fetch(" https://fakestoreapi.com/products")
    const data = await res.json()
    setData(data);
  };
  useEffect(() => {
    getProductFromApi();
  }, []);

  return (
    <div className="container">
    <h1>Products</h1>
    <div className="row">
      {data && data.map((products)=>{
        const {id,price,title,category,image} = products;
        return(
          <div key={id} className='card'>
            <img src={image} alt="image1"  />
            <h2>{title.slice(0,9)}</h2>
            <span>${price}</span>
            <p>{category}</p>   
            <button className="card-btn" onClick={()=>additem(products)}>Add To Cart</button>
            <Toaster />
          </div>
        )
      })}
    </div>
    </div>
  );
}; 

export default Home;
