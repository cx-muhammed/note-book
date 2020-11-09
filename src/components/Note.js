import React from 'react'
import PropTypes from 'prop-types'
import ToolBar from './ToolBar'
import './note.css'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'


function Note(props) {
    const dynamicStyle = {
        width: '100%',
        height: '100%',
        fontSize: props?.fontSize + 'px',
        fontFamily: props.currentFont,
        padding: '1em',
        backgroundColor: '#f5f5f5',
        lineHeight: '24px !important',
        backgroundAttachment: 'local',
    }

    console.log(dynamicStyle)

    return (
        <div className="note">
            <ToolBar />
            <textarea
                className="note_textbox"
                // rows="15"
                // cols="70"
                style={dynamicStyle}
                onChange={(event) => props.updateText(event.target.value)}
                value={props.text}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fontSize: state.fontSize,
        currentFont: state.currentFont,
        fonts: state.fontsFamily,
        text: state.text
    }
}

const mapOperationsToProps = (dispatch) => {
    return {
        updateText: (textToUpdate) => { dispatch(actions.updateText(textToUpdate)) }
        }
}

export default connect(mapStateToProps,mapOperationsToProps)(Note)

