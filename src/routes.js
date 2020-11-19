import React, { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Products = lazy(() => import('./pages/Products'));
const Profile = lazy(() => import('./pages/Profile'));
const Paymentselection = lazy(() => import('./pages/Paymentselection'));
const MyWhislist = lazy(() => import('./pages/MyWhislist'));
const Cart = lazy(() => import('./pages/Cart'));
const Loginpage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const Sizepage = lazy(() => import('./pages/SizePage'));
const CustomerCare = lazy(() => import('./pages/CustomerCare'));
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
        path: '/products',
        component: Products,
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
        path: '/payment',
        component: Paymentselection,
        exact: true,
    },
    {
        path: '/profile/my-wishlist',
        component: MyWhislist,
        exact: true,
    },
    {
        path: '/bags',
        component: Cart,
        exact: true
    },
    {
        path: '/login',
        component: Loginpage,
        exact: true
    },
    {
        path: '/register',
        component: RegisterPage,
        exact: true
    },
    {
        path: '/sizepage',
        component: Sizepage,
        exact: true
    },
    {
        path: '/CustomerCare',
        component: CustomerCare,
        exact: true
    }
]