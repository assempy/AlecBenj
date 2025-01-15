import './style.css';
import twelve_notes from './12notes.jpeg';
import A6 from './A6.jpeg';
import React from 'react';

function Sacrifice_tomorrow_song() {
    const lyrics = [
        "If I could cut these seconds into pieces",
        "I'd find a place for us to hide",
        "In between the twos and threes",
        "If I could stop the hands of time",
        "I would stay with you forever",
        "But I should probably get some sleep",
        "Then I walked over to the dresser",
        "But as I went to grab my keys",
        "She said, \"Let's sacrifice tomorrow for tonight\"",
        "Never mind your obligations, please just stay here by my side",
        "She said, \"Just give in to temptation, it's alright\"",
        "I've got clothes that you can borrow, so let's sacrifice tomorrow",
        "Oh-ooh (yeah)",
        "Oh-ooh, mm",
        "Cut the Earth's crust into pieces",
        "I'd make a beach for you and I",
        "Make this desert a retreat",
        "And we'd never have to say goodbye",
        "I would stay with you forever",
        "But I should probably get some sleep",
        "Then I walked over to the dresser",
        "But as I went to grab my keys",
        "She said, \"Let's sacrifice tomorrow for tonight\"",
        "Never mind your obligations, please just stay here by my side",
        "She said, \"Just give in to temptation, it's alright\"",
        "I've got clothes that you can borrow, so let's sacrifice tomorrow",
        "Oh-ooh (yeah)",
        "Oh-ooh, mm",
        "Yeah, we can sleep all day, so, baby, please don't go",
        "Don't sacrifice tonight, tonight for tomorrow",
        "Yeah, we can sleep all day, so, baby, please don't go",
        "Don't sacrifice tonight, tonight for tomorrow",
        "She said, \"Let's sacrifice tomorrow for tonight\"",
        "Never mind your obligations, please just stay here by my side",
        "She said, \"Just give in to temptation, it's alright\"",
        "I've got clothes that you can borrow, so let's sacrifice tomorrow",
        "Oh-ooh (yeah)",
        "Oh-ooh, mm",
        "Oh-ooh (yeah)",
        "Oh-ooh, mm",
        "Oh-ooh, mm, mm-mm-mm"
    ];

    return (
        <div className="SacrificeTomorrowSong">
            <div style={{ width: 1626, height: 1070 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={twelve_notes}
                        alt=""
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 574,
                            marginTop: 100
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        Sacrifice Tomorrow
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <React.Fragment key={id}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img
                            src={A6}
                            alt=""
                            style={{ width: 544, marginLeft: 250 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sacrifice_tomorrow_song;