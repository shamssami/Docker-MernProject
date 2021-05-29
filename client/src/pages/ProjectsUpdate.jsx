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

class ProjectsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdateProject = async () => {
        const { id, Project, Subject, Rate } = this.state
         const payload = { Project, Subject, Rate }

        await api.updateProjectById(id, payload).then(res => {
            window.alert(`Project updated successfully`)
            this.setState({
                Project: '',
                Subject: '',
                Rate: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const project = await api.getProjectById(id)

        this.setState({
            Project: project.data.data.Project,
            Subject: project.data.data.Subject,
            Rate: project.data.data.Rate,
        })
    }

    render() {
        const { Project, Subject, Rate } = this.state
        return (
            <Wrapper>
                <Title>Create Project</Title>

                <Label>Project: </Label>
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
                <Label>Rating: </Label>
                <InputText
                    type="String"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={Rate}
                    onChange={this.handleChangeInputRating}
                />

           

                <Button onClick={this.handleUpdateProject}>Update Project</Button>
                <CancelButton href={'/projects/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProjectsUpdate