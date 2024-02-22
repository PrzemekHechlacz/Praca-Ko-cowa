import React from "react"
import MenuNav from "../MenuNav/MenuNav"
import "./Contact.scss"

const Contact = () => {
    return (
       <>
       <MenuNav /> 
       <div className="contact-div" style={{ position: 'absolute', top: '30rem'}}>
       <h1 className="contact-h1">KONTAKT Z FOTOGRAFEM</h1>
       <br/><br/>
       <h2 className="contact-h2">Kamil Grzyb kgfotografia.pl</h2>
       <br/>
        <p className="contact-p"  >
        ul. Krynicka 17/12
        50-555 Wrocław
        NIP 827-206-80-74    
        <br/><br/>
        tel. 514 544 857
        e-mail: kontakt@kgfotografia.pl
        <br/><br/><br/>
        Wrocław, Legnica, Trzebnica, Oława, Bolesławiec, Świdnica, Brzeg, całe województwo dolnośląskie
        Sieradz, Zduńska Wola, Łódź, Pabianice, Piotrków Trybunalski, Wieluń, Warta, całe województwo łódzkie
        <br/><br/><br/>
        Dojadę też w każde inne miejsce w kraju!
        <br/><br/><br/>
        Ważne! Posiadam uprawnienia do fotografowania uroczystości kościelnych na terenie całej Polski, zaświadczenie wydane zostało przez Kurię Metropolitalną we Wrocławiu.
        </p>
      
            </div>
                    </>
    )
}

export default Contact