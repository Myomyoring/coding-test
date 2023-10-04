# coding-test

## BAEKJOON 코딩 테스트

풀이 언어 : node.js (JavaScript)

### 백준에서의 입력, 출력

- 입력 : fs 모듈 또는 readline으로 받아야 한다.
  [예제 코드 (백준 1000번 문제 )](https://help.acmicpc.net/language/info){:target="\_blank"}
- 출력 : <code>console.log()</code>

### fs 모듈로 입력값 받기

[참고사이트](https://velog.io/@imysh578/%EB%B0%B1%EC%A4%80-NodeJsJavascript-%EC%9E%85%EB%A0%A5%EA%B0%92-%EB%B0%9B%EB%8A%94-%EB%B0%A9%EB%B2%95){:target="\_blank"}

1. 입력값이 한 개일 때

<mark>ex)100</mark>

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
```

2.  한 줄에 공백으로 구분된 입력값이 여러 개일 때

<mark>ex)100 101 102 103</mark>

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
```

3. 입력값이 여러 줄일 때

<mark>ex)100 100<br/>
100 100<br/>
100</mark>

```javascript
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```

4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때

<mark>ex)3<br/>
1 1 1</mark>

```javascript
const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ");
```

5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때

<mark>ex)5<br/>
101<br/>
12<br/>
13<br/>
11<br/>
1<br/>
</mark>

```javascript
const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
```
