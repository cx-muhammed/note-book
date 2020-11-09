import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import './toolbar.css'

function ToolBar(props) {

    const saveNote = () => {
        var blob = new Blob([props.text], { type: 'text/plain' });
        if (window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveBlob(blob, 'note.txt');
        }
        else {
            var elem = window.document.createElement('a');
            elem.href = window.URL.createObjectURL(blob);
            elem.download = 'note.txt';
            document.body.appendChild(elem);
            elem.click();
            document.body.removeChild(elem);
        }
    }

    let fonts = props.fonts?.map((font, index) => {
        return (
            <a className="dropdown-item" href="#" key={index} onClick={() => props.updateFontType(font)}>{font}</a>
        )

    });

    let fontsSizes = [14, 15, 16, 17, 18, 19, 20].map((size, index) => {
        return (
            <a className="dropdown-item" href="#" onClick={() => props.updateFontSize(size)}>{size}</a>
        )

    });

    let selectedType = props.currentFont;

    return (
        <div className="tool-bar">
            <div class="dropdown tb-item">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    font type
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {fonts}
                </div>
            </div>
            <div class="font-size tb-item">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        font size
                </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {fontsSizes}
                    </div>
                </div>
            </div>
            <div class="save tb-item">
                <button type="button" class="btn btn-info" onClick={()=> saveNote()}>Save note</button>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        fontSize: state.fontSize,
        currentFont: state.currentFont,
        fonts: state.fontsFamily,
        text:state.text
    }
}

const mapOperationsToProps = (dispatch) => {
    return {
        updateFontSize: (newFontSize) => { dispatch(actions.updateSize(newFontSize)) },
        updateFontType: (newFontType) => { dispatch(actions.updateType(newFontType)) }
    }
}

export default connect(mapStateToProps, mapOperationsToProps)(ToolBar)
