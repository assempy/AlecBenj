import './style.css';
import twelve_notes from './12notes.jpeg';
import A12 from './A12.jpeg';
import React from 'react';

function Love_the_ones_who_leave_song() {
    const lyrics = [
        'It\'s sadistic, masochistic',
        'Oh, I do it to myself',
        'Guess I\'m addicted, I predicted',
        'That you\'d break me, I could tell',
        'By the color of your lipstick',
        'By the way your perfume smelled',
        'By the way you\'d say my name',
        'I knew one day you\'d say "farewell"',
        'But I fell for you',
        'Even though I knew',
        'It would ruin me completely',
        'Wish it wasn\'t true',
        'But that\'s what I do',
        'I love the ones who leave me',
        'I love the ones who leave me',
        'The ones who walk away',
        'The ones who didn\'t need me',
        'Never loved me anyway',
        'I love the ones who leave me',
        'The ones who never cared',
        'The ones who deceive me',
        'I love the ones, love the ones',
        'Love the ones who leave me',
        'Fatalistic, the statistics',
        'Told me I\'d do it again',
        'Like addiction, my prediction',
        'Was you\'d break me, knew it then',
        'By the color of your lipstick',
        'By the messages you\'d send',
        'By the way you\'d say my name',
        'I knew one day you\'d say "the end"',
        'But I fell for you',
        'Even though I knew',
        'It would ruin me completely',
        'Wish it wasn\'t true',
        'But that\'s what I do',
        'I love the ones who leave me',
        'I love the ones who leave me',
        'The ones who walk away',
        'The ones who didn\'t need me Never loved me anyway',
        'I love the ones who leave me',
        'The ones who never cared',
        'The ones who deceive me',
        'I love the ones, love the ones',
        'Love the ones who leave me',
        'Like a moth drawn to a flame',
        'I can\'t seem to stay away',
        'Only have myself to blame',
        'Wish I loved the ones who stayed, na-na (Na-na)',
        'Wish I loved the ones who stayed, na-na (Na-na)',
        'But I love the ones who leave me',
        'Like a moth drawn to a flame',
        'I can\'t seem to stay away',
        'Only have myself to blame',
        'Wish I loved the ones who stayed, na-na (Na-na)',
        'I wish I loved the ones who stayed, na-na (Na-na)',
        'I love the ones who leave me',
    ];

    return (
        <div className="LovesTheOnesWhoLeaveSong">
            <div style={{ width: 1626, height: 1350 }}>
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
                        Love The Ones Who Leave
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
                            src={A12} 
                            alt=""
                            style={{ width: 736, marginLeft: 155 }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Love_the_ones_who_leave_song;