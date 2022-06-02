import Image1 from './img/akai_mpk225.png';
import Image02 from '../public/img/'
const products = [
    {
        id: '1',
        code:'1960140180',
        name: 'Controlador Akai Mpk225',
        price: 50000,
        category: 'Midi Controller',
        img: Image1,
        stock: 5,
        description: 'Controlador Midi 8 Knobs y 8 Pads',
        tag1: "Pads Integrados",
        tag2: "8 Knobs asignables",
        tag3: "Display 16x4"
    },
  {
      id: '2',
      code:'20648411022',
      name: 'Zapatillas Nike Air Max 90',
      price: 35000,
      category: 'shoes',
      img: Image02,
      stock: 5,
      description: 'Description Air 90 ',
      tag1:'Tecnología: Max Air',
      tag2:'Beneficios: Amortiguación',
      tag3:'Adecuado para: Todo el día'
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