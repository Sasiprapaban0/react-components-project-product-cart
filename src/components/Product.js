import React from 'react'

const Product = ({ id, name, amount, onClick, btnTxt}) => (
    <li className='list-group-item'>
    <div className='justify-content-between d-flex w-100'>
        {name}
        <span className='badge badge-pill badge-default'>
            {amount}
        </span>
    </div>
    <button
        className='btn btn-default btn-sm'
        onClick={() => onClick(id) }>
        {btnTxt}
    </button>
    </li>
)

export default Product