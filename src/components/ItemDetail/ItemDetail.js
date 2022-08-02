import "./ItemDetail.css"

const ItemDetail = ({id, name, price, category, img, stock, description, shipping}) => {

    return (
        <div className="item-detail">
            <div className="container-imagen-detalle">
                <div>
                    <img className="imagen-detalle" src={img} alt='imagen del producto'/>
                </div>
                <div>
                        <p>{description}</p>
                </div>
            </div>
            <div className="detail">
                <div className="detail-left">
                    <div>
                        <h3>{name}</h3>
                    </div>

                    <div>
                        <p>${price}</p>
                    </div>
                </div>
                <div className="detail-rigth">
                    <div>
                        <p>Envio: {shipping}</p>
                    </div>
                    <div>
                        <p>{stock} unidades disponibles</p>
                    </div>
                    <div className="button-container">
                        <div>
                            <button>COMPRAR</button>
                        </div>
                        <div>
                            <button>Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

} 

export default ItemDetail;