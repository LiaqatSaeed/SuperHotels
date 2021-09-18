import User from "../state/users/Reducers";
import Hotel from "../state/hotels/Reducers";
import { combineReducers } from "redux";

export default combineReducers({ User, Hotel });
