import React from "react";
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect';

import {signOutStart} from '../../redux/user/user.actions';
import {ReactComponent as Logo} from  "../../asessts/original.svg"
import CartIcon from '../cart-icon/cart-icon.components';
import CartDropdown from '../cart-dropdown/cart-dropdown.components'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors.js'
import { HeaderContainer,LogoContainer,OptionsContainer, OptionLink} from "./header.styles";

function Header(props){

return (
    <HeaderContainer>
    <LogoContainer to='/'>
    <Logo className='logo' />
  </LogoContainer>
  <OptionsContainer>
    <OptionLink to='/shop'>SHOP</OptionLink>
    <OptionLink to='/shop'>CONTACT</OptionLink>
    {props.currentUser ? (
      <OptionLink as='div' onClick={signOutStart}>
        SIGN OUT
      </OptionLink>
    ) : (
      <OptionLink to='/signin'>SIGN IN</OptionLink>
    )}
    <CartIcon />
  </OptionsContainer>
  {props.hidden ? null : <CartDropdown />}
</HeaderContainer>)
}
// used to get user data from reducer
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden 
});
const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart)
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);