// 在這裡可以添加自定義的JavaScript代碼
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止默認提交行為
    alert('感謝您的提交！');
});
