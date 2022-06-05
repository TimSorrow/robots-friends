import { CHANGE_SEARCHFIELD } from "./constants"

const initialState = { 
    searchField: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch(action) {
        case: CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload})
    }
}
