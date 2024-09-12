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
        <div>
            <h1 className="text-3xl font-bold mb-8">
                Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
            </h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} />
                    </li>
                ))}
            </ul>
            <div>
                <span>Order Total: </span>
                <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
            <div>
                <CarbonNeutral />
                <p>
                    This is a <span className="font-bold">carbon-neutral</span> delivery
                </p>
            </div>
            <button
                className="w-full py-2 bg-green-500 text-white rounded-lg"
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
