import Head from '../Header/style';
import Img02 from '../../assets/img/img02.png';

const Header = () =>{

    return (
        <Head>
            <div className="logo">TodoList</div>
            <div className="perfil">
               <img src={Img02} alt="img-perfil" title="Imagem de perfil" width="20px"/>
            </div>
        </Head>
    );
    
}
    
export default Header;