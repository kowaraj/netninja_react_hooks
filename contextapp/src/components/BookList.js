import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

to fix all this continue on: React Context & Hooks Tutorial #13 - Hooks with Context
https://www.youtube.com/watch?v=7LIGIN6_R_s&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=13

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



