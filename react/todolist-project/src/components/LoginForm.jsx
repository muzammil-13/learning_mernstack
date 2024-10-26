import React,{useState, useEffect} from 'react';

export default function LoginForm() {
    const [username,setUsername]=useState('');
    const[password,setPassword]=useState();
    const[errors,setErrors]=useState('');

    useEffect(()=>{
        validateform();
    },[username,password]);

    const validateform=()=>{
        const errors={};

        if (username.trim()===''){
            errors.username="Username required";
        }
        if (password.trim()===''){
            errors.password="Password required";
        }
        setErrors(errors);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(Object.keys(errors).length===0){
            console.log("Form submitted: ",{username,password});
        }else{
            console.log("Form is invalid!",errors);
        }
    };

    const handleUsernameChange=(event)=>{

        setUsername(event.target.value);
    }

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);

    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} placeholder='Enter username'/>
                {errors.username && <div style={{color:'red'}}>{errors.username}</div>}
            </label>

            <label>
                Password:
            <input type="text" value={password} onChange={handlePasswordChange} placeholder='Enter password'/>
            {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
            </label>

            <button action='submit'>Login</button>
            </form>
        </div>


    )
}
