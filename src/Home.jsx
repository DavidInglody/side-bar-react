import Sidebar from "./Sidebar"
import { useGlobalContext } from "./context"
import {GiHamburgerMenu} from "react-icons/gi"

const Home = () => {

  const {openSidebar, openModal,isSidebarOpen,isModalOpen}= useGlobalContext() 

  return <main>
      <button className="sidebar-btn" onClick={openSidebar}><GiHamburgerMenu/></button>
      <button className="btn" onClick={openModal}>Show Modal</button>
    </main>
}
export default Home