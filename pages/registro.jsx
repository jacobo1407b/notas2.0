import React,{useState}from "react";
import Header from "next/head";
import { Grid, Card } from "semantic-ui-react";
import {register} from '../utils/api'
import Form from "carbon-components-react/lib/components/Form";
import TextInput from "carbon-components-react/lib/components/TextInput";
import Button from "carbon-components-react/lib/components/Button";
import Loading from 'carbon-components-react/lib/components/Loading'

const registro = () => {

    const [data, setData] = useState({})
    const [loading, setloading] = useState(false)

    const onClick =()=>{
        const {name,email,password} = data
        if(!name || !email || !password){
            alert('Completa los campos')
        }else{
            setloading(true);
            register(data).then(res=>{
                setloading(false)
                if(res.error){
                    alert(res.msg)
                }else{
                    alert(res.msg)
                }
            })
        }
    }

    const onChange =(e)=>{
        const {value,name} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
  return (
    <div>
      <Header>
        <title>Notas | Registro</title>
      </Header>
      <Loading active={loading}/>
      <Grid stackable>
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row />
        <Grid.Row>
          <Grid.Column width={6}/>
          <Grid.Column  width={10}>
            <Card>
              <Card.Content>
                <Form onChange={onChange}>
                  <TextInput type="email" labelText="Email" required name="email"/>
                  <br />
                  <TextInput type="password" labelText="Password" required name="password"/>
                  <br />
                  <TextInput type="text" labelText="Nombre" required name="name"/>
                  <br />
                  <Button onClick={onClick} >
                        Registrarse
                    </Button>
                </Form>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default registro;

/**
 *
 *
 */
