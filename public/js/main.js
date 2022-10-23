function showMenu() {
  var menu = document.getElementById("hdnMenu");
  menu.classList.toggle("hiddenMenuDisplay");
}

async function sleep(msec) {
  return new Promise((resolve) => setTimeout(resolve, msec));
}

async function copyCode() {
  var copyBtn = document.getElementsByClassName("copyBtn");
  var codeElement = document.getElementsByClassName("language-sql");
  //console.log(codeElement[0].textContent);
  var text = codeElement[0].textContent;
  navigator.clipboard.writeText(text);
  copyBtn[0].innerHTML = "Copied!!";
  //copyBtn[0].innerHTML = "Copy Code";
  copyBtn[0].style.backgroundColor = "#5609B8 ";
  await sleep(5000);
  copyBtn[0].innerHTML = "Copy Code";
  copyBtn[0].style.backgroundColor = "#7c2ee2";
}
