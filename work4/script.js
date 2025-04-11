// const tagElements = document.getElementsByTagName("div");
// const classElements = document.getElementsByClassName("hello-class");
// const idElements = document.getElementById("hello-id");

// console.log(tagElements);
// console.log(classElements);
// console.log(idElements);

// // div 요소 모두 찾기
// const divElements = document.querySelectorAll("div");
// // div 요소 중 최초 하나 찾기
// const divElement = document.querySelector("div");
// console.log(divElements);
// console.log(divElement);

// // container 클래스의 li 자손 찾기
// const liList1 = document.querySelectorAll(".container li");
// console.log(liList1);

// // divElement 내의 li 요소 찾기
// const liList2 = divElement.querySelectorAll("li");
// console.log(liList2);

// // divElements[0] 내의 li 요소 찾기
// const liList3 = divElements[0].querySelectorAll("li");
// console.log(liList3);

// // 아이디가 three인 요소 찾기
// const three_1 = document.querySelector("#three");
// console.log(three_1);

// // 아이디가 three인 요소 찾기, NodeList로 리턴 주의
// const three_2 = document.querySelectorAll("#three");
// console.log(three_2);
// console.log(three_2[0]);
// console.log(three_2[0].innerText);

// // 요소 정보 보기
// console.dir(three_1);

// const newDiv = document.createElement("div");
// newDiv.innerText = "새로 생성된 요소입니다.";
// document.body.appendChild(newDiv);

// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//     box.style.width = "200px";
//     box.style.height = "200px";
//     box.style.backgroundColor = "lightgray";
//     box.style.border = "1px solid black";
//     box.style.display = "flex";
//     box.style.justifyContent = "center";
//     box.style.alignItems = "center";
// });

// const redBox = document.querySelector("#red-box");
// redBox.style.backgroundColor = "red";

// const blueBox = document.querySelector("#blue-box");
// blueBox.innerText = "Yello Box";
// blueBox.style.backgroundColor = "yellow";
// blueBox.innerHTML = "<div style='color: green'>Green Text</div>"

// const btn = document.querySelector("#btn");
// btn.onClick = () => {
//     console.log("첫 번째 리스너");
// };
// btn.onClick = () => {
//     console.log("두 번재 리스너");
// }
// btn.addEventListener("click", () => {
//     console.log("첫 번째 리스너");
// })
// btn.addEventListener("click", () => {
//     console.log("두 번째 리스너");
// })

// const handleClick1 = () => {
//     console.log("첫 번째 함수");
// }
// const handleClick2 = () => {
//     console.log("두 번째 함수");
// }

// btn.addEventListener("click", handleClick1);
// btn.addEventListener("click", handleClick2);

// btn.removeEventListener("click", handleClick1);

let count = 0;

const countBtn = document.querySelector("#countBtn");
const resetBtn = document.querySelector("#resetBtn");

countBtn.innerText = count;

countBtn.addEventListener("click", () => {
    countBtn.innerText = ++count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countBtn.innerText = count;
});

const colorSelect = document.querySelector("#colorSelect");
const colorBox = document.querySelector("#colorBox");

colorBox.style.width = "100px";
colorBox.style.height = "100px";
colorBox.style.backgroundColor = "gray";
colorBox.style.marginTop = "10px";

colorSelect.addEventListener("change", (e) => {
    console.log(e);
    colorBox.style.backgroundColor = e.target.value;
});

const nameForm = document.querySelector("#nameForm");
const nameInput = document.querySelector("#nameInput");
const submitResult = document.querySelector("#submitResult");

nameForm.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();
    submitResult.innerText = `안녕하세요. ${nameInput.value}님!`;
});