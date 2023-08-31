import { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'
import {
  ChevronRightIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

import { Spinner } from '../components/Spinner/Spinner'
import { fetchLogin } from '../service/fetch/login'

export const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = {
        email,
        password
      }
      const user = await fetchLogin(data)

      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        navigate('/app/colaboradores')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='w-screen h-screen bg-login bg-cover bg-center bg-no-repeat'>
      <main className='p-20'>
        <div className='bg-primary-500/70 w-96 h-full p-7 rounded-lg border-[1.3px] border-primary-300'>
          <span>
            <h1 className='text-4xl font-semibold text-start text-white' style={{letterSpacing: '0.2rem'}}>Login</h1>
            <p className='text-start text-white text-sm mt-1'>
              Acesse a sua conta para continuar.
            </p>
          </span>
          <form className='flex flex-col gap-4 mt-10' onSubmit={handleSubmitForm}>
            <span className='flex flex-col gap-1'>
              <Label
                className='text-white'
                htmlFor='email'
                value='E-mail'
              />
              <TextInput
                id='email'
                type='email'
                placeholder='templo@enkoji.com'
                class='w-full bg-primary-400 border-[1.3px] border-primary-200 placeholder-primary-100/50 rounded-md p-2 text-white focus:bg-primary-300 focus:border-primary-100/50 focus:ring-0'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </span>
            <span className='flex flex-col gap-1'>
              <Label
                className='text-white'
                htmlFor='password'
                value='Senha'
              />
              <div className='flex justify-between items-center'>
                <TextInput
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='********'
                  class='w-72 bg-primary-400 border-[1.3px] border-primary-200 placeholder-primary-100/50 rounded-md p-2 text-white focus:bg-primary-300 focus:border-primary-100/50 focus:ring-0'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Button class='w-20' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeIcon
                      className='w-5 h-5 text-white'
                    />
                  ) : (
                    <EyeSlashIcon
                      className='w-5 h-5 text-white'
                    />
                  )}
                </Button>
              </div>
              <span className='flex flex-row justify-start p-1'>
                <a href='#' className='text-white text-sm underline'>Esqueci minha senha</a>
              </span>
            </span>
            <button
              type='submit'
              size='xl'
              className='flex justify-center items-center bg-primary-700 rounded-md h-12 text-white hover:bg-primary-600 focus:bg-primary-600 focus:ring-0 transition duration-300 ease-in-out disabled:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={email === '' || password === ''}
            >
              {loading ? (
                <Spinner  color='primary-100' size='w-5 h-5'/>
              ) : (
                <>
                  <p>
                    Acessar
                  </p>
                  <ChevronRightIcon
                    className='w-5 h-5 ml-2 mt-0.5'
                  />
                </>
              )}
            </button>
          </form>
        </div>
      </main>
    </section>
  )
}
