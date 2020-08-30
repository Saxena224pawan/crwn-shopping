import React from 'react';
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';
function CollectionItem(props){
    return (<div className="collection-item">
    <div className="image" style ={{"backgroundImage" : `url(${props.imageUrl})`}}/>
    <div className ="collection-footer">
        <span className="name">{props.name}</span>
        <span className ="price">{'$'}{props.price}</span>
    </div>
    <CustomButton onClick={() => props.addItem(props.item)} inverted>Add To Cart</CustomButton>
    </div>
    )
}

const mapDisptachToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDisptachToProps)(CollectionItem);