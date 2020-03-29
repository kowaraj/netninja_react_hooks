import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext;
    render() { 
        const { toggleThemeFunction } = this.context;
        return ( 
            <button onClick={toggleThemeFunction}>Toggle the theme</button>
        );
    }
}
export default ThemeToggle;