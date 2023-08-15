import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    
    return (
        <div className='flex justify-between items-center mb-3 border border-black p-4 w-80 rounded-lg'>
            <div className='flex justify-between text-lg font-medium w-full'>
                <p className='flex flex-col text-medium'>
                    <span className=''>01.02.2023</span>
                    <span className=''>{totalProducts} Articles</span>
                </p>
                <p className='flex  items-center gap-2'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-7 w-7 text-black cursor-pointer hover:bg-slate-200 transition ease-in duration-500  rounded-full p-1' />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard