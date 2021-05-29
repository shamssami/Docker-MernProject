import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
     border-width:20px 40px;
     background-color:#e4e7eb;
     font-weight:bold;
     `

const Update = styled.div`
    color: #0f4eef;
    font-weight: bold;
     cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    font-weight: bold;
    cursor: pointer;
`

class UpdateProject extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/projects/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteProject extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the project ${this.props.id} permanently?`,
            )
        ) {
            api.deleteProjectById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ProjectsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [],
            columns: [],
            isLoading: false,
        }
    }
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllProjects().then(projects => {
            this.setState({
                projects: projects.data.data,
                isLoading: false,
            })
        })
    }
    render() {
        const { projects, isLoading } = this.state
        console.log('TCL: ProjectsList -> render -> projects', projects)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Projects',
                accessor: 'Project',
                filterable: true,
            },
            {
                Header: 'Subject',
                accessor: 'Subject',
                filterable: true,
            },
            {
                Header: 'Rate',
                accessor: 'Rate',
                filterable: true,
            },
            {
                Header: 'Delete',
                accessor: 'Delete',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteProject id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: 'Update',
                accessor: 'Update',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateProject id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!projects.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={projects}
                        columns={columns}
                        loading={isLoading}
                         defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={3}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ProjectsList