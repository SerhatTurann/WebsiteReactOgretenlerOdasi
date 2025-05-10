import "../../Css/Stores.css";
import stores1Image from "../../assets/image_1.jpg";
import stores2Image from "../../assets/image_2.jpg";
import stores3Image from "../../assets/image_3.jpg";
import stores4Image from "../../assets/image_1.jpg";
import stores5Image from "../../assets/image_2.jpg";
import stores6Image from "../../assets/image_3.jpg";
import stores7Image from "../../assets/image_1.jpg";
import stores8Image from "../../assets/image_2.jpg";
// Örnek şirket verileri
const stores = [
  {
    id: 1,
    name: "Kitap Dünyası",
    description: "Bölgenin en büyük dergi ve kitap satış noktası.",
    address: "İstiklal Caddesi No:45, Beyoğlu, İstanbul",
    contact: "info@kitapdunyasi.com | 0212 123 45 67",
    image: stores1Image,
  },
  {
    id: 2,
    name: "Okuma Köşesi",
    description: "Dergi, gazete ve kitap bulabileceğiniz sıcak bir mekan.",
    address: "Bağdat Caddesi No:12, Kadıköy, İstanbul",
    contact: "info@okumakosesi.com | 0216 987 65 43",
    image: stores2Image,
  },
  {
    id: 3,
    name: "Kültür Kitabevi",
    description: "Yeni çıkan tüm dergileri bulabileceğiniz bir nokta.",
    address: "Atatürk Bulvarı No:33, Çankaya, Ankara",
    contact: "info@kulturkitabevi.com | 0312 345 67 89",
    image: stores3Image,
  },
  {
    id: 4,
    name: "Sanat Durağı",
    description: "Sanat ve edebiyat dergilerinin en geniş koleksiyonu.",
    address: "Konak Mah. No:7, Konak, İzmir",
    contact: "info@sanatduragi.com | 0232 876 54 32",
    image: stores4Image,
  },
  {
    id: 5,
    name: "Haber Noktası",
    description: "Güncel haber ve popüler dergiler için ideal nokta.",
    address: "Beşiktaş Meydanı No:5, Beşiktaş, İstanbul",
    contact: "info@habernoktasi.com | 0212 333 44 55",
    image: stores5Image,
  },
  {
    id: 6,
    name: "Edebiyat Kütüphanesi",
    description: "Edebiyat ve kültür dergilerini bulabileceğiniz adres.",
    address: "Kızılay Cad. No:19, Ankara",
    contact: "info@edebiyatkutuphanesi.com | 0312 987 65 43",
    image: stores6Image,
  },
  {
    id: 7,
    name: "Okur Durağı",
    description: "Kitapseverler için özel olarak seçilmiş yayınlar.",
    address: "Alsancak Mah. No:8, İzmir",
    contact: "info@okurduragi.com | 0232 543 21 09",
    image: stores7Image,
  },
  {
    id: 8,
    name: "Dergi Cenneti",
    description: "Tüm yerli ve yabancı dergilere ulaşabileceğiniz nokta.",
    address: "Mecidiyeköy No:14, Şişli, İstanbul",
    contact: "info@dergicenneti.com | 0212 654 32 10",
    image: stores8Image,
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
              <p>{store.description}</p>
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
