import Image1 from '../public/img ./img/akai_mpk225.png';
import Image02 from './img/airmax90.png'
import Image03 from './img/Alesis_vMini_25_Key.png'
import Image04 from './img/Nike_Air_Max_Air_Jordan.png'
import Image05 from './img/Iphone_X.png'
import Image06 from './img/Macbook_rose.png'


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
{
    id: '5',
    itemCode:'80848411022',
    name: 'Iphone X',
    price: 150000,
    categoryId: 3,
    category: 'phones',
    img: Image05,
    stock: 2,
    description: 'Iphone X como nuevo',
    tag1:'Pantalla 6,5 Pulgadas',
    tag2:'Sin Detalles',
    tag3:'Caja y Accesorios'
},
{
    id: '6',
    itemCode:'909484112022',
    name: 'Apple Macbook Air 13.3',
    price: 3750000,
    categoryId: 4,
    category: 'notebooks',
    img: Image06,
    stock: 2,
    description: 'Apple Macbook Air 13.3 Chip M1 Rose Gold',
    tag1:'Chip M1 512gb De Ssd 8gb ',
    tag2:'Color Rosa',
    tag3:'Peso: 1.3 Kg'
}
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