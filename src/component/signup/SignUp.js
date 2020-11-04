import React , {useState} from "react";
import "./SignUp.css";
import InputField from "../input-field/InputField";
import Seperator from "../seperator/Seperator";
import MiniInfo from "../mini-info/MiniInfo";
import Selector from "../selector/Selector";
import ButtonField from "../button-field/ButtonField";
import DataService from '../../db-connection/DataService';

const SignUp = () => {
  //birthsday
  const [day , setDay] = useState(-1);
  const [month , setMonth] = useState('');
  const [year , setYear] = useState(-1);
  //basic info and password
  const [email , setEmail] = useState('');
  const [firstName , setFirstName] = useState('');
  const [lastName , setLastName] = useState('');
  const [password , setPassword] = useState('');
  const [gender , setGender] = useState('');

  //create new user - need to add empty field --  require
  const handleCreateNewUser = async () => {
    const data = {
      first_name:firstName,
      last_name:lastName,
      password,
      email,
      // gender,
      birthday:{
        day,
        month,
        year
      }
    }
    try{
      await DataService.create('users', data);
      console.log("user created");
    }
    catch(e){
      console.log("something wrong" , e);
    }
      
  }

  return (
    <div className="SignUp-background">
      <div className="SignUp">
        <div className="SignUp-title">
          <h1>Sign Up</h1>
          <p>It's quick and easy</p>
        </div>
        <Seperator />
        <div className="SignUp-row">
          <InputField Inputtype="text" textOfPlaceholder="First name" handleChange={(e) => setFirstName(e)}/>
          <InputField Inputtype="text" textOfPlaceholder="Last name" handleChange={(e) => setLastName(e)}/>
        </div>
        <div className="SignUp-columns">
          <InputField Inputtype="text" textOfPlaceholder="Email" handleChange={(e) => setEmail(e)}/>
          <InputField Inputtype="password" textOfPlaceholder="New password" handleChange={(e) => setPassword(e)}/>
        </div>
        <div className="SignUp-selector">
          <MiniInfo data="Birthday" />
          <div>
            <Selector id="months" handleChange={(e) => setMonth(e)}/>
            <Selector id="days" handleChange={(e) => setDay(e)}/>
            <Selector id="years" handleChange={(e) => setYear(e)} />
          </div>
          <MiniInfo data="Gender" />
          <div onChange={(e) => setGender(e.target.value)}>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="other" name="gender" value="other" />
            <label htmlFor="other">Other</label>
          </div>
          <div className="term">
            <p>
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookies Policy. You may receive SMS Notifications from us and can
              opt out any time.
            </p>
          </div>
        </div>
        <ButtonField btnText="Sing Up" btnWidth="60%" btnColor="#229d20" handleClick={handleCreateNewUser}/>
      </div>
    </div>
  );
};

export default SignUp;
