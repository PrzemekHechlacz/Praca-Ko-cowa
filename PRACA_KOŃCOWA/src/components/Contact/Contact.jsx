import React from "react"
import MenuNav from "../MenuNav/MenuNav"
import "./Contact.scss"

const Contact = () => {
    return (
       <>
       <MenuNav /> 
                <div className="contact-div" style={{ position: 'absolute', top: '30rem'}}>
                    <h1 className="contact-h1">Alojzy Fotograf</h1><br/>
                        <h2 className="contact-h2">Lorem Ipsum</h2>
                            <p className="contact-p"  > tel. 666888999 <br/><br/>
                                    e-mail: abc@gmail.com <br/><br/>
                            </p>
                </div>
        </>
    )
}

export default Contact