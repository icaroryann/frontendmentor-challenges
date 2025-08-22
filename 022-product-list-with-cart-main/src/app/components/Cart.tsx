import React, { useState } from 'react';
import Image from 'next/image';
import OrderConfirmationModal from './OrderConfirmationModal';

type CartProps = {
    cart: { name: string; price: number; quantity: number }[];
    onRemove: (name: string) => void;
    onClearCart: () => void;
};

function Cart({ cart, onRemove, onClearCart }: CartProps) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id="cart" className="p-6 bg-c-rose-50 self-start md:sticky md:top-6 rounded-2xl">
            <h3 className="text-c-red font-bold text-2xl">Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h3>
            {cart.length === 0 ? (
                <div className="flex flex-col items-center">
                    <Image
                        src={'/illustration-empty-cart.svg'}
                        alt="Empty cart image"
                        width={150}
                        height={150}
                    />
                    <span className="text-c-rose-400 text-center">Your added items will appear here</span>
                </div>
            ) : (
                <div>
                    <ul className="divide-y divide-c-rose-100 max-h-60 overflow-y-auto pr-2">
                        {cart.map(item => (
                            <li key={item.name} className="py-2 flex justify-between items-center">
                                <div>
                                    <p className='font-[600]'>{item.name}</p>
                                    <div className='flex gap-4 py-2'>
                                        <span className='text-c-red font-[600]'>{item.quantity}x</span>
                                        <span className='text-c-rose-400'>@ ${item.price.toFixed(2)}</span>
                                        <span className='text-c-rose-500 font-[600]'>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                                <div
                                    className='border-[2px] border-c-rose-300 rounded-full p-1 cursor-pointer'
                                    onClick={() => onRemove(item.name)}
                                    title='Remover item'
                                >
                                    <Image
                                        src={'/icon-remove-item.svg'}
                                        alt='Remove icon'
                                        width={10}
                                        height={10}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-between py-6'>
                        <span className='text-c-rose-900'>Order Total</span>
                        <span className='text-2xl font-[700] text-c-rose-900'>${total.toFixed(2)}</span>
                    </div>
                    <div className='flex gap-2 justify-center p-4 bg-c-rose-100 rounded-2xl'>
                        <Image 
                            src='/icon-carbon-neutral.svg'
                            alt='Carbon neutral icon'
                            width={25}
                            height={25}
                        />
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>
                    <button
                        className='bg-c-red text-c-rose-50 w-full py-4 rounded-full mt-4 cursor-pointer active:scale-95 transition-transform'
                        onClick={() => setIsModalOpen(true)}
                    >
                        Confirm Order
                    </button>

                    {/* Modal de confirmação de pedido */}
                                        <OrderConfirmationModal
                                                isOpen={isModalOpen}
                                                onRequestClose={() => setIsModalOpen(false)}
                                                items={cart}
                                                total={total}
                                                onStartNewOrder={() => {
                                                    setIsModalOpen(false);
                                                    onClearCart();
                                                }}
                                        />
                </div>
            )}
        </div>
    );
}

export default Cart
