//"When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
//위 문자열에서 모음(aeiou)들의 위치를 출력하는 코드를 구현하시오.

let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let b = "aeiou";

for (let i = 0; i < a.length; ++i) {
    if (b.includes(a[i])) {
        console.log(`${i}`);
    }
}