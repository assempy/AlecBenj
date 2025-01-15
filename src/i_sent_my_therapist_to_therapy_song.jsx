import './style.css';
import twelve_notes from './12notes.jpeg';
import A7 from './A7.jpeg';
import React from 'react';

function I_sent_my_therapist_to_therapy_song() {
    const lyrics = [
        "He said",
        "Take a seat over there, on the chair by the couch",
        "Tell me what you've been thinking about",
        "There's nothing you can say that's out of bounds",
        "You can trust me, swear I'm here for you now",
        "I've heard it all before, he took out his pen",
        "But as he wrote down each, each thing that I said",
        "Oh, well, the mood just changed",
        "He started acting strange",
        "This was our next exchange",
        "He said",
        "\"I'll tell you what, I'm sorry, but I don't think I can be",
        "Of any help, think I need help now, \" is what he said to me",
        "Might even need it more than me now, oh, the irony",
        "I'm so messed up, I sent my therapist to therapy",
        "\"I tell you what, I'm sorry, but I thought I'd never see",
        "A case as bad as yours, don't think I have a remedy, \" mm",
        "Think he needs help now, oh, the irony",
        "I'm so messed up, I sent my therapist to therapy",
        "So I got up from the chair where I sat by the couch",
        "He said to me, \"Could you sit back down?\"",
        "And I could see as I turned around",
        "Really needed someone he could talk to now, he said",
        "\"Thought that I'd seen it all, turns out I was wrong",
        "Wish I could help you out, you'll have to be strong\"",
        "Oh, well, the mood just changed",
        "He started acting strange",
        "This was our next exchange",
        "He said",
        "\"I'll tell you what, I'm sorry, but I don't think I can be",
        "Of any help, think I need help now, \" is what he said to me",
        "Might even need it more than me now, oh, the irony",
        "I'm so messed up, I sent my therapist to therapy",
        "\"I tell you what, I'm sorry, but I thought I'd never see",
        "A case as bad as yours, don't think I have a remedy, \" mm",
        "Think he needs help now, oh, the irony",
        "I'm so messed up, I sent my therapist to therapy",
        "I'm so messed up, I'm so messed up, I'm so messed up now",
        "I'm so messed up, I'm so messed up, I'm so messed up now",
        "I'm so messed up, can't you see?",
        "I'm so messed up, I sent my therapist to therapy",
        "I went out yesterday to get food from the store",
        "And ran into the man from before",
        "Right by the exit door",
        "He stopped me to talk",
        "Said that he went to go and look for some help",
        "A funny thing happened and I said, \"Do tell\"",
        "Oh, and the story is, mm",
        "My doctor found a doctor and his doctor told him",
        "\"I'll tell you what, I'm sorry, but I don't think I can be",
        "Of any help, think I need help now, \" is what he said to me",
        "Might even need it more than me now, oh, the irony",
        "I'm so messed up, I sent my therapist to therapy",
        "\"I tell you what, I'm sorry, but I thought I'd never see",
        "A case as bad as yours, don't think I have a remedy, \" mm",
        "Think he needs help now, oh, the irony",
        "I'm so messed up, I sent my therapist to therapy"
    ];

    return (
        <div className="ISentMyTherapistToTherapySong">
            <div style={{ width: 1626, height: 1400 }}>
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
                        I Sent My Therapist To Therapy
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
                            src={A7} 
                            alt=""
                            style={{ width: 736, marginLeft: 155 }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default I_sent_my_therapist_to_therapy_song;