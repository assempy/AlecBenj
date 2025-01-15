import './style.css';
import two_wind from './2wind.jpeg';
import B8 from './B8.jpg';
import React from 'react';

function Alamo_song() {
  const lyrics = [
    "Yeah",
    "Please give me a reason to believe all the lies",
    "'Cause my teachers and the media are ghouls in disguise",
    "Abusing their authority to prosthelytize",
    "But nothing they report to me could change my mind",
    "I need a vacation from the way things have been",
    "Because I'm growing impatient, yeah, it's boiling my skin",
    "Had enough manipulation, can you just let me live? Mm, mm",
    "Live my life",
    "I'm not gonna give in",
    "If I have to fight, then I'm willing to give my life, rather die",
    "Than lay down on my back, got no white flag to throw",
    "This is my Alamo, this, this is my Alamo",
    "Please give me a reason to give up on myself",
    "You can tell me that it's treason, this is stand and rebel",
    "I won't pledge you my allegiance, I'll just bid you farewell, Mm, mm",
    "And goodbye",
    "I'm not gonna give in",
    "If I have to fight, then I'm willing to give my life, rather die",
    "Than lay down on my back, got no white flag to throw",
    "This is my Alamo, this, this is my Alamo",
    "I know that on the surface",
    "It might seem like I'm just fine",
    "But I can't eat, I barely sleep",
    "Sometimes, I wanna run and hide",
    "I feel like I'm dying in this cage",
    "My soul is trapped, I feel confined",
    "And I just wish they'd let me out",
    "So I could finally live my life",
    "I know that on the surface",
    "It might seem like I'm just fine",
    "But I can't eat, I barely sleep",
    "Sometimes, I wanna run and hide",
    "I feel like I'm dying in this cage",
    "My soul is trapped, I feel confined",
    "And I just wish they'd let me out",
    "So I could finally live my life (finally live my life)",
    "I'm not gonna give in",
    "If I have to fight, then I'm willing to give my life, rather die",
    "Than lay down on my back, got no white flag to throw",
    "I'm not gonna give in",
    "If I have to fight, then I'm willing to give my life, rather die",
    "Than lay down on my back, got no white flag to throw",
    "This is my Alamo, this, this is my Alamo",
    "I swear that I'm not a cynic, my glass just has no water in it today",
  ];

  return (
    <div className="Alamo">
      <div style={{ width: 1626, height: 1150 }}>
        <div style={{ width: 1626, height: 245, display: "flex" }}>
          <img
            src={two_wind}
            alt=""
            style={{
              height: 85,
              borderRadius: "50%",
              marginLeft: 500,
              marginTop: 100,
            }}
          />
          <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>Alamo</p>
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
            <img src={B8} alt="" style={{ width: 736, marginLeft: 150 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alamo_song;