import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({id,name,price,imageUrl,description}) =>( 

    <div className="collection-item">
        <div className="image" 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
            <div className="collection-footer">
              <b>  <span className="name">{name}</span></b>
               <b> <span className="price">${price}</span> </b>
 
            </div>

            <span className="desciption">{description}</span>

    

        </div>

    
 )



export default CollectionItem;