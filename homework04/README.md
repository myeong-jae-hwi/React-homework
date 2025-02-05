# 과제 (UI구현)

## 장바구니 UI를 구현하라.

<img src="https://github.com/user-attachments/assets/2137295b-6141-4fa7-9af2-6070521b7ce4" width="15" height="15">

[시안 피그마 파일](<https://www.figma.com/design/E0a7DevcjkSo0u7T9d3y1e/Cart-(Copy)?node-id=1-994&p=f&t=Ug5EYDBu5KoTmL2K-0>)

### 📁 파일 구조

```bash
coponents
    │
    ├── Atom
    │   ├── CountButton
    │   ├── Footer
    │   ├── Header
    │   └── ProductProfile
    │
    ├── Molecule
    │   └── ProductList
    │
    ├── Organism
    │   └── Cart

```

### 🚨 접근성

#### Login Form

- 모든 요소를 `시맨틱태그` 를 이용해 접근 가능하도록 구성
- `button` 요소를 이용해 키보드 및 마우스 접근이 가능하도록 구현

문제점

- `h1` 요소 다음 `h3` 가 나와 내림차순 문제 발생 (문제 해결 ✅)

**접근성 결과화면**

![Image](https://github.com/user-attachments/assets/a9d0fa40-1de9-402b-a8dc-6b1d9bccf6d2)

### 🔥 반응형

최소 크기를 320px로 지정해 레이아웃이 깨지지 않도록 설정
![alt text](https://github.com/user-attachments/assets/3ac3adc2-e153-4e0e-ad64-063eaeda3494)

### 💻 최종 결과

![alt text](https://github.com/user-attachments/assets/b0d6f91c-efd4-49d3-aaf2-2808e8ef396c)

### 💬 회고

> 이번 과제를 진행하며 `상태 관리 전략`에 대해 다시 한 번 공부해 볼 수 있었다.
> 기존에는 버튼 컴포넌트에서 개수를 직접 관리하며, 개수에 따라 버튼을 비활성화하는 방식으로 구현했다. 하지만 총 금액을 Footer에 전달해야 하는 상황이 발생했다.

> 이를 해결하기 위해 `구독 패턴`을 사용하여 `ProductList`에서 상태를 관리하도록 변경했다.
> 즉, `ProductList`가 총 금액을 상태로 가지도록 만들고, `CountButton`에서 개수가 변경될 때 부모에게 변경 사항을 전달하도록 했다.

> 이렇게 함으로써 상품의 개수와 가격에 따라 총 금액이 동적으로 업데이트되며, Footer에서 이를 실시간으로 반영할 수 있게 되었다.
>
> 그리고 Footer컴포넌트를 `Molecule`에 넣을지 `Organism`에 넣어야 할 지에 대한 고민도 했다.
>
> 온전히 컴포넌트를 분리하기 위해서는 `Organism`에 넣는게 맞다고 생각했지만, 상태를 거기까지 끌어올리기는 싫었고 비효율적이라는 생각이 들어 `Molecule`에 넣었다.
>
> 마지막으로 이 과제를 통해 리액트의 여러 상태관리 방법을 공부할 수 있는 기회가 되었던 것 같다. 다음에는 `context` 나`zustant`를 이용해 드릴링이 일어나지 않는 UI를 만들어 보려고 한다.
