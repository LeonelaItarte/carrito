import'./Navbar.css' ;

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
        </nav>
    )
}

export default Navbar 