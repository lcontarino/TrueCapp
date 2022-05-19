const products = [{
    id: '1',
    name: 'iphone 12',
    price: 1000,
    category: 'phones',
    img: './img/iphone-12.png',
    stock: 25,
    description: 'Descripcion del Iphone 12'
}]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}