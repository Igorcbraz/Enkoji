import React from 'react';
import {
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { Animation } from '../components/Animation'
import { Title } from '../components/Title'
import { AddressMap } from '../components/AddressMap'

import { Links } from '../constants/links.js'

import Carrousel1 from '../assets/images/carrousel2.jpg';
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
import GMaps from '../assets/icons/maps.svg';
import Waze from '../assets/icons/waze.svg';

export const Home = () => {
  const navigate = useNavigate()

  const getNestedProperty = (obj, key) => {
    return key.split('.').reduce((o, i) => (o ? o[i] : null), obj)
  }

  const handleOpenLink = (key) => {
    const link = getNestedProperty(Links, key)

    if (!link) return console.error(`Link not found for key: ${key}`)

    window.open(link, '_blank')
  }

  return (
    <>
      <Navbar/>
      <section className='flex justify-center pt-28 bg-gradient-to-r h-fit xl:h-[98vh] from-primary-400 via-primary-500 to-primary-700 md:pt-32'>
        <div className='flex justify-between flex-wrap xl:flex-nowrap w-[90%] max-w-screen-2xl text-white p-9 xl:p-4 pt-0 gap-8 xl:gap-0'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-center items-center xl:items-start flex-col gap-3 xl:gap-0'>
              <Animation type='fadeInTop'>
                <Badge>
                  Budismo e meditação
                </Badge>
              </Animation>
              <Animation type='fadeInLeft'>
                <h1 className='text-center xl:self-start text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[6.5rem] xl:text-[8rem] font-script z-10 ml-0 lg:ml-[-2rem] mt-[-1rem]'>
                  Templo Enkoji
                </h1>
                <hr className='block w-full bg-gradient-to-r from-primary-500 to-primary-450 h-1 lg:h-2 border-0 mt-[-1.1rem] sm:mt-[-2rem] md:mt-[-2.5rem] lg:mt-[-1.5rem] xl:mt-[-2rem] mb-3 md:mb-6'/>
              </Animation>
              <Animation type='fadeIn'>
                <p className='text-sm md:text-base text-justify w-full leading-6 md:leading-7 xl:w-5/6 font-body font-light'>
                Enkoji é um edifício sustentável, localizado em meio a uma natureza exuberante, com uma variedade de animais selvagens e um clima serrano ameno. Ele proporciona um ambiente ideal para a meditação e práticas que visam o desenvolvimento da paz interior.
                </p>
              </Animation>
            </div>
            <Animation type='fadeInBottom' containerClass='hidden xl:block self-start'>
              <button
                className='text-lg uppercase font-semibold mt-5 px-7 py-3 rounded-full font-body text-white border-primary-300 border-[1px] bg-gradient-to-r from-primary-400 to-primary-450 shadow-xl shadow-primary-600 transition ease-in-out hover:shadow-primary-700 hover:bg-primary-400 hover:scale-105'
                onClick={() => navigate('/contato')}
              >
              Junte-se a Nós
              </button>
            </Animation>
          </div>
          <Animation type='fadeIn' containerClass='flex flex-col justify-center items-center w-full gap-10 xl:gap-0'>
            <LazyLoadImage
              src={Carrousel1}
              alt='Imagem do templo Enkoji'
              effect='opacity'
              className='w-full xl:w-[80%] border-primary-500 border-2 shadow-xl shadow-primary-700 rounded-sm z-20'
            />
            <button
              className='block xl:hidden text-sm sm:text-md md:text-lg uppercase font-medium px-7 py-3 rounded-full font-body text-white border-primary-300 border-[1px] bg-gradient-to-r from-primary-400 to-primary-450 shadow-xl shadow-primary-600 transition ease-in-out hover:shadow-primary-700 hover:bg-primary-400 hover:scale-105'
              onClick={() => navigate('/contato')}
            >
              Junte-se a Nós
            </button>
          </Animation>
        </div>
      </section>
      <section id='infos' className='h-fit xl:h-[100vh] flex flex-col justify-around items-center py-16 xl:pt-0 px-4 bg-gradient-to-r gap-7 from-primary-400 via-primary-500 to-primary-700 text-white'>
        <Title
          badge='Localização, horários e retiros'
          text='Venha nos visitar'
          caption='Conheça a programação e participe de nossas atividades'
        />
        <Animation type='fadeInBottom' containerClass='flex justify-center flex-wrap gap-5 w-full px-5' delay={1500}>
          <Card
            iconComponent={<ClockIcon className='w-16 h-16 text-white'/>}
            onClick={() => handleOpenLink('schedule')}
            buttonTitle='Acessar Cronograma'
            title='Horários'
          >
            <span className='text-xs sm:text-sm lg:text-lg font-body font-light text-justify'>
              <p>Segunda a sexta:  9h às 14h;</p>
              <p>Sábado: 9 às 12h;</p>
              <p>Domingo: 9 às 13h.</p>
            </span>
          </Card>
          <Card
            iconComponent={<UserGroupIcon className='w-16 h-16 text-white'/>}
            onClick={() => handleOpenLink('retreat')}
            buttonTitle='Conhecer Retiros'
            title='Retiros'
          >
            <span className='text-xs sm:text-sm lg:text-lg font-body font-light text-justify'>
              <p>Aprendizado, reflexão e conexão com a natureza e nós mesmos. Vivenciar a tranquilidade do templo e a prática de Mizen.</p>
            </span>
          </Card>
          <Card
            iconComponent={<MapPinIcon className='w-16 h-16 text-white'/>}
            onClick={() => handleOpenLink('track.maps')}
            buttonTitle='Encontrar rotas'
            title='Localização'
          >
            <span className='text-xs sm:text-sm lg:text-lg font-body font-light text-justify'>
              <p>R. Izequias Hengles - Itapecerica da Serra, SP.</p>
            </span>
          </Card>
        </Animation>
      </section>
      <section id='history' className='flex justify-center bg-history bg-cover bg-no-repeat bg-fixed h-fit p-5 md:p-10'>
        <Animation type='fadeInBottom' containerClass='flex flex-col justify-between gap-4 w-full h-fit text-primary-500 bg-white shadow-md shadow-gray-950 rounded px-5 md:px-10 pt-10 xl:w-4/5 xl:max-w-[70%]' delay={1000}>
          <span>
            <h2 className='font-script text-center text-3xl font-bold mb-4 md:text-4xl'>História - Templo Enkoji</h2>
            <p className='text-sm text-justify mb-3 font-body md:text-lg'>
              O Enkoji é um templo da tradição budista japonesa Zen voltado à orientação de ensinamentos e práticas budistas.  Seu fundador e abade é o Rev. Tensho Ohata, nascido em 1920 no Japão.
              As obras do templo se iniciaram em 1991, com o objetivo de acomodar melhor os membros da comunidade e os serviços religiosos a ela prestados em decorrência das atividades desenvolvidas pelo Rev. Tensho Ohata junto ao Kinkaku-ji.
              A construção do Enkoji durou dez anos, sendo inaugurado em 2001, em cerimônia que contou com a presença de autoridade de Itapecerica da Serra, além de muitos visitantes de diversas regiões do país e do Japão.
            </p>
          </span>
          <div className='flex flex-wrap h-full gap-6 md:gap-2 md:flex-nowrap md:h-3/5 pb-7 md:pb-0'>
            <div className='text-white bg-gradient-to-l from-primary-600 to-primary-500 shadow-xl shadow-primary-600 border-primary-400 border-[1px] rounded-xl md:rounded-t-xl md:rounded-b-none p-5 w-full md:w-1/3'>
              <h3 className='text-center font-bold text-xl mb-3'>Missão</h3>
              <p className='text-justify font-light text-sm'>
                Proporcionar aos seus visitantes e à sangha os caminhos para se alcançar uma vida Zen, mantendo vivos os ensinamentos e a proposta do budismo da tradição Zen, com a melhor experiência em práticas meditativas, excelência em acolhimento, meios de comunicação e trabalhos sociais.
              </p>
            </div>
            <div className='text-white bg-gradient-to-l from-primary-600 to-primary-500 shadow-xl shadow-primary-600 border-primary-400 border-[1px] rounded-xl md:rounded-t-xl md:rounded-b-none p-5 w-full md:w-1/3'>
              <h3 className='text-center font-bold text-xl mb-3'>Visão</h3>
              <p className='text-justify font-light text-sm'>
                Estabelecer um relacionamento único de conexão e  espiritualidade e ser reconhecido como o maior templo budismo da tradição Zen na região de São Paulo.
              </p>
            </div>
            <div className='text-white bg-gradient-to-l from-primary-600 to-primary-500 shadow-xl shadow-primary-600 border-primary-400 border-[1px] rounded-xl md:rounded-t-xl md:rounded-b-none p-5  w-full md:w-[32%]'>
              <h3 className='text-center font-bold text-xl mb-3'>Valores</h3>
              <p className='text-justify font-light text-sm'>
                Amor,  Espiritualidade, Sustentabilidade, Integridade, Responsabilidade, Excelência, Natureza, Quietude, Abundância, Prosperidade
              </p>
            </div>
          </div>
        </Animation>
      </section>
      <section id='monges' className='flex flex-col justify-center items-center gap-10 my-7'>
        <Animation type='fadeInRight' containerClass='flex justify-center lg:justify-between flex-wrap gap-5 w-3/4 lg:flex-nowrap' delay={0}>
          <LazyLoadImage
            src={Person1}
            alt='Foto monge ohata'
            className='w-full h-full sm:w-80 sm:h-80'
          />
          <span className='text-primary-500 w-full'>
            <h3 className='text-2xl sm:text-3xl font-bold'>
              Monge Ohata
            </h3>
            <hr className='mb-4 h-1 w-full sm:w-2/3 bg-primary-500 border-0'/>
            <p className='text-sm md:text-base font-light text-justify'>
              Fundador e primeiro abade  Rev. Tensho Ohata, nascido em 1918 no Japão e falecido em 2017.
            </p>
          </span>
        </Animation>
        <Animation type='fadeInLeft' containerClass='flex justify-center lg:justify-between flex-wrap-reverse gap-5 w-3/4 lg:flex-nowrap' delay={500}>
          <span className='text-primary-500 w-full'>
            <h3 className='text-2xl sm:text-3xl font-bold'>
              Monge Marcos Lopes
            </h3>
            <hr className='mb-4 h-1 w-full sm:w-2/3 bg-primary-500 border-0'/>
            <p className='text-sm md:text-base font-light text-justify'>
            Marcos Lopes é bacharelado em musicoterapeuta formado na  FMU, facilitador de círculo de tambores comunitário (Rtbrasil), foi professor de música do curso técnico no Conservatório Beethoven por mais de 17 anos,  formado em facilitador em meditação na Saúde pela Unifesp, tem formação produção cultural e artístico pelo Senac,  formação em Administração de Conflitos Pelo Senac, atua como conselheiro e liderança comunitária, formado pelo Senad, Tem especialidade em docência na meditação pela Universidade Estácio, é coordenador e Monge do Templo Zen Budista Enkoji, fotógrafo Fine Art,  MBA Growth marketing pela faculdade Unopar, educação ambiental pelo Senai, ESG pela INBS além de  ministrante  palestras, seminários e oficinas em instituições de ensino, culturais, seminários e empresariais.
            </p>
          </span>
          <LazyLoadImage
            src={Person2}
            alt='Foto monge Marcos Lopes'
            className='w-full h-full sm:w-80 sm:h-80'
          />
        </Animation>
        <Animation type='fadeInRight' containerClass='flex justify-center lg:justify-between flex-wrap gap-5 w-3/4 lg:flex-nowrap' delay={1000}>
          <LazyLoadImage
            src={Person3}
            alt='Foto Monge Luiz'
            className='w-full h-full sm:w-80 sm:h-80'
          />
          <span className='text-primary-500 w-full'>
            <h3 className='text-2xl sm:text-3xl font-bold'>
              Monge Luiz
            </h3>
            <hr className='mb-4 h-1 w-full sm:w-2/3 bg-primary-500 border-0'/>
            <p className='text-sm md:text-base font-light text-justify'>
            Luiz Carlos Rusilo possui graduação em Engenharia de Minas pela Escola Politécnica da USP, mestre em Engenharia Mineral pela Escola Politécnica da USP, doutor em Engenharia Mineral pela Escola Politécnica da USP, graduado em Direito pela FD-USP e especialista em Direito Ambiental pela FD-PUCSP. Contabilista, e Profissional de Educação Física. Professor da Universidade Federal de Alfenas - Unifal-MG, do Núcleo de Engenharia de Minas desde 2014. Professor da Pontifícia Universidade Católica de São Paulo - PUC-SP, na Faculdade de Economia, Administração, Contabilidade e Atuária, área de Métodos Quantitativos, do MBA em Ciências Atuariais e da Faculdade de Ciências Exatas e Tecnologia da PUC-SP de 2006 a 2014. Tem experiência em Geotecnia, Mecânica de Rochas, Mecânica de Solos, Resistência dos Materiais, Confiabilidade Estrutural, estabilidade de estruturas em solo e rocha, Sustentabilidade, Meio Ambiente e tratamento estatístico e modelagem de dados em Ciências da Fala.
            </p>
          </span>
        </Animation>
      </section>
      <section id='buddhism' className='flex justify-center bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 px-5 sm:p-7 py-7'>
        <div className='grid grid-cols-1 gap-12 w-full sm:w-10/12 lg:grid-cols-2'>
          <Title
            badge='Aprendizado'
            text='Saiba mais sobre Budismo'
            caption='Conheça a filosofia e práticas budistas'
          >
            <p className='text-justify text-sm sm:text-xl font-light mt-5'>
              A filosofia budista é guiada pelos ensinamentos de Buda, que conduzem o indivíduo a uma felicidade plena, através das práticas meditativas, do controle da mente e da autoanálise de suas ações diárias. O budismo é reconhecido como uma filosofia de vida, porque os ensinamentos de Buda são focados na razão e na análise individual de cada ser humano.
            </p>
          </Title>
          <Animation type='fadeInLeft' containerClass='grid grid-cols-2 gap-5 h-full' delay={1000}>
            <LazyLoadImage src={Grid1} alt='Foto Buda' className='col-span-2'/>
            <LazyLoadImage src={Grid2} alt='Foto em momento de meditação' className='w-full'/>
            <LazyLoadImage src={Grid3} alt='Foto do templo ao lado de um lago' className='w-full h-full'/>
          </Animation>
        </div>
      </section>
      <section className='flex justify-center bg-gradient-to-r from-primary-400 via-primary-500 to-primary-700 px-5 sm:p-7 py-7'>
        <div className='grid grid-cols-1 gap-12 w-full sm:w-10/12 text-white lg:grid-cols-2'>
          <Animation id='gallery' type='fadeInRight' containerClass='flex flex-col gap-5' delay={1000}>
            <h3 className='text-[2.3rem] sm:text-[3rem] md:text-[4rem] font-bold uppercase'>
              Galeria
            </h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-3 h-full'>
              <LazyLoadImage src={GridFooter1} alt='Estátua do buda meditando' className='row-span-2 h-full w-full'/>
              <LazyLoadImage src={GridFooter2} alt='Caminho de cerejeiras rosas em meio a natureza' className='h-full w-full'/>
              <LazyLoadImage src={GridFooter3} alt='Foto frontal do da entrada do templo Enkoji' className='h-full w-full object-cover'/>
            </div>
          </Animation>
          <Animation id='experience' type='fadeInLeft' containerClass='flex flex-col gap-10' delay={1000}>
            <Title
              badge='Redes sociais'
              text='Conte a sua experiência'
              caption='Compartilhe suas vivências no Templo Enkoji'
            />
            <div className='w-full flex flex-wrap justify-center items-center gap-5'>
              <a
                href={Links.socialMedia.instagram}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <LazyLoadImage src={Instagram} alt='Logo Instagram' className='w-6 h-6 md:w-8 md:h-8' effect='opacity' />
              </a>
              <a
                href={Links.socialMedia.facebook}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <LazyLoadImage src={Facebook} alt='Logo Facebook' className='w-6 h-6 md:w-8 md:h-8' effect='opacity' />
              </a>
              <a
                href={Links.socialMedia.whatsapp}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <LazyLoadImage src={WhatsApp} alt='Logo WhatsApp' className='w-6 h-6 md:w-8 md:h-8' effect='opacity' />
              </a>
              <a
                href={Links.socialMedia.youtube}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <LazyLoadImage src={Youtube} alt='Logo Youtube' className='w-6 h-6 md:w-9 md:h-9' effect='opacity' />
              </a>
              <a
                href={Links.socialMedia.email}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <EnvelopeIcon className='w-6 h-6 md:w-9 md:h-9' />
              </a>
              <a
                href={Links.track.maps}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <LazyLoadImage src={GMaps} alt='Logo Google Maps' className='w-6 h-6 md:w-9 md:h-9' effect='opacity' />
              </a>
              <a
                href={Links.track.waze}
                target='_blank'
                rel='noreferrer'
                className='flex justify-center items-center bg-gradient-to-l from-primary-600 to-primary-500 rounded-md p-3 shadow-xl shadow-primary-600 border-primary-400 border-2 transition hover:brightness-[0.85]'
              >
                <LazyLoadImage src={Waze} alt='Logo Waze' className='w-6 h-6 md:w-9 md:h-9' effect='opacity' />
              </a>
            </div>
            <button
              className='text-sm sm:text-md md:text-lg uppercase font-medium mt-5 px-7 py-3 rounded-full font-body text-white border-primary-300 border-[1px] bg-gradient-to-r from-primary-400 to-primary-450 shadow-xl shadow-primary-600 transition ease-in-out hover:shadow-primary-700 hover:bg-primary-400 hover:scale-105'
              onClick={() => handleOpenLink('socialMedia.maps')}
            >
              Deixe seu depoimento
            </button>
            <AddressMap/>
          </Animation>
        </div>
      </section>
    </>
  );
}
