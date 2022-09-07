import'./Navbar.css' ;
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='logo'> 
                <Link to={`/`}>
                <img src="images/Negro_y_Amarillo_Cuadro_Industrial_Logo.png" alt="logo"/>
                </Link>
            </div>
            <div>
                <button><Link to={'/category/fiat'}>Fiat</Link></button>
                <button><Link to={'/category/renault'}>Renault</Link></button>
                <button><Link to={'/category/toyota'}>Toyota</Link></button>
                
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar 