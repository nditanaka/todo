import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    // const count = {}
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
            <p>Hello! Welcome to your TodoList. You currently have .. tasks you need to complete.</p>
            {/* <p>{todo.length}</p> */}
        </header>
    )
}

const headerStyle = {
    background: '#4EC5F1',
    color: '#eee',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
