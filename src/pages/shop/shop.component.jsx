import React from "react";
import ShopData from '../shop/shop.data';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            collections: ShopData 
        }
    }
    render(){
        return <div className = "shop-page">
{
  this.state.collections.map(( {id, ...otherProps})=>(<CollectionPreview key={id} {...otherProps}/>))
}

        </div>   }
}
export default ShopPage;