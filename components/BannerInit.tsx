import Image from 'next/image';
import styles from '../styles/BannerInit.module.css'


const BannerInit = () => {
    return ( 
        <div className={styles.banner_init}>
            <h2>
                Já sabe por onde começar?
            </h2>
            <p>
                Encontre em nossa estante o que precisa para seu desenvolvimento!
            </p>
            <span>
                <Image src={'/imagens/lupa.png'} width={17.49} height={17.49} alt='Icon Lupa'/>
                Qual será sua próxima leitura?
            </span>
        </div>
     );
}
 
export default BannerInit;