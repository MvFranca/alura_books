import Image from "next/image";
import styles from "./page.module.css";
import BannerInit from "@/components/BannerInit";
import UltimosLancamentos from "@/components/UltimosLancamentos";
import Topics from "@/components/Topics";
import Novidades from "@/components/Novidades";

export default function Home() {

  
  const ultimosLancamentos = [
    "/imagens/livros/Javascript.svg",
    "/imagens/livros/Liderança.svg",
    "/imagens/livros/Portugol.svg",
    "/imagens/livros/UX.svg",
    "/imagens/livros/ApacheKafka.svg",
    "/imagens/livros/Nodejs.svg",
  ]

  const maisVendidos = [
    "/imagens/livros/MetricasAgeis.svg",
    "/imagens/livros/Guia-Front-end.svg",
    "/imagens/livros/ApacheKafka.svg",
    "/imagens/livros/UX.svg",
    "/imagens/livros/Portugol.svg",
    "/imagens/livros/Nodejs.svg",
  ]

  return (
    <main className={styles.main}>
     <BannerInit/>
     <UltimosLancamentos
      title="ÚLTIMOS LANÇAMENTOS"
      itens={ultimosLancamentos}
     />
     <UltimosLancamentos
      title="MAIS VENDIDOS"
      itens={maisVendidos}
     />
     <Topics/>
     <Novidades/>
    </main>
  );
}
