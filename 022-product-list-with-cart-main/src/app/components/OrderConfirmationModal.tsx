import React from "react";
import Modal from "react-modal";
import Image from "next/image";

export type OrderItem = {
  name: string;
  price: number;
  quantity: number;
};

type OrderConfirmationModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  items: OrderItem[];
  total: number;
  onStartNewOrder?: () => void;
};

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onRequestClose,
  items,
  total,
  onStartNewOrder,
}) => {
  React.useEffect(() => {
    if (typeof window !== "undefined" && Modal.setAppElement) {
      Modal.setAppElement("#cart");
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmação de Pedido"
      className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center gap-4">
        <Image src="/icon-order-confirmed.svg" alt="Pedido confirmado" width={60} height={60} />
        <h2 className="text-2xl font-bold text-c-red">Order Confirmed</h2>
        <p className="text-c-rose-500 text-center text-sm">We hope you enjoy your food!</p>
        <div className="w-full mt-4">
          <ul className="divide-y divide-c-rose-100 mb-2 max-h-48 overflow-y-auto pr-2">
            {items.map(item => (
              <li key={item.name} className="py-1 flex justify-between text-c-rose-900">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-c-rose-900 border-t pt-2">
            <span>Order Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          className="mt-6 bg-c-red text-c-rose-50 px-6 py-2 rounded-full font-bold hover:bg-c-rose-900 transition"
          onClick={onStartNewOrder || onRequestClose}
        >
          Start New Order
        </button>
      </div>
    </Modal>
  );
};

export default OrderConfirmationModal;
