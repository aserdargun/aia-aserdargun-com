import type { BenchmarkCandidate, TaskBenchmark, TaskBenchmarkReview } from "@/data/schema";

// Published evidence reviewed on 2026-10-21. No model inference was run for these observations.
export const benchmarkCandidates: BenchmarkCandidate[] = [
  {
    "id": "qwen36",
    "name": "Qwen3.6-27B",
    "cardSourceId": "bm-card-qwen36",
    "weightsSourceId": "bm-weights-qwen36",
    "licenseSourceId": "bm-license-qwen36",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "gliner25",
    "name": "GLiNER2.5 base v1",
    "cardSourceId": "bm-card-gliner25",
    "weightsSourceId": "bm-weights-gliner25",
    "licenseSourceId": "bm-license-gliner25",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "gliner25multi",
    "name": "GLiNER2.5 multi v1",
    "cardSourceId": "bm-card-gliner25multi",
    "weightsSourceId": "bm-weights-gliner25multi",
    "licenseSourceId": "bm-license-gliner25multi",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "gliner2base",
    "name": "GLiNER2 base v1",
    "cardSourceId": "bm-card-gliner2base",
    "weightsSourceId": "bm-weights-gliner2base",
    "licenseSourceId": "bm-license-gliner2base",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "gliner2multi",
    "name": "GLiNER2 multi v1",
    "cardSourceId": "bm-card-gliner2multi",
    "weightsSourceId": "bm-weights-gliner2multi",
    "licenseSourceId": "bm-license-gliner2multi",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "e2e-coref",
    "name": "LingMess Coref",
    "cardSourceId": "bm-card-e2e-coref",
    "weightsSourceId": "bm-weights-e2e-coref",
    "licenseSourceId": "bm-license-e2e-coref",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "coeditxl",
    "name": "CoEdIT XL",
    "cardSourceId": "bm-card-coeditxl",
    "weightsSourceId": "bm-weights-coeditxl",
    "licenseSourceId": "bm-license-coeditxl",
    "license": "CC-BY-NC-4.0",
    "access": "public"
  },
  {
    "id": "hymt30",
    "name": "Hy-MT2-30B-A3B",
    "cardSourceId": "bm-card-hymt30",
    "weightsSourceId": "bm-weights-hymt30",
    "licenseSourceId": "bm-license-hymt30",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "hymt7",
    "name": "Hy-MT2-7B",
    "cardSourceId": "bm-card-hymt7",
    "weightsSourceId": "bm-weights-hymt7",
    "licenseSourceId": "bm-license-hymt7",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "emb4",
    "name": "Qwen3-Embedding-4B",
    "cardSourceId": "bm-card-emb4",
    "weightsSourceId": "bm-weights-emb4",
    "licenseSourceId": "bm-license-emb4",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "rerank4",
    "name": "Qwen3-Reranker-4B",
    "cardSourceId": "bm-card-rerank4",
    "weightsSourceId": "bm-weights-rerank4",
    "licenseSourceId": "bm-license-rerank4",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "mask2formertiny",
    "name": "Mask2Former Swin tiny · ADE20K",
    "cardSourceId": "bm-card-mask2formertiny",
    "weightsSourceId": "bm-weights-mask2formertiny",
    "licenseSourceId": "bm-license-mask2formertiny",
    "license": "CC-BY-NC-4.0",
    "access": "public"
  },
  {
    "id": "posebase",
    "name": "ViTPose+ base",
    "cardSourceId": "bm-card-posebase",
    "weightsSourceId": "bm-weights-posebase",
    "licenseSourceId": "bm-license-posebase",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "marigold2",
    "name": "Marigold V2 · Log-stage2",
    "cardSourceId": "bm-card-marigold2",
    "weightsSourceId": "bm-weights-marigold2",
    "licenseSourceId": "bm-license-marigold2",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "fluxklein4",
    "name": "FLUX.2 klein 4B",
    "cardSourceId": "bm-card-fluxklein4",
    "weightsSourceId": "bm-weights-fluxklein4",
    "licenseSourceId": "bm-license-fluxklein4",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "fluxklein9",
    "name": "FLUX.2 klein 9B",
    "cardSourceId": "bm-card-fluxklein9",
    "weightsSourceId": "bm-weights-fluxklein9",
    "licenseSourceId": "bm-license-fluxklein9",
    "license": "FLUX Non-Commercial License",
    "access": "gated"
  },
  {
    "id": "moebius",
    "name": "Moebius · Places2",
    "cardSourceId": "bm-card-moebius",
    "weightsSourceId": "bm-weights-moebius",
    "licenseSourceId": "bm-license-moebius",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "asrhf",
    "name": "Qwen3-ASR-1.7B · Transformers",
    "cardSourceId": "bm-card-asrhf",
    "weightsSourceId": "bm-weights-asrhf",
    "licenseSourceId": "bm-license-asrhf",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "asr06hf",
    "name": "Qwen3-ASR-0.6B · Transformers",
    "cardSourceId": "bm-card-asr06hf",
    "weightsSourceId": "bm-weights-asr06hf",
    "licenseSourceId": "bm-license-asr06hf",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "ttscv06",
    "name": "Qwen3-TTS 0.6B CustomVoice",
    "cardSourceId": "bm-card-ttscv06",
    "weightsSourceId": "bm-weights-ttscv06",
    "licenseSourceId": "bm-license-ttscv06",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "redimnet",
    "name": "ReDimNet2+",
    "cardSourceId": "bm-card-redimnet",
    "weightsSourceId": "bm-weights-redimnet",
    "licenseSourceId": "bm-license-redimnet",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "pyannote31",
    "name": "pyannote speaker-diarization-3.1",
    "cardSourceId": "bm-card-pyannote31",
    "weightsSourceId": "bm-weights-pyannote31",
    "licenseSourceId": "bm-license-pyannote31",
    "license": "MIT",
    "access": "gated"
  },
  {
    "id": "audar",
    "name": "Audar-Diarization-V1",
    "cardSourceId": "bm-card-audar",
    "weightsSourceId": "bm-weights-audar",
    "licenseSourceId": "bm-license-audar",
    "license": "AudarAI Community License v1.0",
    "access": "public"
  },
  {
    "id": "kumo",
    "name": "NVIDIA Kumo Tabular · Large",
    "cardSourceId": "bm-card-kumo",
    "weightsSourceId": "bm-weights-kumo",
    "licenseSourceId": "bm-license-kumo",
    "license": "OpenMDW-1.1",
    "access": "public"
  },
  {
    "id": "timestral",
    "name": "Timestral-209M",
    "cardSourceId": "bm-card-timestral",
    "weightsSourceId": "bm-weights-timestral",
    "licenseSourceId": "bm-license-timestral",
    "license": "Modified MIT",
    "access": "public"
  },
  {
    "id": "timestral28",
    "name": "Timestral-28M",
    "cardSourceId": "bm-card-timestral28",
    "weightsSourceId": "bm-weights-timestral28",
    "licenseSourceId": "bm-license-timestral28",
    "license": "Modified MIT",
    "access": "public"
  },
  {
    "id": "xiyan",
    "name": "XiYanSQL-QwenCoder-32B-2412",
    "cardSourceId": "bm-card-xiyan",
    "weightsSourceId": "bm-weights-xiyan",
    "licenseSourceId": "bm-license-xiyan",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "xiyan7",
    "name": "XiYanSQL-QwenCoder-7B-2502",
    "cardSourceId": "bm-card-xiyan7",
    "weightsSourceId": "bm-weights-xiyan7",
    "licenseSourceId": "bm-license-xiyan7",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "longcatprover",
    "name": "LongCat-Flash-Prover",
    "cardSourceId": "bm-card-longcatprover",
    "weightsSourceId": "bm-weights-longcatprover",
    "licenseSourceId": "bm-license-longcatprover",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "kimi3",
    "name": "Kimi K3",
    "cardSourceId": "bm-card-kimi3",
    "weightsSourceId": "bm-weights-kimi3",
    "licenseSourceId": "bm-license-kimi3",
    "license": "Kimi K3 License",
    "access": "public"
  },
  {
    "id": "ultra",
    "name": "ULTRA 50g",
    "cardSourceId": "bm-card-ultra",
    "weightsSourceId": "bm-weights-ultra",
    "licenseSourceId": "bm-license-ultra",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "ultra3",
    "name": "ULTRA 3g",
    "cardSourceId": "bm-card-ultra3",
    "weightsSourceId": "bm-weights-ultra3",
    "licenseSourceId": "bm-license-ultra3",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "ltx23",
    "name": "LTX-2.3 · 22B dev",
    "cardSourceId": "bm-card-ltx23",
    "weightsSourceId": "bm-weights-ltx23",
    "licenseSourceId": "bm-license-ltx23",
    "license": "LTX-2 Community License",
    "access": "public"
  },
  {
    "id": "audiomosaic",
    "name": "AudioMosaic ViT-B/16 · AudioSet-2M",
    "cardSourceId": "bm-card-audiomosaic",
    "weightsSourceId": "bm-weights-audiomosaic",
    "licenseSourceId": "bm-license-audiomosaic",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "primeramulti",
    "name": "PRIMERA · Multi-News fine-tuned",
    "cardSourceId": "bm-card-primeramulti",
    "weightsSourceId": "bm-weights-primeramulti",
    "licenseSourceId": "bm-license-primeramulti",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "primera",
    "name": "PRIMERA · zero-shot",
    "cardSourceId": "bm-card-primera",
    "weightsSourceId": "bm-weights-primera",
    "licenseSourceId": "bm-license-primera",
    "license": "Apache-2.0",
    "access": "public"
  },
  {
    "id": "qwenimage21",
    "name": "Qwen-Image-2.1",
    "cardSourceId": "bm-card-qwenimage21",
    "weightsSourceId": "bm-weights-qwenimage21",
    "licenseSourceId": "bm-license-qwenimage21",
    "license": "Qwen Research License",
    "access": "public"
  },
  {
    "id": "driftse",
    "name": "DriftSE · DistilHuBERT",
    "cardSourceId": "bm-card-driftse",
    "weightsSourceId": "bm-weights-driftse",
    "licenseSourceId": "bm-license-driftse",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "driftse-aux",
    "name": "DriftSE† · DistilHuBERT",
    "cardSourceId": "bm-card-driftse",
    "weightsSourceId": "bm-weights-driftse-aux",
    "licenseSourceId": "bm-license-driftse-aux",
    "license": "MIT",
    "access": "public"
  }
];

export const taskBenchmarks: TaskBenchmark[] = [
  {
    "id": "gliner-class",
    "taskIds": [
      "text-classification"
    ],
    "title": "Classification · overall F1",
    "dataset": "Classification",
    "metric": "F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-08-24",
    "sourceId": "bm-gliner25",
    "locator": "Classification · overall F1",
    "protocol": {
      "en": "Zero-shot results in the same Fastino release table.",
      "tr": "Aynı Fastino sürüm tablosundaki sıfır örnekli sonuçlar."
    },
    "limitation": {
      "en": "Selected released variants only; benchmark domains and label sets constrain the ranking.",
      "tr": "Yalnızca seçilen yayımlanmış sürümler; sıralama veri alanı ve etiket kümesiyle sınırlıdır."
    },
    "results": [
      {
        "candidateId": "gliner25multi",
        "score": 72.44
      },
      {
        "candidateId": "gliner25",
        "score": 69.86
      },
      {
        "candidateId": "gliner2multi",
        "score": 70.32
      },
      {
        "candidateId": "gliner2base",
        "score": 68.89
      }
    ]
  },
  {
    "id": "gliner-xnli",
    "taskIds": [
      "natural-language-inference"
    ],
    "title": "XNLI · F1",
    "dataset": "XNLI",
    "metric": "F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-08-24",
    "sourceId": "bm-gliner25",
    "locator": "XNLI · F1",
    "protocol": {
      "en": "Zero-shot results in the same Fastino release table.",
      "tr": "Aynı Fastino sürüm tablosundaki sıfır örnekli sonuçlar."
    },
    "limitation": {
      "en": "Selected released variants only; benchmark domains and label sets constrain the ranking.",
      "tr": "Yalnızca seçilen yayımlanmış sürümler; sıralama veri alanı ve etiket kümesiyle sınırlıdır."
    },
    "results": [
      {
        "candidateId": "gliner25multi",
        "score": 62.3
      },
      {
        "candidateId": "gliner25",
        "score": 54.49
      },
      {
        "candidateId": "gliner2multi",
        "score": 37.55
      },
      {
        "candidateId": "gliner2base",
        "score": 49.01
      }
    ]
  },
  {
    "id": "gliner-crossner",
    "taskIds": [
      "named-entity-recognition"
    ],
    "title": "CrossNER · mean F1",
    "dataset": "CrossNER",
    "metric": "F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-08-24",
    "sourceId": "bm-gliner25",
    "locator": "CrossNER · mean F1",
    "protocol": {
      "en": "Zero-shot results in the same Fastino release table.",
      "tr": "Aynı Fastino sürüm tablosundaki sıfır örnekli sonuçlar."
    },
    "limitation": {
      "en": "Selected released variants only; benchmark domains and label sets constrain the ranking.",
      "tr": "Yalnızca seçilen yayımlanmış sürümler; sıralama veri alanı ve etiket kümesiyle sınırlıdır."
    },
    "results": [
      {
        "candidateId": "gliner25multi",
        "score": 54.85
      },
      {
        "candidateId": "gliner25",
        "score": 58.3
      },
      {
        "candidateId": "gliner2multi",
        "score": 57.84
      },
      {
        "candidateId": "gliner2base",
        "score": 59.06
      }
    ]
  },
  {
    "id": "gliner-fewnerd",
    "taskIds": [
      "named-entity-recognition"
    ],
    "title": "FewNERD · F1",
    "dataset": "FewNERD",
    "metric": "F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-08-24",
    "sourceId": "bm-gliner25",
    "locator": "FewNERD · F1",
    "protocol": {
      "en": "Zero-shot results in the same Fastino release table.",
      "tr": "Aynı Fastino sürüm tablosundaki sıfır örnekli sonuçlar."
    },
    "limitation": {
      "en": "Selected released variants only; benchmark domains and label sets constrain the ranking.",
      "tr": "Yalnızca seçilen yayımlanmış sürümler; sıralama veri alanı ve etiket kümesiyle sınırlıdır."
    },
    "results": [
      {
        "candidateId": "gliner25multi",
        "score": 52.37
      },
      {
        "candidateId": "gliner25",
        "score": 55.14
      },
      {
        "candidateId": "gliner2multi",
        "score": 51.49
      },
      {
        "candidateId": "gliner2base",
        "score": 47.22
      }
    ]
  },
  {
    "id": "coref-ontonotes",
    "taskIds": [
      "coreference-resolution"
    ],
    "title": "English coreference",
    "dataset": "OntoNotes 5.0 · test",
    "metric": "Mean CoNLL F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2022-10-25",
    "sourceId": "bm-coref",
    "locator": "English coreference",
    "protocol": {
      "en": "Mean of MUC, B³ and CEAF; released LingMess teacher versus distilled, fine-tuned F-coref.",
      "tr": "MUC, B³ ve CEAF ortalaması; LingMess öğretmen modeli ile damıtılmış ve ince ayarlı F-coref."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "e2e-coref",
        "score": 81.4
      },
      {
        "candidateId": "coref",
        "score": 78.5
      }
    ]
  },
  {
    "id": "coedit-jfleg",
    "taskIds": [
      "grammatical-error-correction"
    ],
    "title": "Grammatical correction",
    "dataset": "JFLEG · EditEval",
    "metric": "GLEU",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2023-10-23",
    "sourceId": "bm-coedit",
    "locator": "Grammatical correction",
    "protocol": {
      "en": "Greedy decoding; the second Fluency/JFLEG number in Table 2 is GLEU.",
      "tr": "Açgözlü çözümleme; Tablo 2’de Fluency/JFLEG hücresindeki ikinci sayı GLEU’dur."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "coeditxl",
        "score": 60.7
      },
      {
        "candidateId": "coedit",
        "score": 59.3
      }
    ]
  },
  {
    "id": "hymt-wmt",
    "taskIds": [
      "machine-translation"
    ],
    "title": "Translation quality",
    "dataset": "WMT25",
    "metric": "XCOMET-XXL",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-05-21",
    "sourceId": "bm-hymt",
    "locator": "Translation quality",
    "protocol": {
      "en": "General translation evaluation, Table 2; 7B dense and 30B-A3B MoE.",
      "tr": "Genel çeviri değerlendirmesi, Tablo 2; 7B yoğun ve 30B-A3B MoE."
    },
    "limitation": {
      "en": "XCOMET and GEMBA judge different aspects; these aggregates do not establish Turkish-pair quality.",
      "tr": "XCOMET ve GEMBA farklı yönleri ölçer; bu ortalamalar Türkçe dil çifti kalitesini kanıtlamaz."
    },
    "results": [
      {
        "candidateId": "hymt7",
        "score": 63.86
      },
      {
        "candidateId": "hymt30",
        "score": 62.89
      }
    ]
  },
  {
    "id": "hymt-wmt-gemba",
    "taskIds": [
      "machine-translation"
    ],
    "title": "Translation · alternative judge",
    "dataset": "WMT25",
    "metric": "GEMBA",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-05-21",
    "sourceId": "bm-hymt",
    "locator": "Translation · alternative judge",
    "protocol": {
      "en": "Same WMT25 table and model variants.",
      "tr": "Aynı WMT25 tablosu ve model sürümleri."
    },
    "limitation": {
      "en": "The preferred model changes with the metric; do not average the two scales.",
      "tr": "Tercih edilen model ölçüte göre değişir; iki farklı ölçeğin ortalaması alınmaz."
    },
    "results": [
      {
        "candidateId": "hymt7",
        "score": 82.24
      },
      {
        "candidateId": "hymt30",
        "score": 84.34
      }
    ]
  },
  {
    "id": "qwen-if",
    "taskIds": [
      "text-generation",
      "dialogue-response-generation"
    ],
    "title": "IFBench",
    "dataset": "IFBench",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "IFBench",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 79.5
      },
      {
        "candidateId": "qwen36",
        "score": 69.1
      }
    ]
  },
  {
    "id": "qwen-gpqa",
    "taskIds": [
      "question-answering"
    ],
    "title": "GPQA Diamond",
    "dataset": "GPQA Diamond",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "GPQA Diamond",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 89.2
      },
      {
        "candidateId": "qwen36",
        "score": 87.8
      }
    ]
  },
  {
    "id": "qwen-vqa",
    "taskIds": [
      "visual-question-answering"
    ],
    "title": "RealWorldQA",
    "dataset": "RealWorldQA",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "RealWorldQA",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 85.9
      },
      {
        "candidateId": "qwen36",
        "score": 84.1
      }
    ]
  },
  {
    "id": "qwen-ocr",
    "taskIds": [
      "optical-character-recognition"
    ],
    "title": "OmniDocBench 1.5",
    "dataset": "OmniDocBench 1.5",
    "metric": "Overall score",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "OmniDocBench 1.5",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 91.1
      },
      {
        "candidateId": "qwen36",
        "score": 89.4
      }
    ]
  },
  {
    "id": "qwen-code",
    "taskIds": [
      "text-to-code-generation"
    ],
    "title": "LiveCodeBench v6",
    "dataset": "LiveCodeBench v6",
    "metric": "Pass rate",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "LiveCodeBench v6",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 90.3
      },
      {
        "candidateId": "qwen36",
        "score": 83.9
      }
    ]
  },
  {
    "id": "qwen-web",
    "taskIds": [
      "web-task-execution"
    ],
    "title": "WebArena-Verified",
    "dataset": "WebArena-Verified",
    "metric": "Success rate",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "WebArena-Verified",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 64.8
      },
      {
        "candidateId": "qwen36",
        "score": 48.8
      }
    ]
  },
  {
    "id": "qwen-desktop",
    "taskIds": [
      "desktop-task-execution"
    ],
    "title": "OSWorld-Verified",
    "dataset": "OSWorld-Verified",
    "metric": "Success rate",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-qwen38",
    "locator": "OSWorld-Verified",
    "protocol": {
      "en": "Publisher comparison against Qwen3.6-27B; use the source’s benchmark-specific harness and prompts.",
      "tr": "Yayıncının Qwen3.6-27B karşılaştırması; kaynaktaki benchmark’a özgü değerlendirme düzeni ve istemler geçerlidir."
    },
    "limitation": {
      "en": "Reported by Qwen, not rerun here; the same-size comparison does not rank all open-weight models.",
      "tr": "Qwen tarafından raporlandı, burada yeniden çalıştırılmadı; aynı boyuttaki karşılaştırma tüm açık ağırlıklı modelleri sıralamaz."
    },
    "results": [
      {
        "candidateId": "qwen38",
        "score": 84.3
      },
      {
        "candidateId": "qwen36",
        "score": 63.9
      }
    ]
  },
  {
    "id": "deepseek-swe",
    "taskIds": [
      "code-repair"
    ],
    "title": "Software issue resolution",
    "dataset": "DeepSWE v1.1",
    "metric": "Success rate",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-10-17",
    "sourceId": "bm-card-deepseek41",
    "locator": "Software issue resolution",
    "protocol": {
      "en": "Open-weight rows from the DeepSeek 1017 comparison table; Mini-SWE-V2 harness.",
      "tr": "DeepSeek 1017 karşılaştırma tablosundaki açık ağırlıklı satırlar; Mini-SWE-V2 çalıştırma düzeni."
    },
    "limitation": {
      "en": "Publisher-reported pipeline results. Do not merge with Qwen’s Claude Code table or treat them as model-only bug-fixing accuracy.",
      "tr": "Yayıncı tarafından raporlanan işlem hattı sonuçlarıdır. Qwen’in Claude Code tablosuyla birleştirilmez; yalnız modelin hata düzeltme doğruluğu değildir."
    },
    "results": [
      {
        "candidateId": "deepseek41",
        "score": 77
      },
      {
        "candidateId": "kimi3",
        "score": 67.5
      },
      {
        "candidateId": "glm53",
        "score": 66.9
      }
    ]
  },
  {
    "id": "glm-toolathlon",
    "taskIds": [
      "function-calling"
    ],
    "title": "Tool use in an agent workflow",
    "dataset": "Toolathlon Verified",
    "metric": "Pass@1",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2026-10-14",
    "sourceId": "bm-card-glm53",
    "locator": "Tool use in an agent workflow",
    "protocol": {
      "en": "GLM’s table: official evaluation service, average of three runs.",
      "tr": "GLM tablosu: resmi değerlendirme hizmeti, üç koşunun ortalaması."
    },
    "limitation": {
      "en": "End-to-end tool workflows are a proxy for function calling, not BFCL syntax/argument accuracy.",
      "tr": "Uçtan uca araç iş akışları işlev çağırma için dolaylı ölçümdür; BFCL sözdizimi/argüman doğruluğu değildir."
    },
    "results": [
      {
        "candidateId": "kimi3",
        "score": 76.5
      },
      {
        "candidateId": "glm53",
        "score": 73
      }
    ]
  },
  {
    "id": "embedding-sts",
    "taskIds": [
      "semantic-textual-similarity"
    ],
    "title": "MTEB English v2 · STS",
    "dataset": "MTEB English v2 · STS",
    "metric": "STS aggregate",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-06-05",
    "sourceId": "bm-card-embedding",
    "locator": "MTEB English v2 · STS",
    "protocol": {
      "en": "Qwen3-Embedding release table; category aggregates, not one dataset or language pair.",
      "tr": "Qwen3-Embedding sürüm tablosu; tek veri kümesi veya dil çifti değil kategori ortalamaları."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "embedding",
        "score": 88.58
      },
      {
        "candidateId": "emb4",
        "score": 88.72
      }
    ]
  },
  {
    "id": "embedding-retrieval",
    "taskIds": [
      "document-retrieval",
      "passage-retrieval"
    ],
    "title": "MTEB English v2 · Retrieval",
    "dataset": "MTEB English v2 · Retrieval",
    "metric": "Retrieval aggregate",
    "unit": "score",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2025-06-05",
    "sourceId": "bm-card-embedding",
    "locator": "MTEB English v2 · Retrieval",
    "protocol": {
      "en": "Qwen3-Embedding release table; category aggregates, not one dataset or language pair.",
      "tr": "Qwen3-Embedding sürüm tablosu; tek veri kümesi veya dil çifti değil kategori ortalamaları."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "embedding",
        "score": 69.44
      },
      {
        "candidateId": "emb4",
        "score": 68.46
      }
    ]
  },
  {
    "id": "rerank-mteb",
    "taskIds": [
      "re-ranking"
    ],
    "title": "MTEB-R",
    "dataset": "MTEB-R",
    "metric": "Retrieval score",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-06-05",
    "sourceId": "bm-card-reranker",
    "locator": "MTEB-R",
    "protocol": {
      "en": "Same Qwen reranker evaluation table; scores require a retrieved candidate set.",
      "tr": "Aynı Qwen yeniden sıralama tablosu; puanlar önceden getirilmiş aday kümesi gerektirir."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "reranker",
        "score": 69.02
      },
      {
        "candidateId": "rerank4",
        "score": 69.76
      }
    ]
  },
  {
    "id": "rerank-code",
    "taskIds": [
      "code-search"
    ],
    "title": "MTEB-Code",
    "dataset": "MTEB-Code",
    "metric": "Retrieval score",
    "unit": "score",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2025-06-05",
    "sourceId": "bm-card-reranker",
    "locator": "MTEB-Code",
    "protocol": {
      "en": "Same Qwen reranker evaluation table; scores require a retrieved candidate set.",
      "tr": "Aynı Qwen yeniden sıralama tablosu; puanlar önceden getirilmiş aday kümesi gerektirir."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "reranker",
        "score": 81.22
      },
      {
        "candidateId": "rerank4",
        "score": 81.2
      }
    ]
  },
  {
    "id": "primera-multinews",
    "taskIds": [
      "multi-document-summarization"
    ],
    "title": "Multi-document summarization",
    "dataset": "Multi-News",
    "metric": "ROUGE-2",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-primeramulti",
    "locator": "Multi-document summarization",
    "protocol": {
      "en": "HF implementation rows, fine-tuned versus zero-shot PRIMERA; not the original implementation’s 21.1 score.",
      "tr": "HF uygulaması satırları, ince ayarlı ve sıfır örnekli PRIMERA; özgün uygulamanın 21.1 puanı kullanılmaz."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "primeramulti",
        "score": 20.9
      },
      {
        "candidateId": "primera",
        "score": 13.6
      }
    ]
  },
  {
    "id": "mask-ade",
    "taskIds": [
      "semantic-segmentation"
    ],
    "title": "Semantic masks",
    "dataset": "ADE20K validation",
    "metric": "mIoU",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2022-01-19",
    "sourceId": "bm-mask",
    "locator": "Semantic masks",
    "protocol": {
      "en": "Single-scale mIoU, 160k iterations; Swin-L uses IN21k pretraining and 640 resolution.",
      "tr": "Tek ölçek mIoU, 160 bin iterasyon; Swin-L IN21k ön eğitimi ve 640 çözünürlük kullanır."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "mask2former",
        "score": 56.1
      },
      {
        "candidateId": "mask2formertiny",
        "score": 47.7
      }
    ]
  },
  {
    "id": "pose-coco",
    "taskIds": [
      "keypoint-detection"
    ],
    "title": "Human pose",
    "dataset": "COCO validation · 256×192",
    "metric": "AP",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2023-01-10",
    "sourceId": "bm-pose",
    "locator": "Human pose",
    "protocol": {
      "en": "ViTPose++ six-dataset training, same input size and detector; COCO val table.",
      "tr": "ViTPose++ altı veri kümesiyle eğitim, aynı girdi boyutu ve algılayıcı; COCO doğrulama tablosu."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "pose",
        "score": 79.4
      },
      {
        "candidateId": "posebase",
        "score": 77
      }
    ]
  },
  {
    "id": "depth-marigold",
    "taskIds": [
      "depth-estimation"
    ],
    "title": "Affine-invariant depth",
    "dataset": "ETH3D · PPD evaluation protocol",
    "metric": "AbsRel",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-09-08",
    "sourceId": "bm-marigold",
    "locator": "Affine-invariant depth",
    "protocol": {
      "en": "RANSAC alignment to ground truth; input 1008×672, upsampled to 2048×1360.",
      "tr": "Gerçek derinliğe RANSAC hizalaması; 1008×672 girdi, 2048×1360 boyutuna büyütme."
    },
    "limitation": {
      "en": "One verified checkpoint row. This measures relative shape after alignment, not absolute metric depth or a direct comparison with DA3-large.",
      "tr": "Doğrulanan tek checkpoint satırı. Hizalama sonrası göreli şekli ölçer; mutlak metrik derinlik veya DA3-large ile doğrudan karşılaştırma değildir."
    },
    "results": [
      {
        "candidateId": "marigold2",
        "score": 2.8,
        "configuration": {
          "en": "Log-stage2 adapter + Qwen-Image-Edit-2509 base",
          "tr": "Log-stage2 adaptörü + Qwen-Image-Edit-2509 tabanı"
        }
      }
    ]
  },
  {
    "id": "klein-geneval",
    "taskIds": [
      "text-to-image-generation"
    ],
    "title": "Prompt composition",
    "dataset": "GenEval · Mage-Flow comparison",
    "metric": "Overall score",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "independent",
    "resultDate": "2026-07-22",
    "sourceId": "bm-mage",
    "locator": "Prompt composition",
    "protocol": {
      "en": "Four-step distilled Klein models, same third-party author comparison.",
      "tr": "Dört adımlı damıtılmış Klein modelleri, aynı araştırmacı karşılaştırması."
    },
    "limitation": {
      "en": "A selected-subset result. Mage-Flow and newer Qwen releases cannot be ranked here without matching verified releases and scores.",
      "tr": "Seçilmiş alt kümenin sonucu. Mage-Flow ve daha yeni Qwen sürümleri, doğrulanmış sürüm ve puan eşleşmesi olmadan burada sıralanamaz."
    },
    "results": [
      {
        "candidateId": "fluxklein9",
        "score": 0.86
      },
      {
        "candidateId": "fluxklein4",
        "score": 0.83
      }
    ]
  },
  {
    "id": "edit-imgedit",
    "taskIds": [
      "image-to-image-generation"
    ],
    "title": "ImgEdit-Bench",
    "dataset": "ImgEdit-Bench",
    "metric": "Judge score",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "independent",
    "resultDate": "2026-07-22",
    "sourceId": "bm-mage",
    "locator": "ImgEdit-Bench",
    "protocol": {
      "en": "Mage-Flow authors’ comparison of released editing models; inference steps differ.",
      "tr": "Mage-Flow yazarlarının yayımlanmış düzenleme modelleri karşılaştırması; çıkarım adımları farklıdır."
    },
    "limitation": {
      "en": "The winner changes with the judge; this is not a matched-compute or all-model leaderboard.",
      "tr": "Lider değerlendirme ölçütüne göre değişir; eşit hesaplama bütçeli veya tüm modelleri içeren bir sıralama değildir."
    },
    "results": [
      {
        "candidateId": "imageedit",
        "score": 4.51,
        "configuration": {
          "en": "50 steps",
          "tr": "50 adım"
        }
      },
      {
        "candidateId": "fluxklein9",
        "score": 4.18,
        "configuration": {
          "en": "4 steps",
          "tr": "4 adım"
        }
      },
      {
        "candidateId": "fluxklein4",
        "score": 4.01,
        "configuration": {
          "en": "4 steps",
          "tr": "4 adım"
        }
      }
    ]
  },
  {
    "id": "edit-gedit",
    "taskIds": [
      "image-to-image-generation"
    ],
    "title": "GEdit-Bench EN",
    "dataset": "GEdit-Bench EN",
    "metric": "Judge score",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "independent",
    "resultDate": "2026-07-22",
    "sourceId": "bm-mage",
    "locator": "GEdit-Bench EN",
    "protocol": {
      "en": "Mage-Flow authors’ comparison of released editing models; inference steps differ.",
      "tr": "Mage-Flow yazarlarının yayımlanmış düzenleme modelleri karşılaştırması; çıkarım adımları farklıdır."
    },
    "limitation": {
      "en": "The winner changes with the judge; this is not a matched-compute or all-model leaderboard.",
      "tr": "Lider değerlendirme ölçütüne göre değişir; eşit hesaplama bütçeli veya tüm modelleri içeren bir sıralama değildir."
    },
    "results": [
      {
        "candidateId": "imageedit",
        "score": 7.877,
        "configuration": {
          "en": "50 steps",
          "tr": "50 adım"
        }
      },
      {
        "candidateId": "fluxklein9",
        "score": 8.04,
        "configuration": {
          "en": "4 steps",
          "tr": "4 adım"
        }
      },
      {
        "candidateId": "fluxklein4",
        "score": 7.717,
        "configuration": {
          "en": "4 steps",
          "tr": "4 adım"
        }
      }
    ]
  },
  {
    "id": "moebius-places",
    "taskIds": [
      "image-inpainting"
    ],
    "title": "Masked-region restoration",
    "dataset": "Places2 · small masks",
    "metric": "FID",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-06-18",
    "sourceId": "bm-moebius",
    "locator": "Masked-region restoration",
    "protocol": {
      "en": "Table 1, fixed Places2 split and mask regime.",
      "tr": "Tablo 1, sabit Places2 bölümü ve maske düzeni."
    },
    "limitation": {
      "en": "The 0.02 FID gap has no confidence interval; not evidence of a statistically significant or universal win.",
      "tr": "0.02 FID farkı için güven aralığı yok; istatistiksel olarak anlamlı veya evrensel üstünlük kanıtı değildir."
    },
    "results": [
      {
        "candidateId": "moebius",
        "score": 0.92,
        "configuration": {
          "en": "Places2 fine-tune · 20 steps",
          "tr": "Places2 ince ayarı · 20 adım"
        }
      },
      {
        "candidateId": "fill",
        "score": 0.94,
        "configuration": {
          "en": "50 steps",
          "tr": "50 adım"
        }
      }
    ]
  },
  {
    "id": "qwen-asr",
    "taskIds": [
      "automatic-speech-recognition"
    ],
    "title": "English transcription",
    "dataset": "Open ASR English suite · 7 datasets",
    "metric": "Mean WER",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-06-26",
    "sourceId": "bm-card-asrhf",
    "locator": "English transcription",
    "protocol": {
      "en": "Transformers-converted Qwen3-ASR checkpoints in the same evaluation table.",
      "tr": "Aynı değerlendirme tablosundaki Transformers biçimine dönüştürülmüş Qwen3-ASR checkpoint’leri."
    },
    "limitation": {
      "en": "English aggregate only. It does not rank Turkish ASR, streaming latency, or every released recognizer.",
      "tr": "Yalnızca İngilizce ortalaması. Türkçe ASR, akış gecikmesi veya tüm yayımlanmış tanıyıcıları sıralamaz."
    },
    "results": [
      {
        "candidateId": "asrhf",
        "score": 5.59
      },
      {
        "candidateId": "asr06hf",
        "score": 6.31
      }
    ]
  },
  {
    "id": "tts-english",
    "taskIds": [
      "text-to-speech"
    ],
    "title": "Target-speaker synthesis",
    "dataset": "Qwen TTS multilingual test set · English",
    "metric": "WER",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-01",
    "sourceId": "bm-card-tts",
    "locator": "Target-speaker synthesis",
    "protocol": {
      "en": "12Hz CustomVoice models, bfloat16, max_new_tokens=2048; English passed explicitly.",
      "tr": "12Hz CustomVoice modelleri, bfloat16, max_new_tokens=2048; İngilizce açıkça belirtilir."
    },
    "limitation": {
      "en": "WER measures intelligibility, not naturalness or speaker similarity; this test set is not Seed-TTS or a Turkish evaluation.",
      "tr": "WER anlaşılabilirliği ölçer; doğallığı veya konuşmacı benzerliğini değil. Bu küme Seed-TTS veya Türkçe değerlendirmesi değildir."
    },
    "results": [
      {
        "candidateId": "tts",
        "score": 0.899
      },
      {
        "candidateId": "ttscv06",
        "score": 1.188
      }
    ]
  },
  {
    "id": "diar-community",
    "taskIds": [
      "speaker-diarization"
    ],
    "title": "Meeting diarization",
    "dataset": "AMI IHM",
    "metric": "DER",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-09",
    "sourceId": "bm-card-diarization",
    "locator": "Meeting diarization",
    "protocol": {
      "en": "Fully automatic, no forgiveness collar; overlapping speech included.",
      "tr": "Tam otomatik; zaman tolerans aralığı yok, örtüşen konuşma dahil."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "diarization",
        "score": 17
      },
      {
        "candidateId": "pyannote31",
        "score": 18.8
      }
    ]
  },
  {
    "id": "diar-audar",
    "taskIds": [
      "speaker-diarization"
    ],
    "title": "Streaming diarization",
    "dataset": "Eight-corpus macro · Audar evaluation",
    "metric": "DER",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026",
    "sourceId": "bm-card-audar",
    "locator": "Streaming diarization",
    "protocol": {
      "en": "dscore, 0.25-second collar, overlap ignored; source’s own dev/eval selection.",
      "tr": "dscore, 0.25 saniye tolerans, örtüşme hariç; kaynağın kendi dev/eval seçimi."
    },
    "limitation": {
      "en": "Cannot be compared with the no-collar Community-1 table above. Split selection and training exposure differ across corpora.",
      "tr": "Yukarıdaki toleranssız Community-1 tablosuyla karşılaştırılamaz. Veri bölümü ve eğitimde görülme durumu korpusa göre değişir."
    },
    "results": [
      {
        "candidateId": "audar",
        "score": 22.03
      },
      {
        "candidateId": "pyannote31",
        "score": 29.66
      }
    ]
  },
  {
    "id": "redimnet-verify",
    "taskIds": [
      "speaker-verification"
    ],
    "title": "Short-window speaker verification",
    "dataset": "VoxCeleb1-O",
    "metric": "EER",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-redimnet",
    "locator": "Short-window speaker verification",
    "protocol": {
      "en": "Random four-second windows, cosine scoring; ReDimNet2+ released checkpoint.",
      "tr": "Rastgele dört saniyelik pencereler, kosinüs skoru; yayımlanmış ReDimNet2+ checkpoint’i."
    },
    "limitation": {
      "en": "The card does not uniquely identify every baseline checkpoint. ECAPA full-utterance scores are not comparable here.",
      "tr": "Kart her karşılaştırma checkpoint’ini benzersiz tanımlamıyor. ECAPA tam konuşma puanları burada karşılaştırılabilir değildir."
    },
    "results": [
      {
        "candidateId": "redimnet",
        "score": 0.351
      }
    ]
  },
  {
    "id": "drift-pesq",
    "taskIds": [
      "speech-enhancement"
    ],
    "title": "Single-step enhancement",
    "dataset": "VoiceBank-DEMAND",
    "metric": "PESQ",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-driftse",
    "locator": "Single-step enhancement",
    "protocol": {
      "en": "Released DistilHuBERT checkpoints; dagger adds PESQ, SI-SDR and CCMSE auxiliary losses.",
      "tr": "Yayımlanmış DistilHuBERT checkpoint’leri; † sürümü PESQ, SI-SDR ve CCMSE yardımcı kayıpları ekler."
    },
    "limitation": {
      "en": "Supervised in-domain result; performance and ranking can change on real-world noise.",
      "tr": "Eğitim alanına yakın, gözetimli sonuç; gerçek ortam gürültüsünde performans ve sıralama değişebilir."
    },
    "results": [
      {
        "candidateId": "driftse",
        "score": 3.0
      },
      {
        "candidateId": "driftse-aux",
        "score": 3.45
      }
    ]
  },
  {
    "id": "drift-sisdr",
    "taskIds": [
      "speech-enhancement"
    ],
    "title": "Single-step enhancement",
    "dataset": "VoiceBank-DEMAND",
    "metric": "SI-SDR",
    "unit": "dB",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "bm-card-driftse",
    "locator": "Single-step enhancement",
    "protocol": {
      "en": "Released DistilHuBERT checkpoints; dagger adds PESQ, SI-SDR and CCMSE auxiliary losses.",
      "tr": "Yayımlanmış DistilHuBERT checkpoint’leri; † sürümü PESQ, SI-SDR ve CCMSE yardımcı kayıpları ekler."
    },
    "limitation": {
      "en": "Supervised in-domain result; performance and ranking can change on real-world noise.",
      "tr": "Eğitim alanına yakın, gözetimli sonuç; gerçek ortam gürültüsünde performans ve sıralama değişebilir."
    },
    "results": [
      {
        "candidateId": "driftse",
        "score": 15.6
      },
      {
        "candidateId": "driftse-aux",
        "score": 20.6
      }
    ]
  },
  {
    "id": "audiomosaic-tag",
    "taskIds": [
      "audio-classification"
    ],
    "title": "Audio event tagging",
    "dataset": "AudioSet-2M eval · 527 classes",
    "metric": "mAP",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-05",
    "sourceId": "bm-card-audiomosaic",
    "locator": "Audio event tagging",
    "protocol": {
      "en": "ViT-B/16 fine-tuned on the full unbalanced AudioSet training split.",
      "tr": "ViT-B/16, AudioSet’in tam dengesiz eğitim bölümü üzerinde ince ayarlı."
    },
    "limitation": {
      "en": "A single verified release result; do not compare with balanced-only training or zero-shot audio-text classification.",
      "tr": "Doğrulanan tek sürüm sonucu; yalnız dengeli kümede eğitim veya sıfır örnekli ses-metin sınıflandırmasıyla karşılaştırılmaz."
    },
    "results": [
      {
        "candidateId": "audiomosaic",
        "score": 50.19
      }
    ]
  },
  {
    "id": "keyword-superb",
    "taskIds": [
      "keyword-spotting"
    ],
    "title": "Keyword recognition",
    "dataset": "SUPERB · Speech Commands test",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021",
    "sourceId": "bm-card-keyword",
    "locator": "Keyword recognition",
    "protocol": {
      "en": "The Transformers implementation row, not the separate s3prl row.",
      "tr": "Ayrı s3prl satırı değil, Transformers uygulaması satırı."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "keyword",
        "score": 96.43
      }
    ]
  },
  {
    "id": "emotion-superb",
    "taskIds": [
      "speech-emotion-recognition"
    ],
    "title": "Speech emotion",
    "dataset": "SUPERB · IEMOCAP session1",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021",
    "sourceId": "bm-card-emotion",
    "locator": "Speech emotion",
    "protocol": {
      "en": "The s3prl implementation; the card has no Transformers result.",
      "tr": "s3prl uygulaması; kartta Transformers sonucu yok."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "emotion",
        "score": 67.62
      }
    ]
  },
  {
    "id": "sep-whamr",
    "taskIds": [
      "speech-separation"
    ],
    "title": "Two-speaker separation",
    "dataset": "WHAMR! test",
    "metric": "SI-SNR improvement",
    "unit": "dB",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021-03-30",
    "sourceId": "bm-card-separation",
    "locator": "Two-speaker separation",
    "protocol": {
      "en": "SpeechBrain SepFormer WHAMR! release table.",
      "tr": "SpeechBrain SepFormer WHAMR! sürüm tablosu."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "separation",
        "score": 13.7
      }
    ]
  },
  {
    "id": "xiyan-bird",
    "taskIds": [
      "text-to-sql"
    ],
    "title": "SQL execution",
    "dataset": "BIRD dev · M-Schema",
    "metric": "Execution accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025",
    "sourceId": "bm-card-xiyan7",
    "locator": "SQL execution",
    "protocol": {
      "en": "Single model; M-Schema with question and evidence; not XiYan multi-generator ensemble.",
      "tr": "Tek model; soru ve kanıtla M-Schema; XiYan çoklu üretici topluluğu değil."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "xiyan",
        "score": 67.01
      },
      {
        "candidateId": "xiyan7",
        "score": 59.78
      }
    ]
  },
  {
    "id": "kumo-cls",
    "taskIds": [
      "classification"
    ],
    "title": "Tabular foundation prediction",
    "dataset": "TALENT",
    "metric": "Average rank · accuracy",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-09-29",
    "sourceId": "bm-kumo",
    "locator": "Tabular foundation prediction",
    "protocol": {
      "en": "NVIDIA’s reported TALENT rank with the Kumo library and default evaluation settings.",
      "tr": "NVIDIA’nın Kumo kütüphanesi ve varsayılan değerlendirme ayarlarıyla raporladığı TALENT sırası."
    },
    "limitation": {
      "en": "Rank depends on the comparison pool; no compatible numerical TabPFN-3.5 row was verified in this source.",
      "tr": "Sıra karşılaştırma havuzuna bağlıdır; bu kaynakta uyumlu sayısal TabPFN-3.5 satırı doğrulanamadı."
    },
    "results": [
      {
        "candidateId": "kumo",
        "score": 6.67
      }
    ]
  },
  {
    "id": "kumo-reg",
    "taskIds": [
      "regression"
    ],
    "title": "Tabular foundation prediction",
    "dataset": "TALENT",
    "metric": "Average rank · RMSE",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-09-29",
    "sourceId": "bm-kumo",
    "locator": "Tabular foundation prediction",
    "protocol": {
      "en": "NVIDIA’s reported TALENT rank with the Kumo library and default evaluation settings.",
      "tr": "NVIDIA’nın Kumo kütüphanesi ve varsayılan değerlendirme ayarlarıyla raporladığı TALENT sırası."
    },
    "limitation": {
      "en": "Rank depends on the comparison pool; no compatible numerical TabPFN-3.5 row was verified in this source.",
      "tr": "Sıra karşılaştırma havuzuna bağlıdır; bu kaynakta uyumlu sayısal TabPFN-3.5 satırı doğrulanamadı."
    },
    "results": [
      {
        "candidateId": "kumo",
        "score": 4.22
      }
    ]
  },
  {
    "id": "timestral-gift",
    "taskIds": [
      "time-series-forecasting"
    ],
    "title": "Zero-shot forecasting",
    "dataset": "GIFT-Eval",
    "metric": "MASE",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-10-15",
    "sourceId": "bm-card-timestral",
    "locator": "Zero-shot forecasting",
    "protocol": {
      "en": "Same Timestral release table; zero-shot pretrained models, known/past covariates only when provided.",
      "tr": "Aynı Timestral sürüm tablosu; sıfır örnekli ön eğitimli modeller, bilinen/geçmiş yardımcı değişkenler yalnızca verildiğinde kullanılır."
    },
    "limitation": {
      "en": "Aggregate forecast error, not every domain/horizon; context and inference policies remain model-specific.",
      "tr": "Toplam tahmin hatası; her alan ve ufuk için geçerli değil. Bağlam ve çıkarım politikaları modele özgüdür."
    },
    "results": [
      {
        "candidateId": "timestral",
        "score": 0.658
      },
      {
        "candidateId": "timestral28",
        "score": 0.678
      },
      {
        "candidateId": "chronos",
        "score": 0.698
      }
    ]
  },
  {
    "id": "timestral-time",
    "taskIds": [
      "time-series-forecasting"
    ],
    "title": "Zero-shot forecasting",
    "dataset": "TIME · 98 tasks",
    "metric": "MASE",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-10-15",
    "sourceId": "bm-card-timestral",
    "locator": "Zero-shot forecasting",
    "protocol": {
      "en": "Same Timestral release table; zero-shot pretrained models, known/past covariates only when provided.",
      "tr": "Aynı Timestral sürüm tablosu; sıfır örnekli ön eğitimli modeller, bilinen/geçmiş yardımcı değişkenler yalnızca verildiğinde kullanılır."
    },
    "limitation": {
      "en": "Aggregate forecast error, not every domain/horizon; context and inference policies remain model-specific.",
      "tr": "Toplam tahmin hatası; her alan ve ufuk için geçerli değil. Bağlam ve çıkarım politikaları modele özgüdür."
    },
    "results": [
      {
        "candidateId": "timestral",
        "score": 0.626
      },
      {
        "candidateId": "timestral28",
        "score": 0.638
      },
      {
        "candidateId": "chronos",
        "score": 0.662
      }
    ]
  },
  {
    "id": "ultra-transductive",
    "taskIds": [
      "link-prediction"
    ],
    "title": "Knowledge-graph completion",
    "dataset": "16 transductive graphs",
    "metric": "Mean MRR",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2023",
    "sourceId": "bm-card-ultra",
    "locator": "Knowledge-graph completion",
    "protocol": {
      "en": "Same PyG table; 50g pretraining includes evaluation graphs, unlike the 3g transfer setting.",
      "tr": "Aynı PyG tablosu; 50g ön eğitimi değerlendirme graflarını içerir, 3g aktarım düzeninden farklıdır."
    },
    "limitation": {
      "en": "Training exposure differs: this is not evidence of superior zero-shot generalization. AnyBURL’s WN18RR result is a different scope.",
      "tr": "Eğitimde görülme durumu farklıdır: daha iyi sıfır örnekli genelleme kanıtı değildir. AnyBURL WN18RR sonucu farklı kapsamdadır."
    },
    "results": [
      {
        "candidateId": "ultra",
        "score": 0.389
      },
      {
        "candidateId": "ultra3",
        "score": 0.329
      }
    ]
  },
  {
    "id": "longcat-minif2f",
    "taskIds": [
      "formal-theorem-proving"
    ],
    "title": "Lean theorem proving",
    "dataset": "MiniF2F-Test",
    "metric": "Pass@72",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-03-22",
    "sourceId": "bm-longcat",
    "locator": "Lean theorem proving",
    "protocol": {
      "en": "Agentic Lean4 proving with up to 72 inferences per problem.",
      "tr": "Problem başına 72 çıkarıma kadar, ajanlı Lean4 ispatı."
    },
    "limitation": {
      "en": "Budgets and proof-search strategies differ from DeepSeek-Prover-V2 reports; therefore no shared winner is computed.",
      "tr": "Bütçe ve ispat araması DeepSeek-Prover-V2 raporlarından farklıdır; bu nedenle ortak lider hesaplanmaz."
    },
    "results": [
      {
        "candidateId": "longcatprover",
        "score": 97.1
      }
    ]
  },
  {
    "id": "r1-aime",
    "taskIds": [
      "math-word-problem-solving"
    ],
    "title": "Competition mathematics",
    "dataset": "AIME 2025",
    "metric": "Pass@1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-05-28",
    "sourceId": "bm-card-r1",
    "locator": "Competition mathematics",
    "protocol": {
      "en": "R1-0528 release table, pass@1 competition problems.",
      "tr": "R1-0528 sürüm tablosu, yarışma problemlerinde pass@1."
    },
    "limitation": {
      "en": "Historical reference table; checked in 2026, not a claim of current leadership.",
      "tr": "Tarihsel referans tablosu; 2026’da kontrol edildi, güncel liderlik iddiası değildir."
    },
    "results": [
      {
        "candidateId": "r1",
        "score": 87.5
      }
    ]
  }
];

export const taskBenchmarkReviews: TaskBenchmarkReview[] = [
  {
    "taskId": "text-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "gliner25multi",
      "gliner25",
      "gliner2multi",
      "gliner2base",
      "gliner2",
      "nli",
      "fasttext-lid"
    ],
    "summary": {
      "en": "GLiNER2.5 multi leads the selected zero-shot classification aggregate; base and multilingual variants trade places on individual datasets.",
      "tr": "GLiNER2.5 multi, seçili sıfır örnekli sınıflandırma ortalamasında önde; taban ve çok dilli sürümlerin sırası veri kümesine göre değişiyor."
    },
    "limitation": {
      "en": "This is not a comparison against supervised DeBERTa or language-identification fastText under matched labels.",
      "tr": "Bu sonuç, aynı etiketlerle eğitilmiş DeBERTa veya dil tanıma fastText karşılaştırması değildir."
    },
    "sourceIds": [
      "bm-gliner25",
      "bm-card-gliner25multi",
      "bm-card-gliner25",
      "bm-card-gliner2multi",
      "bm-card-gliner2base",
      "ow-gliner2",
      "ow-nli",
      "ow-fasttext-lid"
    ]
  },
  {
    "taskId": "natural-language-inference",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "gliner25multi",
      "gliner25",
      "gliner2multi",
      "gliner2base",
      "nli"
    ],
    "summary": {
      "en": "GLiNER2.5 multi improves the XNLI F1 result within its extraction-model family.",
      "tr": "GLiNER2.5 multi, kendi çıkarım modeli ailesinde XNLI F1 sonucunu yükseltiyor."
    },
    "limitation": {
      "en": "The existing DeBERTa checkpoint is supervised on NLI; its accuracy must not be mixed with this zero-shot F1 table.",
      "tr": "Mevcut DeBERTa checkpoint’i NLI üzerinde gözetimli eğitilmiştir; doğruluk puanı bu sıfır örnekli F1 tablosuna karıştırılmaz."
    },
    "sourceIds": [
      "bm-gliner25",
      "bm-card-gliner25multi",
      "bm-card-gliner25",
      "bm-card-gliner2multi",
      "bm-card-gliner2base",
      "ow-nli"
    ]
  },
  {
    "taskId": "named-entity-recognition",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "gliner25multi",
      "gliner25",
      "gliner2multi",
      "gliner2base",
      "gliner2"
    ],
    "summary": {
      "en": "GLiNER2 base wins CrossNER in this subset, while GLiNER2.5 base wins FewNERD: the newer model is not uniformly better.",
      "tr": "Bu alt kümede CrossNER’de GLiNER2 base, FewNERD’de GLiNER2.5 base önde: yeni model her ölçümde daha iyi değil."
    },
    "limitation": {
      "en": "Entity domains, span conventions and label descriptions must match before transferring these results.",
      "tr": "Bu sonuçları aktarmadan önce varlık alanı, metin aralığı kuralları ve etiket açıklamaları eşleşmelidir."
    },
    "sourceIds": [
      "bm-gliner25",
      "bm-card-gliner25multi",
      "bm-card-gliner25",
      "bm-card-gliner2multi",
      "bm-card-gliner2base",
      "ow-gliner2"
    ]
  },
  {
    "taskId": "relation-extraction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "gliner25",
      "gliner25multi",
      "gliner2"
    ],
    "summary": {
      "en": "GLiNER2.5 adds a documented joint entity/relation extraction interface and is a current candidate alongside GLiNER2.",
      "tr": "GLiNER2.5 belgelenmiş ortak varlık/ilişki çıkarımı sunuyor; GLiNER2 yanında güncel adaydır."
    },
    "limitation": {
      "en": "The release’s NER and classification F1 tables do not measure relation extraction; no exact-checkpoint TACRED/DocRED comparison was verified.",
      "tr": "Sürümün NER ve sınıflandırma F1 tabloları ilişki çıkarımını ölçmüyor; tam checkpoint’e bağlı TACRED/DocRED karşılaştırması doğrulanamadı."
    },
    "sourceIds": [
      "bm-gliner25",
      "bm-card-gliner25",
      "bm-card-gliner25multi",
      "ow-gliner2"
    ]
  },
  {
    "taskId": "coreference-resolution",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "e2e-coref",
      "coref"
    ],
    "summary": {
      "en": "LingMess has higher OntoNotes F1; distilled F-coref trades some accuracy for documented speed and memory savings.",
      "tr": "LingMess’in OntoNotes F1 puanı daha yüksek; damıtılmış F-coref belgelenmiş hız ve bellek avantajı için bir miktar doğruluktan ödün veriyor."
    },
    "limitation": {
      "en": "The 2022 English benchmark is a historical accuracy/efficiency reference, not a 2026 multilingual winner.",
      "tr": "2022 İngilizce benchmark’ı tarihsel doğruluk/verimlilik referansıdır; 2026 çok dilli lideri değildir."
    },
    "sourceIds": [
      "bm-coref",
      "bm-card-e2e-coref",
      "ow-coref"
    ]
  },
  {
    "taskId": "part-of-speech-tagging",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "stanza"
    ],
    "summary": {
      "en": "Stanza supplies language/treebank-specific POS weights and a reproducible linguistic pipeline.",
      "tr": "Stanza dil ve ağaç bankasına özgü POS ağırlıkları ile tekrarlanabilir bir dil işleme hattı sağlar."
    },
    "limitation": {
      "en": "Universal Dependencies version, tokenization and treebank must match; the English package is not one universal POS model and has no verified current cross-model table here.",
      "tr": "Universal Dependencies sürümü, sözcükleme ve ağaç bankası eşleşmeli; İngilizce paket tek bir evrensel POS modeli değil ve burada doğrulanmış güncel ortak tablo yok."
    },
    "sourceIds": [
      "ow-stanza",
      "ow-stanza-docs"
    ]
  },
  {
    "taskId": "syntactic-parsing",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "stanza"
    ],
    "summary": {
      "en": "Stanza is a ready parser pipeline when the language, treebank and tokenization contract are fixed.",
      "tr": "Dil, ağaç bankası ve sözcükleme kuralları sabitlendiğinde Stanza hazır bir ayrıştırıcı işlem hattıdır."
    },
    "limitation": {
      "en": "UAS/LAS with gold tokens and end-to-end raw-text scores are different; no matched current checkpoint comparison was established.",
      "tr": "Doğru sözcük sınırları verilen UAS/LAS ile ham metinden uçtan uca puan farklıdır; güncel checkpoint’ler için eşleşen karşılaştırma kurulamadı."
    },
    "sourceIds": [
      "ow-stanza",
      "ow-stanza-docs"
    ]
  },
  {
    "taskId": "text-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "deepseek41",
      "mamba2"
    ],
    "summary": {
      "en": "Qwen3.8-27B improves over Qwen3.6-27B on instruction following at the same nominal parameter scale. DeepSeek-V4.1 is another current general-purpose candidate.",
      "tr": "Qwen3.8-27B aynı nominal parametre ölçeğinde Qwen3.6-27B’den daha iyi yönerge takibi gösteriyor. DeepSeek-V4.1 de güncel genel amaçlı adaydır."
    },
    "limitation": {
      "en": "IFBench measures constraint following, not all writing quality, truthfulness or latency; no universal text-generation winner follows.",
      "tr": "IFBench kısıt takibini ölçer; tüm yazım kalitesini, doğruluğu veya gecikmeyi değil. Evrensel metin üretimi lideri çıkarılamaz."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-deepseek41",
      "ow-mamba2",
      "ow-mamba2-method"
    ]
  },
  {
    "taskId": "machine-translation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "hymt7",
      "hymt30",
      "nllb",
      "seamless"
    ],
    "summary": {
      "en": "Hy-MT2-7B leads XCOMET on WMT25, while 30B-A3B leads GEMBA. The preferred model depends on how translation quality is judged.",
      "tr": "WMT25’te XCOMET ölçüsünde Hy-MT2-7B, GEMBA ölçüsünde 30B-A3B önde. Tercih, çeviri kalitesinin nasıl ölçüldüğüne bağlı."
    },
    "limitation": {
      "en": "The aggregate does not establish superiority for every language pair; NLLB’s wider language coverage is a separate requirement.",
      "tr": "Ortalama sonuç her dil çifti için üstünlük kurmaz; NLLB’nin daha geniş dil kapsamı ayrı bir gereksinimdir."
    },
    "sourceIds": [
      "bm-hymt",
      "bm-card-hymt7",
      "bm-card-hymt30",
      "ow-nllb",
      "ow-seamless"
    ]
  },
  {
    "taskId": "text-summarization",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "deepseek41",
      "bart"
    ],
    "summary": {
      "en": "BART CNN/DailyMail remains a reproducible news-summary specialist; current instruction models can also summarize with a suitable prompt.",
      "tr": "BART CNN/DailyMail tekrarlanabilir bir haber özetleme uzmanıdır; güncel yönerge modelleri de uygun istemle özetleyebilir."
    },
    "limitation": {
      "en": "News ROUGE, long-context fidelity and human preference are different targets. No shared current benchmark tied to these exact releases was verified.",
      "tr": "Haber ROUGE puanı, uzun bağlamda sadakat ve insan tercihi farklı hedeflerdir. Bu tam sürümlere bağlı ortak güncel benchmark doğrulanamadı."
    },
    "sourceIds": [
      "ow-qwen38",
      "ow-deepseek41",
      "ow-bart"
    ]
  },
  {
    "taskId": "multi-document-summarization",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "primeramulti",
      "primera",
      "bart"
    ],
    "summary": {
      "en": "PRIMERA fine-tuned on Multi-News beats its zero-shot version on the same HF evaluation; it is a more direct fit than single-document BART.",
      "tr": "Multi-News üzerinde ince ayarlı PRIMERA aynı HF değerlendirmesinde sıfır örnekli sürümünü geçiyor; tek belgeli BART’a göre göreve daha doğrudan uyuyor."
    },
    "limitation": {
      "en": "This demonstrates task-specific fine-tuning, not leadership over today’s long-context LLMs or evidence-faithfulness guarantees.",
      "tr": "Bu sonuç göreve özgü ince ayarı gösterir; bugünün uzun bağlamlı LLM’lerine üstünlük veya kanıta sadakat garantisi değildir."
    },
    "sourceIds": [
      "bm-card-primeramulti",
      "bm-card-primera",
      "ow-bart"
    ]
  },
  {
    "taskId": "grammatical-error-correction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "coeditxl",
      "coedit"
    ],
    "summary": {
      "en": "CoEdIT XL improves JFLEG GLEU over large, with a larger model and the same editing evaluation.",
      "tr": "CoEdIT XL daha büyük model ve aynı düzenleme değerlendirmesiyle large sürümünün JFLEG GLEU puanını yükseltiyor."
    },
    "limitation": {
      "en": "The reference is English and historical; it cannot rank Turkish correction or newer LLMs without a matched test.",
      "tr": "Referans İngilizce ve tarihseldir; eşleşen test olmadan Türkçe düzeltmeyi veya yeni LLM’leri sıralayamaz."
    },
    "sourceIds": [
      "bm-coedit",
      "bm-card-coeditxl",
      "ow-coedit"
    ]
  },
  {
    "taskId": "question-answering",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "deepseek41"
    ],
    "summary": {
      "en": "Qwen3.8-27B improves GPQA Diamond over Qwen3.6-27B in the publisher’s same-size comparison.",
      "tr": "Qwen3.8-27B, yayıncının aynı boyuttaki karşılaştırmasında Qwen3.6-27B’ye göre GPQA Diamond puanını yükseltiyor."
    },
    "limitation": {
      "en": "GPQA is expert multiple-choice science QA; it does not measure cited retrieval answers, open-domain factuality or all frontier models.",
      "tr": "GPQA uzman düzeyinde çoktan seçmeli bilim sorularıdır; kaynaklı bilgi getirme yanıtlarını, genel olgusal doğruluğu veya tüm üst düzey modelleri ölçmez."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-deepseek41"
    ]
  },
  {
    "taskId": "dialogue-response-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "deepseek41",
      "olmo2-dpo",
      "llama31-rlhf"
    ],
    "summary": {
      "en": "Qwen3.8 is a current instruction-following candidate; the IFBench result supports a specific response-control capability.",
      "tr": "Qwen3.8 güncel bir yönerge takibi adayıdır; IFBench sonucu belirli bir yanıt kontrolü yeteneğini destekler."
    },
    "limitation": {
      "en": "Single-turn instruction compliance is not multi-turn conversational preference. OLMo DPO and Llama RLHF are alignment examples, not benchmark winners here.",
      "tr": "Tek turlu yönerge uyumu çok turlu sohbet tercihi değildir. OLMo DPO ve Llama RLHF burada hizalama örnekleridir; benchmark liderleri değildir."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-deepseek41",
      "ow-olmo2-dpo",
      "ow-llama31-rlhf"
    ]
  },
  {
    "taskId": "semantic-textual-similarity",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "embedding",
      "emb4",
      "glove-factors"
    ],
    "summary": {
      "en": "Qwen3-Embedding-4B narrowly leads 8B in the published English STS aggregate, illustrating that size alone does not determine quality.",
      "tr": "Qwen3-Embedding-4B yayımlanmış İngilizce STS ortalamasında 8B’nin az farkla önünde; boyut tek başına kaliteyi belirlemiyor."
    },
    "limitation": {
      "en": "The small difference has no uncertainty interval here; multilingual STS and retrieval have different rankings.",
      "tr": "Küçük fark için burada belirsizlik aralığı yok; çok dilli STS ve bilgi getirmede sıralamalar farklıdır."
    },
    "sourceIds": [
      "bm-card-embedding",
      "ow-embedding",
      "bm-card-emb4",
      "ow-glove-factors",
      "ow-glove-method",
      "ow-glove-paper"
    ]
  },
  {
    "taskId": "document-retrieval",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "embedding",
      "emb4"
    ],
    "summary": {
      "en": "Qwen3-Embedding-8B leads 4B in the shared MTEB retrieval aggregate and is a documented dense-retrieval candidate.",
      "tr": "Qwen3-Embedding-8B ortak MTEB bilgi getirme ortalamasında 4B’yi geçiyor ve belgelenmiş yoğun bilgi getirme adayıdır."
    },
    "limitation": {
      "en": "The aggregate combines datasets; chunking, query instructions and language can change document-retrieval quality.",
      "tr": "Ortalama farklı veri kümelerini birleştirir; parçalama, sorgu yönergeleri ve dil belge getirme kalitesini değiştirebilir."
    },
    "sourceIds": [
      "bm-card-embedding",
      "ow-embedding",
      "bm-card-emb4"
    ]
  },
  {
    "taskId": "passage-retrieval",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "embedding",
      "emb4"
    ],
    "summary": {
      "en": "Qwen3-Embedding-8B has stronger aggregate retrieval evidence than 4B in the selected release table.",
      "tr": "Seçili sürüm tablosunda Qwen3-Embedding-8B’nin toplam bilgi getirme kanıtı 4B’den daha güçlü."
    },
    "limitation": {
      "en": "MTEB retrieval is a mixed category, not a passage-only MS MARCO result; no passage-specific winner is inferred.",
      "tr": "MTEB bilgi getirme karma bir kategoridir; yalnız pasajlardan oluşan MS MARCO sonucu değildir. Pasaja özgü lider sonucu çıkarılmaz."
    },
    "sourceIds": [
      "bm-card-embedding",
      "ow-embedding",
      "bm-card-emb4"
    ]
  },
  {
    "taskId": "re-ranking",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "reranker",
      "rerank4"
    ],
    "summary": {
      "en": "Qwen3-Reranker-4B leads 8B on MTEB-R; the 8B model does not win every retrieval metric.",
      "tr": "Qwen3-Reranker-4B MTEB-R’de 8B’yi geçiyor; 8B model her bilgi getirme ölçüsünü kazanmıyor."
    },
    "limitation": {
      "en": "This is the 2025 release evaluation, not a continuously updated leaderboard; first-stage recall bounds the result.",
      "tr": "Bu, 2025 sürüm değerlendirmesidir; sürekli güncellenen sıralama değildir. İlk aşama getirme kapsamı sonucu sınırlar."
    },
    "sourceIds": [
      "bm-card-reranker",
      "ow-reranker",
      "bm-card-rerank4"
    ]
  },
  {
    "taskId": "query-expansion",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38"
    ],
    "summary": {
      "en": "Qwen3.8 can generate expansions, but its benefit must be measured together with the target retriever and corpus.",
      "tr": "Qwen3.8 sorgu genişletmeleri üretebilir; yararı hedef getirici ve korpusla birlikte ölçülmelidir."
    },
    "limitation": {
      "en": "MQR-A1 reports strong BRIGHT pipeline scores, but the inspected repository revision contains no released weight files. It is excluded from the open-weight ranking; a rewrite score would not isolate expansion anyway.",
      "tr": "MQR-A1 güçlü BRIGHT işlem hattı puanları bildiriyor; ancak incelenen depo sürümünde yayımlanmış ağırlık dosyası yok. Açık ağırlıklı sıralamaya alınmadı; yeniden yazma puanı da genişletmenin etkisini tek başına ayırmaz."
    },
    "sourceIds": [
      "bm-card-mqr",
      "ow-qwen38"
    ]
  },
  {
    "taskId": "top-k-recommendation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "p5-beauty-small"
    ],
    "summary": {
      "en": "P5 Beauty Small is a downloadable recommendation checkpoint for the Beauty corpus and its prompt/task conventions.",
      "tr": "P5 Beauty Small, Beauty korpusu ve onun istem/görev kuralları için indirilebilir bir öneri checkpoint’idir."
    },
    "limitation": {
      "en": "Top-k results depend on candidate sampling, temporal split, prompt and exact task checkpoint. Paper-wide P5 best scores cannot be assigned to this one artifact.",
      "tr": "Top-k sonuçları aday örnekleme, zaman bölümü, istem ve tam görev checkpoint’ine bağlıdır. Makaledeki en iyi P5 puanları bu tek dosyaya atanamaz."
    },
    "sourceIds": [
      "ow-p5-beauty-small",
      "ow-p5-author-release",
      "ow-p5-beauty-evaluation",
      "ow-p5-beauty-config"
    ]
  },
  {
    "taskId": "rating-prediction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "p5-beauty-small"
    ],
    "summary": {
      "en": "P5 Beauty Small is an executable starting point for corpus-specific rating prediction.",
      "tr": "P5 Beauty Small korpusa özgü puan tahmini için çalıştırılabilir bir başlangıç noktasıdır."
    },
    "limitation": {
      "en": "RMSE/MAE require the exact rating prompt and split. Recommendation hit-rate scores are not rating accuracy, and no current matched comparison was verified.",
      "tr": "RMSE/MAE için tam puanlama istemi ve veri bölümü gerekir. Öneri isabet oranı puan tahmini doğruluğu değildir; güncel eşleşen karşılaştırma doğrulanamadı."
    },
    "sourceIds": [
      "ow-p5-beauty-small",
      "ow-p5-author-release",
      "ow-p5-beauty-evaluation",
      "ow-p5-beauty-config"
    ]
  },
  {
    "taskId": "image-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "siglip",
      "mlp-mixer",
      "resnet50-ssl",
      "jem"
    ],
    "summary": {
      "en": "SigLIP 2 is a flexible image-text classifier; supervised ResNet and MLP-Mixer checkpoints are useful fixed-label alternatives.",
      "tr": "SigLIP 2 esnek bir görüntü-metin sınıflandırıcısıdır; gözetimli ResNet ve MLP-Mixer checkpoint’leri sabit etiketli alternatiflerdir."
    },
    "limitation": {
      "en": "Zero-shot prompt-ensemble accuracy and supervised ImageNet top-1 use different training and label access; no unified rank is assigned.",
      "tr": "Sıfır örnekli çoklu istem doğruluğu ve gözetimli ImageNet top-1 farklı eğitim ve etiket erişimi kullanır; ortak sıra atanmaz."
    },
    "sourceIds": [
      "ow-siglip",
      "ow-mlp-mixer",
      "ow-resnet50-ssl",
      "ow-jem",
      "ow-ssl-method"
    ]
  },
  {
    "taskId": "object-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "dino",
      "sam3"
    ],
    "summary": {
      "en": "Grounding DINO supports open-vocabulary boxes; SAM 3 supports prompted concepts and masks. They serve different detection contracts.",
      "tr": "Grounding DINO açık sözlüklü kutuları; SAM 3 istemle belirtilen kavram ve maskeleri destekler. Farklı algılama koşullarına yöneliktirler."
    },
    "limitation": {
      "en": "Closed-label COCO AP, open-vocabulary grounding and prompted segmentation cannot be treated as the same task score; exact matched release evidence is missing.",
      "tr": "Kapalı etiketli COCO AP, açık sözlüklü grounding ve istemli segmentasyon aynı görev puanı değildir; tam eşleşen sürüm kanıtı eksik."
    },
    "sourceIds": [
      "ow-dino",
      "ow-sam3"
    ]
  },
  {
    "taskId": "semantic-segmentation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "mask2former",
      "mask2formertiny"
    ],
    "summary": {
      "en": "Mask2Former Swin-L leads Swin-T in the same ADE20K model zoo, with more pretraining and a larger backbone.",
      "tr": "Mask2Former Swin-L aynı ADE20K model koleksiyonunda daha fazla ön eğitim ve daha büyük omurgayla Swin-T’yi geçiyor."
    },
    "limitation": {
      "en": "The comparison is historical and does not establish leadership over 2026 segmentation models; single-scale and multi-scale scores remain separate.",
      "tr": "Karşılaştırma tarihseldir ve 2026 segmentasyon modellerine üstünlük kurmaz; tek ölçek ve çoklu ölçek puanları ayrı tutulur."
    },
    "sourceIds": [
      "bm-mask",
      "ow-mask2former",
      "bm-card-mask2formertiny"
    ]
  },
  {
    "taskId": "instance-segmentation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "sam3"
    ],
    "summary": {
      "en": "SAM 3 offers released promptable instance masks and concept segmentation.",
      "tr": "SAM 3 yayımlanmış istemli nesne maskeleri ve kavram segmentasyonu sunar."
    },
    "limitation": {
      "en": "Prompted mask quality, concept recall and closed-set COCO instance AP are different measurements; no same-protocol current comparison was verified.",
      "tr": "İstemli maske kalitesi, kavram yakalama oranı ve kapalı kümeli COCO nesne AP farklı ölçümlerdir; aynı protokolde güncel karşılaştırma doğrulanamadı."
    },
    "sourceIds": [
      "ow-sam3"
    ]
  },
  {
    "taskId": "depth-estimation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "marigold2",
      "depth"
    ],
    "summary": {
      "en": "Marigold V2 adds a September 2026 released depth adapter with strong ETH3D relative-depth evidence; DA3-large remains a multi-view-capable alternative.",
      "tr": "Marigold V2, Eylül 2026’da yayımlanmış ve ETH3D göreli derinlik kanıtı güçlü bir adaptör ekliyor; DA3-large çoklu görüntü yetenekli alternatiftir."
    },
    "limitation": {
      "en": "The selected score follows ground-truth alignment. It is not a metric-depth accuracy claim or a matched DA3 comparison.",
      "tr": "Seçili puan gerçek derinliğe hizalama sonrası hesaplanır. Metrik derinlik doğruluğu iddiası veya eşleşen DA3 karşılaştırması değildir."
    },
    "sourceIds": [
      "bm-marigold",
      "bm-card-marigold2",
      "ow-depth"
    ]
  },
  {
    "taskId": "keypoint-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "pose",
      "posebase",
      "dlib-five"
    ],
    "summary": {
      "en": "ViTPose+ huge improves COCO AP over base under the shared model-zoo configuration.",
      "tr": "ViTPose+ huge ortak model koleksiyonu ayarlarında base sürümüne göre COCO AP’yi yükseltiyor."
    },
    "limitation": {
      "en": "Human body keypoints differ from animal, whole-body and five-point facial landmarks; this historical body-pose result cannot rank all of them.",
      "tr": "İnsan vücut noktaları hayvan, tüm vücut ve beş noktalı yüz işaretlerinden farklıdır; tarihsel vücut poz sonucu hepsini sıralayamaz."
    },
    "sourceIds": [
      "bm-pose",
      "ow-pose",
      "bm-card-posebase",
      "ow-dlib-five",
      "ow-dlib-five-training"
    ]
  },
  {
    "taskId": "video-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "videomae"
    ],
    "summary": {
      "en": "VideoMAE large is a released Kinetics-400 action classifier with task-specific fine-tuning.",
      "tr": "VideoMAE large, göreve özgü ince ayarlı ve yayımlanmış bir Kinetics-400 eylem sınıflandırıcısıdır."
    },
    "limitation": {
      "en": "HF conversion and original model-zoo scores differ; frames, test views and checkpoint identity must be reconciled before ranking current video encoders.",
      "tr": "HF dönüşümü ile özgün model koleksiyonu puanları farklı; güncel video kodlayıcılarını sıralamadan önce kareler, test görünümleri ve checkpoint kimliği eşleştirilmeli."
    },
    "sourceIds": [
      "ow-videomae"
    ]
  },
  {
    "taskId": "optical-character-recognition",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "ocr"
    ],
    "summary": {
      "en": "Qwen3.8 improves OmniDocBench 1.5 over Qwen3.6; PaddleOCR-VL-1.6 remains a task-focused document parsing candidate.",
      "tr": "Qwen3.8 OmniDocBench 1.5’te Qwen3.6’yı geçiyor; PaddleOCR-VL-1.6 göreve odaklı belge ayrıştırma adayıdır."
    },
    "limitation": {
      "en": "The overall document score combines layout and content elements; it is not character-error rate or proof that Qwen beats PaddleOCR on pure OCR.",
      "tr": "Genel belge puanı yerleşim ve içerik bileşenlerini birleştirir; karakter hata oranı veya Qwen’in saf OCR’de PaddleOCR’yi geçtiğinin kanıtı değildir."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-ocr"
    ]
  },
  {
    "taskId": "image-captioning",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38"
    ],
    "summary": {
      "en": "Qwen3.8 can describe images through its documented visual-language interface.",
      "tr": "Qwen3.8 belgelenmiş görsel-dil arayüzüyle görüntü açıklaması üretebilir."
    },
    "limitation": {
      "en": "RealWorldQA and OmniDocBench do not measure caption quality. A matched CIDEr/SPICE or human-preference caption test was not verified for these releases.",
      "tr": "RealWorldQA ve OmniDocBench açıklama kalitesini ölçmez. Bu sürümler için eşleşen CIDEr/SPICE veya insan tercihli açıklama testi doğrulanamadı."
    },
    "sourceIds": [
      "ow-qwen38"
    ]
  },
  {
    "taskId": "visual-question-answering",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36"
    ],
    "summary": {
      "en": "Qwen3.8-27B leads Qwen3.6-27B on RealWorldQA in the same release comparison.",
      "tr": "Qwen3.8-27B aynı sürüm karşılaştırmasında RealWorldQA’da Qwen3.6-27B’yi geçiyor."
    },
    "limitation": {
      "en": "This visual QA subset does not cover every chart, document or spatial reasoning setting; larger open-weight models may rank differently.",
      "tr": "Bu görsel soru yanıtlama alt kümesi her grafik, belge veya uzamsal akıl yürütme düzenini kapsamaz; daha büyük açık ağırlıklı modellerin sırası farklı olabilir."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36"
    ]
  },
  {
    "taskId": "document-question-answering",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38"
    ],
    "summary": {
      "en": "Qwen3.8 supports document-image input and is a current multimodal candidate.",
      "tr": "Qwen3.8 belge görüntüsü girdisini destekler ve güncel çok modlu adaydır."
    },
    "limitation": {
      "en": "OmniDocBench measures parsing, not question-answering ANLS. No exact current DocVQA/InfographicVQA comparison was verified; parsing scores are deliberately not reused.",
      "tr": "OmniDocBench ayrıştırmayı ölçer, soru yanıtlama ANLS’yi değil. Güncel tam DocVQA/InfographicVQA karşılaştırması doğrulanamadı; ayrıştırma puanları yeniden kullanılmıyor."
    },
    "sourceIds": [
      "ow-qwen38"
    ]
  },
  {
    "taskId": "text-to-image-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "fluxklein9",
      "fluxklein4",
      "qwenimage21",
      "image"
    ],
    "summary": {
      "en": "Klein 9B leads 4B on GenEval in the selected shared comparison. Qwen-Image-2.1 is a newer released candidate with generation and editing support.",
      "tr": "Klein 9B seçili ortak karşılaştırmada GenEval’de 4B’yi geçiyor. Qwen-Image-2.1 üretim ve düzenleme destekleyen daha yeni yayımlanmış adaydır."
    },
    "limitation": {
      "en": "GenEval tests prompt composition. The newer Qwen card lacks a matching numeric row, so it is not assigned a synthetic score or global rank.",
      "tr": "GenEval istem bileşimini ölçer. Yeni Qwen kartında eşleşen sayısal satır yok; bu nedenle yapay puan veya küresel sıra atanmaz."
    },
    "sourceIds": [
      "bm-mage",
      "bm-card-fluxklein9",
      "bm-card-fluxklein4",
      "bm-card-qwenimage21",
      "ow-image"
    ]
  },
  {
    "taskId": "image-to-image-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "imageedit",
      "fluxklein9",
      "fluxklein4",
      "qwenimage21",
      "glow"
    ],
    "summary": {
      "en": "Qwen-Image-Edit-2511 leads the selected ImgEdit rows, while Klein 9B leads their GEdit-English rows; evaluation preference changes the recommendation.",
      "tr": "Qwen-Image-Edit-2511 seçili ImgEdit satırlarında, Klein 9B ise GEdit-English satırlarında önde; değerlendirme tercihi öneriyi değiştiriyor."
    },
    "limitation": {
      "en": "Qwen uses 50 steps and Klein uses four. Qwen-Image-2.1 is also released, but no matching row was verified for it.",
      "tr": "Qwen 50, Klein dört adım kullanıyor. Qwen-Image-2.1 de yayımlanmış durumda; ancak onun için eşleşen satır doğrulanamadı."
    },
    "sourceIds": [
      "bm-mage",
      "ow-imageedit",
      "bm-card-fluxklein9",
      "bm-card-fluxklein4",
      "bm-card-qwenimage21",
      "ow-glow",
      "ow-glow-download",
      "ow-glow-inference"
    ]
  },
  {
    "taskId": "image-inpainting",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "moebius",
      "fill"
    ],
    "summary": {
      "en": "Moebius Places2 has a slightly lower reported FID than FLUX.1 Fill dev for small masks with fewer sampling steps.",
      "tr": "Moebius Places2 küçük maskelerde daha az örnekleme adımıyla FLUX.1 Fill dev’den biraz daha düşük FID bildiriyor."
    },
    "limitation": {
      "en": "This dataset-specific fine-tune and tiny FID gap do not establish a general inpainting champion; large masks and text-guided edits need separate tests.",
      "tr": "Veri kümesine özgü bu ince ayar ve çok küçük FID farkı genel doldurma lideri kurmaz; büyük maskeler ve metinle düzenleme ayrı test gerektirir."
    },
    "sourceIds": [
      "bm-moebius",
      "bm-card-moebius",
      "ow-fill"
    ]
  },
  {
    "taskId": "text-to-video-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "ltx23",
      "wan"
    ],
    "summary": {
      "en": "LTX-2.3 adds a released 22B video/audio generator alongside Wan2.2 TI2V-5B; hardware and output requirements differ.",
      "tr": "LTX-2.3, Wan2.2 TI2V-5B yanına yayımlanmış 22B video/ses üreticisi ekliyor; donanım ve çıktı gereksinimleri farklı."
    },
    "limitation": {
      "en": "The inspected LTX card gives no matched VBench score. Wan A14B results cannot be assigned to TI2V-5B; no numeric winner is declared.",
      "tr": "İncelenen LTX kartı eşleşen VBench puanı vermiyor. Wan A14B sonuçları TI2V-5B’ye atanamaz; sayısal lider ilan edilmez."
    },
    "sourceIds": [
      "bm-card-ltx23",
      "ow-wan"
    ]
  },
  {
    "taskId": "image-to-video-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "ltx23",
      "wan"
    ],
    "summary": {
      "en": "LTX-2.3 and Wan2.2 TI2V-5B both provide released image-conditioned video generation paths.",
      "tr": "LTX-2.3 ve Wan2.2 TI2V-5B yayımlanmış görüntü koşullu video üretim yolları sağlar."
    },
    "limitation": {
      "en": "T2V scores do not measure first-frame consistency or motion following in I2V. No matched I2V benchmark for these exact variants was verified.",
      "tr": "T2V puanları I2V ilk kare tutarlılığını veya hareket takibini ölçmez. Bu tam sürümler için eşleşen I2V benchmark’ı doğrulanamadı."
    },
    "sourceIds": [
      "bm-card-ltx23",
      "ow-wan"
    ]
  },
  {
    "taskId": "text-to-3d-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "shape"
    ],
    "summary": {
      "en": "Shap-E remains a verifiable released text-to-implicit-3D checkpoint.",
      "tr": "Shap-E doğrulanabilir, yayımlanmış bir metinden örtük 3B temsile üretim checkpoint’idir."
    },
    "limitation": {
      "en": "Many newer 3D releases are image-to-3D or generate CAD/Blender code. Their geometry, texture and code-success scores do not provide a matched text-to-3D ranking here.",
      "tr": "Birçok yeni 3B sürüm görüntüden 3B üretir veya CAD/Blender kodu üretir. Geometri, doku ve kod başarısı puanları burada eşleşen metinden 3B sıralaması sağlamaz."
    },
    "sourceIds": [
      "ow-shape"
    ]
  },
  {
    "taskId": "automatic-speech-recognition",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "asrhf",
      "asr06hf",
      "asr",
      "pocketsphinx"
    ],
    "summary": {
      "en": "The 1.7B Transformers Qwen3-ASR release has lower mean English WER than 0.6B in the shared Open ASR evaluation.",
      "tr": "Transformers Qwen3-ASR 1.7B sürümü ortak Open ASR değerlendirmesinde 0.6B’den daha düşük ortalama İngilizce WER gösteriyor."
    },
    "limitation": {
      "en": "Conversion/runtime and language matter; these rows are not the original Qwen inference table or a Turkish benchmark.",
      "tr": "Dönüşüm/çalıştırma ortamı ve dil önemlidir; bu satırlar özgün Qwen çıkarım tablosu veya Türkçe benchmark değildir."
    },
    "sourceIds": [
      "bm-card-asrhf",
      "bm-card-asr06hf",
      "ow-asr",
      "ow-pocketsphinx",
      "ow-pocketsphinx-usage"
    ]
  },
  {
    "taskId": "speech-translation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "seamless"
    ],
    "summary": {
      "en": "SeamlessM4T v2 large is a released specialist for speech-to-text and speech-to-speech translation.",
      "tr": "SeamlessM4T v2 large konuşmadan metne ve konuşmadan konuşmaya çeviri için yayımlanmış uzman modeldir."
    },
    "limitation": {
      "en": "ASR WER and text-only Hy-MT COMET cannot rank speech translation; language direction, transcription pipeline and BLEU/ASR-BLEU protocol must match.",
      "tr": "ASR WER ve yalnız metinli Hy-MT COMET konuşma çevirisini sıralayamaz; dil yönü, transkripsiyon hattı ve BLEU/ASR-BLEU protokolü eşleşmeli."
    },
    "sourceIds": [
      "ow-seamless"
    ]
  },
  {
    "taskId": "keyword-spotting",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "keyword"
    ],
    "summary": {
      "en": "The released wav2vec 2.0 SUPERB head has a traceable Speech Commands test result.",
      "tr": "Yayımlanmış wav2vec 2.0 SUPERB başlığının izlenebilir Speech Commands test sonucu var."
    },
    "limitation": {
      "en": "This historical accuracy does not establish the best always-on wake-word system; false alarms, vocabulary, noise and device cost are unmeasured here.",
      "tr": "Bu tarihsel doğruluk en iyi sürekli açık uyandırma sözcüğü sistemini belirlemez; yanlış alarm, sözlük, gürültü ve cihaz maliyeti burada ölçülmüyor."
    },
    "sourceIds": [
      "bm-card-keyword",
      "ow-keyword"
    ]
  },
  {
    "taskId": "speech-emotion-recognition",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "emotion"
    ],
    "summary": {
      "en": "HuBERT large has a traceable SUPERB emotion head and a reported session-specific accuracy.",
      "tr": "HuBERT large izlenebilir SUPERB duygu başlığı ve raporlanmış oturuma özgü doğruluk sunar."
    },
    "limitation": {
      "en": "IEMOCAP session1 is not a five-fold mean or evidence of reliable emotion inference across languages and real users.",
      "tr": "IEMOCAP session1 beş katlı ortalama veya diller ve gerçek kullanıcılar arasında güvenilir duygu çıkarımı kanıtı değildir."
    },
    "sourceIds": [
      "bm-card-emotion",
      "ow-emotion"
    ]
  },
  {
    "taskId": "audio-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "audiomosaic",
      "ast"
    ],
    "summary": {
      "en": "AudioMosaic adds a 2026 AudioSet-2M fine-tuned checkpoint with a published 50.19 mAP result.",
      "tr": "AudioMosaic, yayımlanmış 50.19 mAP sonucu olan 2026 AudioSet-2M ince ayarlı checkpoint’i ekliyor."
    },
    "limitation": {
      "en": "AST and AudioMosaic training/augmentation recipes need a common rerun or exact paper mapping before declaring a pairwise winner.",
      "tr": "AST ve AudioMosaic eğitim/artırma reçeteleri için ortak yeniden değerlendirme veya tam makale eşlemesi gerekir; bundan önce ikili lider ilan edilmez."
    },
    "sourceIds": [
      "bm-card-audiomosaic",
      "ow-ast"
    ]
  },
  {
    "taskId": "speaker-identification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "redimnet",
      "ecapa"
    ],
    "summary": {
      "en": "ECAPA and ReDimNet2+ embeddings can support enrolled-speaker identification with an explicit enrollment and scoring layer.",
      "tr": "ECAPA ve ReDimNet2+ gömmeleri açık bir kayıt ve puanlama katmanıyla kayıtlı konuşmacı tanımayı destekleyebilir."
    },
    "limitation": {
      "en": "Verification EER measures same/different pairs, not closed-set identification accuracy or unknown-speaker rejection. No matching identification benchmark was verified.",
      "tr": "Doğrulama EER’si aynı/farklı çiftlerini ölçer; kapalı küme kimlik doğruluğunu veya bilinmeyen konuşmacı reddini değil. Eşleşen kimlik benchmark’ı doğrulanamadı."
    },
    "sourceIds": [
      "bm-card-redimnet",
      "ow-ecapa"
    ]
  },
  {
    "taskId": "speaker-verification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "redimnet",
      "ecapa"
    ],
    "summary": {
      "en": "ReDimNet2+ is a current released candidate with low reported VoxCeleb1-O EER under a four-second-window protocol.",
      "tr": "ReDimNet2+ dört saniyelik pencere protokolünde düşük VoxCeleb1-O EER bildiren güncel yayımlanmış adaydır."
    },
    "limitation": {
      "en": "The comparison baselines are not uniquely tied to released checkpoints; ECAPA full-utterance numbers are not merged into this table.",
      "tr": "Karşılaştırma tabanları yayımlanmış checkpoint’lere benzersiz bağlanmıyor; ECAPA tam konuşma puanları bu tabloya birleştirilmiyor."
    },
    "sourceIds": [
      "bm-card-redimnet",
      "ow-ecapa"
    ]
  },
  {
    "taskId": "speaker-diarization",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "diarization",
      "pyannote31",
      "audar"
    ],
    "summary": {
      "en": "Community-1 improves the no-collar AMI result over legacy 3.1. Audar supplies a newer streaming comparison under a different scoring protocol.",
      "tr": "Community-1 toleranssız AMI sonucunda legacy 3.1’i geçiyor. Audar farklı puanlama protokolünde daha yeni bir akış karşılaştırması sağlıyor."
    },
    "limitation": {
      "en": "Overlap exclusion, forgiveness collar and corpus selection materially change DER; leaders are local to each table.",
      "tr": "Örtüşmenin çıkarılması, zaman toleransı ve korpus seçimi DER’yi belirgin değiştirir; liderlik her tabloyla sınırlıdır."
    },
    "sourceIds": [
      "bm-card-diarization",
      "bm-card-audar",
      "ow-diarization",
      "bm-card-pyannote31"
    ]
  },
  {
    "taskId": "text-to-speech",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "tts",
      "ttscv06"
    ],
    "summary": {
      "en": "Qwen3-TTS 1.7B CustomVoice has lower English WER than 0.6B in the matched target-speaker table.",
      "tr": "Qwen3-TTS 1.7B CustomVoice eşleşen hedef konuşmacı tablosunda 0.6B’den daha düşük İngilizce WER gösteriyor."
    },
    "limitation": {
      "en": "Intelligibility is only one criterion. Naturalness, voice similarity, streaming delay and Turkish quality need separate evidence.",
      "tr": "Anlaşılabilirlik yalnızca bir ölçüttür. Doğallık, ses benzerliği, akış gecikmesi ve Türkçe kalite ayrı kanıt gerektirir."
    },
    "sourceIds": [
      "bm-card-tts",
      "ow-tts",
      "bm-card-ttscv06"
    ]
  },
  {
    "taskId": "speech-enhancement",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "driftse",
      "driftse-aux",
      "enhancement"
    ],
    "summary": {
      "en": "The auxiliary-loss DriftSE† checkpoint improves both PESQ and SI-SDR over the released base DistilHuBERT variant.",
      "tr": "Yardımcı kayıplı DriftSE† checkpoint’i yayımlanmış taban DistilHuBERT sürümüne göre hem PESQ hem SI-SDR’yi yükseltiyor."
    },
    "limitation": {
      "en": "These are matched one-step in-domain variants; the selected subset does not include every stronger PESQ model or establish out-of-domain leadership.",
      "tr": "Bunlar aynı tek adımlı, eğitim alanına yakın sürümlerdir; seçili alt küme daha güçlü tüm PESQ modellerini içermez ve alan dışı liderlik kurmaz."
    },
    "sourceIds": [
      "bm-card-driftse",
      "ow-enhancement"
    ]
  },
  {
    "taskId": "speech-separation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "separation"
    ],
    "summary": {
      "en": "SepFormer WHAMR! provides a specific released two-speaker noisy/reverberant separation checkpoint and SI-SNR improvement.",
      "tr": "SepFormer WHAMR! gürültülü/yankılı iki konuşmacı ayırmaya özgü yayımlanmış checkpoint ve SI-SNR iyileşmesi sunar."
    },
    "limitation": {
      "en": "Clean WSJ0-2mix scores, music-source separation and more-speaker mixtures are different conditions; this historical row cannot rank them.",
      "tr": "Temiz WSJ0-2mix puanları, müzik kaynak ayırma ve daha fazla konuşmacı farklı koşullardır; bu tarihsel satır onları sıralayamaz."
    },
    "sourceIds": [
      "bm-card-separation",
      "ow-separation"
    ]
  },
  {
    "taskId": "voice-conversion",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "voice",
      "knnvc"
    ],
    "summary": {
      "en": "Seed-VC v2 and kNN-VC provide released conversion pipelines with different generation and retrieval approaches.",
      "tr": "Seed-VC v2 ve kNN-VC farklı üretim ve getirme yaklaşımlarıyla yayımlanmış dönüştürme hatları sağlar."
    },
    "limitation": {
      "en": "Source/target speakers, reference duration, vocoder and speaker-similarity evaluator must match; no shared current table for these artifacts was verified.",
      "tr": "Kaynak/hedef konuşmacılar, referans süresi, vokoder ve konuşmacı benzerliği ölçücüsü eşleşmeli; bu dosyalar için ortak güncel tablo doğrulanamadı."
    },
    "sourceIds": [
      "ow-voice",
      "ow-knnvc",
      "ow-seed-docs",
      "ow-knnvc-loader",
      "ow-knnvc-paper"
    ]
  },
  {
    "taskId": "text-to-audio-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "audiogen"
    ],
    "summary": {
      "en": "AudioGen medium is a released environmental-sound generation checkpoint with a defined audio tokenizer and sampling pipeline.",
      "tr": "AudioGen medium belirli bir ses tokenizer’ı ve örnekleme hattıyla yayımlanmış çevresel ses üretim checkpoint’idir."
    },
    "limitation": {
      "en": "FAD depends on embedding model, reference audio, duration and sampling count. Incompatible newer FAD or TTS scores are not used to declare a winner.",
      "tr": "FAD gömme modeline, referans sese, süreye ve örnek sayısına bağlıdır. Uyumsuz yeni FAD veya TTS puanları lider ilan etmek için kullanılmaz."
    },
    "sourceIds": [
      "ow-audiogen"
    ]
  },
  {
    "taskId": "conditional-music-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "ace",
      "musicgen"
    ],
    "summary": {
      "en": "ACE-Step 1.5 offers newer text/lyric-controlled music generation; MusicGen large is a documented text-conditioned baseline.",
      "tr": "ACE-Step 1.5 daha yeni metin/şarkı sözü kontrollü müzik üretimi sunar; MusicGen large belgelenmiş metin koşullu referanstır."
    },
    "limitation": {
      "en": "The ACE card’s qualitative quality labels are not numerical benchmarks. Vocal/song and instrumental tests, FAD encoders and conditioning differ; no matched rank is available.",
      "tr": "ACE kartının nitel kalite etiketleri sayısal benchmark değildir. Vokalli/şarkı ve enstrümantal testler, FAD kodlayıcıları ve koşullandırma farklı; eşleşen sıra yok."
    },
    "sourceIds": [
      "ow-ace",
      "ow-musicgen"
    ]
  },
  {
    "taskId": "text-to-code-generation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "deepseek41",
      "coder"
    ],
    "summary": {
      "en": "Qwen3.8-27B improves LiveCodeBench v6 over Qwen3.6-27B; DeepSeek-V4.1 remains a strong repository-agent candidate.",
      "tr": "Qwen3.8-27B LiveCodeBench v6’da Qwen3.6-27B’yi geçiyor; DeepSeek-V4.1 güçlü bir depo ajanı adayı olmaya devam ediyor."
    },
    "limitation": {
      "en": "Programming-contest pass rate and agentic repository success are distinct. This table does not establish one best coding model for every workflow.",
      "tr": "Programlama yarışması başarı oranı ve ajanlı depo başarısı farklıdır. Bu tablo her iş akışı için tek en iyi kod modelini belirlemez."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-deepseek41",
      "ow-coder"
    ]
  },
  {
    "taskId": "code-completion",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "coder",
      "codet5plus"
    ],
    "summary": {
      "en": "CodeT5+ 770M supports a released code-generation/completion interface; Qwen3-Coder-Next is a newer coding candidate.",
      "tr": "CodeT5+ 770M yayımlanmış kod üretimi/tamamlama arayüzü sunar; Qwen3-Coder-Next daha yeni kodlama adayıdır."
    },
    "limitation": {
      "en": "Repository agent benchmarks do not measure fill-in-the-middle completion, edit latency or keystroke savings; no matched completion result was verified.",
      "tr": "Depo ajanı benchmark’ları arayı doldurma tamamlamasını, düzenleme gecikmesini veya tuş tasarrufunu ölçmez; eşleşen tamamlama sonucu doğrulanamadı."
    },
    "sourceIds": [
      "ow-coder",
      "ow-codet5plus"
    ]
  },
  {
    "taskId": "code-repair",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "deepseek41",
      "kimi3",
      "glm53"
    ],
    "summary": {
      "en": "DeepSeek-V4.1-Flash-1017 leads the selected open-weight rows in its October DeepSWE v1.1 table.",
      "tr": "DeepSeek-V4.1-Flash-1017 Ekim tarihli DeepSWE v1.1 tablosunda seçili açık ağırlıklı satırların önünde."
    },
    "limitation": {
      "en": "This is publisher-reported agent performance with a scaffold and tools; it is not an independently rerun comparison or a guaranteed fix rate on your repository.",
      "tr": "Bu, çalıştırma düzeni ve araçlarla yayıncı tarafından raporlanan ajan performansıdır; bağımsız yeniden test veya sizin deponuz için garantili düzeltme oranı değildir."
    },
    "sourceIds": [
      "bm-card-deepseek41",
      "ow-deepseek41",
      "bm-card-kimi3",
      "ow-glm53"
    ]
  },
  {
    "taskId": "code-translation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "codet5"
    ],
    "summary": {
      "en": "CodeT5 is a released starting backbone for translation between programming languages.",
      "tr": "CodeT5 programlama dilleri arası çeviri için yayımlanmış bir başlangıç omurgasıdır."
    },
    "limitation": {
      "en": "The base checkpoint is not the paper’s translation-fine-tuned checkpoint. CodeXGLUE BLEU without exact task weights and execution tests cannot justify a current winner.",
      "tr": "Taban checkpoint makalenin çeviri için ince ayarlanmış checkpoint’i değildir. Tam görev ağırlıkları ve çalıştırma testleri olmadan CodeXGLUE BLEU güncel lideri doğrulamaz."
    },
    "sourceIds": [
      "ow-codet5"
    ]
  },
  {
    "taskId": "text-to-sql",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "xiyan",
      "xiyan7",
      "sql"
    ],
    "summary": {
      "en": "XiYanSQL 32B leads 7B under the same BIRD dev M-Schema setting; both exact SQL-specialized releases are downloadable.",
      "tr": "XiYanSQL 32B aynı BIRD dev M-Schema düzeninde 7B’yi geçiyor; SQL’e özel iki tam sürüm de indirilebilir."
    },
    "limitation": {
      "en": "This historical single-model result does not rank current BIRD agent systems or transfer SQLCoder’s separate test-suite score.",
      "tr": "Bu tarihsel tek-model sonucu güncel BIRD ajan sistemlerini sıralamaz veya SQLCoder’ın ayrı test kümesi puanını aktarmaz."
    },
    "sourceIds": [
      "bm-card-xiyan7",
      "bm-card-xiyan",
      "ow-sql"
    ]
  },
  {
    "taskId": "code-summarization",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "coder",
      "codet5"
    ],
    "summary": {
      "en": "CodeT5 can be fine-tuned for code-to-text summaries; current coding LLMs also accept summarization prompts.",
      "tr": "CodeT5 koddan metne özetler için ince ayarlanabilir; güncel kodlama LLM’leri de özetleme istemi alabilir."
    },
    "limitation": {
      "en": "Code generation pass@1 is not summary quality. The exact released summarization head and language-specific CodeSearchNet evaluation were not verified for a current comparison.",
      "tr": "Kod üretimi pass@1 özet kalitesi değildir. Güncel karşılaştırma için yayımlanmış tam özetleme başlığı ve dile özgü CodeSearchNet değerlendirmesi doğrulanamadı."
    },
    "sourceIds": [
      "ow-coder",
      "ow-codet5"
    ]
  },
  {
    "taskId": "code-search",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "reranker",
      "rerank4",
      "embedding"
    ],
    "summary": {
      "en": "Qwen3-Reranker 8B and 4B are almost tied on the shared MTEB-Code result; embedding retrieval remains the first stage.",
      "tr": "Qwen3-Reranker 8B ve 4B ortak MTEB-Code sonucunda neredeyse eşit; gömme ile getirme ilk aşama olmaya devam eder."
    },
    "limitation": {
      "en": "The 0.02-point gap has no uncertainty estimate. Reranking a candidate set is not a standalone full-corpus code-search benchmark.",
      "tr": "0.02 puan farkı için belirsizlik tahmini yok. Aday kümesini yeniden sıralama bağımsız tam korpus kod arama benchmark’ı değildir."
    },
    "sourceIds": [
      "bm-card-reranker",
      "ow-reranker",
      "bm-card-rerank4",
      "ow-embedding"
    ]
  },
  {
    "taskId": "code-clone-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "codet5"
    ],
    "summary": {
      "en": "CodeT5 is a transferable backbone, but the catalogue’s base release is not a ready BigCloneBench classifier.",
      "tr": "CodeT5 aktarılabilir omurgadır; ancak katalogdaki taban sürüm hazır BigCloneBench sınıflandırıcısı değildir."
    },
    "limitation": {
      "en": "Clone F1 depends on negative-pair construction, split leakage and a trained classification head; paper task scores are not assigned to base weights.",
      "tr": "Klon F1 negatif çift üretimine, bölümler arası sızıntıya ve eğitilmiş sınıflandırma başlığına bağlıdır; makalenin görev puanları taban ağırlıklara atanmaz."
    },
    "sourceIds": [
      "ow-codet5"
    ]
  },
  {
    "taskId": "defect-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "codet5"
    ],
    "summary": {
      "en": "CodeT5 can initialize a defect classifier; a supervised defect head and a defined vulnerability/bug target are still needed.",
      "tr": "CodeT5 hata sınıflandırıcısını başlatabilir; gözetimli hata başlığı ve tanımlı güvenlik açığı/hata hedefi gerekir."
    },
    "limitation": {
      "en": "Code repair success and Devign/BigVul classification are different tasks. No exact current released defect checkpoint comparison was verified.",
      "tr": "Kod onarım başarısı ile Devign/BigVul sınıflandırması farklı görevlerdir. Güncel yayımlanmış tam hata checkpoint’i karşılaştırması doğrulanamadı."
    },
    "sourceIds": [
      "ow-codet5"
    ]
  },
  {
    "taskId": "classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "kumo",
      "tabpfn"
    ],
    "summary": {
      "en": "Kumo Tabular adds September 2026 benchmark evidence and public weights alongside TabPFN 3.5 for in-context tabular prediction.",
      "tr": "Kumo Tabular bağlamdan tablosal tahmin için TabPFN 3.5 yanına Eylül 2026 benchmark kanıtı ve herkese açık ağırlıklar ekliyor."
    },
    "limitation": {
      "en": "The displayed TALENT average rank is relative to the publisher’s candidate pool. A matching TabPFN-3.5 score was not verified, so no numerical head-to-head winner is shown.",
      "tr": "Gösterilen TALENT ortalama sırası yayıncının aday havuzuna göredir. Eşleşen TabPFN-3.5 puanı doğrulanamadığından sayısal ikili lider gösterilmez."
    },
    "sourceIds": [
      "bm-kumo",
      "bm-card-kumo",
      "ow-tabpfn"
    ]
  },
  {
    "taskId": "regression",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "kumo",
      "tabpfn",
      "brisque"
    ],
    "summary": {
      "en": "Kumo Tabular and TabPFN 3.5 are current tabular regression candidates; Kumo publishes a TALENT RMSE-based average rank.",
      "tr": "Kumo Tabular ve TabPFN 3.5 güncel tablosal regresyon adaylarıdır; Kumo TALENT RMSE temelli ortalama sıra yayımlar."
    },
    "limitation": {
      "en": "BRISQUE is a specific image-quality regressor and is not a competing universal tabular predictor; rank is not an RMSE in your target units.",
      "tr": "BRISQUE belirli bir görüntü kalitesi regresörüdür, evrensel tablosal tahmin rakibi değildir; sıra sizin hedef biriminizde RMSE anlamına gelmez."
    },
    "sourceIds": [
      "bm-kumo",
      "bm-card-kumo",
      "ow-tabpfn",
      "ow-brisque",
      "ow-brisque-parameters",
      "ow-brisque-docs"
    ]
  },
  {
    "taskId": "time-series-forecasting",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "timestral",
      "timestral28",
      "chronos"
    ],
    "summary": {
      "en": "Timestral-209M has lower reported MASE than Chronos-2 and Timestral-28M on both GIFT-Eval and TIME in the October 15 release.",
      "tr": "Timestral-209M, 15 Ekim sürümünde hem GIFT-Eval hem TIME üzerinde Chronos-2 ve Timestral-28M’den daha düşük MASE bildiriyor."
    },
    "limitation": {
      "en": "Timestral-28M offers a smaller candidate; domain, horizon, context and covariates still require validation. These are publisher results, not local runs.",
      "tr": "Timestral-28M daha küçük bir aday sunar; alan, ufuk, bağlam ve yardımcı değişkenler yine doğrulama gerektirir. Bunlar yayıncı sonuçlarıdır, yerel koşu değildir."
    },
    "sourceIds": [
      "bm-card-timestral",
      "bm-card-timestral28",
      "ow-chronos"
    ]
  },
  {
    "taskId": "clustering",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "scan-cifar10"
    ],
    "summary": {
      "en": "SCAN CIFAR-10 is an exact released clustering head; its labels are learned from a fixed image domain.",
      "tr": "SCAN CIFAR-10 belirli görüntü alanından öğrenilmiş etiketlerle yayımlanmış tam kümeleme başlığıdır."
    },
    "limitation": {
      "en": "SCAN-loss and subsequent self-labeling checkpoints are different. Their CIFAR scores cannot rank arbitrary-text or tabular clustering, or be interchanged.",
      "tr": "SCAN-loss ve sonraki öz etiketleme checkpoint’leri farklıdır. CIFAR puanları rastgele metin veya tablosal kümelemeyi sıralayamaz ve birbirine atanamaz."
    },
    "sourceIds": [
      "ow-scan-cifar10",
      "ow-scan-cifar10-weights",
      "ow-scan-license"
    ]
  },
  {
    "taskId": "dimensionality-reduction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "uva-autoencoder128"
    ],
    "summary": {
      "en": "The released UvA autoencoder provides a concrete CIFAR-10 128-dimensional latent representation.",
      "tr": "Yayımlanmış UvA oto-kodlayıcı somut CIFAR-10 128 boyutlu gizil temsil sağlar."
    },
    "limitation": {
      "en": "Reconstruction distortion, neighborhood preservation and downstream classification measure different goals; no universal pretrained reduction model or common current rank was established.",
      "tr": "Yeniden yapılandırma hatası, komşuluk koruma ve sonraki sınıflandırma farklı hedefleri ölçer; evrensel ön eğitimli indirgeme modeli veya ortak güncel sıra kurulamadı."
    },
    "sourceIds": [
      "ow-uva-saved-models",
      "ow-uva-autoencoder-method",
      "ow-uva-autoencoder128-weights"
    ]
  },
  {
    "taskId": "density-estimation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "jem",
      "uva-mnist-flow"
    ],
    "summary": {
      "en": "The released UvA multiscale MNIST flow is an inspectable likelihood model; JEM provides a different energy-based route.",
      "tr": "Yayımlanmış UvA çok ölçekli MNIST akışı incelenebilir olabilirlik modelidir; JEM farklı enerji temelli yol sağlar."
    },
    "limitation": {
      "en": "Bits/dimension depends on dequantization, preprocessing and held-out data. MNIST likelihoods cannot rank density estimation across arbitrary domains.",
      "tr": "Bit/boyut dekuantizasyon, ön işleme ve ayrılmış test verisine bağlıdır. MNIST olabilirlikleri keyfi alanlarda yoğunluk kestirimini sıralayamaz."
    },
    "sourceIds": [
      "ow-jem",
      "ow-uva-saved-models",
      "ow-uva-flow-method",
      "ow-uva-mnist-flow-weights"
    ]
  },
  {
    "taskId": "anomaly-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "moment",
      "jem"
    ],
    "summary": {
      "en": "MOMENT is an adaptable time-series foundation encoder; JEM supplies an image-domain energy score.",
      "tr": "MOMENT uyarlanabilir zaman serisi temel kodlayıcısıdır; JEM görüntü alanında enerji puanı sağlar."
    },
    "limitation": {
      "en": "Neither one score nor point-adjusted time-series F1 establishes general anomaly leadership. Thresholding, event matching and training contamination require a shared protocol.",
      "tr": "Tek bir puan veya nokta düzeltmeli zaman serisi F1 genel anomali liderliğini kurmaz. Eşikleme, olay eşleme ve eğitim bulaşması ortak protokol gerektirir."
    },
    "sourceIds": [
      "ow-moment",
      "ow-jem",
      "ow-jem-paper"
    ]
  },
  {
    "taskId": "missing-value-imputation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "moment",
      "asia-bn"
    ],
    "summary": {
      "en": "MOMENT supports time-series reconstruction/imputation; the ASIA network supplies a small probabilistic conditional-inference example.",
      "tr": "MOMENT zaman serisi yeniden yapılandırma/tamamlamayı destekler; ASIA ağı küçük olasılıksal koşullu çıkarım örneği sağlar."
    },
    "limitation": {
      "en": "Random, block and missing-not-at-random masks differ. No matched released-checkpoint comparison on the same mask pattern was verified.",
      "tr": "Rastgele, blok ve rastlantısal olmayan eksiklik maskeleri farklıdır. Aynı maske düzeninde yayımlanmış checkpoint karşılaştırması doğrulanamadı."
    },
    "sourceIds": [
      "ow-moment",
      "ow-asia-bn",
      "ow-asia-description",
      "ow-bn-prediction"
    ]
  },
  {
    "taskId": "change-point-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "autocpd-hasc"
    ],
    "summary": {
      "en": "AutoCPD supplies a verifiable HASC activity-transition classifier for six-channel windows.",
      "tr": "AutoCPD altı kanallı pencereler için doğrulanabilir HASC etkinlik geçişi sınıflandırıcısı sağlar."
    },
    "limitation": {
      "en": "Its trained transition classes and window setup do not define a generic online change-point detector; synthetic benchmark scores cannot be assigned to this HASC artifact.",
      "tr": "Eğitilmiş geçiş sınıfları ve pencere düzeni genel çevrimiçi değişim noktası algılayıcısı tanımlamaz; sentetik benchmark puanları HASC dosyasına atanamaz."
    },
    "sourceIds": [
      "ow-autocpd-hasc",
      "ow-autocpd-inference",
      "ow-autocpd-package",
      "ow-autocpd-hasc-weights"
    ]
  },
  {
    "taskId": "node-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "graphany-arxiv"
    ],
    "summary": {
      "en": "GraphAny Arxiv is a released transferable node-classification component with explicit graph and label-support requirements.",
      "tr": "GraphAny Arxiv açık graf ve destek etiketi gereksinimleri olan yayımlanmış aktarılabilir düğüm sınıflandırma bileşenidir."
    },
    "limitation": {
      "en": "Inductive, transductive and cross-graph settings differ; no same-split, same-label-access current checkpoint table was verified.",
      "tr": "Endüktif, transdüktif ve graflar arası düzenler farklıdır; aynı veri bölümü ve etiket erişimiyle güncel checkpoint tablosu doğrulanamadı."
    },
    "sourceIds": [
      "ow-graphany-arxiv",
      "ow-graphany-inputs",
      "ow-graphany-arxiv-weights"
    ]
  },
  {
    "taskId": "link-prediction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "ultra",
      "ultra3",
      "anyburl-rules"
    ],
    "summary": {
      "en": "ULTRA adds transferable graph-model weights. Its 50g variant has higher transductive MRR than 3g, but has seen more of the benchmark graphs.",
      "tr": "ULTRA aktarılabilir graf modeli ağırlıkları ekliyor. 50g sürümü 3g’den daha yüksek transdüktif MRR gösteriyor; ancak benchmark graflarının daha fazlasını görmüş."
    },
    "limitation": {
      "en": "The 50g score cannot be advertised as zero-shot on those graphs; AnyBURL WN18RR rules are a different dataset-specific artifact.",
      "tr": "50g puanı o graflar üzerinde sıfır örnekli diye sunulamaz; AnyBURL WN18RR kuralları veri kümesine özgü farklı dosyadır."
    },
    "sourceIds": [
      "bm-card-ultra",
      "bm-card-ultra3",
      "ow-anyburl-rules",
      "ow-anyburl-ranking"
    ]
  },
  {
    "taskId": "graph-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "dgl-gcn-tox21"
    ],
    "summary": {
      "en": "DGL-LifeSci GCN Tox21 is a released whole-molecule multi-label classifier with 12 toxicity endpoints.",
      "tr": "DGL-LifeSci GCN Tox21, 12 toksisite hedefi olan yayımlanmış tüm molekül düzeyinde çok etiketli sınıflandırıcıdır."
    },
    "limitation": {
      "en": "Scaffold/random splits and missing-label treatment change ROC-AUC. A paper’s retrained GAT/GCN average cannot be assigned to this exact checkpoint.",
      "tr": "İskelet/rastgele veri bölümleri ve eksik etiket işlemesi ROC-AUC’yi değiştirir. Makalede yeniden eğitilen GAT/GCN ortalaması bu tam checkpoint’e atanamaz."
    },
    "sourceIds": [
      "ow-dgl-gcn-tox21",
      "ow-dgl-gcn-readout",
      "ow-dgl-gcn-tox21-weights"
    ]
  },
  {
    "taskId": "graph-regression",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "chgnet"
    ],
    "summary": {
      "en": "CHGNet 0.3.0 is a released atomistic graph potential for materials energies, forces and stresses.",
      "tr": "CHGNet 0.3.0 malzeme enerjisi, kuvvet ve gerilmeleri için yayımlanmış atomistik graf potansiyelidir."
    },
    "limitation": {
      "en": "Matbench materials targets, molecular QM9 properties and MPtrj force errors have different units and splits; no universal graph-regression winner is inferred.",
      "tr": "Matbench malzeme hedefleri, moleküler QM9 özellikleri ve MPtrj kuvvet hataları farklı birim ve bölümlere sahiptir; evrensel graf regresyon lideri çıkarılmaz."
    },
    "sourceIds": [
      "ow-chgnet",
      "ow-chgnet-usage"
    ]
  },
  {
    "taskId": "molecular-property-prediction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "boltz"
    ],
    "summary": {
      "en": "Boltz-2 is a released specialist for biomolecular structures and protein–ligand binding affinity.",
      "tr": "Boltz-2 biyomoleküler yapılar ve protein–ligand bağlanma afinitesi için yayımlanmış uzman modeldir."
    },
    "limitation": {
      "en": "Binding affinity is one property, not general ADMET or toxicity prediction. Target leakage, assay units and test splits prevent a single cross-property benchmark rank.",
      "tr": "Bağlanma afinitesi tek bir özelliktir; genel ADMET veya toksisite tahmini değildir. Hedef sızıntısı, deney birimleri ve test bölümleri özellikler arası tek sıralamayı engeller."
    },
    "sourceIds": [
      "ow-boltz",
      "ow-boltz-docs"
    ]
  },
  {
    "taskId": "protein-structure-prediction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "boltz"
    ],
    "summary": {
      "en": "Boltz-2 has verifiable open weights for biomolecular complex prediction and is a strong task-specific candidate.",
      "tr": "Boltz-2 biyomoleküler kompleks tahmini için doğrulanabilir açık ağırlıklara sahiptir ve göreve özgü güçlü adaydır."
    },
    "limitation": {
      "en": "Monomer, multimer and ligand-complex metrics differ; MSA/template dates, sampling count and target overlap must match before a current global rank is credible.",
      "tr": "Monomer, multimer ve ligand kompleks ölçüleri farklıdır; güncel genel sıralama için MSA/şablon tarihleri, örnek sayısı ve hedef örtüşmesi eşleşmelidir."
    },
    "sourceIds": [
      "ow-boltz",
      "ow-boltz-docs"
    ]
  },
  {
    "taskId": "math-word-problem-solving",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "r1",
      "deepseek41"
    ],
    "summary": {
      "en": "R1-0528 supplies a reproducible published competition-math result; newer DeepSeek releases are additional reasoning candidates.",
      "tr": "R1-0528 tekrarlanabilir yayımlanmış yarışma matematiği sonucu sağlar; daha yeni DeepSeek sürümleri ek akıl yürütme adaylarıdır."
    },
    "limitation": {
      "en": "The AIME result is historical, not a current grade-school word-problem leaderboard; tool use, answer extraction and sampling budget must match.",
      "tr": "AIME sonucu tarihseldir; güncel okul düzeyi sözel problem sıralaması değildir. Araç kullanımı, yanıt çıkarımı ve örnekleme bütçesi eşleşmeli."
    },
    "sourceIds": [
      "bm-card-r1",
      "ow-r1",
      "ow-deepseek41"
    ]
  },
  {
    "taskId": "formal-theorem-proving",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "longcatprover",
      "prover"
    ],
    "summary": {
      "en": "LongCat-Flash-Prover adds a 2026 released Lean4 prover with high MiniF2F success under its stated inference budget.",
      "tr": "LongCat-Flash-Prover belirtilen çıkarım bütçesinde yüksek MiniF2F başarısı olan 2026 yayımlanmış Lean4 ispatlayıcısını ekliyor."
    },
    "limitation": {
      "en": "Pass@72 cannot be compared directly with pass@32 or pass@8192. Formal checker acceptance also differs from faithful formalization of the original problem.",
      "tr": "Pass@72 doğrudan pass@32 veya pass@8192 ile karşılaştırılamaz. Biçimsel denetleyici kabulü, özgün problemin sadık biçimselleştirilmesinden de farklıdır."
    },
    "sourceIds": [
      "bm-longcat",
      "bm-card-longcatprover",
      "ow-prover"
    ]
  },
  {
    "taskId": "constraint-satisfaction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "hrm-sudoku"
    ],
    "summary": {
      "en": "HRM Sudoku Extreme has verified released weights for a narrow constraint task.",
      "tr": "HRM Sudoku Extreme dar bir kısıt görevi için doğrulanmış yayımlanmış ağırlıklara sahip."
    },
    "limitation": {
      "en": "TRM training-code results do not establish a matching released Sudoku checkpoint. Sudoku accuracy cannot rank generic SAT/CSP solvers or other grid sizes.",
      "tr": "TRM eğitim kodu sonuçları eşleşen yayımlanmış Sudoku checkpoint’ini kanıtlamaz. Sudoku doğruluğu genel SAT/CSP çözücüleri veya başka ızgara boyutlarını sıralayamaz."
    },
    "sourceIds": [
      "ow-hrm-sudoku",
      "ow-hrm-author-release",
      "ow-hrm-sudoku-weights",
      "ow-hrm-repository-license"
    ]
  },
  {
    "taskId": "classical-planning",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "goose-blocksworld"
    ],
    "summary": {
      "en": "GOOSE Blocks World provides a released learned ranking heuristic used by a classical search planner.",
      "tr": "GOOSE Blocks World klasik arama planlayıcısının kullandığı yayımlanmış öğrenilmiş sıralama sezgisini sağlar."
    },
    "limitation": {
      "en": "Solved-instance coverage belongs to the complete planner, domain, timeout and hardware. The 12 linear RankSVM parameters are not a universal pretrained planner or a GNN checkpoint.",
      "tr": "Çözülen örnek kapsamı tüm planlayıcıya, alana, zaman sınırına ve donanıma aittir. 12 doğrusal RankSVM parametresi evrensel ön eğitimli planlayıcı veya GNN checkpoint’i değildir."
    },
    "sourceIds": [
      "ow-goose-blocksworld",
      "ow-goose-pretrained",
      "ow-goose-training-config",
      "ow-goose-blocksworld-weights"
    ]
  },
  {
    "taskId": "robot-localization",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "hloc-superglue"
    ],
    "summary": {
      "en": "SuperPoint + SuperGlue outdoor is a released feature-matching component within hierarchical localization.",
      "tr": "SuperPoint + SuperGlue outdoor hiyerarşik konumlandırma içinde yayımlanmış özellik eşleme bileşenidir."
    },
    "limitation": {
      "en": "Pose recall requires a reference map, retrieval, camera calibration and geometric verification. Matcher scores alone cannot rank complete robot-localization systems.",
      "tr": "Poz yakalama oranı referans harita, getirme, kamera kalibrasyonu ve geometrik doğrulama gerektirir. Eşleyici puanları tek başına tüm robot konumlandırma sistemlerini sıralayamaz."
    },
    "sourceIds": [
      "ow-hloc-superglue",
      "ow-hloc-pipeline",
      "ow-hloc-pose",
      "ow-hloc-matcher",
      "ow-hloc-license"
    ]
  },
  {
    "taskId": "robot-motion-planning",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "mpinets-hybrid"
    ],
    "summary": {
      "en": "MPiNets Hybrid Expert supplies released neural planning weights for the documented Franka Panda environment.",
      "tr": "MPiNets Hybrid Expert belgelenmiş Franka Panda ortamı için yayımlanmış sinirsel planlama ağırlıkları sağlar."
    },
    "limitation": {
      "en": "Success depends on obstacle distribution, collision checks, trajectory refinement and time budget. Simulation scores do not transfer to a different robot or establish physical acceptance.",
      "tr": "Başarı engel dağılımı, çarpışma kontrolü, yörünge iyileştirmesi ve zaman bütçesine bağlıdır. Simülasyon puanları farklı robota aktarılmaz ve fiziksel kabul oluşturmaz."
    },
    "sourceIds": [
      "ow-mpinets-hybrid",
      "ow-mpinets-rollout",
      "ow-mpinets-zenodo",
      "ow-mpinets-hybrid-weights"
    ]
  },
  {
    "taskId": "function-calling",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "kimi3",
      "glm53",
      "deepseek41",
      "qwen38"
    ],
    "summary": {
      "en": "Kimi K3 leads GLM-5.3 in GLM’s Toolathlon Verified table, providing useful evidence for tool-rich workflows.",
      "tr": "Kimi K3 GLM’nin Toolathlon Verified tablosunda GLM-5.3’ü geçiyor; yoğun araç kullanılan iş akışları için yararlı kanıt sağlıyor."
    },
    "limitation": {
      "en": "Toolathlon includes planning and execution. It cannot replace a BFCL argument-correctness test, and publisher self-reports may use different scaffolds.",
      "tr": "Toolathlon planlama ve yürütme içerir. BFCL argüman doğruluğu testinin yerine geçmez; yayıncı raporları farklı çalıştırma düzenleri kullanabilir."
    },
    "sourceIds": [
      "bm-card-glm53",
      "bm-card-kimi3",
      "ow-glm53",
      "ow-deepseek41",
      "ow-qwen38"
    ]
  },
  {
    "taskId": "web-task-execution",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "uitars"
    ],
    "summary": {
      "en": "Qwen3.8-27B improves WebArena-Verified over Qwen3.6-27B using the publisher’s official-grader setup.",
      "tr": "Qwen3.8-27B yayıncının resmi değerlendirici düzeninde WebArena-Verified üzerinde Qwen3.6-27B’yi geçiyor."
    },
    "limitation": {
      "en": "Benchmark sites, agent loop and browser permissions constrain transfer; UI-TARS scores from different environments are not merged.",
      "tr": "Benchmark siteleri, ajan döngüsü ve tarayıcı izinleri aktarımı sınırlar; farklı ortamlardaki UI-TARS puanları birleştirilmez."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-uitars"
    ]
  },
  {
    "taskId": "desktop-task-execution",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "qwen38",
      "qwen36",
      "uitars"
    ],
    "summary": {
      "en": "Qwen3.8-27B improves OSWorld-Verified over Qwen3.6-27B in the shared release comparison.",
      "tr": "Qwen3.8-27B ortak sürüm karşılaştırmasında OSWorld-Verified üzerinde Qwen3.6-27B’yi geçiyor."
    },
    "limitation": {
      "en": "The score belongs to the model-plus-agent setup on benchmark applications; it does not guarantee successful execution in an arbitrary desktop session.",
      "tr": "Puan benchmark uygulamalarındaki model ve ajan düzenine aittir; keyfi masaüstü oturumunda başarılı yürütme garantisi değildir."
    },
    "sourceIds": [
      "bm-card-qwen38",
      "ow-qwen38",
      "bm-card-qwen36",
      "ow-uitars"
    ]
  }
];
