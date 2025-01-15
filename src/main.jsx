import './style.css';
import alex from './alex.jpeg';
import twelve_notes from './12notes.jpeg';
import second_wind from './2wind.jpeg';
import { Link } from 'react-router-dom';

function Main() {
    return (
        <div className="Main"> 
            <div style={{width: "1626px", height: "791px"}}>
                <div style={{width: "1626px", height: "245px", display: "flex"}}>
                    <img 
                        src={alex} 
                        alt="picture" 
                        style={{height: "85px", borderRadius: "50%", marginLeft: "453px", marginTop: "100px"}} 
                    />
                    <p style={{marginTop: "115px", marginLeft: "25px", fontSize: "50px"}}>Songs of Alec Benjamin</p>
                </div>
                <div style={{display: "flex", paddingLeft: "37px"}}>
                    <div style={{width: "846px", height: "547px", fontSize: "40px", paddingLeft: "258px", display: "flex", flexDirection: "column"}}>
                        <img src={twelve_notes} style={{height: "400px", width: "400px"}}/>
                        <Link to="/twelve_notes_albom" className="TwelveNotes" style={{marginTop: "20px", marginLeft: "25px"}}>12 Notes</Link>
                    </div>
                    
                    <div style={{width: "780px", height: "547px", fontSize: "40px", display: "flex", flexDirection: "column"}}>
                        <img src={second_wind} style={{height: "400px", width: "400px"}} />
                        <Link to="/these_two_windows_albom" className="These_Two_Windows" style={{marginTop: "20px", marginLeft: "20px"}}>These Two Windows</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;    
