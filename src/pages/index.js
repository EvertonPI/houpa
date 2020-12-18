// Não versão nova do react não necessita importar

import { useState } from "react";
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/home/Header";
import Section from "../components/home/section/Section";

export default function Home() {
  // condição para pagamento verificando os parametros pelo back end

  const [value, SetValue] = useState("0,00");
  return (
    <div>
      <Head>
        <title>Madame Ristow</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <script
          type="text/javascript"
          src="//code.jquery.com/jquery-1.11.0.min.js"
        ></script>
        <script
          type="text/javascript"
          src="//code.jquery.com/jquery-migrate-1.2.1.min.js"
        ></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {/* passando a props direto do elemento filho  e mutando com estado*/}
        <Header title={`Meu carrinho | R$ ${value}`} />
        <Section />
      </main>
    </div>
  );
}
