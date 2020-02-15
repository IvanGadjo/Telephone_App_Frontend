import React,{useState,useEffect} from 'react';          // neka bide stateless, ke koristam hooks
import axios from '../../repository/axios_config'

const UserDetails = (props) =>{

    const [userMobilePhones, setMobilePhones] = useState({
       mobilePhones:["test1","test2"]
    });

    const [userHomePhones, setHomePhones] = useState({
        homePhones:["htest1","htest2"]
    });


    useEffect(()=>{
        const username = window.location.pathname.split("/")[3].replace("%20"," ");

        axios.get("/telephones/mobile/"+username).then((data)=>{
            setMobilePhones({
                mobilePhones: data.data
            });
            //console.log(data.data)
        });

        axios.get("/telephones/home/"+username).then((data)=>{
            setHomePhones({
                homePhones: data.data
            })
            //console.log(data.data)
        })

    },[]);

    //console.log(userMobilePhones);

    return(
        <div>
            <h1>User Details: {window.location.pathname.split("/")[3].replace("%20"," ")}</h1>
            <h3>Mobile Phones</h3>
            <ul>
                {userMobilePhones.mobilePhones.map((mp)=>
                    <div>
                        <li>'{mp}'</li>
                        <br/>
                    </div>
                )}
            </ul>
            <br/>
            <h3>Home Phones</h3>
            <ul>
                {userHomePhones.homePhones.map((hp)=>
                    <li>'{hp}'</li>
                )}
            </ul>
        </div>
    )

};


export default UserDetails;