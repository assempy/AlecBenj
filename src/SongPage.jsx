import React from 'react';
import { useParams } from 'react-router-dom';

import Tw_notes_song from './tw_notes_song.jsx';
import Ways_to_go_song from './ways_to_go_song.jsx';
import In_a_little_song from './in_a_little_song.jsx';
import Different_kind_of_beautiful_song from './different_kind_of_beautiful_song.jsx';
import Pick_me_song from './pick_me_song.jsx';
import Sacrifice_tomorrow_song from './sacrifice_tomorrow_song.jsx';
import I_sent_my_therapist_to_therapy_song from './i_sent_my_therapist_to_therapy_song.jsx';
import The_arsonist_song from './the_arsonist_song.jsx';
import Lead_me_to_water_song from './lead_me_to_water_song.jsx';
import By_now_song from './by_now_song.jsx';
import King_size_bed_song from './king_size_bed_song.jsx';
import Love_the_ones_who_leave_song from './love_the_ones_who_leave_song.jsx';

import Mind_is_a_prison_song from './mind_is_a_prison_song.jsx';
import Demons_song from './demons_song.jsx';
import Oh_my_god_song from './oh_my_god_song.jsx';
import The_book_of_you_and_i_song from './the_book_of_you_&_i_song.jsx';
import Match_in_the_rain_song from './match_in_the_rain_song.jsx';
import Jesus_in_la_song from './jesus_in_la_song.jsx';
import I_am_not_a_cynic_song from './im_not_a_cynic_song.jsx';
import Alamo_song from './alamo_song.jsx';
import Must_have_been_the_wind_song from './must_have_been_the_wind_song.jsx';
import Just_like_you_song from './just_like_you_song.jsx';

function SongPage() {
  const { id } = useParams();

  const songComponents = {
    // Первый альбом
    1: <Tw_notes_song />,
    2: <Ways_to_go_song />,
    3: <In_a_little_song />,
    4: <Different_kind_of_beautiful_song />,
    5: <Pick_me_song />,
    6: <Sacrifice_tomorrow_song />,
    7: <I_sent_my_therapist_to_therapy_song />,
    8: <The_arsonist_song />,
    9: <Lead_me_to_water_song />,
    10: <By_now_song />,
    11: <King_size_bed_song />,
    12: <Love_the_ones_who_leave_song />,
    
    // Второй альбом
    13: <Mind_is_a_prison_song />,
    14: <Demons_song />,
    15: <Oh_my_god_song />,
    16: <The_book_of_you_and_i_song />,
    17: <Match_in_the_rain_song />,
    18: <Jesus_in_la_song />,
    19: <I_am_not_a_cynic_song />,
    20: <Alamo_song />,
    21: <Must_have_been_the_wind_song />,
    22: <Just_like_you_song />,
  };

  return (
    <div>
      {songComponents[id] || <p>Song not found</p>}
    </div>
  );
}

export default SongPage;