import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import Categories from './Categories'

function Cart({ cart, updateCart }) {

	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    let  suppr = []
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
        localStorage.setItem('panier', JSON.stringify(cart))
    }, [cart])
    useEffect(() => {
    <Categories updateCart={updateCart} cart = {cart} />
    }, [suppr])

    
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className='button' >
								<strong>{name}</strong> {price}€ x {amount}
                               <button key={`${name}_${index}`} onClick = {()=> { cart.pop(cart[index])
                               suppr= cart
                               alert(JSON.stringify(cart))

                              document.querySelector('.button').innerHTML = ""
                      
                            }} > Supprimer</button>
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart