'use client'

import React, { useState } from "react"
import ImageCard from "./components/ImageCard"
import data from "@/data/data.json"
import Cart from "./components/Cart"

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const Page: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Atualiza a quantidade de um item no carrinho
  const handleChangeAmount = (name: string, price: number, quantity: number) => {
    setCart(prevCart => {
      if (quantity === 0) {
        return prevCart.filter(item => item.name !== name);
      }
      const exists = prevCart.find(item => item.name === name);
      if (exists) {
        return prevCart.map(item =>
          item.name === name ? { ...item, quantity } : item
        );
      }
      return [...prevCart, { name, price, quantity }];
    });
  };

  // Remove um item do carrinho
  const handleRemoveItem = (name: string) => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  // Limpa o carrinho
  const handleClearCart = () => setCart([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_350px] gap-6 p-6 min-h-screen">
      <main>
        <h1 className="text-4xl text-c-rose-900 font-bold">Desserts</h1>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {data.map(item => {
            const quantity = cart.find(c => c.name === item.name)?.quantity || 0;
            return (
              <div key={item.name} className="card">
                <div className="relative">
                  <ImageCard
                    mobileSrc={item.image.mobile}
                    tabletSrc={item.image.tablet}
                    desktopSrc={item.image.desktop}
                    alt={item.name}
                    name={item.name}
                    price={item.price}
                    amount={quantity}
                    onAmountChange={handleChangeAmount}
                  />
                </div>
                <h2 className="text-c-rose-400 mt-6">{item.category}</h2>
                <p className="font-[600] text-c-rose-900">{item.name}</p>
                <span className="font-[600] text-c-red">${item.price}</span>
              </div>
            );
          })}
        </section>
      </main>

      <Cart cart={cart} onRemove={handleRemoveItem} onClearCart={handleClearCart} />
    </div>
  );
};

export default Page;
