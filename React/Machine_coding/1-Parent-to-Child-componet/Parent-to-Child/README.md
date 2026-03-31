# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!--
Okay da deii 🔥
This is a **real-world `useState` pattern**, I’ll break it **step-by-step so you fully understand what’s happening inside**.

---

# 🔥 1️⃣ What is happening in `useState` here?

```javascript
const [cart, setCart] = useState({
  items: [],
  total: 0
});
```

### Meaning:

| Part      | Explanation              |
| --------- | ------------------------ |
| `cart`    | current state (object)   |
| `setCart` | function to update state |
| `items`   | array of products        |
| `total`   | total price              |

👉 So state looks like:

```text
cart = {
  items: [],
  total: 0
}
```

---

# 🔥 2️⃣ Why we use `setCart(prev => {...})`

```javascript
setCart(prev => { ... })
```

👉 This is **functional update**

### Why?

```text
React state updates are asynchronous
So we use "prev" to always get latest value
```

---

# 🔥 3️⃣ Add to Cart (Deep Explanation)

```javascript
const existing = prev.items.find(i => i.id === product.id);
```

👉 Checks:

```text
Is product already in cart?
```

---

## Case 1: Product already exists

```javascript
updatedItems = prev.items.map(i =>
  i.id === product.id
    ? { ...i, quantity: i.quantity + 1 }
    : i
);
```

👉 What happens:

```text
Loop through items
If ID matches → increase quantity
Else → keep item same
```

---

## Case 2: New Product

```javascript
updatedItems = [...prev.items, { ...product, quantity: 1 }];
```

👉 What happens:

```text
Create new array
Add product with quantity = 1
```

---

## Total Calculation

```javascript
const total = updatedItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
```

👉 What happens:

```text
Loop all items
price * quantity
Add everything → total
```

---

## Final State Update

```javascript
return {
  ...prev,
  items: updatedItems,
  total
};
```

👉 Important:

```text
Spread old state
Update only items & total
```

---

# 🔥 4️⃣ Remove Item

```javascript
const updatedItems = prev.items.filter(i => i.id !== id);
```

👉 What happens:

```text
Remove item with matching ID
```

---

Then:

```javascript
return { ...prev, items: updatedItems, total };
```

👉 Update state with new items + total

---

# 🔥 5️⃣ Increase Quantity

```javascript
const updatedItems = prev.items.map(i =>
  i.id === id ? { ...i, quantity: i.quantity + 1 } : i
);
```

👉 What happens:

```text
Find item
Increase quantity
Keep others same
```

---

# 🔥 6️⃣ Rendering (UI Part)

```javascript
{cart.items.map(item => (
```

👉 Loop through items and display:

```text
Name
Quantity
Price
Buttons
```

---

# 🔥 7️⃣ Event Flow (VERY IMPORTANT)

### When user clicks button:

```javascript
onClick={() => addToCart(product)}
```

Flow:

```text
Click button
   ↓
addToCart() runs
   ↓
setCart() updates state
   ↓
React re-renders component
   ↓
UI updates
```

---

# 🔥 8️⃣ Methods Used (IMPORTANT 🔥)

These are core JavaScript methods you used:

---

## 1. `.find()`

```javascript
prev.items.find(i => i.id === product.id)
```

👉 Finds **first matching item**

---

## 2. `.map()`

```javascript
prev.items.map(...)
```

👉 Used to **update items**

---

## 3. `.filter()`

```javascript
prev.items.filter(i => i.id !== id)
```

👉 Used to **remove items**

---

## 4. `.reduce()`

```javascript
updatedItems.reduce(...)
```

👉 Used to **calculate total**

---

## 5. Spread Operator `...`

```javascript
...prev
...i
...product
```

👉 Used for:

```text
Copy objects/arrays (immutability)
```

---

# 🔥 9️⃣ Why this code is IMPORTANT

```text
✔ Follows immutability
✔ Uses functional updates
✔ Handles nested state
✔ Real-world logic
✔ Used in e-commerce apps
```

---

# 🔥 🔟 Common Mistake (DON’T DO THIS)

❌ Wrong:

```javascript
cart.items.push(product)
setCart(cart)
```

👉 Problem:

```text
React won’t detect change properly
No re-render sometimes
```

---

# ✅ Correct Pattern (YOU USED 🔥)

```javascript
setCart(prev => ({
  ...prev,
  items: [...prev.items, product]
}))
```

---

# 🧠 Final Understanding

```text
useState here manages a complex object (cart)

setCart:
✔ Uses prev state
✔ Updates immutably
✔ Recalculates derived data (total)
✔ Triggers re-render
```

---

# 🔥 Interview One-Liner

👉

> This code uses useState to manage a complex cart object, updates items immutably using map, filter, and spread operators, and calculates derived state (total) using reduce while ensuring React re-renders efficiently.

---

If you want da deii 😎
Next I can:

🔥 Convert THIS into `useReducer` (used in big apps like Amazon)
🔥 Add API integration (real backend cart)
🔥 Add quantity decrease + edge cases

That’s **next-level React 🔥**


 -->
