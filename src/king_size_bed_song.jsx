import './style.css';
import twelve_notes from './12notes.jpeg';
import A11 from './A11.jpeg';
import React from 'react';

function King_size_bed_song() {
    const lyrics = [
        'She said, "I\'ll take the left side tonight, I don\'t mind',
        'I know you\'ve got a call to take at nine',
        'I\'ll sleep against the wall, even if it hurts my back',
        'I\'ll take some Tylenol, you don\'t worry about that"',
        'I always told her that I\'d buy a bigger mattress',
        'Finally made some money, funny how it happens',
        'Got so caught up, forgot who I was, forgot about us',
        'Bought a king size bed when I lost my queen',
        'Thinking maybe then she\'ll come back to me, but',
        'I\'m here by myself instead',
        'Looking stupid in my king size bed',
        'She\'s in my head, and she\'s in my dreams',
        'Thinking maybe she\'ll come back to me, but',
        'I\'m here by myself instead',
        'Looking stupid in my king size bed',
        'I\'ll take the cold floor tonight, think I might',
        'Sleep by the door and keep on the light',
        'Like you did for me, would only be right',
        'I do the same for you, so alright',
        'It\'s better late than never, so I\'m sleeping on the ground',
        'I owed you so much better, baby, you deserved a crown',
        'And, though we\'re not together, I still hope you\'ll come around',
        'I hope you\'ll come around',
        'Bought a king size bed when I lost my queen',
        'Thinking maybe then she\'ll come back to me, but',
        'I\'m here by myself instead',
        'Looking stupid in my king size bed',
        'She\'s in my head, and she\'s in my dreams',
        'Thinking maybe she\'ll come back to me, but',
        'I\'m here by myself instead',
        'Looking stupid in my king size bed',
        'Oh, I bought the bed, I bought the bed',
        'Oh, I bought the bed, I bought the bed',
        'Oh, I bought the bed, I bought the bed',
        'Oh, just like I said, I bought the bed',
        'Oh, I bought the bed, I bought the bed',
        'Oh, I bought the bed, I bought the bed',
        'Oh, I bought the bed, I bought the bed',
        'Oh, just like I said, I bought the bed',
        'Bought a king size bed when I lost my queen',
        'Thinking maybe then she\'ll come back to me, but',
        'I\'m here by myself instead',
        'Looking stupid in my king size bed',
        'She\'s in my head, and she\'s in my dreams',
        'Thinking maybe she\'ll come back to me, but',
        'I\'m here by myself instead',
        'Looking stupid in my king size bed',
    ];

    return (
        <div className="KingSizeBedSong">
            <div style={{ width: 1626, height: 1200 }}>
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
                        King Size Bed
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
                            src={A11} 
                            alt=""
                            style={{ width: 736, marginLeft: 155 }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default King_size_bed_song;