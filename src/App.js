import axios from 'axios' 
import { useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'
import { useOffice } from './components/contexts/OfficeContext';

import NavBar from './components/header/nav'

import Login from './components/Login';
import Register from './components/Register';

import OfficeForm from './components/pages/offices/OfficeForm';
import OfficeList from './components/pages/offices/OfficeList';

import CategoryForm from './components/pages/categories/CategoryForm';
import CategoryList from './components/pages/categories/CategoriesList';
// import { CategoryProvider } from './components/contexts/CategoriesContext';

import SpaceForm  from './components/pages/spaces/spaceForm';
import SpaceList from './components/pages/spaces/SpaceList';
// import { SpaceProvider } from './components/contexts/SpaceContext';

import MemberForm from './components/pages/members/MemberForm';

import { useAuth } from './components/contexts/AuthContext';

function App() {

  const { handleLogin } = useAuth()
  const { officeDispatch } = useOffice()

  useEffect(() => {
    (async() => {
      try {
        const response = await axios.get('http://localhost:3010/api/offices')
        officeDispatch({ type: 'SET_OFFICES', payload: response.data})
      } catch(err) {

      }
    })();
  }, [officeDispatch])

  useEffect(() => {
    ( async() => {
      try {
        const response = await axios.get('http://localhost:3010/api/users/account', {
          headers: {
            Authorization: localStorage.get('token')
          }
        })
        handleLogin(response.data)
      }catch(err) {
        console.log(err)
      }  
    })();
  }, [handleLogin])

  return (
    <div className="App">
      <NavBar />
      {/* <SpaceProvider>
        <SpaceForm />
        <SpaceList />
      </SpaceProvider>

      <CategoryProvider>
        <CategoryForm/>
        <CategoryList />
      </CategoryProvider> */}


        {/* { !user ? (
          <>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </>
        ) : (
          <>

          </>
        )} */}

      <Routes>
        <Route path='/' element={<OfficeList />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>


        <Route path='/create-office' element={<OfficeForm />}/>
        <Route path='/offices-list' element={<OfficeList />}/>

        <Route path='/create-category' element={<CategoryForm/>}/>
        <Route path='/category-list' element={<CategoryList />}/>

        <Route path='/create-space' element={<SpaceForm/>}/>
        <Route path='/space-list' element={<SpaceList/>} />

        <Route path='/create-member' element={<MemberForm />}/>

      </Routes>
    </div>
  )
}

export default App;
