import React , {useState} from "react";
import InputField from "../input-field/InputField";
import ButtonField from "../button-field/ButtonField";
import "./LoginField.css";
import Seperator from "../seperator/Seperator";
import DataService from '../../db-connection/DataService'
import Cookies from 'universal-cookie';
import { useHistory } from "react-router-dom";


const LoginField = ({ handleClick }) => {
  const [email , setEmail ] = useState('')
  const [password , setPassword ] = useState('')

  const cookies = new Cookies();
  let history = useHistory();

  const coociesAccess = {
    path : '/',
    sameSite: 'strict',
};

  const checkForMatchUser = async () => {
    const data = {
      email,
      password,
    }
    //validation
    const validate = await DataService.create('users/login', data);
    cookies.set('mockFacebookToken', validate.data.token , coociesAccess);
    history.push('/');
  }

  return (
    <div>
      <InputField Inputtype="text" textOfPlaceholder="Email" handleChange={(value) => setEmail(value)}/>
      <InputField Inputtype="password" textOfPlaceholder="Password" handleChange={(value) => setPassword(value)}/>
      <ButtonField btnText="Log In" btnWidth="100%" btnColor="#504ddb" handleClick={checkForMatchUser}/>
       <a href="">Forgot Password?</a>
      <Seperator />
      <ButtonField
        btnText="Create New Account"
        btnColor="#229d20"
        handleClick={() => handleClick()}
      />
    </div>
  );
};

export default LoginField;
