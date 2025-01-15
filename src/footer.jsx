import './style.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import youtube from './youtube.png';
   

function Footer() {
    return (
        <div className="Footer"> 
            <div style={{display: "flex"}}>
                <div style={{paddingLeft: "25px", paddingTop: "25px"}}>
                    <p style={{color: "white", fontSize: "24px", margin: "0"}}>Alecly is the collection of song lyrics of Alec Benjamin</p>
                    <a href="https://www.facebook.com/AlecBenjaminMusic?mibextid=JRoKGi" target="_blank"><img src={facebook} alt="Facebook" /></a>
                    <a href="https://x.com/AlecBenjamin" target="_blank"><img src={twitter} alt="Twitter" /></a>
                    <a href="https://www.instagram.com/alecbenjamin/" target="_blank"><img src={instagram} alt="Instagram" /></a>
                    <a href="https://www.youtube.com/@alecbenjaminmusic" target="_blank"><img src={youtube} alt="YouTube" /></a>
                </div>
                <div style={{width: "1010px"}}>
                    <p style={{color: "gray", fontSize: "24px", textAlign: "right", marginTop: "77px"}}>&copy; 2024 ML Alecly Holdings</p>
                </div>
            </div> 
        </div>    
    );
}
export default Footer;
