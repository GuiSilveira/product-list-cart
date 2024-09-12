import Cart from '../../assets/images/icon-add-to-cart.svg'

type CardProps = {
    item: {
        image: {
            thumbnail: string
            mobile: string
            tablet: string
            desktop: string
        }
        name: string
        category: string
        price: number
    }
}

function Card({ item }: CardProps) {
    return (
        <div>
            <div className="relative flex flex-col items-center">
                <img src={item.image.mobile} alt="Waffle" className="rounded-lg" />
                <button className="absolute top-2/3 translate-y-12 font-medium py-2 px-7 rounded-full border flex items-center gap-2">
                    <Cart />
                    Add to Cart
                </button>
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
