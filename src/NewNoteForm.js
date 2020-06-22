import React from "react";
import { useRootStore } from "./RootStateContext";
import { useObserver } from "mobx-react";

export const NewNoteForm = () => {
  const [noteText, setNoteText] = React.useState("");
  const { userStore } = useRootStore();

  return useObserver(() => (
    <>
      <input
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          userStore.addNote(noteText);
          setNoteText("");
        }}
      >
        Add note
      </button>
    </>
  ))
};
