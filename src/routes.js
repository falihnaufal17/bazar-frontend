import React, { lazy } from 'react';

const Home = lazy(()=>import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Products = lazy(() => import('./pages/Products'));
const Profile = lazy(() => import('./pages/Profile'));
const Paymentselection = lazy(() => import('./pages/Paymentselection'));
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
    },
    {
        path: '/products/:menu',
        component: Products,
        exact: true
    },
    {
        path: '/products/:menu/:category',
        component: Products,
        exact: true
    },
    {
        path: '/products/:menu/:category/:subcategory',
        component: Products,
        exact: true
    },
    {
        path: '/profile',
        component: Profile,
        exact: true
    },
    {
        path: '/paymentselection',
        component: Paymentselection,
        exact: true
    },
]