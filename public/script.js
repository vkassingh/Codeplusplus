var fileName = document.getElementById("html-input-fileName");

html.value = localStorage.getItem("html");
css.value = localStorage.getItem("css");
js.value = localStorage.getItem("js");
fileName.value = localStorage.getItem("fileName");

var editor_html = CodeMirror.fromTextArea(html, {
    lineNumbers: true,
    mode: "htmlmixed",
    tabSize: 4
});
var editor_css = CodeMirror.fromTextArea(css, {
    lineNumbers: true,
    mode: "css",
    tabSize: 4
});
var editor_js = CodeMirror.fromTextArea(js, {
    lineNumbers: true,
    mode: "javascript",
    tabSize: 4
});
function update() {
    localStorage.setItem("fileName", fileName.value)
    localStorage.setItem("html", editor_html.getValue());
    localStorage.setItem("css", editor_css.getValue());
    localStorage.setItem("js", editor_js.getValue());
    console.log(localStorage);
    var c = code.contentDocument;
    c.open();
    c.writeln(editor_html.getValue() + "<style>" + editor_css.getValue() + "</style>" + "<script>" + editor_js.getValue() + "</script>");
    c.close();
}
function compile() {
    document.body.oninput = function () {
        update();
    }
}
update();
compile();


updateVisitCount();
function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/codeplusplus/visits')
        .then(res => res.json())
        .then(res => {
            counts.innerHTML = res.value;
        })
}


$("#html-download-btn").click( function() {
  event.preventDefault();
  var text = $("#html").val();
  var filename = $("#html-input-fileName").val()
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".html");
});


$("#html-download-btn").click( function() {
  event.preventDefault();
  var text = $("#css").val();
  var filename = $("#html-input-fileName").val()
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".css");
});


$("#html-download-btn").click( function() {
  event.preventDefault();
  var text = $("#js").val();
  var filename = $("#html-input-fileName").val()
  var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".js");
});


function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


