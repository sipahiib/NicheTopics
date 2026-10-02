# Video 20 — Üretim planı

Durum: Tam video üretildi. Nihai süre 2:50.33; aşağıdaki 2:40 akışı ilk taslaktır. Gerçek zaman çizelgesi assets/video-20/timeline.json ve narration.md içindedir.

## Kapsam ve teslimler

- Kaynak konu: youtube-20-video-plani.md içindeki 20. madde.
- Hedef: 2–3 dakika; kurgu hedefi 2:40 (160 saniye).
- 1920×1080, 30 fps, H.264/AAC tek MP4 master; thumbnail, anlatım metni, kaynak/varlık listesi ve ayrı YouTube/Instagram hashtag önerileri.
- Yeni konu için mevcut video-ai-agents/niche-20 (A Day in 2031) projesi değiştirilmez.
- Tasarım kuralları: aynı klasördeki design.md.
- Varsayım: repo ses standardı ve mevcut video örneğine uygun İngilizce anlatım. Üretim öncesinde kullanıcı farklı dil belirtirse metin ve ses buna göre uyarlanır.

## 160 saniyelik anlatı

| Zaman | İşlev | Görsel |
|---|---|---|
| 00:00–00:12 | İronik kanca: Bu videonun da bir son kullanma tarihi olabilir. | Takvim sayfaları, değişen ekran, kısa donma anı |
| 00:12–00:30 | Vaat: Ne eskir, ne değerini korur? | Aynı nesnede eski/yeni arayüz; sabit kalan amaç |
| 00:30–00:58 | Birinci tarihli örnek: model/ürün değişimi | Resmî duyurulara dayalı iki tarih, ekran/nesne dönüşümü |
| 00:58–01:26 | İkinci örnek: kullanıcı iş akışındaki değişim | Aynı görevin önce/sonra demonstrasyonu; gerçek/temsili ayrımı |
| 01:26–01:49 | Hızın sınırı: yeni sürüm her kullanıcı için ilerleme değildir. | Bildirim akışı yavaşlar; insanın seçtiği tek görev |
| 01:49–02:21 | Üç alışkanlık: tarihi kontrol et, kendi görevinde dene, kaynakları haftalık süz. | Tarih büyüteci, yan yana görev testi, haftalık takvim |
| 02:21–02:40 | Açılışa dönüş; bir yıl sonra tekrar bakma ve doğal abonelik çağrısı | Takvim kapanır, aynı ekran, kısa kapanış |

## Aşamalar

1. **İddia araştırması:** 2 Ekim 2025–2 Ekim 2026 döneminden iki güçlü karşılaştırmayı birincil kaynaklarla doğrula. Her iddia için olay tarihi, yayın tarihi, URL, desteklenen cümle ve sınırlama kaydet. 2025 Mart/Eylül duyuruları yalnızca geçmiş bağlamıdır; son 12 ay gelişmesi diye sunulmaz. “Araçların yarısı” gibi kanıtsız nicel kancayı çıkar. Teknolojinin genel hızlanmasını iki ürün örneğiyle kanıtlanmış yasa gibi sunma.
2. **Senaryo:** Yaklaşık 340–370 İngilizce kelime; bir ana fikir ve iki somut örnek. Ses okuması 120–180 saniye aralığına oturmalı.
3. **Designer incelemesi:** design.md doğrultusunda üç ana kare ve kısa hareket testi üret. Hiyerarşi, boşluk, renk, görüntü seçimi ve okunurluğu inceleyip düzelt.
4. **Varlık üretimi:** Ücretsiz lisanslı gerçek çekimler; özgün SVG/Canvas takvim, ekran ve zaman dönüşümleri. Her stok dosya için üretici, orijinal URL, lisans ve indirme tarihi kaydet.
5. **Ses ve montaj:** Edge TTS; HTML/SVG/Canvas sahnelerini yerel karelere dönüştürme; FFmpeg ile birleştirme ve ses normalizasyonu. Ücretli API, stok, şablon veya render hizmeti kullanma. TTS erişimi sorun çıkarırsa ücretli hizmete otomatik geçme; ücretsiz yerel ses seçeneğini kalite açısından değerlendir.
6. **Kalite kontrol:** Tam videoyu izle ve dinle; süre, çözünürlük, siyah kare, taşan metin, lisans, kaynak ve ses senkronunu kontrol et. Sahnelerin en az %65'inin anlamlı hareketli görseller içermesini zaman çizelgesinde doğrula.
7. **Paketleme:** Thumbnail ve kaynaklı açıklama. Yayın gününe yakın YouTube ve Instagram hashtag kullanımını ayrı araştır; erişim sayısı doğrulanmıyorsa sayısal popülerlik iddiası ekleme. Otomatik yayınlama yok.

## Ücretsiz teknik yol ve dosyalar

FFmpeg ve Node bu ortamda mevcut. Blender bulunmadı; temel plan Blender gerektirmez. Tarayıcı kare yakalama bağımlılıkları uygulama aşamasında kontrol edilecek. Kod src/video-20/, testler tests/video-20/, hafif varlıklar assets/video-20/, yerel çıktılar build/video-20/ altında tutulacak. MP3/MP4 ve build çıktıları .gitignore ile dışlanacak. Çalışma kökü şu an Git deposu değil; commit/push yapılmadı.

## İlk araştırma kaynakları

- Tasarım belgesi: https://github.com/google-labs-code/design.md/blob/main/docs/spec.md
- Hareket ilkeleri: https://carbondesignsystem.com/elements/motion/overview/
- Ücretsiz stok lisansı: https://www.pexels.com/license/
- Geçmiş bağlam adayı: https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-model-thinking-updates-march-2025/
- Geçmiş bağlam adayı: https://www.anthropic.com/news/claude-sonnet-4-5
- Güncel birincil araştırma başlangıcı: https://www.anthropic.com/news

Bu kaynak listesi tamamlanmış bir iddia doğrulama dosyası değildir. Kesin örnekler, tarih aralığı ve kaynak içerikleri doğrulandıktan sonra senaryoya alınacak.
