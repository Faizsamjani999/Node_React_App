import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../Redux/RegisterReducer/action';
import { useNavigate } from 'react-router-dom';

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
        registerAction(dispatch,registerValue)
        navigate("/login")
    }

  return (
    <div style={{width:"100%",height:"100vh",border:"2px solid black",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Form style={{border:"1px solid black",width:"50%",height:"400px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text" placeholder="Enter fullname" name='fname' onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'  onChange={handleChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Register;