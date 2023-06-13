import { RefObject, useEffect, useRef, useState } from 'react';
import { NextPage } from "next";
import Head from 'next/head';
import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { Services } from '../components/services/Services';
import { Form } from '../components/form/Form';
import { Footer } from '../components/footer/Footer';


const HomePage:NextPage = ():JSX.Element => {

  const [valuePosition, setValuePosition] = useState<number>(1000);

  const [refValue, setRefValue] = useState<RefObject<HTMLDivElement>>();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(targetRef.current !== null){
      setRefValue(targetRef)
    }
  }, [targetRef])

  return (
    <>
      <Head>
        <title>Aspiazu Tech</title>
        <meta name="description" content="Servicio de creación de sitios web profesionales para todo tipo de negocio o emprendimiento" />
        <meta name="keywords" content="páginas web, sitios web, diseño web, desarrollo web, landing page, paginas de aterrizaje" />
      </Head>

      <Header refValue={refValue} valuePosition={valuePosition} />
      <Main setValuePosition={setValuePosition} />

      <Services />

      <Form targetRef={targetRef} />

      <Footer />
    </>
  )
}


export default HomePage;