import React, { useContext } from "react";
import Modal from "carbon-components-react/lib/components/Modal";
import { DataContext } from "../../context";

const index = () => {
  const {
    globalData: { modal }, setGlobalData
  } = useContext(DataContext);
  const { globalData} = useContext(DataContext);

  const close=()=>{
      setGlobalData({
          ...globalData,
          modal:{
              ...modal,
              children:null,
              open:false
          }
      })
  }
  return (
    <Modal
      open={modal.open}
      modalHeading={modal.title}
      primaryButtonText="Add"
      secondaryButtonText="Cancel"
      onRequestClose={close}
      onRequestSubmit={modal.submit}
    >{modal.children}</Modal>
  );
};

export default index;
