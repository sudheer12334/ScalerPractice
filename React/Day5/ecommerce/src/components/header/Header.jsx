import NavBar from '../navbar/NavBar';
import './Header.css'

import '../../App.css'
const Header=({categories,isLoading})=>{
  return(
    <div className="header">
        <NavBar categories={categories} isLoading={isLoading} />
    </div>
  )
}
export default Header;