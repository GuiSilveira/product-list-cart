import { useEffect, useState } from 'react'
import Card from './components/Card'
import Cart from './components/Cart'
import Modal from './components/Modal'

export type Item = {
    image: {
        thumbnail: string
        mobile: string
        tablet: string
        desktop: string
    }
    name: string
    category: string
    price: number
    quantity: number
}

function App() {
    const [cart, setCart] = useState<Item[]>([])
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)

    useEffect(() => {
        fetch('../data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setData(data)
            })
    }, [])

    const handleAddToCart = (item: Item) => {
        setTotal(total + item.price)

        const itemAlreadyInCart = cart.find((cartItem) => cartItem.name === item.name)

        if (!itemAlreadyInCart) {
            setCart([...cart, { ...item, quantity: 1 }])

            return
        }

        setCart(
            cart.map((cartItem) =>
                cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        )
    }

    const handleRemoveFromCart = (item: Item) => {
        setTotal(total - item.price)

        const itemAlreadyInCart = cart.find((cartItem) => cartItem.name === item.name)

        if (itemAlreadyInCart?.quantity === 1) {
            setCart(cart.filter((cartItem) => cartItem.name !== item.name))

            return
        }

        setCart(
            cart.map((cartItem) =>
                cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            )
        )
    }

    const handleClearCart = () => {
        setCart([])
        setTotal(0)
    }

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <main className="m-6">
            <h1 className="text-preset-1 mb-8 text-rose-900">Desserts</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <li key={index}>
                        <Card
                            item={item}
                            handleAddToCart={handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    </li>
                ))}
            </ul>
            <Cart cart={cart} handleModal={handleModal} handleRemoveFromCart={handleRemoveFromCart} />
            {modal && <Modal cart={cart} handleClearCart={handleClearCart} handleModal={handleModal} />}
        </main>
    )
}

export default App
