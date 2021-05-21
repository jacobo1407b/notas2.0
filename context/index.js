import React, { useState } from "react";

const globalData = {
  user: null,
  notas: [],
  modal: {
    title: "",
    children: null,
    open: false,
    submit:null
  },
  data: {
    name: "",
    desc: "",
  },
  socke:null
};

export const DataContext = React.createContext({
  globalData: globalData,
  setGlobalData: () => {},
});

export const Provider = (props) => {
  const setGlobalData = (data) => {
    setState({ ...state, globalData: data });
  };
  const initState = {
    globalData: globalData,
    setGlobalData: setGlobalData,
  };
  const [state, setState] = useState(initState);
  return (
    <DataContext.Provider value={state}>{props.children}</DataContext.Provider>
  );
};
