import { Header } from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import About from './Components/About.jsx';
import AddTodos from './Components/AddTodos.jsx';
import WelcomeMessage from './Components/WelcomeMessage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from './Components/Todos.jsx';
import TodoItemsContextProvider from './store/todo-items-store.jsx';


function App() {
  return (
    <TodoItemsContextProvider>
        <Router>
          <Header/>
          <AddTodos />
          <WelcomeMessage/>
          <Routes>
            <Route path='/' element={<Todos />} />
            {/* <Route path='/about' element={<About />}/> */}
          </Routes>
          <Footer />
        </ Router>
    </TodoItemsContextProvider>

  );
}

export default App;
