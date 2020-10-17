import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.components';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount(){
    const {fetchCollectionsStart} = this.props;
  fetchCollectionsStart();
  }

  render() {
    const {match, isCollectionFetching, isCollectLoaded} = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={!isCollectLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching,
  isCollectLoaded: selectIsCollectionsLoaded
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
