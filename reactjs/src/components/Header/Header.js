import logo from '../../img/logoatu.png';
import usuario from '../../img/usu.png';
import lupa from '../../img/L.png';
// import whats from '../../img/wh.png'
// import face from '../../img/f.png'
// import insta from '../../img/IN.png'
import carrinho from '../../img/CA.png'
import './Header.css';
import {Link, NavLink} from 'react-router-dom';

function Header () {
return(
    <>
    <header>
        <div  className='menu'>
        <Link to='/'>
        <img id='logo' src={logo} alt='' />
        </Link>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/sobrenos">Sobre nos</NavLink>
        <NavLink to="/contatos">Contatos</NavLink>
        <div className='logos'>
        <img id='carrinho' src={carrinho} />
        <NavLink to="/telalogin">
        <img id='usuario' src={usuario} alt='' />
        </NavLink>
        </div>
        </div>
        <div className='busca'>
        <input className='pesquisa' type='text' placeholder='Pesquise seu produto' />       
        <img id='lupa' src={lupa} alt='' />
        </div>
    </header>
    </>
   )
  
}

export default Header;