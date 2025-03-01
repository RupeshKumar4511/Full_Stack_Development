import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store"
export default function WelcomeMessage(){
    const {todoItems} = useContext(TodoItemsContext);

    return(
    todoItems.length === 0 && <p className='text-center mt-4'>Enjoy Your Days. No Todos to display..</p>

    )
}