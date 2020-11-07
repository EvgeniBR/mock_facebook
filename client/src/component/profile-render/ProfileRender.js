import React, { useEffect } from "react";
import Profile from '../../profile-page/Profile'
import FriendProfile from '../../friend-profile-page copy/FriendProfile'
import DataService from '../../db-connection/DataService'
import Cookies from 'universal-cookie'

const ProfileRender = () => {

    const cookies = new Cookies();

    useEffect(()=>{
        const token = cookies.get('mockFacebookToken');

        if(!token){
            return 'no token'
        }
        const getData = async() =>{
            const user = await DataService.get('users/me' , {
                headers:{
                    Authorization: 'Bearer ' + token
                }
            })
            console.log(user);
        }
        getData()
    },[])

    
  return (
    <div>
        Hello
    </div>
  );
};

export default ProfileRender;
