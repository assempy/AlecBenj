import './style.css';
import twelve_notes from './12notes.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';

function Twelve_notes_albom() {
    const songs = [ 
        { id: 1, title: "12 Notes", link: "/tw_notes_song" },
        { id: 2, title: "Ways To Go", link: "/ways_to_go_song" },
        { id: 3, title: "In A Little", link: "/in_a_little_song" },
        { id: 4, title: "Different Kind Of Beautiful", link: "/different_kind_of_beautiful_song" },
        { id: 5, title: "Pick Me", link: "/pick_me_song" },
        { id: 6, title: "Sacrifice Tomorrow", link: "/sacrifice_tomorrow_song" },
        { id: 7, title: "I Sent My Therapist To Therapy", link: "/i_sent_my_therapist_to_therapy_song" },
        { id: 8, title: "The Arsonist", link: "/the_arsonist_song" },
        { id: 9, title: "Lead Me To Water", link: "/lead_me_to_water_song" },
        { id: 10, title: "By Now", link: "/by_now_song" },
        { id: 11, title: "King Size Bed", link: "/king_size_bed_song" },
        { id: 12, title: "Love The Ones Who Leave", link: "/love_the_ones_who_leave_song" },
    ];

    // Разделение массива на две части
    const firstColumn = songs.slice(0, 6);
    const secondColumn = songs.slice(6);

    return (
        <div className="TwelveNotes">
            <div style={{ width: "1626px", height: "791px" }}>
                <div style={{ width: "1626px", height: "245px", display: "flex" }}>
                    <img
                        src={twelve_notes}
                        alt="12 Notes album cover"
                        style={{
                            height: "85px",
                            borderRadius: "50%",
                            marginLeft: "574px",
                            marginTop: "100px",
                        }}
                    />
                    <p style={{ marginTop: "115px", marginLeft: "25px", fontSize: "50px" }}>
                        12 Notes
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: "37px" }}>
                    {/* Первый столбец */}
                    <div style={{ width: "846px", height: "547px" }}>
                        <ol style={{ fontSize: "48px" }}>
                            {firstColumn.map((song) => (
                                <li key={song.id}>
                                    <Link to={`/song/${song.id}`} className="TwelveNotesSong">
                                        {song.title}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* Второй столбец */}
                    <div style={{ width: "780px", height: "547px" }}>
                        <ol start="7" style={{ fontSize: "48px" }}>
                            {secondColumn.map((song) => (
                                <li key={song.id}>
                                    <Link to={`/song/${song.id}`} className="ISentMyTherapistToTherapySong">
                                        {song.title}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Twelve_notes_albom;