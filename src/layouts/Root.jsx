import {Outlet} from "react-router-dom"
//<div className = "max-w-6xl mx-auto font-poppins">
const Root = () => {
    return (
        <div className = " mx-auto font-poppins">
        
          <Outlet></Outlet> 
        </div>
    )
}

export default Root
