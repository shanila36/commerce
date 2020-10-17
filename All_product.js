import React from 'react'
import Product from "./Product";
import './All_Product_page.css'
import {useStateValue} from "./StateProvider";

function All_product() {
    const [{basket}, dispatch] = useStateValue();
    return (
        
        <div className="home">
      <div className="home__container">
          <div className='ad_space'></div>
       
        <div className="home__row">
          <Product
            id="0001"
            title="Khaki Zip Neck Fleece"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75" 
            rating={1}
            
          />
          <Product
            id="0002"
            title="
            Brushed Flannel Check Long Sleeve Shirt"
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F265210.jpg?alt=media&token=0265a3cf-4c06-4bee-a32d-ed8c0f56a35b"
            rating={1}
          />
          <Product
            id="0003"
            title="Brown Faux Shearling Flight Jacket"
            price={375}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F291558.jpg?alt=media&token=c4db1e73-f7b0-4ccd-974b-9a56a1c02831"
            rating={1}
          />
          <Product
            id="0004"
            title="Check Cosy Cuffed Pyjama Set"
            price={2500}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F583408.jpg?alt=media&token=66558eb9-baaf-4b99-88ce-7609ba8dbe9d"
            rating={5}
          />
          <Product
            id="0005"
            title="Smart Dark Blue Straight Fit Jeans"
            price={1400}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F648732.jpg?alt=media&token=d15e452e-38b0-4719-96a5-e124b449c530"
            rating={4}
          />
          
        </div>
        
        <div className="home__row">
        <Product
            id="0006"
            title="Navy Matching Family Mens"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F820153.jpg?alt=media&token=561fcb2c-ab5b-4612-8cec-0c07a50a3e68"
            rating={4}
          />
          <Product
            id="0007"
            title="Navy Borg Lined Dressing Gown"
            price={72000}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F947688.jpg?alt=media&token=c9c5554b-a7e6-44ae-8192-9b26c76d19dc"
            rating={4}
          />
          <Product
            id="0008"
            title="Navy Chest Stripe Pyjama Set"
            price={150}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F953225.jpg?alt=media&token=60f75a78-821f-4875-aa1d-87e6f0a09c27"
            rating={4}
          />
          <Product
            id="0009"
            title="Charcoal Cable Knit Jumper"
            price={250}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F990630.jpg?alt=media&token=7f9fe847-5d48-497c-a3a6-6ff90b468658"
            rating={4}
          />
          <Product
            id="0001"
            title="Animal Dolman V-Neck Jumper"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F854461.jpg?alt=media&token=4132c6f1-6868-4e91-bcae-c09dadece319"
            rating={5}
          />
        </div>
        <div className="home__row">
        <Product
            id="0002"
            title="
            Dark Blue Power Stretch Denim "
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F228058.jpg?alt=media&token=64a8b160-bb3d-476f-bef7-acde4fe80ee7"
            rating={5}
          />
          <Product
            id="0003"
            title="Grey Gem Button Shoulder Jumper"
            price={375}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F847874.jpg?alt=media&token=05979a94-9f29-4cf2-82b0-e68f72d9fa01"
            rating={5}
          />
          <Product
            id="0004"
            title="Navy/Yellow Geometric Print Tie Neck"
            price={2500}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F952535.jpg?alt=media&token=7bfd6269-9cee-47a7-86d4-0198785034cc"
            rating={5}
          />
          <Product
            id="0005"
            title="Mid Blue Puff Sleeve Denim Shirt"
            price={1400}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F788378.jpg?alt=media&token=3f6e4225-59cb-42b3-8651-2b186e278cb7"
            rating={4}
          />
          <Product
            id="0006"
            title="Pink Neppy Ruffle Neck Jumper"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F397182.jpg?alt=media&token=8a7fb059-f3d0-4870-ae3c-f144745ac070"
            rating={4}
          />
        </div>
        <div className="home__row">
        <Product
            id="0007"
            title="Black Floral Flippy Dress"
            price={72000}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F316829.jpg?alt=media&token=31ae75ec-80a6-49c8-808a-df106eaf2908"
            rating={4}
          />
          <Product
            id="0008"
            title="Berry Woven Hem Jumper"
            price={150}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F279076.jpg?alt=media&token=6df4b717-407b-4da8-928a-3cf42ae7846b"
            rating={4}
          />
          <Product
            id="0009"
            title="Sky Blue Forever Soft Boot Cut Jeans"
            price={250}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/womens%20cloth-%20new%20in%2F203430.jpg?alt=media&token=eb126e67-a970-4af1-ad5b-5583deec086f"
            rating={4}
          />
          
        </div>
      </div>
      
      <div className="home__container_mobile">
          <div className='ad_space'></div>
       
        <div className="home__row">
        <Product
            id="0001"
            title="Khaki Zip Neck Fleece"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F227498.jpg?alt=media&token=27458e87-2379-41ee-86f3-e5973b6aba75" 
            rating={1}
          />
          <Product
            id="0002"
            title="
            Brushed Flannel Check Long Sleeve Shirt"
            price={300}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F265210.jpg?alt=media&token=0265a3cf-4c06-4bee-a32d-ed8c0f56a35b"
            rating={5}
          />
          
        </div>
        <div className="home__row">
        <Product
            id="0003"
            title="Brown Faux Shearling Flight Jacket"
            price={375}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F291558.jpg?alt=media&token=c4db1e73-f7b0-4ccd-974b-9a56a1c02831"
            rating={5}
          />
          <Product
            id="0004"
            title="Check Cosy Cuffed Pyjama Set"
            price={2500}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F583408.jpg?alt=media&token=66558eb9-baaf-4b99-88ce-7609ba8dbe9d"
            rating={5}
          />
          
        </div>
        <div className="home__row">
        <Product
            id="0005"
            title="Smart Dark Blue Straight Fit Jeans"
            price={1400}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F648732.jpg?alt=media&token=d15e452e-38b0-4719-96a5-e124b449c530"
            rating={4}
          />
          <Product
            id="0006"
            title="Navy Matching Family Mens"
            price={450}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F820153.jpg?alt=media&token=561fcb2c-ab5b-4612-8cec-0c07a50a3e68"
            rating={4}
          />
          
         
        </div>
        <div className="home__row">
        <Product
            id="0007"
            title="Navy Borg Lined Dressing Gown"
            price={72000}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F947688.jpg?alt=media&token=c9c5554b-a7e6-44ae-8192-9b26c76d19dc"
            rating={4}
          />
          <Product
            id="0008"
            title="Navy Chest Stripe Pyjama Set"
            price={150}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F953225.jpg?alt=media&token=60f75a78-821f-4875-aa1d-87e6f0a09c27"
            rating={4}
          />
        
        </div>
        <Product
            id="0009"
            title="Charcoal Cable Knit Jumper"
            price={250}
            image="https://firebasestorage.googleapis.com/v0/b/iflexmart.appspot.com/o/mens%20cloth-%20new%20in%2F990630.jpg?alt=media&token=7f9fe847-5d48-497c-a3a6-6ff90b468658"
            rating={4}
          />
        <div className="home__row">
      </div>
      </div>
      
    </div>
    )
}

export default All_product
