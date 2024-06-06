import '../Login/Logon.css'
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock} from "react-icons/fa";
import { useState,useEffect,useRef } from 'react';
import axios from 'axios';


function Login(){
    const [Email ,SetEmail] = useState("")
    const [Password ,SetPassword] = useState("")
    let navigate=useNavigate()
    const [response , Setresponse] =useState("")

/////////////////////////////////////////////////////////
//////////////FETCH//////////////////////////////////////
    

    const formSubmit =(e) =>{
        e.preventDefault()
        axios.post('http://localhost:8080/user/login', null,{
            params:{
            email: Email,
            password: Password
        }}   ).catch(error => {
                console.error(error);
            }).then((res)=> {
                console.log(res.data)
                Setresponse(res.data)
                if((res.data) == 1){
                    navigate('/')
                }
            })     
    }
    return(
        <>
        <form className="LoginBackGround" onSubmit={formSubmit}>
            <div className="Wrapper">
        <div action="" >
            <h1 className='h'>Login</h1>
            <div className='InputBox'>
                <input type='text' placeholder='Username' required onChange={(e) => SetEmail(e.target.value) }></input><FaUser className='icon'/>
            </div>
            <div className='InputBox'>
                <input type='password' placeholder='Password' required onChange={(e) => SetPassword(e.target.value) }></input><FaLock className='icon'/>
            </div>
            <button type="submit" className='LOG'>Login</button>
            <h1>{response}</h1>
            <div className='RegLink'>
        <p>Do not have an account? <Link to='/SignUp'>Regiter</Link></p>
            </div>
        </div>
        </div>
    </form>        
        </>
    )

}export default Login;