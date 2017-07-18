import React from 'react';

import NoteEditor from './NoteEditor.jsx';
import NotesGrid from './NotesGrid.jsx';
import Infographic from './Infographic.jsx';

import './App.less';

class App extends React.Component{
    handleNoteAdd(data) {
        console.log(data);
    }

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Workflow</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid />
                {/* notes={this.state.notes} onNoteDelete={this.handleNoteDelete} */}
                <Infographic />
            </div>
        );
    }
};

export default App;