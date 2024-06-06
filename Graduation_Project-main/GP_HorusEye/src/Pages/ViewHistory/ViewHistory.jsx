import { useEffect, useState } from 'react';
import './ViewHistory.css'
import { useRecoilValue } from 'recoil';
import { CityState,CheckInState,CheckOutState, RoomState } from '../Booking/Booking';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewHistory() {

const [History, SetHistory] =useState([])
const [Landmark, SetLandmark] =useState([])
const [BookedHistory, SetBookedHistory] =useState(true)
const [LandMarked, SetLandMarked] =useState(false)

let city =useRecoilValue(CityState)
let checkIn =useRecoilValue(CheckInState)
let checkOut =useRecoilValue(CheckOutState)
let room =useRecoilValue(RoomState)

////////////////////fetch Booked Hotels//////////////////////
useEffect(() => {
  axios.get('http://localhost:3000/product')
  .then((response) => {
    SetHistory(response.data)
    console.log(response.data)
  }).catch
  ((error) => {
    console.log(error)
  })
}, [])
/////////////////////////////////////////
///////////fetch landmarks////////////////


useEffect(() => {
  axios.get('http://localhost:3000/product')
  .then((response) => {
    SetLandmark(response.data)
    console.log('landmark' + response.data)
  }).catch
  ((error) => {
    console.log(error)
  })
}, [])
/////////////////////////////////////////////
const notify = () => toast("added to favorite!");





const Booked=()=>{
  SetBookedHistory(true)
  SetLandMarked(false)
}

const LandMark=()=>{
  SetBookedHistory(false)
  SetLandMarked(true)
}
  
  return (
    <div className='background'>
      <div className='headers'>
      <a className='Navigate' onClick={Booked}>Booking</a>
      <a className='Navigate' onClick={LandMark}>Landmarks</a>
      </div>
      <div className='Line'></div>
    
      <ToastContainer
position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Slide
className='notify'
/>
  
    { BookedHistory && ( History.map((history) =>{
      return(
        <div className='History 'key={history.id}>
          
              <h2 >Hotel name: </h2>
              <p>City: </p>
              <p>CheckIn: {history.checkIn}</p>
              <p>CheckOut: {history.checkOut}</p>
              <p>Room: {history.room}</p>
              <FaHeart className='heartt' onClick={notify}/>
        </div>
      )
    }) ) }
      { LandMarked && (Landmark.map((landmark)=>{
        return(
        <div className='History' key={landmark.id}>    
        <h2>Landmark name: {landmark.name}</h2>
        <p>City: </p>
        <p>Rating: </p>
        <p>Description: </p>
        <FaHeart className='heartt' onClick={notify}/>
  </div>
        )
      })) }
    
    </div>
  );
}export default ViewHistory;