import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer} from './reducers/userReducer'
import {DetailsFormReducer, formReducer} from './reducers/formReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    detailsForm: DetailsFormReducer,
    form: formReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const detailsFormDataFromStorage = localStorage.getItem('detailsFormData') ? JSON.parse(localStorage.getItem('detailsFormData')) : {}
const personalDetailsFromStorage = localStorage.getItem('personalDetails') ? JSON.parse(localStorage.getItem('personalDetails')) : {}
const employmentDetailsFromStorage = localStorage.getItem('employmentDetails') ? JSON.parse(localStorage.getItem('employmentDetails')) : {}
const qualificationDetailsFromStorage = localStorage.getItem('qualificationDetails') ? JSON.parse(localStorage.getItem('qualificationDetails')) : {}
const oppDetailsFromStorage = localStorage.getItem('oppDetails') ? JSON.parse(localStorage.getItem('oppDetails')) : {}
const declrationDetailsFromStorage = localStorage.getItem('declaration') ? JSON.parse(localStorage.getItem('declaration')) : {}
const proofFromStorage = localStorage.getItem('proof') ? JSON.parse(localStorage.getItem('proof')) : {}

const initialState = {
    userLogin: { userInfo: userInfoFromStorage},
   //detailsForm: {detailsFormData: detailsFormDataFromStorage},
    form: {
        detailsFormData: detailsFormDataFromStorage,
        personalDetails: personalDetailsFromStorage,
       employmentDetails:employmentDetailsFromStorage,
       qualificationDetails: qualificationDetailsFromStorage,
       oppDetails: oppDetailsFromStorage,
       declaration: declrationDetailsFromStorage,
       proof: proofFromStorage
    }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
//const store = createStore(pReducer,initialState, applyMiddleware(...middleware));
//const persistor = persistStore(store);
export default store