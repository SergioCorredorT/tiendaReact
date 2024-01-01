import React from "react"
import "./Footer.css"
import { useFilters } from "../hooks/useFilters"
export function Footer () {
    const {filters} = useFilters()
    return (
        <footer className="footerShop">
            {
                JSON.stringify(filters,null,2)
            }
            <h4>Prueba</h4>
            <span>Sergio</span>
            <h5>Tienda react</h5>
        </footer>
    )
}
