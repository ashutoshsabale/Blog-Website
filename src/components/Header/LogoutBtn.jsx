import { useDispatch, useSelector } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn(){
      const dispatch = useDispatch();
      const userData = useSelector(state => state.auth.userData)
      const handleLogout = () => {
            authService.logout().then(()=>{
                  dispatch(logout())
            })

      }
      return(
            <div className="rounded-full flex flex-wrap flex-col">
                  <button
                  className="inline-block px-6 py-2 duration-200 hover:bg-red-400 rounded-full"
                  onClick={handleLogout}
                  >Logout</button>
                  <p className="text-xs text-center px-3">{userData.name}</p>
            </div>
      )
}

export default LogoutBtn