import "../../Css/Stores.css";
import stores1Image from "/assets/utopya.jpg";
import stores2Image from "/assets/guven.jpg";
import stores3Image from "/assets/cafe.jpg";
import stores4Image from "../../assets/image_1.jpg";
import stores5Image from "../../assets/image_2.jpg";
import stores6Image from "../../assets/image_3.jpg";
import stores7Image from "../../assets/image_1.jpg";
import stores8Image from "../../assets/image_2.jpg";
// Örnek şirket verileri
const stores = [
  {
    id: 1,
    name: "Ütopya Kitap Kırtasiye",
    address: "Tabaklar Mh. Dr. Rüştü Özüt Cd. No:19, Karacabey, Bursa",
    contact: "0224 662 20 19",
    image: stores1Image,
  },
  {
    id: 2,
    name: "Güven Kırtasiye",
    address: "Drama Mh. Mustafa Çorlu Sk. No:10/B, Karacabey, Bursa",
    contact: "0545 947 09 19",
    image: stores2Image,
  },
  {
    id: 3,
    name: "Cafe Atölye",
    address: "Tavşanlı Mh. 89. Sk No:6-B, Karacabey, Bursa",
    contact: "0545 863 80 89",
    image: stores3Image,
  },
];

const Stores = () => {
  return (
    <div className="stores-container">
      <h2>Satış Noktaları</h2>
      <div className="stores-grid">
        {stores.map((store) => (
          <div key={store.id} className="store-card">
            <img src={store.image} alt={store.name} className="store-image" />
            <div className="store-info">
              <h3>{store.name}</h3>
              <p><strong>Adres:</strong> {store.address}</p>
              <p><strong>İletişim:</strong> {store.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
