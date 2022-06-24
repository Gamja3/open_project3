let $img1 = document.querySelector('#img1');
let $img2 = document.getElementById('img2');
let $img3 = document.getElementById('img3');
let $img4 = document.getElementById('img4');
let $img5 = document.getElementById('img5');
let $img6 = document.getElementById('img6');
let $img7 = document.getElementById('img7');
let $img8 = document.getElementById('img8');
let $img9 = document.getElementById('img9');
let $img10 = document.getElementById('img10');
let $img11 = document.getElementById('img11');
let $img12 = document.getElementById('img12');

const dbValue = document.getElementById("db-value").value;
const dbArray = dbValue.split(",");


function chekcingDone() {
    for (let i = 0; i < dbArray.length; i++) {
    
    if (dbArray[i] === "qr00") {
        $img1.style.background = 'url("/client/images/stamp/stamp00-clear.png")'
        $img1.style.backgroundSize = 'cover'
        $img1.style.backgroundRepaet = 'no-repeat'  
    } else if (dbArray[i] === "qr01") {
        $img2.style.background = 'url("/client/images/stamp/stamp01-clear.png")'
        $img2.style.backgroundSize = 'cover'
        $img2.style.backgroundRepaet = 'no-repeat'   
    } else if (dbArray[i] === "qr02") {
        $img3.style.background = 'url("/client/images/stamp/stamp02-clear.png")'
        $img3.style.backgroundSize = 'cover'
        $img3.style.backgroundRepaet = 'no-repeat'  
    } else if (dbArray[i] === "qr03") {
        $img4.style.background = 'url("/client/images/stamp/stamp03-clear.png")'
        $img4.style.backgroundSize = 'cover'
        $img4.style.backgroundRepaet = 'no-repeat'  
    } else if (dbArray[i] === "qr04") {
        $img5.style.background = 'url("/client/images/stamp/stamp04-clear.png")'
        $img5.style.backgroundSize = 'cover'
        $img5.style.backgroundRepaet = 'no-repeat'  
    } else if (dbArray[i] === "qr05") {
        $img6.style.background = 'url("/client/images/stamp/stamp05-clear.png")'
        $img6.style.backgroundSize = 'cover'
        $img6.style.backgroundRepaet = 'no-repeat'
    } else if (dbArray[i] === "qr06") {
        $img7.style.background = 'url("/client/images/stamp/stamp06-clear.png")'
        $img7.style.backgroundSize = 'cover'
        $img7.style.backgroundRepaet = 'no-repeat'  
    } else if (dbArray[i] === "qr07") {
        $img8.style.background = 'url("/client/images/stamp/stamp07-clear.png")'
        $img8.style.backgroundSize = 'cover'
        $img8.style.backgroundRepaet = 'no-repeat' 
    } else if (dbArray[i] === "qr08") {
        $img9.style.background = 'url("/client/images/stamp/stamp08-clear.png")'
        $img9.style.backgroundSize = 'cover'
        $img9.style.backgroundRepaet = 'no-repeat'
    } else if (dbArray[i] === "qr09") {
        $img10.style.background = 'url("/client/images/stamp/stamp09-clear.png")'
        $img10.style.backgroundSize = 'cover'
        $img10.style.backgroundRepaet = 'no-repeat'  
    } else if (dbArray[i] === "qr10") {
        $img11.style.background = 'url("/client/images/stamp/stamp10-clear.png")'
        $img11.style.backgroundSize = 'cover'
        $img11.style.backgroundRepaet = 'no-repeat'
    } else if (dbArray[i] === "qr11") {
        $img12.style.background = 'url("/client/images/stamp/stamp11-clear.png")'
        $img12.style.backgroundSize = 'cover'
        $img12.style.backgroundRepaet = 'no-repeat'  
    }
        if (dbArray.length === 12) {
            console.log("완료")
            console.log(dbArray.length)
            console.log(dbArray)
            complete()
    }
  }
}
chekcingDone();


function complete() {
    Swal.fire(
        '스탬프 투어 완료!',
        '모든 스탬프를 획득하였습니다. 상품 교환권은 입력한 전화번호로 발송되었습니다.',
        'success'
      )
}
