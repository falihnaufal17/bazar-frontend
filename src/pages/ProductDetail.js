import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import '../assets/styles/ProductDetail.scss';
import { connect } from 'react-redux';
import { fetchProductDetail } from '../actions/Products';
import ProductDetailPlaceholder from '../components/placeholders/ProductDetail';

const ProductRecommendation = lazy(() => import('../components/ProductRecommendation'));
const ProductDetailComponent = lazy(() => import('../components/ProductDetail/'));

const ProductDetail = (props) => {
    return (
        <Suspense fallback={<ProductDetailPlaceholder {...props} />}>
            <ProductDetailComponent {...props} />
            <section id="recommendation-section">
                <div className="container">
                    <h1 className="title-recommendation"><span className="obj-el">RECOMMENDED FOR YOU</span></h1>
                    <ProductRecommendation />
                </div>
            </section>
        </Suspense>
    )
}

const mapStateToProps = state => {
    return {
        product: state.ProductDetailReducer.result,
        isLoading: state.ProductDetailReducer.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductDetail: (url, id) => {
            dispatch(fetchProductDetail(url, id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);