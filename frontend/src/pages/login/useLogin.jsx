import { FormEvent, useRef, useState } from "react";
import axios from "../../lib/axios";
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext";
const useLogin = () => {
  const username = useRef(); //พวก input element ใน feature ที่จะส่งไปหลังบ้าน
  const password = useRef();
  const navigate = useNavigate()
  const [err, setErr] = useState("");
  const {setAuth} = useAuth()

  const handleLogin = e => {
    e.preventDefault()
    axios
      .post("/login", {
        username: username.current?.value,
        password: password.current?.value,
      })
      .then(response=>{
        setAuth(true)
       navigate('/')
    })
      .catch((error) => {
        console.log(error)
        setErr(error.response.data);
      });
  };
  return { username, password,err,handleLogin };
};
export default useLogin
