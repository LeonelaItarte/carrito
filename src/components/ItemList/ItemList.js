import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {

    console.log(productos)
    return (
        <div className="productos-container">
            {productos.map(p => 
                <Item key={p.id} producto={p}/>
                )}
        </div>
    )

}

export default ItemList