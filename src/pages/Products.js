import React, {lazy, useState, Suspense, useEffect} from 'react';
import '../assets/styles/Products.scss';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/Products';
import {ProductsPlaceholder} from '../components/placeholders/AppPlaceholder'
import ProductsComponent from '../components/Products';

const Products = props => {

    let activeClass = 'cp-placeholder transparent'

    if(props.isLoading){
        activeClass = activeClass + ' active'
    }
    
    return(
        <Suspense fallback={<ProductsPlaceholder {...props}/>}>
            <div className={activeClass}>
                <ProductsComponent {...props} />
            </div>
        </Suspense>
    )
}

const mapStateToProps = state => {
    return {
        pagination: state.ProductsReducer.pagination,
        products: state.ProductsReducer.result,
        isLoading: state.ProductsReducer.isLoading,
        hasMore: state.ProductsReducer.hasMore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (url, per_page, page, subcategory) => {
            dispatch(fetchProducts(url, per_page, page, subcategory))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);