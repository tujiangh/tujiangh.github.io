<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>// 设置网站启动时间
var startTime = new Date("2024-01-22T20:38:26Z");

function updateUptime() {
    var currentTime = new Date();
    var uptimeMilliseconds = currentTime - startTime;

    var days = Math.floor(uptimeMilliseconds / (1000 * 60 * 60 * 24));
    var hours = Math.floor((uptimeMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((uptimeMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((uptimeMilliseconds % (1000 * 60)) / 1000);

    document.getElementById("uptime").innerText = "本站已运行：" + days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
}

// 页面加载时更新运行时间
updateUptime();

// 每秒更新一次
setInterval(updateUptime, 1000);