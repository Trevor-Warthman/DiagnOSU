import { createStore } from "redux";
import { sendMessageReducer } from "./reducers";

const store = createStore(sendMessageReducer);

export default store;