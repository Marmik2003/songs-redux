import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        {title: 'Jana gana mana', duration: '0:52'},
        {title: 'Vande Mataram', duration: '1:09'},
        {title: 'Hanuman Chalisa', duration: '9:42'},
        {title: 'Some Fake Song', duration: '4:44'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
