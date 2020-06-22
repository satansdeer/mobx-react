import {nanoid} from 'nanoid'
import { autorun, observable, action, decorate } from "mobx"

class NotesStore {
    constructor() {
      this.notes = []
      autorun(() => console.log(this.notesStore.notes))
    }

    addNote(author, text){
      this.notes.push({
        author, text, id: nanoid()
      })
    }

    removeNote(id){
      this.notes = this.notes.filter(note => note.id !== id)
    }
}

export default decorate(NotesStore, {
    notes: observable,
    addNote: action,
    removeNote: action
})