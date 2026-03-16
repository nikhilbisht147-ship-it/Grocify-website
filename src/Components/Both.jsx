import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // ⭐ YOUR WISHLIST STATE (cartItem)
  const [cartItem, setCartItem] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(cartItem));
  }, [cartItem]);



  // ⭐ ADD TO CART STATE
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  // ⭐ YOUR WISHLIST TOGGLE (UNCHANGED)
  const toggleCart = (product) => {

    setCartItem((prev) => {

      const exists = prev.find(item => item.name === product.name);

      if (exists) {
        return prev.filter(item => item.name !== product.name);
      } else {
        return [...prev, product];
      }

    });

  };



  // ⭐ ADD TO CART FUNCTION
  const addToCart = (product) => {

    setCart((prev) => {

      const exists = prev.find(item => item.name === product.name);

      if (exists) {
        return prev.filter(item => item.name !== product.name);
      } else {
        return [...prev, product];
      }

    });

  };



  return (
    <CartContext.Provider value={{ cartItem, toggleCart, cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);