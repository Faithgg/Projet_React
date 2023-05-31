import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart,categoriy}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
            cart = [
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			]
			updateCart(cart);

		} else {
            cart = [...cart, { name, price, amount: 1 }]
			updateCart(cart);

		}
	}

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
         
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => ( 
                plant.category=== categoriy ?
					<div key={plant.id}>
						<PlantItem
							cover={plant.cover}
							name={plant.name}
							water={plant.water}
							light={plant.light}
							price={plant.price}
						/>
						<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
					</div> : (categoriy==="Toutes les catégories" ? <div key={plant.id}>
						<PlantItem
							cover={plant.cover}
							name={plant.name}
							water={plant.water}
							light={plant.light}
							price={plant.price}
						/>
						<button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
					</div> : null)
				))}
			</ul>
		</div>
	)
}
export default ShoppingList