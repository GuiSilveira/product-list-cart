import { CartItem, Item } from '../../App'
import Cart from '../../assets/images/icon-add-to-cart.svg'
import Decrement from '../../assets/images/icon-decrement-quantity.svg'
import Increment from '../../assets/images/icon-increment-quantity.svg'

type CardProps = {
    item: Item
    cart: CartItem[]
    handleAddToCart: (item: Item) => void
    handleRemoveFromCart: (item: Item) => void
}

function Card({ item, cart, handleAddToCart, handleRemoveFromCart }: CardProps) {
    const itemAlreadyInCart = cart.find((cartItem) => cartItem.name === item.name)

    return (
        <div>
            <div className="relative flex flex-col items-center">
                <img
                    src={item.image.mobile}
                    alt={item.category}
                    className={`rounded-lg ${itemAlreadyInCart ? 'border-2 border-solid border-red' : ''}`}
                />
                {!itemAlreadyInCart && (
                    <button
                        className="absolute top-2/3 translate-y-12 border-rose-400 bg-white text-preset-4-semi-bold text-rose-900 py-2 px-7 rounded-full border flex items-center gap-2 min-w-36 min-h-11"
                        onClick={() => {
                            handleAddToCart(item)
                        }}
                    >
                        <Cart />
                        Add to Cart
                    </button>
                )}
                {itemAlreadyInCart && (
                    <div className="absolute top-2/3 translate-y-12 font-medium rounded-full flex items-center justify-between gap-2 bg-red text-white min-w-36 min-h-11 px-3 py-3">
                        <button
                            onClick={() => {
                                handleRemoveFromCart(item)
                            }}
                            className="border w-5 h-5 rounded-full flex items-center justify-center"
                        >
                            <Decrement />
                        </button>
                        <span className="text-preset-4-semi-bold">
                            {cart.find((cartItem) => cartItem.name === item.name)?.quantity}
                        </span>
                        <button
                            onClick={() => {
                                handleAddToCart(item)
                            }}
                            className="border w-5 h-5 rounded-full flex items-center justify-center"
                        >
                            <Increment />
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-[2.5rem]">
                <h2 className="text-preset-4 text-rose-500">{item.category}</h2>
                <p className="text-preset-3 text-rose-900">{item.name}</p>
                <p className="text-preset-3 text-red">${item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card
