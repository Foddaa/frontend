import './App.css'
import BackGround from './Components/BackGround';
import NavBar from './Components/NavBar';
import { Routes ,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUP';
import Fav from './Pages/FAV/FAV';
import HorusEye from './Pages/HorusEye/HorusEye';
import ViewHistory from './Pages/ViewHistory/ViewHistory';
import VerifyPage from './Pages/VerifyPage/VerifyPage';
import Password from './Pages/Password/Password';
import ViewHotelDetails from './Pages/Booking/ViewHotelDetails';
import Booking from './Pages/Booking/Booking';

function App() {
  
  return (
    <>
      <NavBar> </NavBar>
      <Routes>
        <Route path='/' element={<BackGround></BackGround>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/FAV'   element={<Fav></Fav>}></Route>
        <Route path='/Booking' element={<Booking></Booking>}></Route>
        <Route path='/HorusEye' element={<HorusEye></HorusEye>}></Route>
        <Route path='/ViewHistory' element={<ViewHistory></ViewHistory>}></Route>
        <Route path='/VerifyPage' element={<VerifyPage></VerifyPage>}></Route>
        <Route path='/Password' element={<Password></Password>}></Route>
        <Route path='/viewhoteldetails/:HotelID' element={<ViewHotelDetails></ViewHotelDetails>}></Route>
      </Routes>

      
     
    </>
  )
}

export default App