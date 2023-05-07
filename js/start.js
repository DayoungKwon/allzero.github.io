const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
let pos = 12;
const endPoint = 12;
const select = [0, 0, 0, 0];
//E0 I1 S2 N3 T4 F5 J6 P7
var i = 0;
//AGE SEX 1 2 3 4 5 6 7
function calResult() {
  console.log(select);
  /*select.sort();*/

  if (select[0] == Math.max(select[0], select[1])) {
    var result1 = 0;
  } else {
    var result1 = 1;
  }

  if (select[2] == Math.max(select[2], select[3])) {
    var result2 = 2;
  } else {
    var result2 = 3;
  }

  var str_res = result1.toString() + result2.toString();
  return str_res;
}

function setResult() {
  let point = calResult();
  if (point == "02") {
    pos = 0;
  } else if (point == "12") {
    pos = 1;
  } else if (point == "03") {
    pos = 2;
  } else if (point == "13") {
    pos = 3;
  }
  sessionStorage.setItem("pos", pos); // 저장

  location.href =
    window.location.protocol +
    "//" +
    window.location.host +
    "/result.html?" +
    point;
}

function goResult() {
  setResult();
}

function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answer.classList.add("my-3");
  answer.classList.add("py-3");
  answer.classList.add("mx-auto");
  answer.classList.add("fadeIn");

  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.WebkitAnimation = "fadeOut 0.5s";
        children[i].style.animation = "fadeOut 0.5s";
      }
      setTimeout(() => {
        var target = qnaList[qIdx].a[idx].type;

        for (let i = 0; i < target.length; i++) {
          select[target[i]] += 1;
        }
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }

  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qIdx + 1) + "%";
}

function begin() {
  ㄹ;
  sessionStorage.clear();
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
      var children = document.querySelectorAll(".answerList");
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
