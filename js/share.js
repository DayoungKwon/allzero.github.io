function setShare(point) {
  const shareImage =
    "https://dayoungkwon.github.io/allzero.github.io/image/shareImage.png";
  const shareURL =
    "https://dayoungkwon.github.io/allzero.github.io//result.html?" + point;
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "SW 진로설계",
      description: "#개발자 #mbti #미랜",
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL,
      },
    },
    buttons: [
      {
        title: "친구 결과 확인하기",
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
    ],
  });
}
function moveto() {
  location.href = "https://dayoungkwon.github.io/allzero.github.io/";
}
