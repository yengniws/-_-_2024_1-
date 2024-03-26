//(1) 빈 배열을 만든다.
//(2) Math.random() 메소드를 사용하여, 1 이상 100 이하의 정수 난수를 100개 생성해서, 배열에 채운다.
//(3) 배열에 원소들 중에서 짝수(2의 배수)를 찾아서 모두 제거한다.
//(4) 배열을 출력한다.

let a = [];
for (let i = 0; i < 100; ++i) {
    a.push(Math.floor(Math.random() * 100 + 1));
}
a = a.filter(x => x % 2 !== 0);
console.log(a);