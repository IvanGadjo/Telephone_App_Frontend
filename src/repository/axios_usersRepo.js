import axios from './axios_config'
import qs from 'qs'


const usersService = {

    loadUsers: () =>{
        return axios.get("/users")
    },

    addNewUser: (newUser) => {

        debugger;
        console.log(newUser);

        return axios.post("/users",newUser,{
            headers:{
                'Content-Type': 'application/json'
            }
        })

        // staroto

        // return axios.post("/users",newUser,{
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // })
    },

    removeUser: (username) =>{
        return axios.delete("/users/"+username);
    },

    searchUser: (searchTerm) =>{
        return axios.get(`/users?term=${searchTerm}`);
    },

    // Se koristi za stavanje povekje telefoni odednas, se prakja post na /telephones
    addTelephoneToUser: (userTelephoneObj) =>{
        debugger;
        let username = userTelephoneObj.username;
        let telephone1 = userTelephoneObj.telephone1;
        let telephone2 = userTelephoneObj.telephone2;
        let telephone3 = userTelephoneObj.telephone3;
        let telephone4 = userTelephoneObj.telephone4;
        let telephone5 = userTelephoneObj.telephone5;


        //todo: ova e post request na /telephones - neuspesen. Se obiduvam da pratam post koj ke ima request
        // params List<Integer> telephones, no ne mozam da ja pratam kako takva preku requestot so qs.stringify
        // ------------------------------------------------------

        // const data = {
        //     "telephones": [telephone1,telephone2,telephone3,telephone4,telephone5]
        // };
        //
        //
        //
        // const dataParams = qs.stringify(data);
        //
        // // ova ne:
        // //const telephones = [telephone1,telephone2,telephone3,telephone4,telephone5];
        // //const dataParams = qs.stringify(telephones)
        //
        //
        // return axios.post("/telephones/"+username,dataParams,{
        //     headers:{
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //         //'Content-Type': 'application/json'
        //     }
        // }).then(response =>{
        //     console.log(response)
        // }).catch(error =>{
        //     console.log(error.response)
        // })

        //todo: ova e put request na /users za dodavanje na samo eden telefon
        // -----------------------------------------

        // const data = {
        //     "telephone": telephone1
        // };
        //
        // const dataParams = qs.stringify(data)
        //
        // return axios.put("/users/"+username,dataParams,{
        //     headers:{
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // })

        // -----------------------------------------

        const data = {
            "telephone1": telephone1,
            "telephone2": telephone2,
            "telephone3": telephone3,
            "telephone4": telephone4,
            "telephone5": telephone5
        };

        const dataParams = qs.stringify(data);

        return axios.post("/telephones/"+username,dataParams,{
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
                //'Content-Type': 'application/json'
            }
        }).then(response =>{
            console.log(response)
        }).catch(error =>{
            console.log(error.response)
        })
    }
};

export default usersService