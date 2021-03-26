var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var fileName = document.getElementById("input-fileName");

html.value = localStorage.getItem("html");
css.value = localStorage.getItem("css");
js.value = localStorage.getItem("js");
fileName.value=localStorage.getItem("fileName");
function compile() {
    var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function () {
        code.open();
        code.writeln(html.value + "<style>" + css.value + "</style>" + "<script>" + js.value + "</script>")
        code.close();
    }
}
compile();

setInterval(() => {
    localStorage.setItem("fileName",fileName.value)
    localStorage.setItem("html",html.value);
    localStorage.setItem("css",css.value);
    localStorage.setItem("js",js.value);
    console.log(localStorage);
}, 2000)
// const countE2 = document.getElementById('counts');
// updateVisitCount();
// function updateVisitCount() {
// 	fetch('https://api.countapi.xyz/hit/codeplusplus/visits')
// 	.then(res => res.json())
// 	.then(res => {
// 		// countE2.innerHTML = res.value;
// 	})
// }








