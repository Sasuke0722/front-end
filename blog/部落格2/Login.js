const inputs = document.querySelectorAll(".login-box input");
const form = document.querySelector(".login-box form");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // 防止表單提交
  
    // 獲取用戶輸入的帳號和密碼
    const username = form.username.value;
    const password = form.password.value;
  
    // 在這裡進行帳號和密碼驗證，例如向後端發送 API 請求進行驗證
  
    // 假設驗證成功，跳轉到指定的頁面
    if (username === "admin" && password === "123") {
      window.location.href = "Myblog.html";
    }
  });

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc() {
	let parent = this.parentNode;
	if (this.value === "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});
