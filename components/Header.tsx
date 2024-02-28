"use client"
import { useState } from "react";
import Image from "next/image";
import styles from '../styles/layout/Header.module.css'
import { SERVER_DIRECTORY } from "next/dist/shared/lib/constants";

const Header = () => {
    
    const [handleMenu, setHandleMenu] = useState<boolean>(false)

    return ( 
        <header className={styles.header}>

            <div className={styles.menu_and_logo} >
                
                {
                    !handleMenu ?

                            <span className={styles.menu_button} onClick={() => setHandleMenu(true)}>
                                    <Image src={'/imagens/Menu.png'} width={36} height={24} alt="Icon Menu"/>
                            </span>
                    :
                        <>
                            <span className={styles.menu_button_actived}  onClick={() => setHandleMenu(false)}>
                                <Image src={'/imagens/Menu.png'} width={36} height={24} alt="Icon Menu" />
                            </span>

                            <div className={styles.menu_hamburguer}>
                                <h3>
                                    Categorias
                                </h3>
                                <ul>
                                    <li>
                                    PROGRAMAÇÃO
                                    </li>
                                    <li>
                                    FRONT-END
                                    </li>
                                    <li>
                                    INFRAESTRUTURA
                                    </li>
                                    <li>
                                    BUSINESS
                                    </li>
                                    <li>
                                    DESIGN & UX
                                    </li>
                                </ul>
                            </div>
                        </>
                }
                

                

                <a href="">
                    <Image src="/imagens/Logo.svg" alt="Icone de Favoritos" width={40} height={40}/>
                </a>

                <h1>
                    Alura<span>Books</span>
                </h1>
            </div>

            <nav>

                <ul className={styles.navbar_mobile}>
                    <li>CATEGORIAS</li>
                    <li>FAVORITOS</li>
                    <li>MINHA ESTANTE</li>

                </ul>

                <div className={styles.icons}>
                    <a href="#" className={styles.favoritos}>
                        <Image src="/imagens/Favoritos.svg" alt="Icone de Favoritos" width={40} height={40}/>
                    </a>
                    
                    <a href="#">
                        <Image src="/imagens/Compras.svg" alt="Icone de Compras" width={40} height={40}/>
                        <span>
                            Minha Sacola
                        </span>
                    </a>
                    <a href="">
                    <Image src="/imagens/Usuario.svg" alt="Icone de Compras" width={40} height={40}/>
                        <span>
                            Meu perfil
                        </span>

                    </a>
                </div>

            </nav>

        </header>
     );
}
 
export default Header;