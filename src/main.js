import Globe from 'globe.gl';

// 1. Tạo khung chứa quả địa cầu tràn màn hình
const container = document.querySelector('#app');
container.style.width = '100vw';
container.style.height = '100vh';
container.style.margin = '0';
container.style.overflow = 'hidden';

// 2. Dữ liệu các điểm đến kèm theo thông tin chi tiết (description)
const gData = [
  { 
    name: 'Hà Nội, Việt Nam', 
    lat: 21.0285, 
    lng: 105.8542, 
    size: 0.6, 
    color: '#00ffcc',
    description: 'Thủ đô của Việt Nam với hơn 1000 năm văn hiến.' 
  },
  { 
    name: 'Tokyo, Nhật Bản', 
    lat: 35.6762, 
    lng: 139.6503, 
    size: 0.6, 
    color: '#ff0055',
    description: 'Thành phố đông dân và hiện đại bậc nhất thế giới.' 
  },
  { 
    name: 'New York, Mỹ', 
    lat: 40.7128, 
    lng: -74.0060, 
    size: 0.6, 
    color: '#ffcc00',
    description: 'Trung tâm tài chính và kinh tế lớn của thế giới.' 
  }
];

// 3. Khởi tạo Quả địa cầu 3D kèm sự kiện bấm vào cột mốc
const myGlobe = Globe()(container)
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
  .pointsData(gData)
  .pointAltitude('size')
  .pointColor('color')
  .pointLabel('name') // Hiển thị tên khi rê chuột vào
  .onPointClick(point => {
    // Sự kiện khi bạn NHẤP CHUỘT vào cột mốc
    alert(`📌 Địa điểm: ${point.name}\n\nℹ️ Thông tin: ${point.description}`);
  });

// 4. Tự động xoay địa cầu
myGlobe.controls().autoRotate = true;
myGlobe.controls().autoRotateSpeed = 0.8;
