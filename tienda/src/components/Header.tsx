import React from "react"
import "./Header.css"
import {Filters} from "./Filters.js"
import { CartIcon } from "./Icons.js"
export function Header () {
    return (
        <header className="headerShop">
            <h1>Super tienda <CartIcon /></h1>
            <Filters />
        </header>
    )
}
