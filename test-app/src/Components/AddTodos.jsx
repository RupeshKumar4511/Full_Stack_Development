import { useRef, useContext } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";


function AddTodos() {
    const { addNewItem } = useContext(TodoItemsContext);
    const todoNameElement = useRef('');
    const dueDateElement = useRef('');

    //let [title, setTitle] = useState('');
    // let [dueDate, setDueDate] = useState('');

    // const handleTitleChange =(event)=>{
    //     setTitle(event.target.value);
    // }

    // const handleDateChange =(event)=>{
        //     setDueDate(event.target.value);
    // }

    const handleAddButtonClicked = (event) => {
        const title = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;

        if (title.length === 0) {
            alert('Title and date cannot be blank..')
        }
        else {
            // console.log(event);
            event.preventDefault();

            addNewItem(title, dueDate);

            todoNameElement.current.value = '';
            dueDateElement.current.value = '';

            // setTitle('');
            // setDueDate('');

        }

    }


    return (

        <div className="container">
            <h2 className="text-center mb-3 mt-3">Add Todo</h2>

            <form className="row" onSubmit={handleAddButtonClicked}>
                <div className="col-lg-4 col-sm-6 mt-3">
                    <input type="text" className="form-control" placeholder="Todo Title " ref={todoNameElement} />
                </div>
                <div className="col-lg-4 col-sm-6 mt-3">
                    <input type="date" className="form-control"
                        placeholder="Due Date" ref={dueDateElement} />
                </div>

                <div className="col-lg-2 col-sm-6 mt-3" >
                    <button type="submit" className="btn btn-success"><BiMessageAdd /></button>
                </div>


            </form>
            <h2 className="text-center mt-5 mb-3">Todos List</h2>

        </div>
    )

}

export default AddTodos;