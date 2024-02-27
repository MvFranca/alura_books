"use client"

import styles from '../styles/UltimosLancamentos.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

type props = {
    title: string,
    itens: string[],
}

const UltimosLancamentos = ({title, itens}:props) => {

    // const swiper = new Swiper('.swiper', {
    //     // configure Swiper to use modules
    //     modules: [Navigation, Pagination],
    //     ...
    //   });


    return ( 
        <section className={styles.ultimos_lancamentos}>
            <h2>
                {title}
            </h2>

            <div className={styles.carrossel}>
            <div className={styles.livros}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={3}
                    navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 20
                            },
                            // when window width is < 768px
                            0: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            }
                          }}
                    // add this prop to center the slides
                    // centeredSlides={true}
                    >
                        {
                            itens.map((livro, index) => {
                                return(
                                    <SwiperSlide  key={index} className={styles.livro}>
                                        <Image width={179} height={249} src={livro}  alt='Livro'/>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
            </div>


            <div className={styles.angular}>

                <div className={styles.esquerda}>

                    <div className={styles.infos}>
                        <span>
                        Talspanez você também se interesse spanor...
                        </span>
                        <h3>
                        Angular 11 e Firebase
                        </h3>
                        <p>
                        Construindo uma aplicação integrada com a plataforma do Google.
                        </p>
                    </div>

                    <div className={styles.icons}>
                        <Image src={'/imagens/Favoritos.svg'} alt='Favoritos' width={26} height={24}/>

                        <Image src={'/imagens/Compras.svg'} alt='Favoritos' width={26} height={24}/>

                    </div>

                </div>

                <div className={styles.direita}>

                    <Image src={'/imagens/Angular.svg'} alt='Logo do Angular' width={162} height={168}/>

                    <Link href={''}>
                        Saiba mais
                    </Link>

                </div>

            </div>

            </div>
        </section>
     );
}
 
export default UltimosLancamentos;
