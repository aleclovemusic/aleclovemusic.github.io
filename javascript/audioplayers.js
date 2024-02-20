const audioPlayers = document.querySelectorAll('.audioPlayer');
audioPlayers.forEach((audio, index) => {
    const playPauseBtn = document.querySelectorAll('.playPauseBtn')[index];
    const volumeControl = document.querySelectorAll('.volumeControl')[index];
    const currentTime = document.querySelectorAll('.currentTime')[index];
    const duration = document.querySelectorAll('.duration')[index];
    const songTitle = document.querySelectorAll('.songTitle')[index];
    const progressIndicator = document.querySelectorAll('.progressIndicator')[index];

    playPauseBtn.addEventListener('click', function() {
        togglePlayPause(audio, playPauseBtn);
    });

    volumeControl.addEventListener('input', function() {
        updateVolume(audio, volumeControl);
    });

    audio.addEventListener('timeupdate', function() {
        updateCurrentTime(audio, currentTime, progressIndicator);
    });

    audio.addEventListener('durationchange', function() {
        updateDuration(audio, duration);
    });

});

function togglePlayPause(audio, button) {
    const icon = button.querySelector('.playPauseIcon');

    if (audio.paused) {
        audio.play();
        icon.src = '/icons/pausebutton.png'; // Replace with the actual path to your pause button image
    } else {
        audio.pause();
        icon.src = '/icons/playbutton.png'; // Replace with the actual path to your play button image
    }
}



function updateVolume(audio, volumeControl) {
    audio.volume = volumeControl.value;
}

function updateCurrentTime(audio, currentTime, progressIndicator) {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Update progress bar indicator position
    const progress = (audio.currentTime / audio.duration) * 100;
    progressIndicator.style.width = `${progress}%`;
}

function updateDuration(audio, duration) {
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    duration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function handleProgressBarClick(event) {
    console.log("Clicked on progress container");

    const audioPlayerContainer = event.currentTarget.closest('.audioPlayerContainer');
    console.log("Audio player container:", audioPlayerContainer);

    if (!audioPlayerContainer) {
        console.error("No audio player container found.");
        return;
    }

    const audio = audioPlayerContainer.querySelector('audio');
    console.log("Audio element:", audio);

    if (!audio) {
        console.error("No audio element found in the audio player container.");
        return;
    }

    const progressBarRect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - progressBarRect.left;
    const progressPercentage = (clickX / progressBarRect.width) * 100;

    console.log("Progress percentage:", progressPercentage);

    audio.currentTime = (progressPercentage / 100) * audio.duration || 0;
    console.log("Updated audio currentTime:", audio.currentTime);
}

const progressContainers = document.querySelectorAll('.progressContainer');
progressContainers.forEach(progressContainer => {
    progressContainer.addEventListener('click', handleProgressBarClick);
});


