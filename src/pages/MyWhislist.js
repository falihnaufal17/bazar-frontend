import React, {Suspense, lazy} from 'react';

import '../assets/styles/Wishlist.scss';
import Love from '../assets/icons/FAVOURITE PAGE.png';
import imgProduct from '../assets/images/adidas-originals-black-3-stripes-t-shirt 1.svg';
const ProductItem = lazy(() => import('../components/ProductItem'));

const MyWhislist = (props) => {
  
  const dataProduct = [
    {
        id: 1,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 2,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 3,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 4,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 5,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 6,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 7,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
    {
        id: 8,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        isFavorite: true,
        stock: 1
    },
  ];

  const soldOut = [
    {
        id: 1,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        stock: 0
    },
    {
        id: 2,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        stock: 0
    },
    {
        id: 3,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        stock: 0
    },
    {
        id: 4,
        category: 'Dress',
        product_name: 'Alexander McQueen',
        price: 635,
        image: imgProduct,
        color: [
            {
                id: 1,
                color: '#000'
            },
            {
                id: 2,
                color: '#D7D7D7'
            },
            {
                id: 3,
                color: '#9FD668'
            }
        ],
        stock: 0
    },
  ]

  return (
    <Suspense fallback={<div/>}>
      <div id="section-wishlist">
        <div className="box">
          <div className="dropdown">
            <a href="#" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <h1>MY WISHLIST</h1>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownProfile">
              <a className="dropdown-item" href="#">MY ORDERS</a>
              <a className="dropdown-item" href="/profile/my-wishlist">MY WISHLIST</a>
              <a className="dropdown-item" href="/profile/my-profile">MY PROFILE</a>
              <a className="dropdown-item" href="#">CUSTOMER CARE</a>
            </div>
          </div>
        </div>
        <div className="container">
          {
            dataProduct.length > 0
            ?
            (
              <div>
                <div className="row mb-3">
                  <div className="col-12 col-md-12 col-lg">
                    <div className="title">Wishlist</div>
                  </div>
                  <div className="col-6 col-md-auto">
                      <div className="row align-items-center row-p">
                          <div className="col">
                              <lable className="title subtitle">Brands</lable>
                          </div>
                          <div className="col">
                              <select className="form-control select">
                                  <option>Tory Burch</option>
                              </select>
                          </div>
                      </div>
                  </div>
                  <div className="col-6 col-md-auto">
                      <div className="row align-items-center row-p">
                          <div className="col">
                              <lable className="title subtitle">Short By</lable>
                          </div>
                          <div className="col">
                              <select className="form-control select">
                                  <option>Price low - high</option>
                              </select>
                          </div>
                      </div>
                  </div>
                </div>
                <div className="row">
                  {
                    dataProduct.map((data, index) => {
                      return(
                        <div className="col-6 col-md-4 col-lg-3 position-relative" key={index}>
                          <ProductItem data={data} />
                        </div>
                      )
                    })
                  }
                </div>
                <div className="hline mb-5" />
                <div className="title subtitle text-center mb-5">PRODUCT SOLD OUT</div>
                <div className="row">
                  {
                    soldOut.map((data, index) => {
                      return(
                        <div className="col-6 col-md-4 col-lg-3 position-relative" key={index}>
                          <ProductItem data={data} />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            ) : (
              <div className="text-center">
                <img src={Love} alt="LOVE" className="mb-3" />
                <div className="title subtitle">YOUR WHISLIST IS STILL EMPTY</div>
                <div className="title subtitle font-weight-normal mb-5">Let's change that right away by clicking on the heart icon to save your favorite items! This way you can always be up to date on their availability, be notified when they are about to sell out and add them directly to your Shopping Bag.</div>
                <a href="/" className="btn-primary">BACK TO SHOPPING</a>
              </div>
            )
          }
        </div>
      </div>
    </Suspense>   
  )
}  
 export default MyWhislist;