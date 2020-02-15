import React,{Component} from 'react';
import Header from "./components/header";
import Home from "./components/home"
import './css/App.css';
import {BrowserRouter as Router,Redirect,Route} from "react-router-dom";
import Users from "./components/users/users";
import usersService from "./repository/axios_usersRepo";
import AddUser from "./components/users/addUser"
import Telephones from "./components/telephones/telephones";
import AddTelephone from "./components/telephones/addTelephone";
import UserDetails from "./components/users/userDetails"

class App extends Component{

  constructor(props) {
    super(props);

    this.state={
      users:[]
    }
  }

  componentDidMount() {     // tuka load data od db
    this.loadListOfUsers();
  }

  loadListOfUsers=()=>{

    usersService.loadUsers().then(resp =>{
      console.log(resp.data);

      this.setState((prevState) =>{
        return {
          users: resp.data
        }
      })

    });


  };

  createNewUser=(newUserData)=>{

     usersService.addNewUser(newUserData).then(resp =>{
        console.log(resp.data);

        this.setState((prevState)=>{
          const usersList = prevState.users.concat(newUserData);
          return{
            users: usersList
          }
        })
     })
  };

  removeUser=(username)=>{

      usersService.removeUser(username).then(resp =>{

        this.setState(prevState =>{
          // splice(arg1,arg2) arg1=na koj indeks da brise        arg2=kolku el da izbrise
          // no splice ja vrakja izbrisanata niza

          // find index na array prima kako arg funkcija koja sodzi if uslov za proverka
          let idx=prevState.users.findIndex(usr => usr.username===username);
          let usersList = prevState.users.splice(idx,1);
          let newList = prevState.users;
          return{
            users:newList
          }
        })

      })
  };

  // todo: Mnogu e bitno pri vakvi menuvanja na objektite od listata da povikuvas vo then(response)
  //       funkcija sto od ponovo gi loada stvarite, za da se updatne state-ot

  addTelephoneToUser=(newTelephone)=>{    // newTelephone e obj sto sodrzi username i telephones
      usersService.addTelephoneToUser(newTelephone).then((response)=>{
        this.loadListOfUsers();
      });

  };

  searchData = (searchTerm) =>{

    debugger;

    usersService.searchUser(searchTerm).then((resp) =>{

      console.log(resp.data)
        this.setState({
          users: resp.data
        })
    })

  };



  render() {

    return(

        <Router>
            <div>
              <Header onSearch={this.searchData}/>
              <div className="container">

                <Route path={"/home"} exact>
                  <Home/>
                </Route>

                <Route path={"/users"} exact>
                  <Users listOfUsers={this.state.users} onDeleteUser={this.removeUser}/>
                </Route>

                <Route path={"/users/add"} exact>
                  <AddUser onCreateNewUser={this.createNewUser}/>
                </Route>

                <Route path={"/telephones"} exact>
                  <Telephones/>
                </Route>

                <Route path={"/telephones/add/:username"} exact>
                  <AddTelephone onAddTelephoneToUser={this.addTelephoneToUser}/>
                </Route>

                <Route path={"/users/details/:username"} exact>
                  <UserDetails/>
                </Route>


                <Redirect to={"/home"}/>
              </div>
            </div>
        </Router>
    )
  }

}

export default App;
