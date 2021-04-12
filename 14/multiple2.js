document.write("<h1>3의 배수 찾기<br><br><//h3>");

var userNum = parseInt(prompt("몇까지 3의 배수를 찾을까요?", "100"));
var i;
var count = 0;

for (i = 1; i <= userNum; i++) {
    if (i % 3 == 0) {
        count++;
        document.write(i + ", ");
    }
}
document.write("<p>" + userNum + "까지 3의 배수의 갯수 : " + count  + "</p>");