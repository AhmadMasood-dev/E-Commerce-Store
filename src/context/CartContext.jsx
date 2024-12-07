import { createContext, useContext, useReducer } from "react";
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddItem": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }

    default:
      return state; // Ensure we return the current state for unhandled actions
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Use PascalCase for component names
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
