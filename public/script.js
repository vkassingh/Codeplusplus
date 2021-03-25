function compile(){
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function(){
        code.open();
        code.writeln(html.value+"<style>"+css.value+"</style>" + "<script>"+js.value+"</script>")
        code.close();
    }
}
compile();


const countE2 = document.getElementById('counts');
updateVisitCount();
function updateVisitCount() {
	fetch('https://api.countapi.xyz/hit/codeplusplus/visits')
	.then(res => res.json())
	.then(res => {
		countE2.innerHTML = res.value;
	})
}








