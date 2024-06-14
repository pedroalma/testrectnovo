import whats from '../../img/wh.png'
import face from '../../img/F.png'
import insta from '../../img/IN.png'
import logo from '../../img/logoatu.png'
import {Link} from 'react-router-dom';
import "./Footer.css"



function Footer() {
    return(
        <>
         <footer>
       <div className='menufooter'>
        <Link to="home" id='home'>Home</Link>
        <Link to="produtos" id='produtos'>Produtos</Link>
        <Link to="produtos" id='sobrenos'>Sobre nos</Link>
        <Link to="contatos">Contatos</Link>
        </div> 
        <div className='logofooter'>
        <img id='logo' src={logo} alt=''/>
        </div>
        <div className='redesfooter'>
        <img id='whats' src={whats} alt=''/>
        <img id='face' src={face} alt=''/>
        <img id='insta' src={insta} alt=''/>
        </div> 
    
    </footer>
    </>
    
    )

    
}

export default Footer;