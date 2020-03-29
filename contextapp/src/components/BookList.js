import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList-OLD extends Component {
    static contextType = ThemeContext; // <---- cannot be used inside a Functional Component
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (  
            <div className="book-list"  style={{background: theme.bg, color: theme.syntax }}>
                <ul>
                <li  style={{background: theme.ui }}>book one</li>
                <li  style={{background: theme.ui }}>book two</li>
                <li  style={{background: theme.ui }}>book three</li>
                </ul>
            </div>
        );
    }
}

const BookList-NEW = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="book-list"  style={{background: theme.bg, color: theme.syntax }}>
            <ul>
            <li  style={{background: theme.ui }}>book one</li>
            <li  style={{background: theme.ui }}>book two</li>
            <li  style={{background: theme.ui }}>book three</li>
            </ul>
        </div>
    );
}
 

export default BookList;



