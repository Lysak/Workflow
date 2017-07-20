import React from 'react';

import Toggle from './Toggle.jsx'

import './NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: this.Time,
            color: '#FFFFFF'
        };
    },

    handleNoteAdd() {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        };
        let d = new Date();
        let year = addZero(d.getFullYear().toString().substr(-2));
        let day = addZero(d.getDate());
        let month = addZero(d.getMonth());
        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let Time = (day + '.' + month + '.' + year + ' ' + h + ':' + m + '-');
        console.log(Time);
        let newNote = {
        title: this.state.title,
        color: this.state.color,
        text: Time
        };
        this.props.onNoteAdd(newNote);
    },

    render() {
        return (
            <div className='NoteEditor'>
                <div className='NoteEditor__footer'>
                    <button
                        className='NoteEditor__button'
                        /* disabled={!this.Time} */
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default NoteEditor;
