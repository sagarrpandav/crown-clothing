import React from "react";
import './collection-page.styles.scss';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollection} from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({match, collection}) => {
    const {title, items} = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title.toUpperCase()}</h2>
            <div className='items'>
                {items.map(item => {
                    return (
                        <CollectionItem key={item.id} item={item}/>
                    )
                })}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => {
    return ({
        collection: selectCollection(ownProps.match.params.collectionName)(state)
    })
}
export default connect(mapStateToProps)(CollectionPage);