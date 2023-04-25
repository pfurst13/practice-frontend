
const Navbar = () => {
    return(
    <div className="navbar">
        <span className="logo">Chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/16407235/pexels-photo-16407235.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt=""/>
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
    )
}

export default Navbar;