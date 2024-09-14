import { Item } from '../../App'
import CarbonNeutral from '../../assets/images/icon-carbon-neutral.svg'
import CartItem from './CartItem'

type CartProps = {
    cart: Item[]
    handleRemoveFromCart: (item: Item) => void
    handleModal: () => void
}

function Cart({ cart, handleRemoveFromCart, handleModal }: CartProps) {
    return (
        <div className="bg-white rounded-lg p-6 mt-8">
            <h1 className="text-preset-2 text-red">Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</h1>
            <ul className="mt-2">
                {cart.map((item, index) => (
                    <li key={index}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center py-6">
                <span className="text-preset-4 text-rose-900">Order Total: </span>
                <span className="text-preset-2 text-rose-900">
                    ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                </span>
            </div>
            <div className="flex gap-2 p-4 bg-rose-50 rounded-lg mb-6">
                <CarbonNeutral />
                <p className="text-preset-4 text-rose-900">
                    This is a <span className="font-bold">carbon-neutral</span> delivery
                </p>
            </div>
            <button
                className="w-full py-4 bg-red text-white rounded-full text-preset-3"
                onClick={() => {
                    handleModal()
                }}
            >
                Confirm Order
            </button>
        </div>
    )
}

export default Cart
