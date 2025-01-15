import './style.css';
import two_wind from './2wind.jpeg';
import B7 from './B7.jpg';
import React from 'react';

function I_am_not_a_cynic_song () {
    const lyrics = [
        "I'm just bein' realistic, bein' honest with myself",
        "I've tried bein' optimistic but it doesn't seem to help",
        "So I'll just have to admit this is the hand that I've been dealt",
        "I'm not bein' pessimistic, just bein' honest with myself",
        "I'm not a cynic, oh, today's just not my day",
        "I've tried to spin it 'bout a thousand different ways",
        "But from every angle, oh, the outlook is the same",
        "I swear that I'm not a cynic, my glass just has no water in it today",
        "I swear that I'm not a cynic, my glass just has no water in it",
        "You only get that which you're given, it's not always up to you",
        "Not every Sunday is a picnic 'cause the sky ain't always blue",
        "You can't just change the weather by changing your point of view",
        "Some days you have to wait until the storm just passes through",
        "I'm not a cynic, oh, today's just not my day",
        "I've tried to spin it 'bout a thousand different ways",
        "But from every angle, oh, the outlook is the same",
        "I swear that I'm not a cynic, my glass just has no water in it today",
        "So like a boat on the ocean, I'll rock with the waves",
        "God, I'm so sick of this notion that I have to fake",
        "Fake my emotions and pretend I'm okay",
        "So like a boat on the ocean, I'll just rock with the waves",
        "I'm not a cynic, oh, today's just not my day",
        "I've tried to spin it 'bout a thousand different ways",
        "But from every angle, oh, the outlook is the same",
        "I swear that I'm not a cynic, my glass just has no water in it today",
        "I swear that I'm not a cynic, my glass just has no water in it today"
    ];

    return (
        <div className="IAmNotACynic">
            <div style={{ width: 1626, height: 800 }}>
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
                        I'm Not A Cynic
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
                            src={B7}
                            alt=""
                            style={{ width: 700, marginLeft: 200 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default I_am_not_a_cynic_song;