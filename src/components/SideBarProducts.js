import React, {useState} from 'react';
import CapaUp from '../assets/icons/CAPA UP.svg';
import range from '../assets/images/range line.svg';

const SideBarProducts = (props) => {
    const [data, setData] = useState({
        min: '',
        max: ''
    })

    const handleChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;

        setData({...data, [name]: value});
    }

    console.log(data);

    return(
        <div id="side-bar">
            <div className="title side-title">Select Price</div>
            <div className="row row-p mb-3">
                <div className="col text-center">
                    <input type="number" name="min" value={data.min} className="form-control select-price" onChange={(e) => handleChange(e)} />
                    <div className="lbl-select-price">Min.</div>
                </div>
                <div className="col">
                    <img src={range} alt="range-icon"/>
                </div>
                <div className="col text-center">
                    <input type="number" name="max" value={data.max} className="form-control select-price" onChange={(e) => handleChange(e)} />
                    <div className="lbl-select-price">Max.</div>
                </div>
                <div className="col">
                    <a href="#" className="btn-set">Set</a>
                </div>
            </div>
            <div className="row align-items-center" id="category" onClick={() => props.toggleClick('category')}>
                <div className="col">
                    <div className="title side-title side-sub-title">All / Women / Dress</div>
                </div>
                <div className="col-auto">
                    {
                        props.category ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                    }
                </div>
            </div>
            <div className="menu" id="menu">
                <a href="#" className="item-menu">ActiveWear</a>
                <a href="#" className="item-menu">Bridal</a>
                <a href="#" className="item-menu">Denim</a>
                <a href="#" className="item-menu">Dresses</a>
                <a href="#" className="item-menu">Intimates</a>
                <a href="#" className="item-menu">Jackets</a>
                <a href="#" className="item-menu">Jumpsuits & Rompers</a>
            </div>
            <div className="row align-items-center" id="size" onClick={() => props.toggleClick('size')}>
                <div className="col">
                    <div className="title side-title">Size</div>
                </div>
                <div className="col-auto">
                    {
                        props.size ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                    }
                </div>
            </div>
            <div className="menu" id="menuSize">
                {
                    props.sizes.map((item, key) => {
                        return(
                            <div className="custom-control custom-checkbox" key={key}>
                                <input type="checkbox" className="custom-control-input" id={`size-${item.id}`} />
                                <label className="custom-control-label item-menu" for={`size-${item.id}`}>{item.size}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row align-items-center" id="color" onClick={() => props.toggleClick('color')}>
                <div className="col">
                    <div className="title side-title">Color</div>
                </div>
                <div className="col-auto">
                    {
                        props.color ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                    }
                </div>
            </div>
            <div className="menu" id="menuColor">
                {
                    props.colors.map((item, key) => {
                        return(
                            <div className="custom-control custom-checkbox" key={key}>
                                <input type="checkbox" className="custom-control-input" id={`color-${item.id}`} />
                                <label className="custom-control-label item-menu" for={`color-${item.id}`}>{item.color}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row align-items-center" id="brand" onClick={() => props.toggleClick('brand')}>
                <div className="col">
                    <div className="title side-title">Brand</div>
                </div>
                <div className="col-auto">
                    {
                        props.brand ? (<img src={CapaUp} className="rotate-icon" alt="capa" />) : (<img src={CapaUp} className="rotate-icon down" alt="capa" />)
                    }
                </div>
            </div>
            <div className="menu mb-4" id="menuBrand">
                {
                    props.brands.map((item, key) => {
                        return(
                            <div className="custom-control custom-checkbox" key={key}>
                                <input type="checkbox" className="custom-control-input" id={`brand-${item.id}`} />
                                <label className="custom-control-label item-menu" for={`brand-${item.id}`}>{item.brand}</label>
                            </div>
                        )
                    })
                }
            </div>
            <div className="hline" />
            <div className="title side-title">Top Deals</div>
            <a href="#" className="top-deals">20% off & under</a>
            <a href="#" className="top-deals">20% off & higher</a>
        </div>
    )
}

export default SideBarProducts;