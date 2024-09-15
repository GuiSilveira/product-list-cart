import { Item } from '../../../App'
import RemoveItem from '../../../assets/images/icon-remove-item.svg'

type CartItemProps = {
    item: Item
    handleRemoveFromCart: (item: Item) => void
}

function CartItem({ item, handleRemoveFromCart }: CartItemProps) {
    return (
        <div className="border-b border-b-rose-100 flex justify-between items-center py-4">
            <div>
                <h2 className="text-preset-4-semi-bold text-rose-900 mb-2">{item.name}</h2>
                <div className="flex gap-2">
                    <span className="text-preset-4-semi-bold text-red">{item.quantity}</span>
                    <span className="text-preset-4 text-rose-500">@ ${item.price.toFixed(2)}</span>
                    <span className="text-preset-4-semi-bold text-rose-500">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
            </div>
            <button
                onClick={() => handleRemoveFromCart(item)}
                className="border w-5 h-5 rounded-full flex items-center justify-center text-rose-400"
            >
                <RemoveItem />
            </button>
        </div>
    )
}

export default CartItem
