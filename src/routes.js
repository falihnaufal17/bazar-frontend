import React, { lazy } from 'react';

const Home = lazy(()=>import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/product/detail',
        component: ProductDetail,
        exact: true
    }
]