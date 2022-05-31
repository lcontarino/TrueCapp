import './ItemDetail.css'

const ItemDetail = ({ name,description,img }) => {
    return(
        <div>
            <h1>Detail Page</h1>
            <h3>{name}</h3>
            
            <img src={img} className="img-fluid rounded float-left" width="300px" alt="productImage" ></img>
            <h3>{description}</h3>
        </div>
        
    )
}

export default ItemDetail