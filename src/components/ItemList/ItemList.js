import { Card } from '@mui/material'
import React from 'react'
import CardComponent from '../CardComponent/CardComponent'


const ItemList = ({productList}) => {
    console.log('soy un productList', productList)

    productList.map (item => console.log(item.title))

    return (
    <div style={{display: 'flex'}}>
        {
            productList.map(item => <CardComponent key= {item.id} img={item.img} title={item.title} description={item.description} price={item.price}/>)
        }
        </div>
  )
}

export default ItemList