import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    //same as  onChange = (e) => this.setState({ title : e.target.value })
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' }); //clearing fields
    }
    render() {
        return (
            <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add task ..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className='btn'
                    style={{ flex: 1 }}
                />
            </form>
        )
    }
}

export default AddTodo
