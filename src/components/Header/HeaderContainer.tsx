import React from 'react';
//import necessary libraries
import axios from 'axios';
import {connect} from 'react-redux';
//import components
import Header from './Header';
// import redux state type
import {AppStateType} from '../../redux/redux-store';
import {getAuthUserData} from "../../redux/auth-reducer";
// import redux Action Creator




//---types start---//

export type PropsType = {
    getAuthUserData: () => void
}

type MapStateToProps = {
    isAuth:boolean
    login:string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

export type HeaderContainerProps = MapStateToProps & MapDispatchPropsType
//---types end---//

 class HeaderContainer extends React.Component<HeaderContainerProps> {
     componentDidMount() {
         this.props.getAuthUserData()
     }

     render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:AppStateType) => {
    return ({
        isAuth: state.auth.isAuth,
        login: state.auth.login
    });
}

export default connect(mapStateToProps,{getAuthUserData})(HeaderContainer)