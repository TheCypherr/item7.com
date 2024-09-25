import React, { useContext } from "react";
import { CartContext } from "../../../utils/CartContext";
import { RiDeleteBinFill } from "react-icons/ri";
import "./CartPage.css";

const CartPage = () => {
  const {
    cart,
    cartItems,
    increaseCounter,
    decreaseCounter,
    deleteTask,
    foodTotal,
    handleShippingChange,
    finalTotal,
  } = useContext(CartContext);

  if (!cart || !cartItems) {
    return <p>Loading...</p>; // Handle cases where data might not be available
  }

  return (
    <section className="cart-wrapper">
      {/* LEFT SIDE */}
      <div className="cart-side1">
        <div className="f-one">
          <h1>Your Cart</h1>
          <p>{cart.length} foods</p>
        </div>

        <div
          className="underline"
          style={{ borderBottom: "1px solid #cbcaca" }}
        />

        {cart.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty!
            <br />
            Place an Order.
          </p>
        ) : (
          cart.map((item) => (
            <div className="cart-dets" key={item.id}>
              <div className="flex-image">
                <img src={item.image} alt={item.name} />
                <div className="small">
                  <h3>{item.name}</h3>
                  <p>N{item.price * cartItems[item.id]?.count},000</p>
                </div>
              </div>

              <div className="counter">
                <button
                  className="counter-btn"
                  onClick={() => decreaseCounter(item.id)}
                >
                  -
                </button>
                <p className="count-display">
                  {cartItems[item.id]?.count || 0}
                </p>
                <button
                  className="counter-btn"
                  onClick={() => increaseCounter(item.id)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-item"
                onClick={() => deleteTask(item.id)}
              >
                <RiDeleteBinFill />
              </button>

              <div
                className="underline"
                style={{ borderBottom: "1px solid #cbcaca" }}
              ></div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="cart-side2">
        <h1>Summary</h1>
        <div
          className="underline1"
          style={{ borderBottom: "1px solid #fff" }}
        />
        <div className="item">
          <p>{cart.length} foods</p>
          <p>N{foodTotal},000</p>
        </div>

        <div className="shipping">
          <h3>DELIVERY</h3>
          <select name="shipping" onChange={handleShippingChange}>
            <option value="Standard-Delivery-N15">
              Standard-Delivery-N1,000
            </option>
            <option value="Next day-Delivery-N20">
              Next day-Delivery-N2,000
            </option>
            <option value="Express-Delivery-N25">
              Express-Delivery-N3,000
            </option>
          </select>
        </div>

        <div
          className="underline0"
          style={{ borderBottom: "1px solid #fff" }}
        />

        <div className="total-price">
          <span>TOTAL PRICE</span>
          <span>N{finalTotal},000</span>
        </div>
        <button className="btn10">CHECK OUT</button>
      </div>
    </section>
  );
};

export default CartPage;

// import React, { useContext } from "react";
// import { CartContext } from "../../utils/CartContext";
// import { RiDeleteBinFill } from "react-icons/ri";
// import "./CartPage.css";

// const CartPage = () => {
//   // Use the useContext hook to access the cart from CartContext
//   const { cart, cartItems, addToCart, increaseCounter } =
//     useContext(CartContext);

//   return (
//     <section className="cart-wrapper">
//       <div className="cart-side1">
//         <div className="f-one">
//           <h1>Your Cart</h1>
//           <p>{cart.length} foods</p>
//         </div>

//         <div
//           className="underline"
//           style={{ borderBottom: "1px solid #cbcaca" }}
//         />
//         {cart.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           // Left Side
//           cart.map((item) => (
//             <div className="cart-dets" key={item.id}>
//               <div className="flex-image">
//                 <img src={item.image} alt={item.name} />
//                 <div className="small">
//                   <h3>{item.name}</h3>
//                   <p>N{item.price * item.count}</p>
//                 </div>
//               </div>

//               <div className="counter">
//                 <button
//                   className="counter-btn"
//                   onClick={() => decreaseCounter(item.id)}
//                 >
//                   -
//                 </button>
//                 <p className="count-display">{item.count}</p>
//                 <button
//                   className="counter-btn"
//                   onClick={() => increaseCounter(item.id)}
//                 >
//                   +
//                 </button>
//               </div>

//               <button
//                 className="remove-item"
//                 onClick={() => deleteTask(item.id)}
//               >
//                 <RiDeleteBinFill />
//               </button>

//               <div
//                 className="underline"
//                 style={{ borderBottom: "1px solid #cbcaca" }}
//               ></div>
//             </div>
//           ))
//         )}
//       </div>
//       {/* Right Side */}
//       <div className="cart-side2">Details2</div>
//     </section>
//   );
// };

// export default CartPage;
