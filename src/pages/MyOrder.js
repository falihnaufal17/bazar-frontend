import React, {useState} from 'react';
import kardus from '../assets/icons/KARDUS.svg';
import '../assets/styles/MyOrders.scss';
import $ from 'jquery';
import HISTORYORDER from '../assets/images/HISTORY ORDER.png';

const Myorder= (props) => {
  const [dataOrders, setDataOrders] = useState([
    {
      id: 1,
      order_date: '11/20/2020',
      transaction_code: '2011B16FF20765',
      order_status: 'COMPLETED',
      items: [HISTORYORDER, HISTORYORDER]
    },
    {
      id: 2,
      order_date: '11/20/2020',
      transaction_code: '2011B16FF20765',
      order_status: 'COMPLETED',
      items: [HISTORYORDER, HISTORYORDER]
    },
  ]);

  const handleSelect = (ranges) => {
    console.log(ranges)
  }
  
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  let mainComponent = (<div/>);
  if(dataOrders.length > 0){
    mainComponent = (
      <div className="container">
        <div className="row justify-content-between mb-4">
          <div className="col-6"></div>
          <div className="col-auto">
            <div className="card filter-date">
              <div className="row align-items-center">
                <div className="col">
                  <span>Transactions Date:</span>
                </div>
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto">
                      <input type="date" name="date_start" />
                    </div>
                    <div className="col-auto">
                      <input type="date" name="date_end" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-content">
          {
            dataOrders.map((item, key) => {
              return(
                <div className="order-list">
                  <div className="row">
                    <div className="col-auto">
                      <div className="row">
                        {
                          item.items.map((d, i) => {
                            return(
                              <div className="col-auto">
                                <div className="position-relative">
                                  <img src={d} alt="image" />
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div className="col d-flex flex-column justify-content-between">
                      <div />
                      <div>
                        <div className="title">ORDER STATUS</div>
                        <div className="title font-weight-normal">{item.order_status}</div>
                      </div>
                    </div>
                    <div className="col-auto vline">
                      <div />
                      <div className="title">ORDER DATE</div>
                      <div className="title font-weight-normal mb-3">{item.order_date}</div>
                      <div className="title">TRANSACTION CODE</div>
                      <div className="title font-weight-normal">{item.transaction_code}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }else{
    mainComponent = (
      <div className="text-center">
        <img src={kardus} alt="kardus" />
        <div className="subtitle mb-4">THERE ARE NOT ORDER YET</div>
        <div className="label mb-4">Get inspired by our selections and discover the unmissable promotions created just for you. And if you change your mind,dont worry.You can always use our easy returns</div>
        <a href="/" className="btn-primary">BACK TO SHOPPING</a>
      </div>
    )
  }
  
  return(
    <div id="section-order">
      <div className="box">
        <div className="dropdown">
          <a href="#" id="dropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <h1>MY ORDERS</h1>
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownProfile">
            <a className="dropdown-item" href="/profile/my-size">MY SIZE</a>
            <a class="dropdown-item" href="/profile/my-order">MY ORDERS</a>
            <a class="dropdown-item" href="/profile/my-wishlist">MY WISHLIST</a>
            <a class="dropdown-item" href="/profile/my-profile">MY PROFILE</a>
            <a class="dropdown-item" href="/customer-care">CUSTOMER CARE</a>
          </div>
        </div>
      </div>
      {mainComponent}
    </div>
  )
}
export default Myorder;