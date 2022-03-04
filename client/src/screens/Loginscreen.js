import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser} from "../actions/userActions"
import Error from '../components/Error';
import Loading from '../components/Loading';
export default function Loginscreen() {
  const [password,setpassword] = useState('');
  const [email,setemail] = useState('');
  const dispatch = useDispatch()
  useEffect(()=>{
    if(localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }
  },[])
  function login(){
    const user = {email,password}
    dispatch(loginUser(user))
  }
const loginstate = useSelector((state)=>state.loginUserReducer)
  const {loading , error} = loginstate
  return (
    <div>
      <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>

                {loading && (<Loading></Loading>)}
                {error && (<Error error='Invalid Credentials'></Error>)}

                <h2 style={{fontSize:'35px'}} className='text-center'>Login</h2>
                <div>
                    <input type="text" placeholder='email' className='form-control'value={email} onChange={(e)=>{setemail(e.target.value)}} required />
                    <input type="password" placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}} required />
                    <button style={{marginRight:'600px'}}className='btn mt-3' onClick={login}>Login</button>
                    <br></br>
                    <a  href='/register' >Click Here to Register</a>
                </div>
            </div> 

        </div>
    </div>
  )
}

