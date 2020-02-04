import React from 'react';

const ApiContext = React.createContext({
    notes: [],
    folders: [],
    addFolder: () => {},
    addNote: () => {},
    deleteNote: () => {},
})

export default ApiContext; 

//#1 (Refactoring Application)
//context instance to store notes & folders
//Essentially create shape for all of the methods that I want to implement
// addFolder, addNote, deleteNote