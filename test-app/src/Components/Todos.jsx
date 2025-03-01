import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import { useContext } from "react";

export default function Todos() {

    const { todoItems } = useContext(TodoItemsContext);
    return (
        todoItems.map(items => <TodoItem todos= {items} 
            key={items.Sno}
        />)

    );
}