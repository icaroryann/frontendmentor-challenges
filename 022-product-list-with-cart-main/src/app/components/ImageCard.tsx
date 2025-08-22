import React, { useState, useEffect } from "react";
import AddToCartBtn from "./addToCartBtn";

// Tipos das props do card
type ImageCardProps = {
    mobileSrc: string;
    tabletSrc: string;
    desktopSrc: string;
    alt: string;
    name: string;
    price: number;
    amount: number;
    onAmountChange: (name: string, price: number, quantity: number) => void;
};

/**
 * Card de produto com controle de quantidade local e integração com o carrinho global.
 */
const ImageCard: React.FC<ImageCardProps> = ({
    mobileSrc,
    tabletSrc,
    desktopSrc,
    alt,
    name,
    price,
    amount,
    onAmountChange,
}) => {
    // Estado local sincronizado com o carrinho global
    const [localAmount, setLocalAmount] = useState(amount);

    // Sincroniza localAmount sempre que o valor global mudar
    useEffect(() => {
        setLocalAmount(amount);
    }, [amount]);

    // Aumenta a quantidade
    const increase = () => {
        const newAmount = localAmount + 1;
        setLocalAmount(newAmount);
        onAmountChange(name, price, newAmount);
    };

    // Diminui a quantidade
    const decrease = () => {
        if (localAmount > 0) {
            const newAmount = localAmount - 1;
            setLocalAmount(newAmount);
            onAmountChange(name, price, newAmount);
        }
    };

    // Resetar o botão se a quantidade for zero
    const reset = localAmount === 0;
    return (
        <div className="relative">
            <picture>
                <source srcSet={desktopSrc} media="(min-width: 992px)" />
                <source srcSet={tabletSrc} media="(min-width: 768px)" />
                <img className="w-full rounded-2xl" src={mobileSrc} alt={alt} />
            </picture>
            <AddToCartBtn
                handleClickIncrease={increase}
                handleClickDecrease={decrease}
                value={localAmount}
                reset={reset}
            />
        </div>
    );
};

export default ImageCard;