const mapReducerDefault = {
    isShown:true
}
const mapReducer = (state = mapReducerDefault , action) =>{
// export default(state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_VISIBILITY':
            console.log(state)
            let newState = state;
            newState.isShown = !state.isShown;
            return {
                ...newState
            };
            case 'GET_VISIBILITY':
                console.log('The state after get visibility ', state )
                return {
                    isShown
                }
        default:
            return state;
        }
    };
    export default mapReducer;


