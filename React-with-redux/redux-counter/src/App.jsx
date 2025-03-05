import Container from "./Components/Container";
import Header from './Components/Header';
import DisplayCounter from './Components/DisplayCounter';
import Controls from './Components/Controls';
import PrivacyMessage from './Components/PrivacyMessage';
import { useSelector } from "react-redux";
function App() {
  const Privacy = useSelector(store => store.Privacy)
  return (


    <Container>
      <Header />
      {Privacy ? <PrivacyMessage /> : <DisplayCounter />}
      <Controls />
    </Container>

  )
}

export default App
