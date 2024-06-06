import { Link } from 'react-router-dom'

import '../Components/NavBar.css'
import '/public/Group 4.png'


function NavBar(){
    return (
    
       /* <div className="navbar bg-body-tertiary MainNav p-0 position-fixed ">*/
          <div className="container-fluid  NAV ">

            <Link to="/" className="navbar-brand IMG" href="#"  alt="Bootstrap" width="30" height="24"> 
            <img src='/public/Group 4.png' />
            </Link>
            
            <Link to='/HorusEye' className="navbar-brand NAVi" href="#" > 
            <h3>Horus eye</h3>
            </Link>
            <Link to='/Booking' className="navbar-brand NAVi" href="#" > 
            <h3>Booking</h3>
            </Link>
            <Link to="/Login" className="navbar-brand NAVi " href="#" > 
           <h3>Login</h3>
            </Link>
            <Link to ="/FAV" className="navbar-brand NAVi" href="#" > 
            <h3>FAV</h3>
            </Link>
           {/*<a className="navbar-brand NAVi " href="#" > 
            <h3>Menu</h3>
    </a>*/}
            <Link to="/ViewHistory" className="navbar-brand NAVi " href="#" > 
            <h3>View History</h3>
            </Link>

          </div>
      /*  </div>*/
        
        
        )

}
export default NavBar