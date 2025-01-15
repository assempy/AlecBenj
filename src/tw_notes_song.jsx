import './style.css';
import twelve_notes from './12notes.jpeg';
import A1a from './A1a.jpeg';
import A1b from './A1b.jpeg';
import React from 'react';

function Tw_notes_song() {
    const lyrics = [
        "[Verse 1]",
        "Read an article about particles while sitting at the",
        "How several dozen elements from several dozen stars",
        "Made several combinations and that made us who we are",
        "What starts out small and simple may become a work of art",
        "So, baby, I went home to play these notes on my guitar",
        "I sat down at the keys and tried to speak straight from my heart",
        "Started small and simple, tried to make a work of art for you",
        "",
        "[Chorus]",
        "And after having sat there with my eyes closed",
        "All night at my piano",
        "I've come to find that twelve notes",
        "Twelve is not enough to tell you",
        "Just how much I love you, baby",
        "Twelve is not enough for you",
        "Now I know",
        "No matter how far I go",
        "I've come to find that twelve notes",
        "Twelve is not enough to tell you",
        "Just how much I love you, baby",
        "Twelve is not enough for you",
        "Twelve is not enough, no, baby",
        "Twelve is not enough for you",
        "",
        "[Verse 2]",
        "I wrote an article that particles are not the centerpiece",
        "That the center of my universe is you and now I see",
        "That's why it's been so hard for me to write a melody",
        "Why everything I sing for you just never feels complete",
        "It never feels complete",
        "",
        "[Bridge]",
        "And I swear I'd do it",
        "If it could be done",
        "But you're more than music",
        "You're the only one",
        "",
        "[Chorus]",
        "After having sat there with my eyes closed",
        "All night at my piano",
        "I've come to find that twelve notes",
        "Twelve is not enough to tell you",
        "Just how much I love you, baby",
        "Twelve is not enough for you",
        "Now I know",
        "No matter how far I go",
        "I've come to find that twelve notes",
        "Twelve is not enough to tell you",
        "Just how much I love you, baby",
        "Twelve is not enough for you",
        "Twelve is not enough, no, baby",
        "Twelve is not enough for you",
    ];

    return (
        <div className="TwelveNotesSong">
            <div style={{ width: "1626px", height: "1600px" }}>
                <div style={{ width: "1626px", height: "245px", display: "flex" }}>
                    <img 
                        src={twelve_notes} 
                        alt="Twelve Notes" 
                        style={{
                            height: "85px",
                            borderRadius: "50%",
                            marginLeft: "574px",
                            marginTop: "100px"
                        }} 
                    />
                    <p 
                        style={{
                            marginTop: "115px", 
                            marginLeft: "25px", 
                            fontSize: "50px"
                        }}
                    >
                        12 Notes
                    </p>
                </div>

                <div style={{ display: "flex", paddingLeft: "37px" }}>
                    <div style={{ width: "653px" }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <React.Fragment key={id}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                    
                    {/*картинки */}
                    <div style={{ width: "975px", height: "1400px" }}>
                        <div style={{ width: "902px", height: "564px" }}>
                            <img 
                                src={A1a} 
                                alt=""
                                style={{ width: "419px" }} 
                            />
                        </div>
                        <div style={{ width: "902px", height: "725px" }}>
                            <img 
                                src={A1b} 
                                alt=""
                                style={{
                                    width: "400px", 
                                    marginLeft: "500px", 
                                    marginTop: "100px"
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tw_notes_song;