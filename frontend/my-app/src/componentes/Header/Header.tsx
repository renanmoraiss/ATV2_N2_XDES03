import "@/componentes/Header/Header.css";

export default async function Header(){
    return(
        <header className='header'>
                <nav>
                    <ul>
                        <li><a href="https://www.cinea.com.br/" target='_blank'>Sobre</a></li>| 
                        <li><a href="https://unifei.edu.br/" target='_blank'>Página Oficial</a></li>
                    </ul>
                </nav>
                <div>
                    <ul>
                        <li><a href="https://sigaa.unifei.edu.br/sigaa/verTelaLogin.do" target='_blank'>Login</a></li> 
                    </ul>
                </div>
        </header>
    )
}