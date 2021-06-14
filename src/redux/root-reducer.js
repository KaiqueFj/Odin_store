//will be the base redux object that will represent all the states

import { combinedReducers } from 'redux';

import userReducer from './user/user.reducer'

export default combinedReducers({
    user: userReducer
})