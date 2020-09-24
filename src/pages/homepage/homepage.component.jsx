import React from "react";
import PIZZA_DATA from "./pizza.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component"

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            collections: PIZZA_DATA
                
                  
    }
}

render(){
    const {collections} =this.state;
    return( <div className="shop-page">

        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>);
    }
}
export default HomePage;