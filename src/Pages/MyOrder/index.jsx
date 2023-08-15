import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length -1
  console.log(context.order[index])

    return (
      <>
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-6'>
            <Link to='/my-orders' className=' absolute left-0'>
              <ChevronLeftIcon 
                className='h-7 w-7 text-black cursor-pointer hover:bg-slate-200 transition ease-in duration-500  rounded-full p-1' />
            </Link>
            <h1 className='font-medium text-xl'>My Order</h1>
          </div>
          <div className=' flex flex-col w-80'>
            {
              context.order?.[index]?.product.map(product => (
                <OrderCard 
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.images}
                  price={product.price}
                />
              ))
            }
          </div>
        </Layout>
      </>
    )
  }
  
  export default MyOrder