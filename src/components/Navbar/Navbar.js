import'./Navbar.css' ;
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='logo'> 
                <Link to={`/`}>
                Caramel
                </Link>
            </div>
            <div>
                <button><Link to={'/category/tablet'}>Tablet</Link></button>
                <button><Link to={'/category/celular'}>Celulares</Link></button>
                <button id ='boton'>Carrito</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar 