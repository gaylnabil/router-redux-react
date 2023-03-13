import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { PUBLIC_URL } from '../Constants';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img className="nav-img" src={`${PUBLIC_URL}/logo192.png`} alt="Logo" />
                {/* <a className="navbar-brand" href="/">Navbar</a> */}
                <NavLink to="/" className="navbar-brand" href="/">Navbar</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={`nav-link ${(isActive) => (isActive ?? "active")}`} href="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={`nav-link ${(isActive) => (isActive ?? "active")}`} >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/crypto-details/BTC/12" className={`nav-link ${(isActive) => (isActive ?? "active")}`} >
                                Crypto Details
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/counter" className={`nav-link ${(isActive) => (isActive ?? "active")}`} >
                                Counter With Redux
                            </NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to="/products"
                                className={`nav-link dropdown-toggle ${(isActive) => (isActive ?? "active")}`}
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Products Routers / Redux
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {/* <li><Link to="/product" className="dropdown-item" >Product</Link></li> */}
                                <li><Link to="/product/list" className="dropdown-item">Products</Link></li>
                                <li><Link to="/product/details/22" className="dropdown-item">Product Details</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="/product/create" className="dropdown-item">Create Product</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
