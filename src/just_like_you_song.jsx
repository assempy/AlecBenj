import './style.css';
import two_wind from './2wind.jpeg';
import B10 from './B10.jpg';
import React from 'react';

function Just_like_you_song() {
  const lyrics = [
    "When I was younger, I would argue with my dad",
    "Tell him that I hated him when I was talking back",
    "Blocked his number, can't believe that I did that",
    "Oh, I didn't have a reason, wish that I could take it back",
    "But as the years went by",
    "He was always by my side",
    "To wipe all of the tears I cried",
    "Now that I'm older, realized my father",
    "Was doing the best he could do",
    "Told him one day I'll have a son or a daughter",
    "And when I'm a father too",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "Now I realize that he has struggles of his own",
    "How could I be so selfish, oh, how could I block his phone?",
    "Now I remember when my father lost his job",
    "How he held a home together, for the family he was strong",
    "And as the years went by",
    "He was always by my side",
    "To wipe all of the tears I cried",
    "Now that I'm older, realized my father",
    "Was doing the best he could do",
    "Told him one day I'll have a son or a daughter",
    "And when I'm a father too",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "(I hope that I am just like you)",
    "I hope that I am just like you",
    "(I hope that I am just like you)",
    "I hope that I am just like you",
    "(I hope that I am just like you)",
    "Now that I'm older, realized my father",
    "Was doing the best he could do",
    "Told him one day I'll have a son or a daughter",
    "And when I'm a father too",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
    "I hope that I am just like you",
  ];

  return (
    <div className="JustLikeYou">
      <div style={{ width: 1626, height: 1250 }}>
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
          <p style={{ marginTop: 115, marginLeft: 25, fontSize: 50 }}>
            Just Like You
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
            <img src={B10} alt="" style={{ width: 736, marginLeft: 150 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Just_like_you_song;