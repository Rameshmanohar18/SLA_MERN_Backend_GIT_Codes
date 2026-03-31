// import React, { useState } from "react";

// function MegaApp() {

//   // 🔹 Primitive States
//   const [count, setCount] = useState(0);          // number
//   const [search, setSearch] = useState("");       // string
//   const [isDark, setIsDark] = useState(false);    // boolean
//   const [loading, setLoading] = useState(false);  // boolean

//   // 🔹 Object State
//   const [user, setUser] = useState({
//     name: "",
//     email: ""
//   });

//   // 🔹 Array State
//   const [cart, setCart] = useState([]);

//   // 🔥 Add to Cart
//   const addToCart = (product) => {
//     setCart(prev => {
//       const exists = prev.find(i => i.id === product.id);

//       if (exists) {
//         return prev.map(i =>
//           i.id === product.id
//             ? { ...i, quantity: i.quantity + 1 }
//             : i
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   // 🔥 Remove from Cart
//   const removeItem = (id) => {
//     setCart(prev => prev.filter(i => i.id !== id));
//   };

//   // 🔥 Handle Form
//   const handleChange = (e) => {
//     setUser(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   // 🔥 Fake API Call
//   const loadData = () => {
//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       alert("Data Loaded");
//     }, 2000);
//   };

//   // 🔥 Derived State (Total)
//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   // 🔥 Filter Products (Search)
//   const products = [
//     { id: 1, name: "Phone", price: 10000 },
//     { id: 2, name: "Laptop", price: 50000 }
//   ];

//   const filtered = products.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ background: isDark ? "#333" : "#fff", color: isDark ? "#fff" : "#000" }}>

//       <h1>🔥 Mega React App</h1>

//       {/* 🔥 Toggle Theme */}
//       <button onClick={() => setIsDark(prev => !prev)}>
//         Toggle Theme
//       </button>

//       {/* 🔥 Counter */}
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(prev => prev + 1)}>+</button>

//       {/* 🔥 Search */}
//       <input
//         placeholder="Search product"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🔥 Products */}
//       {filtered.map(p => (
//         <div key={p.id}>
//           <h3>{p.name}</h3>
//           <p>₹{p.price}</p>
//           <button onClick={() => addToCart(p)}>Add</button>
//         </div>
//       ))}

//       {/* 🔥 Cart */}
//       <h2>Cart</h2>
//       {cart.map(item => (
//         <div key={item.id}>
//           <p>{item.name} x {item.quantity}</p>
//           <button onClick={() => removeItem(item.id)}>Remove</button>
//         </div>
//       ))}

//       <h3>Total: ₹{total}</h3>

//       {/* 🔥 Form */}
//       <h2>User Form</h2>
//       <input
//         name="name"
//         placeholder="Name"
//         value={user.name}
//         onChange={handleChange}
//       />
//       <input
//         name="email"
//         placeholder="Email"
//         value={user.email}
//         onChange={handleChange}
//       />

//       <p>{user.name} - {user.email}</p>

//       {/* 🔥 Loading */}
//       <button onClick={loadData}>Load Data</button>
//       {loading && <p>Loading...</p>}

//     </div>
//   );
// }

// export default MegaApp;


import React, { useState } from "react";

function MegaApp() {
  const [count, setCount] = useState(0);
  console.log("🌽 count", count);

  const [search, setSearch] = useState("");
  console.log("🍅 search", search);

  const [isDark, setIsDark] = useState(false);
  console.log("💣 isDark", isDark);

  const [loading, setLoading] = useState(false);
  console.log("🦀 loading", loading);

  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {

      console.log("🫒 user", user);

      const exists = prev.find(i => i.id === product.id);

      if (exists) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const handleChange = (e) => {
    setUser(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Data Loaded");
    }, 2000);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const products = [
    { id: 1, name: "Phone", price: 10000 },
    { id: 2, name: "Laptop", price: 50000 }
  ];

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen p-6`}>
      
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">🔥 Mega React App</h1>
          <button
            onClick={() => setIsDark(prev => !prev)}
            className="px-4 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            Toggle Theme
          </button>
        </div>

        {/* Counter */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Count: {count}</h2>
          <button
            onClick={() => setCount(prev => prev + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Increment
          </button>
        </div>

        {/* Search */}
        <input
          className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-indigo-400 outline-none"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="p-5 rounded-2xl shadow bg-white/10 backdrop-blur-md">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-sm opacity-70 mb-3">₹{p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="p-5 rounded-2xl shadow bg-white/10 backdrop-blur-md">
          <h2 className="text-xl font-semibold mb-4">🛒 Cart</h2>

          {cart.length === 0 ? (
            <p className="opacity-60">Cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <p>{item.name} x {item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))
          )}

          <h3 className="mt-4 font-bold">Total: ₹{total}</h3>
        </div>

        {/* Form */}
        <div className="p-5 rounded-2xl shadow bg-white/10 backdrop-blur-md space-y-3">
          <h2 className="text-xl font-semibold">User Form</h2>

          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange} 
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <p className="text-sm opacity-70">
           Username is:- {user.name} &  Email Id is:- {user.email}
          </p>
        </div>

        {/* Loading */}
        <div className="text-center">
          <button
            onClick={loadData}
            className="px-6 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600"
          >
            Load Data
          </button>

          {loading && <p className="mt-2 animate-pulse">Loading...</p>}
        </div>

      </div>
    </div>
  );
}

export default MegaApp;