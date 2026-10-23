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
  },
  {
    "id": "fasttext-lid",
    "name": "fastText lid218e",
    "cardSourceId": "ow-fasttext-lid",
    "weightsSourceId": "ow-fasttext-lid-weights",
    "licenseSourceId": "ow-fasttext-lid-license",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "A fixed language-identification classifier for 217 languages. The released model.bin predicts language labels; other text categories require training. Noncommercial weight license.",
      "tr": "217 dil için sabit bir dil tanıma sınıflandırıcısıdır. Yayımlanan model.bin dil etiketleri tahmin eder; başka metin kategorileri eğitim gerektirir. Ağırlık lisansı ticari kullanımı kapsamaz."
    }
  },
  {
    "id": "mamba2",
    "name": "Mamba2 2.7B",
    "cardSourceId": "ow-mamba2",
    "weightsSourceId": "ow-mamba2-weights",
    "licenseSourceId": "ow-mamba2-license",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "Base causal language model trained on the Pile; the author repository supplies its generation and evaluation commands. It is not an instruction-tuned assistant. Requires the Mamba runtime.",
      "tr": "Pile üzerinde eğitilmiş temel nedensel dil modelidir; yazar deposu üretim ve değerlendirme komutlarını sağlar. Talimatla ayarlanmış bir asistan değildir. Mamba çalışma ortamını gerektirir."
    }
  },
  {
    "id": "olmo2-dpo",
    "name": "OLMo 2 7B DPO · 1124",
    "cardSourceId": "ow-olmo2-dpo",
    "weightsSourceId": "ow-olmo2-dpo-weights",
    "licenseSourceId": "ow-olmo2-dpo-license",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "The corrected DPO-stage checkpoint, updated in January 2025. Its card distinguishes SFT, DPO and the later RLVR final model. Results for the final Instruct model must not be assigned to this intermediate checkpoint.",
      "tr": "Ocak 2025’te güncellenmiş, düzeltilmiş DPO aşaması ağırlıklarıdır. Kart; SFT, DPO ve sonraki RLVR son modelini ayrı tutar. Son Instruct modelinin sonuçları bu ara aşamaya atfedilemez."
    }
  },
  {
    "id": "llama31-rlhf",
    "name": "Llama 3.1 8B Instruct",
    "cardSourceId": "ow-llama31-rlhf",
    "weightsSourceId": "ow-llama31-rlhf-weights",
    "licenseSourceId": "ow-llama31-rlhf-license",
    "license": "Llama 3.1 Community License",
    "access": "gated",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "A historical reference for documented human-feedback post-training. Access requires acceptance of Meta’s conditions. The card lists eight supported languages; Turkish is not one of them.",
      "tr": "İnsan geri bildirimli son eğitimi belgelenmiş tarihsel bir referanstır. Erişim Meta’nın koşullarının kabulünü gerektirir. Kart sekiz desteklenen dil belirtir; Türkçe bu listede değildir."
    }
  },
  {
    "id": "mlp-mixer",
    "name": "MLP-Mixer B/16 · ImageNet",
    "cardSourceId": "ow-mlp-mixer",
    "weightsSourceId": "ow-mlp-mixer-weights",
    "licenseSourceId": "ow-mlp-mixer-license",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "timm-maintained distribution of the authors’ ImageNet-21k pretrained, ImageNet-1k fine-tuned weights. A vision MLP with token and channel mixing; 224-pixel input and the published normalization are required.",
      "tr": "Yazarların ImageNet-21k ön eğitimli ve ImageNet-1k ile ince ayarlanmış ağırlıklarının timm dağıtımıdır. Token ve kanal karıştıran bir görsel MLP’dir; 224 piksel girdi ve yayımlanan normalizasyon gerekir."
    }
  },
  {
    "id": "resnet50-ssl",
    "name": "ResNet-50 SSL · YFCC100M → ImageNet",
    "cardSourceId": "ow-resnet50-ssl",
    "weightsSourceId": "ow-resnet50-ssl-weights",
    "licenseSourceId": "ow-resnet50-ssl-license",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "The semi-supervised SSL variant, not SWSL. Teacher pseudo-labels on unlabeled YFCC100M images precede ImageNet fine-tuning. The weights are noncommercial and serve as a historical method reference.",
      "tr": "SWSL değil, yarı gözetimli SSL sürümüdür. Etiketsiz YFCC100M görüntülerindeki öğretmen sözde etiketlerini ImageNet ince ayarı izler. Ağırlıklar ticari olmayan kullanım içindir ve tarihsel yöntem referansı sunar."
    }
  },
  {
    "id": "chgnet",
    "name": "CHGNet 0.3.0 · MPtrj",
    "cardSourceId": "ow-chgnet",
    "weightsSourceId": "ow-chgnet-weights",
    "licenseSourceId": "ow-chgnet-license",
    "license": "BSD-style CHGNet license",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Crystal-graph potential for energies, forces, stresses and magnetic moments. This is the MPtrj 0.3.0 checkpoint, not the newer MatPES models. Requires a periodic crystal structure; it is not a general molecular ADMET predictor.",
      "tr": "Enerji, kuvvet, gerilme ve manyetik momentler için kristal grafı potansiyelidir. Bu, yeni MatPES modelleri değil MPtrj 0.3.0 ağırlıklarıdır. Periyodik kristal yapı gerektirir; genel bir moleküler ADMET tahmincisi değildir."
    }
  },
  {
    "id": "pocketsphinx",
    "name": "PocketSphinx · US English HMM-GMM",
    "cardSourceId": "ow-pocketsphinx",
    "weightsSourceId": "ow-pocketsphinx-weights",
    "licenseSourceId": "ow-pocketsphinx-license",
    "license": "BSD-2-Clause acoustic model; bundled resources retain their terms",
    "access": "public",
    "role": "reference",
    "parameterKind": "statistical",
    "licenseScope": "artifact",
    "context": {
      "en": "A compact classical English ASR bundle. The acoustic model contains means, variances, mixture weights and transitions; recognition also needs the bundled pronunciation dictionary, language model and decoder. Not a multilingual Whisper replacement.",
      "tr": "Kompakt bir klasik İngilizce ASR paketidir. Akustik model ortalama, varyans, karışım ağırlığı ve geçiş parametreleri içerir; tanıma ayrıca paketteki telaffuz sözlüğü, dil modeli ve kod çözücüyü gerektirir. Çok dilli bir Whisper karşılığı değildir."
    }
  },
  {
    "id": "dlib-five",
    "name": "dlib · 5-point face landmarks",
    "cardSourceId": "ow-dlib-five",
    "weightsSourceId": "ow-dlib-five-weights",
    "licenseSourceId": "ow-dlib-five-license",
    "license": "Public domain declaration",
    "access": "public",
    "role": "reference",
    "parameterKind": "statistical",
    "licenseScope": "artifact",
    "context": {
      "en": "Five facial landmarks: eye corners and the bottom of the nose. Requires a face bounding box from a compatible detector. The author’s public-domain statement covers this release; the separate 68-point iBUG model has different restrictions.",
      "tr": "Beş yüz noktası: göz köşeleri ve burnun altı. Uyumlu bir dedektörden yüz sınırlayıcı kutusu gerekir. Yazarın kamu malı beyanı bu sürümü kapsar; ayrı 68 noktalı iBUG modelinin koşulları farklıdır."
    }
  },
  {
    "id": "brisque",
    "name": "BRISQUE · LIVE-R2 RBF-SVR",
    "cardSourceId": "ow-brisque",
    "weightsSourceId": "ow-brisque-weights",
    "licenseSourceId": "ow-brisque-license",
    "license": "Apache-2.0 repository license",
    "access": "public",
    "role": "reference",
    "parameterKind": "statistical",
    "licenseScope": "repository",
    "context": {
      "en": "An RBF support-vector regressor over 36 natural-scene features for image quality. Use brisque_model_live.yml together with brisque_range_live.yml and the matching feature extraction. It is not a generic tabular regressor.",
      "tr": "Görüntü kalitesi için 36 doğal sahne özelliği üzerinde çalışan RBF destek vektör regresörüdür. brisque_model_live.yml ile brisque_range_live.yml ve aynı özellik çıkarımı birlikte kullanılmalıdır. Genel amaçlı bir tablo regresörü değildir."
    }
  },
  {
    "id": "glove-factors",
    "name": "GloVe 6B · 300-dimensional word factors",
    "cardSourceId": "ow-glove-factors",
    "weightsSourceId": "ow-glove-factors-weights",
    "licenseSourceId": "ow-glove-factors-license",
    "license": "PDDL 1.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "Use glove.6B.zip and its 300-dimensional table, trained on Wikipedia and Gigaword. A fixed vocabulary of word factors, not a sentence encoder or a PCA transform for arbitrary features. Sentence comparisons need pooling and task evaluation.",
      "tr": "Wikipedia ve Gigaword üzerinde eğitilmiş glove.6B.zip içindeki 300 boyutlu tablo kullanılır. Sabit sözlüğe ait kelime faktörleridir; cümle kodlayıcısı veya keyfi özellikler için PCA dönüşümü değildir. Cümle karşılaştırmaları havuzlama ve görev değerlendirmesi gerektirir."
    }
  },
  {
    "id": "asia-bn",
    "name": "ASIA · parameterized Bayesian network",
    "cardSourceId": "ow-asia-bn",
    "weightsSourceId": "ow-asia-bn-weights",
    "licenseSourceId": "ow-asia-bn-license",
    "license": "CC-BY-SA-3.0 (bnlearn collection, per distributor)",
    "access": "public",
    "role": "reference",
    "parameterKind": "statistical",
    "licenseScope": "artifact",
    "context": {
      "en": "Eight-node benchmark with published conditional probability tables, not learned neural weights. Its medical story is an educational example, not a clinically validated model. Inference is restricted to its named variables and states.",
      "tr": "Yayımlanmış koşullu olasılık tabloları içeren sekiz düğümlü karşılaştırma örneğidir; öğrenilmiş sinir ağı ağırlıkları içermez. Tıbbi senaryosu eğitim amaçlıdır, klinik olarak doğrulanmış model değildir. Çıkarım kendi değişkenleri ve durumlarıyla sınırlıdır."
    }
  },
  {
    "id": "anyburl-rules",
    "name": "AnyBURL · WN18RR learned rules",
    "cardSourceId": "ow-anyburl-rules",
    "weightsSourceId": "ow-anyburl-rules-weights",
    "licenseSourceId": "ow-anyburl-rules-license",
    "license": "PyClause BSD-style repository license",
    "access": "public",
    "role": "reference",
    "parameterKind": "rules",
    "licenseScope": "repository",
    "context": {
      "en": "Published first-order rules with support counts and confidence values. PyClause recomputes confidence from the counts. Requires the matching WN18RR relation vocabulary and graph facts. This is statistical rule-based link prediction, not a sound general-purpose theorem prover. Dataset terms also apply.",
      "tr": "Destek sayıları ve güven değerleriyle yayımlanmış birinci dereceden kurallardır. PyClause güveni sayılardan yeniden hesaplar. Eşleşen WN18RR ilişki sözlüğü ve graf olguları gerekir. İstatistiksel kural tabanlı bağlantı tahminidir; genel amaçlı, doğruluğu garantili teorem ispatlayıcı değildir. Veri kümesi koşulları da geçerlidir."
    }
  },
  {
    "id": "glow",
    "name": "Glow · CelebA-HQ 256",
    "cardSourceId": "ow-glow",
    "weightsSourceId": "ow-glow-weights",
    "licenseSourceId": "ow-glow-license",
    "license": "MIT repository license",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Historical TensorFlow 1.x face-image flow. The published demo graph supports encoding, decoding and attribute manipulation; aligned 256×256 faces, manipulation vectors and legacy runtime are required. This graph is not a ready-made general density-scoring API.",
      "tr": "Tarihsel TensorFlow 1.x yüz görüntüsü akış modelidir. Yayımlanan demo grafı kodlama, çözme ve nitelik değiştirmeyi destekler; hizalanmış 256×256 yüzler, değiştirme vektörleri ve eski çalışma ortamı gerekir. Bu graf genel amaçlı hazır yoğunluk puanlama API’si değildir."
    }
  },
  {
    "id": "jem",
    "name": "JEM · CIFAR-10",
    "cardSourceId": "ow-jem",
    "weightsSourceId": "ow-jem-weights",
    "licenseSourceId": "ow-jem-license",
    "license": "Apache-2.0 repository license",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Joint classifier and energy model on CIFAR-10. Use the author’s preprocessing and evaluation code. Energy-based OOD scores are not calibrated anomaly probabilities or normalized likelihoods. This is a historical research checkpoint.",
      "tr": "CIFAR-10 üzerinde ortak sınıflandırıcı ve enerji modelidir. Yazarın ön işleme ve değerlendirme kodu gerekir. Enerji tabanlı dağılım dışı skorlar kalibre anomali olasılıkları veya normalize olabilirlikler değildir. Tarihsel araştırma ağırlıklarıdır."
    }
  },
  {
    "id": "knnvc",
    "name": "kNN-VC · prematched HiFi-GAN",
    "cardSourceId": "ow-knnvc",
    "weightsSourceId": "ow-knnvc-weights",
    "licenseSourceId": "ow-knnvc-license",
    "license": "MIT-derived repository license (additional condition); WavLM terms",
    "access": "public",
    "role": "reference",
    "parameterKind": "pipeline",
    "licenseScope": "repository",
    "context": {
      "en": "A complete voice-conversion pipeline with released WavLM-Large and prematched HiFi-GAN checkpoints. The conversion stage is non-parametric kNN regression over target-speaker reference audio, which the user must provide. The neighbors are not learned network weights.",
      "tr": "WavLM-Large ve önceden eşleştirilmiş HiFi-GAN ağırlıkları yayımlanmış tam ses dönüşüm hattıdır. Dönüştürme aşaması, kullanıcının sağlaması gereken hedef konuşmacı referans sesi üzerinde parametrik olmayan kNN regresyonudur. Komşular öğrenilmiş ağ ağırlıkları değildir."
    }
  },
  {
    "id": "p5-beauty-small",
    "name": "P5 Beauty Small",
    "cardSourceId": "ow-p5-beauty-small",
    "weightsSourceId": "ow-p5-beauty-small-weights",
    "licenseSourceId": "ow-p5-beauty-small",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "artifact",
    "context": {
      "en": "T5-based recommender for the Amazon Beauty user/item vocabulary. The authors link this Hugging Face distribution; custom P5 code, original prompts and ID preprocessing are required. Transfer to another catalogue needs adaptation. No bit-for-bit comparison with the original Drive file or model execution was performed.",
      "tr": "Amazon Beauty kullanıcı/ürün sözlüğü için T5 tabanlı önerici. Yazarlar bu Hugging Face dağıtımına bağlantı verir; özel P5 kodu, özgün istemler ve kimlik ön işlemesi gerekir. Başka kataloğa aktarım uyarlama ister. Özgün Drive dosyasıyla bit düzeyinde karşılaştırma veya model çalıştırması yapılmadı."
    }
  },
  {
    "id": "scan-cifar10",
    "name": "SCAN · CIFAR-10 (SCAN-loss)",
    "cardSourceId": "ow-scan-cifar10",
    "weightsSourceId": "ow-scan-cifar10-weights",
    "licenseSourceId": "ow-scan-license",
    "license": "CC-BY-NC-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Published image-clustering checkpoint with ten CIFAR-10 clusters. Use the SCAN evaluation configuration and preprocessing. This is the SCAN-loss release, not the separate self-labeling checkpoint. The Drive file is publicly downloadable but its identifier is not an immutable content hash.",
      "tr": "On CIFAR-10 kümesi için yayımlanmış görüntü kümeleme modeli. SCAN değerlendirme ayarları ve ön işlemesi gerekir. Bu, ayrı sunulan self-labeling sürümü değil, SCAN-loss sürümüdür. Drive dosyası herkese açık indirilebilir; kimliği değişmez içerik özeti değildir."
    }
  },
  {
    "id": "uva-autoencoder128",
    "name": "UvA CIFAR-10 Autoencoder · 128D",
    "cardSourceId": "ow-uva-saved-models",
    "weightsSourceId": "ow-uva-autoencoder128-weights",
    "licenseSourceId": "ow-uva-model-license",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Convolutional autoencoder with a 128-dimensional bottleneck for normalized 32×32 RGB CIFAR-10 images. Use the tutorial’s PyTorch architecture and encoder; the decoder reconstructs images. A teaching reference, not a generic tabular reducer or a VAE.",
      "tr": "Normalize edilmiş 32×32 RGB CIFAR-10 görüntüleri için 128 boyutlu darboğazı olan evrişimli otoenkoder. Eğitim materyalindeki PyTorch mimarisi ve kodlayıcı kullanılır; çözücü görüntüyü yeniden kurar. Öğretici referanstır; genel tablo boyut indirgeme modeli veya VAE değildir."
    }
  },
  {
    "id": "uva-mnist-flow",
    "name": "UvA MNISTFlow · multiscale",
    "cardSourceId": "ow-uva-saved-models",
    "weightsSourceId": "ow-uva-mnist-flow-weights",
    "licenseSourceId": "ow-uva-model-license",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Pretrained multiscale normalizing flow for 28×28 grayscale MNIST. The tutorial exposes log likelihood and bits per dimension, with dequantization and importance sampling for discrete pixels. Its architecture and preprocessing must match the checkpoint.",
      "tr": "28×28 gri tonlu MNIST için önceden eğitilmiş çok ölçekli normalizing flow. Eğitim materyali, ayrık pikseller için dequantization ve importance sampling kullanarak log olabilirlik ve boyut başına bit hesaplar. Mimari ve ön işleme ağırlıklarla eşleşmelidir."
    }
  },
  {
    "id": "autocpd-hasc",
    "name": "AutoCPD · HASC Demo (0.1.5)",
    "cardSourceId": "ow-autocpd-hasc",
    "weightsSourceId": "ow-autocpd-hasc-weights",
    "licenseSourceId": "ow-autocpd-license",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "parameterKind": "pipeline",
    "licenseScope": "repository",
    "context": {
      "en": "The wheel contains the trained 21-residual-block TensorFlow model plus Demo/label_dict.npy. Three accelerometer axes and their squares form six channels of 700-sample windows. Min–max scaling, label decoding, smoothing and peak selection are required to turn predictions into change points.",
      "tr": "Wheel paketi, eğitilmiş 21 residual bloklu TensorFlow modelini ve Demo/label_dict.npy dosyasını içerir. Üç ivmeölçer ekseni ve kareleri, 700 örneklik pencerelerde altı kanal oluşturur. Tahminleri değişim noktalarına çevirmek için min–max ölçekleme, etiket çözümleme, yumuşatma ve tepe seçimi gerekir."
    }
  },
  {
    "id": "graphany-arxiv",
    "name": "GraphAny · Arxiv",
    "cardSourceId": "ow-graphany-arxiv",
    "weightsSourceId": "ow-graphany-arxiv-weights",
    "licenseSourceId": "ow-graphany-license",
    "license": "MIT",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Published meta-model for node classification across graphs. Inference combines linear graph predictors using learned attention. It still needs the target graph, node features and labeled support nodes; “no finetuning” does not mean label-free inference.",
      "tr": "Graflar arasında düğüm sınıflandırması için yayımlanmış meta-model. Çıkarım, öğrenilmiş dikkat ile doğrusal graf tahminlerini birleştirir. Hedef graf, düğüm özellikleri ve etiketli destek düğümleri yine gerekir; “ince ayarsız” ifadesi etiketsiz çıkarım anlamına gelmez."
    }
  },
  {
    "id": "dgl-gcn-tox21",
    "name": "DGL-LifeSci · GCN canonical Tox21",
    "cardSourceId": "ow-dgl-gcn-tox21",
    "weightsSourceId": "ow-dgl-gcn-tox21-weights",
    "licenseSourceId": "ow-dgl-lifesci-license",
    "license": "Apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Graph-level molecular classifier for 12 Tox21 assay labels. Requires the canonical 74-feature atom encoding and matching graph construction. The GCN readout returns logits; applying it to unrelated graphs or using it as a clinical toxicity verdict is unsupported. Separate weight-specific license terms are not stated.",
      "tr": "12 Tox21 deney etiketi için molekül grafı sınıflandırıcısı. Kanonik 74 özellikli atom kodlaması ve eşleşen graf oluşturma gerekir. GCN okuma katmanı logit üretir; ilgisiz graflarda kullanım veya klinik toksisite kararı desteklenmez. Ağırlıklara özel ayrı lisans koşulları belirtilmez."
    }
  },
  {
    "id": "hrm-sudoku",
    "name": "HRM · Sudoku Extreme 9×9",
    "cardSourceId": "ow-hrm-sudoku",
    "weightsSourceId": "ow-hrm-sudoku-weights",
    "licenseSourceId": "ow-hrm-repository-license",
    "license": "Apache-2.0 (code repository)",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "context": {
      "en": "Author-released Sudoku checkpoint with a two-level recurrent reasoning architecture. It uses the author’s Sudoku representation and inference configuration. The Hugging Face release supplies weights but no separate license declaration; the linked Apache-2.0 terms are for the code repository.",
      "tr": "İki düzeyli tekrarlayan akıl yürütme mimarisine sahip, yazar tarafından yayımlanmış Sudoku modeli. Yazarın Sudoku gösterimi ve çıkarım ayarları kullanılır. Hugging Face sürümü ağırlıkları sunar ancak ayrı lisans beyanı içermez; bağlantıdaki Apache-2.0 koşulları kod deposuna aittir."
    }
  },
  {
    "id": "goose-blocksworld",
    "name": "GOOSE · IPC23LT Blocks World",
    "cardSourceId": "ow-goose-blocksworld",
    "weightsSourceId": "ow-goose-blocksworld-weights",
    "licenseSourceId": "ow-goose-license",
    "license": "MIT (GOOSE; planner dependencies have separate terms)",
    "access": "public",
    "role": "reference",
    "parameterKind": "statistical",
    "licenseScope": "repository",
    "context": {
      "en": "A published learned heuristic plus symbolic PDDL search. The checked .model archive contains 12 numerical weights, feature/domain metadata and rank-SVM options. Use matching GOOSE/WLPlan 2.0.0 formats and the Blocks World domain. These are classical learned coefficients, not neural-network weights.",
      "tr": "Yayımlanmış öğrenilmiş sezgisel model ile sembolik PDDL aramasının birleşimi. Kontrol edilen .model arşivi 12 sayısal katsayı, özellik/alan üst verileri ve rank-SVM seçenekleri içerir. GOOSE/WLPlan 2.0.0 biçimleri ve Blocks World alanı eşleşmelidir. Bunlar klasik öğrenilmiş katsayılardır, sinir ağı ağırlıkları değildir."
    }
  },
  {
    "id": "hloc-superglue",
    "name": "hloc · SuperPoint + SuperGlue outdoor",
    "cardSourceId": "ow-hloc-superglue",
    "weightsSourceId": "ow-hloc-superglue-weights",
    "licenseSourceId": "ow-superglue-license",
    "license": "SuperGlue noncommercial research license; hloc Apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "pipeline",
    "licenseScope": "artifact",
    "context": {
      "en": "Released superpoint_v1.pth and superglue_outdoor.pth supply local features and matching. hloc combines them with reference images, a 3D SfM map, camera intrinsics, image pairs and geometric pose estimation. Robot pose additionally needs a calibrated camera-to-robot transform and a suitable map frame.",
      "tr": "Yayımlanan superpoint_v1.pth ve superglue_outdoor.pth yerel özellik ve eşleştirme sağlar. hloc bunları referans görüntüler, 3B SfM haritası, kamera iç parametreleri, görüntü çiftleri ve geometrik poz kestirimiyle birleştirir. Robot pozu ayrıca kalibre edilmiş kamera–robot dönüşümü ve uygun harita koordinat çerçevesi gerektirir."
    }
  },
  {
    "id": "mpinets-hybrid",
    "name": "MPiNets · Hybrid Expert",
    "cardSourceId": "ow-mpinets-hybrid",
    "weightsSourceId": "ow-mpinets-hybrid-weights",
    "licenseSourceId": "ow-mpinets-zenodo",
    "license": "CC-BY-4.0 (Zenodo artifact)",
    "access": "public",
    "role": "reference",
    "parameterKind": "pipeline",
    "licenseScope": "artifact",
    "context": {
      "en": "Released motion policy for the Franka arm. Its rollout uses the current joint configuration, target pose and point-cloud obstacle representation. Requires matching robot geometry and inference code; generated trajectories need collision and kinematic validation. The Zenodo artifact is CC-BY-4.0 although the code repository is MIT.",
      "tr": "Franka kolu için yayımlanmış hareket politikası. Yörünge üretimi, mevcut eklem durumu, hedef poz ve engel nokta bulutunu kullanır. Eşleşen robot geometrisi ve çıkarım kodu gerekir; üretilen yörüngeler çarpışma ve kinematik doğrulama ister. Kod deposu MIT olsa da Zenodo dosyası CC-BY-4.0 ile sunulur."
    }
  },
  {
    "id": "acestep-v15-turbo-continuous",
    "name": "acestep-v15-turbo-continuous",
    "cardSourceId": "ow-acestep-v15-turbo-continuous",
    "weightsSourceId": "ow-acestep-v15-turbo-continuous-weights",
    "licenseSourceId": "ow-acestep-v15-turbo-continuous-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-to-audio",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-to-audio; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-to-audio; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "acestep-v15-turbo-shift1",
    "name": "acestep-v15-turbo-shift1",
    "cardSourceId": "ow-acestep-v15-turbo-shift1",
    "weightsSourceId": "ow-acestep-v15-turbo-shift1-weights",
    "licenseSourceId": "ow-acestep-v15-turbo-shift1-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-to-audio",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-to-audio; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-to-audio; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "acestep-captioner",
    "name": "acestep-captioner",
    "cardSourceId": "ow-acestep-captioner",
    "weightsSourceId": "ow-acestep-captioner-weights",
    "licenseSourceId": "ow-acestep-captioner-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-to-audio",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-to-audio; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-to-audio; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "acestep-transcriber",
    "name": "acestep-transcriber",
    "cardSourceId": "ow-acestep-transcriber",
    "weightsSourceId": "ow-acestep-transcriber-weights",
    "licenseSourceId": "ow-acestep-transcriber-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "audio-text-to-text",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag audio-text-to-text; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi audio-text-to-text; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "acestep-v15-turbo-shift3",
    "name": "acestep-v15-turbo-shift3",
    "cardSourceId": "ow-acestep-v15-turbo-shift3",
    "weightsSourceId": "ow-acestep-v15-turbo-shift3-weights",
    "licenseSourceId": "ow-acestep-v15-turbo-shift3-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-to-audio",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-to-audio; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-to-audio; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "facodec",
    "name": "FAcodec",
    "cardSourceId": "ow-facodec",
    "weightsSourceId": "ow-facodec-weights",
    "licenseSourceId": "ow-facodec-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "audio-to-audio",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag audio-to-audio; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi audio-to-audio; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "wan-dancer-14b",
    "name": "Wan-Dancer-14B",
    "cardSourceId": "ow-wan-dancer-14b",
    "weightsSourceId": "ow-wan-dancer-14b-weights",
    "licenseSourceId": "ow-wan-dancer-14b-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "image-to-video",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag image-to-video; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi image-to-video; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "alodlm-8b",
    "name": "ALoDLM-8B",
    "cardSourceId": "ow-alodlm-8b",
    "weightsSourceId": "ow-alodlm-8b-weights",
    "licenseSourceId": "ow-alodlm-8b-license",
    "license": "cc-by-nc-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-generation",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-generation; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-generation; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "chronos-t5-large",
    "name": "chronos-t5-large",
    "cardSourceId": "ow-chronos-t5-large",
    "weightsSourceId": "ow-chronos-t5-large-weights",
    "licenseSourceId": "ow-chronos-t5-large-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "time-series-forecasting",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag time-series-forecasting; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi time-series-forecasting; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "flux-3-image-klein",
    "name": "flux-3-image-klein",
    "cardSourceId": "ow-flux-3-image-klein",
    "weightsSourceId": "ow-flux-3-image-klein-weights",
    "licenseSourceId": "ow-flux-3-image-klein-license",
    "license": "other",
    "access": "gated",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "image-to-image",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag image-to-image; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi image-to-image; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "da3-giant-1-1",
    "name": "DA3-GIANT-1.1",
    "cardSourceId": "ow-da3-giant-1-1",
    "weightsSourceId": "ow-da3-giant-1-1-weights",
    "licenseSourceId": "ow-da3-giant-1-1-license",
    "license": "cc-by-nc-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "depth-estimation",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag depth-estimation; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi depth-estimation; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "boxer",
    "name": "boxer",
    "cardSourceId": "ow-boxer",
    "weightsSourceId": "ow-boxer-weights",
    "licenseSourceId": "ow-boxer-license",
    "license": "cc-by-nc-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "object-detection",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag object-detection; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi object-detection; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "glide",
    "name": "GLiDE",
    "cardSourceId": "ow-glide",
    "weightsSourceId": "ow-glide-weights",
    "licenseSourceId": "ow-glide-license",
    "license": "other",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "image-text-to-text",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag image-text-to-text; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi image-text-to-text; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "fastino-nemotron-3-5-lightning-finance",
    "name": "Fastino-Nemotron-3.5-Lightning-Finance",
    "cardSourceId": "ow-fastino-nemotron-3-5-lightning-finance",
    "weightsSourceId": "ow-fastino-nemotron-3-5-lightning-finance-weights",
    "licenseSourceId": "ow-fastino-nemotron-3-5-lightning-finance-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-generation",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-generation; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-generation; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "embeddinggemma-2",
    "name": "embeddinggemma-2",
    "cardSourceId": "ow-embeddinggemma-2",
    "weightsSourceId": "ow-embeddinggemma-2-weights",
    "licenseSourceId": "ow-embeddinggemma-2-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "feature-extraction",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag feature-extraction; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi feature-extraction; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "timesfm-3-0-pytorch",
    "name": "timesfm-3.0-pytorch",
    "cardSourceId": "ow-timesfm-3-0-pytorch",
    "weightsSourceId": "ow-timesfm-3-0-pytorch-weights",
    "licenseSourceId": "ow-timesfm-3-0-pytorch-license",
    "license": "other",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "time-series-forecasting",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag time-series-forecasting; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi time-series-forecasting; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "tipsv1-g14",
    "name": "tipsv1-g14",
    "cardSourceId": "ow-tipsv1-g14",
    "weightsSourceId": "ow-tipsv1-g14-weights",
    "licenseSourceId": "ow-tipsv1-g14-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "zero-shot-image-classification",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag zero-shot-image-classification; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi zero-shot-image-classification; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "tipsv1-so400m14",
    "name": "tipsv1-so400m14",
    "cardSourceId": "ow-tipsv1-so400m14",
    "weightsSourceId": "ow-tipsv1-so400m14-weights",
    "licenseSourceId": "ow-tipsv1-so400m14-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "zero-shot-image-classification",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag zero-shot-image-classification; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi zero-shot-image-classification; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "tipsv2-so400m14-dpt",
    "name": "tipsv2-so400m14-dpt",
    "cardSourceId": "ow-tipsv2-so400m14-dpt",
    "weightsSourceId": "ow-tipsv2-so400m14-dpt-weights",
    "licenseSourceId": "ow-tipsv2-so400m14-dpt-license",
    "license": "apache-2.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "depth-estimation",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag depth-estimation; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi depth-estimation; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "tabfm-1-1-0-pytorch",
    "name": "tabfm-1.1.0-pytorch",
    "cardSourceId": "ow-tabfm-1-1-0-pytorch",
    "weightsSourceId": "ow-tabfm-1-1-0-pytorch-weights",
    "licenseSourceId": "ow-tabfm-1-1-0-pytorch-license",
    "license": "other",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "tabular-classification",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag tabular-classification; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi tabular-classification; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "wespeaker-voxceleb-resnet34-lm",
    "name": "wespeaker-voxceleb-resnet34-LM",
    "cardSourceId": "ow-wespeaker-voxceleb-resnet34-lm",
    "weightsSourceId": "ow-wespeaker-voxceleb-resnet34-lm-weights",
    "licenseSourceId": "ow-wespeaker-voxceleb-resnet34-lm-license",
    "license": "cc-by-4.0",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag not stated; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi belirtilmemiş; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "glm-ocr",
    "name": "GLM-OCR",
    "cardSourceId": "ow-glm-ocr",
    "weightsSourceId": "ow-glm-ocr-weights",
    "licenseSourceId": "ow-glm-ocr-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "image-to-text",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag image-to-text; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi image-to-text; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "scail-2",
    "name": "SCAIL-2",
    "cardSourceId": "ow-scail-2",
    "weightsSourceId": "ow-scail-2-weights",
    "licenseSourceId": "ow-scail-2-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "image-to-video",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag image-to-video; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi image-to-video; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "glm-asr-nano-2512",
    "name": "GLM-ASR-Nano-2512",
    "cardSourceId": "ow-glm-asr-nano-2512",
    "weightsSourceId": "ow-glm-asr-nano-2512-weights",
    "licenseSourceId": "ow-glm-asr-nano-2512-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "automatic-speech-recognition",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag automatic-speech-recognition; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi automatic-speech-recognition; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "glm-image",
    "name": "GLM-Image",
    "cardSourceId": "ow-glm-image",
    "weightsSourceId": "ow-glm-image-weights",
    "licenseSourceId": "ow-glm-image-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-to-image",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-to-image; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-to-image; kontrol noktası elle incelenmedi."
    }
  },
  {
    "id": "glm-tts",
    "name": "GLM-TTS",
    "cardSourceId": "ow-glm-tts",
    "weightsSourceId": "ow-glm-tts-weights",
    "licenseSourceId": "ow-glm-tts-license",
    "license": "mit",
    "access": "public",
    "role": "reference",
    "parameterKind": "weights",
    "licenseScope": "repository",
    "pipelineTag": "text-to-speech",
    "discovery": "auto",
    "context": {
      "en": "Discovered automatically on 2026-10-23 in the publisher's Hugging Face repository. Pipeline tag text-to-speech; the checkpoint was not reviewed by hand.",
      "tr": "2026-10-23 tarihinde yayıncının Hugging Face deposunda otomatik keşfedildi. İşlem hattı etiketi text-to-speech; kontrol noktası elle incelenmedi."
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
      },
      {
        "modelId": "fasttext-lid",
        "evidence": "documented",
        "rationale": {
          "en": "Predicts the language label of input text. This edge is limited to language identification, not arbitrary text categories.",
          "tr": "Girdi metninin dil etiketini tahmin eder. Bu ilişki dil tanımayla sınırlıdır; keyfi metin kategorilerini kapsamaz."
        },
        "sourceIds": [
          "ow-fasttext-lid"
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
      },
      {
        "modelId": "mamba2",
        "evidence": "documented",
        "rationale": {
          "en": "The author’s generation script explicitly supports state-spaces/mamba2-2.7b for causal continuation.",
          "tr": "Yazarın üretim betiği nedensel devam için state-spaces/mamba2-2.7b modelini açıkça destekler."
        },
        "sourceIds": [
          "ow-mamba2",
          "ow-mamba2-method"
        ]
      },
      {
        "modelId": "alodlm-8b",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-generation, which maps to Text Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-generation işlem hattı etiketini bildiriyor; bu etiket Text Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-alodlm-8b"
        ]
      },
      {
        "modelId": "glide",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag image-text-to-text, which maps to Text Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu image-text-to-text işlem hattı etiketini bildiriyor; bu etiket Text Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-glide"
        ]
      },
      {
        "modelId": "fastino-nemotron-3-5-lightning-finance",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-generation, which maps to Text Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-generation işlem hattı etiketini bildiriyor; bu etiket Text Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-fastino-nemotron-3-5-lightning-finance"
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
      },
      {
        "modelId": "olmo2-dpo",
        "evidence": "documented",
        "rationale": {
          "en": "The DPO-stage card documents post-training for chat. This does not borrow the final RLVR model’s benchmark scores.",
          "tr": "DPO aşaması kartı sohbet için son eğitimi belgeler. Bu kayıt son RLVR modelinin karşılaştırma puanlarını kullanmaz."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "evidence": "documented",
        "rationale": {
          "en": "The card provides conversational inference for the instruction-tuned checkpoint and its eight supported languages.",
          "tr": "Kart, talimatla ayarlanmış ağırlıklar ve desteklenen sekiz dil için sohbet çıkarımı örneği sağlar."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
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
      },
      {
        "modelId": "glove-factors",
        "evidence": "adaptation",
        "rationale": {
          "en": "Published word vectors support cosine comparison at word level. Sentence-level similarity needs an added pooling or trained sentence model and separate validation.",
          "tr": "Yayımlanmış kelime vektörleri kelime düzeyinde kosinüs karşılaştırmasını destekler. Cümle benzerliği ek havuzlama veya eğitilmiş cümle modeli ve ayrı doğrulama gerektirir."
        },
        "sourceIds": [
          "ow-glove-factors",
          "ow-glove-method",
          "ow-glove-paper"
        ]
      },
      {
        "modelId": "embeddinggemma-2",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag feature-extraction, which maps to Semantic Textual Similarity. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu feature-extraction işlem hattı etiketini bildiriyor; bu etiket Semantic Textual Similarity görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-embeddinggemma-2"
        ]
      },
      {
        "modelId": "tipsv1-g14",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag zero-shot-image-classification, which maps to Semantic Textual Similarity. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu zero-shot-image-classification işlem hattı etiketini bildiriyor; bu etiket Semantic Textual Similarity görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-tipsv1-g14"
        ]
      },
      {
        "modelId": "tipsv1-so400m14",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag zero-shot-image-classification, which maps to Semantic Textual Similarity. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu zero-shot-image-classification işlem hattı etiketini bildiriyor; bu etiket Semantic Textual Similarity görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-tipsv1-so400m14"
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
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "p5-beauty-small",
        "evidence": "documented",
        "rationale": {
          "en": "The author notebook generates 20 ranked candidate item IDs and evaluates top-5/top-10 sequential recommendation. The pinned distribution config includes the sequential task.",
          "tr": "Yazarın not defteri sıralı 20 aday ürün kimliği üretir ve sıralı öneride top-5/top-10 değerlendirmesi yapar. Sabitlenmiş dağıtım ayarları sequential görevini içerir."
        },
        "sourceIds": [
          "ow-p5-beauty-small",
          "ow-p5-author-release",
          "ow-p5-beauty-evaluation",
          "ow-p5-beauty-config"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-23",
      "outcome": "specialist",
      "summary": {
        "en": "A published recommender checkpoint is available for Amazon Beauty. It predicts identifiers from that catalogue, not arbitrary new products. Preserve the author’s user/item mapping, prompts, candidate validation and ranking protocol. New items or users outside the trained representation require adaptation; this release is a reproducible historical reference, not a current universal leader.",
        "tr": "Amazon Beauty için yayımlanmış önerici ağırlıkları var. Bu model, eğitim kataloğundaki kimlikleri tahmin eder; herhangi bir yeni ürün kataloğunu doğrudan desteklemez. Yazarın kullanıcı/ürün eşlemesi, istemleri, aday doğrulaması ve sıralama protokolü korunmalıdır. Eğitimdeki gösterim dışında kalan ürün veya kullanıcılar uyarlama gerektirir; bu sürüm tarihsel bir referanstır, güncel evrensel lider değildir."
      },
      "sourceIds": [
        "ow-p5-beauty-small",
        "ow-p5-author-release",
        "ow-p5-beauty-evaluation",
        "ow-p5-beauty-config"
      ]
    }
  },
  {
    "id": "rating-prediction",
    "name": "Rating Prediction",
    "family": "Retrieval & Recommendation",
    "definition": "User–item pair → predicted rating",
    "definitionSourceId": "S21",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "p5-beauty-small",
        "evidence": "documented",
        "rationale": {
          "en": "The same Beauty Small checkpoint has a rating training objective. The author notebook decodes numeric ratings and computes RMSE/MAE; task support is documented without importing its reported scores.",
          "tr": "Aynı Beauty Small sürümü rating eğitim hedefini içerir. Yazarın not defteri sayısal puanları çözümler ve RMSE/MAE hesaplar; destek belgelenir, bildirilen puanlar buraya aktarılmaz."
        },
        "sourceIds": [
          "ow-p5-beauty-small",
          "ow-p5-author-release",
          "ow-p5-beauty-evaluation",
          "ow-p5-beauty-config"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-23",
      "outcome": "specialist",
      "summary": {
        "en": "This is an explicit rating-prediction checkpoint, rather than a generic language model asked to guess a score. Ratings depend on the Amazon Beauty user/item IDs, prompt and numerical postprocessing. A different rating scale or commercial catalogue needs new data and validation; generated scores are not calibrated probabilities.",
        "tr": "Bu, genel bir dil modelinden puan tahmini istemenin ötesinde, puan tahmini hedefiyle eğitilmiş bir sürümdür. Puanlar Amazon Beauty kullanıcı/ürün kimliklerine, isteme ve sayısal son işlemeye bağlıdır. Farklı puan ölçeği veya ürün kataloğu yeni veri ve doğrulama gerektirir; üretilen puanlar kalibre edilmiş olasılıklar değildir."
      },
      "sourceIds": [
        "ow-p5-beauty-small",
        "ow-p5-author-release",
        "ow-p5-beauty-evaluation",
        "ow-p5-beauty-config"
      ]
    }
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
      },
      {
        "modelId": "mlp-mixer",
        "evidence": "documented",
        "rationale": {
          "en": "The exact checkpoint includes the ImageNet-1k classifier head and a published classification example.",
          "tr": "Tam ağırlık sürümü ImageNet-1k sınıflandırıcı başlığını ve yayımlanmış sınıflandırma örneğini içerir."
        },
        "sourceIds": [
          "ow-mlp-mixer"
        ]
      },
      {
        "modelId": "resnet50-ssl",
        "evidence": "evaluated",
        "rationale": {
          "en": "The SSL ResNet-50 row reports ImageNet classification evaluation; the timm card supplies the matching inference recipe.",
          "tr": "SSL ResNet-50 satırı ImageNet sınıflandırma değerlendirmesi verir; timm kartı eşleşen çıkarım tarifini sağlar."
        },
        "sourceIds": [
          "ow-resnet50-ssl",
          "ow-ssl-method"
        ]
      },
      {
        "modelId": "jem",
        "evidence": "documented",
        "rationale": {
          "en": "The repository identifies its pretrained CIFAR-10 classifier and provides the test_clf evaluation command for it.",
          "tr": "Depo, ön eğitimli CIFAR-10 sınıflandırıcısını tanımlar ve ona ait test_clf değerlendirme komutunu verir."
        },
        "sourceIds": [
          "ow-jem"
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
      },
      {
        "modelId": "boxer",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag object-detection, which maps to Object Detection. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu object-detection işlem hattı etiketini bildiriyor; bu etiket Object Detection görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-boxer"
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
      },
      {
        "modelId": "da3-giant-1-1",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag depth-estimation, which maps to Depth Estimation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu depth-estimation işlem hattı etiketini bildiriyor; bu etiket Depth Estimation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-da3-giant-1-1"
        ]
      },
      {
        "modelId": "tipsv2-so400m14-dpt",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag depth-estimation, which maps to Depth Estimation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu depth-estimation işlem hattı etiketini bildiriyor; bu etiket Depth Estimation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-tipsv2-so400m14-dpt"
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
      },
      {
        "modelId": "dlib-five",
        "evidence": "documented",
        "rationale": {
          "en": "Given an image and a detected face box, the released shape predictor returns five facial landmarks.",
          "tr": "Görüntü ve tespit edilmiş yüz kutusu verildiğinde yayımlanmış şekil tahmincisi beş yüz noktasını döndürür."
        },
        "sourceIds": [
          "ow-dlib-five",
          "ow-dlib-five-training"
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
      },
      {
        "modelId": "glm-ocr",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag image-to-text, which maps to Image Captioning. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu image-to-text işlem hattı etiketini bildiriyor; bu etiket Image Captioning görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-glm-ocr"
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
      },
      {
        "modelId": "glm-image",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-to-image, which maps to Text-to-Image Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-to-image işlem hattı etiketini bildiriyor; bu etiket Text-to-Image Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-glm-image"
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
      },
      {
        "modelId": "glow",
        "evidence": "documented",
        "rationale": {
          "en": "The released demo encodes an aligned face and decodes it after attribute-conditioned latent edits. Requires the separately linked manipulation vectors and legacy TensorFlow setup.",
          "tr": "Yayımlanmış demo, hizalanmış yüzü kodlar ve niteliğe koşullu gizli uzay değişiminden sonra çözer. Ayrı bağlantı verilen değiştirme vektörleri ve eski TensorFlow kurulumu gerekir."
        },
        "sourceIds": [
          "ow-glow",
          "ow-glow-download",
          "ow-glow-inference"
        ]
      },
      {
        "modelId": "flux-3-image-klein",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag image-to-image, which maps to Image-to-Image Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu image-to-image işlem hattı etiketini bildiriyor; bu etiket Image-to-Image Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-flux-3-image-klein"
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
      },
      {
        "modelId": "wan-dancer-14b",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag image-to-video, which maps to Image-to-Video Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu image-to-video işlem hattı etiketini bildiriyor; bu etiket Image-to-Video Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-wan-dancer-14b"
        ]
      },
      {
        "modelId": "scail-2",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag image-to-video, which maps to Image-to-Video Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu image-to-video işlem hattı etiketini bildiriyor; bu etiket Image-to-Video Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-scail-2"
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
      },
      {
        "modelId": "pocketsphinx",
        "evidence": "documented",
        "rationale": {
          "en": "The default English acoustic model, dictionary and language model are used by the documented decoder to transcribe mono PCM speech.",
          "tr": "Varsayılan İngilizce akustik model, sözlük ve dil modeli; belgelenmiş kod çözücüyle mono PCM konuşmayı metne dönüştürür."
        },
        "sourceIds": [
          "ow-pocketsphinx",
          "ow-pocketsphinx-usage"
        ]
      },
      {
        "modelId": "glm-asr-nano-2512",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag automatic-speech-recognition, which maps to Automatic Speech Recognition. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu automatic-speech-recognition işlem hattı etiketini bildiriyor; bu etiket Automatic Speech Recognition görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-glm-asr-nano-2512"
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
      },
      {
        "modelId": "wespeaker-voxceleb-resnet34-lm",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag speaker-identification, which maps to Speaker Identification. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu speaker-identification işlem hattı etiketini bildiriyor; bu etiket Speaker Identification görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-wespeaker-voxceleb-resnet34-lm"
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
      },
      {
        "modelId": "glm-tts",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-to-speech, which maps to Text-to-Speech. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-to-speech işlem hattı etiketini bildiriyor; bu etiket Text-to-Speech görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-glm-tts"
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
      },
      {
        "modelId": "facodec",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag audio-to-audio, which maps to Speech Enhancement. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu audio-to-audio işlem hattı etiketini bildiriyor; bu etiket Speech Enhancement görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-facodec"
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
      },
      {
        "modelId": "knnvc",
        "evidence": "evaluated",
        "rationale": {
          "en": "The complete documented pipeline converts source speech to the voice in target reference recordings using nearest-neighbor matching and the prematched vocoder.",
          "tr": "Belgelenmiş tam hat, en yakın komşu eşleştirmesi ve önceden eşleştirilmiş vokoderle kaynak konuşmayı hedef referans kayıtlardaki sese dönüştürür."
        },
        "sourceIds": [
          "ow-knnvc",
          "ow-knnvc-loader",
          "ow-knnvc-paper"
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
      },
      {
        "modelId": "acestep-v15-turbo-continuous",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-to-audio, which maps to Text-to-Audio Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-to-audio işlem hattı etiketini bildiriyor; bu etiket Text-to-Audio Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-acestep-v15-turbo-continuous"
        ]
      },
      {
        "modelId": "acestep-v15-turbo-shift1",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-to-audio, which maps to Text-to-Audio Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-to-audio işlem hattı etiketini bildiriyor; bu etiket Text-to-Audio Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-acestep-v15-turbo-shift1"
        ]
      },
      {
        "modelId": "acestep-captioner",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-to-audio, which maps to Text-to-Audio Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-to-audio işlem hattı etiketini bildiriyor; bu etiket Text-to-Audio Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-acestep-captioner"
        ]
      },
      {
        "modelId": "acestep-transcriber",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag audio-text-to-text, which maps to Text-to-Audio Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu audio-text-to-text işlem hattı etiketini bildiriyor; bu etiket Text-to-Audio Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-acestep-transcriber"
        ]
      },
      {
        "modelId": "acestep-v15-turbo-shift3",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag text-to-audio, which maps to Text-to-Audio Generation. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu text-to-audio işlem hattı etiketini bildiriyor; bu etiket Text-to-Audio Generation görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-acestep-v15-turbo-shift3"
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
      },
      {
        "modelId": "tabfm-1-1-0-pytorch",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag tabular-classification, which maps to Classification. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu tabular-classification işlem hattı etiketini bildiriyor; bu etiket Classification görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-tabfm-1-1-0-pytorch"
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
      },
      {
        "modelId": "brisque",
        "evidence": "documented",
        "rationale": {
          "en": "Maps the prescribed 36 scaled image-quality features to a numerical quality score. The model and range files must be used together.",
          "tr": "Tanımlanmış 36 ölçekli görüntü kalitesi özelliğini sayısal kalite skoruna dönüştürür. Model ve aralık dosyaları birlikte kullanılmalıdır."
        },
        "sourceIds": [
          "ow-brisque",
          "ow-brisque-parameters",
          "ow-brisque-docs"
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
      },
      {
        "modelId": "chronos-t5-large",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag time-series-forecasting, which maps to Time-Series Forecasting. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu time-series-forecasting işlem hattı etiketini bildiriyor; bu etiket Time-Series Forecasting görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-chronos-t5-large"
        ]
      },
      {
        "modelId": "timesfm-3-0-pytorch",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher's repository declares the pipeline tag time-series-forecasting, which maps to Time-Series Forecasting. Automatic discovery from the release metadata.",
          "tr": "Yayıncının deposu time-series-forecasting işlem hattı etiketini bildiriyor; bu etiket Time-Series Forecasting görevine eşleniyor. Sürüm verilerinden otomatik keşif."
        },
        "sourceIds": [
          "ow-timesfm-3-0-pytorch"
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
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "scan-cifar10",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher releases the fitted clustering network, not just an embedding encoder. Its inference assigns images to the ten learned CIFAR-10 clusters.",
          "tr": "Yayıncı yalnızca gömme kodlayıcısını değil, eğitilmiş kümeleme ağını yayımlar. Çıkarım, görüntüleri öğrenilen on CIFAR-10 kümesine atar."
        },
        "sourceIds": [
          "ow-scan-cifar10",
          "ow-scan-cifar10-weights",
          "ow-scan-license"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "specialist",
      "summary": {
        "en": "A real trained clustering model is available. Its cluster identities and number are fixed by the CIFAR-10 experiment; they are not reusable semantic labels for arbitrary data. For a new dataset or cluster count, fit the clustering procedure again. Generic k-means implementations alone would not constitute released trained weights.",
        "tr": "Gerçek bir eğitilmiş kümeleme modeli mevcut. Küme kimlikleri ve sayısı CIFAR-10 deneyine bağlıdır; herhangi bir veri için yeniden kullanılabilir anlamsal etiketler değildir. Yeni veri kümesi veya küme sayısı için kümeleme süreci yeniden eğitilir. Yalnızca genel k-means uygulaması sunmak, yayımlanmış eğitilmiş ağırlık sayılmaz."
      },
      "sourceIds": [
        "ow-scan-cifar10",
        "ow-scan-cifar10-weights",
        "ow-scan-license"
      ]
    }
  },
  {
    "id": "dimensionality-reduction",
    "name": "Dimensionality Reduction",
    "family": "Data & Time Series",
    "definition": "Features → lower-dimensional representation",
    "definitionSourceId": "S02",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "uva-autoencoder128",
        "evidence": "documented",
        "rationale": {
          "en": "The released 128D encoder maps each 3×32×32 image (3,072 values) to a learned 128-value latent vector. Reconstruction supplies the training objective.",
          "tr": "Yayımlanan 128 boyutlu kodlayıcı, her 3×32×32 görüntüyü (3.072 değer) öğrenilmiş 128 değerli gizil vektöre dönüştürür. Eğitim hedefi yeniden oluşturmadır."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-autoencoder-method",
          "ow-uva-autoencoder128-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "specialist",
      "summary": {
        "en": "A pretrained nonlinear dimensionality reducer is available for CIFAR-10 images. Its input layout, normalization and latent dimension are fixed; it does not reduce arbitrary spreadsheets or embeddings without retraining. PCA/UMAP implementations require fitting to the target distribution and are not themselves pretrained checkpoints.",
        "tr": "CIFAR-10 görüntüleri için önceden eğitilmiş doğrusal olmayan boyut indirgeme modeli mevcut. Girdi düzeni, normalizasyonu ve gizil boyutu sabittir; yeniden eğitim olmadan herhangi bir tabloyu veya gömmeyi indirgeyemez. PCA/UMAP uygulamalarının hedef dağılıma uydurulması gerekir; uygulamanın kendisi hazır ağırlık değildir."
      },
      "sourceIds": [
        "ow-uva-saved-models",
        "ow-uva-autoencoder-method",
        "ow-uva-autoencoder128-weights"
      ]
    }
  },
  {
    "id": "density-estimation",
    "name": "Density Estimation",
    "family": "Data & Time Series",
    "definition": "Observations → probability density",
    "definitionSourceId": "S02",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "uva-mnist-flow",
        "evidence": "documented",
        "rationale": {
          "en": "ImageFlow._get_likelihood combines the latent density and log-determinant Jacobian. The released multiscale checkpoint therefore supports likelihood evaluation, beyond image sampling alone.",
          "tr": "ImageFlow._get_likelihood, gizil yoğunluğu ve Jacobian log-determinantını birleştirir. Yayımlanan çok ölçekli sürüm, yalnızca görüntü örneklemenin ötesinde olabilirlik hesabı sağlar."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-flow-method",
          "ow-uva-mnist-flow-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "specialist",
      "summary": {
        "en": "A density-estimation checkpoint is available with an explicit likelihood implementation. It models the MNIST image distribution; discrete-image likelihood is estimated using the tutorial’s dequantization and sampling procedure. This does not establish a density model for arbitrary tabular data or calibrated anomaly detection. The earlier Glow demo entry remains excluded from this task because its exported demo does not expose the full likelihood path.",
        "tr": "Açık olabilirlik uygulamasıyla bir yoğunluk kestirim modeli mevcut. MNIST görüntü dağılımını modeller; ayrık görüntü olabilirliği, eğitim materyalindeki dequantization ve örnekleme yordamıyla tahmin edilir. Bu, herhangi bir tablo verisinin yoğunluğunu veya kalibre edilmiş anomali tespitini doğrulamaz. Önceki Glow demo kaydı, dışa aktarılan demosu tam olabilirlik yolunu sunmadığı için bu göreve eklenmedi."
      },
      "sourceIds": [
        "ow-uva-saved-models",
        "ow-uva-flow-method",
        "ow-uva-mnist-flow-weights"
      ]
    }
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
      },
      {
        "modelId": "jem",
        "evidence": "documented",
        "rationale": {
          "en": "The authors demonstrate out-of-distribution detection with the released CIFAR-10 model. Energy scores are not calibrated probabilities and general anomaly detection is not established.",
          "tr": "Yazarlar yayımlanmış CIFAR-10 modeliyle dağılım dışı tespiti gösterir. Enerji skorları kalibre olasılıklar değildir ve genel anomali tespiti kanıtlanmış sayılmaz."
        },
        "sourceIds": [
          "ow-jem",
          "ow-jem-paper"
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
      },
      {
        "modelId": "asia-bn",
        "evidence": "documented",
        "rationale": {
          "en": "A Bayesian-network inference engine can infer missing discrete states conditional on observed ASIA variables. This is a benchmark example with fixed states, not clinical imputation.",
          "tr": "Bayes ağı çıkarım motoru, gözlenen ASIA değişkenlerine koşullu eksik ayrık durumları çıkarabilir. Sabit durumlu karşılaştırma örneğidir; klinik eksik veri tamamlama değildir."
        },
        "sourceIds": [
          "ow-asia-bn",
          "ow-asia-description",
          "ow-bn-prediction"
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
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "autocpd-hasc",
        "evidence": "documented",
        "rationale": {
          "en": "The publisher’s pretrained HASC workflow classifies activity transitions and extracts change-point positions by aggregating sliding-window predictions. The 0.1.5 wheel contains both the SavedModel and its label dictionary.",
          "tr": "Yayıncının önceden eğitilmiş HASC akışı, etkinlik geçişlerini sınıflandırır ve kayan pencere tahminlerini birleştirerek değişim noktalarının konumlarını çıkarır. 0.1.5 wheel paketi SavedModel ile etiket sözlüğünü birlikte içerir."
        },
        "sourceIds": [
          "ow-autocpd-hasc",
          "ow-autocpd-inference",
          "ow-autocpd-package",
          "ow-autocpd-hasc-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "pipeline",
      "summary": {
        "en": "Released weights exist for human-activity transitions in HASC accelerometer data. The author’s complete preprocessing and aggregation pipeline is part of the task support. The Git model directory alone lacks the label dictionary required by the demonstration; the checked 0.1.5 wheel contains it. An arbitrary industrial or financial time series needs domain-specific training and evaluation.",
        "tr": "HASC ivmeölçer verisindeki insan etkinliği geçişleri için yayımlanmış ağırlıklar var. Yazarın tüm ön işleme ve birleştirme akışı, görev desteğinin parçasıdır. Git model klasörü tek başına demonun istediği etiket sözlüğünü içermiyor; kontrol edilen 0.1.5 wheel paketi bu dosyayı içeriyor. Farklı endüstriyel veya finansal zaman serileri alana özel eğitim ve değerlendirme gerektirir."
      },
      "sourceIds": [
        "ow-autocpd-hasc",
        "ow-autocpd-inference",
        "ow-autocpd-package",
        "ow-autocpd-hasc-weights"
      ]
    }
  },
  {
    "id": "node-classification",
    "name": "Node Classification",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph + nodes → node labels",
    "definitionSourceId": "S11",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "graphany-arxiv",
        "evidence": "documented",
        "rationale": {
          "en": "The author provides graph_any_arxiv.pt and inference examples on Cora/Citeseer with zero optimization steps. The data implementation forms label-based linear predictors from target support nodes.",
          "tr": "Yazar graph_any_arxiv.pt dosyasını ve sıfır optimizasyon adımıyla Cora/Citeseer çıkarım örneklerini sunar. Veri uygulaması, hedef destek düğümlerinin etiketleriyle doğrusal tahminciler oluşturur."
        },
        "sourceIds": [
          "ow-graphany-arxiv",
          "ow-graphany-inputs",
          "ow-graphany-arxiv-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "specialist",
      "summary": {
        "en": "An inductive node classifier with released parameters is available. Target labels are inputs to the linear support predictors even when the learned meta-model is frozen. Supply the graph, compatible features and a labeled support split; do not interpret cross-graph transfer as a guarantee for every unseen graph or a completely unlabeled graph.",
        "tr": "Yayımlanmış parametreleri olan bir indüktif düğüm sınıflandırıcısı mevcut. Öğrenilmiş meta-model sabit tutulsa bile hedef etiketler doğrusal destek tahmincilerinin girdisidir. Graf, uygun özellikler ve etiketli destek bölümü sağlanmalıdır; graflar arası aktarım her görülmemiş grafa veya tamamen etiketsiz grafa yönelik başarı garantisi değildir."
      },
      "sourceIds": [
        "ow-graphany-arxiv",
        "ow-graphany-inputs",
        "ow-graphany-arxiv-weights"
      ]
    }
  },
  {
    "id": "link-prediction",
    "name": "Link Prediction",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph + node pairs → link scores",
    "definitionSourceId": "S11",
    "note": {
      "en": "Published WN18RR symbolic rules provide one domain-specific example. A new knowledge graph needs compatible relations or newly learned rules.",
      "tr": "Yayımlanmış WN18RR sembolik kuralları alana özel bir örnek sağlar. Yeni bir bilgi grafı uyumlu ilişkiler veya yeniden öğrenilmiş kurallar gerektirir."
    },
    "recommendations": [
      {
        "modelId": "anyburl-rules",
        "evidence": "documented",
        "rationale": {
          "en": "The supplied ranking example loads this exact rule artifact and WN18RR graph to rank missing heads and tails. No scores from a different ruleset are transferred.",
          "tr": "Sağlanan sıralama örneği, eksik baş ve kuyrukları sıralamak için bu tam kural dosyasını ve WN18RR grafını yükler. Başka kural kümesinin puanları aktarılmaz."
        },
        "sourceIds": [
          "ow-anyburl-rules",
          "ow-anyburl-ranking"
        ]
      }
    ]
  },
  {
    "id": "graph-classification",
    "name": "Graph Classification",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph → graph-level labels",
    "definitionSourceId": "S11",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "dgl-gcn-tox21",
        "evidence": "documented",
        "rationale": {
          "en": "The registry links the exact GCN_canonical_Tox21 checkpoint. GCNPredictor pools node representations into a whole-graph representation and predicts 12 binary assay outcomes.",
          "tr": "Kayıt, tam GCN_canonical_Tox21 ağırlık dosyasına bağlantı verir. GCNPredictor, düğüm gösterimlerini tüm grafın gösteriminde birleştirir ve 12 ikili deney sonucunu tahmin eder."
        },
        "sourceIds": [
          "ow-dgl-gcn-tox21",
          "ow-dgl-gcn-readout",
          "ow-dgl-gcn-tox21-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "specialist",
      "summary": {
        "en": "A graph-classification checkpoint is available for molecular bioassays. This is a whole-graph output, unlike node classification. Its featurizer, molecular representation and 12 labels are fixed; other graph domains or label sets require a new head, training and evaluation. Repository licensing is recorded separately from unspecified checkpoint-specific terms.",
        "tr": "Moleküler biyodeneyler için graf sınıflandırma ağırlıkları mevcut. Düğüm sınıflandırmasından farklı olarak çıktı tüm grafa aittir. Özellik çıkarıcı, moleküler gösterim ve 12 etiket sabittir; başka graf alanları veya etiket kümeleri yeni çıktı katmanı, eğitim ve değerlendirme gerektirir. Depo lisansı, belirtilmemiş ağırlığa özel koşullardan ayrı gösterilir."
      },
      "sourceIds": [
        "ow-dgl-gcn-tox21",
        "ow-dgl-gcn-readout",
        "ow-dgl-gcn-tox21-weights"
      ]
    }
  },
  {
    "id": "graph-regression",
    "name": "Graph Regression",
    "family": "Graphs & Scientific Prediction",
    "definition": "Graph → graph-level numerical targets",
    "definitionSourceId": "S11",
    "note": {
      "en": "A released crystal-graph potential provides a concrete regression example. Target units, graph construction and physical domain must match.",
      "tr": "Yayımlanmış kristal grafı potansiyeli somut regresyon örneği sağlar. Hedef birimleri, graf kurulumu ve fiziksel alan eşleşmelidir."
    },
    "recommendations": [
      {
        "modelId": "chgnet",
        "evidence": "documented",
        "rationale": {
          "en": "Predicts energy per atom from a periodic crystal graph. The scope is crystal-property regression, not arbitrary graph labels.",
          "tr": "Periyodik kristal grafından atom başına enerji tahmin eder. Kapsam kristal özelliği regresyonudur; keyfi graf etiketleri değildir."
        },
        "sourceIds": [
          "ow-chgnet",
          "ow-chgnet-usage"
        ]
      }
    ]
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
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "hrm-sudoku",
        "evidence": "documented",
        "rationale": {
          "en": "Sudoku is a finite constraint-satisfaction problem: predict a 9×9 assignment consistent with clues and row, column and box constraints. The author releases the exact Sudoku Extreme checkpoint.",
          "tr": "Sudoku, sonlu bir kısıt sağlama problemidir: ipuçları ile satır, sütun ve kutu kısıtlarına uyan 9×9 atama tahmin edilir. Yazar, tam Sudoku Extreme ağırlıklarını yayımlar."
        },
        "sourceIds": [
          "ow-hrm-sudoku",
          "ow-hrm-author-release",
          "ow-hrm-sudoku-weights",
          "ow-hrm-repository-license"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "specialist",
      "summary": {
        "en": "A ready checkpoint exists for a specific CSP: 9×9 Sudoku. It is not a complete solver for arbitrary constraints and does not certify unsatisfiability or guarantee a valid solution. Check each prediction against the original clues and Sudoku constraints. Public weight availability is verified; a separate artifact license was not found in the release, so the repository license must not be presented as explicit weight permission.",
        "tr": "Belirli bir kısıt sağlama problemi olan 9×9 Sudoku için hazır ağırlıklar var. Model, herhangi bir kısıt sistemi için eksiksiz çözücü değildir; çözümsüzlük belgesi veya geçerli çözüm garantisi vermez. Her tahmin özgün ipuçları ve Sudoku kısıtlarıyla kontrol edilmelidir. Ağırlıkların herkese açık olduğu doğrulandı; sürümde ayrı dosya lisansı bulunmadığı için depo lisansı, ağırlığa açık kullanım izni olarak sunulmamalıdır."
      },
      "sourceIds": [
        "ow-hrm-sudoku",
        "ow-hrm-author-release",
        "ow-hrm-sudoku-weights",
        "ow-hrm-repository-license"
      ]
    }
  },
  {
    "id": "classical-planning",
    "name": "Classical Planning",
    "family": "Reasoning, Planning & Action",
    "definition": "Initial state + actions + goal → plan",
    "definitionSourceId": "S01",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "goose-blocksworld",
        "evidence": "documented",
        "rationale": {
          "en": "The author’s command loads ipc23lt-blocksworld.model into a PDDL planner to produce an action plan. Learned linear weights rank states; symbolic search and the domain model provide action semantics.",
          "tr": "Yazarın komutu, eylem planı üretmek için ipc23lt-blocksworld.model dosyasını PDDL planlayıcısına yükler. Öğrenilmiş doğrusal katsayılar durumları sıralar; sembolik arama ve alan modeli eylem anlamını sağlar."
        },
        "sourceIds": [
          "ow-goose-blocksworld",
          "ow-goose-pretrained",
          "ow-goose-training-config",
          "ow-goose-blocksworld-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "pipeline",
      "summary": {
        "en": "A released learned model exists inside a complete classical-planning pipeline. The verified archive targets Blocks World; it does not generate valid plans for arbitrary PDDL domains by itself. New domains need corresponding parameters or training, and the planner still requires domain/problem files. This release uses classical graph features and rank-SVM coefficients; calling it a GNN checkpoint would be incorrect.",
        "tr": "Tam klasik planlama akışı içinde yayımlanmış öğrenilmiş bir model mevcut. Doğrulanan arşiv Blocks World alanını hedefler; kendi başına herhangi bir PDDL alanı için geçerli plan üretmez. Yeni alanlar uygun parametre veya eğitim gerektirir; planlayıcı ayrıca alan/problem dosyalarına ihtiyaç duyar. Bu sürüm klasik graf özellikleri ve rank-SVM katsayıları kullanır; GNN ağırlığı olarak sunmak yanlış olur."
      },
      "sourceIds": [
        "ow-goose-blocksworld",
        "ow-goose-pretrained",
        "ow-goose-training-config",
        "ow-goose-blocksworld-weights"
      ]
    }
  },
  {
    "id": "robot-localization",
    "name": "Robot Localization",
    "family": "Reasoning, Planning & Action",
    "definition": "Sensor observations + map → robot pose",
    "definitionSourceId": "S01",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "hloc-superglue",
        "evidence": "documented",
        "rationale": {
          "en": "The documented visual-localization pipeline converts image correspondences into camera pose using calibrated 2D–3D estimation. The open neural checkpoints are feature/matching components, not the entire localization system.",
          "tr": "Belgelenmiş görsel konumlama akışı, kalibre edilmiş 2B–3B kestirimle görüntü eşleşmelerini kamera pozuna dönüştürür. Açık sinir ağı ağırlıkları, tüm konumlama sistemi değil, özellik/eşleştirme bileşenleridir."
        },
        "sourceIds": [
          "ow-hloc-superglue",
          "ow-hloc-pipeline",
          "ow-hloc-pose",
          "ow-hloc-matcher",
          "ow-hloc-license"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "pipeline",
      "summary": {
        "en": "A source-backed visual-localization pipeline with released weights is available. A matcher alone cannot return a robot’s world pose: it also needs the reference map, calibration, image pairing and geometric solver. Metric robot localization further requires map scale/frame and camera-to-robot extrinsics. This is a camera-based route, not a pretrained solution for every LiDAR, odometry or SLAM setup.",
        "tr": "Yayımlanmış ağırlıkları olan kaynaklı bir görsel konumlama akışı mevcut. Eşleştirici tek başına robotun dünya pozunu veremez; referans harita, kalibrasyon, görüntü eşlemesi ve geometrik çözücü gerekir. Metrik robot konumlaması ayrıca harita ölçeği/çerçevesi ve kamera–robot dış kalibrasyonu ister. Bu, kamera tabanlı bir yaklaşımdır; her LiDAR, odometri veya SLAM düzeni için hazır çözüm değildir."
      },
      "sourceIds": [
        "ow-hloc-superglue",
        "ow-hloc-pipeline",
        "ow-hloc-pose",
        "ow-hloc-matcher",
        "ow-hloc-license"
      ]
    }
  },
  {
    "id": "robot-motion-planning",
    "name": "Robot Motion Planning",
    "family": "Reasoning, Planning & Action",
    "definition": "Start + goal + obstacles → feasible path",
    "definitionSourceId": "S01",
    "note": {
      "en": "A source-backed specialist example; its domain, required inputs and deployment conditions limit the supported scope.",
      "tr": "Kaynaklı uzman örneği; destek kapsamı, alanı, gerekli girdileri ve kullanım koşullarıyla sınırlıdır."
    },
    "recommendations": [
      {
        "modelId": "mpinets-hybrid",
        "evidence": "documented",
        "rationale": {
          "en": "The published hybrid-expert checkpoint is loaded by the author’s inference script and repeatedly predicts joint updates to form a trajectory toward a gripper goal through a point-cloud scene.",
          "tr": "Yayımlanan hybrid-expert ağırlıkları, yazarın çıkarım betiğiyle yüklenir; nokta bulutu sahnesindeki kavrayıcı hedefine doğru yörünge oluşturmak için eklem güncellemeleri tekrar tekrar tahmin edilir."
        },
        "sourceIds": [
          "ow-mpinets-hybrid",
          "ow-mpinets-rollout",
          "ow-mpinets-zenodo",
          "ow-mpinets-hybrid-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "outcome": "pipeline",
      "summary": {
        "en": "A trained motion-planning policy is available for the documented Franka setup. It is neither a generic planner for any robot morphology nor a guarantee of collision-free motion. Match robot geometry, input coordinates and rollout settings, then independently validate the trajectory. Public checkpoint availability and publisher metadata were checked; no robot execution or model performance test was performed.",
        "tr": "Belgelenmiş Franka düzeni için eğitilmiş hareket planlama politikası mevcut. Her robot geometrisine uygun genel planlayıcı veya çarpışmasız hareket garantisi değildir. Robot geometrisi, girdi koordinatları ve yörünge üretme ayarları eşleştirilmeli, ardından yörünge bağımsız doğrulanmalıdır. Ağırlık erişimi ve yayıncı üst verileri kontrol edildi; robot yürütmesi veya model başarım testi yapılmadı."
      },
      "sourceIds": [
        "ow-mpinets-hybrid",
        "ow-mpinets-rollout",
        "ow-mpinets-zenodo",
        "ow-mpinets-hybrid-weights"
      ]
    }
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
