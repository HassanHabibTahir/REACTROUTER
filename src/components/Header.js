import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <Link  to="/">HOME</Link>{"  "}
            <Link to="product">Prdouct</Link>
        </div>
    )
}
