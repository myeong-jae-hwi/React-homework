# 과제 (UI구현)

## 쿠팡의 로그인 폼과 회원가입 폼을 구현하라.

<img src="https://github.com/user-attachments/assets/2137295b-6141-4fa7-9af2-6070521b7ce4" width="15" height="15">

[시안 피그마 파일](<https://www.figma.com/design/ZK7vnLLZdCrQNOD3WmOUBq/SignIn-%E2%8C%81-Coupang-(Copy)?node-id=8-151&p=f&t=2B3Co4vShR8H83ax-0>)

### 📁 파일 구조

```bash
coponents
    │
    ├── Atom
    │   ├── BaseButton
    │   ├── InputComponents
    │   └── index
    │
    ├── Molecule
    │   ├── InputForm
    │   ├── CheckboxForm
    │   ├── SignUpCheck
    │   ├── SignUpForm
    │   └── index
    │
    ├── Organism
    │   ├── SignInForm
    │   ├── SignUpForm
    │   └── index

```

### 🚨 접근성

#### Login Form

- 모든 요소를 `시맨틱태그` 를 이용해 접근 가능하도록 구성
- `h1`, `h2` 요소를 이용해 현재 쿠팡의 로그인 페이지라는 정보를 제공

문제점

- 요소간의 `색상 대비` 관련 문제 발생 (SignUp, SignIn)

**접근성 결과화면**

![Image](https://github.com/user-attachments/assets/0c927c59-d35d-4236-8d54-bfd4b07a95a0)

![Image](https://github.com/user-attachments/assets/4621eead-293c-4a75-a2dc-99cd49672477)

### 🤩 성능

- Vite의 `플러그인`을 이용해 부족한 성능을 개선
- 개선 전 / 후 차이 (SignIn)

  <p align="center">
  <img src="https://github.com/user-attachments/assets/c50c4288-b038-46bb-87d4-ea823e44fe1a"  width="32%">  
  <img src="https://github.com/user-attachments/assets/6bee77aa-fbe8-4e20-aa2e-6ee04957878c"  width="30%">    
  </p>

### 💻 최종 결과

![alt text](https://github.com/user-attachments/assets/54f159e9-a14d-42b8-93bb-288f48f2fa5a)

### 💬 회고

> 이번 과제를 진행하며 가장 신경 쓴 부분은 `컴포넌트`를 어떻게 분리할 것인지에 대한 고민이었다.
>
> 이전에 바닐라 프로젝트를 진행하며 컴포넌트를 페이지별로 마구 만들었다가 나중에는 어느 폴더에 어떤 파일이 있는지도 헷갈릴 지경에 이르렀다.
>
> 그래서 그 때 처음으로 `아토믹` 디자인 패턴을 적용해보았고, 이전보다는 확실히 프로젝트를 깔끔하게 유지할 수 있었던 기억이 있다.
>
> 이번에는 처음부터 아토믹 디자인을 이용해 컴포넌트를 분리하고 원자, 분자, 유기체 순서로 코드를 작성해 보았다.
>
> 이 과정에서 각각의 역할을 명확히 정리할 수 있었고, 잘못된 코드를 고치는데에도 큰 어려움 없이 수정할 수 있어서 좋았다.
>
> 또, 상태 관리를 어떻게 해야할지에 대한 고민도 있었다. 수업시간에 원자 단위의 컴포넌트에 상태를 부여한다면 관리할 상태가 너무 많아져 처리하기 어렵다는 이야기를 들었었다.
>
> 그래서 폼 단위의 단계에서 각각의 상태를 관리할 수 있도록 만들었고 회원가입 같은 경우에는 모두 체크박스 폼에서 상태를 받아 `모두 체크` 기능을 만들었다.
>
> 회원가입 폼을 만들며 두 개의 폼요소를 `organism`에서 `Form` 태그로 묶어 사용했다. 이 때 각각의 데이터가 `sumbit`으로 한 번에 전송되는지 확인을 했는데 checkBox의 데이터는 잘 보내지지만 아이디와 비밀번호 같은 데이터는 날아가지 않는것을 확인했다.
>
> 이유는 `input` 컴포넌트에 `name` 속성을 사용하지 않은 것이 문제였다.
>
> 폼 데이터 전송을 하기 위해서는 각 입력 필드에 `name` 속성이 반드시 필요하다.
> 이를 해결하기 위해 InputComponent에서 name을 받을 수 있도록 수정했고,덕분에 FormData를 활용하여 데이터를 정상적으로 수집할 수 있었다.
>
> 이 과정에서 또 하나 배운 점은, 컴포넌트를 재사용할 때 반드시 기본적인 `HTML` 폼 동작을 고려해야 한다는 점이다. 단순히 UI적인 부분만 신경 쓰는 것이 아니라, 실제로 데이터를 어떻게 처리할 것인지까지 생각해야 한다는 것을 다시금 깨달았다.
>
> 앞으로는 컴포넌트를 만들 때 단순한 입력 필드라도, 폼의 특성을 고려하여 설계하는 습관을 들여야겠다.
> 이번 경험을 통해 아토믹 디자인 패턴을 적용하면서도 폼 데이터의 흐름을 신경 쓰는 것이 중요함을 알게 되었다.
