function openVideo(videoUrl) {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');

    video.src = videoUrl;
    modal.style.display = 'block';
}

function closeVideo() {
    var modal = document.getElementById('videoModal');
    var video = document.getElementById('modalVideo');

    video.pause();
    video.src = '';
    modal.style.display = 'none';
}
