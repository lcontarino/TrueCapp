import Item from '../Item/Item'

const ItemList = ({products}) => {
    
    return (
        <div className='productRow row pt-2  mb-1 pb-2 mx-0 bg-gray-200 w-100 text-center'>
            
            {products.slice(0,4).map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList