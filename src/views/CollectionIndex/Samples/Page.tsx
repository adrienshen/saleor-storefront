import React, { useState } from 'react';
import { PageHeader } from "../../../components/Header/PageHeader";

export const Page = (props) => {
  const { data } = props
  const [images, selectedImages] = useState([])
  const [cartCount, addItemIntoCart] = useState(0)

  const handleClick = () => {
    props.history.goBack()
  }

  const selectImage = (e) => {
    if(images.indexOf(e.target.id) > -1){
      const image = images.filter(img => img !== e.target.id)
      selectedImages(image);
    }else{
      selectedImages([...images, e.target.id]);
    }
  }

  const handleOrderSamples = () => {
    addItemIntoCart(images.length)
  }

  return (
    <div className="inner-page-wrapper">
      <PageHeader back={true} cart={true} search={true} itemsCount={cartCount} handleClick={handleClick}/>
      <div>
        <div className="wrapper-header">Samples</div>
        <div className="wrapper-coming-soon wrapper-img">
          { data.products.edges.map((sample, i) =>
            <div className="wrapper-img-main">
              <div className={images ? images.indexOf(sample.node.id) > -1 ? "wrapper-img-main-inner withBorder": "wrapper-img-main-inner noBorder" : ""}>
                <div className="wrapper-img-main-inner--header">
                  <span>{sample.node.name}</span>
                </div>
                <div className="wrapper-img-main-inner--img">
                  <img src={sample.node.thumbnail.url} onClick={selectImage}
                     id={sample.node.id}
                     key={i}
                  />
                </div>
                <div className="wrapper-img-main-inner--price">
                  <span className="old-price"><del>$44.44</del></span>
                  <span className="new-price">$33.33</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <button type="button" className="home-page__btn" onClick={handleOrderSamples}>Order Samples</button>
      </div>
    </div>
  )
}

export default Page