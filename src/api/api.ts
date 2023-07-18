import axios from 'axios';


const instance = axios.create({
        withCredentials:true,
        baseURL:'https://social-network.samuraijs.com/api/1.0/',
        headers:{
                'API-KEY':'a44880c0-9561-4b04-9b22-81b45ac13533'
        }
})



export const usersAPI = {
    getUsers:(pageNumber: number = 1,pageSize:number = 10) => {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`,)
            .then(response =>  {
                return response.data})},
    unfollowUser:(userId:number) => {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    followUser:(userId:number) => {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }


}


export const getUserProfile = (userId:string) => {
    return instance.get(`profile/` + userId)
        .then(response =>  {
            return response.data
        })
}
