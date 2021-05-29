import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`color:white;`

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`color:white;
 `

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
    
})`color:white;
font-weight:bold;
font-size:22px;
 `

class Links extends Component {
    render() {
        return (
            <React.Fragment>
               
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/Projects/list" className="nav-link">
                                List Projects
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/Projects/create" className="nav-link">
                                Create Project
                            </Link>
                        </Item>
                    </List>
                </Collapse>
 
            </React.Fragment>

         )
    }
}

export default Links