import React, { Component } from 'react'
import styled from 'styled-components'

 import Links from './Links'
import Logo from './Logo'

const Container = styled.div.attrs({
    className: 'container',
})`background-color:#2a2f33;
width:100vw;
color:white;
   `

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg ',
})`
    margin-bottom: 50 px; 
    color:white;
 `

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
<img src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ" width="90px" height="80px"alt ="docker"/>             
        <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar