import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Ui = ({id,image,title,category,price}) => {
  return (
    <div className='main-ui'>
        <Link to={`data/${id}`} key={id}>
            <div className='uui'>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{category}</p>
                <h5>{price}</h5>
            </div>
        </Link>
    </div>
  )
}

export default Ui