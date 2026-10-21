import type { OpenWeightModel, TaxonomyTask } from "@/data/schema";

/** Editorial shortlist, not a universal ranking. Source observations live in sources.ts. */
export const openWeightModels = [
  {
    "id": "qwen38",
    "name": "Qwen3.8-27B",
    "cardSourceId": "ow-qwen38",
    "weightsSourceId": "ow-qwen38-weights",
    "licenseSourceId": "ow-qwen38",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "27B dense vision-language model; text, images, video and tools. Agent scores depend on the evaluation harness.",
      "tr": "27B yoğun görsel dil modeli; metin, görüntü, video ve araçlar. Ajan puanları değerlendirme ortamına bağlıdır."
    }
  },
  {
    "id": "deepseek41",
    "name": "DeepSeek-V4.1-Flash-1017",
    "cardSourceId": "ow-deepseek41",
    "weightsSourceId": "ow-deepseek41-weights",
    "licenseSourceId": "ow-deepseek41",
    "license": "MIT",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "October 2026 reasoning, coding and vision checkpoint. Large MoE deployment; not a small local model.",
      "tr": "Ekim 2026 akıl yürütme, kod ve görme sürümü. Büyük MoE dağıtımı gerektirir; küçük bir yerel model değildir."
    }
  },
  {
    "id": "glm53",
    "name": "GLM-5.3",
    "cardSourceId": "ow-glm53",
    "weightsSourceId": "ow-glm53-weights",
    "licenseSourceId": "ow-glm53",
    "license": "GLM-5.3 License",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Large coding and tool-use model. Custom model license; inspect its terms before choosing it.",
      "tr": "Büyük kodlama ve araç kullanımı modeli. Özel model lisansının koşullarını seçmeden önce incele."
    }
  },
  {
    "id": "gliner2",
    "name": "GLiNER2 large v1",
    "cardSourceId": "ow-gliner2",
    "weightsSourceId": "ow-gliner2-weights",
    "licenseSourceId": "ow-gliner2",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Schema-guided extraction and classification. Check labels and language coverage on your data.",
      "tr": "Şema ile yönlendirilen çıkarım ve sınıflandırma. Etiketleri ve dil kapsamını kendi verinle değerlendir."
    }
  },
  {
    "id": "nli",
    "name": "DeBERTa v3 large NLI",
    "cardSourceId": "ow-nli",
    "weightsSourceId": "ow-nli-weights",
    "licenseSourceId": "ow-nli",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "English sentence-pair specialist; SNLI and MultiNLI evaluation. A reproducible reference, not a current global leader.",
      "tr": "İngilizce cümle çiftleri için uzman model; SNLI ve MultiNLI değerlendirmesi. Tekrarlanabilir bir referanstır, güncel genel lider değildir."
    }
  },
  {
    "id": "coref",
    "name": "F-Coref",
    "cardSourceId": "ow-coref",
    "weightsSourceId": "ow-coref-weights",
    "licenseSourceId": "ow-coref",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Efficient English coreference model; OntoNotes evaluation. Domain transfer needs checking.",
      "tr": "Verimli İngilizce eşgönderim modeli; OntoNotes değerlendirmesi. Yeni alanlara aktarım kontrol gerektirir."
    }
  },
  {
    "id": "stanza",
    "name": "Stanza English models",
    "cardSourceId": "ow-stanza",
    "weightsSourceId": "ow-stanza-weights",
    "licenseSourceId": "ow-stanza",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "A collection of pretrained linguistic processors. This entry is English; other languages have separate checkpoints.",
      "tr": "Önceden eğitilmiş dilbilimsel işlemciler. Bu kayıt İngilizcedir; diğer dillerin ayrı ağırlıkları vardır."
    }
  },
  {
    "id": "nllb",
    "name": "NLLB-200 distilled 600M",
    "cardSourceId": "ow-nllb",
    "weightsSourceId": "ow-nllb-weights",
    "licenseSourceId": "ow-nllb",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Broad language coverage with sentence-level translation. Non-commercial weights; not a document translator by default.",
      "tr": "Cümle düzeyinde çeviride geniş dil kapsamı. Ticari olmayan ağırlıklar; doğrudan belge çeviri sistemi değildir."
    }
  },
  {
    "id": "coedit",
    "name": "CoEdIT large",
    "cardSourceId": "ow-coedit",
    "weightsSourceId": "ow-coedit-weights",
    "licenseSourceId": "ow-coedit",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "English instruction-based text editing. Non-commercial model weights.",
      "tr": "İngilizce talimat tabanlı metin düzenleme. Model ağırlıkları ticari olmayan lisansla sunulur."
    }
  },
  {
    "id": "embedding",
    "name": "Qwen3-Embedding-8B",
    "cardSourceId": "ow-embedding",
    "weightsSourceId": "ow-embedding-weights",
    "licenseSourceId": "ow-embedding",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Multilingual text and code embeddings. Retrieval requires an index; clustering requires a separate algorithm.",
      "tr": "Çok dilli metin ve kod vektörleri. Erişim için indeks, kümeleme için ayrı algoritma gerekir."
    }
  },
  {
    "id": "reranker",
    "name": "Qwen3-Reranker-8B",
    "cardSourceId": "ow-reranker",
    "weightsSourceId": "ow-reranker-weights",
    "licenseSourceId": "ow-reranker",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Scores query–document pairs. Use after retrieval; it does not build a search index.",
      "tr": "Sorgu–belge çiftlerini puanlar. Erişimden sonra kullanılır; arama indeksi oluşturmaz."
    }
  },
  {
    "id": "siglip",
    "name": "SigLIP 2 SO400M",
    "cardSourceId": "ow-siglip",
    "weightsSourceId": "ow-siglip-weights",
    "licenseSourceId": "ow-siglip",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Image–text encoder for label-based zero-shot recognition. Candidate labels affect results.",
      "tr": "Etiket tabanlı sıfır örnekli tanıma için görüntü–metin kodlayıcısı. Aday etiketler sonuçları etkiler."
    }
  },
  {
    "id": "dino",
    "name": "Grounding DINO base",
    "cardSourceId": "ow-dino",
    "weightsSourceId": "ow-dino-weights",
    "licenseSourceId": "ow-dino",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Open-vocabulary detector driven by text prompts. A specialist reference; not a universal detector ranking.",
      "tr": "Metin istemleriyle çalışan açık sözlüklü algılayıcı. Uzman referanstır; evrensel algılayıcı sıralaması değildir."
    }
  },
  {
    "id": "sam3",
    "name": "SAM 3",
    "cardSourceId": "ow-sam3",
    "weightsSourceId": "ow-sam3-weights",
    "licenseSourceId": "ow-sam-license",
    "license": "SAM License",
    "access": "gated",
    "role": "shortlist",
    "context": {
      "en": "Promptable image/video masks. Access approval and the SAM License apply.",
      "tr": "İstemle yönlendirilen görüntü/video maskeleri. Erişim onayı ve SAM lisansı geçerlidir."
    }
  },
  {
    "id": "mask2former",
    "name": "Mask2Former Swin large · ADE20K",
    "cardSourceId": "ow-mask2former",
    "weightsSourceId": "ow-mask2former-weights",
    "licenseSourceId": "ow-mask-license",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Checkpoint trained for ADE20K semantic labels. Model weights have a non-commercial license.",
      "tr": "ADE20K anlamsal etiketlerine eğitilmiş sürüm. Model ağırlıkları ticari olmayan lisansla sunulur."
    }
  },
  {
    "id": "depth",
    "name": "Depth Anything 3 large",
    "cardSourceId": "ow-depth",
    "weightsSourceId": "ow-depth-weights",
    "licenseSourceId": "ow-depth",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Depth and camera geometry from images. Non-commercial weights; scale and scene assumptions matter.",
      "tr": "Görüntülerden derinlik ve kamera geometrisi. Ticari olmayan ağırlıklar; ölçek ve sahne varsayımları önemlidir."
    }
  },
  {
    "id": "pose",
    "name": "ViTPose+ huge",
    "cardSourceId": "ow-pose",
    "weightsSourceId": "ow-pose-weights",
    "licenseSourceId": "ow-pose",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Human keypoints; the reference pipeline first detects people. Not arbitrary object keypoints.",
      "tr": "İnsan anahtar noktaları; referans akış önce insanları algılar. Keyfî nesnelerin anahtar noktalarını vermez."
    }
  },
  {
    "id": "videomae",
    "name": "VideoMAE large · Kinetics-400",
    "cardSourceId": "ow-videomae",
    "weightsSourceId": "ow-videomae-weights",
    "licenseSourceId": "ow-videomae",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Classifies videos into 400 action labels. Non-commercial research checkpoint.",
      "tr": "Videoları 400 eylem etiketine sınıflandırır. Ticari olmayan araştırma sürümü."
    }
  },
  {
    "id": "ocr",
    "name": "PaddleOCR-VL-1.6",
    "cardSourceId": "ow-ocr",
    "weightsSourceId": "ow-ocr-weights",
    "licenseSourceId": "ow-ocr",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Compact document parser with text, table, formula and chart recognition. Document parsing is distinct from arbitrary document QA.",
      "tr": "Metin, tablo, formül ve grafik tanıyan küçük belge ayrıştırıcı. Belge ayrıştırma, genel belge soru yanıtlamasından farklıdır."
    }
  },
  {
    "id": "image",
    "name": "Qwen-Image-2512",
    "cardSourceId": "ow-image",
    "weightsSourceId": "ow-image-weights",
    "licenseSourceId": "ow-image",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Text-conditioned image generation; publisher reports blind preference evaluations.",
      "tr": "Metin koşullu görüntü üretimi; yayıncı kör tercih değerlendirmeleri raporlar."
    }
  },
  {
    "id": "imageedit",
    "name": "Qwen-Image-Edit-2511",
    "cardSourceId": "ow-imageedit",
    "weightsSourceId": "ow-imageedit-weights",
    "licenseSourceId": "ow-imageedit",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Instruction-based image editing. This is not automatically mask-conditioned inpainting.",
      "tr": "Talimat tabanlı görüntü düzenleme. Otomatik olarak maske koşullu görüntü tamamlama anlamına gelmez."
    }
  },
  {
    "id": "fill",
    "name": "FLUX.1 Fill dev",
    "cardSourceId": "ow-fill",
    "weightsSourceId": "ow-fill-weights",
    "licenseSourceId": "ow-fill",
    "license": "FLUX.1 dev Non-Commercial License",
    "access": "gated",
    "role": "shortlist",
    "context": {
      "en": "Image, mask and prompt conditioned filling. Gated access; FLUX dev non-commercial license applies to the model.",
      "tr": "Görüntü, maske ve istem koşullu tamamlama. Koşullu erişim; model için FLUX dev ticari olmayan lisansı geçerlidir."
    }
  },
  {
    "id": "wan",
    "name": "Wan2.2 TI2V 5B",
    "cardSourceId": "ow-wan",
    "weightsSourceId": "ow-wan-weights",
    "licenseSourceId": "ow-wan",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "One checkpoint for text-to-video and image-to-video. Publisher documents 720p/24fps generation.",
      "tr": "Metinden ve görüntüden video için tek sürüm. Yayıncı 720p/24fps üretim belgeliyor."
    }
  },
  {
    "id": "shape",
    "name": "Shap-E",
    "cardSourceId": "ow-shape",
    "weightsSourceId": "ow-shape-weights",
    "licenseSourceId": "ow-shape",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Direct text-to-3D research baseline. Coarse assets; not evidence of current production-quality leadership.",
      "tr": "Doğrudan metinden 3B üreten araştırma referansı. Kaba varlıklar üretir; güncel üretim kalitesi liderliğinin kanıtı değildir."
    }
  },
  {
    "id": "asr",
    "name": "Qwen3-ASR-1.7B",
    "cardSourceId": "ow-asr",
    "weightsSourceId": "ow-asr-weights",
    "licenseSourceId": "ow-asr",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Multilingual transcription, including Turkish. Recognition and translation are separate tasks.",
      "tr": "Türkçe dahil çok dilli yazıya dökme. Tanıma ve çeviri ayrı görevlerdir."
    }
  },
  {
    "id": "seamless",
    "name": "SeamlessM4T v2 large",
    "cardSourceId": "ow-seamless",
    "weightsSourceId": "ow-seamless-weights",
    "licenseSourceId": "ow-seamless",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Speech/text translation specialist. Language directions vary; non-commercial weights.",
      "tr": "Konuşma/metin çevirisi uzmanı. Desteklenen dil yönleri değişir; ağırlıklar ticari olmayan lisanslıdır."
    }
  },
  {
    "id": "keyword",
    "name": "wav2vec 2.0 · SUPERB KS",
    "cardSourceId": "ow-keyword",
    "weightsSourceId": "ow-keyword-weights",
    "licenseSourceId": "ow-keyword",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Speech Commands keyword classifier; 16 kHz audio and a fixed vocabulary.",
      "tr": "Speech Commands anahtar sözcük sınıflandırıcı; 16 kHz ses ve sabit sözlük."
    }
  },
  {
    "id": "emotion",
    "name": "HuBERT large · SUPERB ER",
    "cardSourceId": "ow-emotion",
    "weightsSourceId": "ow-emotion-weights",
    "licenseSourceId": "ow-emotion",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "IEMOCAP speech emotion labels; results do not establish a person's actual emotional state.",
      "tr": "IEMOCAP konuşma duygu etiketleri; sonuçlar kişinin gerçek duygusal durumunu kanıtlamaz."
    }
  },
  {
    "id": "ast",
    "name": "Audio Spectrogram Transformer",
    "cardSourceId": "ow-ast",
    "weightsSourceId": "ow-ast-weights",
    "licenseSourceId": "ow-ast",
    "license": "BSD-3-Clause",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "AudioSet sound-event classification checkpoint. Label coverage is dataset-specific.",
      "tr": "AudioSet ses olayı sınıflandırma sürümü. Etiket kapsamı veri kümesine özgüdür."
    }
  },
  {
    "id": "ecapa",
    "name": "ECAPA-TDNN · VoxCeleb",
    "cardSourceId": "ow-ecapa",
    "weightsSourceId": "ow-ecapa-weights",
    "licenseSourceId": "ow-ecapa",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Speaker embeddings and verification. Identification needs enrolled reference speakers.",
      "tr": "Konuşmacı vektörleri ve doğrulama. Kimlik belirleme için kayıtlı referans konuşmacılar gerekir."
    }
  },
  {
    "id": "diarization",
    "name": "pyannote Community-1",
    "cardSourceId": "ow-diarization",
    "weightsSourceId": "ow-diarization-weights",
    "licenseSourceId": "ow-diarization",
    "license": "CC-BY-4.0",
    "access": "gated",
    "role": "shortlist",
    "context": {
      "en": "Local speaker diarization pipeline after accepting access conditions. Different from the hosted Precision model.",
      "tr": "Erişim koşulları kabul edildikten sonra yerel konuşmacı bölütleme akışı. Barındırılan Precision modelinden farklıdır."
    }
  },
  {
    "id": "tts",
    "name": "Qwen3-TTS 1.7B CustomVoice",
    "cardSourceId": "ow-tts",
    "weightsSourceId": "ow-tts-weights",
    "licenseSourceId": "ow-tts",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Controllable voices in ten documented languages. This checkpoint does not list Turkish support.",
      "tr": "Belgelenen on dilde denetlenebilir sesler. Bu sürüm Türkçe desteği belirtmiyor."
    }
  },
  {
    "id": "separation",
    "name": "SepFormer · WHAMR!",
    "cardSourceId": "ow-separation",
    "weightsSourceId": "ow-separation-weights",
    "licenseSourceId": "ow-separation",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Separates speakers in noisy/reverberant mixtures. Match the training sample rate and source count.",
      "tr": "Gürültülü/yankılı karışımlarda konuşmacıları ayırır. Eğitimdeki örnekleme hızı ve kaynak sayısına uyulmalıdır."
    }
  },
  {
    "id": "enhancement",
    "name": "MetricGAN+ · VoiceBank",
    "cardSourceId": "ow-enhancement",
    "weightsSourceId": "ow-enhancement-weights",
    "licenseSourceId": "ow-enhancement",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "16 kHz single-channel speech enhancement, evaluated on VoiceBank-DEMAND.",
      "tr": "VoiceBank-DEMAND üzerinde değerlendirilmiş 16 kHz tek kanallı konuşma iyileştirme."
    }
  },
  {
    "id": "voice",
    "name": "Seed-VC v2",
    "cardSourceId": "ow-voice",
    "weightsSourceId": "ow-voice-weights",
    "licenseSourceId": "ow-voice",
    "license": "GPL-3.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Reference-conditioned voice conversion; the repository includes several checkpoint variants.",
      "tr": "Referans ses koşullu ses dönüşümü; depo birden fazla ağırlık varyantı içerir."
    }
  },
  {
    "id": "audiogen",
    "name": "AudioGen medium",
    "cardSourceId": "ow-audiogen",
    "weightsSourceId": "ow-audiogen-weights",
    "licenseSourceId": "ow-audiogen",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Text-to-sound generation; non-commercial weights. Not a speech synthesizer.",
      "tr": "Metinden ses olayı üretimi; ticari olmayan ağırlıklar. Konuşma sentezleyici değildir."
    }
  },
  {
    "id": "musicgen",
    "name": "MusicGen large",
    "cardSourceId": "ow-musicgen",
    "weightsSourceId": "ow-musicgen-weights",
    "licenseSourceId": "ow-musicgen",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Text-conditioned music research baseline. Non-commercial weights and limited vocal generation.",
      "tr": "Metin koşullu müzik araştırma referansı. Ticari olmayan ağırlıklar ve sınırlı vokal üretimi."
    }
  },
  {
    "id": "ace",
    "name": "ACE-Step 1.5",
    "cardSourceId": "ow-ace",
    "weightsSourceId": "ow-ace-weights",
    "licenseSourceId": "ow-ace",
    "license": "MIT",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Text and reference-audio conditioned music generation, with editing variants.",
      "tr": "Düzenleme varyantlarıyla metin ve referans ses koşullu müzik üretimi."
    }
  },
  {
    "id": "coder",
    "name": "Qwen3-Coder-Next",
    "cardSourceId": "ow-coder",
    "weightsSourceId": "ow-coder-weights",
    "licenseSourceId": "ow-coder",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "80B total / 3B active MoE for coding agents. Active parameters alone do not describe memory requirements.",
      "tr": "Kodlama ajanları için toplam 80B / etkin 3B MoE. Yalnızca etkin parametre sayısı bellek ihtiyacını açıklamaz."
    }
  },
  {
    "id": "sql",
    "name": "SQLCoder 70B alpha",
    "cardSourceId": "ow-sql",
    "weightsSourceId": "ow-sql-weights",
    "licenseSourceId": "ow-sql",
    "license": "CC-BY-SA-4.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "PostgreSQL-oriented SQL-Eval reference. Supply schema context and validate generated queries.",
      "tr": "PostgreSQL odaklı SQL-Eval referansı. Şema bağlamını sağla ve üretilen sorguları doğrula."
    }
  },
  {
    "id": "codet5",
    "name": "CodeT5 base",
    "cardSourceId": "ow-codet5",
    "weightsSourceId": "ow-codet5-weights",
    "licenseSourceId": "ow-codet5",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Pretrained code encoder–decoder. Task-specific fine-tuning is needed for the reported downstream classifiers.",
      "tr": "Önceden eğitilmiş kod kodlayıcı–çözücüsü. Raporlanan görev sınıflandırıcıları için göreve özel ince ayar gerekir."
    }
  },
  {
    "id": "codet5plus",
    "name": "CodeT5+ 770M",
    "cardSourceId": "ow-codet5plus",
    "weightsSourceId": "ow-codet5plus-weights",
    "licenseSourceId": "ow-codet5plus",
    "license": "BSD-3-Clause",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Compact code encoder–decoder with code completion examples; downstream tasks may require fine-tuning.",
      "tr": "Kod tamamlama örnekleri olan küçük kodlayıcı–çözücü; diğer görevler ince ayar gerektirebilir."
    }
  },
  {
    "id": "bart",
    "name": "BART large · CNN/DailyMail",
    "cardSourceId": "ow-bart",
    "weightsSourceId": "ow-bart-weights",
    "licenseSourceId": "ow-bart",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "English news summarization specialist. Limited context and news-domain training; not a general research synthesis model.",
      "tr": "İngilizce haber özetleme uzmanı. Sınırlı bağlam ve haber alanı eğitimi; genel araştırma sentezi modeli değildir."
    }
  },
  {
    "id": "tabpfn",
    "name": "TabPFN 3.5",
    "cardSourceId": "ow-tabpfn",
    "weightsSourceId": "ow-tabpfn-weights",
    "licenseSourceId": "ow-tabpfn",
    "license": "TabPFN-3.5 License v1.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "One tabular checkpoint for classification and regression. Non-commercial model license; production use needs separate terms.",
      "tr": "Sınıflandırma ve regresyon için tek tablo modeli. Ticari olmayan model lisansı; üretim kullanımı ayrı koşullara bağlıdır."
    }
  },
  {
    "id": "chronos",
    "name": "Chronos-2",
    "cardSourceId": "ow-chronos",
    "weightsSourceId": "ow-chronos-weights",
    "licenseSourceId": "ow-chronos",
    "license": "Apache-2.0",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Univariate, multivariate and covariate-informed forecasting. Evaluate forecast horizons on your series.",
      "tr": "Tek/çok değişkenli ve yardımcı değişkenli tahmin. Tahmin ufuklarını kendi serilerinle değerlendir."
    }
  },
  {
    "id": "moment",
    "name": "MOMENT-1 large",
    "cardSourceId": "ow-moment",
    "weightsSourceId": "ow-moment-weights",
    "licenseSourceId": "ow-moment",
    "license": "MIT",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Time-series representations, reconstruction and task adaptation. Output heads and calibration differ by task.",
      "tr": "Zaman serisi temsilleri, yeniden oluşturma ve görev uyarlaması. Çıkış başlıkları ve kalibrasyon göreve göre değişir."
    }
  },
  {
    "id": "boltz",
    "name": "Boltz-2",
    "cardSourceId": "ow-boltz",
    "weightsSourceId": "ow-boltz-weights",
    "licenseSourceId": "ow-boltz",
    "license": "MIT",
    "access": "public",
    "role": "shortlist",
    "context": {
      "en": "Biomolecular complex structures and protein–ligand affinity. Not a general predictor of every molecular property.",
      "tr": "Biyomoleküler kompleks yapıları ve protein–ligand afinitesi. Her moleküler özelliğin genel tahmincisi değildir."
    }
  },
  {
    "id": "prover",
    "name": "DeepSeek-Prover-V2 671B",
    "cardSourceId": "ow-prover",
    "weightsSourceId": "ow-prover-weights",
    "licenseSourceId": "ow-prover",
    "license": "DeepSeek Model License",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Lean 4 theorem proving. Large model and proof-search budget; a proof assistant must validate outputs.",
      "tr": "Lean 4 teorem ispatı. Büyük model ve ispat arama bütçesi; çıktıları ispat asistanı doğrulamalıdır."
    }
  },
  {
    "id": "uitars",
    "name": "UI-TARS 1.5 7B",
    "cardSourceId": "ow-uitars",
    "weightsSourceId": "ow-uitars-weights",
    "licenseSourceId": "ow-uitars",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "Screenshot-to-action GUI agent. Requires an execution environment; benchmark results are system-level.",
      "tr": "Ekran görüntüsünden eyleme GUI ajanı. Yürütme ortamı gerekir; değerlendirme sonuçları sistem düzeyindedir."
    }
  },
  {
    "id": "r1",
    "name": "DeepSeek-R1-0528",
    "cardSourceId": "ow-r1",
    "weightsSourceId": "ow-r1-weights",
    "licenseSourceId": "ow-r1",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "context": {
      "en": "May 2025 reasoning reference with competition-math evaluations. Large checkpoint and substantial reasoning-token budgets.",
      "tr": "Yarışma matematiği değerlendirmeleri olan Mayıs 2025 akıl yürütme referansı. Büyük ağırlıklar ve yüksek akıl yürütme token bütçeleri."
    }
  }
] satisfies OpenWeightModel[];

export const taxonomyTasks = [
  {
    "id": "text-classification",
    "name": "Text Classification",
    "family": "Language & Text",
    "definition": "Text → category labels",
    "definitionSourceId": "S13",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "gliner2",
        "evidence": "documented",
        "rationale": {
          "en": "The card provides single- and multi-label classification examples with user-defined schemas.",
          "tr": "Kart, kullanıcı şemalarıyla tek ve çok etiketli sınıflandırma örnekleri sunuyor."
        },
        "sourceIds": [
          "ow-gliner2"
        ]
      },
      {
        "modelId": "nli",
        "evidence": "documented",
        "rationale": {
          "en": "NLI-based zero-shot classification is documented; SNLI/MNLI scores measure sentence-pair inference, not your target labels.",
          "tr": "NLI tabanlı sıfır örnekli sınıflandırma belgeleniyor; SNLI/MNLI puanları hedef etiketlerini değil cümle çiftlerinde çıkarımı ölçer."
        },
        "sourceIds": [
          "ow-nli"
        ]
      }
    ]
  },
  {
    "id": "natural-language-inference",
    "name": "Natural Language Inference",
    "family": "Language & Text",
    "definition": "Premise + hypothesis → relation",
    "definitionSourceId": "S13",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "nli",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports 92.20% SNLI-test and 90.49% MNLI-mismatched accuracy for this English checkpoint.",
          "tr": "Yayıncı bu İngilizce sürüm için SNLI-test doğruluğunu %92,20, MNLI-mismatched doğruluğunu %90,49 raporluyor."
        },
        "sourceIds": [
          "ow-nli"
        ]
      }
    ]
  },
  {
    "id": "named-entity-recognition",
    "name": "Named Entity Recognition",
    "family": "Language & Text",
    "definition": "Text → named spans and types",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "gliner2",
        "evidence": "documented",
        "rationale": {
          "en": "The model card documents schema-conditioned entities and relations with inference examples.",
          "tr": "Model kartı şema koşullu varlıkları ve ilişkileri çıkarım örnekleriyle belgeliyor."
        },
        "sourceIds": [
          "ow-gliner2"
        ]
      }
    ]
  },
  {
    "id": "relation-extraction",
    "name": "Relation Extraction",
    "family": "Language & Text",
    "definition": "Text + entities → relations",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "gliner2",
        "evidence": "documented",
        "rationale": {
          "en": "The model card documents schema-conditioned entities and relations with inference examples.",
          "tr": "Model kartı şema koşullu varlıkları ve ilişkileri çıkarım örnekleriyle belgeliyor."
        },
        "sourceIds": [
          "ow-gliner2"
        ]
      }
    ]
  },
  {
    "id": "coreference-resolution",
    "name": "Coreference Resolution",
    "family": "Language & Text",
    "definition": "Text → linked mentions",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "coref",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card reports 78.5 average CoNLL F1 on OntoNotes; intended as a fast English reference.",
          "tr": "Kart OntoNotes üzerinde 78,5 ortalama CoNLL F1 raporluyor; hızlı İngilizce referansı olarak seçildi."
        },
        "sourceIds": [
          "ow-coref"
        ]
      }
    ]
  },
  {
    "id": "part-of-speech-tagging",
    "name": "Part-of-Speech Tagging",
    "family": "Language & Text",
    "definition": "Tokens → grammatical tags",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "stanza",
        "evidence": "documented",
        "rationale": {
          "en": "Pretrained POS and dependency-parsing processors are available in the English package.",
          "tr": "İngilizce pakette önceden eğitilmiş sözcük türü ve bağımlılık ayrıştırma işlemcileri bulunuyor."
        },
        "sourceIds": [
          "ow-stanza",
          "ow-stanza-docs"
        ]
      }
    ]
  },
  {
    "id": "syntactic-parsing",
    "name": "Syntactic Parsing",
    "family": "Language & Text",
    "definition": "Sentence → grammatical structure",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "stanza",
        "evidence": "documented",
        "rationale": {
          "en": "Pretrained POS and dependency-parsing processors are available in the English package.",
          "tr": "İngilizce pakette önceden eğitilmiş sözcük türü ve bağımlılık ayrıştırma işlemcileri bulunuyor."
        },
        "sourceIds": [
          "ow-stanza",
          "ow-stanza-docs"
        ]
      }
    ]
  },
  {
    "id": "text-generation",
    "name": "Text Generation",
    "family": "Language & Text",
    "definition": "Context → generated text",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "documented",
        "rationale": {
          "en": "The official card documents conversational generation and instruction following; evaluate domain-specific answer quality separately.",
          "tr": "Resmî kart diyalog üretimini ve talimat takibini belgeliyor; alana özgü yanıt kalitesini ayrıca değerlendir."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "evidence": "documented",
        "rationale": {
          "en": "The October checkpoint provides conversational reasoning and generation; general benchmark gains are not a task-specific guarantee.",
          "tr": "Ekim sürümü diyalogla akıl yürütme ve üretim sunuyor; genel değerlendirme artışları göreve özel garanti değildir."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      }
    ]
  },
  {
    "id": "machine-translation",
    "name": "Machine Translation",
    "family": "Language & Text",
    "definition": "Source-language text → target text",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "nllb",
        "evidence": "evaluated",
        "rationale": {
          "en": "Dedicated multilingual translation with FLORES evaluation; use supported language codes and sentence-length constraints.",
          "tr": "FLORES değerlendirmesi olan özel çok dilli çeviri; desteklenen dil kodlarına ve cümle uzunluğu sınırlarına uyulmalıdır."
        },
        "sourceIds": [
          "ow-nllb"
        ]
      },
      {
        "modelId": "seamless",
        "evidence": "evaluated",
        "rationale": {
          "en": "Text-to-text translation is explicitly supported alongside speech translation; check the supported direction.",
          "tr": "Konuşma çevirisi yanında metinden metne çeviri açıkça desteklenir; dil yönünün desteklendiğini kontrol et."
        },
        "sourceIds": [
          "ow-seamless"
        ]
      }
    ]
  },
  {
    "id": "text-summarization",
    "name": "Text Summarization",
    "family": "Language & Text",
    "definition": "Document → condensed account",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "bart",
        "evidence": "documented",
        "rationale": {
          "en": "This checkpoint is fine-tuned on CNN/DailyMail text–summary pairs; it is a compact specialist reference.",
          "tr": "Bu sürüm CNN/DailyMail metin–özet çiftlerine ince ayarlıdır; küçük bir uzman referansıdır."
        },
        "sourceIds": [
          "ow-bart"
        ]
      }
    ]
  },
  {
    "id": "multi-document-summarization",
    "name": "Multi-document Summarization",
    "family": "Language & Text",
    "definition": "Documents → combined summary",
    "definitionSourceId": "S48",
    "note": {
      "en": "No current task-specific winner is established by this catalogue. The listed model is an adaptation starting point, not verified evidence synthesis.",
      "tr": "Bu katalog güncel bir görev lideri belirlemiyor. Listelenen model uyarlama başlangıcıdır; doğrulanmış kanıt sentezi değildir."
    },
    "recommendations": [
      {
        "modelId": "bart",
        "evidence": "adaptation",
        "rationale": {
          "en": "Single-document news summarizer only. Multi-document input needs segmentation/aggregation and separate evaluation; no multi-document score is claimed.",
          "tr": "Yalnızca tek belge haber özetleyicisidir. Çoklu belge için bölme/birleştirme ve ayrı değerlendirme gerekir; çoklu belge puanı iddia edilmez."
        },
        "sourceIds": [
          "ow-bart"
        ]
      }
    ]
  },
  {
    "id": "grammatical-error-correction",
    "name": "Grammatical Error Correction",
    "family": "Language & Text",
    "definition": "Erroneous text → corrected text",
    "definitionSourceId": "S14",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "coedit",
        "evidence": "documented",
        "rationale": {
          "en": "The card provides an explicit grammar-correction instruction and English text-editing checkpoints.",
          "tr": "Kart açık dilbilgisi düzeltme talimatı ve İngilizce metin düzenleme ağırlıkları sunuyor."
        },
        "sourceIds": [
          "ow-coedit"
        ]
      }
    ]
  },
  {
    "id": "question-answering",
    "name": "Question Answering",
    "family": "Language & Text",
    "definition": "Question (+ context) → answer",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "documented",
        "rationale": {
          "en": "The official card documents conversational generation and instruction following; evaluate domain-specific answer quality separately.",
          "tr": "Resmî kart diyalog üretimini ve talimat takibini belgeliyor; alana özgü yanıt kalitesini ayrıca değerlendir."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "evidence": "documented",
        "rationale": {
          "en": "The October checkpoint provides conversational reasoning and generation; general benchmark gains are not a task-specific guarantee.",
          "tr": "Ekim sürümü diyalogla akıl yürütme ve üretim sunuyor; genel değerlendirme artışları göreve özel garanti değildir."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      }
    ]
  },
  {
    "id": "dialogue-response-generation",
    "name": "Dialogue Response Generation",
    "family": "Language & Text",
    "definition": "Dialogue context → next response",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "documented",
        "rationale": {
          "en": "The official card documents conversational generation and instruction following; evaluate domain-specific answer quality separately.",
          "tr": "Resmî kart diyalog üretimini ve talimat takibini belgeliyor; alana özgü yanıt kalitesini ayrıca değerlendir."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "evidence": "documented",
        "rationale": {
          "en": "The October checkpoint provides conversational reasoning and generation; general benchmark gains are not a task-specific guarantee.",
          "tr": "Ekim sürümü diyalogla akıl yürütme ve üretim sunuyor; genel değerlendirme artışları göreve özel garanti değildir."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      }
    ]
  },
  {
    "id": "semantic-textual-similarity",
    "name": "Semantic Textual Similarity",
    "family": "Language & Text",
    "definition": "Text pair → similarity score",
    "definitionSourceId": "S13",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "embedding",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports MTEB/CMTEB retrieval, STS and code-retrieval evaluations. The reported 70.58 multilingual aggregate is a June 2025 snapshot, not a live rank.",
          "tr": "Yayıncı MTEB/CMTEB erişim, STS ve kod erişimi değerlendirmeleri sunuyor. Raporlanan 70,58 çok dilli toplam puan Haziran 2025 kaydıdır, canlı sıralama değildir."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      }
    ]
  },
  {
    "id": "document-retrieval",
    "name": "Document Retrieval",
    "family": "Retrieval & Recommendation",
    "definition": "Query + corpus → relevant documents",
    "definitionSourceId": "S06",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "embedding",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports MTEB/CMTEB retrieval, STS and code-retrieval evaluations. The reported 70.58 multilingual aggregate is a June 2025 snapshot, not a live rank.",
          "tr": "Yayıncı MTEB/CMTEB erişim, STS ve kod erişimi değerlendirmeleri sunuyor. Raporlanan 70,58 çok dilli toplam puan Haziran 2025 kaydıdır, canlı sıralama değildir."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      }
    ]
  },
  {
    "id": "passage-retrieval",
    "name": "Passage Retrieval",
    "family": "Retrieval & Recommendation",
    "definition": "Query + passages → relevant passages",
    "definitionSourceId": "S12",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "embedding",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports MTEB/CMTEB retrieval, STS and code-retrieval evaluations. The reported 70.58 multilingual aggregate is a June 2025 snapshot, not a live rank.",
          "tr": "Yayıncı MTEB/CMTEB erişim, STS ve kod erişimi değerlendirmeleri sunuyor. Raporlanan 70,58 çok dilli toplam puan Haziran 2025 kaydıdır, canlı sıralama değildir."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      }
    ]
  },
  {
    "id": "re-ranking",
    "name": "Re-ranking",
    "family": "Retrieval & Recommendation",
    "definition": "Query + candidates → revised ranking",
    "definitionSourceId": "S12",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "reranker",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card reports retrieval-specific reranking evaluations on MTEB, CMTEB, MMTEB, MLDR and code retrieval.",
          "tr": "Kart MTEB, CMTEB, MMTEB, MLDR ve kod erişimi üzerinde yeniden sıralama değerlendirmeleri raporluyor."
        },
        "sourceIds": [
          "ow-reranker"
        ]
      }
    ]
  },
  {
    "id": "query-expansion",
    "name": "Query Expansion",
    "family": "Retrieval & Recommendation",
    "definition": "Query + evidence → expanded query",
    "definitionSourceId": "S06",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "adaptation",
        "rationale": {
          "en": "Instruction-following generator can propose query rewrites; this is an editorial adaptation, with no query-expansion retrieval gain verified here.",
          "tr": "Talimat izleyen üretici sorgu yeniden yazımları önerebilir; bu editoryal uyarlama için erişim kazancı burada doğrulanmadı."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      }
    ]
  },
  {
    "id": "top-k-recommendation",
    "name": "Top-k Recommendation",
    "family": "Retrieval & Recommendation",
    "definition": "User context + items → ranked items",
    "definitionSourceId": "S21",
    "note": {
      "en": "A transferable pretrained recommender was not verified for this task. User/item identities and interaction data usually require dataset-specific fitting; see the task reference.",
      "tr": "Bu görev için aktarılabilir hazır öneri modeli doğrulanmadı. Kullanıcı/öğe kimlikleri ve etkileşim verileri genellikle veri kümesine özel eğitim gerektirir; görev kaynağına bak."
    },
    "recommendations": []
  },
  {
    "id": "rating-prediction",
    "name": "Rating Prediction",
    "family": "Retrieval & Recommendation",
    "definition": "User–item pair → predicted rating",
    "definitionSourceId": "S21",
    "note": {
      "en": "A transferable pretrained recommender was not verified for this task. User/item identities and interaction data usually require dataset-specific fitting; see the task reference.",
      "tr": "Bu görev için aktarılabilir hazır öneri modeli doğrulanmadı. Kullanıcı/öğe kimlikleri ve etkileşim verileri genellikle veri kümesine özel eğitim gerektirir; görev kaynağına bak."
    },
    "recommendations": []
  },
  {
    "id": "image-classification",
    "name": "Image Classification",
    "family": "Vision, Video & 3D",
    "definition": "Image → class labels",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "siglip",
        "evidence": "documented",
        "rationale": {
          "en": "The released checkpoint includes zero-shot image classification with user-provided candidate labels.",
          "tr": "Yayımlanan ağırlıklar kullanıcı aday etiketleriyle sıfır örnekli görüntü sınıflandırması sunuyor."
        },
        "sourceIds": [
          "ow-siglip"
        ]
      }
    ]
  },
  {
    "id": "object-detection",
    "name": "Object Detection",
    "family": "Vision, Video & 3D",
    "definition": "Image → object boxes and classes",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "dino",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card reports 52.5 COCO zero-shot AP for Grounding DINO and demonstrates text-conditioned bounding boxes.",
          "tr": "Kart Grounding DINO için 52,5 COCO sıfır örnekli AP raporluyor ve metin koşullu sınırlayıcı kutuları örnekliyor."
        },
        "sourceIds": [
          "ow-dino"
        ]
      },
      {
        "modelId": "sam3",
        "evidence": "documented",
        "rationale": {
          "en": "SAM 3 detects and segments concept-prompted objects. Compare its prompt protocol with closed-set detector evaluations.",
          "tr": "SAM 3 kavram istemli nesneleri algılar ve bölütler. İstem protokolünü kapalı etiketli algılayıcı değerlendirmeleriyle karşılaştır."
        },
        "sourceIds": [
          "ow-sam3"
        ]
      }
    ]
  },
  {
    "id": "semantic-segmentation",
    "name": "Semantic Segmentation",
    "family": "Vision, Video & 3D",
    "definition": "Image → per-pixel class labels",
    "definitionSourceId": "S39",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "mask2former",
        "evidence": "documented",
        "rationale": {
          "en": "The ADE20K semantic checkpoint returns a class label for each pixel. Its label set is fixed by training.",
          "tr": "ADE20K anlamsal sürümü her piksel için sınıf etiketi verir. Etiket kümesi eğitimle sabittir."
        },
        "sourceIds": [
          "ow-mask2former"
        ]
      }
    ]
  },
  {
    "id": "instance-segmentation",
    "name": "Instance Segmentation",
    "family": "Vision, Video & 3D",
    "definition": "Image → individual object masks",
    "definitionSourceId": "S39",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "sam3",
        "evidence": "documented",
        "rationale": {
          "en": "Image/video prompts produce object-instance masks; this does not by itself provide every semantic class label.",
          "tr": "Görüntü/video istemleri nesne örneği maskeleri üretir; bu tek başına tüm anlamsal sınıf etiketlerini vermez."
        },
        "sourceIds": [
          "ow-sam3"
        ]
      }
    ]
  },
  {
    "id": "depth-estimation",
    "name": "Depth Estimation",
    "family": "Vision, Video & 3D",
    "definition": "Image → depth map",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "depth",
        "evidence": "documented",
        "rationale": {
          "en": "The card documents depth estimation and camera geometry from single or multiple views.",
          "tr": "Kart tek veya çoklu görünümden derinlik tahmini ve kamera geometrisini belgeliyor."
        },
        "sourceIds": [
          "ow-depth"
        ]
      }
    ]
  },
  {
    "id": "keypoint-detection",
    "name": "Keypoint Detection",
    "family": "Vision, Video & 3D",
    "definition": "Image → landmark coordinates",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "pose",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card evaluates human pose on COCO/MPII/OCHuman and uses a separate person detector in its example.",
          "tr": "Kart insan pozunu COCO/MPII/OCHuman üzerinde değerlendiriyor ve örnekte ayrı insan algılayıcı kullanıyor."
        },
        "sourceIds": [
          "ow-pose"
        ]
      }
    ]
  },
  {
    "id": "video-classification",
    "name": "Video Classification",
    "family": "Vision, Video & 3D",
    "definition": "Video → class or action labels",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "videomae",
        "evidence": "documented",
        "rationale": {
          "en": "The released model is already fine-tuned to predict one of the 400 Kinetics action classes.",
          "tr": "Yayımlanan model 400 Kinetics eylem sınıfından birini tahmin etmeye ince ayarlıdır."
        },
        "sourceIds": [
          "ow-videomae"
        ]
      }
    ]
  },
  {
    "id": "optical-character-recognition",
    "name": "Optical Character Recognition",
    "family": "Vision, Video & 3D",
    "definition": "Text image → recognized text",
    "definitionSourceId": "S40",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "ocr",
        "evidence": "evaluated",
        "rationale": {
          "en": "PaddleOCR-VL-1.6 reports 96.33 on OmniDocBench v1.6; this is a document-parsing aggregate, not universal character accuracy.",
          "tr": "PaddleOCR-VL-1.6, OmniDocBench v1.6 için 96,33 raporluyor; bu belge ayrıştırma toplamıdır, evrensel karakter doğruluğu değildir."
        },
        "sourceIds": [
          "ow-ocr"
        ]
      },
      {
        "modelId": "qwen38",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card reports 91.1 on OmniDocBench 1.5; the benchmark version differs from the OCR specialist above.",
          "tr": "Kart OmniDocBench 1.5 için 91,1 raporluyor; değerlendirme sürümü yukarıdaki OCR uzmanından farklıdır."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      }
    ]
  },
  {
    "id": "image-captioning",
    "name": "Image Captioning",
    "family": "Vision, Video & 3D",
    "definition": "Image → textual description",
    "definitionSourceId": "S40",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "documented",
        "rationale": {
          "en": "The card documents image understanding and image-to-text conversation. No captioning-specific score is assigned here.",
          "tr": "Kart görüntü anlama ve görüntüden metne diyalogu belgeliyor. Burada başlık üretimine özel puan atanmadı."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      }
    ]
  },
  {
    "id": "visual-question-answering",
    "name": "Visual Question Answering",
    "family": "Vision, Video & 3D",
    "definition": "Image + question → answer",
    "definitionSourceId": "S41",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports 85.9 on RealWorldQA; chart and visual-reasoning results use separate benchmark settings.",
          "tr": "Yayıncı RealWorldQA için 85,9 raporluyor; grafik ve görsel akıl yürütme sonuçları ayrı değerlendirme koşullarındadır."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      }
    ]
  },
  {
    "id": "document-question-answering",
    "name": "Document Question Answering",
    "family": "Vision, Video & 3D",
    "definition": "Document image + question → answer",
    "definitionSourceId": "S42",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "documented",
        "rationale": {
          "en": "Native document-image understanding supports question prompts. OmniDocBench parsing results are not a DocVQA accuracy claim.",
          "tr": "Yerel belge görüntüsü anlama soru istemlerini destekler. OmniDocBench ayrıştırma sonucu DocVQA doğruluk iddiası değildir."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      }
    ]
  },
  {
    "id": "text-to-image-generation",
    "name": "Text-to-Image Generation",
    "family": "Vision, Video & 3D",
    "definition": "Text prompt → image",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "image",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher documents over 10,000 blind preference comparisons for this December 2025 release; no current global rank is asserted.",
          "tr": "Yayıncı Aralık 2025 sürümü için 10.000 üzerinde kör tercih karşılaştırması belgeliyor; güncel genel sıralama iddia edilmiyor."
        },
        "sourceIds": [
          "ow-image"
        ]
      }
    ]
  },
  {
    "id": "image-to-image-generation",
    "name": "Image-to-Image Generation",
    "family": "Vision, Video & 3D",
    "definition": "Image + conditioning → new image",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "imageedit",
        "evidence": "documented",
        "rationale": {
          "en": "The checkpoint takes input images and editing instructions, including multi-image consistency examples.",
          "tr": "Sürüm girdi görüntüleri ve düzenleme talimatları alır; çoklu görüntü tutarlılığı örnekleri içerir."
        },
        "sourceIds": [
          "ow-imageedit"
        ]
      }
    ]
  },
  {
    "id": "image-inpainting",
    "name": "Image Inpainting",
    "family": "Vision, Video & 3D",
    "definition": "Image + mask → completed image",
    "definitionSourceId": "S43",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "fill",
        "evidence": "documented",
        "rationale": {
          "en": "The official example takes an image, mask and text prompt for local image completion.",
          "tr": "Resmî örnek yerel görüntü tamamlama için görüntü, maske ve metin istemi alır."
        },
        "sourceIds": [
          "ow-fill"
        ]
      }
    ]
  },
  {
    "id": "text-to-video-generation",
    "name": "Text-to-Video Generation",
    "family": "Vision, Video & 3D",
    "definition": "Text prompt → video",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "wan",
        "evidence": "documented",
        "rationale": {
          "en": "The same released TI2V checkpoint explicitly supports both text-only and image-conditioned video generation.",
          "tr": "Aynı yayımlanmış TI2V sürümü hem yalnız metinden hem görüntü koşullu video üretimini açıkça destekler."
        },
        "sourceIds": [
          "ow-wan"
        ]
      }
    ]
  },
  {
    "id": "image-to-video-generation",
    "name": "Image-to-Video Generation",
    "family": "Vision, Video & 3D",
    "definition": "Image + conditioning → video",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "wan",
        "evidence": "documented",
        "rationale": {
          "en": "The same released TI2V checkpoint explicitly supports both text-only and image-conditioned video generation.",
          "tr": "Aynı yayımlanmış TI2V sürümü hem yalnız metinden hem görüntü koşullu video üretimini açıkça destekler."
        },
        "sourceIds": [
          "ow-wan"
        ]
      }
    ]
  },
  {
    "id": "text-to-3d-generation",
    "name": "Text-to-3D Generation",
    "family": "Vision, Video & 3D",
    "definition": "Text description → 3D representation",
    "definitionSourceId": "S47",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "shape",
        "evidence": "documented",
        "rationale": {
          "en": "The released text-conditioned prior generates implicit 3D assets; selected as a direct-task reference, not a current quality leader.",
          "tr": "Yayımlanan metin koşullu model örtük 3B varlıklar üretir; güncel kalite lideri olarak değil, doğrudan görev referansı olarak seçildi."
        },
        "sourceIds": [
          "ow-shape"
        ]
      }
    ]
  },
  {
    "id": "automatic-speech-recognition",
    "name": "Automatic Speech Recognition",
    "family": "Speech & Audio",
    "definition": "Speech → transcript",
    "definitionSourceId": "S08",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "asr",
        "evidence": "evaluated",
        "rationale": {
          "en": "Official multilingual ASR evaluations and streaming/offline examples are supplied; Turkish is in the language list.",
          "tr": "Resmî çok dilli ASR değerlendirmeleri ve akış/çevrimdışı örnekleri sunulur; Türkçe dil listesindedir."
        },
        "sourceIds": [
          "ow-asr"
        ]
      }
    ]
  },
  {
    "id": "speech-translation",
    "name": "Speech Translation",
    "family": "Speech & Audio",
    "definition": "Speech → text in another language",
    "definitionSourceId": "S09",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "seamless",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card links FLEURS, CoVoST2 and CVSS-C evaluation and explicitly supports speech-to-text and speech-to-speech translation.",
          "tr": "Kart FLEURS, CoVoST2 ve CVSS-C değerlendirmelerine bağlanır; konuşmadan metne ve konuşmadan konuşmaya çeviriyi açıkça destekler."
        },
        "sourceIds": [
          "ow-seamless"
        ]
      }
    ]
  },
  {
    "id": "keyword-spotting",
    "name": "Keyword Spotting",
    "family": "Speech & Audio",
    "definition": "Speech → target-word detection",
    "definitionSourceId": "S08",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "keyword",
        "evidence": "documented",
        "rationale": {
          "en": "Released SUPERB keyword-spotting classifier for preregistered Speech Commands words; new keywords need adaptation.",
          "tr": "Önceden tanımlı Speech Commands sözcükleri için yayımlanmış SUPERB sınıflandırıcısı; yeni sözcükler uyarlama gerektirir."
        },
        "sourceIds": [
          "ow-keyword"
        ]
      }
    ]
  },
  {
    "id": "speech-emotion-recognition",
    "name": "Speech Emotion Recognition",
    "family": "Speech & Audio",
    "definition": "Speech → emotion label",
    "definitionSourceId": "S08",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "emotion",
        "evidence": "documented",
        "rationale": {
          "en": "Released IEMOCAP emotion classifier with a documented SUPERB evaluation protocol. Label predictions are not psychological ground truth.",
          "tr": "Belgelenmiş SUPERB değerlendirme protokolüne sahip IEMOCAP duygu sınıflandırıcısı. Etiket tahminleri psikolojik kesinlik değildir."
        },
        "sourceIds": [
          "ow-emotion"
        ]
      }
    ]
  },
  {
    "id": "audio-classification",
    "name": "Audio Classification",
    "family": "Speech & Audio",
    "definition": "Sound clip → class labels",
    "definitionSourceId": "S04",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "ast",
        "evidence": "documented",
        "rationale": {
          "en": "The released checkpoint classifies AudioSet sound events; evaluate unseen environments independently.",
          "tr": "Yayımlanan sürüm AudioSet ses olaylarını sınıflandırır; görülmemiş ortamları ayrıca değerlendir."
        },
        "sourceIds": [
          "ow-ast"
        ]
      }
    ]
  },
  {
    "id": "speaker-identification",
    "name": "Speaker Identification",
    "family": "Speech & Audio",
    "definition": "Speech → enrolled speaker identity",
    "definitionSourceId": "S08",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "ecapa",
        "evidence": "adaptation",
        "rationale": {
          "en": "The speaker encoder supplies embeddings; identifying your speakers requires enrollment and a calibrated matching/classification stage.",
          "tr": "Konuşmacı kodlayıcısı vektörler sağlar; kendi konuşmacılarını tanımak kayıt ve kalibre edilmiş eşleştirme/sınıflandırma aşaması gerektirir."
        },
        "sourceIds": [
          "ow-ecapa"
        ]
      }
    ]
  },
  {
    "id": "speaker-verification",
    "name": "Speaker Verification",
    "family": "Speech & Audio",
    "definition": "Speech pair → same-speaker decision",
    "definitionSourceId": "S08",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "ecapa",
        "evidence": "evaluated",
        "rationale": {
          "en": "The model card reports VoxCeleb1 verification EER and provides cosine-score speaker-pair inference.",
          "tr": "Model kartı VoxCeleb1 doğrulama EER sonucunu raporlar ve kosinüs puanlı konuşmacı çifti çıkarımı sunar."
        },
        "sourceIds": [
          "ow-ecapa"
        ]
      }
    ]
  },
  {
    "id": "speaker-diarization",
    "name": "Speaker Diarization",
    "family": "Speech & Audio",
    "definition": "Audio → who spoke when",
    "definitionSourceId": "S08",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "diarization",
        "evidence": "evaluated",
        "rationale": {
          "en": "Published September 2025 DER table includes AMI, DIHARD and CALLHOME; this is the downloadable Community-1 pipeline.",
          "tr": "Eylül 2025 DER tablosu AMI, DIHARD ve CALLHOME içerir; bu indirilebilir Community-1 akışıdır."
        },
        "sourceIds": [
          "ow-diarization"
        ]
      }
    ]
  },
  {
    "id": "text-to-speech",
    "name": "Text-to-Speech",
    "family": "Speech & Audio",
    "definition": "Text → spoken waveform",
    "definitionSourceId": "S03",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "tts",
        "evidence": "documented",
        "rationale": {
          "en": "CustomVoice supports controllable text-to-speech in ten listed languages. Do not infer Turkish support from Qwen ASR.",
          "tr": "CustomVoice listelenen on dilde denetlenebilir metinden konuşmayı destekler. Qwen ASR desteğinden Türkçe TTS desteği çıkarılmamalıdır."
        },
        "sourceIds": [
          "ow-tts"
        ]
      }
    ]
  },
  {
    "id": "speech-enhancement",
    "name": "Speech Enhancement",
    "family": "Speech & Audio",
    "definition": "Noisy speech → cleaner speech",
    "definitionSourceId": "S09",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "enhancement",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports PESQ 3.15 and STOI 93.0 on VoiceBank-DEMAND; 16 kHz mono input.",
          "tr": "Yayıncı VoiceBank-DEMAND üzerinde PESQ 3,15 ve STOI 93,0 raporluyor; girdi 16 kHz monodur."
        },
        "sourceIds": [
          "ow-enhancement"
        ]
      }
    ]
  },
  {
    "id": "speech-separation",
    "name": "Speech Separation",
    "family": "Speech & Audio",
    "definition": "Mixed speech → speaker signals",
    "definitionSourceId": "S09",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "separation",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports 13.7 dB SI-SNR improvement on WHAMR!; results depend on noise, reverberation and source count.",
          "tr": "Yayıncı WHAMR! üzerinde 13,7 dB SI-SNR iyileşmesi raporluyor; sonuç gürültü, yankı ve kaynak sayısına bağlıdır."
        },
        "sourceIds": [
          "ow-separation"
        ]
      }
    ]
  },
  {
    "id": "voice-conversion",
    "name": "Voice Conversion",
    "family": "Speech & Audio",
    "definition": "Speech + target voice → converted speech",
    "definitionSourceId": "S09",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "voice",
        "evidence": "documented",
        "rationale": {
          "en": "The author repository links released v2 voice/accent-conversion checkpoints and reference-audio inference.",
          "tr": "Yazar deposu yayımlanmış v2 ses/aksan dönüşümü ağırlıklarına ve referans sesle çıkarıma bağlanır."
        },
        "sourceIds": [
          "ow-voice",
          "ow-seed-docs"
        ]
      }
    ]
  },
  {
    "id": "text-to-audio-generation",
    "name": "Text-to-Audio Generation",
    "family": "Speech & Audio",
    "definition": "Sound description → audio",
    "definitionSourceId": "S46",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "audiogen",
        "evidence": "documented",
        "rationale": {
          "en": "The model card provides prompt-conditioned sound generation using the released AudioCraft checkpoint.",
          "tr": "Model kartı yayımlanmış AudioCraft ağırlığıyla istem koşullu ses üretimi sunuyor."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      }
    ]
  },
  {
    "id": "conditional-music-generation",
    "name": "Conditional Music Generation",
    "family": "Speech & Audio",
    "definition": "Text or melody → music",
    "definitionSourceId": "S45",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "ace",
        "evidence": "documented",
        "rationale": {
          "en": "The release documents text-to-music, reference audio and editing modes with separate model variants.",
          "tr": "Yayın metinden müzik, referans ses ve düzenleme modlarını ayrı model varyantlarıyla belgeliyor."
        },
        "sourceIds": [
          "ow-ace"
        ]
      },
      {
        "modelId": "musicgen",
        "evidence": "evaluated",
        "rationale": {
          "en": "MusicCaps and human-listening evaluation are described for the MusicGen family; this is the text-conditioned large checkpoint.",
          "tr": "MusicGen ailesi için MusicCaps ve insan dinleme değerlendirmesi açıklanır; bu metin koşullu büyük sürümdür."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      }
    ]
  },
  {
    "id": "text-to-code-generation",
    "name": "Text-to-Code Generation",
    "family": "Code & Programs",
    "definition": "Natural-language specification → code",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "deepseek41",
        "evidence": "evaluated",
        "rationale": {
          "en": "The publisher reports DeepSWE v1.1 77.0 using Mini-SWE-V2; this is an agent coding result, not a standalone completion score.",
          "tr": "Yayıncı Mini-SWE-V2 ile DeepSWE v1.1 için 77,0 raporluyor; bu ajan kodlama sonucudur, bağımsız tamamlama puanı değildir."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "qwen38",
        "evidence": "evaluated",
        "rationale": {
          "en": "The publisher reports LiveCodeBench v6 90.3; compare task versions and sampling settings, not just headline scores.",
          "tr": "Yayıncı LiveCodeBench v6 için 90,3 raporluyor; yalnız puanları değil görev sürümlerini ve örnekleme koşullarını karşılaştır."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "coder",
        "evidence": "documented",
        "rationale": {
          "en": "Official coding-agent checkpoint and generation examples; 80B total / 3B active parameters.",
          "tr": "Resmî kodlama ajanı ağırlıkları ve üretim örnekleri; toplam 80B / etkin 3B parametre."
        },
        "sourceIds": [
          "ow-coder"
        ]
      }
    ]
  },
  {
    "id": "code-completion",
    "name": "Code Completion",
    "family": "Code & Programs",
    "definition": "Code context → continuation",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "codet5plus",
        "evidence": "documented",
        "rationale": {
          "en": "The checkpoint card gives a masked code-completion example; completion style differs from chat coding.",
          "tr": "Ağırlık kartı maskelenmiş kod tamamlama örneği verir; tamamlama tarzı sohbetle kodlamadan farklıdır."
        },
        "sourceIds": [
          "ow-codet5plus"
        ]
      }
    ]
  },
  {
    "id": "code-repair",
    "name": "Code Repair",
    "family": "Code & Programs",
    "definition": "Faulty code → corrected code",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "deepseek41",
        "evidence": "evaluated",
        "rationale": {
          "en": "DeepSWE v1.1 is reported at 77.0 with Mini-SWE-V2. The harness, tools and test environment are part of the result.",
          "tr": "DeepSWE v1.1, Mini-SWE-V2 ile 77,0 raporlanır. Ajan çatısı, araçlar ve test ortamı sonucun parçasıdır."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "glm53",
        "evidence": "evaluated",
        "rationale": {
          "en": "The card reports DeepSWE v1.1 66.9 with mini-swe-agent. Its setup differs from other publishers, so scores are not normalized here.",
          "tr": "Kart mini-swe-agent ile DeepSWE v1.1 için 66,9 raporlar. Kurulum diğer yayıncılardan farklıdır; puanlar burada normalize edilmedi."
        },
        "sourceIds": [
          "ow-glm53"
        ]
      }
    ]
  },
  {
    "id": "code-translation",
    "name": "Code Translation",
    "family": "Code & Programs",
    "definition": "Code → equivalent code in another language",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "codet5",
        "evidence": "adaptation",
        "rationale": {
          "en": "The CodeT5 paper/card covers this downstream task after task-specific tuning. The linked base weights are not the evaluated fine-tuned classifier.",
          "tr": "CodeT5 makalesi/kartı bu görevi göreve özel ince ayardan sonra kapsar. Bağlanan temel ağırlıklar değerlendirilen ince ayarlı sınıflandırıcı değildir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      }
    ]
  },
  {
    "id": "text-to-sql",
    "name": "Text-to-SQL",
    "family": "Code & Programs",
    "definition": "Question + database schema → SQL",
    "definitionSourceId": "S15",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "sql",
        "evidence": "evaluated",
        "rationale": {
          "en": "The publisher evaluates this checkpoint with its PostgreSQL SQL-Eval framework; results do not transfer automatically to every SQL dialect.",
          "tr": "Yayıncı bu sürümü PostgreSQL SQL-Eval çatısıyla değerlendirir; sonuçlar her SQL lehçesine otomatik aktarılmaz."
        },
        "sourceIds": [
          "ow-sql"
        ]
      }
    ]
  },
  {
    "id": "code-summarization",
    "name": "Code Summarization",
    "family": "Code & Programs",
    "definition": "Code → natural-language description",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "codet5",
        "evidence": "adaptation",
        "rationale": {
          "en": "The CodeT5 paper/card covers this downstream task after task-specific tuning. The linked base weights are not the evaluated fine-tuned classifier.",
          "tr": "CodeT5 makalesi/kartı bu görevi göreve özel ince ayardan sonra kapsar. Bağlanan temel ağırlıklar değerlendirilen ince ayarlı sınıflandırıcı değildir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      }
    ]
  },
  {
    "id": "code-search",
    "name": "Code Search",
    "family": "Code & Programs",
    "definition": "Natural-language query → relevant code",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "embedding",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports MTEB/CMTEB retrieval, STS and code-retrieval evaluations. The reported 70.58 multilingual aggregate is a June 2025 snapshot, not a live rank.",
          "tr": "Yayıncı MTEB/CMTEB erişim, STS ve kod erişimi değerlendirmeleri sunuyor. Raporlanan 70,58 çok dilli toplam puan Haziran 2025 kaydıdır, canlı sıralama değildir."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      }
    ]
  },
  {
    "id": "code-clone-detection",
    "name": "Code Clone Detection",
    "family": "Code & Programs",
    "definition": "Code pair → clone / similarity label",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "codet5",
        "evidence": "adaptation",
        "rationale": {
          "en": "The CodeT5 paper/card covers this downstream task after task-specific tuning. The linked base weights are not the evaluated fine-tuned classifier.",
          "tr": "CodeT5 makalesi/kartı bu görevi göreve özel ince ayardan sonra kapsar. Bağlanan temel ağırlıklar değerlendirilen ince ayarlı sınıflandırıcı değildir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      }
    ]
  },
  {
    "id": "defect-detection",
    "name": "Defect Detection",
    "family": "Code & Programs",
    "definition": "Code → defect or vulnerability label",
    "definitionSourceId": "S07",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "codet5",
        "evidence": "adaptation",
        "rationale": {
          "en": "The CodeT5 paper/card covers this downstream task after task-specific tuning. The linked base weights are not the evaluated fine-tuned classifier.",
          "tr": "CodeT5 makalesi/kartı bu görevi göreve özel ince ayardan sonra kapsar. Bağlanan temel ağırlıklar değerlendirilen ince ayarlı sınıflandırıcı değildir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      }
    ]
  },
  {
    "id": "classification",
    "name": "Classification",
    "family": "Data & Time Series",
    "definition": "Feature vector → category",
    "definitionSourceId": "S02",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "tabpfn",
        "evidence": "documented",
        "rationale": {
          "en": "TabPFN 3.5 explicitly uses one pretrained checkpoint for tabular classification and regression through in-context learning.",
          "tr": "TabPFN 3.5 tablo sınıflandırma ve regresyon için bağlam içi öğrenmeyle tek önceden eğitilmiş ağırlığı açıkça kullanıyor."
        },
        "sourceIds": [
          "ow-tabpfn"
        ]
      }
    ]
  },
  {
    "id": "regression",
    "name": "Regression",
    "family": "Data & Time Series",
    "definition": "Feature vector → numerical target",
    "definitionSourceId": "S02",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "tabpfn",
        "evidence": "documented",
        "rationale": {
          "en": "TabPFN 3.5 explicitly uses one pretrained checkpoint for tabular classification and regression through in-context learning.",
          "tr": "TabPFN 3.5 tablo sınıflandırma ve regresyon için bağlam içi öğrenmeyle tek önceden eğitilmiş ağırlığı açıkça kullanıyor."
        },
        "sourceIds": [
          "ow-tabpfn"
        ]
      }
    ]
  },
  {
    "id": "time-series-forecasting",
    "name": "Time-Series Forecasting",
    "family": "Data & Time Series",
    "definition": "Past observations → future values",
    "definitionSourceId": "S10",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "chronos",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports fev-bench, GIFT-Eval and Chronos Benchmark II results, including multivariate/covariate settings.",
          "tr": "Yayıncı çok değişkenli/yardımcı değişkenli koşullar dahil fev-bench, GIFT-Eval ve Chronos Benchmark II sonuçları raporluyor."
        },
        "sourceIds": [
          "ow-chronos"
        ]
      }
    ]
  },
  {
    "id": "clustering",
    "name": "Clustering",
    "family": "Data & Time Series",
    "definition": "Observations → groups",
    "definitionSourceId": "S02",
    "note": {
      "en": "No general-purpose pretrained checkpoint is nominated. Select and fit a method for the data type and objective; the task reference explains the methodological family.",
      "tr": "Genel amaçlı hazır ağırlık önerilmedi. Veri türü ve hedefe göre yöntem seçip eğit; görev kaynağı yöntem ailesini açıklar."
    },
    "recommendations": []
  },
  {
    "id": "dimensionality-reduction",
    "name": "Dimensionality Reduction",
    "family": "Data & Time Series",
    "definition": "Features → lower-dimensional representation",
    "definitionSourceId": "S02",
    "note": {
      "en": "No general-purpose pretrained checkpoint is nominated. Select and fit a method for the data type and objective; the task reference explains the methodological family.",
      "tr": "Genel amaçlı hazır ağırlık önerilmedi. Veri türü ve hedefe göre yöntem seçip eğit; görev kaynağı yöntem ailesini açıklar."
    },
    "recommendations": []
  },
  {
    "id": "density-estimation",
    "name": "Density Estimation",
    "family": "Data & Time Series",
    "definition": "Observations → probability density",
    "definitionSourceId": "S02",
    "note": {
      "en": "No general-purpose pretrained checkpoint is nominated. Select and fit a method for the data type and objective; the task reference explains the methodological family.",
      "tr": "Genel amaçlı hazır ağırlık önerilmedi. Veri türü ve hedefe göre yöntem seçip eğit; görev kaynağı yöntem ailesini açıklar."
    },
    "recommendations": []
  },
  {
    "id": "anomaly-detection",
    "name": "Anomaly Detection",
    "family": "Data & Time Series",
    "definition": "Observations → anomaly scores or flags",
    "definitionSourceId": "S02",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "moment",
        "evidence": "documented",
        "rationale": {
          "en": "MOMENT documents reconstruction-based time-series anomaly detection and imputation tutorials; calibrate on the target series.",
          "tr": "MOMENT yeniden oluşturma tabanlı zaman serisi anomali tespiti ve eksik değer tamamlama örnekleri belgeler; hedef seri üzerinde kalibre et."
        },
        "sourceIds": [
          "ow-moment"
        ]
      }
    ]
  },
  {
    "id": "missing-value-imputation",
    "name": "Missing-Value Imputation",
    "family": "Data & Time Series",
    "definition": "Incomplete data → estimated missing values",
    "definitionSourceId": "S02",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "moment",
        "evidence": "documented",
        "rationale": {
          "en": "MOMENT documents reconstruction-based time-series anomaly detection and imputation tutorials; calibrate on the target series.",
          "tr": "MOMENT yeniden oluşturma tabanlı zaman serisi anomali tespiti ve eksik değer tamamlama örnekleri belgeler; hedef seri üzerinde kalibre et."
        },
        "sourceIds": [
          "ow-moment"
        ]
      }
    ]
  },
  {
    "id": "change-point-detection",
    "name": "Change-Point Detection",
    "family": "Data & Time Series",
    "definition": "Time series → regime-change locations",
    "definitionSourceId": "S10",
    "note": {
      "en": "No general-purpose pretrained checkpoint is nominated. Select and fit a method for the data type and objective; the task reference explains the methodological family.",
      "tr": "Genel amaçlı hazır ağırlık önerilmedi. Veri türü ve hedefe göre yöntem seçip eğit; görev kaynağı yöntem ailesini açıklar."
    },
    "recommendations": []
  },
  {
    "id": "node-classification",
    "name": "Node Classification",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph + nodes → node labels",
    "definitionSourceId": "S11",
    "note": {
      "en": "No transferable checkpoint was verified for arbitrary graphs. Node features, relation schema and labels usually require graph-specific training; see the OGB task definitions.",
      "tr": "Keyfî çizgeler için aktarılabilir ağırlık doğrulanmadı. Düğüm özellikleri, ilişki şeması ve etiketler genellikle çizgeye özel eğitim gerektirir; OGB görev tanımlarına bak."
    },
    "recommendations": []
  },
  {
    "id": "link-prediction",
    "name": "Link Prediction",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph + node pairs → link scores",
    "definitionSourceId": "S11",
    "note": {
      "en": "No transferable checkpoint was verified for arbitrary graphs. Node features, relation schema and labels usually require graph-specific training; see the OGB task definitions.",
      "tr": "Keyfî çizgeler için aktarılabilir ağırlık doğrulanmadı. Düğüm özellikleri, ilişki şeması ve etiketler genellikle çizgeye özel eğitim gerektirir; OGB görev tanımlarına bak."
    },
    "recommendations": []
  },
  {
    "id": "graph-classification",
    "name": "Graph Classification",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph → graph-level labels",
    "definitionSourceId": "S11",
    "note": {
      "en": "No transferable checkpoint was verified for arbitrary graphs. Node features, relation schema and labels usually require graph-specific training; see the OGB task definitions.",
      "tr": "Keyfî çizgeler için aktarılabilir ağırlık doğrulanmadı. Düğüm özellikleri, ilişki şeması ve etiketler genellikle çizgeye özel eğitim gerektirir; OGB görev tanımlarına bak."
    },
    "recommendations": []
  },
  {
    "id": "graph-regression",
    "name": "Graph Regression",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph → graph-level numerical targets",
    "definitionSourceId": "S11",
    "note": {
      "en": "No transferable checkpoint was verified for arbitrary graphs. Node features, relation schema and labels usually require graph-specific training; see the OGB task definitions.",
      "tr": "Keyfî çizgeler için aktarılabilir ağırlık doğrulanmadı. Düğüm özellikleri, ilişki şeması ve etiketler genellikle çizgeye özel eğitim gerektirir; OGB görev tanımlarına bak."
    },
    "recommendations": []
  },
  {
    "id": "molecular-property-prediction",
    "name": "Molecular Property Prediction",
    "family": "Graphs & Scientific Prediction",
    "definition": "Molecule representation → properties",
    "definitionSourceId": "S23",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "boltz",
        "evidence": "documented",
        "rationale": {
          "en": "Supports protein–ligand binding affinity, a specific molecular-property subtask. This does not establish toxicity, solubility or other ADMET prediction.",
          "tr": "Belirli bir moleküler özellik alt görevi olan protein–ligand bağlanma afinitesini destekler. Bu; toksisite, çözünürlük veya diğer ADMET tahminlerini kanıtlamaz."
        },
        "sourceIds": [
          "ow-boltz",
          "ow-boltz-docs"
        ]
      }
    ]
  },
  {
    "id": "protein-structure-prediction",
    "name": "Protein Structure Prediction",
    "family": "Graphs & Scientific Prediction",
    "definition": "Sequence + context → 3D protein structure",
    "definitionSourceId": "S22",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "boltz",
        "evidence": "documented",
        "rationale": {
          "en": "The authors release structure/confidence weights for biomolecular complexes together with inference instructions.",
          "tr": "Yazarlar biyomoleküler kompleksler için yapı/güven ağırlıkları ve çıkarım talimatları yayımlar."
        },
        "sourceIds": [
          "ow-boltz",
          "ow-boltz-docs"
        ]
      }
    ]
  },
  {
    "id": "math-word-problem-solving",
    "name": "Math Word-Problem Solving",
    "family": "Reasoning, Planning & Action",
    "definition": "Mathematical word problem → solution",
    "definitionSourceId": "S16",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "deepseek41",
        "evidence": "adaptation",
        "rationale": {
          "en": "Current reasoning-model candidate; its cited October card does not report a dedicated word-problem benchmark. Validate this proposed use on your problem set.",
          "tr": "Güncel akıl yürütme modeli adayı; atıf verilen Ekim kartı özel sözel problem değerlendirmesi raporlamıyor. Bu önerilen kullanımı kendi problem kümenle doğrula."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "r1",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports AIME 2025 pass@1 of 87.5 and HMMT 2025 pass@1 of 79.4. Historical competition-math reference, not a current overall rank.",
          "tr": "Yayıncı AIME 2025 pass@1 için 87,5 ve HMMT 2025 pass@1 için 79,4 raporluyor. Tarihsel yarışma matematiği referansıdır, güncel genel sıralama değildir."
        },
        "sourceIds": [
          "ow-r1"
        ]
      }
    ]
  },
  {
    "id": "formal-theorem-proving",
    "name": "Formal Theorem Proving",
    "family": "Reasoning, Planning & Action",
    "definition": "Formal statement → verifiable proof",
    "definitionSourceId": "S17",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "prover",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports 88.9% miniF2F-test pass ratio using its proof-search protocol. Lean verification and sampling budget are essential.",
          "tr": "Yayıncı kendi ispat arama protokolüyle miniF2F-test için %88,9 geçiş oranı raporluyor. Lean doğrulaması ve örnekleme bütçesi esastır."
        },
        "sourceIds": [
          "ow-prover"
        ]
      }
    ]
  },
  {
    "id": "constraint-satisfaction",
    "name": "Constraint Satisfaction",
    "family": "Reasoning, Planning & Action",
    "definition": "Variables + constraints → valid assignment",
    "definitionSourceId": "S01",
    "note": {
      "en": "This task often uses a solver, geometric estimator or planner rather than a reusable weight file. A task-specific learned model was not verified here; see the primary task reference.",
      "tr": "Bu görev çoğu zaman yeniden kullanılabilir ağırlık yerine çözücü, geometrik kestirici veya planlayıcı kullanır. Göreve özel öğrenilmiş model burada doğrulanmadı; birincil görev kaynağına bak."
    },
    "recommendations": []
  },
  {
    "id": "classical-planning",
    "name": "Classical Planning",
    "family": "Reasoning, Planning & Action",
    "definition": "Initial state + actions + goal → plan",
    "definitionSourceId": "S01",
    "note": {
      "en": "This task often uses a solver, geometric estimator or planner rather than a reusable weight file. A task-specific learned model was not verified here; see the primary task reference.",
      "tr": "Bu görev çoğu zaman yeniden kullanılabilir ağırlık yerine çözücü, geometrik kestirici veya planlayıcı kullanır. Göreve özel öğrenilmiş model burada doğrulanmadı; birincil görev kaynağına bak."
    },
    "recommendations": []
  },
  {
    "id": "robot-localization",
    "name": "Robot Localization",
    "family": "Reasoning, Planning & Action",
    "definition": "Sensor observations + map → robot pose",
    "definitionSourceId": "S01",
    "note": {
      "en": "This task often uses a solver, geometric estimator or planner rather than a reusable weight file. A task-specific learned model was not verified here; see the primary task reference.",
      "tr": "Bu görev çoğu zaman yeniden kullanılabilir ağırlık yerine çözücü, geometrik kestirici veya planlayıcı kullanır. Göreve özel öğrenilmiş model burada doğrulanmadı; birincil görev kaynağına bak."
    },
    "recommendations": []
  },
  {
    "id": "robot-motion-planning",
    "name": "Robot Motion Planning",
    "family": "Reasoning, Planning & Action",
    "definition": "Start + goal + obstacles → feasible path",
    "definitionSourceId": "S01",
    "note": {
      "en": "This task often uses a solver, geometric estimator or planner rather than a reusable weight file. A task-specific learned model was not verified here; see the primary task reference.",
      "tr": "Bu görev çoğu zaman yeniden kullanılabilir ağırlık yerine çözücü, geometrik kestirici veya planlayıcı kullanır. Göreve özel öğrenilmiş model burada doğrulanmadı; birincil görev kaynağına bak."
    },
    "recommendations": []
  },
  {
    "id": "function-calling",
    "name": "Function Calling",
    "family": "Reasoning, Planning & Action",
    "definition": "Request + tool schemas → function arguments",
    "definitionSourceId": "S20",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "deepseek41",
        "evidence": "documented",
        "rationale": {
          "en": "The release includes reference encoding and tests for tool calls and arguments. The application must execute and validate calls.",
          "tr": "Yayın araç çağrıları ve argümanlar için referans kodlama ve testler içerir. Çağrıları uygulama yürütmeli ve doğrulamalıdır."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "qwen38",
        "evidence": "documented",
        "rationale": {
          "en": "The serving guide specifies a tool-call parser and tool-use integration; no standalone BFCL score is claimed for this entry.",
          "tr": "Sunum kılavuzu araç çağrısı ayrıştırıcısı ve araç entegrasyonu belirtir; bu kayıt için bağımsız BFCL puanı iddia edilmez."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      }
    ]
  },
  {
    "id": "web-task-execution",
    "name": "Web Task Execution",
    "family": "Reasoning, Planning & Action",
    "definition": "Goal + website state → completed task",
    "definitionSourceId": "S18",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports 64.8 on WebArena-Verified with the OSWorld scaffold and official grader. This is a complete agent-system result.",
          "tr": "Yayıncı OSWorld çatısı ve resmî değerlendiriciyle WebArena-Verified için 64,8 raporluyor. Bu tam ajan sistemi sonucudur."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "uitars",
        "evidence": "evaluated",
        "rationale": {
          "en": "Historical specialist reference: WebVoyager 84.8 in the model card. This is a different benchmark from WebArena-Verified.",
          "tr": "Tarihsel uzman referansı: model kartında WebVoyager 84,8. Bu, WebArena-Verified değerlendirmesinden farklıdır."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      }
    ]
  },
  {
    "id": "desktop-task-execution",
    "name": "Desktop Task Execution",
    "family": "Reasoning, Planning & Action",
    "definition": "Goal + desktop state → completed task",
    "definitionSourceId": "S19",
    "note": {
      "en": "Selections are task-specific; compare the cited evaluation setting with your own data.",
      "tr": "Seçimler göreve özeldir; kaynakta belirtilen değerlendirme koşullarını kendi verinle karşılaştır."
    },
    "recommendations": [
      {
        "modelId": "qwen38",
        "evidence": "evaluated",
        "rationale": {
          "en": "Publisher reports 84.3 on OSWorld-Verified; execution tools, environment and evaluation protocol are part of the result.",
          "tr": "Yayıncı OSWorld-Verified için 84,3 raporluyor; yürütme araçları, ortam ve değerlendirme protokolü sonucun parçasıdır."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "uitars",
        "evidence": "evaluated",
        "rationale": {
          "en": "Historical specialist reference: OSWorld 42.5 with a 100-step budget. Do not compare directly with newer OSWorld-Verified protocols.",
          "tr": "Tarihsel uzman referansı: 100 adım bütçesiyle OSWorld 42,5. Yeni OSWorld-Verified protokolleriyle doğrudan karşılaştırma."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      }
    ]
  }
] satisfies TaxonomyTask[];
