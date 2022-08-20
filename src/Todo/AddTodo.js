import React, {useState} from "react";
import propTypes from "prop-types";

function useInputValue(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    return {
        bind : {
            value : value,
            onChange : (e) => setValue(e.target.value)
        },
        clear: () => setValue(""),
        value : () => value
    }
}

const styles = {
    form : {
        marginBottom : "1rem"
    }
}
const AddTodo = ({onCreate}) => {
    const input = useInputValue("")
    const [value, setValue] = useState("");

    function submitH(e) {
        e.preventDefault()
        if(input.value().trim()){
            onCreate(input.value())
            input.clear()
            //setValue("")
        }
    }
    return(
        <form style={styles.form} onSubmit={submitH}>
            <input {...input.bind}/>
            <button type={"submit"}>Add todo</button>
        </form>
    )
}


AddTodo.propTypes = {
    onCreate: propTypes.func.isRequired
}
export default AddTodo