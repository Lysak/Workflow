import React from 'react';

import './NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF',
            isToggleOn: true,
            shade: 'green'
        };
    },

    handleNoteAdd() {
        let shade = "";
        if (this.state.isToggleOn != true) {
            shade = "green";
            this.setState({ shade: shade});
            // console.log(shade + ' green');
        } else {
            shade = "red";
            this.setState({ shade: shade});
            // console.log(shade + ' red');
        }

        
        this.setState(function(prevState) {
            return {isToggleOn: !prevState.isToggleOn};
        });
        // console.log(this.state.isToggleOn);

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
        let time = (day + '.' + month + '.' + year + ' ' + h + ':' + m + '-');
        console.log(time);
        let newNote = {
        title: this.state.title,
        color: this.state.color,
        text: time
        };
        this.props.onNoteAdd(newNote);
    },

    render() {
        let navClass = this.state.shade;
        return (
            <div className='NoteEditor'>
                <div className='NoteEditor__footer'>
                    <button
                        className={'NoteEditor__button ' + navClass}
                        /* disabled={!this.time} */
                        onClick={this.handleNoteAdd}
                    >
                        {this.state.isToggleOn ? 'START' : 'STOP'}
                    </button>
                </div>
            </div>
        );
    }
});

export default NoteEditor;
