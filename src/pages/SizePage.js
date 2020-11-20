import React, { useState, Suspense, lazy } from 'react';
import '../assets/styles/SizePage.scss';

const SizeItem = lazy(() => import('../components/SizeItem'));

const Sizepage= (props) => {
      const [availableSize, setAvailableSize] = useState([
            {
                  id: 1,
                  size: 36,
                  size_name: 'XXS'
            },
            {
                  id: 2,
                  size: 38,
                  size_name: 'XS'
            },
            {
                  id: 3,
                  size: 40,
                  size_name: 'S'
            },
            {
                  id: 4,
                  size: 42,
                  size_name: 'M'
            },
            {
                  id: 5,
                  size: 44,
                  size_name: 'L'
            },
            {
                  id: 6,
                  size: 46,
                  size_name: 'XL'
            },
            {
                  id: 7,
                  size: 48,
                  size_name: 'XXL'
            },
            {
                  id: 8,
                  size: 50,
                  size_name: 'XXXL'
            },
      ]);

      const [sizes, setSizes] = useState([
            {
                  id: 1,
                  profile_name: "Steven",
                  sizes: [
                        {
                              id: 1,
                              wear: "TOP WEAR",
                              size_min: "S",
                              size_max: "M"
                        },
                        {
                              id: 2,
                              wear: "BOTTOM WEAR",
                              size_min: "XS",
                              size_max: "M"
                        },
                        {
                              id: 3,
                              wear: "UNDERWARE - TOP",
                              size_min: "XS",
                              size_max: "L"
                        },
                  ]
            },
            {
                  id: 2,
                  profile_name: "FALIH NAUFAL",
                  sizes: [
                        {
                              id: 1,
                              wear: "TOP WEAR",
                              size_min: "S",
                              size_max: "M"
                        },
                        {
                              id: 2,
                              wear: "BOTTOM WEAR",
                              size_min: "XS",
                              size_max: "M"
                        },
                        {
                              id: 3,
                              wear: "UNDERWARE - TOP",
                              size_min: "XS",
                              size_max: "L"
                        },
                  ]
            }
      ]);

      const deleteSize = (id, e) => {
            sizes.splice(id, 1);
      }

      return(
            <Suspense fallback={<div />}>
                  <div id="section-SizePage">
                        <div className="box">
                              <div className="dropdown">
                                    <a href="#" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          <h1>MY SIZE</h1>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownProfile">
                                          <a className="dropdown-item" href="/profile/my-size">MY SIZE</a>
                                          <a className="dropdown-item" href="/profile/my-order">MY ORDERS</a>
                                          <a className="dropdown-item" href="/profile/my-wishlist">MY WISHLIST</a>
                                          <a className="dropdown-item" href="/profile/my-profile">MY PROFILE</a>
                                          <a className="dropdown-item" href="/customer-care">CUSTOMER CARE</a>
                                    </div>
                              </div>
                        </div>
                        <div className="container">
                              <div className="card mb-5 card-content">
                                    <div className="form-group">
                                          <label className="label">Profile Name</label>
                                          <input type="text" className="form-control custom-form" placeholder="Valentino Rossi"/>
                                    </div>
                                    <div className="form-group">
                                          <label className="label">Gender </label>
                                          <div className="row">
                                                <div className="col-auto">
                                                      <div className="custom-control custom-radio">
                                                            <input type="radio" id="male" name="gender" value="male" className="custom-control-input" />
                                                            <label className="custom-control-label label" htmlFor="male"> Male</label>
                                                      </div>
                                                </div>
                                                <div className="col-auto">
                                                      <div className="custom-control custom-radio">
                                                            <input type="radio" id="female" name="gender" value="female" className="custom-control-input" />
                                                            <label className="custom-control-label label" htmlFor="female"> Female</label>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form-group">
                                          <div className="row">
                                                <div className="col-12 col-md-4">
                                                      <label className="label">WEAR</label>
                                                      <select className="form-control custom-form" name="wear">
                                                            <option value="top-wear">TOP WEAR</option>
                                                      </select>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="form-group">
                                          <div className="row justify-content-center align-items-center">
                                                {
                                                      availableSize.map((item, key) => {
                                                            return(
                                                                  <div className="col" key={key}>
                                                                        <label className="small font-weight-bold d-block text-center">{item.size_name}</label>
                                                                        <label className="small font-weight-bold d-block text-center">{item.size}</label>
                                                                  </div>
                                                            )
                                                      })
                                                }
                                          </div>
                                    </div>
                                    <div className="text-center">
                                          <button className="btn-save">ADD</button>
                                    </div>
                              </div>
                              <div className="card size-list">
                                    <div className="label text-center font-weight-bold mb-5">YOUR SIZE</div>
                                    {/* SIZE LISTS */}
                                    <div className="row">
                                          {
                                                sizes.map((item, key) => {
                                                      return(
                                                            <div className="col-12 col-md-6" key={key}>
                                                                  <SizeItem profile_name={item.profile_name} sizes={item.sizes} deleteSize={(e) => deleteSize(key, e)} />
                                                            </div>
                                                      )
                                                })
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>
            </Suspense>
      )
}
export default Sizepage;