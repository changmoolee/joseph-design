# joseph-design

## 배포 url
https://joseph-design.netlify.app/

## 개요

## 자세한 실행 방법
<br>
1. git clone 명령어를 통해 로컬에 git 저장소를 복제합니다.
<pre><code>git clone https://github.com/changmoolee/joseph-design.git</code></pre><br>
2. 다운 받은 폴더로 이동합니다.
<pre><code>cd joseph-design</code></pre><br>
3. npm install 명령어를 입력하여 모듈들을 다운로드합니다.
<pre><code>npm install</code></pre><br>
4. npm start 명령어를 입력하여 실행합니다.
<pre><code>npm start</code></pre><br><br>

## 기능
### Modal 기능<br>
![image](https://user-images.githubusercontent.com/84559872/166252766-4af5bcde-84df-4375-820a-ea4ceae11d10.png)<br>
버튼 클릭 시 모달창이 생성됩니다. close 아이콘을 누를 시 모달은 사라지게 됩니다.<br><br>
해당 Modal 기능을 사용하기 위해서는, 예시 코드를 참조하여 props로 open에는 Modal의 구현 유무 boolean값을,<br>
onClose에는 Modal을 소거할 setState(false)를 내려주어야 합니다. <br>
### Tabs 기능<br>
![tabs](https://user-images.githubusercontent.com/84559872/166253828-35796ab5-dfbf-43c9-ad7e-aab6b4a461fe.gif)<br>
마우스로 Tab을 hover시 Tab의 border-bottom이 형성되며 텍스트는 opacity가 1이 되어 선명해집니다.<br>
클릭 시, 클릭한 Tab의 border-bottom이 형성되고 텍스트 opacity가 1로 유지됩니다.<br><br>
각 Tab들에 이름을 부여하기 위해서는 props로 tabs에 문자열 배열로 내려주어야 합니다.<br><br>
### Tag 기능<br>
![tag](https://user-images.githubusercontent.com/84559872/166254655-9496d01c-facc-488b-a50d-11323607685b.gif)<br>
input에 텍스트를 입력하고 enter키를 누르면 tag가 생성됩니다.<br>
생성된 tag의 close 아이콘을 누르면 해당 tag가 삭제됩니다.<br><br>
해당 Tag 기능을 이용하기 위해서는 props로 tags에는 빈 배열 상태를, setTags에는 tags의 상태를 조정하는 setState를 내려주어야 합니다.<br><br>
### Toggle 기능
![toggle](https://user-images.githubusercontent.com/84559872/166391898-bfc2a417-bae9-4604-893e-6b60b50e4ae0.gif)<br>
Toggle을 클릭 시, 내부의 ball이 오른쪽으로 이동합니다.<br>
Toggle을 다시 클릭할 경우, ball이 다시 왼쪽으로 이동합니다.<br><br>
Toggle의 크기를 조절하려면, props로 height에 number값을 내려주면 됩니다. 비율은 유지되며, 기준 단위는 px입니다.<br><br>
### AutoComplete 기능
![AutoComplete](https://user-images.githubusercontent.com/84559872/166392040-08003b52-22fc-4eef-8d02-77732e841107.gif)<br>
input창에 텍스트를 입력하면, 동일한 자모음 혹은 알파벳을 가진 후보 text들이 제안됩니다.<br>
후보 text들 중 하나를 클릭하면 해당 텍스트가 input창의 value가 됩니다.<br>
오른쪽의 close 아이콘을 누르면 input창의 value가 사라집니다.<br><br>
AutoComplete에서 검색 시 나올 데이터들은 props로 items에 문자열 배열 형태로 내려주어야 합니다.<br><br>
### DropDown 기능
![DropDown](https://user-images.githubusercontent.com/84559872/167998996-d17d3611-e921-4e95-85ae-842b0df869ed.gif)<br>
마우스의 hover 유무에 따라 DropDown 기능이 활성화 됩니다.<br>
부모 컴포넌트의 width, height 속성으로 크기를, display 속성으로 구조를 결정할 수 있습니다.<br><br>
props는 총 3개로 title[문자열], dropDownItems[문자열 배열], dropDownWidth[숫자]가 있습니다.<br>
title은 tab부분의 이름, dropDownItems는 DropDown에 들어갈 item 이름들, dropDownWidth는 DropDown의 넒이를 결정합니다.<br><br>
### Drawer 기능
![Drawer](https://user-images.githubusercontent.com/84559872/168035517-eaf83662-58c2-4fa1-900a-b35531c0eab6.gif)<br>
뱡향 이름을 가진 버튼을 누르면, 해당 방향에서 Drawer가 구현됩니다.<br><br>
props로 title[문자열], height[숫자], width[숫자]가 있습니다.<br>
title은 버튼의 이름을 수정할 수 있고, height, width은 높이 및 넒이를 px단위로 지정할 수 있습니다.<br>
또한, 해당 Drawer 내에 자식 컴포넌트를 내려 줄 수 있는 children이 존재합니다.<br>
Drawer에 나올 컨텐츠를 직접 제작하여 자식컴포넌트로 넣어줄 수 있습니다.<br><br>
### Toast 기능
![Toast](https://user-images.githubusercontent.com/84559872/168588538-9b711b55-dc8e-498c-84ca-2907b21ec410.gif)<br>
slideToast 버튼을 누르면, 우측 아래에서 Toast가 미끄러지면서 구현됩니다.<br>
positionedToast 버튼을 누르면, 중앙 아래 부분에서 Toast가 구현됩니다.<br><br>
props로 description[문자열], color[문자열], width[숫자], open[state], onClose[setState]가 존재합니다.<br>
description는 Toast의 내용을 수정할 수 있고, color는 Toast의 색을, width는 Toast의 크기를 조절할 수 있습니다.<br>
해당 Toast 기능을 이용하기 위해서는 open props에 Toast 구현 유무를 정하는 boolean 상태값을,<br>
onClose에는 해당 Toast를 소거할 setState(false)를 내려주어야 합니다.<br><br>

