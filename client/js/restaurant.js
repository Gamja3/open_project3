const locationBtn = document.querySelectorAll(".restaurant_home");
const list1 = document.getElementById("list-1")
const list2 = document.getElementById("list-2")
const list3 = document.getElementById("list-3")
const list4 = document.getElementById("list-4")
const list5 = document.getElementById("list-5")
const home3 = document.querySelectorAll(".restaurant_home_3");



  function changeBtn(target) {
    for (let i = 0; i < home3.length; i++) {
      if (target === i) {
        home3[i].classList.add("pick-on2");
        
      } else {
        home3[i].classList.remove("pick-on2");
      }
    }
  }

  const 골목할매집 = [35.5025850279554, 129.36855929805392]
  const 대풍한식집 = [35.50207632829761, 129.3690754616354]
  const 진향한식 = [35.501860853896474, 129.36946168206828]
  const 고래고기원조할매집 = [35.50177313604242, 129.36955263544124]
  const 세창식당 = [35.5016802562588, 129.36974454139875]


var markerSrcBlue = './client/file/markerStar.png', // 마커이미지의 주소입니다
imageSize = new kakao.maps.Size(24, 35); // 마커이미지의 크기입니다

var markerSrcRed = './client/file/markerStarred.png';



// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
var marker_blue = new kakao.maps.MarkerImage(markerSrcBlue, imageSize);
var marker_red = new kakao.maps.MarkerImage(markerSrcRed, imageSize);



var mapContainer = document.getElementById('location-map'), // 지도를 표시할 div 
mapOption = {
    center: new kakao.maps.LatLng(골목할매집[0],골목할매집[1]), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
let markerPosition0 = new kakao.maps.LatLng( 35.5025850279554, 129.36855929805392); // 골목할매집
let markerPosition1 = new kakao.maps.LatLng(35.50207632829761, 129.3690754616354); // 대풍한식집
let markerPosition2 = new kakao.maps.LatLng(35.501860853896474, 129.36946168206828); // 진향한식
let markerPosition3 = new kakao.maps.LatLng(35.50177313604242, 129.36955263544124); // 고래고기원조할매집
let markerPosition4 = new kakao.maps.LatLng(35.5016802562588, 129.36974454139875); // 세창식당




let markerChange = false;

let $$markerPosition = [markerPosition0, markerPosition1, markerPosition2, markerPosition3, markerPosition4
]

// 마커를 생성합니다
let marker0, marker1, marker2, marker3, marker4
let $$marker = [marker0, marker1, marker2, marker3, marker4
]

for (let i = 0; i < $$marker.length; i++) {
$$marker[i] = new kakao.maps.Marker({
    position: $$markerPosition[i],
    image: marker_blue
});
}

// 마커가 지도 위에 표시되도록 설정합니다
for (let i = 0; i < $$marker.length; i++) {
$$marker[i].setMap(map);
}

// 마커 클릭 이벤트

for (let i = 0; i < $$marker.length; i++) {
kakao.maps.event.addListener($$marker[i], 'click', function () {
    // 마커 리셋
    markerReset()
    // 클릭 이미지 변경
    $$marker[i].setImage(marker_red);
    // 중심좌표 이동
    map.setCenter($$markerPosition[i])
})
}

// 마커 리셋
function markerReset() {
for (let i = 0; i < $$marker.length; i++) {
    $$marker[i].setImage(marker_blue);
}
}


const panTo = (latitude, longitude) => {
  const moveLatLon = new kakao.maps.LatLng(latitude, longitude);
  map.panTo(moveLatLon);
};






list1.addEventListener("click", function () {
    changeBtn(0);
    markerReset()
    $$marker[0].setImage(marker_red);
    panTo(골목할매집[0],골목할매집[1]);
  });

  list2.addEventListener("click", function () {
    changeBtn(1);
    markerReset()
    $$marker[1].setImage(marker_red);
    panTo(대풍한식집[0],대풍한식집[1]);
  });
  list3.addEventListener("click", function () {
    changeBtn(2);
    markerReset()
    $$marker[2].setImage(marker_red);
    panTo(진향한식[0],진향한식[1]);
  });
  list4.addEventListener("click", function () {
    changeBtn(3);
    markerReset()
    $$marker[3].setImage(marker_red);
    panTo(고래고기원조할매집[0],고래고기원조할매집[1]);
  });

  list5.addEventListener("click", function () {
    changeBtn(4);
    markerReset()
    $$marker[4].setImage(marker_red);
    panTo(세창식당[0],세창식당[1]);
  });
