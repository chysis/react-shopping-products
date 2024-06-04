# 컴포넌트

- [x]헤더
  - Logo 버튼(홈 버튼)
  - 장바구니 버튼
    - 장바구니에 담긴 상품 종류 개수
- [x] DropDown
  - 카테고리
  - 정렬 필터
- [x] 무한 스크롤
- [x] ProductItem

  - [x] 상품 이미지(imageUrl)
  - [x] 상품 이름(name)
  - [x] 상품 가격(price)
  - [x] 담기 버튼
  - 버튼을 누르면 POST /cart-items BODY: {productId, quantity} 요청 보내기
  - 버튼을 다시 누르면 DELETE /cart-items/{id}
  - Header의 장바구니 버튼에선 수량 계산

- [x] API Error 토스트 모달
- [x] loading spinner

## 모킹

- [x] GET /products 상품 목록 조회
  - category
  - page
  - size
  - sort
    => useEffect의 의존성 배열에 상태를 추가하여 refetch를 구현

### 테스트 케이스

- [x] API 요청이 실패했을 때 error 상태를 테스트 한다.
- [x] 정렬 기준(sort)

  - 정렬 기준의 초깃값은 'desc'이다.
  - 'desc'가 들어오면 '높은 가격 순'으로 정렬되어야 한다.
  - 'asc'가 들어오면 '낮은 가격 순'으로 정렬되어야 한다.

- [x] 카테고리(category)
  - 카테고리의 초깃값은 ''이다.
  - ''가 들어오면 모든 아이템을 반환한다.
  - 'fashion'이 들어오면 카테고리가 fashion인 아이템을 반환한다.
  - 'beverage'가 들어오면 카테고리가 beverage인 아이템을 반환한다.
  - 'electronics'가 들어오면 카테고리가 electronics인 아이템을 반환한다.
  - 'kitchen'이 들어오면 카테고리가 kitchen인 아이템을 반환한다.
  - 'fitness'가 들어오면 카테고리가 fitness인 아이템을 반환한다.
  - 'books'가 들어오면 카테고리가 books인 아이템을 반환한다.
