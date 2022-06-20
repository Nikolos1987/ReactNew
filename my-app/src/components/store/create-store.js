import {createStore,combineReducers} from 'redux'
import { profileReducer } from './profile'
import { conversationReducer } from './conversations/reducer'

import {messagesReducer} from './messages/reducer'
export const store=createStore(combineReducers({profiles:profileReducer,
    conversation:conversationReducer,
    messages:messagesReducer
}))