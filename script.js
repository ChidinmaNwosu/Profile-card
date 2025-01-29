function updateTime() {
    const now = new Date();
    const timeString = now.toISOString().split('T')[1].split('.')[0];
    document.getElementById('currentTime').textContent = timeString + ' UTC';
}
setInterval(updateTime, 1000);
updateTime();