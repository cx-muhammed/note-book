import * as actions from './actions';

const initState = {
    'fontsFamily': ['\'Roboto Mono\', monospace', '\'Quicksand\', sans-serif', '\'Caveat\', cursive'],
    'fontSize': 14,
    'currentFont': '\'Roboto Mono\', monospace',
    'text': 'what in your mind?'

}

function reducer(state = initState, action) {
    console.log('action fired!!', action)
    switch (action.type) {
        case actions.UPDATE_FONT_SIZE:

            return {
                ...state,
                fontSize: action.payload,
            };
        case actions.UPDATE_FONT_TYPE:

            return {
                ...state,
                currentFont: action.payload,
            };
        case actions.UPDATE_TEXT:

            return {
                ...state,
                text: action.payload,
            }
        default:
            return state;
    }
}

export default reducer