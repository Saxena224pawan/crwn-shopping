import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";

function Homepage({history}){
    return (
      <div className ="homepage">
           <Directory history ={history} />
            </div>
    );}

export default Homepage;