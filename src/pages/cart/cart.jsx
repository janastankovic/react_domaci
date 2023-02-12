import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import Paginacija from "../../components/paginacija/paginacija";


export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const proizvodiKolica = [];
    for (const product of PRODUCTS) {
        if (cartItems[product.id] !== 0) {
            proizvodiKolica.push(product);
            console.log(product.id);
        }
    }


  const BROJ_PROIZVODA_PO_STRANI = 3;
  const pages = Math.ceil(proizvodiKolica.length / BROJ_PROIZVODA_PO_STRANI);
  const firstIndex = (currentPage - 1) * BROJ_PROIZVODA_PO_STRANI;
  const lastIndex = currentPage * BROJ_PROIZVODA_PO_STRANI;
  const prikazaniProizvodi = proizvodiKolica.slice(firstIndex, lastIndex);

  return (
    <div className="cart">
      <div>
        <h1>Proizvodi u korpi</h1>
      </div>
      <div className="cart">
        {prikazaniProizvodi.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Ukupno: {totalAmount} RSD</p>
          <button onClick={() => navigate("/")}> Nastavi sa kupovinom </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Završi sa kupovinom{" "}
          </button>
        </div>
      ) : (
        <h1> Tvoja korpa je prazna</h1>
      )}
       <Paginacija pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}  />
    </div>
    
  );
 
};