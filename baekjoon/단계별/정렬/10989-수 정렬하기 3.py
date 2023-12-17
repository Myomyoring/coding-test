# node.js 는 사용할 수 없는 문제
# 메모리 제한 때문에 걸러진 듯 하다.

import sys

# 메모리 초과로 input() 사용x
# sort()로 같은 이유로 사용할 수 없음

# 줄 수(N)를 sys.stdin.readline()으로 받는다.
N  = int(sys.stdin.readline())
# 정렬할 각각의 수는 1~10000 범위가 있다.
# 들어올 수 있는 수의 범위만큼 배열 생성 10000 + 1 (0번 index 포함)
arr = [0]*10001

# N개의 줄을 입력 받을 반복문
for _ in range(N):
    num = int(sys.stdin.readline())
    # 해당 숫자의 index에 카운트 값을 배열에 넣기
    arr[num] += 1 

# 배열 크기만큼 반복 할 반복문
# 0회부터 차례대로 돌며 출력하기에 오름차순으로 출력할 수 밖에 없다.
for i in range(10001): 
	# arr[i]에 숫자가 있는 경우에만 출력하기 위한 조건문
    if arr[i] != 0:
    	# 해당 숫자의 카운트 수 만큼 반복하며 출력
        for j in range(arr[i]): 
            print(i)