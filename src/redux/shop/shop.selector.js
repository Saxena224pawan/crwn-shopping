import {createSelector} from 'reselect';

const selectShopData = state => state.shop;
const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

export const selectShopCollections = createSelector(
    [selectShopData],
    shop => shop.collections
)
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
  export const selectShopCollection = collectionUrlParam =>
    createSelector(
      [selectShopCollections],
      collections => collections[collectionUrlParam]
    );
  