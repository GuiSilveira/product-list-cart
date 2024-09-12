import { Item } from '../../../App'

type CartItemProps = {
    item: Item
    handleRemoveFromCart: (item: Item) => void
}

function CartItem({ item, handleRemoveFromCart }: CartItemProps) {
    return (
        <div>
            <div>
                <h2>{item.name}</h2>
                <div>
                    <span>{item.quantity}</span>
                    <span>@${item.price.toFixed(2)}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button onClick={() => handleRemoveFromCart(item)}>
                <span>X</span>
            </button>
        </div>
    )
}

export default CartItem
