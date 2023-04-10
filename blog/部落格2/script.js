// 取得所有nav標籤
const navLinks = document.querySelectorAll('nav a');

// 為每個鏈接添加點擊事件監聽器
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // 防止默認鏈接行為
    event.preventDefault();

    // 從所有鏈接中刪除“active”class
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // 將“active”類別 添加到單擊的鏈接
    link.classList.add('active');

    // 從鏈接的“href”屬性中獲取目標 ID
    const targetId = link.getAttribute('href');

    // 隱藏文章
    document.querySelectorAll('article').forEach(article => {
      article.style.display = 'none';
    });

    // Show the target article
    document.querySelector(targetId).style.display = 'block';
  });

});

// 獲取元素
var aboutLink = document.querySelector("#nav-about a"); // About 鏈接
var infoModal = document.querySelector("#info-modal"); // 個人資訊彈窗
var closeBtn = infoModal.querySelector(".close"); // 彈窗關閉按鈕

// 綁定點擊事件
aboutLink.addEventListener("click", function() {
  e.preventDefault(); // 阻止默認行為

  // 顯示個人資訊彈窗
  infoModal.style.display = "block";
});

// 綁定關閉按鈕點擊事件
closeBtn.addEventListener("click", function() {
  // 隱藏個人資訊彈窗
  infoModal.style.display = "none";
});


// Show the first article by default
document.querySelector('article').style.display = 'block';
