const products = [
    {
        id: '2',
        name: 'Nike Air Max 70',
        price: 35000,
        category: 'shoes',
        img: './img/',
        stock: 5,
        description: 'Description Nike Air Max 70 '
    },
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