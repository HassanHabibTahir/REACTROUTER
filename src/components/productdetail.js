import React from 'react'
import { useParams } from 'react-router-dom';

export default function Productdetail() {


    const shoes = {
        "air-jordan-3-valor-blue": {
            name: "VALOUR BLUE",
            img: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "jordan-mars-270-london": {
            name: "JORDAN MARS 270 LONDON",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        },
        "air-jordan-1-zoom-racer-blue": {
            name: "RACER BLUE",
            img:
                "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
        }
    };
    const {productId} = useParams();
console.log(productId)
    const product = shoes[productId]
    const {name,img} = product
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} />
        </div>
    )
}