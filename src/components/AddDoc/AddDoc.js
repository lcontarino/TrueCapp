import React from 'react'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch, getDoc, doc } from 'firebase/firestore'
import { db, collectionsName, auth } from '../../services/firebase'

const productsDB = collection(db, 'products')

const objProduct = {

    brand: 'Apple',
    category: 'tablets',
    categoryId:6,
    name: 'Apple iPad',
    price: 300000,
    stock:10,
    description:'Apple iPad (9ª generación)',
    img:"https://http2.mlstatic.com/D_NQ_NP_711191-MLA47871333065_102021-O.webp",
    tag1:'Ipad',
    tag2:'Modelo Air',
    tag3:'tag3'}

    // addDoc(productsDB, objProduct)

export const AddDoc = () => {
  return (
    <div className="row">
        <form >
            <label>
                <h3>Marca</h3>
                <input className='form-control' type='text' placeholder='Marca'></input>
            </label>
            <label>
                <h3>Categoria</h3>
                <select class="form-select form-select-lg">
                        <option selected>Default Form Select</option>
                        <option value="1">Web Designing</option>
                        <option value="2">Web Development</option>
                        <option value="3">Graphic Design</option>
                        <option value="4">WordPress Website</option>
</select>
            </label>
            <label>
                <h3>Stock</h3>
                <input className='form-control'  type='number'  min={0}  placeholder='Stock' ></input>
            </label>
            <label>
                <h3>Descripcion</h3>
                <input className='form-control' type='text' placeholder='Descripcion'></input>
            </label>
            <label>
                <h3>Precio</h3>
                <input className='form-control' type='number'  min={0}  placeholder='Precio'></input>
            </label>
        </form>
    </div>
  )
}
