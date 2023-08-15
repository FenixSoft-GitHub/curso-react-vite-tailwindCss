import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Datail</h2>
                <div>
                    <XMarkIcon 
                       className='h-7 w-7 text-black cursor-pointer hover:bg-slate-200 transition ease-in duration-500  rounded-full p-1'
                       onClick={() => context.closeProductDetail()} />
                </div>
            </div>
            <figure className='px-6'> 
                <img 
                   className='w-full h-full rounded-lg' 
                   src={context.productToShow.images} 
                   alt={context.productToShow.title}/>            
            </figure> 
            <p className='flex flex-col p-6'>
                <span className=' font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className=' font-medium text-md'>{context.productToShow.title}</span>
                <span className=' font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail