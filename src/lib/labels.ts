import type { Availability, ComparisonStatus, Model, ModelTask } from "@/data/schema";
import type { Freshness } from "@/lib/freshness";
import type { AtlasView } from "@/lib/url-state";

export const learningPathLabels = {
  en: { title: "Continue learning", description: "AIA maps the ecosystem. Explore compute, model serving, or training next.", home: "Learning system" },
  tr: { title: "Öğrenmeye devam et", description: "AIA ekosistemi tanıtır. Hesaplama, model sunumu veya eğitimle devam et.", home: "Öğrenme sistemi" },
} as const;

export const availabilityLabels: Record<Availability, string> = {
  available: "Available",
  limited: "Limited",
  "not-available": "Not available",
  "not-documented": "Not documented",
  unknown: "Unknown",
};

export const comparisonStatusLabels: Record<ComparisonStatus, string> = {
  "strong-parity": "Strong parity",
  "partial-parity": "Partial parity",
  "different-approach": "Different approach",
  "vendor-specific": "Vendor-specific",
  "insufficient-evidence": "Insufficient evidence",
};

export const freshnessLabels: Record<Freshness, string> = {
  current: "Current",
  aging: "Aging",
  stale: "Stale",
};

export const atlasViewLabels: Record<AtlasView, string> = {
  explorer: "Explorer",
  vendors: "Vendor comparison",
  "all-vendors": "All vendors",
};

export type ModelLocale = "en" | "tr";

export const modelTaskLabels = {
  en: {
    "writing-chat": { name: "Writing & chat", description: "Drafting, everyday questions, and conversational assistance." },
    reasoning: { name: "Reasoning & analysis", description: "Complex problems, multi-step reasoning, and analytical work." },
    coding: { name: "Coding", description: "Writing, reviewing, debugging, and maintaining software." },
    agents: { name: "Agents & workflows", description: "Tool use, task planning, and multi-step workflows in a connected runtime." },
    documents: { name: "Document work", description: "Reading, summarizing, extracting, or preparing document content." },
    "visual-understanding": { name: "Visual understanding", description: "Interpreting images, screenshots, and supported video inputs." },
    "image-generation": { name: "Image generation", description: "Creating images and graphics from text instructions." },
  },
  tr: {
    "writing-chat": { name: "Yazı ve sohbet", description: "Metin taslakları, günlük sorular ve sohbet desteği." },
    reasoning: { name: "Akıl yürütme ve analiz", description: "Karmaşık problemler, çok adımlı akıl yürütme ve analitik çalışmalar." },
    coding: { name: "Kodlama", description: "Yazılım geliştirme, kod inceleme, hata ayıklama ve bakım." },
    agents: { name: "Ajanlar ve iş akışları", description: "Bağlı bir çalışma ortamında araç kullanımı, görev planlama ve çok adımlı iş akışları." },
    documents: { name: "Belge çalışmaları", description: "Belge içeriğini okuma, özetleme, bilgi çıkarma veya hazırlama." },
    "visual-understanding": { name: "Görsel anlama", description: "Görüntüleri, ekran görüntülerini ve desteklenen video girdilerini yorumlama." },
    "image-generation": { name: "Görsel üretimi", description: "Metin yönergelerinden görüntü ve grafik üretme." },
  },
} satisfies Record<ModelLocale, Record<ModelTask, { name: string; description: string }>>;

export const modelBrowserLabels = {
  en: {
    title: "Models by task",
    intro: "Start with the work you want to do. Explore the models in the catalog by their documented focus areas.",
    scope: "Editorial grouping of stored evidence, not a benchmark or a complete live catalog. A model can appear in several groups; an omitted task does not imply lack of support. Status and specifications reflect each record’s evidence date.",
    search: "Search models", placeholder: "Model, vendor, or task…",
    vendor: "Vendor", allVendors: "All vendors", tasks: "Model tasks", allTasks: "All tasks",
    historical: "Include legacy and retired models", reset: "Clear filters",
    models: "Models", groups: "Task groups", unique: "Unique models", groupCount: "models",
    evidence: "Official sources", checked: "Evidence checked", status: "Recorded status",
    input: "Input", output: "Output", context: "Context window", tokens: "tokens", notListed: "Not listed",
    focus: "Catalog focus areas", details: "Model details",
    empty: "No models match these filters.", emptyHint: "Try another task, vendor, or search term.",
    csv: "Export CSV", excel: "Export Excel", exports: "Export filtered models",
    exportTask: "Task", exportModel: "Model", exportVendor: "Vendor", exportStatus: "Recorded status",
    exportDate: "Evidence checked", exportSources: "Official sources",
    loading: "Loading model groups…",
  },
  tr: {
    title: "Göreve göre modeller",
    intro: "Yapmak istediğin işle başla. Katalogdaki modelleri belgelenmiş kullanım alanlarına göre keşfet.",
    scope: "Kaydedilmiş kaynaklara dayanan editoryal gruplandırmadır; performans sıralaması veya eksiksiz canlı katalog değildir. Bir model birden fazla grupta yer alabilir; bir görevin listelenmemesi desteklenmediği anlamına gelmez. Durum ve özellikler kaydın doğrulama tarihini yansıtır.",
    search: "Model ara", placeholder: "Model, sağlayıcı veya görev…",
    vendor: "Sağlayıcı", allVendors: "Tüm sağlayıcılar", tasks: "Model görevleri", allTasks: "Tüm görevler",
    historical: "Eski ve kullanımdan kaldırılmış modelleri dahil et", reset: "Filtreleri temizle",
    models: "Modeller", groups: "Görev grupları", unique: "Benzersiz model", groupCount: "model",
    evidence: "Resmî kaynaklar", checked: "Kaynak doğrulaması", status: "Kaydedilen durum",
    input: "Girdi", output: "Çıktı", context: "Bağlam penceresi", tokens: "token", notListed: "Belirtilmemiş",
    focus: "Katalogdaki kullanım alanları", details: "Model ayrıntıları",
    empty: "Bu filtrelere uyan model bulunamadı.", emptyHint: "Başka bir görev, sağlayıcı veya arama terimi dene.",
    csv: "CSV indir", excel: "Excel indir", exports: "Filtrelenmiş modelleri dışa aktar",
    exportTask: "Görev", exportModel: "Model", exportVendor: "Sağlayıcı", exportStatus: "Kaydedilen durum",
    exportDate: "Kaynak doğrulaması", exportSources: "Resmî kaynaklar",
    loading: "Model grupları yükleniyor…",
  },
} as const;

export const modelLifecycleLabels = {
  en: { current: "Current", preview: "Preview", legacy: "Legacy", deprecated: "Retired" },
  tr: { current: "Güncel", preview: "Ön izleme", legacy: "Eski", deprecated: "Kullanımdan kaldırılmış" },
} satisfies Record<ModelLocale, Record<Model["lifecycle"], string>>;

export const modelModalityLabels: Record<ModelLocale, Record<string, string>> = {
  en: { text: "Text", image: "Image", video: "Video", file: "File", audio: "Audio" },
  tr: { text: "Metin", image: "Görüntü", video: "Video", file: "Dosya", audio: "Ses" },
};

export const taxonomyLabels = {
  en: {
    navigation: "Maps", navigationLabel: "Taxonomy maps", modelNav: "Model taxonomy", taskNav: "Task taxonomy",
    models: { title: "AI model taxonomy", intro: "Explore model families, architectures, learning paradigms, generative formulations, modalities, training and tasks.", branches: "classification axes", entries: "selected concepts" },
    tasks: { title: "AI task taxonomy", intro: "Explore 85 technical tasks through their inputs and intended outputs, from language and vision to planning and action.", branches: "task families", entries: "task entries" },
    language: "Language / Dil", scope: "An editorial synthesis of established concepts, not a universal or exhaustive standard. Branches overlap; a model can belong to several groups.",
    englishLabels: "The diagrams retain their English terminology. Page controls and explanations are available in both languages.",
    systemNote: "Amber cards identify browser and desktop tasks evaluated at the system level, including tools and the environment.",
    zoomIn: "Zoom in", zoomOut: "Zoom out", fit: "Fit width", actual: "100%", zoom: "Zoom level",
    focusSelected: "Focus selected",
    minimap: "Mini map", minimapShow: "Show mini map", minimapHide: "Hide mini map", minimapNavigate: "Navigate using mini map",
    minimapSize: "Mini map size", minimapResizeHint: "Drag the top-left corner to resize. Arrow keys adjust the size; Home selects the smallest size and End the largest.",
    minimapHint: "The orange frame shows the visible area. Drag it to pan the map, or click or tap to jump to a region. Arrow keys move the map; Home and End go to its corners. Enter or Space focuses the main map.",
    fullscreen: "Full screen", exitFullscreen: "Exit full screen", fullscreenError: "Full screen is unavailable. You can still zoom and scroll within the map.",
    download: "Download SVG", original: "Open SVG", sourcesLink: "View sources", controls: "Map controls", guide: "Map guide",
    hint: "Use the mouse wheel to zoom at the pointer and drag to pan. Selecting a card brings it into view; use Focus selected to return to it. You can also use the zoom buttons, scrollbars and arrow keys, or swipe on touch screens. Click a source marker to open its reference.",
    region: "Scrollable taxonomy map", sources: "Sources for this map", sourceScope: "Author textbooks, original papers and official documentation support individual concepts. The branch layout is an editorial choice.",
    definitions: "Download definitions and full source catalogue (English)", loading: "Loading taxonomy map…",
  },
  tr: {
    navigation: "Haritalar", navigationLabel: "Taksonomi haritaları", modelNav: "Model taksonomisi", taskNav: "Görev taksonomisi",
    models: { title: "Yapay zekâ model taksonomisi", intro: "Model ailelerini, mimarileri, öğrenme paradigmalarını, üretim yaklaşımlarını, veri türlerini, eğitimi ve görevleri keşfet.", branches: "sınıflandırma ekseni", entries: "seçili kavram" },
    tasks: { title: "Yapay zekâ görev taksonomisi", intro: "Dil ve görmeden planlama ve eyleme uzanan 85 teknik görevi, girdileri ve hedeflenen çıktıları üzerinden keşfet.", branches: "görev ailesi", entries: "görev" },
    language: "Language / Dil", scope: "Yerleşik kavramların editoryal bir derlemesidir; evrensel veya eksiksiz bir standart değildir. Dallar örtüşebilir; bir model birden fazla grupta yer alabilir.",
    englishLabels: "Grafiklerde İngilizce terimler korunur. Sayfa kontrolleri ve açıklamalar iki dilde sunulur.",
    systemNote: "Sarı kartlar, araçlar ve çalışma ortamıyla birlikte sistem düzeyinde değerlendirilen tarayıcı ve masaüstü görevlerini belirtir.",
    zoomIn: "Yakınlaştır", zoomOut: "Uzaklaştır", fit: "Genişliğe sığdır", actual: "%100", zoom: "Yakınlaştırma düzeyi",
    focusSelected: "Seçilene odaklan",
    minimap: "Mini harita", minimapShow: "Mini haritayı göster", minimapHide: "Mini haritayı gizle", minimapNavigate: "Mini haritayla gezin",
    minimapSize: "Mini harita boyutu", minimapResizeHint: "Boyutlandırmak için sol üst köşeyi sürükle. Ok tuşlarıyla boyutu ayarla; Home en küçük, End en büyük boyutu seçer.",
    minimapHint: "Turuncu çerçeve görünür alanı gösterir. Haritada gezinmek için çerçeveyi sürükle veya bir bölgeye geçmek için tıkla ya da dokun. Ok tuşları haritayı kaydırır; Home ve End köşelere götürür. Enter veya boşluk tuşu ana haritaya odaklanır.",
    fullscreen: "Tam ekran", exitFullscreen: "Tam ekrandan çık", fullscreenError: "Tam ekran kullanılamıyor. Haritanın içinde yakınlaştırıp kaydırmaya devam edebilirsin.",
    download: "SVG indir", original: "SVG aç", sourcesLink: "Kaynakları görüntüle", controls: "Harita kontrolleri", guide: "Harita rehberi",
    hint: "Fare tekerleğiyle imlecin bulunduğu noktaya yakınlaş, sürükleyerek gezin. Bir kart seçtiğinde görünür alana gelir; geri dönmek için Seçilene odaklan düğmesini kullan. Yakınlaştırma düğmeleri, kaydırma çubukları ve ok tuşlarını da kullanabilir, dokunmatik ekranda parmağınla kaydırabilirsin. Kaynak işaretine tıklayarak ilgili yayını aç.",
    region: "Kaydırılabilir taksonomi haritası", sources: "Bu haritanın kaynakları", sourceScope: "Yazarların ders kitapları, özgün makaleler ve resmî belgeler tek tek kavramları destekler. Dalların düzeni editoryal bir tercihtir.",
    definitions: "Tanımları ve tam kaynak listesini indir (İngilizce)", loading: "Taksonomi haritası yükleniyor…",
  },
} as const;

export const modelFamilyLabels = {
  en: {
    cardAction: "view open-weight models, tasks and sources",
    title: "Explore models by family", select: "Select a model family or concept", placeholder: "Choose a family from the map or this list",
    coverage: "concepts with model examples", modelCount: "shared models",
    research: "Research result and scope", researchSources: "Research sources",
    method: "How family membership is documented",
    methodology: "These examples share the task map’s catalogue of released neural weights, statistical parameters, learned rules and pipelines. The artifact type and required inputs are stated explicitly. Architecture, training method and modality are overlapping properties. Each membership cites its own evidence; a definition alone does not establish membership. A specialized example does not provide a universal pretrained model for the whole concept.",
    evidenceHelp: "Documented membership describes the model. Component identifies a part of a larger model or pipeline; the tasks belong to the complete checkpoint. Adaptation support records a documented customization path, not the checkpoint’s original training history. Task evidence retains its evaluated, documented or adaptation-required status.",
    hint: "Click a family or concept to inspect models, task support and evidence. The task-family column still opens the companion map. Definition sources remain in the panel and original SVG.",
    panel: "Family, models and tasks", close: "Close family panel", definition: "Concept definition source",
    empty: "No verified model mapping in this catalogue", invalid: "This family identifier is not in the catalogue. Select a family from the list.",
    count: "model examples", tasks: "Tasks in the shared catalogue", taskEvidence: "Task evidence and scope",
    why: "Why it belongs here", sources: "Family membership sources", member: "Documented membership", component: "Component of the model", compatible: "Adaptation support",
    taskScope: "Task support is checkpoint-specific. An adaptation label requires extra training or a pipeline; family membership alone does not guarantee a task.",
    search: "Filter this family", searchPlaceholder: "Model or task name…", noMatches: "No models match this search.",
    axes: { "model-families": "Model families", "neural-architectures": "Neural architectures", "learning-paradigms": "Learning paradigms", "generative-formulations": "Generative formulations", "modalities-data": "Modalities and data", "training-adaptation": "Training and adaptation" },
  },
  tr: {
    cardAction: "açık ağırlıklı modelleri, görevleri ve kaynakları görüntüle",
    title: "Aileye göre modelleri keşfet", select: "Model ailesi veya kavram seç", placeholder: "Haritadan veya bu listeden bir aile seç",
    coverage: "kavramda model örneği", modelCount: "ortak model",
    research: "Araştırma sonucu ve kapsam", researchSources: "Araştırma kaynakları",
    method: "Aile üyeliği nasıl belgeleniyor?",
    methodology: "Bu örnekler görev haritasının yayımlanmış sinir ağı ağırlıkları, istatistiksel parametreler, öğrenilmiş kurallar ve işlem hatları kataloğunu paylaşır. Dosya türü ve gereken girdiler açıkça belirtilir. Mimari, eğitim yöntemi ve veri türü örtüşebilen özelliklerdir. Her üyelik kendi kanıtına dayanır; tanım tek başına üyeliği kanıtlamaz. Uzman örneği, tüm kavram için evrensel ön eğitimli model sağlamaz.",
    evidenceHelp: "Belgelenmiş üyelik modeli tanımlar. Bileşen, daha büyük modelin veya işlem hattının bir parçasını belirtir; görevler ağırlıkların tamamına aittir. Uyarlama desteği, ağırlıkların özgün eğitim geçmişini değil belgelenmiş özelleştirme yolunu gösterir. Görev kanıtları değerlendirme, belgelenmiş destek veya uyarlama gerekiyor durumlarını korur.",
    hint: "Modelleri, görev desteğini ve kanıtları görmek için bir aileye veya kavrama tıkla. Görev ailesi sütunu eşlik eden haritayı açar. Tanım kaynakları panelde ve özgün SVG içinde bulunur.",
    panel: "Aile, modeller ve görevler", close: "Aile panelini kapat", definition: "Kavram tanımının kaynağı",
    empty: "Bu katalogda doğrulanmış model eşleştirmesi yok", invalid: "Bu aile kimliği katalogda bulunmuyor. Listeden bir aile seç.",
    count: "model örneği", tasks: "Ortak katalogdaki görevler", taskEvidence: "Görev kanıtı ve kapsamı",
    why: "Bu gruba neden dahil?", sources: "Aile üyeliğinin kaynakları", member: "Belgelenmiş üyelik", component: "Modelin bir bileşeni", compatible: "Uyarlama desteği",
    taskScope: "Görev desteği ağırlık sürümüne özeldir. Uyarlama etiketi ek eğitim veya işlem hattı gerektirir; aile üyeliği tek başına görevi garanti etmez.",
    search: "Bu ailede filtrele", searchPlaceholder: "Model veya görev adı…", noMatches: "Bu aramayla eşleşen model yok.",
    axes: { "model-families": "Model aileleri", "neural-architectures": "Sinir ağı mimarileri", "learning-paradigms": "Öğrenme paradigmaları", "generative-formulations": "Üretim yaklaşımları", "modalities-data": "Veri türleri", "training-adaptation": "Eğitim ve uyarlama" },
  },
} as const;

export const taskBenchmarkLabels = {
  en: {
    title: "Benchmark comparison", reviewed: "Evidence checked", published: "Result published", undated: "Publication date not stated",
    comparison: "Shared benchmark table", single: "Single verified result", gap: "No comparable result verified",
    why: "What the evidence supports", limits: "What remains uncertain", candidates: "Reviewed models and released files", model: "Model / configuration",
    score: "Score", leader: "Leads this table", tied: "Tied in this table", higher: "Higher is better", lower: "Lower is better",
    publisher: "Publisher report", independent: "Other researchers’ comparison", direct: "Direct task measurement", proxy: "Related capability / pipeline proxy",
    historical: "Prior-year reference", protocol: "Evaluation conditions", source: "Result source", references: "Review sources", weights: "Released files", license: "License",
    gated: "Access conditions apply", public: "Public release", all: "All evidence statuses", filter: "Filter tasks by benchmark evidence", search: "Find a task", placeholder: "Task name…",
    reviewedTasks: "tasks reviewed", comparisons: "with comparisons", singles: "with one result", gaps: "without comparable scores", additional: "additional model releases",
    method: "How to read the comparisons",
    methodology: "These are selected published results, checked on 2026-10-21. A highlighted row leads only its own table, not all models or every use of the task. Dataset, metric, model version, training exposure, harness and inference budget must be considered together. Different tables are never normalized into a global score; ties are retained and small gaps may be within unreported uncertainty.",
    notRun: "Models were not run locally for this review. A recent source check does not make an old benchmark current. Missing scores mean missing verified comparable evidence, not zero performance or absence of capable models.",
  },
  tr: {
    title: "Benchmark karşılaştırması", reviewed: "Kanıt kontrolü", published: "Sonucun yayımı", undated: "Yayım tarihi belirtilmemiş",
    comparison: "Ortak benchmark tablosu", single: "Doğrulanmış tek sonuç", gap: "Karşılaştırılabilir sonuç doğrulanamadı",
    why: "Kanıt neyi destekliyor?", limits: "Belirsiz kalan noktalar", candidates: "İncelenen modeller ve yayımlanmış dosyalar", model: "Model / ayarlar",
    score: "Puan", leader: "Bu tabloda önde", tied: "Bu tabloda eşit", higher: "Yüksek daha iyi", lower: "Düşük daha iyi",
    publisher: "Yayıncı raporu", independent: "Diğer araştırmacıların karşılaştırması", direct: "Doğrudan görev ölçümü", proxy: "İlgili yetenek / işlem hattı ölçümü",
    historical: "Önceki yıl referansı", protocol: "Değerlendirme koşulları", source: "Sonucun kaynağı", references: "İnceleme kaynakları", weights: "Yayımlanmış dosyalar", license: "Lisans",
    gated: "Erişim koşulları geçerli", public: "Herkese açık sürüm", all: "Tüm kanıt durumları", filter: "Görevleri benchmark kanıtına göre filtrele", search: "Görev ara", placeholder: "Görev adı…",
    reviewedTasks: "görev incelendi", comparisons: "karşılaştırmalı", singles: "tek sonuçlu", gaps: "karşılaştırılabilir puan yok", additional: "ek model sürümü",
    method: "Karşılaştırmalar nasıl okunmalı?",
    methodology: "Bunlar 2026-10-21 tarihinde kontrol edilmiş, seçili yayımlanmış sonuçlardır. İşaretlenen satır yalnızca kendi tablosunda öndedir; tüm modellerde veya görevin her kullanımında değil. Veri kümesi, ölçüt, model sürümü, eğitimde görülme durumu, çalıştırma düzeni ve çıkarım bütçesi birlikte değerlendirilmelidir. Farklı tablolar genel bir puanda birleştirilmez; eşitlikler korunur ve küçük farklar raporlanmamış belirsizlik içinde kalabilir.",
    notRun: "Bu incelemede modeller yerel olarak çalıştırılmadı. Kaynağın yeni kontrol edilmesi eski benchmark’ı güncel yapmaz. Eksik puan, doğrulanmış karşılaştırılabilir kanıt eksikliğidir; sıfır performans veya yetenekli model bulunmadığı anlamına gelmez.",
  },
} as const;

export const taskModelLabels = {
  en: {
    cardAction: "view models and sources",
    title: "Find open-weight models", select: "Select a task", placeholder: "Choose a task from the map or this list",
    coverage: "tasks with model candidates", modelCount: "models", snapshot: "Source review",
    method: "How the shortlist is selected",
    methodology: "Task-specific evidence, released weights and license visibility guide this editorial shortlist. A shortlist entry is a candidate to evaluate, not a universal winner. Reference models provide reproducible specialist baselines; they are not presented as current leaders. Scores come from publishers, use different datasets and protocols, and are not normalized or independently reproduced here.",
    evidenceHelp: "Evaluated: relevant evaluation is cited. Documented: primary sources describe the checkpoint or the complete published pipeline. Adaptation: extra training or an unverified integration is proposed. A documented pipeline still requires its listed inputs and components; it is not a standalone model.",
    hint: "Click a task card to see models and evidence. Original task-definition citations remain available in the panel and SVG download.",
    panel: "Models and evidence", close: "Close model panel", empty: "No verified pretrained recommendation",
    research: "Research result and scope", researchSources: "Research sources",
    researchOutcomes: { specialist: "Checkpoint for a specific domain", pipeline: "Requires the documented pipeline", "no-verified-model": "No verified ready model in the reviewed sources" },
    definition: "Task definition source", why: "Why this model", context: "Scope and requirements", sources: "Supporting sources",
    weights: "Weight files", parameterFiles: "Parameter files", ruleFiles: "Learned rule files", license: "License", reviewed: "Checked", access: "Access", public: "Public model files", gated: "Acceptance or approval required",
    shortlist: "Shortlist candidate", reference: "Specialist reference", evaluated: "Evaluation cited", documented: "Documented support", adaptation: "Adaptation required",
    noSelection: "Select a task to inspect its models and primary evidence.", invalid: "This task identifier is not in the catalogue. Select a task from the list.",
    count: "model candidates", notRun: "This catalogue reviews publications and released artifacts. Models were not executed and reported performance was not reproduced. Suitability for your data requires evaluation.",
    parameterKinds: { statistical: "Published statistical parameters", rules: "Learned rules and support statistics", pipeline: "Pipeline with released neural checkpoints" },
    repositoryLicense: "The linked terms license the repository. Separate artifact-specific terms are not stated in the cited release; dataset and dependency terms also apply.",
    artifactIdentity: "Artifact identity", pinnedRevision: "Observed Git revision", file: "File", bytes: "bytes",
    fileId: "Publisher file ID", publisherChecksum: "Publisher checksum", checksumNotVerified: "The publisher’s checksum has not been recomputed here.",
    publisherArtifact: "Publisher-hosted file or release, not an immutable Git checkpoint. The recorded file metadata identifies the observation; it is not a cryptographic integrity check.",
    releaseEvidence: "Publisher’s download instructions",
  },
  tr: {
    cardAction: "modelleri ve kaynakları görüntüle",
    title: "Açık ağırlıklı modelleri bul", select: "Görev seç", placeholder: "Haritadan veya bu listeden bir görev seç",
    coverage: "görevde model adayı", modelCount: "model", snapshot: "Kaynak incelemesi",
    method: "Kısa liste nasıl seçiliyor?",
    methodology: "Bu editoryal kısa liste; göreve özel kanıt, yayımlanmış ağırlıklar ve görünür lisans bilgisine dayanır. Kısa listedeki model, değerlendirilecek bir adaydır; evrensel birincilik iddiası taşımaz. Referans modeller tekrarlanabilir uzman başlangıçlarıdır; güncel lider olarak sunulmaz. Puanlar yayıncılardan gelir, farklı veri kümeleri ve protokoller kullanır; burada normalize edilmedi veya bağımsız olarak yeniden üretilmedi.",
    evidenceHelp: "Değerlendirme: ilgili değerlendirmeye kaynak verilir. Belgelenmiş destek: birincil kaynaklar ağırlık sürümünü veya yayımlanmış tam işlem hattını açıklar. Uyarlama: ek eğitim veya doğrulanmamış bir bütünleştirme önerilir. Belgelenmiş işlem hattı da belirtilen girdi ve bileşenleri gerektirir; tek başına bir model değildir.",
    hint: "Modelleri ve kanıtları görmek için görev kartına tıkla. Özgün görev tanımı kaynaklarına panelden ve SVG indirmesinden ulaşabilirsin.",
    panel: "Modeller ve kanıtlar", close: "Model panelini kapat", empty: "Doğrulanmış hazır model önerisi yok",
    research: "Araştırma sonucu ve kapsam", researchSources: "Araştırma kaynakları",
    researchOutcomes: { specialist: "Belirli bir alan için yayımlanmış model", pipeline: "Belgelenmiş işlem hattı gerekiyor", "no-verified-model": "İncelenen kaynaklarda hazır model doğrulanamadı" },
    definition: "Görev tanımının kaynağı", why: "Neden bu model?", context: "Kapsam ve gereksinimler", sources: "Destekleyici kaynaklar",
    weights: "Ağırlık dosyaları", parameterFiles: "Parametre dosyaları", ruleFiles: "Öğrenilmiş kural dosyaları", license: "Lisans", reviewed: "Kontrol", access: "Erişim", public: "Herkese açık model dosyaları", gated: "Koşul kabulü veya onay gerekiyor",
    shortlist: "Kısa liste adayı", reference: "Uzman referansı", evaluated: "Değerlendirme kaynaklı", documented: "Belgelenmiş destek", adaptation: "Uyarlama gerekiyor",
    noSelection: "Modellerini ve birincil kanıtlarını incelemek için bir görev seç.", invalid: "Bu görev kimliği katalogda yok. Listeden bir görev seç.",
    count: "model adayı", notRun: "Bu katalog yayınları ve yayımlanmış model dosyalarını inceler. Modeller çalıştırılmadı ve bildirilen başarımlar yeniden üretilmedi. Kendi verine uygunluk değerlendirme gerektirir.",
    parameterKinds: { statistical: "Yayımlanmış istatistiksel parametreler", rules: "Öğrenilmiş kurallar ve destek istatistikleri", pipeline: "Sinir ağı ağırlıkları yayımlanmış işlem hattı" },
    repositoryLicense: "Bağlantıdaki koşullar depoyu lisanslar. Kaynak verilen sürümde dosyaya özel ayrı koşullar belirtilmez; veri kümesi ve bağımlılık koşulları da geçerlidir.",
    artifactIdentity: "Model dosyasının kimliği", pinnedRevision: "Gözlemlenen Git sürümü", file: "Dosya", bytes: "bayt",
    fileId: "Yayıncının dosya kimliği", publisherChecksum: "Yayıncı sağlama toplamı", checksumNotVerified: "Yayıncının sağlama toplamı burada yeniden hesaplanmadı.",
    publisherArtifact: "Yayıncıda barındırılan dosya veya sürümdür; değişmez Git ağırlık sürümü değildir. Kayıtlı dosya bilgileri gözlemi tanımlar, kriptografik bütünlük kontrolü sayılmaz.",
    releaseEvidence: "Yayıncının indirme yönergesi",
  },
} as const;
