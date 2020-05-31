import React from "react";
import './collections-overview.styles.scss';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import PreviewCollection from "../preview-collection/preview-collection.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

const CollectionOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
            {collections.map(({id, ...otherCollectionProps}) => {
                return (
                    <PreviewCollection key={id} {...otherCollectionProps}/>
                );
            })}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);