import { createContext, useState } from "react";

//interface context
interface ICartContext {
  children: React.ReactNode;
}

// interface statecart
interface ICartItem {
  id: number;
  qty: number;
}

//values context
interface IValueContext {
  cart: ICartItem[],
  addToCart: (id: number) => void,
}

export const CartContext = createContext({} as IValueContext);

export function CartContaxtProvider({ children }: ICartContext) {
  const [cart, setCart] = useState<ICartItem[]>([]);

  const addToCart = (id: number) => {
    // 2
    setCart((currentItems) => {
        //3 , 4
      let selectedItem = currentItems.find((item) => item.id == id);
      //5
      if (selectedItem == null) {
        //6
        return [...currentItems, { id: id, qty: 1 }];
        //7
      } else {
        //7
        return currentItems.map((item) => {
            //8
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
            //9
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
  );
}
