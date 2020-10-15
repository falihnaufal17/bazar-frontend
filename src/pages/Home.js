import React, {Suspense, lazy} from 'react';
import '../assets/styles/Home.scss';
import bannerimage from '../assets/images/banner-item.png';
import joinIcon from '../assets/icons/JOIN.svg';

const Sliders = lazy(() => import('../components/Sliders'));
const PopularCategory = lazy(() => import('../components/PopularCategory'));

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
    return(
        <div>
            <section id="section-jumbotron" className="mb-5">
                <div className="container">
                        <div className="row align-items-center">
                            <div className="col col-md-6 col-lg-5 order-2 order-md-1">
                                <div class="jumbotron">
                                    <h1 class="display-4">Bazar collection</h1>
                                    <p class="lead">let your self be concuered by the elegance of the summer collection of fashion</p>
                                    <a class="btn btn-primary btn-lg" href="#" role="button">Join Now <img src={joinIcon} alt="join-icon" /></a>
                                </div>
                            </div>
                            <div className="col col-md-6 col-lg-7 order-1 order-md-2">
                                <Sliders>
                                    {
                                        data.map((item, key) => {
                                            return(
                                                <div key={key}>
                                                    <img src={item.image} className="d-block w-100" alt={item.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </Sliders>
                            </div>
                        </div>
                </div>
            </section>
            <section className="container">
                <h2>Popular Category</h2>
                <PopularCategory />
            </section>
            <section className="bg-dark">
                <div className="container">
                    <h2 className="text-white">Popular Category</h2>
                    <PopularCategory />
                </div>
            </section>
        </div>
    )
}

export default Home;