import { createContext, useContext, useReducer } from "react";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddItem":
      {
        const existingItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) => {
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item;
            }),
            totalQuantity: state.totalQuantity + 1,
            totalPrice: state.totalPrice + action.payload.price,
          };
        }
      }

      break;

    default:
      break;
  }
};
const CartContext = createContext();
const cartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
