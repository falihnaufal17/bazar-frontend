import React, {Suspense, lazy} from 'react';
import '../assets/styles/Home.scss';
import bannerimage from '../assets/images/banner-item.png';

const Sliders = lazy(() => import('../components/Sliders'));

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
        <div className="mb-5 container">
            <div className="row">
                <div className="col-6">
                    <div class="jumbotron">
                        <h1 class="display-4">Bazar collection</h1>
                        <p class="lead">let your self be concuered by the elegance of the summer collection of fashion</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Join Now</a>
                    </div>
                </div>
                <div className="col-6">
                    <Sliders>
                        {
                            data.map(item => {
                                return(
                                    <img src={item.image} alt={item.title} />
                                )
                            })
                        }
                    </Sliders>
                </div>
            </div>
        </div>
    )
}

export default Home;