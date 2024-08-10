import {Navigate} from 'react-router-dom'
const PrivateRoute=({element,isUserAuthenticated})=>{
    return isUserAuthenticated? (element) : (
        <Navigate to='/login'/>
    );
        
      
}
export default PrivateRoute;