import React from 'react';
import RULER from '../assets/icons/RULER.svg';
import Delete from '../assets/icons/DELETE.svg';

const SizeItem = (props) => {
    return(
        <div className="card card-list mb-3">
            <a href="#" className="delete" onClick={() => props.deleteSize()}>
                <img src={Delete} alt="delete"/>
            </a>
            <div className="row mb-3">
                <div className="col">
                    <label className="label font-weight-bold text-uppercase">{props.profile_name}</label>
                </div>
                <div className="col-auto">
                    <img src={RULER} alt="RULER"/>
                </div>
            </div>
            <div className="hline mb-3"></div>
            {
                props.sizes.map((item, key)=>{
                    return(
                        <div className="row" key={key}>
                            <div className="col">
                                <div className="text-item">{item.wear}</div>
                            </div>
                            <div className="col-auto">
                                <div className="text-item">{item.size_min} - {item.size_max}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SizeItem;