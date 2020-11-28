import React from 'react';

const ProductDetailPlaceholder = (props) => {
    let product = {
        images: [
            {
                image_id: 1,
                path: "https://via.placeholder.com/50",
                type: 'Lorem'
            },
            {
                image_id: 2,
                path: "https://via.placeholder.com/50",
                type: 'Lorem'
            },
            {
                image_id: 3,
                path: "https://via.placeholder.com/50",
                type: 'Lorem'
            }
        ],
        title: 'Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet',
        sizes: [
            {
                size: 'Yellow',
                price: 79.99
            }
        ],
        description: "<ul><li class=cu>With an adjustable ankle strap and single vamp strap, the Sam Edelman® Patti sandals are a sexy shoe choice that'll take an outfit from ho-hum to va-va-voom.</li><li class=fu>SKU: #<!-- -->8674246</li><li>Heeled sandal is available in a variety of leather, suede, man-made, and textile uppers. </li><li>Fit technology features a padded sock to boost comfort.</li><li>Synthetic insole. </li><li>Wrapped stem heel.</li><li>Leather or man-made outsole.</li><li>Imported.</li><li>Product measurements were taken using size 6, width M. Please note that measurements may vary by size.</li><li>Weight of footwear is based on a single item, not a pair.</li><li>Measurements:<ul>    <li> Heel Height: 3 in</li>    <li> Weight: 4 oz</li>    </ul></li></ul>"
    }

    let activeClass = "cp-placeholder transparent";
    if(props.isLoading){
        activeClass = activeClass + " active"
    }

    return(
        <div className={"container " + activeClass}>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-md-10">
                            {
                                product.images.map((item, index) => {
                                    return (
                                        <div className="image obj-el">
                                            <img src={item.path} id={item.image_id} alt={`item-${item.image_id}`} type="button" data-toggle="modal" data-target="#exampleModal" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="col-12 col-md-2">
                            {
                                product.images.map((item, index) => {
                                    return (
                                        <div className="image obj-el">
                                            <img src={item.path} id={item.image_id} alt={`item-${item.image_id}`} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <h1 className="product-name"><span className="obj-el">{product.title}</span></h1>
                    <h2 className="price"><span className="obj-el">$ {product.sizes[0].price}</span></h2>
                    <div className="form-group">
                        <label className="label"><span className="obj-el">Color</span></label>
                        <div className="flex-container">
                            {
                                product.images.map((d, i) => {
                                    return (
                                        <div className="flex-items color" key={i}>
                                            <div className="item-color obj-el" style={{ backgroundColor: d.type }} />
                                            <label className="label text-center"><span className="obj-el">{d.type}</span></label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md">
                            <div className="form-group">
                                <label className="label"><span className="obj-el">Size</span></label>
                                <div className="input-group">
                                    <select className="form-control select obj-el" name="size">
                                        {
                                            product.sizes.map((d, i) => {
                                                return (
                                                    <option value={d.size}>{d.size}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label className="label"><span className="obj-el">About The Brand</span></label>
                    <p className="description obj-el" dangerouslySetInnerHTML={{__html: product.description}} />
                    <div className="row row-p">
                        <div className="col col-md-auto obj-el">
                            <a href="#" data-target="#addToCart" data-toggle="modal" className="btn-primary"><span className="obj-el">ADD TO CART</span></a>
                        </div>
                        <div className="col-auto obj-el">
                            <a href="#" className="btn-secondary"><span className="obj-el">FAVOURITE</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPlaceholder;