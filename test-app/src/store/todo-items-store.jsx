import { createContext ,useEffect,useReducer} from "react";

export const TodoItemsContext = createContext({
    todoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{}
});



const todoItemReducer = (currentTodoItems,action) =>{


  let newTodoItems = currentTodoItems;
  if(action.type === 'NEW_ITEM'){
    newTodoItems = [...currentTodoItems,{title:action.payload.itemName,dueDate:action.payload.itemDueDate,Sno:action.payload.Sno}
    ]

  }else if(action.type === 'DELETE_ITEM'){
    newTodoItems =  currentTodoItems.filter((items)=>  action.payload.todos.Sno !== items.Sno);
  }
 
  
   return newTodoItems;
}


const TodoItemsContextProvider = ({children}) =>{


  let TotalTodos;
  if(localStorage.getItem("todos") === null){
    TotalTodos= [];
  }else{
    TotalTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer,TotalTodos);
 
 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todoItems))
  },[todoItems])
  
  

  const addNewItem = (itemName,itemDueDate) =>{

    let Sno ;
    if(todoItems.length === 0 ){
      Sno = 0;
      
    }else{
      Sno = todoItems[todoItems.length-1].Sno + 1;
    }


    const newItemAction ={
      type:'NEW_ITEM',
      payload:{
        itemName:itemName,
        itemDueDate:itemDueDate,
        Sno:Sno 
      }
    }
    dispatchTodoItem(newItemAction)
    
}



const deleteItem = (todos) =>{
    const DeleteItemAction ={
    type:'DELETE_ITEM',
    payload:{
      todos:todos
    }
  }
  dispatchTodoItem(DeleteItemAction)

}






  
  return (
  <TodoItemsContext.Provider value={
    {todoItems:todoItems,
    addNewItem:addNewItem,
    deleteItem:deleteItem}}>
       
      {children}
     
    </TodoItemsContext.Provider>
    
    );
}

export default TodoItemsContextProvider;