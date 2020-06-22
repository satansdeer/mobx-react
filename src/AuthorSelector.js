import React from "react";
import { useRootStore } from "./RootStateContext";
import { useObserver } from "mobx-react";

export const AuthorSelector = () => {
  const { userStore } = useRootStore();

  return useObserver(() => (
    <>
      <select
        value={userStore.user}
        onChange={(e) => userStore.setUser(e.target.value)}
      >
        <option value="Admin">Admin</option>
        <option value="Non Admin">Non Admin</option>
      </select>
    </>
  ));
};
