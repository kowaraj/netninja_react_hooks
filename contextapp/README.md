# Pros and Cons

Comparing 2 approaches of consuming the Context:

1. Using `contextType`:
```
class BookList extends Component {
    static contextType = ThemeContext;
```
versus...
2. Using `Context.Consumer`:
```
class Navbar extends Component {

    render() { 
        return (
            <ThemeContext.Consumer>{ (context) => { 
```


| 1. | 2. |
|----|----|
|    | + can consume more than 1 Provider        |
|    | + also works with `functional` components |
