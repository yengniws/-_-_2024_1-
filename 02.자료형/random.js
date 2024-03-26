//10 이상 20 이하의 정수를 임의로 30개 출력하는 코드를 구현하시오.

let Max = 20,
    Min = 10;

for (let i = 1; i < 31; ++i) {
    let a = Math.floor(Math.random() * (Max - Min + 1) + Min);
    console.log(a);
    console.log(i.length);

}