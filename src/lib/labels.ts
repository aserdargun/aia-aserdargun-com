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
