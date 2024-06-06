import '../SignUp/SignUp.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser} from "react-icons/fa";
import { MdOutlineNumbers } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { useState } from 'react';
import { atom, useRecoilState } from 'recoil';

//////////////////////////////////////////////////////

export const EmailState = atom({
    key: 'EmailState',
    default: '',
})
//////////////////////
function SignUp(){

   // const inputRef = useRef();
    const [FristName , SetFristName]=useState("")
    const [LastName , SetLastName]=useState("")
    const [Email , SetEmail]=useRecoilState(EmailState)
    const [Mobile , SetMobile]=useState("")
    const [Brithday , SetBrithday]=useState("")
    const [Country , SetCountry]=useState("")
    /* const [password, Setpassword]=useState("")
    const [Confrim , SetConfrim]=useState("")
    const [filee, Setfile]=useState("")*/
    let navigate=useNavigate()

/*  /*const handleFileChange = (event) => {
        const file = event.target.files[0];
        const label = inputRef.current.previousSibling;
        label.textContent = file.name;
        Setfile(event.target.files[0]);
        
    };*/
    
    const SignSubmit =(e) =>{
        e.preventDefault()

        axios.post('http://localhost:8080/user/newToken', {
            email:Email,
            firstName:FristName,
            lastName:LastName,
            phoneNumber:Mobile,
            birthDate:Brithday,
            country:Country
        })
          .catch(error => {
                console.error(error);
           })
          .then((res)=> {
                console.log(res.data)
                    navigate('/VerifyPage')
            })     
    }
        

               
   

    return(
    <>
    <form className="LoginBackGround" onSubmit={SignSubmit}>
    <Container fluid className="Wrapper" >
    
            <h1 className='h'>Sign Up</h1> 

            <Row>
            <Col><div className='InputBox'>
                <input type='text' placeholder='FristName' required onChange={(e) =>SetFristName(e.target.value)}></input><FaUser className='icon'/>
            </div>
            </Col>
            <Col> <div className='InputBox'>
            <input type='text' placeholder='LastName' required onChange={(e) =>SetLastName(e.target.value)}></input><FaUser className='icon'/>
            </div>
            </Col>
            </Row>
            
        <div className='InputBox'>
                <input type='email' placeholder='Email' required onChange={(e) =>SetEmail(e.target.value)}></input><FaUser className='icon'/>
            </div>
            
            <div className='InputBox'>
                <input type='text' placeholder='MobilePhone' required onChange={(e) =>SetMobile(e.target.value)}></input><MdOutlineNumbers className='icon'/>
            </div>
            
            <Row>
            <Col><div className='InputBox'>
                <input type='date' placeholder='brithday' required onChange={(e) =>SetBrithday(e.target.value)}></input>
            </div></Col>
        <Col> <div className='InputBox'>
                <input type='text' placeholder='Country ' required onChange={(e) =>SetCountry(e.target.value)}></input><BiWorld className='icon'/>
            </div></Col>
            </Row>
        {/* <div className='InputBox'>
                <input type='password' placeholder='password' required onChange={(e) =>Setpassword(e.target.value)}></input><FaLock className='icon'/>
            </div>
            <div className='InputBox'>
                <input type='password' placeholder='Confirm password' required onChange={(e) =>SetConfrim(e.target.value)}></input><FaLock className='icon'/>
            </div>
            <div className="InputBoxFile">
            <Col> <label htmlFor='uploadbtn' className='label' >UPLOAD PassPort</label>  
    <input type="file" accept=".pdf" id='uploadbtn'required   ref={inputRef} onChange={handleFileChange} /></Col>
    </div>*/}
           <button type='submit' className='LOG'>Next</button>
        
    
        </Container>
    </form>
    
    </>
    );
    }export default SignUp;