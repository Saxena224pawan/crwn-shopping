import React from "react";
import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.component";

function Homepage({history}){
    
    return (
<HomePageContainer>
      <Directory history ={history} />
      </HomePageContainer>
    );}

export default Homepage;