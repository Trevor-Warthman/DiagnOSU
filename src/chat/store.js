import { createStore } from "redux";
import { sendMessageReducer } from "./reducers";

export default createStore(sendMessageReducer);