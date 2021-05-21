import React, { useContext } from "react";
import TextInput from "carbon-components-react/lib/components/TextInput";
import Form from "carbon-components-react/lib/components/Form";
import { DataContext } from "../../context";

const index = () => {
  const { setGlobalData, globalData } = useContext(DataContext);
  const { data, modal } = globalData;
  function onSubmit() {
    const { name, desc } = data;
    if (!name || !desc) {
      alert("Completa los campos");
    } else {
      const { socke } = globalData;
      socke.emit("newNotas", { data, id: globalData.user.id }, (response) => {
        console.log(response);
        if (response) {
          alert("Nota agregada correctamente");
        } else {
          alert("Error agregando nota");
        }
      });
    }
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    setGlobalData({
      ...globalData,
      modal: {
        ...modal,
        submit: onSubmit,
      },
      data: {
        ...data,
        [name]: value,
      },
    });
  };
  return (
    <div>
      <Form onChange={onChange}>
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Nombre"
          placeholder="example"
          name="name"
          style={{ marginBottom: "1rem" }}
        />
        <TextInput
          data-modal-primary-focus
          id="text-input-1"
          labelText="Descripción"
          placeholder="example"
          name="desc"
          style={{ marginBottom: "1rem" }}
        />
      </Form>
    </div>
  );
};

export default index;
