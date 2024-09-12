import { useEffect, useState } from 'react'
import Card from './components/Card/Card'

function App() {
    const [cart, setCart] = useState(0)
    const [total, setTotal] = useState(0)
    const [data, setData] = useState([])

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

    return (
        <main className="m-6">
            <h1 className="text-3xl font-bold mb-8">Desserts</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </main>
    )
}

export default App
