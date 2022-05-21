const products = [
    {
    id: '1',
    name: 'Nike Free 30 Running',
    price: 1000,
    category: 'phones',
    img: 'https://www.wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png',
    stock: 25,
    description: 'Nike Free 30 Running Description '
}
// ,
//  {
//      id: '1',
//      name: 'Nike Air 90',
//      price: 35000,
//      category: 'phones',
//      img: 'https://www.wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png',
//      stock: 5,
//      description: 'Zapatillas Nike Air 90 '
//  },


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}