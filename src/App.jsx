import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import Home from "./components/Home/Home"
import Footer from "./components/Shared/Footer"
import Nav from "./components/Shared/Nav"
import { useProducts } from "./hooks/useLoadProducts"

export const ProductContext = createContext();

function App() {
  const products = useProducts();
  const [cartItems, setCartItems] = useState([]);

  //add to cart
  const addToCart = (item) => {
    let isPresent = false;
    cartItems.forEach(product => {
      if (item._id === product._id)
        isPresent = true;
    })
    if (isPresent) {
      alert('Item is already added to your cart');
      return;
    }
    setCartItems([...cartItems, item]);
  }

  //increment or decrement item quantity from cart
  const handleChange = (item, d) => {
    let ind = -1;
    cartItems.forEach((data, index) => {
      if (data._id === item._id)
        ind = index;
    });
    const tempArr = cartItems;
    tempArr[ind].quantity += d;

    if (tempArr[ind].quantity === 0)
      tempArr[ind].quantity = 1;
    setCartItems([...tempArr])
  }

  return (
    <ProductContext.Provider value={products}>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={
          <Home addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleChange={handleChange} />}
        />
      </Routes>
      <Footer />
    </ProductContext.Provider>
  )
}

export default App
