import React,{useEffect}from 'react'
import MenuBar from '../Components/Menu';
import {Container} from 'semantic-ui-react'
import {useUser} from '../config/hooks'
import io from "socket.io-client";
const Layout = ({children}) => {
    useUser({ redirectTo: '/home', redirectIfFound: true })

    useEffect(() => {
        fetch('/api/socket')
    }, [])
    
    return (
        <div>
            <MenuBar/>
            <Container>
            {children}
            </Container>
            
        </div>
    )
}

export default Layout
