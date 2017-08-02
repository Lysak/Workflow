import React from 'react';

import './NoteEditor.less';

const NoteEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            text: '',
            color: '#FFFFFF',
            isToggleOn: true,
            shade: 'green',
            firstTime: NaN,
            id: null
        };
    },

    handleNoteAdd() {
        let scope = this.state;
        let shade = "";
        if (scope.isToggleOn != true) {
            var falseToggle = scope.isToggleOn;
            shade = "green";
            scope.shade = shade;
        } else {
            var trueToggle = scope.isToggleOn
            shade = "red";
            scope.shade = shade;
        }

        scope.isToggleOn = !scope.isToggleOn;

        function dateTimeNow() {
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
            const time = (day + '.' + month + '.' + year + ' ' + h + ':' + m + '-');
            return time;
        }

        function dateNow() {
            function addZero(i) {
                if (i < 10) {
                    i = "0" + i;
                }
                return i;
            };
            let d = new Date();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
            const time = (h + ':' + m);
            return time;
        }

        if (trueToggle == true && trueToggle != undefined) {
            let dateTime = dateTimeNow();
            scope.firstTime = dateTime;
            console.log(scope.firstTime + " firstTime");
            let newNote = {
                color: scope.color,
                text: dateTime
            }
            console.log(newNote);
            // console.log("newNote");
            this.props.onNoteAdd(newNote).then((res) =>{
                scope.id = res.data._id;
                this.setState(scope);
            }
                );
        } else if (falseToggle == false && falseToggle != undefined) {
            let secondTime = scope.firstTime + dateNow();
            console.log(secondTime + ' secondTime');
            let newNote = {
                color: scope.color,
                text: secondTime,
                _id: scope.id
            }
            console.log(newNote);
            // console.log("newNote");
            this.props.oneNoteUpdate(scope.id, newNote);
        }
        this.setState(scope);
    },
    
    

    render() {
        let navClass = this.state.shade;
        return (
            <div className='NoteEditor'>
                <div className='NoteEditor__footer'>
                    <button
                        className={'NoteEditor__button ' + navClass} onClick={this.handleNoteAdd}
                    >
                        {this.state.isToggleOn ? 'START' : 'STOP'}
                    </button>
                </div>
            </div>
        );
    }
});

export default NoteEditor;
