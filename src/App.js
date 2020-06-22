import React from "react";
import "./App.css";
import { NewNoteForm } from "./NewNoteForm";
import { AuthorSelector } from "./AuthorSelector";
import { useRootStore } from "./RootStateContext";
import { useObserver, observer } from "mobx-react";

export const App = observer(() => {
  const {notesStore} = useRootStore();

  // return useObserver(() => (
    return(
    <>
      <AuthorSelector/>
      <hr/>
      <ul>
        {notesStore.notes.map((note) => (
          <li onClick={
            () => notesStore.removeNote(note.id)
          } key={note.id}>{note.text} <b>{note.author}</b></li>
        ))}
      </ul>
      <NewNoteForm />
    </>
  // ));
    )
})
