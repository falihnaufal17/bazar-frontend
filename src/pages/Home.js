import React, {Suspense, lazy} from 'react';
import '../assets/styles/Home.scss';
import bannerimage from '../assets/images/banner-item.png';
import joinIcon from '../assets/icons/JOIN.svg';
import SECTION1 from '../assets/images/SECTION 1.png';
import SECTION2 from '../assets/images/SECTION 2.png';
import SECTION3 from '../assets/images/SECTION 3.png';
import SECTION4 from '../assets/images/SECTION 4.png';

const Sliders = lazy(() => import('../components/Sliders'));
const PopularCategory = lazy(() => import('../components/PopularCategory'));
const Brands = lazy(() => import('../components/Brands'));

const Home = (props) => {
    const data = [
        {
            id: 1,
            title: 'banner 1',
            image: bannerimage
        },
        {
            id: 2,
            title: 'banner 2',
            image: bannerimage
        },
        {
            id: 3,
            title: 'banner 3',
            image: bannerimage
        }
    ]
    const dataBanner = [
        {
            id: 1,
            text: 'Bazar Your gateway to all things fashion',
            image: SECTION1
        },
        {
            id: 2,
            text: 'Bazar The next Big things',
            image: SECTION2
        },
        {
            id: 3,
            text: 'Bazar Your gateway to all things fashion',
            image: SECTION3
        },
        {
            id: 1,
            text: 'Bazar The next Big things',
            image: SECTION4
        },
    ]
    return(
        <div>
            <section id="section-banner">
                <div id="carouselExampleCaptions" data-pause="false" data-interval="6000" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {
                            dataBanner.map((data, index) => {
                                let itemClass = '';
                                if(index === 0) itemClass = ' active';
                                return(
                                <li data-target="#carouselExampleCaptions" data-slide-to={index} className={itemClass}>0{index+1}</li>
                                )
                            })
                        }
                    </ol>
                    <div className="carousel-inner">
                        {
                            dataBanner.map((data, index) => {
                                let itemClass = 'carousel-item';
                                if(index === 0) itemClass = itemClass + ' active';
                                return (
                                    <div className={itemClass} key={index}>
                                        <img src={data.image} className="d-block w-100" alt={data.text} />
                                        <div className="carousel-caption d-none d-md-block text-left">
                                            <div className="row align-items-center">
                                                <div className="col-12 col-md-6 col-lg-5 order-2 order-md-1">
                                                    <h5>{data.text}</h5>
                                                    <a className="btn btn-primary btn-lg" href="#">Join Now <img src={joinIcon} alt="join-icon" /></a>
                                                </div>
                                                <div className="col col-md-6 col-lg-7 order-1 order-md-2">
                                                    {/* <Sliders>
                                                        {
                                                            data.map((item, key) => {
                                                                return(
                                                                    <div key={key}>
                                                                        <img src={item.image} className="d-block w-100" alt={item.title} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </Sliders> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section id="section-popular-category">
                <h2>Trending Now</h2>
                <PopularCategory />
            </section>
            <section id="section-discover">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="position-relative">
                                <h2>Discover</h2>
                                <div className="line-discover"></div>
                            </div>
                            <p>Browse thousands of curated, real-time U.S.-sold fashion brands across multiple categories</p>
                            <p>Add products to your wishlist to track promotions and receive notifications</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="position-relative">
                                <h2>Shop</h2>
                                <div className="line-shop"></div>
                            </div>
                            <p>Add products to your cart when ready and complete your purchase</p>
                            <p>Pay with your local credit/debit card. You don’t need an international bank account for this!</p>
                            <p>And YES! We will handle shipping, taxes, & duties for you because you don’t have to.</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="position-relative">
                                <h2>Love & Repeat</h2>
                                <div className="line-love"></div>
                            </div>
                            <p>Enjoy your new look!</p>
                            <p>Be on the lookout for new arrivals</p>
                            <p>Spread the word about Bazar to your family, friends, and loved ones.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-popular-category">
                <div>
                    <h2>In Vogue</h2>
                    <PopularCategory isDark={true} />
                </div>
            </section>
            <section id="brands">
                <div className="container">
                    <h2>Brands We Love</h2>
                    <Brands />
                </div>
            </section>
        </div>
    )
}

export default Home;