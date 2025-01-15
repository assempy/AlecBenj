import './style.css';
import two_wind from './2wind.jpeg';
import React from 'react';
import { Link } from 'react-router-dom';

function These_Two_Windows() {
    const songs = [ 
        { id: 13, title: "Mind Is A Prison", link: "/mind_is_a_prison_song" },
        { id: 14, title: "Demons", link: "/demons_song" },
        { id: 15, title: "Oh My God", link: "/oh_my_god_song" },
        { id: 16, title: "The Book of You & I", link: "/the_book_of_you_&_i_song" },
        { id: 17, title: "Match In The Rain", link: "/match_in_the_rain_song" },
        { id: 18, title: "Jesus In LA", link: "/jesus_in_la_song" },
        { id: 19, title: "Im Not A Cynic", link: "/im_not_a_cynic_song" },
        { id: 20, title: "Alamo", link: "/alamo_song" },
        { id: 21, title: "Must Have Been The Wind", link: "/must_have_been_the_wind_song" },
        { id: 22, title: "Just Like You", link: "/just_like_you_song" },
    ];

    // Разделение массива на две части
    const firstColumn = songs.slice(0, 5);
    const secondColumn = songs.slice(5);

    return (
        <div className="TheseTwoWindows">
            <div style={{ width: "1626px", height: "791px" }}>
                <div style={{ width: "1626px", height: "245px", display: "flex" }}>
                    <img
                        src={two_wind}
                        alt="These Two Windows album cover"
                        style={{
                            height: "85px",
                            borderRadius: "50%",
                            marginLeft: "574px",
                            marginTop: "100px",
                        }}
                    />
                    <p style={{ marginTop: "115px", marginLeft: "25px", fontSize: "50px" }}>
                        These Two Windows
                    </p>
                </div>
                <div style={{ display: "flex", paddingLeft: "37px" }}>
                    {/* Первый столбец */}
                    <div style={{ width: "846px", height: "547px" }}>
                        <ol style={{ fontSize: "48px" }}>
                            {firstColumn.map((song) => (
                                <li key={song.id}>
                                    <Link to={`/song/${song.id}`} className="MindIsAPrison">
                                        {song.title}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                    {/* Второй столбец */}
                    <div style={{ width: "780px", height: "547px" }}>
                        <ol start="6" style={{ fontSize: "48px" }}>
                            {secondColumn.map((song) => (
                                <li key={song.id}>
                                    <Link to={`/song/${song.id}`} className="JesusInLA">
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

export default These_Two_Windows;
