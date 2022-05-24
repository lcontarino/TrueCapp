const products = [
    {
    id: '1',
    name: 'Nike Free 30 Running',
    price: 1000,
    category: 'phones',
    img: 'https://w7.pngwing.com/pngs/1003/877/png-transparent-nike-air-max-sneakers-nike-free-air-force-1-nike-white-brown-orange-thumbnail.png',
    stock: 25,
    description: 'Nike Free 30 Running Description '
}
 ,
  {
      id: '1',
      name: 'Nike Air 90',
      price: 35000,
      category: 'phones',
      img: 'https://w7.pngwing.com/pngs/1003/877/png-transparent-nike-air-max-sneakers-nike-free-air-force-1-nike-white-brown-orange-thumbnail.png',
      stock: 5,
      description: 'Zapatillas Nike Air 90 '
  },


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}