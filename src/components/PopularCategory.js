import React from 'react';
import Gambar from '../assets/images/category-1.svg';
import ArrowUp from '../assets/icons/ARROW UP.svg';
import ArrowUpBlack from '../assets/icons/ARROW UP BLACK.svg';

const PopularCategory = (props) => {
    return(
        <div>
            <div className={props.isDark ? "row vertical-xs scroll-white" : "row vertical-xs"}>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
                <a href="#" className="position-relative">
                    <img src={Gambar} alt="Gambar" className="d-block w-100"/>
                    <div className={props.isDark ? "category d-flex align-items-center category-white" : "category d-flex align-items-center"}>
                        <div>Category <br></br>Product</div> 
                        <div className="ml-3"><img src={props.isDark ? ArrowUpBlack : ArrowUp} alt="arrow up" /></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default PopularCategory;