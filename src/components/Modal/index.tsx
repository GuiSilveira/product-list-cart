import { CartItem } from '../../App'
import OrderConfirmed from '../../assets/images/icon-order-confirmed.svg'

type ModalProps = {
    cart: CartItem[]
    handleModal: () => void
    handleClearCart: () => void
}

function Modal({ cart, handleModal, handleClearCart }: ModalProps) {
    return (
        <div className="w-full h-full bg-slate-500 ">
            <div className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
                <OrderConfirmed />
                <h1 className="text-3xl font-bold mb-8">Order Confirmed</h1>
                <p>We hope you enjoy your food!</p>
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <img src={item.image.thumbnail} alt={item.name} />
                                    <div>
                                        <h2>{item.name}</h2>
                                        <span>{item.quantity}</span>
                                        <span>@${item.price.toFixed(2)}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <span>Order Total: </span>
                        <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleModal()
                        handleClearCart()
                    }}
                >
                    Start New Order
                </button>
            </div>
        </div>
    )
}

export default Modal
