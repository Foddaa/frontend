import './FAV.css';
import { FaHeart } from "react-icons/fa";


function FAV(){
   
return(
    <div className='Backk'>
        <div className='head'>
            <h1>Make your favourite memories here</h1>
            <FaHeart className='heart'/>    
        </div>
        <div className='headers'>
      <a className='Navigate'>Booking</a>
      <a className='Navigate'>Landmarks</a>
      </div>
      <div className='Line'></div>
    </div>
    
)
}
export default FAV;




