import Image from 'next/image';
import styles from '../styles/layout/Footer.module.css'

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <span>
                Grupo Alura
            </span>

                <div className={styles.columnFooter}>
                    <h4>
                    EDUCAÇÃO
                    </h4>
                    <ul>
                        <li>
                        <Image src="/footer/Caelum.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Caelum</li>
                        <li>
                        <Image src="/footer/CasaDoCodigo.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Casa do Código</li>
                    </ul>
                </div>
                <div className={styles.columnFooter}>
                    <h4>
                    EDUCAÇÃO ONLINE
                    </h4>
                    <ul>
                        <li>
                            <Image src="/footer/Alura.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Alura
                        </li>
                        <li>
                        <Image src="/footer/AluraEmpresas.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Alura Para Empresas</li>
                        <li>
                            <Image src="/footer/Alura.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Alura LATAM</li>
                        <li>
                            <Image src="/footer/AluraStart.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Alura Start</li>
                        <li>
                            <Image src="/footer/MusicDot.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            MusicDot</li>
                        <li>
                            <Image src="/footer/AluraLingua.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Alura Língua</li>
                        <li>
                            <Image src="/footer/Alura.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            PM3</li>
                    </ul>
                </div>
                <div className={styles.columnFooter}>
                    <h4>
                    COMUNIDADE
                    </h4>
                    <ul>
                        <li>
                            <Image src="/footer/HipstersTech.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Hipsters ponto Tech</li>
                        <li>
                            <Image src="/footer/Scuba.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Scuba Dev</li>
                        <li>
                            <Image src="/footer/Layers.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Layers ponto Tech</li>
                        <li>
                            <Image src="/footer/LikeABoss.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Like a Boss</li>
                        <li>
                            <Image src="/footer/CarreirasemFronteira.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Carreira sem Fronteira</li>
                        <li>
                            <Image src="/footer/HipstersJobs.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            Hipsters ponto Jobs</li>
                        <li>
                            <Image src="/footer/GUj.svg" alt='Logo Alura' width={35} height={35}/>
                            
                            GUJ</li>
                    </ul>
                </div>

            


        </footer>
     );
}
 
export default Footer;