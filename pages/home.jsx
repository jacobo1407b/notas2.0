import React, { useEffect, useContext, useState } from "react";
import Header from "next/head";
import { DataContext } from "../context";
import io from "socket.io-client";

const home = () => {
  const { globalData,setGlobalData} = useContext(DataContext);
  const [sock, setsock] = useState(null);
  const [conne, setconne] = useState(false);

  useEffect(() => {
    if (globalData.user) {
      const socket = io();
      socket.on("connect", () => {
        setconne(true);
        setsock(socket);
      });

      socket.emit("getNotas",{id:globalData?.user?.id},(response)=>{
          setGlobalData({
            ...globalData,
            notas:response?.data,
            socke:socket
          })
      })
    }
    return () =>
      sock?.on("disconnect", () =>{});
  }, [globalData.user]);

  const onclic = () => {
    const data ={
      title: "",
          desc: "",
    }
    sock.emit(
      "newNotas",
      {
        data,
        id:globalData.user.id
      },
      (response) => {
        console.log(response);
      }
    );
  };
  return (
    <div>
      <Header>
        <title>Notas | Home</title>
      </Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <button onClick={onclic}>add</button>
      <h1>Home page</h1>
    </div>
  );
};

export default home;
