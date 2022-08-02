import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({productos}) => {

    
    return (
        <div className="productos-container">
            {productos.map(p => 
                <Item key={p.id} producto={p}/>
                
                )}
        </div>
    )

}

export default ItemList