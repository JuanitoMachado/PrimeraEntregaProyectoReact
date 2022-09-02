import React, { useEffect, useState } from "react";
import { products } from "../../mock/products";
import ItemList from "../ItemList/ItemList";


const ItemListConteiner = (props) => {

	const [productList, setproductList] = useState ([])

	const getProducts = () => new Promise((resolve, reject) => {
		setTimeout (()=> resolve(products), 2000)
	})

	useEffect (() => {
		getProducts()
		.then(products => setproductList(products))
		.catch (error => console.error(error))
		
	} ,[])
	
	console.log(productList)
		return (
			<ItemList productList={productList}/>
        )
}

export default ItemListConteiner