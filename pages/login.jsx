import React, { useState } from "react";
import Head from "next/head";
import Router from 'next/router'
import { Grid, Card } from "semantic-ui-react";
import { loginApi } from "../utils/api";
import Form from "carbon-components-react/lib/components/Form";
import TextInput from "carbon-components-react/lib/components/TextInput";
import Button from "carbon-components-react/lib/components/Button";
import Loading from "carbon-components-react/lib/components/Loading";

const login = () => {
  const [data, setData] = useState({});
  const [loading, setloading] = useState(false);
  

  const onChange =(e)=>{
    const {value,name} = e.target
    setData({
        ...data,
        [name]:value
    })
}

const onClick =()=>{
    const {email,password} = data
    if( !email || !password){
        alert('Completa los campos')
    }else{
        setloading(true);
        loginApi(data).then(res=>{
            setloading(false)
            Router.push('/home')
            //push data
        }).catch(err=>{
            setloading(false)
            alert('Error', err.message)
        })
    }
}
  return (
    <div>
      <Head>
        <title>Notas | Login</title>
      </Head>
      <Loading active={loading} />
      <Grid stackable>
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row>
          <Grid.Column width={6} />
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Form onChange={onChange}>
                  <TextInput
                    type="email"
                    labelText="Email"
                    required
                    name="email"
                  />
                  <br />
                  <TextInput
                    type="password"
                    labelText="Password"
                    required
                    name="password"
                  />
                  <br />
                  <Button onClick={onClick}>Registrarse</Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default login;
