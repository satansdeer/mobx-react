import { observable, action, decorate } from "mobx"

class UserStore {
  constructor(notesStore) {
    this.notesStore = notesStore
    this.user = "Admin"
  }

  addNote(text){
    if(!this.user){
      alert('Pick user first')
      return
    }
    this.notesStore.addNote(this.user, text)
  }

  setUser(user){
    this.user = user;
  }
}

export default decorate(UserStore, {
  user: observable,
  addNote: action,
  setUser: action,
  getNotes: action
})