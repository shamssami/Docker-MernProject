import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    background-color:#cbd0d4;
    font-weight:bold;
    padding: 50px 50px 50px 50px;
 `

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProjectsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Project: '',
            Subject: '',
            Rate: '',
        }
    }

    handleChangeInputProject = async event => {
        const Project = event.target.value
        this.setState({ Project })
    }

    handleChangeInputSubject = async event => {
        const Subject = event.target.validity.valid
            ? event.target.value
            : this.state.Subject

        this.setState({ Subject })
    }

    handleChangeInputRate = async event => {
        const Rate = event.target.value
        this.setState({ Rate })
    }

    handleIncludeProject = async () => {
        const { Project, Subject, Rate } = this.state
         const payload = { Project, Subject, Rate }

        await api.insertProject(payload).then(res => {
            window.alert(`Project inserted successfully`)
            this.setState({
                Project: '',
                Subject: '',
                Rate: '',
            })
        })
    }

    render() {
        const { Project, Subject, Rate } = this.state
        return (
            <Wrapper>
                <Title>Create Project</Title>

                <Label>Project Name: </Label>
                <InputText
                    type="text"
                    value={Project}
                    onChange={this.handleChangeInputProject}
                />

<Label>Subject: </Label>
                <InputText
                    type="text"
                    value={Subject}
                    onChange={this.handleChangeInputSubject}
                />

                <Label>Rate: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={Rate}
                    onChange={this.handleChangeInputRate}
                />

     

                <Button onClick={this.handleIncludeProject}>Add Project</Button>
                <CancelButton href={'/projects/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProjectsInsert