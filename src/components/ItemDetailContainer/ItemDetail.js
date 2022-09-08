import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemDetail.css';
import { useParams } from 'react-router';
import CardComponent from '../CardComponent/CardComponent';

const ItemDetail = () => {
	const [user, setUser] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(productList/${id}).then((res) =>
			setUser(res.productos)
		);
	}, [id]);

	return (
		<div className='Item-detail'>
			{productList.map((id) => {
				return (
					<div>
						<CardComponent productos={id} />
					</div>
				);
			})}
		</div>
	);
};

export default ItemDetail;