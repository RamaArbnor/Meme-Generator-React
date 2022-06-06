import '../App.css';
import troll from '../images/troll.png'

export default function Navbar() {
    return (
        <nav>
            <div className='navContainer'>
                <img src={troll}/>
                <h1>Meme Generator</h1>
            </div>
            
        </nav>
    )
}