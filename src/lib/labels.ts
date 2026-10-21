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
    fullscreen: "Full screen", exitFullscreen: "Exit full screen", fullscreenError: "Full screen is unavailable. You can still zoom and scroll within the map.",
    download: "Download SVG", original: "Open SVG", sourcesLink: "View sources", controls: "Map controls",
    hint: "Zoom to read details. Scroll in both directions or use the arrow keys when the map is focused. Click a source marker to open its reference.",
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
    fullscreen: "Tam ekran", exitFullscreen: "Tam ekrandan çık", fullscreenError: "Tam ekran kullanılamıyor. Haritanın içinde yakınlaştırıp kaydırmaya devam edebilirsin.",
    download: "SVG indir", original: "SVG aç", sourcesLink: "Kaynakları görüntüle", controls: "Harita kontrolleri",
    hint: "Ayrıntıları okumak için yakınlaştır. İki yönde kaydırabilir veya harita odaktayken ok tuşlarını kullanabilirsin. Kaynak işaretine tıklayarak ilgili yayını aç.",
    region: "Kaydırılabilir taksonomi haritası", sources: "Bu haritanın kaynakları", sourceScope: "Yazarların ders kitapları, özgün makaleler ve resmî belgeler tek tek kavramları destekler. Dalların düzeni editoryal bir tercihtir.",
    definitions: "Tanımları ve tam kaynak listesini indir (İngilizce)", loading: "Taksonomi haritası yükleniyor…",
  },
} as const;

export const modelFamilyLabels = {
  en: {
    cardAction: "view open-weight models, tasks and sources",
    title: "Explore models by family", select: "Select a model family or concept", placeholder: "Choose a family from the map or this list",
    coverage: "concepts with model examples", modelCount: "shared models",
    method: "How family membership is documented",
    methodology: "These examples use the same open-weight catalogue as the task map. Architecture, training method and modality are separate, overlapping properties. Each membership cites its own evidence; a taxonomy definition alone does not establish that a model belongs to a family. Missing entries describe catalogue gaps, not the absence of models in the field.",
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
    method: "Aile üyeliği nasıl belgeleniyor?",
    methodology: "Bu örnekler görev haritasıyla aynı açık ağırlık kataloğunu kullanır. Mimari, eğitim yöntemi ve veri türü ayrı ve örtüşebilen özelliklerdir. Her üyelik kendi kanıtına dayanır; bir taksonomi tanımı tek başına modelin aileye ait olduğunu kanıtlamaz. Eksik kayıtlar, alanda model bulunmadığını değil katalog kapsamını açıklar.",
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

export const taskModelLabels = {
  en: {
    cardAction: "view models and sources",
    title: "Find open-weight models", select: "Select a task", placeholder: "Choose a task from the map or this list",
    coverage: "tasks with model candidates", modelCount: "models", snapshot: "Source review",
    method: "How the shortlist is selected",
    methodology: "Task-specific evidence, released weights and license visibility guide this editorial shortlist. A shortlist entry is a candidate to evaluate, not a universal winner. Reference models provide reproducible specialist baselines; they are not presented as current leaders. Scores come from publishers, use different datasets and protocols, and are not normalized or independently reproduced here.",
    evidenceHelp: "Evaluated: relevant evaluation is cited. Documented: the card demonstrates or states support. Adaptation: extra training or a pipeline is required; this is an editorial proposal, not verified out-of-the-box support.",
    hint: "Click a task card to see models and evidence. Original task-definition citations remain available in the panel and SVG download.",
    panel: "Models and evidence", close: "Close model panel", empty: "No verified pretrained recommendation",
    definition: "Task definition source", why: "Why this model", context: "Scope and requirements", sources: "Supporting sources",
    weights: "Weight files", license: "License", reviewed: "Checked", access: "Access", public: "Public weights", gated: "Acceptance or approval required",
    shortlist: "Shortlist candidate", reference: "Specialist reference", evaluated: "Evaluation cited", documented: "Documented support", adaptation: "Adaptation required",
    noSelection: "Select a task to inspect its models and primary evidence.", invalid: "This task identifier is not in the catalogue. Select a task from the list.",
    count: "model candidates", notRun: "Models were not downloaded or run for this catalogue. Source review does not establish performance on your data.",
  },
  tr: {
    cardAction: "modelleri ve kaynakları görüntüle",
    title: "Açık ağırlıklı modelleri bul", select: "Görev seç", placeholder: "Haritadan veya bu listeden bir görev seç",
    coverage: "görevde model adayı", modelCount: "model", snapshot: "Kaynak incelemesi",
    method: "Kısa liste nasıl seçiliyor?",
    methodology: "Bu editoryal kısa liste; göreve özel kanıt, yayımlanmış ağırlıklar ve görünür lisans bilgisine dayanır. Kısa listedeki model, değerlendirilecek bir adaydır; evrensel birincilik iddiası taşımaz. Referans modeller tekrarlanabilir uzman başlangıçlarıdır; güncel lider olarak sunulmaz. Puanlar yayıncılardan gelir, farklı veri kümeleri ve protokoller kullanır; burada normalize edilmedi veya bağımsız olarak yeniden üretilmedi.",
    evidenceHelp: "Değerlendirme: ilgili değerlendirmeye kaynak verilir. Belgelenmiş destek: kart desteği gösterir veya belirtir. Uyarlama: ek eğitim veya işlem akışı gerekir; bu editoryal öneridir, hazır kullanım desteği doğrulanmış değildir.",
    hint: "Modelleri ve kanıtları görmek için görev kartına tıkla. Özgün görev tanımı kaynaklarına panelden ve SVG indirmesinden ulaşabilirsin.",
    panel: "Modeller ve kanıtlar", close: "Model panelini kapat", empty: "Doğrulanmış hazır model önerisi yok",
    definition: "Görev tanımının kaynağı", why: "Neden bu model?", context: "Kapsam ve gereksinimler", sources: "Destekleyici kaynaklar",
    weights: "Ağırlık dosyaları", license: "Lisans", reviewed: "Kontrol", access: "Erişim", public: "Herkese açık ağırlıklar", gated: "Koşul kabulü veya onay gerekiyor",
    shortlist: "Kısa liste adayı", reference: "Uzman referansı", evaluated: "Değerlendirme kaynaklı", documented: "Belgelenmiş destek", adaptation: "Uyarlama gerekiyor",
    noSelection: "Modellerini ve birincil kanıtlarını incelemek için bir görev seç.", invalid: "Bu görev kimliği katalogda yok. Listeden bir görev seç.",
    count: "model adayı", notRun: "Bu katalog için modeller indirilmedi veya çalıştırılmadı. Kaynak incelemesi, kendi verindeki başarımı kanıtlamaz.",
  },
} as const;
