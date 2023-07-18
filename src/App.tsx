import React from "react";
//import styles
import "./App.css";
// add react-router-dom
import {BrowserRouter, Route} from "react-router-dom";
//import components
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import container components
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer  from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App:React.FC = (props) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=><DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>
                <Route path='/users' render={()=><UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>

        </div>
        </BrowserRouter>
    );
};

export default App;


//TODO:подумать почему контейнер App не центруется по середине