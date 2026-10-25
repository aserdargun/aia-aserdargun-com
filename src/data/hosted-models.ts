import type { HostedModel } from "@/data/schema";

/** Documentation references only; these services are never open-weight candidates. */
export const hostedModels: HostedModel[] = [{
  id: "jev-1-14",
  name: "Jev 1.14",
  version: "jev-1.14.0",
  provider: "TypeSafe",
  access: "hosted-api",
  cardSourceId: "ow-jev-system-one",
  versionSourceId: "ow-jev-models",
  context: {
    en: "Hosted decision API: choices, ordered scores and proposition probabilities. TypeSafe calls it System One and describes RLCD training; the reviewed sources do not disclose its backbone. Text is the default input; images and Box outputs require experimental opt-in. Probability and confidence do not guarantee correctness. No public checkpoint, local footprint or matched benchmark is asserted here.",
    tr: "Barındırılan karar API'si: seçenekler, sıralı puanlar ve önerme olasılıkları. TypeSafe, System One adını ve RLCD eğitimini kullanıyor; incelenen kaynaklar temel mimariyi açıklamıyor. Varsayılan girdi metin; görseller ve Box çıktıları deneysel katılım gerektiriyor. Olasılık ve güven doğruluğu garanti etmez. Burada herkese açık ağırlık, yerel bellek gereksinimi veya ortak benchmark iddiası yok.",
  },
}];
