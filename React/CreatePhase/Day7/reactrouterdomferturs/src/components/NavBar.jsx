import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-black text-white p-2 flex justify-between items-center">
        <div className="mx-10">
            LOGO
        </div>
        <div className="flex mx-10 justify-center items-center gap-10">
            <NavLink to="/" className={({isActive})=>isActive && "bg-amber-300 p-1 rounded"}>
                Home
            </NavLink>

            <NavLink to="/about" className={({isActive})=>isActive && "bg-amber-300 p-1 rounded"}>
                ABout
            </NavLink>

              <NavLink to="/usenavigate" className={({isActive})=>isActive && "bg-amber-300 p-1 rounded"}>
                UseNavigate
            </NavLink>

            <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar