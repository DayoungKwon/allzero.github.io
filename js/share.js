function setShare(point) {
  const shareImage =
    "https://allzero-kwon.github.io/zinro/image/shareimage.png";
  const shareURL =
    "https://allzero-kwon.github.io/zinro/result.html?" + point;
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
  location.href = "https://allzero-kwon.github.io/zinro/";
}
