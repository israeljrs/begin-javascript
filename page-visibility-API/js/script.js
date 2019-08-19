var hidden = "hidden";
var visibilityState = "visibilityState";
var visibilityChange = "visibilitychange";
 
for (var prefix in ["moz", "webkit", "ms"]) {
    if (document[prefix + "Hidden"]) {
        hidden = prefix + "Hidden";
        visibilityState = prefix + "VisibilityState";
        visibilityChange = prefix + "visibilitychange";
    }
}
 
console.log(document[hidden], document[visibilityState]);
 
var wait;
var second = 0;
 
document.addEventListener(visibilityChange, function () {
    if (wait) {
        clearInterval(wait);
        wait = undefined;
        second = 0;
    } else {
        wait = setInterval(function () {
            document.title = second + ": Page Visibility API";
 
            if (second > 5) {
                $("#modal").modal("show");
            }
 
            second++;
        }, 1000);
    }
});