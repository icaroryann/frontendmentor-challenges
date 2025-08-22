import React, { useState } from "react";
import Image from "next/image";

// Tipos das props do botão
interface AddToCartBtnProps {
    handleClickIncrease: () => void;
    handleClickDecrease: () => void;
    value: number;
    reset?: boolean;
}

/**
 * Botão de adicionar ao carrinho com controle de quantidade e animação de ativação.
 */

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ handleClickIncrease, handleClickDecrease, value, reset }) => {
    const [isActive, setIsActive] = useState(false);

    // Resetar o estado ativo quando reset for true ou value zerar
    React.useEffect(() => {
        if (reset || value === 0) {
            setIsActive(false);
        }
    }, [reset, value]);

    if (!isActive) {
        return (
            <div
                onMouseEnter={() => setIsActive(true)}
                className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 bg-c-rose-50 px-6 py-2 rounded-full border-1 border-c-rose-300 flex gap-2 justify-center w-50 cursor-pointer hover:bg-c-rose-100 active:scale-90 transition-all duration-100"
            >
                <Image
                    src={'/icon-add-to-cart.svg'}
                    alt="Cart icon"
                    width={25}
                    height={25}
                />
                <span className="font-[600] text-c-rose-900">Add to Cart</span>
            </div>
        );
    }

    return (
        <div
            onMouseLeave={() => value === 0 && setIsActive(false)}
            className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2 bg-c-red px-6 py-2 rounded-full border-1 border-c-rose-300 flex gap-2 justify-between items-center w-50 cursor-pointer active:scale-90 transition-all duration-100"
        >
            <div
                onClick={handleClickDecrease}
                className="border-2 border-c-rose-50 w-[25px] h-[25px] rounded-full flex items-center justify-center"
            >
                <Image
                    src={'/icon-decrement-quantity.svg'}
                    alt="Decrement quantity"
                    width={15}
                    height={15}
                />
            </div>
            <span className="font-[600] text-c-rose-50">{value}</span>
            <div
                onClick={handleClickIncrease}
                className="border-2 border-c-rose-50 w-[25px] h-[25px] rounded-full flex items-center justify-center"
            >
                <Image
                    src={'/icon-increment-quantity.svg'}
                    alt="Increment quantity"
                    width={15}
                    height={15}
                />
            </div>
        </div>
    );
};

export default AddToCartBtn;