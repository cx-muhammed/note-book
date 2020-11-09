export const UPDATE_FONT_SIZE = 'UPDATE_FONT_SIZE'
export const UPDATE_FONT_TYPE = 'UPDATE_FONT_TYPE'
export const UPDATE_TEXT = 'UPDATE_TEXT'


export const updateSize = (payload) => {
    return {
        type: UPDATE_FONT_SIZE,
        payload
    }
}

export const updateType = (payload) => {
    return {
        type: UPDATE_FONT_TYPE,
        payload
    }
}

export const updateText = (payload) => {
    return {
        type: UPDATE_TEXT,
        payload
    }
}
