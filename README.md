# AI Ecosystem Atlas

![Next.js 16.3.4](https://img.shields.io/badge/Next.js-16.3.4-111111?logo=nextdotjs&logoColor=white)
![TypeScript 5.9.3](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Checks: npm run check](https://img.shields.io/badge/checks-npm%20run%20check-168c6b)

AI Ecosystem Atlas is a public, evidence-backed research console for comparing AI product and developer ecosystems. The current catalog examines Anthropic/Claude, OpenAI/ChatGPT, Z.ai/GLM, MiniMax, DeepSeek, and Qwen across models, end-user products, coding agents, developer platforms, governance, and pricing.

The atlas is designed for inspection, not verdicts. It keeps provider-neutral capabilities, vendor claims, pair-specific assessments, models, plans, and official sources in separate canonical records. The interface does not rank vendors or declare a winner. Unsupported claims remain explicitly unknown, and model lifecycle and billing qualifications are visible beside their records. The all-vendors matrix includes an availability indicator: available = 10, limited = 5, all other states = 0. Its overall score is the mean of visible cells, not a quality benchmark; missing evidence does not prove unavailability.

![AI Ecosystem Atlas Research Console](public/ai-ecosystem-atlas.png)

## Purpose

AI ecosystems extend well beyond model benchmarks. Buyers, builders, and researchers also need to understand knowledge-work surfaces, agent runtimes, customization, connectors, execution environments, permissions, APIs, and organizational controls. AI Ecosystem Atlas makes those product-level facts searchable, comparable, source-linked, and maintainable in public Git history.

Version 0.1 is deliberately source-first and static at the content layer. Adding or correcting a fact means changing a small canonical record, checking its official evidence, and reviewing the derived comparison—without maintaining a database, CMS, private editor, or provider-specific presentation table.

## Features

- A responsive, semantic comparison table for 66 provider-neutral capabilities.
- Search across categories, capabilities, tags, vendor entries, product names, models, and plans.
- Composable category, availability, comparison-status, and freshness filters.
- Validated, shareable URL state for filters, vendor order, and the active view.
- Expandable evidence with official source titles, direct URLs, publishers, and exact verification dates.
- Explorer and vendor-comparison views derived from the same records and active filters.
- A bilingual `/models` browser compares frontier models by writing/chat, reasoning, coding, agents, document work, visual understanding, and image generation, and states each model's modalities, context window, price per 1M tokens, status and evidence date. Search, vendor and task filters, optional historical records, shareable URLs, and CSV/Excel exports use the same visible memberships.
- A bilingual `/open-weights` browser lists every open-weight model the taxonomy cites with its published weight files, license, access condition and a derived local-footprint band, filters by publisher, license, size, access, task and family, and links into both taxonomy maps.
- Explicit `available`, `limited`, `not-available`, `not-documented`, and `unknown` states.
- Runtime schema and relationship validation plus unit, component, lint, type, and production-build checks.
- A data model intended to add vendors without introducing vendor-specific source columns.

### Frontier models by task / Göreve göre frontier modeller

The interactive task taxonomy now includes a dated [benchmark evidence review](docs/audits/2026-10-21-task-benchmarks.md) for all 85 tasks. After the [41-task follow-up](docs/audits/2026-10-21-benchmark-gap-followup.md), its 88 numerical tables cover 55 tasks with comparisons and 28 with a single verified result; two tasks explain the remaining artifact-to-result gaps. There are 87 additional model releases and 266 primary observations. Each task shows what the evidence supports, dataset/metric, evaluation conditions, result publication date, source-check date, checkpoint and license links. Search and evidence-status filters help inspect the coverage. The benchmark source schema is version 2, supporting persistent publisher release IDs as well as Git revisions; candidate, result and review schemas remain version 1. Both taxonomy map pages use the available viewport width.

Etkileşimli görev taksonomisi artık 85 görevin tümü için tarihli [benchmark kanıt incelemesi](docs/audits/2026-10-21-task-benchmarks.md) içerir. [41 görevin takip araştırmasından](docs/audits/2026-10-21-benchmark-gap-followup.md) sonra 88 sayısal tablo, karşılaştırmalı 55 görevi ve tek doğrulanmış sonucu olan 28 görevi kapsar; iki görevde kalan dosya–sonuç eşleştirme eksikleri açıklanır. 87 ek model sürümü ve 266 birincil gözlem bulunur. Her görev kanıtın desteklediği sonucu, veri kümesi/ölçütü, değerlendirme koşullarını, sonuç yayım ve kaynak kontrol tarihlerini, checkpoint ve lisans bağlantılarını gösterir. Arama ve kanıt durumu filtreleri kapsamı incelemeyi kolaylaştırır. Benchmark kaynak şeması, Git sürümlerine ek olarak kalıcı yayıncı sürüm kimliklerini destekleyen sürüm 2’dir; aday, sonuç ve inceleme şemaları sürüm 1 olarak kalır. İki taksonomi haritası sayfası da pencerenin kullanılabilir genişliğini kullanır.

Highlighted leaders apply only within one table. Proxy tasks, prior-year references, unequal inference budgets and missing scores remain visible; single-result tables have no winner. Publisher results were reviewed, not independently rerun. The benchmark participants supplement the task inspector without silently expanding model-family memberships. Data is in `src/data/task-benchmarks.ts`, observations in the `benchmarkSources` collection in `src/data/sources.ts`, and validation/metric-direction helpers in `src/lib/task-benchmarks.ts`.

İşaretlenen liderlik yalnızca tek tablo içinde geçerlidir. Dolaylı görev ölçümleri, önceki yıl referansları, eşit olmayan çıkarım bütçeleri ve eksik puanlar görünürdür; tek sonuçlu tablolarda lider yoktur. Yayıncı sonuçları incelenmiştir, bağımsız yeniden koşu yapılmamıştır. Benchmark katılımcıları model ailesi üyeliklerini sessizce genişletmeden görev panelini tamamlar. Veriler `src/data/task-benchmarks.ts`, gözlemler `src/data/sources.ts` içindeki `benchmarkSources`, doğrulama ve ölçüt yönü yardımcıları `src/lib/task-benchmarks.ts` içindedir.

Model schema version 3 requires non-empty, unique `taskIds` from the ordered `modelTaskValues` taxonomy. These are editorial focus areas based on each model's cited records, not exhaustive capabilities or quality scores. A model may belong to several groups; totals count unique models. Legacy and retired records are hidden until explicitly included. Source links and original evidence dates remain visible; grouping does not advance verification dates or refresh the catalog. `/models?lang=tr` opens the Turkish controls and explanations; the default is English. The same task groups now also carry the recorded price per 1M tokens, so the comparison criteria are modality, context window, price, status and evidence date.

Model şeması sürüm 3, sıralı `modelTaskValues` sınıflandırmasından boş olmayan ve tekrarlanmayan `taskIds` alanını zorunlu kılar. Gruplar, her modelin kaynaklı kayıtlarına dayanan editoryal kullanım alanlarıdır; tüm yetenekleri veya kalite puanlarını temsil etmez. Bir model birden fazla gruba girebilir; toplamlar benzersiz modelleri sayar. Eski ve kullanımdan kaldırılmış kayıtlar kullanıcı dahil edene kadar gizlidir. Kaynak bağlantıları ve özgün doğrulama tarihleri görünür kalır; gruplandırma tarihleri ilerletmez veya kataloğu güncellemez. `/models?lang=tr` Türkçe kontrolleri ve açıklamaları açar; varsayılan dil İngilizcedir. Aynı görev grupları artık 1M token başına kayıtlı fiyatı da taşır; karşılaştırma ölçütleri modalite, bağlam penceresi, fiyat, durum ve kanıt tarihidir.

### Taxonomy maps / Taksonomi haritaları

The **Maps** menu opens two separate pages: `/taxonomy/models` shows seven classification axes and 50 selected concepts; `/taxonomy/tasks` shows 85 tasks in eight families. Both provide zoom, keyboard scrolling, full screen, SVG downloads and clickable primary references. Add `?lang=tr` for Turkish controls and explanations. Diagram terminology remains English. These maps are editorial, non-exclusive syntheses rather than a universal or exhaustive standard; browser and desktop tasks are explicitly marked as system-level evaluations.

**Maps** menüsü iki ayrı sayfa açar: `/taxonomy/models`, yedi sınıflandırma eksenini ve 50 seçili kavramı; `/taxonomy/tasks`, sekiz ailede 85 görevi gösterir. Her iki sayfada yakınlaştırma, klavyeyle kaydırma, tam ekran, SVG indirme ve tıklanabilir birincil kaynaklar bulunur. Türkçe kontroller ve açıklamalar için `?lang=tr` kullanılır; grafik terimleri İngilizce kalır. Haritalar evrensel veya eksiksiz bir standart değil, örtüşebilen editoryal derlemelerdir; tarayıcı ve masaüstü görevleri sistem düzeyindeki değerlendirmeler olarak işaretlenir.

Static originals and definitions live in `public/assets/taxonomy/`; map metadata lives in `src/data/taxonomy.ts`, and the scholarly reference registry is the `taxonomySources` export in `src/data/sources.ts`. The versioned taxonomy schemas are independent of vendor evidence. Validation checks SVG citations against the registry, and the static export includes both pages and their downloads.

Özgün SVG'ler ve tanımlar `public/assets/taxonomy/`, harita üst verileri `src/data/taxonomy.ts`, akademik kaynak kayıtları ise `src/data/sources.ts` içindeki `taxonomySources` alanındadır. Sürümlenen taksonomi şemaları sağlayıcı kaynaklarından bağımsızdır. Doğrulama, SVG atıflarını kaynak kayıtlarıyla eşleştirir; statik çıktı her iki sayfayı ve indirilebilir dosyalarını içerir.

### Open-weight models by taxonomy task / Taksonomi görevlerine göre açık ağırlıklı modeller

Task cards on `/taxonomy/tasks` open a model evidence panel. A grouped selector provides the same interaction without zooming. `?task=automatic-speech-recognition&lang=tr` preserves the selected task and language across reload and browser history. The original SVG remains unchanged and keeps its task-definition citations.

`/taxonomy/tasks` üzerindeki görev kartları model kanıt panelini açar. Gruplanmış seçici aynı etkileşimi yakınlaştırma gerektirmeden sunar. `?task=automatic-speech-recognition&lang=tr`, seçili görevi ve dili yenileme ve tarayıcı geçmişinde korur. Özgün SVG ve görev tanımı atıfları korunur.

The 2026-10-21 editorial snapshot contains 77 model/parameter/pipeline entries and 115 task–model relationships across all 85 tasks. The 12 formerly empty tasks now have dated research notes distinguishing eight task matches to domain-specific checkpoints from four documented pipelines; P5 covers two tasks. Coverage does not imply universal or out-of-the-box support. Model and relation data live in `src/data/task-models.ts`; 224 primary model-card, checkpoint, license and documentation observations live in `taskModelSources` in `src/data/sources.ts`. Git artifacts pin the observed repository revision; publisher-hosted files and releases record their file identities without claiming an immutable Git revision. These schemas are versioned independently of vendor models and human-authored assessment statuses.

2026-10-21 tarihli editoryal kayıt, 77 model/parametre/işlem hattı kaydı ve 85 görevin tamamını kapsayan 115 görev–model ilişkisi içerir. Önceden boş olan 12 görev, sekiz alana özel ağırlık eşleşmesini dört belgelenmiş işlem hattından ayıran tarihli araştırma notları içerir; P5 iki görevi kapsar. Kapsama, evrensel veya koşulsuz hazır kullanım desteği anlamına gelmez. Model ve ilişki verileri `src/data/task-models.ts`, 224 birincil model kartı, ağırlık, lisans ve belge gözlemi `src/data/sources.ts` içindeki `taskModelSources` alanındadır. Git dosyaları gözlemlenen depo sürümünü sabitler; yayıncıda barındırılan dosya ve sürümler, değişmez Git sürümü iddiası taşımadan dosya kimliğini kaydeder. Bu şemalar sağlayıcı modellerinden ve insan tarafından yazılan değerlendirme durumlarından bağımsız sürümlenir.

Selection distinguishes shortlist candidates from historical specialist references, and evaluated evidence from documented support and proposed adaptation. Publisher scores are not comparable without checking dataset versions, sampling budgets and agent harnesses. In particular, base CodeT5 weights need task-specific tuning; Boltz-2 affinity is a narrow molecular-property subtask; ASR language coverage does not establish TTS language coverage; GUI results include the execution environment. Gated access and non-commercial/custom weight licenses are visible. No weights are downloaded and no inference or independent model evaluation runs in this application.

Seçim; kısa liste adaylarını tarihsel uzman referanslarından, değerlendirme kanıtını belgelenmiş destek ve önerilen uyarlamadan ayırır. Veri kümesi sürümleri, örnekleme bütçeleri ve ajan çatıları kontrol edilmeden yayıncı puanları karşılaştırılamaz. Özellikle temel CodeT5 ağırlıkları göreve özel ince ayar gerektirir; Boltz-2 afinitesi dar bir moleküler özellik alt görevidir; ASR dil kapsamı TTS kapsamını kanıtlamaz; GUI sonuçları yürütme ortamını içerir. Koşullu erişim ve ticari olmayan/özel ağırlık lisansları görünürdür. Uygulama ağırlık indirmez, çıkarım veya bağımsız model değerlendirmesi çalıştırmaz.

The [task-gap research audit](docs/audits/2026-10-21-task-gap-research.md) records exact releases, primary sources, artifact checks and limitations. Google Drive IDs and publisher-declared checksums are visible without claiming that they are Git revisions or independently recomputed hashes. A future unmatched task can retain a sourced explanation using the explicit `no-verified-model` research outcome.

[Görev boşlukları araştırma kaydı](docs/audits/2026-10-21-task-gap-research.md), tam sürümleri, birincil kaynakları, dosya kontrollerini ve sınırları belgeler. Google Drive kimlikleri ve yayıncının bildirdiği sağlama toplamları, Git sürümü veya bağımsız yeniden hesaplanmış özet olarak sunulmadan gösterilir. Gelecekte eşleştirilemeyen görevler, açık `no-verified-model` araştırma sonucuyla kaynaklı açıklamalarını koruyabilir.

### Open-weight models by family / Aileye göre açık ağırlıklı modeller

The 50 concept cards on `/taxonomy/models` open a family inspector with models, checkpoint files, licenses, membership sources and task links. The grouped selector, family search, keyboard interaction and full-screen view work on desktop and mobile. `?family=transformers&lang=tr` preserves the selection and language in reloads and browser history. The original SVG and the companion task-family links remain intact.

`/taxonomy/models` üzerindeki 50 kavram kartı; modelleri, ağırlık dosyalarını, lisansları, üyelik kaynaklarını ve görev bağlantılarını içeren aile panelini açar. Gruplanmış seçici, aile içi arama, klavye etkileşimi ve tam ekran görünümü masaüstünde ve mobilde çalışır. `?family=transformers&lang=tr`, seçimi ve dili yenilemede ve tarayıcı geçmişinde korur. Özgün SVG ve eşlik eden görev ailesi bağlantıları korunur.

The family catalogue shares all 103 entries and derives task support from the canonical task relationships. `src/data/model-families.ts` records 408 non-exclusive memberships across all 50 concepts. The 20 formerly empty concepts now have dated, source-backed research notes. They distinguish neural weights from statistical parameters, learned rule files and pipeline components, and explain why a narrow example is not a universal pretrained solution. `modelFamilySources` adds 35 architecture observations to the 302 shared sources. Source schema is version 3, task schema is version 2, and model/family schemas remain version 2. These examples are not a performance ranking.

Aile kataloğu 103 kaydın tamamını paylaşır ve görev desteğini kanonik görev ilişkilerinden türetir. `src/data/model-families.ts`, 50 kavramın tamamında birbirini dışlamayan 408 üyelik kaydeder. Önceden boş olan 20 kavram artık tarihli ve kaynaklı araştırma notlarına sahiptir. Sinir ağı ağırlıkları, istatistiksel parametreler, öğrenilmiş kural dosyaları ve işlem hattı bileşenleri ayrılır; dar kapsamlı örneğin neden evrensel ön eğitimli çözüm olmadığı açıklanır. `modelFamilySources`, ortak 302 kaynağa 35 mimari gözlemi ekler. Kaynak şeması sürüm 3, görev şeması sürüm 2; model ve aile şemaları sürüm 2’dir. Örnekler performans sıralaması değildir.

The [twenty-concept research audit](docs/audits/2026-10-21-model-family-research.md) records exact releases, primary evidence and transfer limits. / [Yirmi kavram araştırma kaydı](docs/audits/2026-10-21-model-family-research.md), tam sürümleri, birincil kanıtları ve aktarım sınırlarını belgeler.

Architecture, training, modality and capability remain separate properties. Component memberships are labelled: a VAE inside a video generator does not support all of the generator's tasks on its own. Causal embedding backbones are not labelled encoder-only; dense Wan2.2 TI2V-5B is not labelled MoE; reinforcement learning does not automatically imply RLHF. Task links preserve evaluated/documented/adaptation evidence, including CodeT5's need for task-specific tuning. Models were not executed to establish these memberships.

Mimari, eğitim, veri türü ve yetenek ayrı özellikler olarak korunur. Bileşen üyelikleri etiketlidir: video üreticisinin içindeki VAE, üreticinin tüm görevlerini tek başına desteklemez. Nedensel vektör omurgaları yalnız kodlayıcı olarak; yoğun Wan2.2 TI2V-5B, MoE olarak etiketlenmez; pekiştirmeli öğrenme otomatik olarak RLHF sayılmaz. Görev bağlantıları CodeT5'in göreve özel ince ayar gereksinimi dahil değerlendirme/belgelenmiş destek/uyarlama kanıtlarını korur. Bu üyelikleri belirlemek için modeller çalıştırılmadı.

### Open weight models / Açık ağırlıklı modeller

`/open-weights` lists every open-weight model the task taxonomy cites in one place: published weight files, parameter count, license, access condition and a derived memory estimate for planning. Search, publisher, memory ceiling and grouping are immediately available; additional filters cover license, access, task and family. Memory ceilings include all smaller estimates, and unknown estimates have a separate filter. Every model links into both taxonomy maps; the visible rows export as CSV or Excel. `/open-weights?lang=tr` translates the controls, coverage and explanations; the header preserves that language across sections and identifies the current page.

`/open-weights`, görev taksonomisinin atıf yaptığı her açık ağırlıklı modeli tek yerde listeler: yayımlanmış ağırlık dosyaları, parametre sayısı, lisans, erişim koşulu ve planlama amaçlı bellek tahmini. Arama, yayıncı, bellek üst sınırı ve gruplama doğrudan görünür; diğer filtreler lisans, erişim, görev ve aileyi kapsar. Bellek üst sınırları daha küçük tahminleri de içerir; bilinmeyen tahminlerin ayrı filtresi vardır. Her model her iki taksonomi haritasına bağlanır; görünür satırlar CSV/Excel olarak dışa aktarılır. `/open-weights?lang=tr` kontrolleri, kapsamı ve açıklamaları Türkçeye çevirir; üst menü bölümler arasında dili korur ve etkin sayfayı belirtir.

Disk size is the sum of the published artifact bytes, displayed in MiB or GiB. Memory is computed separately from the published **parameter count**, never from checkpoint bytes: `ceil((parameters × bytesPerParameter + 2 × 1024³) / 1024³)` GiB, using the existing planning assumptions of 0.55 bytes at 4-bit and 1.05 at 8-bit. The fixed 2 GiB allowance is not a bound on actual cache, context, batch or framework memory. No parameter count means no memory estimate, even when disk size is known. These hypothetical estimates establish neither quantization support nor device fit. Hugging Face's [memory estimator](https://huggingface.co/docs/accelerate/usage_guides/model_size_estimator) distinguishes dtype-dependent model sizes; its [quantization documentation](https://huggingface.co/docs/transformers/quantization/bitsandbytes) describes compatibility and mixed-precision limits. The coefficients and fixed allowance here are editorial planning assumptions, not vendor measurements.

Disk boyutu yayımlanmış dosya baytlarının toplamıdır ve MiB veya GiB olarak gösterilir. Bellek, dosya baytlarından değil, yayımlanmış **parametre sayısından** ayrı hesaplanır: `ceil((parametre × parametreBaşınaBayt + 2 × 1024³) / 1024³)` GiB; mevcut planlama varsayımları 4-bit için 0,55, 8-bit için 1,05 bayttır. Sabit 2 GiB pay, gerçek önbellek, bağlam, toplu işlem veya çalışma ortamı belleğinin üst sınırı değildir. Parametre sayısı yoksa disk boyutu bilinse bile bellek tahmini üretilmez. Bu varsayımsal tahminler kuantizasyon desteğini veya cihaza sığmayı doğrulamaz. Hugging Face [bellek tahmin aracı](https://huggingface.co/docs/accelerate/usage_guides/model_size_estimator) veri türüne bağlı boyutları ayırır; [kuantizasyon belgesi](https://huggingface.co/docs/transformers/quantization/bitsandbytes) uyumluluk ve karma hassasiyet sınırlarını açıklar. Buradaki katsayılar ve sabit pay editoryal planlama varsayımlarıdır, yayıncı ölçümleri değildir.

### Tracking open-weight releases / Açık ağırlık sürümlerini izleme

`scripts/track-open-weights.ts` re-reads every cited Hugging Face repository, refreshes the checkpoint revision, file listing, byte total, parameter count and access state, and can add a new checkpoint from a tracked publisher when it passes every rule: a published model card, a published license, published weight files, a pipeline tag that maps to a taxonomy task, an architecture that maps to a model family, no fine-tune base, no quantised copy, no serving variant, and a release newer than the cited one. Added models are marked `discovery: "auto"` and stay in the reference role, so the editorial shortlist is never widened by a script. GitHub release movements and license identifier changes are reported for a human decision, never rewritten silently. Every run writes `docs/audits/open-weights-<date>.json`.

`scripts/track-open-weights.ts`, atıf yapılan her Hugging Face deposunu yeniden okur; kontrol noktası revizyonunu, dosya listesini, bayt toplamını, parametre sayısını ve erişim durumunu tazeler ve izlenen bir yayıncının yeni bir kontrol noktasını tüm kuralları geçtiğinde ekleyebilir: yayımlanmış model kartı, yayımlanmış lisans, yayımlanmış ağırlık dosyaları, taksonomi görevine eşlenen işlem hattı etiketi, model ailesine eşlenen mimari, fine-tune tabanı olmaması, kuantize kopya olmaması, sunum varyantı olmaması ve atıf yapılandan daha yeni bir sürüm. Eklenen modeller `discovery: "auto"` ile işaretlenir ve referans rolünde kalır; editoryal kısa liste hiçbir zaman bir betikle genişlemez. GitHub sürüm hareketleri ve lisans tanımlayıcı değişiklikleri insan kararı için raporlanır, sessizce yeniden yazılmaz. Her çalışma `docs/audits/open-weights-<tarih>.json` yazar.

### Category taxonomy

The canonical display order is enforced during validation:

1. Models
2. Chat & Knowledge Work
3. Coding Agents
4. Agentic Workflows
5. Customization
6. Skills & Plugins
7. Connectors & MCP
8. Memory & Context
9. Files & Artifacts
10. Research & Web
11. Computer, Browser & Voice
12. Local & Cloud Environments
13. Automation & Scheduling
14. Permissions & Security
15. API & SDK
16. Enterprise & Governance
17. Pricing & Plans

## Architecture

The application uses Next.js App Router, React, strict TypeScript, Tailwind CSS, and Zod. The statically exported page imports and validates the repository-managed dataset once. Static page content is generated at build time, while one focused `ResearchConsole` client boundary owns search, filter controls, vendor selection, row disclosure, view switching, and URL synchronization. On first hydration that client boundary validates `window.location.search`; later interactions use the canonical serializer and client-side history replacement. Pure selector functions build immutable comparison rows and summaries, and the client does not fetch or mutate data.

```text
Canonical records
  -> Zod parsing and relationship validation
  -> normalized AtlasDataset
  -> pure selectors and indexes
  -> statically generated page shell and serialized public dataset
  -> ResearchConsole client boundary
  -> URL-synchronized search, filters, vendor pair, and view
```

This structure makes invalid source data fail early, keeps presentation logic independent of the seed vendors, and requires no backing data service. There is no account system, database, CMS, write API, scraper, analytics dependency, or remote-font dependency in v0.1.

## Data schema

The canonical dataset is assembled in [`src/data/index.ts`](src/data/index.ts) and validated by [`src/data/validation.ts`](src/data/validation.ts) against the Zod record definitions in [`src/data/schema.ts`](src/data/schema.ts).

| Record | Role |
| --- | --- |
| `Vendor` | A company and its named ecosystem. |
| `Category` | One ordered section in the fixed 17-category taxonomy. |
| `Capability` | A provider-neutral question or comparison dimension. |
| `VendorEntry` | One vendor's sourced statement for one capability. |
| `ComparisonAssessment` | A pair-specific editorial summary kept separate from vendor facts. |
| `Model` | A model's positioning, task focus areas, lifecycle, modalities, limits, and optional token pricing. |
| `Plan` | A consumer, business, or enterprise offer with public pricing language. |
| `Source` | An official first-party document referenced by evidence-bearing records. |

All IDs are stable lowercase kebab-case strings, dates use `YYYY-MM-DD`, and source URLs must use HTTPS. A substantive `VendorEntry`, `Model`, or `Plan` must reference at least one source and include `verifiedAt`. Relationships, unique IDs, unique category-scoped ordering, the exact taxonomy, vendor/capability pairs, and non-future verification dates are checked at load time.

This is a complete `VendorEntry` from the current seed:

```ts
const entry: VendorEntry = {
  id: "anthropic-primary-coding-agent",
  capabilityId: "primary-coding-agent",
  vendorId: "anthropic",
  title: "Claude Code",
  summary:
    "Claude Code is Anthropic's first-party agentic coding tool for understanding, editing, testing, and reviewing code.",
  details: [],
  productNames: ["Claude Code"],
  availability: "available",
  sourceIds: ["anthropic-claude-code"],
  verifiedAt: "2026-08-11",
};
```

`verifiedAt` is the date on which a contributor checked the cited official evidence. It is not necessarily the feature announcement date, model release date, plan launch date, or date on which the underlying product last changed.

## Local development

Requirements:

- Node.js 22 or newer
- npm 10.9.8

Install the locked dependencies:

```bash
npm ci
```

Install the Playwright Chromium browser once on a new machine:

```bash
npx playwright install chromium
```

Start the local development server, then open `http://localhost:3000`:

```bash
npm run dev
```

Run the release checks individually:

```bash
npm run validate:data
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
npm run verify:static
```

Run the validation, lint, type, unit/component, production-build, and static artifact verification sequence with one command:

```bash
npm run check
```

Preview the built static export with `npm start`. Run `npm run test:e2e:static`
after `npm run check` to test the actual production pages, including deep links.
Static browser tests use port 3107, independently of the development server;
set `PLAYWRIGHT_PORT` to select another free port.
`npm run validate:codex` runs this complete sequence; CI also checks the static
export in Chromium before deployment.

`npm run build` also generates CSP SHA-256 hashes for the inline scripts in the
exported HTML, writing them only to `out/staticwebapp.config.json`. The source
template stays restrictive. `verify:static` rejects stale hashes, and `npm start`
serves the exported security headers so browser tests exercise the deployed policy.

`npm run build`, dışa aktarılan HTML içindeki betiklerin SHA-256 özetlerini de
üretir ve yalnızca `out/staticwebapp.config.json` dosyasına yazar. Kaynak şablonun
kısıtlayıcı politikası korunur. `verify:static` eski özetleri reddeder; `npm start`
aynı güvenlik başlıklarını sunarak tarayıcı testlerinin yayın politikasını sınamasını sağlar.

Learning progress is stored only in this browser. Invalid saved cards are recovered
individually, unknown concepts are discarded, and unavailable storage is reported.
Cross-tab updates use the last saved snapshot; simultaneous edits are not merged.

CSV and Excel exports include each vendor's verification date and source URLs.
CSV text beginning with spreadsheet formula prefixes is escaped as literal text.

`npm run check` intentionally excludes browser tests. Run `npm run test:e2e`
separately when verifying rendered workflows or preparing a release.

## Deployment

Production is published at [https://aia.aserdargun.com](https://aia.aserdargun.com) on Azure Static Web Apps Free. The Azure-provided default hostname remains [https://brave-stone-05e2d3603.7.azurestaticapps.net](https://brave-stone-05e2d3603.7.azurestaticapps.net).

The `main` branch is the production source. [`.github/workflows/deploy-swa-aia-aserdargun-com.yml`](.github/workflows/deploy-swa-aia-aserdargun-com.yml) installs locked dependencies, validates canonical data, runs lint, strict TypeScript checks, and unit/component tests, builds the static Next.js export, verifies `out/index.html` and Next.js assets, and only then uploads the prebuilt `out/` directory to Azure.

The target deployment settings are:

| Deployment setting | Value |
| --- | --- |
| Azure resource group | `rg-aia-aserdargun-com` |
| Azure Static Web App | `swa-aia-aserdargun-com` |
| Azure region | `West Europe` |
| Azure plan | `Free` |
| Production branch | `main` |
| Build output | `out/` |
| Production URL | `https://aia.aserdargun.com` |
| Azure default URL | `https://brave-stone-05e2d3603.7.azurestaticapps.net` |
| Custom hostname | `aia.aserdargun.com` |

The workflow reads the Azure deployment token only from the repository Actions secret `AZURE_STATIC_WEB_APPS_API_TOKEN_SWA_AIA_ASERDARGUN_COM`. The secret value must never be placed in source, documentation, issue text, build logs, or the client bundle.

The existing IHS `_dnsauth.aia` TXT and `aia` CNAME records remain unchanged during application deployments. DNS mutations, apex, `www`, mail, nameserver, and unrelated DNS records are outside this deployment's scope.

After the target deployment prerequisites above are complete, publish an application or data update:

1. Make and review the canonical source change on a feature branch.
2. Run `npm run check` and `npm run test:e2e` locally.
3. Update `main` only after the checks pass.
4. Confirm the `Deploy AIA to Azure Static Web Apps` workflow succeeds.
5. Smoke-test the affected behavior at both the Azure-provided URL and the custom production URL.

`npm run test:e2e` uses localhost by default. After production is live, run the same suite against it without starting a local server:

```bash
PLAYWRIGHT_BASE_URL=https://aia.aserdargun.com npm run test:e2e
```

## Updating the atlas

Every change follows the same public, reviewable workflow:

1. Identify the capability, model, plan, or source record that changed.
2. Consult a current official Anthropic, OpenAI, Z.ai, MiniMax, DeepSeek, or Qwen page.
3. Update or add the source record before referencing it.
4. Update the canonical fact and set `verifiedAt` to the official-source check date.
5. Add or update tests when schema or selector behavior changes.
6. Run validation, tests (including `npm run test:e2e`), type checking, linting,
   and the production build.
7. Inspect the affected comparison and source expansion in the browser.
8. Commit the data and evidence change and submit it for public review.

For example, to update the “Primary coding agent” capability, first review or add its official document in [`src/data/sources.ts`](src/data/sources.ts). Then change the corresponding fact in [`src/data/vendor-entries.ts`](src/data/vendor-entries.ts), reuse the source ID, and set `verifiedAt` to the day you checked that page. Update the pair-specific assessment only when the evidence changes the comparison conclusion. Finally, run the documented checks and inspect the expanded row so the claim, availability, source link, and visible date agree.

Do not translate an undocumented claim into `not-available`. When reviewed first-party material does not establish a fact, use `not-documented` or `unknown` as appropriate.

## Adding a vendor

The comparison table is generated from stable vendor IDs, so a new ecosystem does not need a hard-coded table column. Add and verify records in this order:

1. Add the vendor identity to [`src/data/vendors.ts`](src/data/vendors.ts).
2. Expand the `Source.publisher` enum in [`src/data/schema.ts`](src/data/schema.ts) for the new first-party publisher.
3. Add official documents to [`src/data/sources.ts`](src/data/sources.ts).
4. Add one sourced fact per covered capability to [`src/data/vendor-entries.ts`](src/data/vendor-entries.ts). Missing pairs already render as `Not documented`; do not manufacture entries solely for apparent completeness.
5. Add current model records in [`src/data/models.ts`](src/data/models.ts) and plan records in [`src/data/plans.ts`](src/data/plans.ts).
6. Add pair-specific comparisons in [`src/data/assessments.ts`](src/data/assessments.ts). These assessments describe evidence; they must not become rankings or opaque scores.
7. Update [`tests/data/dataset.test.ts`](tests/data/dataset.test.ts) and selector/component coverage for the expanded vendor set and pair behavior.
8. Validate the dataset, exercise both vendor positions and views, and run the complete release checks.

Add to [`src/data/capabilities.ts`](src/data/capabilities.ts) only when the vendor exposes a genuinely new provider-neutral comparison dimension. Preserve the category taxonomy in [`src/data/categories.ts`](src/data/categories.ts) unless a separately reviewed schema change intentionally revises it.

## Source methodology

V0.1 uses official first-party Anthropic, OpenAI, Z.ai, MiniMax, DeepSeek, and Qwen documentation, help pages, product pages, pricing pages, and announcements. A source record identifies its publisher, URL, and source type; claims refer to source IDs so one official page can support multiple records without duplicating URLs. Evidence-bearing records expose their source links and verification dates in the interface.

Important limitations:

- Vendor documentation is first-party evidence, not independent performance evaluation.
- The atlas records documented product scope and positioning; it does not benchmark quality, reliability, latency, safety, or real-world outcomes.
- The seed covers Anthropic, OpenAI, Z.ai, MiniMax, DeepSeek, and Qwen. Architecture for more vendors is not the same as completed research for those vendors.
- Vendor research is maintained manually. There is no unattended scraper, automatic fact update, or ordinary-build network check, so an official page can change or disappear after verification. The open-weight catalogue is the one exception: `scripts/track-open-weights.ts` re-reads the cited Hugging Face repositories, refreshes the checkpoint revision, file listing, byte totals, parameter count and access state, and can add a new checkpoint from a tracked publisher. Fine-tunes, quantised copies, serving variants and superseded releases are rejected by rule, and every run leaves a dated audit record under `docs/audits/`.
- `verifiedAt` records an evidence check, not a release or announcement date; older records should be rechecked before time-sensitive decisions.
- `not-documented` means the reviewed official material did not establish a capability. It does not prove that the capability is technically impossible or commercially unavailable.
- Pair assessments are transparent editorial summaries of cited facts. They are not quantitative scores, recommendations, or declarations of a winner.
- Public prices and limits can depend on region, billing period, seat count, usage tier, taxes, preview status, and negotiated terms; the canonical text preserves material qualifications when documented.

## Repository structure

```text
.
├── .github/workflows/
│   └── deploy-swa-aia-aserdargun-com.yml # Pinned production deployment workflow
├── docs/superpowers/          # Approved product specification and implementation plan
├── e2e/
│   └── atlas.spec.ts          # Chromium workflow, responsive, focus, and overflow coverage
├── scripts/
│   ├── validate-data.ts       # Deterministic dataset validation entry point
│   ├── track-open-weights.ts   # Scheduled open-weight refresh and discovery
│   └── verify-static-export.ts # Static build artifact verification entry point
├── src/
│   ├── app/                   # Next.js App Router shell and global styles
│   ├── components/atlas/      # Research Console, table, evidence, filters, vendor view
│   ├── components/open-weights/ # Open-weight browser, filters and footprint table
│   ├── components/            # Shared site header and footer
│   ├── data/                  # Canonical records, Zod schema, and relationship validation
│   └── lib/                   # Pure comparison, search, freshness, label, footprint and URL selectors
├── tests/
│   ├── app/                   # Server-page rendering coverage
│   ├── components/            # User-facing interaction and evidence coverage
│   ├── data/                  # Schema and complete-dataset integrity coverage
│   └── lib/                   # Selector and URL-state coverage
├── next.config.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── vitest.config.ts
```

## Roadmap

1. Add Google/Gemini and Microsoft/Copilot using the existing vendor model.
2. Add change history and per-record supersession metadata.
3. Add an optional scheduled link-health and stale-data report.
4. Add saved comparison presets without requiring accounts.
5. Evaluate a public contribution form or CMS only after repository-based updates become a measurable bottleneck.
6. Add JSON exports alongside the existing CSV and Excel exports.
7. Add multilingual presentation while retaining one canonical fact layer.

Public visibility does not imply a software license. No license has been selected for v0.1; licensing remains an explicit project-owner decision.

## September 2026 content review

The [21 September audit](docs/audits/2026-09-21-content-audit.md) records corrected citations, model and plan changes, learning-content corrections, and unresolved evidence. The header date is the latest individual source check, not a blanket refresh.

Source URLs are checked against publisher-specific primary hosts. In particular, `minimax.com` is unrelated to the AI provider and is rejected; AI documentation is under `platform.minimax.io`. The allowlist verifies provenance boundaries, not whether a page supports every claim.

AIA links onward to GPU, LLM, and USL in the aserdargun.com learning system. Navigation descriptions are available in Turkish and English; the existing comparison and Learn content is English. Learn progress remains local to the browser. Static exports include deterministic `sitemap.xml` and `robots.txt`.
