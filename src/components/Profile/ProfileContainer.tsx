import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect, MapDispatchToProps} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {ProfileType, setUserProfileAC} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {UserType} from '../../redux/user-reducer';
import {ProfilePageTypes} from '../../types/types';

//---Types----//


type mapStateToPropsType ={
    profile:UserType | null
}
type MapDispatchToPropsType = {
    setUserProfileAC: (profile: ProfileType) => void
}
export type ProfilePropsType = ReturnType<typeof mapStateToProps> & MapDispatchToPropsType & PathPropsType

type PathParamsType = {
    userId:string
}

type PathPropsType = RouteComponentProps<PathParamsType>
//---Types----//


//контейнерная компонента
class ProfileContainer extends React.Component<ProfilePropsType>{
    componentDidMount() {

        let userId = this.props.match.params.userId

        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

//---connect---//
let mapStateToProps = (state:AppStateType) => ({
    profile:state.profilePage.profile
})

//---connect---//
let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfileAC}) (withUrlDataContainerComponent);

