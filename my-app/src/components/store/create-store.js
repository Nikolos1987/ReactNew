import {createStore,combineReducers} from 'redux'
import { profileReducer } from './profile'

export const store=createStore(combineReducers({profiles:profileReducer}))