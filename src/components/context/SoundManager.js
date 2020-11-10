import sounds from '../../js/sounds';

const songs = [
    new Audio(sounds.music[0]),
    new Audio(sounds.music[1])
]
songs[0].loop = true
songs[1].loop = true
songs[0].pause()
songs[1].pause()

const bonk = () => {
    const b = getRandomInt(0,sounds.bonks.length - 1)
    const moleNoise = new Audio(sounds.bonks[b]);
    moleNoise.play();
}

const playSong_0 = () => {
    songs[1].pause()
    if ( songs[0].paused ) songs[0].play()
}
const playSong_1 = () => {
    songs[0].pause()
    if ( songs[1].paused ) songs[1].play()
}

const pauseSongs = () => {
    songs[0].pause()
    songs[1].pause()
}

const getRandomInt = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
    bonk,
    playSong_0,
    playSong_1,
    pauseSongs
}