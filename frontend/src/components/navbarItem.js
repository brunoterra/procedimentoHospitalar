import React from 'react'

function NavBarItem(props) {
    
    return (
        <div>
            <li className="nav-item">
                <a className="nav-link" href={props.href}>{props.label}</a>
            </li>
        </div>
    )
    
}

export default NavBarItem
