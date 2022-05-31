const products = [
    {
    id: '1',
    name: 'Nike Air Max 270',
    price: 1000,
    category: 'phones',
    img: 'https://images.restocks.net/products/AO4971-002/nike-air-max-270-react-bauhaus-2-1000.png',
    stock: 25,
    description: 'Nike Air Max 270 Description '
}
 ,
  {
      id: '2',
      name: 'Zapatillas Nike Air 90',
      price: 35000,
      category: 'shoes',
      img: 'https://images-na.ssl-images-amazon.com/images/I/71PMd93JV5L._AC_UY695_.jpg',
      stock: 5,
      description: 'Description Air 90 '
  },


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}