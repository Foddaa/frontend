
import  './Booking.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2.all.js'
import { useNavigate } from 'react-router';
import {atom, useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { EmailState } from '../SignUp/SignUP';

/////////////////////////////////////////////////////////////

export const CityState = atom({
    key: 'CityState',
    default: '',
})

 export const CheckInState = atom({
    key: 'CheckInState',
    default: '',
})

export const CheckOutState = atom({
    key: 'CheckOutState',
    default: '',
})

export const RoomState = atom({
    key: 'RoomState',
    default: '',
})

//////////////////////////////////////////////////

function Booking () {
    
    //EmailfromSignUp
let Email=useRecoilValue(EmailState)
   console.log(Email)
    let navigate = useNavigate()
    const [Hotels,SetHotels] =useState([])
    const [city,SetCity] = useRecoilState(CityState)
    const [checkIn,SetCheckIn] = useRecoilState(CheckInState)
    const [checkOut,SetCheckOut] = useRecoilState(CheckOutState)
    const [room,SetRoom] = useRecoilState(RoomState)   
    const [FirltedHotels,SetFirltedHotels] = useState([])

    ////////////////////////fetch////////////////////////////

    useEffect(() => {axios.get('http://localhost:3000/product')
        .then((response) => {
            SetHotels(response.data)
            console.log(response.data)
        }).catch
        ((error) => {
            console.log(error)
        })} ,[])
/////////////////////OnBooking/////////////////////////////

    const onBooking  =(e) =>{
        e.preventDefault()
        axios.post('url',null, 
        {params:{
            city:city,
            checkIn:checkIn,
            checkOut:checkOut,
            room:room
        }})
        console.log(city)
        console.log(checkIn)
        console.log(checkOut)
        console.log(room)

        SreachHotel(city);
        
    }
///////////////////////////////Confirmation//////////////////

const ConfirmationBooking =(hotel)=>{
    Swal.fire ({
        title: 'Are sure to confirm this Book?',
        html: `
      <h3>${hotel.name}</h3>
      <p>City: ${hotel.city}</p>
      <p>CheckIn: ${checkIn}</p>
      <p>CheckOut: ${checkOut}</p>
      <p>Room: ${room}</p>
      <p>Price: ${hotel.price}</p>
      <p>Rating: ${hotel.rating}</p>
      <p>Description: ${hotel.description}</p>
    `,
         confirmButtonText: 'OK',
        showCancelButton:true,
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#d33',
    })
    .then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Booked!', 'Your booking has been confirmed, check your email', 'success')

             ///////////////////POST BOOKING FOR STATIC DATA//////////////////////

    axios.post ('url', {
        hotelName: hotel ,
        City: city,
        CheckIN: checkIn,
        CheckOut: checkOut,
        Room: room,
        price:price
    })}})}
{} 
///////////////////////Sreach////////////////////////
  const SreachHotel =(city)=>{
    const FirltedHotels = Hotels.filter((hotel) => {
        return hotel.city.toLowerCase().includes(city.toLowerCase());
    });
    SetFirltedHotels(FirltedHotels);
    console.log(FirltedHotels)

  }

    return (<>
        <form className='BackG' onSubmit={onBooking} >
            <Container className='Booking'>
                <Row>
                    <Col className='Col'>
                        <h6>City</h6>
                        <input type='text' placeholder='Search for cities' onChange={(e) => SetCity(e.target.value)} />
                    </Col>
                    <Col  className='Col'>
                        <h6>CheckIn</h6>
                            <input type='date' onChange={(e) => SetCheckIn(e.target.value)}/>
                    </Col>
                    <Col  className='Col'>
                        <h6>CheckOut</h6>
                        <input type='date' onChange={(e) => SetCheckOut(e.target.value)}/>
                    </Col> <Col  className='Col'>
                        <h6>Room</h6>
                        <input type='number' onChange={(e) => SetRoom(e.target.value)}/>
                    </Col>
                    <Col  className='Col'>
                        <button>Sreach</button>
                        
                    </Col>
                </Row>
            </Container>
            
            <div className='Hotels'>
                {FirltedHotels.length === 0 ?(  Hotels.map((hotel) =>{
                    return(
                <div className='card' key={hotel.id}>
                <div className="card-image"></div>
                <div className="category"> 
                <h2>Hotel name: {hotel.name}</h2>
                <p>City: {hotel.city}</p>
                <p>Price/Night: {hotel.price} EGP</p>
                <p>Rating: {hotel.rating}</p>
                <p>Description: {hotel.description}</p>
                <div className='Btns'>
                <button className="btnBook" onClick={()=>{ConfirmationBooking(hotel)}}>Book</button>
                <button className='btnDetails' onClick={() =>{navigate(`/viewhoteldetails/${hotel.id}`)}}>view details</button>
                </div>
            </div>
            </div>
                )
                }) ) : (

                    FirltedHotels.map((hotel) =>{
                        return(
                    <div className='card' key={hotel.id}>
                    <div className="card-image"></div>
                    <div className="category">
                    <h2>Hotel name: {hotel.name}</h2>
                    <p>City: {hotel.city}</p>
                    <p>Price/Night: {hotel.price} EGP</p>
                    <p>Rating: {hotel.rating}</p>
                    <p>Description: {hotel.description}</p>
                    <div className='Btns'>
                    <button className="btnBook" onClick={()=>{ConfirmationBooking(hotel)}}>Book</button>
                    <button className='btnDetails' onClick={() =>{navigate(`/viewhoteldetails/${hotel.id}`)}}>view details</button>
                    </div>
                </div>
                </div>
                    )
                    }
                ))}
            </div>
        </form>
    </>

    );
}

export default Booking;