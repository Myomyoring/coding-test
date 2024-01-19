# node.js 메모리 제한으로 파이썬 풀이
import sys
# deque 자료구조를 사용하기 위해 collections 라이브러리에서 deque 불러오기
from collections import deque
# 풍선 수를 받기 위한 input
input = sys.stdin.readline

# 풍선 수(n)를 input으로 받는다.
n = int(input())

# deque = stack, queue 모두 가진 객체 (이럴수가 부럽다) => deque() 객체 내부에 있는 값을 배열 형태로 반환
# enumerate = enumerate(iterable, startIndex?) => enumerate(반복할 개체, 옵션)시작 인덱스)
    # 반복할 개체를 열거하며 반환
# map = map(function, iterable) => map(적용 함수, 적용 값)
    # 적용 값을 값을 적용 할 함수에 적용하고 반환하는데 반환할 형식으로 감싸줘야 함 ex) list(map(int, 적용 값));
# split = js의 split()과 비슷함 문자열을 구분자로 쪼개어 배열로 반환

# 두번때 입력 값을 split으로 구분하여 map으로 정수(int) 형태로 적용 후
# enumerate로 반복하여 반환된 값들을 나열 함
# 반환 된 값을 deque객체로 만들어 q 변수에 할당
q = deque(enumerate(map(int, input().split())))
# 출력 배열 선언
result = []

# q에 담긴 값을 반복
while q:
    # 첫번째 풍선 값과 인덱스를 각각 변수에 할당
    idx, paper = q.popleft()
    # 출력 배열에 풍선 인덱스+1 (0부터 시작하니까 1 더해 줌)를 넣기
    result.append(idx + 1)

# rotate = deque 객체의 값을 이동할 수 있음 (회전)
    # => 인자가 양수면 가장 뒤에 있는 값이 맨 앞으로 이동 (오른쪽 회전), 음수면 맨 앞의 값이 뒤로 이동 함 (왼쪽 회전)

    # 풍선 값이 0보다 작을 경우 앞에서 -(풍선값-1)(결과는 양수) 만큼 오른쪽으로 회전하여 값을 이동 (해당 값이 앞에 있으므로 지정 값이 맨 앞에 오게 됨)
    if paper > 0:
        q.rotate(-(paper - 1))
    # 풍선 값이 0보다 클 경우 왼쪽 회전하여 해당 값을 맨 앞에 오게 함
    elif paper < 0:
        q.rotate(-paper)

# join = 구분자.join(배열) => 배열을 인자로 받아 앞 구분자 기준으로 문자열로 반환
# map으로 result에 담긴 값을 str 형태로 반환 받아 ' '구분자로 합쳐 문자열로 반환받아 print로 출력
print(' '.join(map(str, result)))