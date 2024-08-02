import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAction } from '../Redux/RegisterReducer/action';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../Redux/LoginReducer/action';
import Swal from 'sweetalert2'
import "./Login.modules.css"

const obj = {
    email : "",
    password : ""
}

function Login() {

    const [loginValue,setLoginValue] = useState(obj)
    

    const handleChange = (e)=>{
      
        let {name,value} = e.target;
        setLoginValue({...loginValue,[name]:value})
    }
    // console.log(loginValue);

    const select = useSelector((val)=>val.loginReducer)
    console.log(select);

    const navigate = useNavigate()


    const dispatch = useDispatch();

    const handleClick = (e)=>{
      e.preventDefault();
      
     dispatch(loginAction(loginValue))
     .then((a) => {
      if (a.isLogin) {
          Swal.fire({
              title: "Login Successfully!",
              text: "Welcome To The Homepage!",
              icon: "success"
          });
          navigate("/homepage");
      } else {
          Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email or Password Doesn't Match!",
              footer: '<a href="#">Why do I have this issue?</a>'
          });
      }
  })
     
      navigate("/homepage")
    }

    function add(){
      if(select.isLogin)
        {
          Swal.fire({
            title: "Login Successfully!",
            text: "Welcome To The Homepage!",
            icon: "success"
          });
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email or Password Doens't Matched!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
    }
    
    const changeLoginPage = ()=>{
      navigate("/");
    }

  return (
    // <div style={{width:"100%",height:"100vh",border:"2px solid black",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    //   <h1>Login Form</h1>
    //     <Form style={{border:"1px solid black",width:"50%",height:"400px"}}>
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
    //     Register
    //   </Button>
    // </Form>
    // </div>
    <div className="container">
        <div className="login-box">
            <h1>Login</h1>
            <form action="#" method="POST">
                <div className="textbox">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange} required/>
                </div>
                <div className="textbox">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} required/>
                </div>
                <button type="submit" id="btn" onClick={handleClick}>Login</button><br /><br />
                <button type="submit" id="btn" onClick={changeLoginPage}>Sign UP</button>
            </form>
        </div>
    </div>
  );
}

export default Login;