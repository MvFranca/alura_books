import styles from '../styles/Topics.module.css'

const Topics = () => {

    const Topics = [
        "Android",
        "Marketing Digital",
        "Agile",
        "Startups",
        "HTML & CSS",
        "Python",
        "OO",
        "Java",

    ]

    return ( 
        <section className={styles.topics_container}>
        <div className={styles.conteudo}>
    
                <h2>
                TÓPICOS VISITADOS RECENTEMENTE
                </h2>
    
                <div className={styles.topics}>
                    {
    
                        Topics.map((topic) => {
                            return(
                                <>
                                <span>
                                    {topic}
                                </span>
                                </>
                            )
                        })
                    }
                </div>
        </div>

        </section>
     );
}
 
export default Topics;