import './Item.css'

const Item = ({producto}) => {

 
    return (

        <div>
            <div className='contenido'>
                <div className='image-container'>
                    <img src={producto.img} alt="imagen del producto"/>
                </div>
                <div className="nombre-container">
                    <p>{producto.name}</p>
                </div>
                <div className='precio-container'>
                    <div className='precio'> 
                        <p>${producto.price}</p>
                    </div>
                    <div className='envio'>
                        <p>Envio {producto.shipping}</p>
                    </div>
                </div>
            </div>
        </div>

    )
    

}

export default Item