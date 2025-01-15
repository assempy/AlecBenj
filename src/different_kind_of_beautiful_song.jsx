import './style.css';
import twelve_notes from './12notes.jpeg';
import A4 from './A4.jpeg';
import React from 'react';

function Different_kind_of_beautiful_song() {
    const lyrics = [
        "[Intro]",
        "You're a different kind of beautiful",
        "The kind that makes me scared",
        "The kind that makes me turn around and act like I'm not there",
        "The kind that takes my breath away and leaves me without air",
        "Maybe I'm delusional, you're just that kind of beautiful",
        "",
        "[Verse 1]",
        "I grab an hors d'oeuvre and head to the bar",
        "I place an order, a tip in the jar",
        "A couple of dollars I had in my car",
        "I turn the corner and that's when I see",
        "You in the corner there, starin' at me",
        "Mind out of order and heart on my sleeve",
        "",
        "[Pre-Chorus]",
        "I was hopin' that I'd run into",
        "You here, but now I'm stumblin'",
        "And I can't seem to figure this out",
        "Now I'm broken and I'm crumblin'",
        "In the open and it's troublin'",
        "But I see you and it fills me with doubt",
        "",
        "[Chorus]",
        "You're a different kind of beautiful, the kind that makes me scared",
        "The kind that makes me turn around and act like I'm not there",
        "The kind that takes my breath away and leaves me without air",
        "Maybe I'm delusional, you're just that kind of beautiful",
        "Different kind of beautiful, the kind that makes me fear",
        "The kind that makes me turn around and act like I'm not here",
        "The kind that takes my breath away every time you're near",
        "Maybe I'm delusional, you're just that kind of beautiful (Beautiful)",
        "",
        "[Verse 2]",
        "I try to speak, but I can't find the words",
        "Knees gettin' weak and my speech gettin' slurred",
        "Hands feelin' heavy and vision is blurred (Oh-oh, no-no)",
        "I don't even know what I wanted to say",
        "Didn't expect to be feelin' this way",
        "You turn your head and then you walk away (Oh-oh)",
        "",
        "[Pre-Chorus]",
        "I was hopin' that I'd run into",
        "You here, but now I'm stumblin'",
        "And I can't seem to figure this out",
        "Now I'm broken and I'm crumblin'",
        "In the open and it's troublin'",
        "But I see you and it fills me with doubt",
        "",
        "[Chorus]",
        "You're a different kind of beautiful, the kind that makes me scared",
        "The kind that makes me turn around and act like I'm not there",
        "The kind that takes my breath away and leaves me without air",
        "Maybe I'm delusional, you're just that kind of beautiful",
        "Different kind of beautiful, the kind that makes me fear",
        "The kind that makes me turn around and act like I'm not here",
        "The kind that takes my breath away every time you're near",
        "Maybe I'm delusional, you're just that kind of beautiful",
        "",
        "[Post-Chorus]",
        "And I'm helpless",
        "And I'm helpless",
        "Yeah, I'm helpless",
        "Mm, mm"
    ];

    return (
        <div className="DifferentKindOfBeautifulSong">
            <div style={{ width: 1626, height: 1500 }}>
                <div style={{ width: 1626, height: 245, display: "flex" }}>
                    <img
                        src={twelve_notes}
                        alt=""
                        style={{
                            height: 85,
                            borderRadius: "50%",
                            marginLeft: 500,
                            marginTop: 100
                        }}
                    />
                    <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
                        Different Kind Of Beautiful
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
                        <img src={A4} alt="" style={{ width: 736, marginLeft: 155 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Different_kind_of_beautiful_song;