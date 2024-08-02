import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../Redux/RegisterReducer/action';
import { useNavigate } from 'react-router-dom';
import "./Register.modules.css";

const obj = {
    fname : "",
    email : "",
    password : ""
}

function Register() {

    const [registerValue,setRegisterValue] = useState(obj)
    

    const handleChange = (e)=>{
        let {name,value} = e.target;
        setRegisterValue({...registerValue,[name]:value})
    }
    console.log(registerValue);

    const select = useSelector((val)=>val)

    const navigate = useNavigate()


    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(registerAction)(registerValue)
        navigate("/login")
    }

    const changeLoginPage = ()=>{
      navigate("/login");
    }

  return (
    // <div style={{width:"100%",height:"100vh",border:"2px solid black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    //   <h1>Sign-UP Form</h1>
    //     <Form style={{border:"1px solid black",width:"50%",height:"400px"}}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Fullname</Form.Label>
    //     <Form.Control type="text" placeholder="Enter fullname" name='fname' onChange={handleChange}/>
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" name='email'  onChange={handleChange}/>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" name='password'  onChange={handleChange}/>
    //   </Form.Group>
      
    //   <Button variant="primary" type="submit" onClick={handleClick}>
    //     Submit
    //   </Button>

    //   <Button variant="danger" onClick={changeLoginPage}>
    //     Login
    //   </Button>
    // </Form>
    // </div>
    <div className="signup-container">
    <div className="signup-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" name='fname' onChange={handleChange} required/>
      <input type="email" placeholder="Email" name='email' onChange={handleChange} required/>
      <input type="password" placeholder="Password" name='password' onChange={handleChange} required/>
      <button type="submit" onClick={handleClick}>Sign Up</button><br /><br />
      <button type="login" onClick={changeLoginPage}>Login</button>
    </div>
  </div>
  );
}

export default Register;