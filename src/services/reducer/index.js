import { combineReducers } from 'redux'
import {stdreducer} from "./student.reducer"
export const   rootReducer = combineReducers({
    student: stdreducer,
  });