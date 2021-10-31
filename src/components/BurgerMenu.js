import { List, XLg } from "react-bootstrap-icons"
import { useState } from 'react'
import { Modal, ListGroup } from 'react-bootstrap'

export default function BurgerMenu(props)
{
    const [showBurgermenu, setShowBurgermenu] = useState(true)

    function toggleMenu(event)
    {
        setShowBurgermenu(!showBurgermenu)
    }

    return (
        <div className="mt-2 burgermenu float-end" >

            {showBurgermenu ? <List size={32} onClick={toggleMenu} className={showBurgermenu} /> : <XLg size={28} onClick={toggleMenu} />}


        </div >
    );
}