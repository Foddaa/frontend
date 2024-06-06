import './Verifypage.css'
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { EmailState } from '../SignUp/SignUP';

///////////////////////////////////////////////////////

function VerifyPage() {
//EmailFromSignUp
   let Email=useRecoilValue(EmailState)
   console.log(Email)
  
   const [Code, SetCode]=useState("")
   let navigate=useNavigate()

   {/*} const handleFileChange = (event) => {
        const file = event.target.files[0];
        const label = inputRef.current.previousSibling;
        label.textContent = file.name;
        Setfile(event.target.files[0]);
        
    };*/}

    const SignSubmit =(e) =>{
        e.preventDefault()
        axios.post("http://localhost:3000/posts", 
            {
            Code,
            Email
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            navigate('/Password');
            
    }

    return (
        <form className="LoginBackGround" onSubmit={SignSubmit}>
    <Container fluid className="Wrapper" >
            <h1 className='h'>Email Validation</h1> 
            <h3 className='des'>please enter the code that sent to your email</h3>
         <div className='InputBox'>
            <input type='code ' placeholder='Enter code' required onChange={(e) =>SetCode(e.target.value)}></input>
            </div>
            
           <button type='submit'   to= {'/Home'} className='LOG'>Vaild</button>
        
    
        </Container>
    </form>
    )
}
export default VerifyPage;