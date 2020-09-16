import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

export default function Product() {

    return (
        <div>
     <h1>Products</h1>
 <Outlet/>
        </div>
    )
}
