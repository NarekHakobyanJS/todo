import React from "react";
import propTypes from "prop-types"
import TodoItem from "./TodoItem";

const styles = {
    ul : {
        listStyle : "none",
        margin : 0,
        padding : 0,
    }
}
const TodoList = (props) => {

    let todo = props.todos.map((todo, index) => <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onChange}/>)
    return(
        <ul style={styles.ul}>
            {todo}
        </ul>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onChange: propTypes.func.isRequired
}

export default TodoList;