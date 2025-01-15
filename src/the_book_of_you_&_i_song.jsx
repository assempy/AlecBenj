import './style.css';
import two_wind from './2wind.jpeg';
import B4 from './B4.jpg';
import React from 'react';

function The_book_of_you_and_i_song () {
    const lyrics = [
        "Well, it all began in the back of her car",
        "I was just 16, but I fell so hard",
        "Well, the years went by, and she held my heart",
        "But her love ran dry, and we fell apart",
        "I felt her growing distant",
        "I knew her love was shifting",
        "And all that I could say was-",
        "Don't tell me that it's over, the book of you and I",
        "Now you've scribbled out my name, and you've erased my favorite lines",
        "There were so many chapters that we never got to write",
        "Like 'Cereal for Dinner' and 'Staying Up All Night'",
        "I remember where we started, I remember how you looked",
        "But now I'm missing bits and pieces from the pages that you took",
        "You didn't give a reason, I'll forever wonder why",
        "We never got to finish the book of you and I",
        "Well, I bought a pen, and I turned the page",
        "Then I wrote about how I wish you'd stayed",
        "I said all the things that I never got to say",
        "Maybe when it's done, I will feel okay",
        "That she had grown so distant",
        "And that her love had shifted",
        "I wish she felt the same",
        "Don't tell me that it's over, the book of you and I",
        "Now you've scribbled out my name, and you've erased my favorite lines",
        "There were so many chapters that we never got to write",
        "Like 'Cereal for Dinner' and 'Staying Up All Night'",
        "I remember where we started, I remember how you looked",
        "But now I'm missing bits and pieces from the pages that you took",
        "You never gave a reason, I'll forever wonder why",
        "We never got to finish the book of you and I",
        "Don't tell me, tell me that you're leaving",
        "My belly hurts, and my heart is hardly beating right",
        "I hate to beg, but I'll try one last time",
        "Don't tell me that it's over, the book of you and I",
        "Now you've scribbled out my name, and you've erased my favorite lines",
        "There were so many chapters that we never got to write",
        "Like 'Cereal for Dinner' and 'Staying Up All Night'",
        "I remember where we started, I remember how you looked",
        "But now I'm missing bits and pieces from the pages that you took",
        "You never gave a reason, I'll forever wonder why",
        "We never got to finish the book of you and I",
        "Oh my god, I can't remember",
        "Who I was just last December",
        "Who I was just last December",
        "Oh my god",
        "Oh my god, look in the mirror",
        "I was young, nothing to fear once",
        "What have I done, how did I get here?",
        "What have I done?",
        "Mm, mm",
        "Mm, mm"
    ];

    return (
        <div className="TheBookofYouAndI">
            <div style={{ width: 1626, height: 1300 }}>
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
                        The Book of You &amp; I
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: 37 }}>
                    <div style={{ width: 653 }}>
                        <p className="lyrics">
                            {lyrics.map((line, id) => (
                                <span key={id}>{line}<br /></span>
                            ))}
                        </p>
                    </div>
                    <div style={{ width: 975, alignContent: "center" }}>
                        <img
                            src={B4}
                            alt=""
                            style={{ width: 550, marginLeft: 200 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default The_book_of_you_and_i_song;