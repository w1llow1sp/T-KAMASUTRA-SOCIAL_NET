

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'

//--- Types ---//
export type initialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth:boolean
}


export type authActionTypes =
    ReturnType<typeof setAuthUserData>
//--- Types ---//

let initialState : initialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth:false
}

export const  authReducer = (state:initialStateType = initialState, action: authActionTypes):initialStateType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':

            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export const setAuthUserData = (id:number,email:string,login:string) => {
    return {
        type:SET_AUTH_USER_DATA,
        data: {id,email,login}
    } as const
}
