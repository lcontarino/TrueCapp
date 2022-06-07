import Image1 from './img/akai_mpk225.png';
import Image02 from './img/airmax90.png'
import Image03 from './img/Alesis_vMini_25_Key.png'
import Image04 from './img/Nike_Air_Max_Air_Jordan.png'
const products = [
    {
        id: '1',
        itemCode:'1960140180',
        name: 'Controlador Akai Mpk225',
        price: 50000,
        categoryId: 1,
        category: 'controllers',
        img: Image1,
        stock: 10,
        description: 'Controlador Midi 8 Knobs y 8 Pads',
        tag1: "Pads Integrados",
        tag2: "8 Knobs asignables",
        tag3: "Display 16x4"
    },
    {
        id: '2',
        itemCode:'1960140180',
        name: 'Alesis VMini 25 Keys',
        price: 30000,
        categoryId: 1,
        category: 'controllers',
        img: Image03,
        stock: 10,
        description: 'Controlador Midi 4 Knobs y 4 Pads',
        tag1: "4 Pads Integrados",
        tag2: "4 Knobs asignables",
        tag3: "USB"
    },
  {
      id: '3',
      itemCode:'50648411022',
      name: 'Zapatillas Nike Air Max 90',
      price: 35000,
      categoryId: 2,
      category: 'shoes',
      img: Image02,
      stock: 5,
      description: 'Description Air 90 ',
      tag1:'Tecnología: Max Air',
      tag2:'Beneficios: Amortiguación',
      tag3:'Adecuado para: Todo el día'
  },
  {
    id: '4',
    itemCode:'50648411022',
    name: 'Nike Air Max Air Jordan',
    price: 75000,
    categoryId: 2,
    category: 'shoes',
    img: Image04,
    stock: 2,
    description: 'Unicas Nike Air Max Air Jordan',
    tag1:'Tecnología: Max Air',
    tag2:'Beneficios: Amortiguación',
    tag3:'Adecuado para: Todo el día'
},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 200)
    })
}