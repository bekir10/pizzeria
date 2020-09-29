import React from "react";
import {createStructuredSelector} from "reselect"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"
import {selectCollections} from "../../redux/home/home.selectors"
import {connect} from "react-redux"

const HomePage = ({collections}) =>(
  
     <div className="shop-page">

        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(HomePage);