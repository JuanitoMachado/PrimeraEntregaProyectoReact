import '../App.css';

const NavBar = ({menu}) => {
    return(
        <nav>
            <ul className='nav'> 
                <li>
                {menu}
                </li>
           </ul>
        </nav>

    )

}

export default NavBar