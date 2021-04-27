let sounds = []

function preload() {
  soundFormats('mp3', 'ogg', 'wav')
  sounds.push(loadSound('./sounds/cue_hit.wav'))
  sounds.push(loadSound('./sounds/ball_hit.wav'))
  sounds.push(loadSound('./sounds/rail_hit.wav'))
}

function playSound(sound, vol) {
    let soundIndex = 0
    
    switch (sound) {
        case "cue_hit": soundIndex = 0; break
        case "ball_hit": soundIndex = 1; break
        case "rail_hit": soundIndex = 2; break
        default: soundIndex = -1
    }

    // sounds[soundIndex].setVolume(vol)
    // sounds[soundIndex].play()
}