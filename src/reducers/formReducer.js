import { DETAILFORM_SAVE_REQUEST, 
    FORM_SAVE_REQUEST , 
    EMPLOYEMENTFORM_SAVE_REQUEST, 
    QUALIFICATIONFORM_SAVE_REQUEST, 
    OPPURTUNITIESFORM_SAVE_REQUEST,
    DECLARATIONFORM_SAVE_REQUEST,
    PROOF_SAVE_REQUEST} from "../constants/formConstants"


export const DetailsFormReducer =(state={detailsFormData: {}}, action)=>{
    switch(action.type){
        case DETAILFORM_SAVE_REQUEST:
            return {
                ...state,
                detailsFormData: action.payload,
            }
       
            default:
            return state
    }
}

export const formReducer =(state={
    detailsFormData:{},
    personalDetails: {},
    employementDetails:{},
    qualificationDetails:{},
    oppDetails:{},
    declaration:{},
    proof:{}
}, action)=>{
    switch(action.type){
        case DETAILFORM_SAVE_REQUEST:
            return {
                ...state,
                detailsFormData: action.payload,
            }
        case FORM_SAVE_REQUEST:
            return {
                ...state,
                personalDetails: action.payload,
            }
        case EMPLOYEMENTFORM_SAVE_REQUEST:
            return {
                ...state,
                employementDetails: action.payload
            }
            case QUALIFICATIONFORM_SAVE_REQUEST:
                return {
                    ...state,
                    qualificationDetails: action.payload
                }
        case OPPURTUNITIESFORM_SAVE_REQUEST:
             return {
                        ...state,
                        oppDetails: action.payload
                    }
        case DECLARATIONFORM_SAVE_REQUEST:
            return {
                ...state,
                declaration: action.payload
            }
            case PROOF_SAVE_REQUEST:
                return {
                    ...state,
                    proof: action.payload
                }
       
            default:
            return state
    }
}