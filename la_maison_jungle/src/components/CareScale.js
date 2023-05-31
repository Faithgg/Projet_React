import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function Click (type,valeur)
{ alert("Vous avez cliqué sur un CareScale de type " + type + " et qui exige " + (valeur ===1? 'peu ': (valeur ===2? 'modérement ': "beaucoup "))+ (type ==='light'? "de lumière" : "d'arosage") )}


function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? <img src={Sun} alt='sun-icon' /> : <img src={Water} alt='sun-icon' />

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={() => Click(careType,scaleValue)} >{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale