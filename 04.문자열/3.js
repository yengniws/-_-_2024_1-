//위 문제의 문자열에서 공백을 기준으로 문자열을 쪼개서, 문자열 배열을 만들고, 그 배열을 출력하시오.

let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

let b = a.split(" ");

for (let i = 0; i < b.length; ++i) {
    console.log(b[i]);
}