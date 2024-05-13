//  Copy to clipboard feature
function copyC(e, t) {
  var o = document.getElementById(e),
    n = document.getElementById(t),
    e = getSelection(),
    t = document.createRange();
  e.removeAllRanges(),
    t.selectNodeContents(n),
    e.addRange(t),
    document.execCommand("copy"),
    e.removeAllRanges(),
    o.classList.add("copied"),
    (document.getElementById("toastNotif").innerHTML = "<span>Copiado!</span>"),
    document.getElementById("toastNotif").style.transform = "translate(50%, 50%)",
    setTimeout(() => {
      o.classList.remove("copied");
    }, 3e3);
}
