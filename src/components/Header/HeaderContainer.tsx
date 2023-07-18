import React from 'react';
//import necessary libraries
import axios from 'axios';
import {connect} from 'react-redux';
//import components
import Header from './Header';
// import redux state type
import {AppStateType} from '../../redux/redux-store';
// import redux Action Creator
import {setAuthUserData} from '../../redux/auth-reducer';

//---types start---//

type MapStateToProps = {
    isAuth:boolean
    login:string | null
}

type MapDispatchPropsType = {
    setAuthUserData:(userId:number,email:string,login:string)=>void
}

export type HeaderContainerProps = MapStateToProps & MapDispatchPropsType
//---types end---//

 class HeaderContainer extends React.Component<HeaderContainerProps> {
     componentDidMount() {
         this.fetchingAuth()
     }

     fetchingAuth = () => {
         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})

             .then(response => {
                 if (response.data.resultCode === 0) {
                     let {id,email,login } = response.data.data
                     this.props.setAuthUserData(id,email,login)
                 }

             })
     }

     render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)