import axios from 'axios' 
import { jwtDecode } from "jwt-decode";
// import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
import { Routes , Route } from 'react-router-dom'

import NavBar from './components/header/nav'

import Login from './components/Login';
import Register from './components/Register';

import OfficeForm from './components/pages/offices/OfficeForm';
import OfficeList from './components/pages/offices/OfficeList';
import OfficeShow from './components/pages/offices/OfficeShow';
import OfficeBooking from './components/pages/offices/OfficeBooking';

import CategoryForm from './components/pages/categories/CategoryForm';
import CategoryList from './components/pages/categories/CategoriesList';
import { CategoryProvider } from './components/contexts/CategoriesContext';

import SpaceForm  from './components/pages/spaces/spaceForm';
import SpaceList from './components/pages/spaces/SpaceList';
import SpaceDetails from './components/pages/spaces/SpaceShow';
import SpaceSelection from './components/pages/spaces/SpaceSelection';

import MemberDetailsForm from './components/pages/members/MemberForm';
import MemberProfile from './components/pages/members/MemberShow';
import { useMember } from './components/contexts/MemberContext';

import { useAuth } from './components/contexts/AuthContext';

import BookingDetails from './components/Booking';

import Cancel from './components/payment/paymentCancel';
import Success from './components/payment/PaymentSuccess';

function App() {

  const { handleLogin } = useAuth()
  const { memberDispatch } = useMember()

  useEffect(() => {
    ( async() => {
      try {
        const response = await axios.get('http://localhost:3010/api/users/account', {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        handleLogin(response.data)
      }catch(err) {
        console.log(err)
      }  
    })();
  }, [handleLogin])

  useEffect(() => {
    (async() => {
      try {       
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        // console.log('decoded', decoded)
        const id = decoded.id
        // console.log(id)
        const response = await axios.get(`http://localhost:3010/api/members/${id}`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        // if(decoded.role == 'admin' || decoded.role == 'owner'){
        //   const response = await axios.get('http:')
        // }
        // if(decoded.role == 'owner'){
          
        // }
        // console.log('fhjf',response.data)
        memberDispatch({ type: 'SET_MEMBERS', payload: response.data })
      } catch(err) {
        console.log(err)
      }
    })();
  },[memberDispatch])

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<OfficeList />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>


        <Route path='/create-office' element={<OfficeForm />}/>
        <Route path='/offices-list' element={<OfficeList />}/>
        <Route path='/update-office' element={<OfficeShow />}/>
        <Route path='/office/details/:id' element={<OfficeBooking />}/>

        <Route path='/create-member' element={<MemberDetailsForm />}/>
        <Route path='/member-profile' element={<MemberProfile />}/>

        <Route path='/office/:id/add-space' element={<SpaceForm/>}/>
        <Route path='/space-list' element={<SpaceList/>} />
        <Route path='/space-details' element={<SpaceDetails />}/>
        <Route path="/spaces/:spaceId/:name" element={<SpaceSelection />} />

        <Route path="/booking/:bookingId" element={<BookingDetails />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

      </Routes>

        <CategoryProvider>
          <Routes>
            <Route path='/create-category' element={<CategoryForm/>}/>
            <Route path='/category-list' element={<CategoryList />}/>
            </Routes>
        </CategoryProvider>

    </div>
  )
}

export default App;
