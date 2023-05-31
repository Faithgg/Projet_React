import { plantList } from '../datas/plantList'
import ShoppingList from './ShoppingList'
import { useState } from 'react'


function Categories({ cart, updateCart }) {
    let categories = plantList.reduce((accumulateur,plant) => 
        accumulateur.includes(plant.category)? accumulateur : accumulateur.concat(plant.category)
    ,[])
    const [category,updateCategory] = useState('Toutes les catégories')

    const Aff = (e) => {
        updateCategory(e.target.value)
    }
    const restart =()=>{
        updateCategory("Toutes les catégories")
    }
    
    return (
        <div>
        <label>Les différentes catégories de plantes   </label>
        <select onChange={Aff}>
            <option key={"rdfghg"} >Toutes les catégories</option>
            { 
            categories.map(
                (category,index) => (
                <option key={index}> {category} </option>
                )
            )
        }
        </select>
        <button onClick={restart}>Réinitialiser</button>
        <ShoppingList cart={cart} updateCart={updateCart} categoriy={category}/>
        </div>
            
    )
}

export default Categories
