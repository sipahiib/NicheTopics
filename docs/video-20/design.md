# Video 20 — Tasarım rehberi

Tarih: 2 Ekim 2026. Durum: kullanıcı tarafından onaylanan demodan tam video üretildi (2:50.33).

## Tasarım amacı

“1 Yıl Sonra Bu Videoyu İzlediğinde Ne Kadar Eskimiş Olacak?” konusunu kod yazmayan teknoloji meraklılarına anlatan 170 saniyelik bir mini belgesel. Ana düşünce: Araç isimleri değişir; değerlendirme alışkanlıkları daha uzun ömürlüdür. İzleyici hem değişimi görmeli hem de takip baskısına karşı uygulanabilir bir yöntem edinmeli.

## Sanat yönetimi ve tersine mühendislik

Profesyonel teknoloji sunumlarının görsel hiyerarşi, boşluk, nesne sürekliliği ve hareket ritmini inceleyip özgün sahnelere uygula. Ücretli şablon veya özel ürün tasarımını birebir kopyalama. Açılıştaki takvim/ekran nesnesi finalde geri dönsün; videonun kendi eskimesi anlatının görsel omurgası olsun.

Google Labs DESIGN.md yaklaşımından renk, tipografi ve bileşen kurallarını tek belgede tanımlama fikri; IBM Carbon'dan işlevsel ve vurgulu hareket ayrımı alınmıştır. Bunlar arayüz kaynaklarıdır; aşağıdaki video ölçüleri ve süreleri bu projeye özel tasarım kararlarıdır.

## Görsel sistem

- Tuval: 1920×1080, 16:9, 30 fps. YouTube ve Instagram için tek ortak MP4.
- Renkler: mürekkep #101820, sıcak beyaz #F3EFE6, turkuaz #3AD6C5, amber #FFB454. Turkuaz değişim/yeni, amber dikkat/tarih için; renk tek başına anlam taşımasın.
- Tipografi: ücretsiz ve lisansı kaydedilmiş Inter veya eşdeğer açık lisanslı sans; tarihlerde monospace. Başlık 80–104 px, destek metni 42–52 px, kaynak etiketi en az 28 px.
- Güvenli alan: yatay 96 px, dikey 72 px. Tek ana odak; ekran başına en fazla iki kısa metin grubu. Anlatımın tamamını slayda yazma.
- Kompozisyon: tam ekran gerçek görüntü, büyük nesne yakın planı ve aydınlık editoryal ara sahneler dönüşümlü kullanılsın. Sürekli koyu kart dizisi oluşturma.
- Görsel payı: sürenin en az %65'inde konuya bağlı hareketli görüntü, nesne animasyonu veya demonstrasyon. Hedef 24–30 plan; genellikle 4–7 saniyede anlamlı görsel değişim.
- Hareket: bilgi girişleri 250–450 ms, ana dönüşümler 700–1000 ms; yumuşak hızlanma/yavaşlama. Kamera hareketi kontrollü. Geçişler takvim, ekran veya imleç gibi ortak nesne üzerinden bağlansın.
- Gerçek ürün ekranı ile temsili demonstrasyonu ayır; temsili olana kısa etiket ekle. Kaynağın söylemediği ürün yeteneğini görselleştirme.
- Yasaklar: “New Horizons”, “Chapter XX”, rastgele robot stokları, her sahnede neon/parıltı, hızlı flaş, okunamayan kaynaklar.

## Ses ve dil

Repo standardına göre varsayım: İngilizce anlatım, Microsoft Edge TTS en-GB-RyanNeural, hız -2%. Yaklaşık 340–370 kelime; gerçek ses süresi üzerinden kurgu. Plan belgeleri Türkçe. Tam altyazı yerine kısa İngilizce vurgu metinleri; ayrıca SRT teslim edilebilir. Ses hedefi yaklaşık -16 LUFS, true peak en fazla -1 dBTP. Müzik varsa lisansı kaydedilsin ve konuşmayı örtmesin.

## Ana kareler ve tasarım incelemesi

Tam üretimden önce üç kare: uçuşan takvimli açılış, tarihli önce/sonra karşılaştırması, sakin final. 320×180 küçültülmüş önizlemede hiyerarşi; 1920×1080'de hizalama ve kaynak okunurluğu kontrol edilsin. Ardından 10–15 saniyelik hareket testi. Designer incelemesi: odak ilk bakışta belli mi, görüntü anlatımı destekliyor mu, metin yükü düşük mü, geçişin anlamı var mı? Başarısız ölçüt düzeltilmeden tam rendera geçilmesin.

## Thumbnail

Tek büyük takvim ve aynı cihazın eski/yeni görünümü. En fazla 3–4 kelime; İngilizce varsayım için “ALREADY OUTDATED?”. Videonun gerçekten sunduğu zaman karşılaştırmasını vaat etsin.

## İncelenen tasarım kaynakları

- https://github.com/google-labs-code/design.md/blob/main/docs/spec.md — tasarım sistemini kalıcı metin belgesinde tanımlama.
- https://carbondesignsystem.com/elements/motion/overview/ — işlevsel/vurgulu hareket ve tutarlılık.

Kaynaklar 2 Ekim 2026 tarihinde incelendi; güncel erişim tarihi ilk yayın tarihi anlamına gelmez.

## Gerçekleşen üretim

16 ana sekans; sekans içi durum değişimleri ve nesne hareketleri. İki gerçek çekim, özgün telefon/çekmece/pasaport ve takvim animasyonları kullanıldı. İlk taslaktaki 24–30 plan hedefi yerine onaylanan demonun daha sakin sunum ritmi korundu. Ses: İngilizce Ryan, -2%; müzik yok. Sistem Helvetica Neue / Arial kullanıldı, font dosyası dağıtılmadı.
