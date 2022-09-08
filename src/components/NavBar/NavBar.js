import './Nav.css';
import CartWidget from '../CartWidget/CartWitdget'; 
import { Link } from 'react-router-dom';


const NavBar = () => {
	return (
		<nav className='Navigation'>
			<ul className='List-ul'>
				<Link to='/' className='Link'>
					Home
				</Link>
				<Link to='/BebidasConAlcohol' className='Link'>
					Bebidas Con Alcohol
				</Link>
				<Link to='/Bebidas' className='Link'>
					Bebidas
				</Link>
                <Link to='/cartWidget' className='Link'>
					<CartWidget/>
				</Link>


			</ul>
		</nav>
	);
}
export default NavBar