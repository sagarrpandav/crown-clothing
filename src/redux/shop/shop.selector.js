import {createSelector} from 'reselect';

const COLLECTION_TO_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    (shop) => {
        return shop.collections;
    }
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => {
        return Object.keys(collections).map(collectionKey => {
            return collections[collectionKey];
        })
    }
)

export const selectCollection = (collectionName) => {
    return createSelector(
        [selectCollections],
        (collections) => {
            return collections[collectionName]
        }
    );
};