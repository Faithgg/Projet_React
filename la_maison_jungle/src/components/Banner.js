import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    return (
    <div className='lmj-banner'>
       
        <h1> <img src={logo} alt='Logo' className='lmj-logo'/> La maison jungle</h1>
    </div>)
}

export default Banner