import { Link } from "react-router-dom"

import styles from "./Footer.module.css"
import Logo from "../assets/_iconLogo.png"


function Footer() {
    return (
        <footer>
            <div className={styles._grid}>
                <Link to ={""}>Curiosidades</Link>
                <Link to ={""}>Contato</Link>
                <Link to ={""}>Equipe</Link>
            </div>
            <hr />
            <div className={styles._imgLogo}>
                <img 
                src={Logo} 
                alt="logo" 
                />
            </div>    
            <div className={styles._footer}>
                <p>© 2024</p>
            </div>
        </footer>
    )
}

export default Footer





// ༼ つ ◕_◕ ༽つ By: DerickGS