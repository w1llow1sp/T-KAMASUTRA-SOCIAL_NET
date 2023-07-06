import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect, MapDispatchToProps} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfileAC} from '../../redux/profile-reducer';




class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}
let mapStateToProps = (state:AppStateType) => ({
    profile:state.profilePage.profile
})
type MapDispatchToPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
}


export type ProfilePropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType

export default connect(mapStateToProps,{setUserProfileAC}) (ProfileContainer);

