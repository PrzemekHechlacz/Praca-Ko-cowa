import React from "react"
import MenuNav from "../MenuNav/MenuNav"
import "./Contact.scss"

const Contact = () => {
    return (
       <>
       <MenuNav /> 
<div className="contact-div" style={{ position: 'absolute', top: '30rem'}}>
       <h1 className="contact-h1">KONTAKT Z FOTOGRAFEM</h1>
                <br/>
       <h2 className="contact-h2">Kamil Grzyb kgfotografia.pl</h2>
       <p className="contact-p"  >
        tel. 514 544 857
        <br/><br/>
        e-mail: kontakt@kgfotografia.pl
        <br/><br/>
            </p>
</div>
        </>
    )
}

export default Contact