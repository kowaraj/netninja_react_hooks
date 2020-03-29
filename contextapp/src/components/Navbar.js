import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {

    render() { 
        return (
            <AuthContext.Consumer>{ (authContext) => ( // no block opening...
                <ThemeContext.Consumer>{ (context) => {  // using a separate block {}...
                    const { isLightTheme, light, dark } = context;
                    const theme = isLightTheme ? light : dark;
                    const { isAuthenticated, toggleAuthFunction } = authContext;

                    return(
                        <nav style={{background: theme.ui, color: theme.syntax }}>
                            <h1> Context app  </h1>
                            <div onClick={toggleAuthFunction}>
                                <p> {isAuthenticated ? "Logged in": "Logged out"} </p>
                            </div>
                            <ul>    
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}</ThemeContext.Consumer>
            ) }</AuthContext.Consumer>
        )
    }
}

export default Navbar;