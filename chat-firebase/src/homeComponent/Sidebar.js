import Navbar from '../homeComponent/Navbar'
import Search from '../homeComponent/Search';
import Chats from '../homeComponent/Chats';


const Sidebar = () => {
    return(
    <div className="sidebar">
        <Navbar />
        <Search />
        <Chats />
    </div>
    )
}

export default Sidebar;