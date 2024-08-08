const text = document.getElementById("text");
const btn = document.getElementById("btn");

// 非同期処理
btn.addEventListener("click" , () => {
  setTimeout (() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});