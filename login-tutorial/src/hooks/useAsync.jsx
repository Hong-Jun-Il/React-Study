function coinReducer(state, action){
    switch(action.type){
        case "LOADING":
            return {
                data: null,
                loading: true,
                error: null
            };
        case "SUCCESS":
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case "ERROR":
            return {
                data: null,
                loading: false,
                error: action.e
            };
        default:
            throw new Error(`Unhandled Action Type: ${action.type}`);
    }
}

