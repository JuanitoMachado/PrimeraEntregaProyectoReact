import '../App.css';
import CartWidget from './CartWidget/CartWitdget'; 
const NavBar = ({menu}) => {
    return(
        <nav>
            <ul className='nav'> 
                <li>
                {menu}
                </li>
                <li>
                <CartWidget/> 
                </li>
           </ul>
        </nav>

    )

}

export default NavBar