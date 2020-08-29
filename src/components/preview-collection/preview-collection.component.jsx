import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

function CollectionPreview(props){
 return (<div className="collection-preview">
  <h1 className="title">{props.title.toUpperCase()}</h1>
  <div className="preview">
  {props.items.filter((item,idx)=> idx<4).map(({id, ...otherItemProps})=> 
  <CollectionItem key={id} {...otherItemProps} />
  )}
  </div>
 </div>)
}
export default CollectionPreview;