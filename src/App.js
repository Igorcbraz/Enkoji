import { Routes, Route, Outlet, Navigate, BrowserRouter} from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NotFound } from './pages/404';
import { routes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './containers/Layout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='*' element={<NotFound/> }/>
          <Route element={<PrivateOutlet />}>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<Layout Component={route.component} />}
                />
              )
            })}
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        theme='colored'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

const PrivateOutlet = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const isAuthenticated = user?.email

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

export default App;
