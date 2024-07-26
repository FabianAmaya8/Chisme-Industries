import "./../CSS/normal.css"
import unjugador from "./../img/un jugador.webp"
import dosjugadores from "./../img/Dos jugadores.webp"
import cincojugadores from "./../img/Cinco jugadores.webp"


export function Normal(){
    return(
        <div className="publi">
            <div className="publi_item">
                <div className="publi_img">
                    <img src= {unjugador} alt="un jugador" />
                </div>
                <h1>un jugador</h1>
                <p>Por Persona Hierro / Bronce - $5.000 Plata - $10.000 Oro - $15.000 </p>
                <p>
                    Premio 1er Lugar Hierro / Bronce - $24.000 Plata - $48.000 Oro - $72.000
                </p>
                <p>
                    Premio 2do Lugar Hierro / Bronce - $8.000 Plata - $16.000 Oro - $24.000
                </p>
            </div>
            <div className="publi_item">
                <div className="publi_img">
                    <img src={dosjugadores} alt="Dos jugadores" />
                </div>
                <h1>dos jugadores</h1>
                <p>Por Duo Hierro / Bronce - $10.000 Plata - $20.000 Oro - $30.000 </p>
                <p>
                    Premio 1er Lugar Hierro / Bronce - $48.000 Plata - $96.000 Oro - $144.000
                </p>
                <p>
                    Premio 2do Lugar Hierro / Bronce - $16.000 Plata - $32.000 Oro - $48.0000
                </p>
            </div>
            <div className="publi_item">
                <div className="publi_img">
                    <img src={cincojugadores} alt="Cinco jugadores" />
                </div>
                <h1>Cinco jugadores</h1>
                <p>
                    Por Equipo Hierro / Bronce - $25.000 Plata - $50.000 Oro - $75.000
                </p>
                <p>
                    Premio 1er Lugar Hierro / Bronce - $120.000 Plata - $240.000 Oro - $360.000
                </p>
                <p>
                    Premio 2do Lugar Hierro / Bronce - $40.000 Plata - $80.000 Oro - $120.000
                </p>
            </div>
        </div>
    )
}