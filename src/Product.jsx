import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Ui from './Ui';
import './nav.css';

const Products = () => {

    let [products,setProducts] = useState([]);
  
    const getdata = async () => {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
      setProducts(data);
    };
  
    useEffect(() => {
      getdata();
    }, []);
  
    return (
      <div className="main">
        {
          products.map((product) => (
            <Ui {...product} />
          ))
        }
      </div>
    )
  }

export default Products;
