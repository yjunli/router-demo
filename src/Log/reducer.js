import { LOGSTATE } from './actionType';

const State = {
    log: false
}

export default (state = State, action) => {
    switch (action.type) {
        case LOGSTATE: {
            let { log } = state;
            return { ...state, log: !log }
        }
        default: {
            return state
        }
    }
}