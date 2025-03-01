import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
export default function TodoItem({ todos }) {
    const { deleteItem } = useContext(TodoItemsContext);
    return (


        <div className="container">
            <h3 className="mt-4">{todos.title}</h3>
            <p>{todos.dueDate}</p>
            <button type="submit" className="btn btn-danger"
                onClick={() => deleteItem(todos)}><MdDelete /></button>

        </div>

    );
}