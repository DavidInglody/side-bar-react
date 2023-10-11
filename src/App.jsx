import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

const App = () => {
  const{isModalOpen}=useGlobalContext()
  return <>
    <Home/>   
    {isModalOpen && <Modal/>}
    <Sidebar/>
  </>
}
export default App;
