import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils'
import {ReactComponent as Logo} from  "../../asessts/original.svg"


import './header.style.scss'
function Header(props){

return (<div className ="header">
<Link className="logo-container" to="/">
    <Logo className="logo"/>
</Link>
<div className="options">
<Link className="option" to="/shop">
SHOP
</Link>
<Link className="option" to="/shop">
CONTACT
</Link>
{
    props.currentUser ?
    <div className='option' onClick={()=>auth.signOut()}>SiGN OuT</div>
    :
    <Link className='option' to = '/signin'>SIGN IN</Link>
}
</div>
</div>)
}
// used to get user data from reducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);