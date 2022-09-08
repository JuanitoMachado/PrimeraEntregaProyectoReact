import React, { useEffect, useState } from "react";
import { productos } from "../../mock/productos";
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardComponent from "../CardComponent/CardComponent";


const ItemListConteiner = (props) => {

	const [productList, setproductList] = useState ([])

	const getProductos = () => new Promise((resolve, reject) => {
		setTimeout (()=> resolve(productos), 2000)
	})

	useEffect(() => {
		axios(productList).then((res) =>
			setproductList(res.productos)
		);
	}, []);


		return (

			<div>
			{productList.map((prod) => {
				return (
					<div key={prod.char_id}>
						<Link to={`/detail/${prod.id}`} className='Link'>
							<CardComponent productos={prod} />
						</Link>
					</div>
				);
			})}
		</div>



        )
}

export default ItemListConteiner