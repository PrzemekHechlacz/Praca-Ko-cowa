import React from "react"
import "./AboutMe.scss"
import MenuNav from "../MenuNav/MenuNav"



const AboutMe = ({style}) => {

    
    return (
        <>
       <MenuNav /> 
            <div className="aboutMe-div"  style={{ position: 'absolute', top: '30rem'}}>
                    <p className="aboutMe-p">
        Mam na imię Kamil, fotografią zajmuję się od ponad dziewięciu lat, to moja wielka pasja. Spełniam się podczas wszelkich uroczystości rodzinnych, prywatnych, jak i obsługuję wydarzenia firmowe czy sesje produktowe. Aktualnie mieszkam we Wrocławiu, ale nie jest dla mnie problemem dotarcie w dowolne miejsce w Polsce. Aparat jeździ ze mną w zasadzie wszędzie, a dla dobrego zdjęcia jestem w stanie zrobić baaardzo dużo:)
        Jestem spełnionym mężem i tatą, a najważniejszymi wartościami w moim życiu są rodzina, przyjaciele i realizacja siebie. Spoglądając przez wizjer aparatu mam szansę zobaczyć rzeczywistość trochę inaczej, chwytając te niepowtarzalne chwile, czy dostrzegając najlepsze cechy danego produktu czy usługi. I właśnie dlatego kocham to robić, patrzeć na świat kadrem i zatrzymywać go dla Was na zawsze.Kamil Grzyb
                    </p>
            </div>
         </>
    )
}

export default AboutMe