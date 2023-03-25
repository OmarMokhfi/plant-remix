import { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(new Map());
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    if (!items.has(item.slug)) {
      setItems(items.set(item.slug, item));
      setTotal(total + 1);
    } else {
      setItems(items.set(item.slug, { ...item }));
    }
  };

  const removeItem = (item) => {
    if (items.get(item.slug)) {
      let temp = items;
      temp.delete(item.slug);
      setItems(temp);
      setTotal(total - 1);
    }
  };

  const updateItem = (slug, quantity) => {
    if (items.has(slug)) {
      setItems(items.set(slug, { ...items.get(slug), quantity }));
    }
  };

  return (
    <CartContext.Provider
      value={{
        total,
        items: Array.from(items.values()),
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function withCart(Component) {
  return function StageComponent(props) {
    return (
      <CartContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />}
      </CartContext.Consumer>
    );
  };
}
