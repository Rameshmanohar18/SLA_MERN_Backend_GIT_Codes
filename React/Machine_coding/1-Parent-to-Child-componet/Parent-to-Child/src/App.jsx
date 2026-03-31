// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


import React, { useState } from "react";

function ShoppingCart() {

  const [cart, setCart] = useState({
    items: [],
    total: 0
  });

  // Add item
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.items.find(i => i.id === product.id);
      // array method to find it out

      let updatedItems;

      if (existing) {
        updatedItems = prev.items.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        updatedItems = [...prev.items, { ...product, quantity: 1 }];
      }

      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...prev,
        items: updatedItems,
        total
      };
    });
  };

  // Remove item
  const removeItem = (id) => {
    setCart(prev => {
      const updatedItems = prev.items.filter(i => i.id !== id);

      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { ...prev, items: updatedItems, total };
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(prev => {
      const updatedItems = prev.items.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      );

      const total = updatedItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return { ...prev, items: updatedItems, total };
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button
        onClick={() =>
          addToCart({ id: 1, name: "Phone", price: 10000 })
        }
      >
        Add Phone
      </button>

      {cart.items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Qty: {item.quantity}</p>
          <p>Price: {item.price}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{cart.total}</h2>
    </div>
  );
}

export default ShoppingCart;