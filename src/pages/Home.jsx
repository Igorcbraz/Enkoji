import React from 'react';
import {
  ChevronDownIcon,
  PlusIcon,
  HeartIcon,
  PhoneIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/solid'
import { AddressMap } from '../components/AddressMap';

import Logo from '../assets/images/logo.png';
import Carrousel1 from '../assets/images/carrousel1.jpg';
import Monge from '../assets/images/monge.png';
import Person1 from '../assets/images/person1.png';
import Person2 from '../assets/images/person2.png';

import Instagram from '../assets/icons/instagram.svg';
import Facebook from '../assets/icons/facebook.svg';
import WhatsApp from '../assets/icons/whatsapp.svg';

export const Home = () => {

  const handleOpenSchedule = () => {
    console.log('Abrir o cronograma')
  }

  const handleOpenTrack = () => {
    console.log('Abrir o mapa')
  }

  return (
    <>
      <header className='flex justify-center bg-primary-500 pt-4'>
        <div className='flex justify-end gap-2 w-4/5'>
          <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
            <PlusIcon
              className='w-7 h-7'
            />
            <span>Seja Membro</span>
          </button>
          <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
            <HeartIcon
              className='w-6 h-6'
            />
            <span>Doações</span>
          </button>
          <button className='flex justify-between items-center gap-2 bg-secondary-500 rounded-full px-4 py-1 text-white text-xl font-normal'>
            <PhoneIcon
              className='w-6 h-6'
            />
            <span>Contato</span>
          </button>
        </div>
      </header>
      <nav className='flex justify-center bg-primary-500 pb-6 h-4/5'>
        <div className='flex items-center gap-2 w-4/5'>
          <img
            src={Logo}
            alt='Logo templo enkoji'
            className='w-1/5'
          />
          <ul className='flex flex-row justify-around items-center p-4 rounded-full w-full bg-secondary-500 text-white text-xl font-medium'>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Sobre nós</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Budismo</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Programação</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Loja</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Mídia</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
            <li className='flex justify-between items-center gap-2'>
              <a href='*'>Visite</a>
              <ChevronDownIcon
                className='w-6 h-6 mt-1'
              />
            </li>
          </ul>
        </div>
      </nav>
      <section className='flex justify-center pb-5 bg-primary-500'>
        <div className='flex justify-between gap-4 w-3/4 border border-white text-white p-9'>
          <div className='flex flex-col justify-between'>
            <h1 className='text-6xl'>
              Seja bem-vindo!
            </h1>
            <p className='text-2xl w-5/6'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente! Venha ao templo Enkoji
            </p>
            <span className='flex gap-3'>
              <img src={Instagram} alt='Logo Instagram' className='w-8 h-8'/>
              <img src={Facebook} alt='Logo Facebook' className='w-8 h-8'/>
              <img src={WhatsApp} alt='Logo WhatsApp' className='w-8 h-8'/>
            </span>
          </div>
          <img
            src={Carrousel1}
            alt='Imagem do templo Enkoji'
            className='w-5/12'
          />
        </div>
      </section>
      <section className='flex justify-center my-7'>
        <div className='flex justify-between w-4/5 text-primary-500'>
          <div className='flex flex-col justify-evenly gap-10'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold uppercase'>
                Horário de Funcionamento
              </h2>
              <div className='flex gap-3'>
                <ClockIcon
                  className='w-14 h-14 float-left'
                />
                <span className='float-left'>
                  <p className='text-xl'>Segunda a sexta: 14h às 18h</p>
                  <p className='text-xl'>Sábado e Domingo: 9h às 17h</p>
                </span>
              </div>
              <button
                className='bg-primary-500 text-white text-4xs rounded-full py-2 mx-7'
                onClick={handleOpenSchedule}
              >
                Acessar Cronograma
              </button>
            </div>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold uppercase'>
                Localização
              </h2>
              <div className='flex gap-3'>
                <MapPinIcon
                  className='w-14 h-14 float-left'
                />
                <span className='float-left w-3/4'>
                  <p className='text-xl'>R. Izequias Hengles - Itapecerica da Serra, SP</p>
                </span>
              </div>
              <button
                className='bg-primary-500 text-white text-4xs rounded-full py-2 mx-7'
                onClick={handleOpenTrack}
              >
                Acessar Rota
              </button>
            </div>
            <AddressMap/>
          </div>
          <img
            src={Monge}
            alt='Imagem de um monge no templo enkoji'
            className='w-1/2'
          />
        </div>
      </section>
      <section className='flex justify-center bg-history bg-cover bg-no-repeat bg-fixed backdrop-brightness-50 p-10 h-[90vh]'>
        <div className='flex flex-col justify-between gap-4 w-4/5 h-full text-primary-500 bg-white rounded px-10 pt-10'>
          <span>
            <h2 className='text-4xl font-bold mb-4'>A história do Templo Enkoji...</h2>
            <p className='text-justify'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, expedita eum nemo rerum autem ratione ab minima. Ex, distinctio officiis, omnis dolore adipisci incidunt veritatis pariatur molestiae reiciendis aperiam quos.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum velit ipsam temporibus placeat dolorem cupiditate vel reiciendis modi cum enim, nulla quas incidunt voluptate culpa quasi obcaecati praesentium numquam possimus.
            </p>
          </span>
          <div className='flex gap-14 mx-10 h-3/5'>
            <div className='text-white bg-primary-500 rounded-t-xl p-5'>
              <h3 className='text-center mb-3'>Missão</h3>
              <p className='text-justify'>Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!</p>
            </div>
            <div className='text-white bg-primary-500 rounded-t-xl p-5'>
              <h3 className='text-center mb-3'>Missão</h3>
              <p className='text-justify'>Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!</p>
            </div>
            <div className='text-white bg-primary-500 rounded-t-xl p-5'>
              <h3 className='text-center mb-3'>Missão</h3>
              <p className='text-justify'>Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo!</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center gap-10 my-7'>
        <div className='flex justify-between gap-5 w-3/4'>
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
        <div className='flex justify-between gap-5 w-3/4'>
          <img
            className='w-4/5'
            src={Person2}
            alt='Foto monge ohata'
          />
          <span className='text-primary-500'>
            <h3 className='text-3xl font-bold'>
              Monge Marcos Lopes
            </h3>
            <hr className='mb-4 h-1 w-2/3 bg-primary-500 border-0'/>
            <p className='text-xl font-light text-justify'>
              Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar ela pro mundo! Venha construí-la com a gente ! Venha ao templo Enkoji.Todo dia é um novo recomeço, um momento de criar a melhor versão de si e mostrar...
            </p>
          </span>
        </div>
      </section>
    </>
  );
}
