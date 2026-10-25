# Decision models, System 1 and System 2: taxonomy decision

Research date: 2026-10-25. Status: editorial placement decision implemented locally; verification recorded below.

Araştırma tarihi: 2026-10-25. Durum: editoryal yerleşim kararı yerelde uygulandı; doğrulama aşağıda kaydedildi.

## Decision / Karar

Keep architecture, training, task, output contract and inference mode separate. Add **Inference & Decision Behavior / Çıkarım ve Karar Davranışı** as a complementary axis of the model map. Place **Structured Decision Models / Yapılandırılmış Karar Modelleri** there. Use **Direct (System 1-style)**, **Deliberative (System 2-style)** and **Hybrid / Adaptive** as qualified inference-mode labels, independent of output contract. These are AIA editorial descriptors, not a claim of a universal standard or human cognition.

Mimariyi, eğitimi, görevi, çıktı sözleşmesini ve çıkarım kipini ayrı tut. Model haritasına tamamlayıcı **Inference & Decision Behavior / Çıkarım ve Karar Davranışı** eksenini ekle. **Structured Decision Models / Yapılandırılmış Karar Modelleri** bu eksende yer alsın. **Direct (System 1-style) / Doğrudan**, **Deliberative (System 2-style) / Adımlı değerlendirme** ve **Hybrid / Adaptive / Hibrit ve uyarlanabilir** kip etiketleri, çıktı sözleşmesinden bağımsız kullanılsın. Bunlar AIA'nın editoryal açıklayıcılarıdır; evrensel standart veya insan bilişi iddiası değildir.

Preserve the eight task families. Under **Reasoning, Planning & Action**, add two operational tasks: **Action Selection** and **Rubric-Based Scoring**. Classification stays in its existing task. Do not introduce a generic atomic task named “System 1,” “System 2,” or “Decision Making.” Their inputs and success criteria would be too broad.

Sekiz görev ailesini koru. **Reasoning, Planning & Action** altına iki operasyonel görev ekle: **Action Selection / Eylem Seçimi** ve **Rubric-Based Scoring / Ölçütlere Göre Puanlama**. Sınıflandırma mevcut görevinde kalsın. “System 1”, “System 2” veya genel “Decision Making” adıyla atomik görev oluşturma; bunların girdileri ve başarı ölçütleri fazla geniş olur.

The research decision below is retained as the rationale for the local integration. SVG maps, versioned data contracts and bilingual panels now implement it. No model inference, weight download, training, API evaluation or external publication was performed.

Araştırma kararı, yerel entegrasyonun gerekçesi olarak aşağıda korunuyor. SVG haritaları, sürümlü veri sözleşmeleri ve iki dilde paneller artık bu kararı uyguluyor. Model çıkarımı, ağırlık indirme, eğitim, API değerlendirmesi veya dış yayın yapılmadı.

## Baseline AIA constraints / Başlangıçtaki AIA sınırları

Before integration, the repository had seven model-map branches, fifty mapped concepts, eight task families and eighty-five tasks. The model map already mixes complementary axes intentionally; `ModelFamily.axis` currently admits six axes, with task-family navigation represented separately. See `src/data/taxonomy.ts`, `src/data/model-families.ts`, `src/data/task-models.ts` and `src/data/schema.ts`.

Entegrasyondan önce depoda yedi model haritası dalı, elli eşlenmiş kavram, sekiz görev ailesi ve seksen beş görev bulunuyor. Model haritası bilinçli olarak tamamlayıcı eksenler kullanıyor; `ModelFamily.axis` altı eksen kabul ediyor ve görev ailesi gezinmesi ayrıca temsil ediliyor. İlgili dosyalar: `src/data/taxonomy.ts`, `src/data/model-families.ts`, `src/data/task-models.ts`, `src/data/schema.ts`.

Task recommendations and model-family memberships currently reference `OpenWeightModel`, which requires weight and license evidence. The vendor catalogue has a separate model schema and a restricted source-publisher set. Jev must not be inserted into the open-weight collection just to make it visible in the taxonomy. A hosted-reference relationship needs an explicit contract before product integration.

Görev önerileri ve model ailesi üyelikleri şu anda ağırlık ve lisans kanıtı gerektiren `OpenWeightModel` kayıtlarına bağlı. Sağlayıcı kataloğunda ayrı model şeması ve sınırlı kaynak-yayıncı kümesi var. Jev'i taksonomide göstermek için açık ağırlıklı koleksiyona eklemek yanlış olur. Ürün entegrasyonundan önce, barındırılan servis referansları için açık bir ilişki sözleşmesi gerekir.

## Findings / Bulgular

1. **The analogy predates Jev.** Booch et al. and the SOFAI work explore fast solvers, deliberative solvers and metacognitive selection. This supports a processing-role distinction across systems, rather than a particular neural architecture. [R01][R02]

   **Benzetme Jev'den eski.** Booch ve diğerleri ile SOFAI çalışması, hızlı çözücüler, adımlı değerlendirme yapan çözücüler ve bunların seçimini inceliyor. Bu, belirli bir sinir ağı mimarisi yerine sistemler arasında işlem rolü ayrımını destekliyor. [R01][R02]

2. **TypeSafe's “System One” is a specific product framing.** Its documentation describes bounded, typed decisions and probabilities. Choice selects a supplied option; Noul estimates a yes/no proposition; Score evaluates ordered descriptive levels. The vendor names its training approach RLCD. These are documented vendor statements, not independently reproduced results. [R03][R04][R05][R06][R07]

   **TypeSafe'ın “System One” ifadesi belirli bir ürün çerçevesi.** Doküman, sınırlandırılmış ve türü belirli kararlar ile olasılıkları anlatıyor. Choice verilen seçeneği seçiyor; Noul evet/hayır önermesini değerlendiriyor; Score açıklamalı sıralı düzeyleri puanlıyor. Sağlayıcı eğitim yaklaşımına RLCD diyor. Bunlar belgelenmiş sağlayıcı beyanları; bağımsız olarak tekrarlanan sonuçlar değil. [R03][R04][R05][R06][R07]

3. **A decision interface does not identify its backbone.** Strands Decider documents a pretrained Qwen3.5 backbone, an adapted readout/pointer head and LoRA. It provides a concrete open implementation of this behavior. That does not establish Jev's internal architecture, nor imply that all decision models use the same implementation or training objective. [R08][R09]

   **Karar arayüzü, temel mimariyi belirlemez.** Strands Decider, Qwen3.5 tabanı, uyarlanmış okuma/işaretçi başlığı ve LoRA belgeliyor. Bu davranışın somut açık uygulama örneğini sağlıyor. Bu bilgi Jev'in iç mimarisini kanıtlamaz; tüm karar modellerinin aynı uygulama veya eğitim hedefini kullandığını da göstermez. [R08][R09]

4. **One model can support different modes.** The original Qwen3 release explicitly supports thinking and non-thinking operation. Consequently, System 1 and System 2 cannot be immutable, mutually exclusive architecture families. The exact release and requested mode matter. [R10]

   **Tek model farklı kipleri destekleyebilir.** Özgün Qwen3 sürümü, düşünme ve doğrudan yanıtlama kiplerini açıkça destekliyor. Dolayısıyla System 1 ve System 2, değişmez ve birbirini dışlayan mimari aileleri olamaz. Tam sürüm ve istenen kip önemlidir. [R10]

5. **Deliberation can live in the inference procedure.** Chain-of-Thought studies intermediate reasoning; Tree of Thoughts adds branching, evaluation and backtracking around language-model inference. DeepSeek-R1 documents reasoning-oriented training. These are distinct mechanisms, not one architecture called “System 2.” [R11][R12][R13]

   **Adımlı değerlendirme, çıkarım yönteminde bulunabilir.** Chain-of-Thought ara adımları; Tree of Thoughts ise dil modeli çıkarımı çevresinde dallanma, değerlendirme ve geri dönüşü inceliyor. DeepSeek-R1 akıl yürütmeye yönelik eğitimi belgeliyor. Bunlar “System 2” adlı tek mimari değil, farklı mekanizmalar. [R11][R12][R13]

6. **Scoring is not unique to decision models.** G-Eval evaluates generated text through a rubric-oriented procedure using a generative model. The same scoring task can therefore have direct or deliberative implementations. This source supports scoring of generated text, not universal assessment quality in every domain. [R14]

   **Puanlama yalnızca karar modellerine özgü değil.** G-Eval, üretken model kullanan ölçüt odaklı bir yöntemle üretilmiş metni değerlendiriyor. Aynı puanlama görevinin doğrudan veya adımlı uygulaması olabilir. Bu kaynak, her alanda evrensel değerlendirme kalitesini değil, üretilmiş metnin puanlanmasını destekler. [R14]

## Model-map placement / Model haritasındaki yerleşim

Proposed new axis ID: `inference-decision-behavior`. It has two independent reading groups; membership is non-exclusive. / Önerilen yeni eksen kimliği: `inference-decision-behavior`. Birbirinden bağımsız iki okuma grubu içerir; üyelikler örtüşebilir.

| Group / Grup | English label | Türkçe etiket | Meaning / Anlam |
| --- | --- | --- | --- |
| Output contract / Çıktı sözleşmesi | Structured Decision Models | Yapılandırılmış Karar Modelleri | Declared options, ordered scores or proposition probabilities. / Tanımlı seçenekler, sıralı puanlar veya önerme olasılıkları. |
| Inference mode / Çıkarım kipi | Direct Inference (System 1-style) | Doğrudan Çıkarım (System 1 benzeri) | Focused answer without a documented deliberation/search stage. Not synonymous with non-autoregressive decoding. / Belgelenmiş adımlı değerlendirme veya arama aşaması olmadan odaklı yanıt. Otoregresif olmayan çözümlemeyle eş anlamlı değil. |
| Inference mode / Çıkarım kipi | Deliberative Inference (System 2-style) | Adımlı Çıkarım (System 2 benzeri) | Documented intermediate reasoning, search or verification. / Belgelenmiş ara akıl yürütme, arama veya doğrulama. |
| Inference mode / Çıkarım kipi | Hybrid / Adaptive Inference | Hibrit / Uyarlanabilir Çıkarım | Supported mode switching or a documented adaptive inference procedure. / Desteklenen kip geçişi veya belgelenmiş uyarlanabilir çıkarım yöntemi. |

“System One” is retained as TypeSafe's source-attributed wording and as a searchable alias. AIA's canonical model-behavior label is **Structured Decision Models**. A model's supported modes are distinct from the mode actually used by a benchmark or request. Unknown mode evidence stays unknown. A short response, low latency, a small parameter count or hidden reasoning text alone does not establish a mode.

“System One”, TypeSafe'a atfedilen ifade ve aranabilir diğer ad olarak tutulur. AIA'nın kanonik model-davranışı etiketi **Structured Decision Models** olur. Modelin desteklediği kipler ile bir karşılaştırma veya istekte kullanılan kip ayrı tutulur. Kip kanıtı yoksa bilinmiyor olarak kalır. Kısa yanıt, düşük gecikme, az parametre veya görünmeyen akıl yürütme metni tek başına kip belirlemez.

Do not classify Jev as Decision Trees & Ensembles, a Bayesian network, an encoder-only model or a particular Transformer configuration without architecture evidence. RLCD belongs under training/adaptation as a vendor-described method, linked to Reinforcement Learning only at the level supported by its documentation. Do not transfer RLCD to Strands Decider by analogy.

Mimari kanıtı olmadan Jev'i Decision Trees & Ensembles, Bayes ağı, yalnız kodlayıcılı model veya belirli Transformer yapılandırması olarak etiketleme. RLCD, eğitim/uyarlama altında sağlayıcının tanımladığı yöntem olarak yer alsın; Reinforcement Learning ilişkisi yalnızca dokümanın desteklediği düzeyde kurulsun. Benzetmeyle Strands Decider'a RLCD atama.

## Task-map placement / Görev haritasındaki yerleşim

| Task / Görev | Parent / Üst aile | Defined input → intended output / Tanımlı girdi → amaçlanan çıktı | Decision / Karar |
| --- | --- | --- | --- |
| Text Classification / Metin Sınıflandırma | Language & Text | Text + category descriptions → category prediction; probabilities where supported. / Metin + kategori açıklamaları → kategori tahmini; destekleniyorsa olasılıklar. | Reuse `text-classification`; intent classification and text moderation can be applications. / Mevcut görevi kullan; niyet sınıflandırma ve metin moderasyonu uygulama olabilir. |
| Action Selection / Eylem Seçimi | Reasoning, Planning & Action | State + objective + allowed candidate actions → selected next action. / Durum + amaç + izinli aday eylemler → seçilen sonraki eylem. | New `action-selection`; covers tool/model/handler selection when selecting the next operation. / Yeni görev; sonraki işlem seçiliyorsa araç/model/işleyici seçimini kapsar. |
| Rubric-Based Scoring / Ölçütlere Göre Puanlama | Reasoning, Planning & Action | Item + question + ordered descriptive rubric → level distribution and derived score. / Öğe + soru + sıralı açıklamalı ölçütler → düzey dağılımı ve türetilmiş puan. | New `rubric-based-scoring`; ordinal judgment rather than arbitrary numerical regression. / Yeni görev; keyfi sayısal regresyon yerine sıralı değerlendirme. |
| Classification / Sınıflandırma | Data & Time Series | Existing feature-vector classification task. / Mevcut özellik vektörü sınıflandırma görevi. | Reuse for matching structured-feature inputs; do not move all language decisions here. / Uygun yapılandırılmış özellik girdileri için kullan; tüm dil kararlarını buraya taşıma. |

Action Selection is grounded in agent/action and decision-theoretic concepts [R15], with TypeSafe routing as a concrete application [R16]. The new rubric task is an editorial abstraction across the Score contract [R06] and the bounded text-evaluation example [R14]. Its placement under the existing reasoning family is an AIA navigation choice, not an endorsement by those sources.

Eylem Seçimi, ajan/eylem ve karar kuramı kavramlarına [R15], somut uygulama olarak TypeSafe yönlendirmesine [R16] dayanır. Yeni puanlama görevi, Score sözleşmesi [R06] ile sınırlı metin değerlendirme örneği [R14] üzerinden oluşturulmuş editoryal soyutlamadır. Mevcut akıl yürütme ailesindeki yeri AIA gezinme tercihidir; kaynakların bu hiyerarşiyi onayladığı anlamına gelmez.

Choice, Noul and Score are API/output primitives, not three universal task families. A Noul about a factual statement is not automatically formal theorem proving or Natural Language Inference. Selecting an action is not producing a complete plan, executing a tool, obtaining authorization or completing an agent benchmark. Function Calling keeps its existing argument-prediction meaning. Ranking items by scores is a downstream composition unless ranking itself has evidence.

Choice, Noul ve Score, API/çıktı ilkelleridir; üç evrensel görev ailesi değildir. Olgusal bir ifadeye ilişkin Noul, otomatik olarak biçimsel ispat veya Natural Language Inference sayılmaz. Eylem seçmek, tam plan üretmek, araç çalıştırmak, yetki edinmek veya ajan karşılaştırmasını tamamlamak anlamına gelmez. Function Calling'in mevcut argüman tahmini anlamı korunur. Puanlardan sıralama üretmek, sıralama görevinin ayrıca kanıtı yoksa sonraki aşama bileşimidir.

## Example decisions / Örnek yerleşimler

| Example / Örnek | Model behavior / Model davranışı | Mode / Kip | Architecture and evidence boundary / Mimari ve kanıt sınırı |
| --- | --- | --- | --- |
| Jev | Structured Decision Models | System 1-style; vendor calls it System One. / Sağlayıcı System One diyor. | Internal backbone unspecified in the reviewed sources; RLCD is a vendor-described method. / İncelenen kaynaklarda iç temel mimari belirtilmemiş; RLCD sağlayıcı tanımı. |
| Strands Decider | Structured Decision Models | Direct inference / Doğrudan çıkarım | Documented backbone + adapted head; retain release-specific architecture and training evidence. / Belgelenmiş taban + uyarlanmış başlık; sürüme özel mimari/eğitim kanıtını koru. |
| Original hybrid Qwen3 / Özgün hibrit Qwen3 | Generative output; task-dependent structured outputs do not make it a specialized decision-only model. / Üretken çıktı; göreve bağlı yapılandırılmış çıktı, onu yalnız karar üreten uzman modele dönüştürmez. | Supported direct and deliberative modes; record the requested one. / Doğrudan ve adımlı kipleri destekler; istenen kipi kaydet. | Use exact release documentation. / Tam sürüm dokümanını kullan. |
| DeepSeek-R1 | Reasoning-oriented language model / Akıl yürütme odaklı dil modeli | Deliberative / Adımlı | Reasoning training evidence does not prescribe a universal output contract. / Akıl yürütme eğitimi kanıtı evrensel çıktı sözleşmesi belirlemez. |
| Tree-of-Thoughts pipeline / Tree-of-Thoughts akışı | Depends on underlying model and task. / Temel modele ve göreve bağlı. | Deliberative system procedure / Adımlı sistem yöntemi | Search belongs to the pipeline, not automatically the model weights. / Arama, otomatik olarak model ağırlıklarına değil akışa aittir. |

These are evidence-based placement examples, not local-runtime acceptance or performance recommendations. / Bunlar kanıta dayalı yerleşim örnekleridir; yerel çalışma kabulü veya performans önerisi değildir.

## Alternatives considered / Değerlendirilen seçenekler

| Approach / Yaklaşım | Assessment / Değerlendirme |
| --- | --- |
| Split all AI into System 1 and System 2. / Tüm yapay zekâyı System 1 ve System 2'ye böl. | Reject: hybrid modes and inference pipelines cross architecture boundaries. / Reddet: hibrit kipler ve çıkarım akışları mimari sınırlarını aşar. |
| Put every decision model only under Classification. / Tüm karar modellerini yalnız Sınıflandırma'ya koy. | Reject as complete solution: preserves classification but loses ordinal scoring and action-selection semantics. / Tam çözüm olarak reddet: sınıflandırmayı korur ancak sıralı puanlama ve eylem seçimi anlamlarını kaybeder. |
| Separate model behavior/mode from tasks and architecture. / Model davranışını ve kipini görevlerden ve mimariden ayır. | Selected: fits AIA's complementary axes and preserves task-specific evidence. / Seçildi: AIA'nın tamamlayıcı eksenlerine uyar ve göreve özel kanıtı korur. |

## Evidence and future integration rules / Kanıt ve sonraki entegrasyon kuralları

- Save exact model/version, supported modes, output contract, source IDs and observation date separately. Benchmark records must retain the actual inference mode and budget. / Tam model/sürüm, desteklenen kipler, çıktı sözleşmesi, kaynak kimlikleri ve gözlem tarihi ayrı kaydedilsin. Karşılaştırmalar kullanılan gerçek kipi ve bütçeyi korusun.
- Direct and deliberative describe the procedure, not correctness, human-like thought or a quality rank. Compare task outcomes and compute budgets separately; a generated explanation is not proof. / Doğrudan ve adımlı etiketleri yöntemi anlatır; doğruluğu, insan gibi düşünmeyi veya kalite sırasını değil. Görev sonuçları ve hesaplama bütçeleri ayrıca karşılaştırılsın; üretilmiş açıklama ispat değildir.
- In AIA itself, model-generated scores remain observer outputs. They cannot become primary citations or silently replace the human-authored `comparisonStatusValues` review decision. / AIA'nın kendi içinde modelin ürettiği puanlar gözlemci çıktısı olarak kalır. Birincil atıf olamaz veya insanın yazdığı `comparisonStatusValues` inceleme kararının yerini sessizce alamaz.
- Probability output, calibration claims and measured calibration are separate facts. Confidence summarizes a distribution; it is not an automatic probability of correctness. No global confidence threshold follows from a model-family label. [R17] / Olasılık çıktısı, kalibrasyon iddiası ve ölçülmüş kalibrasyon ayrı olgulardır. Güven, dağılımı özetler; otomatik olarak doğruluk olasılığı değildir. Model ailesi etiketinden evrensel güven eşiği çıkarılamaz. [R17]
- Preserve uncertainty and failure modes. For example, Strands' card limits calibration transfer and describes overconfidence on missing images. A typed result does not prove semantic correctness. [R09] / Belirsizliği ve hata durumlarını koru. Örneğin Strands kartı kalibrasyon aktarımını sınırlar ve eksik görsellerde aşırı güveni anlatır. Türü belirli sonuç, anlamsal doğruluğu kanıtlamaz. [R09]
- Jev documentation currently has a scope discrepancy: its System One overview says text-only; dedicated Images documentation describes opt-in experimental image/Box support. Record default text behavior and experimental image support separately, tied to exact version/flags; do not silently claim production multimodality. [R03][R18][R19] / Jev dokümanında kapsam farkı var: System One özeti yalnız metin diyor; Images sayfası isteğe bağlı deneysel görsel/Box desteği anlatıyor. Varsayılan metin davranışı ve deneysel görsel desteği, tam sürüm/bayraklarla ayrı kaydedilsin; sessizce üretim düzeyinde çok kipli destek iddia edilmesin. [R03][R18][R19]
- On product integration, register primary observations in `src/data/sources.ts`; extend the hosted-reference contract explicitly; update affected schema versions, bilingual labels, SVG/source definitions, map counts and validators together. The local integration now has 87 tasks in 8 families and 8 model-map branches. / Ürün entegrasyonunda birincil gözlemleri `src/data/sources.ts` içine kaydet; barındırılan referans sözleşmesini açıkça genişlet; etkilenen şema sürümleri, iki dilde etiketler, SVG/kaynak tanımları, sayılar ve doğrulayıcıları birlikte güncelle. Yerel entegrasyon artık 8 ailede 87 görev ve model haritasında 8 dal içeriyor.

## Primary sources / Birincil kaynaklar

All sources below were consulted on 2026-10-25. Mutable pages are observations, not immutable snapshots. Research papers establish their stated methods and scope, not the whole proposed hierarchy. / Aşağıdaki kaynaklar 2026-10-25 tarihinde incelendi. Değişebilir sayfalar değişmez anlık görüntü değil gözlemdir. Makaleler, önerilen hiyerarşinin tamamını değil kendi yöntemlerini ve kapsamlarını destekler.

- [R01] Booch et al., *Thinking Fast and Slow in AI*, AAAI 2021.
- [R02] Bergamaschi Ganapini et al., *Thinking Fast and Slow in AI: the Role of Metacognition*, 2021.
- [R03] TypeSafe, *System One*.
- [R04] TypeSafe, *AI primer*.
- [R05] TypeSafe, *Choice*.
- [R06] TypeSafe, *Score*.
- [R07] TypeSafe, *Noul*.
- [R08] Strands Labs, *Strands Decider*, architecture and inference documentation.
- [R09] Strands Agents, *strands-decider-2B-hobson-v21*, exact release model card.
- [R10] Qwen, *Qwen3: Think Deeper, Act Faster*, original hybrid-mode release.
- [R11] Wei et al., *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*.
- [R12] Yao et al., *Tree of Thoughts: Deliberate Problem Solving with Large Language Models*.
- [R13] DeepSeek-AI et al., *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning*.
- [R14] Liu et al., *G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment*.
- [R15] Russell and Norvig, *Artificial Intelligence: A Modern Approach*, author-hosted contents: agents, decisions and sequential decisions.
- [R16] TypeSafe, *Intent routing*.
- [R17] TypeSafe, *Confidence*.
- [R18] TypeSafe, *Images*, experimental opt-in scope.
- [R19] TypeSafe, *Models*, version-specific reference.

[R01]: https://ojs.aaai.org/index.php/AAAI/article/view/17765
[R02]: https://arxiv.org/abs/2110.01834
[R03]: https://docs.typesafe.ai/concepts/system-one
[R04]: https://docs.typesafe.ai/introduction/machine-learning-primer
[R05]: https://docs.typesafe.ai/primitives/choice
[R06]: https://docs.typesafe.ai/primitives/score
[R07]: https://docs.typesafe.ai/primitives/noul
[R08]: https://github.com/strands-labs/strands-decider
[R09]: https://huggingface.co/StrandsAgents/strands-decider-2B-hobson-v21
[R10]: https://qwenlm.github.io/blog/qwen3/
[R11]: https://arxiv.org/abs/2201.11903
[R12]: https://arxiv.org/abs/2305.10601
[R13]: https://arxiv.org/abs/2501.12948
[R14]: https://arxiv.org/abs/2303.16634
[R15]: https://aima.cs.berkeley.edu/contents.html
[R16]: https://docs.typesafe.ai/patterns/intent-routing
[R17]: https://docs.typesafe.ai/confidence
[R18]: https://docs.typesafe.ai/images
[R19]: https://docs.typesafe.ai/models

## Local implementation / Yerel uygulama

- 87 task entries, 54 model concepts, 111 open-weight candidates and 1 separately validated hosted reference. / 87 görev, 54 model kavramı, 111 açık ağırlıklı aday ve ayrıca doğrulanan 1 barındırılan referans.
- Strands Decider v21 observed revision: `2b52a6235c1b8306bbfa30b00b9d4b74b63a39f5`; Qwen3-4B observed revision: `1cfa9a7208912126459214e8b04321603b3df60c`. Only release metadata and documentation were read; no weights were downloaded. / Yalnız sürüm üst verisi ve doküman incelendi; ağırlık indirilmedi.
- Jev 1.14 uses the documented `jev-1.14.0` identifier and a hosted-only contract. / Jev 1.14, belgelenmiş `jev-1.14.0` kimliğini ve yalnız barındırılan servis sözleşmesini kullanıyor.
- New task benchmark status is explicitly a gap; existing benchmark scores were preserved. / Yeni görevlerin benchmark durumu açıkça eksik kanıt; mevcut puanlar korundu.
- Verification runtime matches the primary checkout: Node.js 22.23.1. Node.js 26.12.1 emitted enough separate hydration scripts to exceed the existing CSP header budget; the policy was not weakened. / Doğrulama ortamı ana klasörle aynı: Node.js 22.23.1. Node.js 26.12.1, mevcut CSP başlık sınırını aşacak kadar ayrı hidrasyon betiği üretti; politika gevşetilmedi.

## Open-weight selection / Açık ağırlıklı seçim

The user additionally requested a shortlist of strong Jev-style open-weight models. Selection is role-specific and based on published experiments, released files and licenses; it is not a universal ranking or local performance measurement. / Kullanıcı ayrıca güçlü Jev benzeri açık ağırlıklı modellerin kısa listesini istedi. Seçim; yayımlanmış deneyler, dosyalar ve lisanslara dayalı olarak role özeldir; evrensel sıralama veya yerel performans ölçümü değildir.

| Model | Selection role / Seçim rolü | Evidence and limits / Kanıt ve sınır |
| --- | --- | --- |
| Perplexity Decider v1.2 · 27B | Larger quality candidate / Büyük kalite adayı | Publisher Decision Index 0.3 joint-request aggregate: 68.09; mode-specific, not a percentage of all correct decisions. / Yayıncı Decision Index 0.3 ortak istek toplamı: 68,09; kipe özeldir, tüm kararların doğruluk yüzdesi değildir. [R20] |
| Perplexity Decider Flash v1.2 · 4B | Smaller quality/size candidate / Küçük kalite ve boyut adayı | The publisher reports joint/single-question aggregates of 58.88/60.05; a separate model developer's five-task comparison supports the small-model selection. Those were hosted API runs with serving settings outside the experimenter's control. / Yayıncı ortak/tek sorulu toplamları 58,88/60,05 bildiriyor; başka bir model geliştiricisinin beş görevli karşılaştırması küçük model seçimini destekliyor. Bunlar sunum ayarları deneycinin kontrolünde olmayan barındırılan API koşularıydı. [R21][R23] |
| Cloudflare Clef · 27B | Alternative larger candidate / Alternatif büyük aday | Arize's separate experiment reports strong hosted routing and evaluator results. Its conditions and Cloudflare's older Decision Index suite are not merged with Perplexity's aggregate. / Arize'ın ayrı deneyi güçlü barındırılan yönlendirme ve değerlendirici sonuçları bildiriyor. Bu koşullar ve Cloudflare'ın eski Decision Index kümesi Perplexity toplamıyla birleştirilmedi. [R22][R24] |
| Strands Decider 2B · hobson-v21 | Lightweight reproducible reference / Hafif, yeniden üretilebilir referans | Published adapter/head, recipe and limitations; not presented as accuracy leader. / Yayımlanmış uyarlayıcı/başlık, eğitim tarifi ve sınırlar; doğruluk lideri olarak sunulmuyor. [R09] |

The three additional releases were observed as public, ungated and Apache-2.0 on Hugging Face, including their pinned weight listings and artifact LICENSE files. Perplexity's card still contains private-access instructions, which conflict with the observed metadata/listing; both facts are preserved in the model context. Only metadata was fetched, not model weights. / Üç ek sürüm, sabitlenmiş ağırlık listeleri ve dosya LICENSE kayıtları dahil Hugging Face'te herkese açık, koşulsuz ve Apache-2.0 olarak gözlendi. Perplexity kartlarında hâlâ özel erişim talimatları var; gözlemlenen üst veri ve dosya listesiyle çelişen bu bilgi model bağlamında korundu. Yalnız üst veri alındı, model ağırlıkları indirilmedi.

- Perplexity Decider v1.2: revision `cce0f3f80033e9d89d80831d5281fd72124aacce`, 52,173,414,048 published weight-file bytes.
- Perplexity Decider Flash v1.2: revision `9ff7cf9838e59df461c276b7699d56b244d2af58`, 9,079,921,808 published weight-file bytes.
- Cloudflare Clef: revision `a30162b99d68a481d8bd75d38df069a0cf83df40`, 54,969,731,792 published weight-file bytes.

All four decision candidates map to Structured Decision Models, Direct Inference, Text Classification, Action Selection and Rubric-Based Scoring with separate membership and task citations. The two new task benchmark panels remain explicit gaps: broad aggregate scores and different hosted experiments do not establish a matched comparison of these exact downloadable checkpoints. / Dört karar adayı da ayrı üyelik ve görev kaynaklarıyla Yapılandırılmış Karar Modelleri, Doğrudan Çıkarım, Metin Sınıflandırma, Eylem Seçimi ve Ölçütlere Göre Puanlama'ya eşlenir. İki yeni görev paneli açık kanıt eksikliğini korur: geniş toplam puanlar ve farklı barındırılan deneyler, bu tam indirilebilir ağırlıkların aynı koşullarda karşılaştırılması değildir.

[R20]: https://huggingface.co/perplexity-ai/pplx-decider-v1.2
[R21]: https://huggingface.co/perplexity-ai/pplx-decider-flash-v1.2
[R22]: https://huggingface.co/Cloudflare/clef
[R23]: https://vitund.ai/articles/decision-models-compared/
[R24]: https://arize.com/blog/decision-model-benchmark/

## Verification / Doğrulama

`PLAYWRIGHT_PORT=3118 npm run validate:codex` completed successfully with Node.js 22.23.1: data validation, ESLint, TypeScript, 190 Vitest tests, 7 Node script tests, production static export/CSP verification and 104 Playwright tests. A final production rebuild and static-export verification also passed after the introductory copy update. / Node.js 22.23.1 ile veri doğrulama, ESLint, TypeScript, 190 Vitest testi, 7 Node betik testi, üretim statik çıktı/CSP doğrulaması ve 104 Playwright testi başarıyla tamamlandı. Giriş açıklaması güncellemesinden sonraki son üretim derlemesi ve statik çıktı doğrulaması da geçti.

Desktop (1440×1000) and mobile (390×900) screenshots were inspected. The new model-axis text did not exceed its SVG width bounds, the mobile page had no horizontal overflow and the inspected browser flow emitted no application/console errors. / Masaüstü (1440×1000) ve mobil (390×900) ekran görüntüleri incelendi. Yeni model ekseninin metinleri SVG genişlik sınırlarını aşmadı, mobil sayfada yatay taşma görülmedi ve incelenen tarayıcı akışı uygulama/konsol hatası üretmedi.

A fresh review identified hosted citation ownership, contradictory no-match state, Turkish task-name filtering and disconnected new-task connectors. Ownership/version checks, bilingual filtering, separate open-weight counts and subgroup connections were corrected. Negative validation and browser regression cases were observed failing before the fixes and passing afterwards. / Bağımsız inceleme; barındırılan kaynak sahipliği, çelişkili sonuç-yok durumu, Türkçe görev adıyla filtreleme ve kopuk yeni-görev bağlantılarını belirledi. Sahiplik/sürüm kontrolleri, iki dilde filtreleme, ayrı açık ağırlıklı sayıları ve alt grup bağlantıları düzeltildi. Olumsuz doğrulama ve tarayıcı regresyon örneklerinin düzeltme öncesinde başarısız, sonrasında başarılı olduğu gözlendi.

Local preview: `http://127.0.0.1:3120`. No deployment, external writes, model-weight download or inference. / Yerel önizleme: `http://127.0.0.1:3120`. Dağıtım, dış sisteme yazma, model ağırlığı indirme veya çıkarım yapılmadı.
