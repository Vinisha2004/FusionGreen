import React from 'react'
import './ExploreMenu.css'
import { Product_list } from '../../assets/assets'

const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-product' id='explore-product'>
        <h1>Explore our product</h1>
        <p className='explore-product-text'>This product is nice</p>
        <div className="explore-product-list">
            {Product_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className="explore-product-list-item">
                        <img className={category===item.product_name?"active":""} src={item.product_image} alt="" />
                        <p>{item.product_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
      
    </div>
  )
}

export default ExploreMenu
