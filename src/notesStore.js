import {nanoid} from 'nanoid'

export function createNotesStore(){
  return {
    notes: [],
    addNote(text){
      console.log(text, this.notes)
      this.notes.push({
        text, id: nanoid()
      })
    },
    removeNote(id){
      this.notes = this.notes.filter(note => note.id !== id)
    }
  }
}