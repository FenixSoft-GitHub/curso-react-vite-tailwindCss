// import React from 'react';
// import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {
                    handleDelete &&                 
                    <XMarkIcon 
                    className='h-7 w-7 text-black cursor-pointer hover:bg-slate-200 transition ease-in duration-500  rounded-full p-1'
                    onClick={ () => handleDelete(id) }/>
                }
            </div>
        </div>
    )
}

// OrderCard.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string,
//     imageUrl: PropTypes.string,
//     price: PropTypes.number,
// };

export default OrderCard;