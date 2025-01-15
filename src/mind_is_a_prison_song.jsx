import './style.css';
import two_wind from './2wind.jpeg';
import B1 from './B1.jpeg';
import React from 'react';

function Mind_is_a_prison_song() {
    const lyrics = [
        "I dont live in California",
        "I'll inform you, that's not where I reside",
        "I'm just a tenant paying rent inside this body and I",
        "Got 2 windows and those windows well",
        "I'll call them my eyes",
        "I'm just going where the wind blows",
        "I dont get to decide",
        "Sometimes I think too much",
        "Ya I get so caught up",
        "I'm always stuck in my head",
        "I wish I could escape",
        "I tried to yesterday",
        "Took all the sheets off my bed",
        "Then I tied up my linen with 5 strips of ribbon I found",
        "Scalled the side of the building",
        "I ran to the hills till they found me",
        "And they put me, back in my cell",
        "All by myself, alone with my thoughts again",
        "I guess my mind is a prison and I'm never gonna get out",
        "So they tranquilized me, analyzed me",
        "Threw me back in my cage",
        "Then they tied me to an I'v told me I was insane",
        "I'm a prisoner, a visitor",
        "Inside of my brain",
        "And no mather what I do they try to keep me in chains",
        "Sometimes I think too much",
        "Ya I get so caught up",
        "I'm always stuck in my head",
        "I wish I could escape",
        "I tried to yesterday",
        "Took all the sheets off my bed",
        "Then I tied up my linen with 5 strips of ribbon I found",
        "Scalled the side of the building",
        "I ran to the hills till they found me",
        "And they put me, back in my cell",
        "All by myself, alone with my thoughts again",
        "I guess my mind is a prison and I'm never gonna get out",
        "Said even if It's true",
        "No matter what I do",
        "I'm never gonna escape",
        "I wont give up on hope",
        "Secure another rope",
        "And try for another day",
        "Said even if It's true",
        "No matter what I do",
        "I'm never gonna escape",
        "I wont give up on hope",
        "Secure another rope",
        "And try for another day",
        "Then I tied up my linen with 5 strips of ribbon I found",
        "Scalled the side of the building",
        "I ran to the hills till they found me",
        "And they put me, back in my cell",
        "All by myself, alone with my thoughts again",
        "I guess my mind is a prison and I'm never gonna get out"
    ];

    return (
        <div className="MindIsAPrison">
            <div style={{ width: 1626, height: 1400 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={two_wind}
                        alt=""
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 500,
                            marginTop: 100
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        Mind Is A Prison
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <span key={id}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img src={B1} alt="" style={{ width: 736, marginLeft: 155 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mind_is_a_prison_song;        