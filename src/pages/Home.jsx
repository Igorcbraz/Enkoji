import React from 'react';
import {
  // ChevronDownIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/solid'
import { AddressMap } from '../components/AddressMap';
import { Navbar } from '../components/Navbar';

import { Links } from '../utils/links.js'

import Monge from '../assets/images/monge.png';
import Carrousel1 from '../assets/images/carrousel1.jpg';
import Person1 from '../assets/images/person1.png';
import Person2 from '../assets/images/person2.png';
import Person3 from '../assets/images/person3.png';
import Grid1 from '../assets/images/grid1.png';
import Grid2 from '../assets/images/grid2.jpg';
import Grid3 from '../assets/images/grid3.jpg';
import GridFooter1 from '../assets/images/grid-footer-1.jpg';
import GridFooter2 from '../assets/images/grid-footer-2.jpg';
import GridFooter3 from '../assets/images/grid-footer-3.jpg';

import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import WhatsApp from '../assets/icons/whatsapp.svg';
import Youtube from '../assets/icons/youtube.svg';
import { ReactComponent as Waze } from '../assets/icons/waze.svg';
import { ReactComponent as Maps } from '../assets/icons/maps.svg';

export const Home = () => {

  const handleOpenSchedule = () => {
    window.open(Links.schedule, '_blank')
  }

  const handleOpenTrack = (plataform) => {
    Object.keys(Links.track).map(key => {
      if (key === plataform) {
        window.open(Links.track[key], '_blank');
      }
    })
  }

  return (
    <>
      <Navbar/>
      <section className='flex justify-center pb-5 pt-28 bg-gradient-to-r h-[77vh] from-primary-400 via-primary-500 to-primary-700 md:pt-0'>
        <div className='flex justify-between flex-wrap-reverse md:flex-nowrap gap-4 w-11/12 md:w-3/4 border border-white text-white p-9'>
          <div className='flex flex-col justify-between gap-5 md:gap-0'>
            <h1 className='text-4xl md:text-6xl'>
              Seja Bem-Vindo!
            </h1>
            <p className='text-md text-justify w-full md:w-5/6 md:text-xl'>
              Circundado pela natureza exuberante, observado pela rica fauna da floresta  e temperado com um ameno clima serrano, o templo é uma edificação sustentável e ambientalmente responsável que reúne as condições ideias para a meditação e as práticas dos que buscam desenvolver a paz interior.
            </p>
            <span className='flex gap-3'>
              <a href={Links.socialMedia.instagram} target='_blank' rel='noreferrer' className='transition hover:brightness-[0.85]'>
                <img src={Instagram} alt='Logo Instagram' className='w-6 h-6 md:w-8 md:h-8'/>
              </a>
              <a href={Links.socialMedia.facebook} target='_blank' rel='noreferrer' className='transition hover:brightness-[0.85]'>
                <img src={Facebook} alt='Logo Facebook' className='w-6 h-6 md:w-8 md:h-8'/>
              </a>
              <a href={Links.socialMedia.whatsapp} target='_blank' rel='noreferrer' className='transition hover:brightness-[0.85]'>
                <img src={WhatsApp} alt='Logo WhatsApp' className='w-6 h-6 md:w-8 md:h-8'/>
              </a>
              <a href={Links.socialMedia.youtube} target='_blank' rel='noreferrer' className='transition hover:brightness-[0.85]'>
                <img src={Youtube} alt='Logo Youtube' className='w-6 h-6 md:w-9 md:h-9'/>
              </a>
            </span>
          </div>
          <img
            src={Carrousel1}
            alt='Imagem do templo Enkoji'
            className='w-full object-cover md:w-5/12'
          />
        </div>
      </section>
      <section className='flex justify-center my-7' id='infos'>
        <div className='flex justify-between flex-wrap w-4/5 text-primary-500 md:flex-nowrap'>
          <div className='flex flex-col justify-evenly gap-10'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-xl font-bold uppercase md:text-3xl'>
                Horário de Funcionamento
              </h2>
              <div className='flex gap-3'>
                <ClockIcon
                  className='w-12 h-12 float-left md:w-14 md:h-14'
                />
                <span className='float-left'>
                  <p className='text-md md:text-xl'>Segunda a sexta: 14h às 18h</p>
                  <p className='text-md md:text-xl'>Sábado e Domingo: 9h às 17h</p>
                </span>
              </div>
              <button
                className='bg-primary-500 text-white text-4xs rounded-full py-2 mx-7 transition hover:bg-transparent hover:text-primary-500 border-2 border-primary-500'
                onClick={handleOpenSchedule}
              >
                Acessar Cronograma
              </button>
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-xl font-bold uppercase md:text-3xl'>
                Localização
              </h2>
              <div className='flex gap-3'>
                <MapPinIcon
                  className='w-12 h-12 float-left md:w-14 md:h-14'
                />
                <span className='float-left w-3/4'>
                  <p className='text-md md:text-xl'>R. Izequias Hengles - Itapecerica da Serra, SP</p>
                </span>
              </div>
              <div className='flex justify-between gap-5 mx-7'>
                <button
                  className='flex flex-row justify-center items-center gap-2 bg-primary-500 text-white text-4xs rounded-full py-2 w-full transition hover:bg-transparent hover:text-primary-500 border-2 border-primary-500'
                  onClick={() => handleOpenTrack('waze')}
                >
                  Waze
                  <Waze className='w-7 h-7'/>
                </button>
                <button
                  className='flex flex-row justify-center items-center gap-2 bg-primary-500 text-white text-4xs rounded-full py-2 w-full transition hover:bg-transparent hover:text-primary-500 border-2 border-primary-500'
                  onClick={() => handleOpenTrack('maps')}
                >
                  Maps
                  <Maps className='w-7 h-7'/>
                </button>
              </div>
            </div>
            <AddressMap/>
          </div>
          <img
            src={Monge}
            alt='Imagem de um monge no templo enkoji'
            className='w-full mt-5 md:w-1/2 md:mt-0'
          />
        </div>
      </section>
      <section className='flex justify-center bg-history bg-cover bg-no-repeat bg-fixed h-fit p-5 md:p-10' id='history'>
        <div className='flex flex-col justify-between gap-4 w-full h-fit text-primary-500 bg-white rounded px-10 pt-10 md:w-4/5'>
          <span>
            <h2 className='text-3xl font-bold mb-4 md:text-4xl'>A história do Templo Enkoji</h2>
            <p className='text-sm text-justify mb-3  md:text-lg'>
              O Enkoji é um templo da tradição budista japonesa Zen voltado à orientação de ensinamentos e práticas budistas.  Seu fundador e abade é o Rev. Tensho Ohata, nascido em 1920 no Japão.
            </p>
            <p className='text-sm text-justify mb-3  md:text-lg'>
              As obras do templo se iniciaram em 1991, com o objetivo de acomodar melhor os membros da comunidade e os serviços religiosos a ela prestados em decorrência das atividades desenvolvidas pelo Rev. Tensho Ohata junto ao Kinkaku-ji.
            </p>
            <p className='text-sm text-justify md:text-lg'>
              A construção do Enkoji durou dez anos, sendo inaugurado em 2001, em cerimônia que contou com a presença de autoridade de Itapecerica da Serra, além de muitos visitantes de diversas regiões do país e do Japão.
            </p>
          </span>
          <div className='flex flex-wrap h-full gap-6 md:flex-nowrap md:gap-14 md:h-3/5'>
            <div className='text-white bg-primary-500 rounded-t-xl p-5 w-full md:w-1/3'>
              <h3 className='text-center font-bold mb-3'>Missão</h3>
              <p className='text-justify'>
                Proporcionar aos seus visitantes e à sangha os caminhos para se alcançar uma vida Zen, mantendo vivos os ensinamentos e a proposta do budismo da tradição Zen, com a melhor experiência em práticas meditativas, excelência em acolhimento, meios de comunicação e trabalhos sociais.
              </p>
            </div>
            <div className='text-white bg-primary-500 rounded-t-xl p-5 w-full md:w-1/3'>
              <h3 className='text-center font-bold mb-3'>Visão</h3>
              <p className='text-justify'>
                Estabelecer um relacionamento único de conexão e  espiritualidade e ser reconhecido como o maior templo budismo da tradição Zen na região de São Paulo.
              </p>
            </div>
            <div className='text-white bg-primary-500 rounded-t-xl p-5  w-full md:w-[32%]'>
              <h3 className='text-center font-bold mb-3'>Valores</h3>
              <p className='text-start'>
                Amor,  Espiritualidade, Sustentabilidade, Integridade, Responsabilidade, Excelência, Natureza, Quietude, Abundância, Prosperidade
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-10 my-7'>
        <div className='flex justify-between flex-wrap gap-5 w-3/4 md:flex-nowrap'>
          <img
            className='w-4/5'
            src={Person1}
            alt='Foto monge ohata'
          />
          <span className='text-primary-500'>
            <h3 className='text-3xl font-bold'>
              Monge Ohata
            </h3>
            <hr className='mb-4 h-1 w-2/3 bg-primary-500 border-0'/>
            <p className='text-xl font-light text-justify'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente ! Venha ao templo Enkoji.Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar...
            </p>
          </span>
        </div>
        <div className='flex justify-between flex-wrap-reverse gap-5 w-3/4 md:flex-nowrap'>
          <span className='text-primary-500'>
            <h3 className='text-3xl font-bold'>
              Monge Marcos Lopes
            </h3>
            <hr className='mb-4 h-1 w-2/3 bg-primary-500 border-0'/>
            <p className='text-base font-light text-justify'>
            Marcos Lopes é bacharelado em musicoterapeuta formado na  FMU, facilitador de círculo de tambores comunitário (Rtbrasil), foi professor de música do curso técnico no Conservatório Beethoven por mais de 17 anos,  formado em facilitador em meditação na Saúde pela Unifesp, tem formação produção cultural e artístico pelo Senac,  formação em Administração de Conflitos Pelo Senac, atua como conselheiro e liderança comunitária, formado pelo Senad, Tem especialidade em docência na meditação pela Universidade Estácio, é coordenador e Monge do Templo Zen Budista Enkoji, fotógrafo Fine Art,  MBA Growth marketing pela faculdade Unopar, educação ambiental pelo Senai, ESG pela INBS além de  ministrante  palestras, seminários e oficinas em instituições de ensino, culturais, seminários e empresariais.
            </p>
          </span>
          <img
            className='w-full h-80'
            src={Person2}
            alt='Foto monge Marcos Lopes'
          />
        </div>
        <div className='flex justify-between flex-wrap gap-5 w-3/4 md:flex-nowrap'>
          <img
            className='w-full h-[21rem]'
            src={Person3}
            alt='Foto Monge Luiz'
          />
          <span className='text-primary-500'>
            <h3 className='text-3xl font-bold'>
              Monge Luiz
            </h3>
            <hr className='mb-4 h-1 w-2/3 bg-primary-500 border-0'/>
            <p className='text-base font-light text-justify'>
            Luiz Carlos Rusilo possui graduação em Engenharia de Minas pela Escola Politécnica da USP, mestre em Engenharia Mineral pela Escola Politécnica da USP, doutor em Engenharia Mineral pela Escola Politécnica da USP, graduado em Direito pela FD-USP e especialista em Direito Ambiental pela FD-PUCSP. Contabilista, e Profissional de Educação Física. Professor da Universidade Federal de Alfenas - Unifal-MG, do Núcleo de Engenharia de Minas desde 2014. Professor da Pontifícia Universidade Católica de São Paulo - PUC-SP, na Faculdade de Economia, Administração, Contabilidade e Atuária, área de Métodos Quantitativos, do MBA em Ciências Atuariais e da Faculdade de Ciências Exatas e Tecnologia da PUC-SP de 2006 a 2014. Tem experiência em Geotecnia, Mecânica de Rochas, Mecânica de Solos, Resistência dos Materiais, Confiabilidade Estrutural, estabilidade de estruturas em solo e rocha, Sustentabilidade, Meio Ambiente e tratamento estatístico e modelagem de dados em Ciências da Fala.
            </p>
          </span>
        </div>
      </section>
      <section className='flex justify-center bg-primary-500 p-7' id='buddhism'>
        <div className='grid grid-cols-1 gap-12 w-10/12 md:grid-cols-2'>
          <div className='flex flex-col justify-evenly gap-5 text-white h-full'>
            <h2 className='text-6xl font-medium'>
              Saiba mais sobre o Budismo
            </h2>
            <p className='text-justify text-xl font-light'>
            A filosofia budista é guiada pelos ensinamentos de Buda, que conduzem o indivíduo a uma felicidade plena, através das práticas meditativas, do controle da mente e da autoanálise de suas ações diárias. O budismo é reconhecido como uma filosofia de vida, porque os ensinamentos de Buda são focados na razão e na análise individual de cada ser humano.
            </p>
            <div className='flex flex-col gap-4'>
              <button className='text-primary-500 bg-white px-5 py-3 rounded-full text-xl font-medium transition hover:bg-transparent hover:text-white border-2 border-white'>
                Budismo no dia a dia
              </button>
              <button className='text-primary-500 bg-white px-5 py-3 rounded-full text-xl font-medium transition hover:bg-transparent hover:text-white border-2 border-white'>
                Retiros - para quem é indicado
              </button>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-5 h-full'>
            <img src={Grid1} alt='Foto Buda' className='col-span-2'/>
            <img src={Grid2} alt='Foto em momento de meditação' className='w-full'/>
            <img src={Grid3} alt='Foto do templo ao lado de um lago' className='w-full h-full'/>
          </div>
        </div>
      </section>
      <section className='flex justify-center bg-primary-500 p-7' id='gallery'>
        <div className='grid grid-cols-1 gap-12 w-10/12 text-white md:grid-cols-2'>
          <div className='flex flex-col gap-5'>
            <h3 className='text-6xl font-bold uppercase'>
              Galeria
            </h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-3 h-full'>
              <img src={GridFooter1} alt='' className='row-span-2 h-full w-full'/>
              <img src={GridFooter2} alt='' className='h-full w-full'/>
              <img src={GridFooter3} alt='' className='h-full w-full object-cover'/>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
              <h4 className='text-3xl font-bold uppercase'>Contato</h4>
              <a href='tel:+5511968981736' className='text-xl'>
                (11) 9 1352-9667
              </a>
              <a href='mailto:templo.enkoji@gmail.com' className='text-xl'>
                templo.enkoji@gmail.com
              </a>
              <a href={Links.socialMedia.whatsapp} target='_blank' rel='noreferrer' className='w-full'>
                <button className='text-primary-500 bg-white px-4 py-2 rounded-full text-xl font-medium w-full transition hover:bg-transparent hover:text-white border-2 border-white'>
                  Converse conosco pelo WhatsApp
                </button>
              </a>
            </div>
            <div className='flex flex-col gap-5'>
              <h4 className='text-3xl font-bold uppercase'>Conte a sua vivência no Templo Enkoji</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores est id amet voluptate perspiciatis voluptatum</p>
              <a href={Links.socialMedia.maps} target='_blank' rel='noreferrer' className='w-full'>
                <button className='text-primary-500 bg-white px-4 py-2 rounded-full text-xl font-medium w-full transition hover:bg-transparent hover:text-white border-2 border-white'>
                  Conte Sua Experiência
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
