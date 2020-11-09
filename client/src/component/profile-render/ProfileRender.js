import React, { useEffect ,useState } from "react";
import Profile from '../../profile-page/Profile'
import FriendProfile from '../../friend-profile-page copy/FriendProfile'
import DataService from '../../db-connection/DataService'
import Cookies from 'universal-cookie'

const ProfileRender = () => {
    const [userData , setUserData ] = useState([])

    const cookies = new Cookies();
    let token =cookies.get('mockFacebookToken');
    
    useEffect(()=>{
        if(!token){
            const getData = async() =>{
            const user = await DataService.get(`/users/:path`)
            setUserData(user.data);
            }
            getData()
        }

        const getData = async() =>{
            const user = await DataService.getAuth('users/me',token);
            setUserData(user.data);
            console.log(userData);
        }
        getData()
    },[token])

  if(!token){
    return (
        <div className="test">
            <FriendProfile data={userData} />
        </div>
      );
  }
  return (
    <div>
        <Profile data={userData} />
    </div>
  );
};

export default ProfileRender;
