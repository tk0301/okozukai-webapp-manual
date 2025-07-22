const today = new Date();
const todayStr = today.toISOString().split('T')[0];
document.getElementById('today').textContent = todayStr;

let balance = Number(localStorage.getItem("balance")) || 0;
document.getElementById("balance").textContent = balance;

function addAllowance() {
  const amount = Number(document.getElementById("addAmount").value);
  if (isNaN(amount) || amount <= 0) {
    alert("正しい金額を入力してください。");
    return;
  }
  balance += amount;
  localStorage.setItem("balance", balance);
  document.getElementById("balance").textContent = balance;
  alert(`お小遣いを ${amount} 円追加しました。`);
  document.getElementById("addAmount").value = "";
}

function submitSpent() {
  const spent = Number(document.getElementById("spent").value);
  if (isNaN(spent) || spent < 0) {
    alert("正しい金額を入力してください。");
    return;
  }
  balance -= spent;
  localStorage.setItem("balance", balance);
  document.getElementById("balance").textContent = balance;
  alert(`記録しました。残高は ${balance} 円です。`);
  document.getElementById("spent").value = "";
}

function resetBalance() {
  if (confirm("残高をリセットしますか？")) {
    balance = 0;
    localStorage.setItem("balance", balance);
    document.getElementById("balance").textContent = balance;
    alert("残高をリセットしました。");
  }
}
