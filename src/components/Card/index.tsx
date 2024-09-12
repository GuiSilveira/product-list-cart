import { useState } from 'react'
import { Item } from '../../App'
import Cart from '../../assets/images/icon-add-to-cart.svg'
import Decrement from '../../assets/images/icon-decrement-quantity.svg'
import Increment from '../../assets/images/icon-increment-quantity.svg'

type CardProps = {
    item: Item
    handleAddToCart: (item: Item) => void
    handleRemoveFromCart: (item: Item) => void
}

function Card({ item, handleAddToCart, handleRemoveFromCart }: CardProps) {
    const [quantity, setQuantity] = useState(0)

    return (
        <div>
            <div className="relative flex flex-col items-center">
                <img src={item.image.mobile} alt="Waffle" className="rounded-lg" />
                {quantity === 0 && (
                    <button
                        className="absolute top-2/3 translate-y-12 font-medium py-2 px-7 rounded-full border flex items-center gap-2"
                        onClick={() => {
                            handleAddToCart(item)
                            setQuantity(quantity + 1)
                        }}
                    >
                        <Cart />
                        Add to Cart
                    </button>
                )}
                {quantity > 0 && (
                    <div className="absolute top-2/3 translate-y-12 font-medium py-2 px-7 rounded-full border flex items-center gap-2">
                        <button
                            onClick={() => {
                                setQuantity(quantity - 1)
                                handleRemoveFromCart(item)
                            }}
                        >
                            <Decrement />
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => {
                                setQuantity(quantity + 1)
                                handleAddToCart(item)
                            }}
                        >
                            <Increment />
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-[2.5rem]">
                <h2 className="text-2xl font-bold">{item.category}</h2>
                <p className="text-lg">{item.name}</p>
                <p className="text-lg">${item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card
