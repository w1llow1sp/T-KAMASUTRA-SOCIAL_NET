import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {appStatePropsType} from "./types/types";

const App:React.FC<appStatePropsType> = (props) => {

    const state =props.store.getState()

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={()=><Dialogs
                    dialogsProps={state.profilePage.dialogs}
                    messageProps={state.messagePage.messages} />}/>
                <Route path='/profile' render={()=><Profile
                    posts={state.profilePage.posts}
                    addPostCallback={props.store.addPost.bind(props.store)}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostTextCallback={props.store.updateNewPostText.bind(props.store)}/>}/>
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