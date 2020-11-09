import React, { lazy } from 'react';

const Home = lazy(()=>import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Products = lazy(() => import('./pages/Products'));
const Profile = lazy(() => import('./pages/Profile'));
<<<<<<< HEAD
const Paymentselection = lazy(() => import('./pages/Paymentselection'));
=======
const MyWhislist = lazy(() => import('./pages/MyWhislist'));
const Cart = lazy(() => import('./pages/Cart'));
>>>>>>> af4b73ba45794a1764f5a9628c6fd73151073492
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
        path: '/profile/my-profile',
        component: Profile,
        exact: true
    },
    {
<<<<<<< HEAD
        path: '/paymentselection',
        component: Paymentselection,
=======

        path: '/MyWhislist',
        component: MyWhislist,
	},
	{
        path: '/bags',
        component: Cart,
>>>>>>> af4b73ba45794a1764f5a9628c6fd73151073492
        exact: true
    },
]