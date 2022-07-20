import'./Navbar.css' ;
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='logo'>
                Caramel
            </div>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Nosotros</button>
                <button id ='boton'>Carrito</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar 