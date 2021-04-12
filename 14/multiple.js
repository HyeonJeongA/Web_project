
var number = prompt("숫자를 입력하시오.");


if(number % 4 == 0){
    document.write("<h2>" + number + "는 4의 배수입니다.</h2>");
} else{
    document.write("<h2>" + number + "는 4의 배수가 아닙니다.</h2>");
}