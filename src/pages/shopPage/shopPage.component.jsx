import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from 'react-router-dom';
import CollectionPage from "../collectionPage/collection-page.component";


const ShopPage = ({match}) => {

    return (
        <div className='shop-page'>
            <Route exact path={match.path} component={CollectionOverview}/>
            <Route exact path={`${match.path}/:collectionName`} component={CollectionPage}/>
        </div>
    );
}

export default ShopPage;