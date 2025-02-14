// 추천 사이트 : https://codepen.io/
// 유튜브 : https://www.youtube.com/watch?v=cpEeqACsF_Q
// https://codepen.io/dissimulate/pen/nYQrNP
function bottomMsg(msg, type) {
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 2000,
  });
  Toast.fire({ title: msg, icon: type });
}

function doFetch(type) {
  fetch("/qr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: type,
    }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.success) {
        bottomMsg(type, "success");
      } else {
        bottomMsg("인증실패", "error");
      }
      setTimeout(startScan, 3000);
    });
    window.location.href="/stamp"
}

function startScan() {
  let video = document.createElement("video");
  let canvasElement = document.getElementById("canvas");
  let canvas = canvasElement.getContext("2d");

  function drawLine(begin, end, color) {
    canvas.beginPath();
    canvas.moveTo(begin.x, begin.y);
    canvas.lineTo(end.x, end.y);
    canvas.lineWidth = 4;
    canvas.strokeStyle = color;
    canvas.stroke();
  }

  // 카메라 사용시
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      video.srcObject = stream;
      video.setAttribute("playsinline", true); // iOS 사용시 전체 화면을 사용하지 않음을 전달
      video.play();
      requestAnimationFrame(tick);
    });

  function tick() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      // 읽어들이는 비디오 화면의 크기
      //canvasElement.height = video.videoHeight;
      //canvasElement.width = video.videoWidth;
      // canvasElement.height = 400;
      // canvasElement.width = 400;
      canvasElement.height = window.innerHeight;
      canvasElement.width = window.innerWidth;
      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
      let imageData = canvas.getImageData(
        0,
        0,
        canvasElement.width,
        canvasElement.height
      );
      var code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: "dontInvert",
      });
      const waitText = document.querySelector(".wait-text");
      waitText.classList.add("hidden");

      // QR코드 인식에 성공한 경우
      if (code) {
        // 인식한 QR코드의 영역을 감싸는 사용자에게 보여지는 테두리 생성
        drawLine(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          "#FF0000"
        );
        drawLine(
          code.location.topRightCorner,
          code.location.bottomRightCorner,
          "#FF0000"
        );
        drawLine(
          code.location.bottomRightCorner,
          code.location.bottomLeftCorner,
          "#FF0000"
        );
        drawLine(
          code.location.bottomLeftCorner,
          code.location.topLeftCorner,
          "#FF0000"
        );
        // QR코드 메시지 출력
        return doFetch(code.data);
      }
    }
    requestAnimationFrame(tick);
  }
}
startScan();
