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
