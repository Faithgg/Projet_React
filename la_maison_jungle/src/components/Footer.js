import { useState } from 'react'
import '../styles/Footer.css'
function verificateurMail(valeurEntree) {
  if (!valeurEntree.includes('@')){ alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")}
}
function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :
                <input type='text'
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                onBlur = {()=> verificateurMail(inputValue)}
                />
            </div>
		</footer>
	)
}

export default Footer