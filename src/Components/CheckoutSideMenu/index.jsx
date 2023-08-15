import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import OrderCard from '../../Components/OrderCard'
import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            data: '12/05/2023',
            product: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)] z-10`}>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                       className='h-7 w-7 text-black cursor-pointer hover:bg-slate-200 transition ease-in duration-500  rounded-full p-1'
                       onClick={() => context.closeCheckoutSideMenu()} />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images}
                        price={product.price}
                        handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6 bg-lime-100 m-3 border-2 rounded-lg border-green-900'>
                <p className='flex justify-between items-center'>
                    <span className='font-medium text-xl'>Total $:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
            <Link className='px-3 mb-3' to='/my-orders/last'>
                <button className='bg-black py-3 text-white rounded-lg w-full' onClick={() => handleCheckout()}>Checkout</button>
            </Link>
        </aside>
    )
}

export default CheckoutSideMenu