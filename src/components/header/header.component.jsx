import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo} from  "../../asessts/original.svg"
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.components'
import {selectCartHidden, selectCartItems} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors.js'


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
    :(
    <Link className='option' to = '/signin'>SIGN IN</Link>
    )}
    <CartIcon/>
</div>
{
    props.hidden ? null :
<CartDropdown/>
}
    </div>)
}
// used to get user data from reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden 
});
export default connect(mapStateToProps)(Header);