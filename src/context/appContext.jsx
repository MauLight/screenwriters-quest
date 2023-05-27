import { createContext, useContext, useEffect, useState } from "react"
import getState from './flux'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const Context = createContext(null);

const appContext = (PassedComponent) => {

  const StoreWrap = (props) => {
    //state holds context.
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) => setState({
          store: Object.assign(state.store, updatedStore),
          actions: { ...state.actions },
        })
      })
    );

    //Use as window.onload
    useEffect(() => {

    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    )
  };
  return StoreWrap;
};

export default appContext;