"use client"

import styles from '../styles/Novidades.module.css'

const Novidades = () => {
    return ( 
        <section className={styles.novidades}>
            <div className={styles.textos}>
                <h2>
                Fique por dentro das novidades!
                </h2>
                <p>
                Atualizações de e-books, novos livros, promoções e outros.
                </p>
            </div>

            <input type="text" placeholder='Cadestre seu E-mail' />
        </section>
     );
}
 
export default Novidades;