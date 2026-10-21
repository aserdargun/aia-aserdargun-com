import type { ModelFamily } from "@/data/schema";

/** Non-exclusive memberships of the existing checkpoint catalogue; primary observations are in sources.ts. */
export const modelFamilies = [
  {
    "id": "logical-representations",
    "name": "Logical Representations",
    "axis": "model-families",
    "definition": "Propositional and first-order representations.",
    "definitionSourceId": "S01",
    "note": {
      "en": "This concept commonly represents explicit knowledge or inference rules. The current checkpoint catalogue has no verified pretrained weight entry for it; a reasoning LLM is not automatically a symbolic rule model.",
      "tr": "Bu kavram çoğunlukla açık bilgi veya çıkarım kurallarını temsil eder. Mevcut ağırlık kataloğunda doğrulanmış hazır model eşleşmesi yoktur; akıl yürüten bir dil modeli otomatik olarak sembolik kural modeli sayılmaz."
    },
    "models": []
  },
  {
    "id": "rule-based-models",
    "name": "Rule-Based Models",
    "axis": "model-families",
    "definition": "Explicit rules for inference.",
    "definitionSourceId": "S01",
    "note": {
      "en": "This concept commonly represents explicit knowledge or inference rules. The current checkpoint catalogue has no verified pretrained weight entry for it; a reasoning LLM is not automatically a symbolic rule model.",
      "tr": "Bu kavram çoğunlukla açık bilgi veya çıkarım kurallarını temsil eder. Mevcut ağırlık kataloğunda doğrulanmış hazır model eşleşmesi yoktur; akıl yürüten bir dil modeli otomatik olarak sembolik kural modeli sayılmaz."
    },
    "models": []
  },
  {
    "id": "linear-logistic-models",
    "name": "Linear & Logistic Models",
    "axis": "model-families",
    "definition": "Linear predictors and linked probabilities.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "kernel-methods",
    "name": "Kernel Methods",
    "axis": "model-families",
    "definition": "Support vector machines; Gaussian processes.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "decision-trees-ensembles",
    "name": "Decision Trees & Ensembles",
    "axis": "model-families",
    "definition": "Trees; random forests; gradient boosting.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "nearest-neighbor-models",
    "name": "Nearest-Neighbor Models",
    "axis": "model-families",
    "definition": "Predictions from nearby observations.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "bayesian-networks",
    "name": "Bayesian Networks",
    "axis": "model-families",
    "definition": "Directed probabilistic dependencies.",
    "definitionSourceId": "S01",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "hidden-markov-models",
    "name": "Hidden Markov Models",
    "axis": "model-families",
    "definition": "Latent state transitions and emissions.",
    "definitionSourceId": "S01",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "gaussian-mixture-models",
    "name": "Gaussian Mixture Models",
    "axis": "model-families",
    "definition": "Mixtures of component distributions.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "linear-factor-models",
    "name": "Linear Factor Models",
    "axis": "model-families",
    "definition": "PCA and related latent-factor models.",
    "definitionSourceId": "S05",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "neural-networks",
    "name": "Neural Networks",
    "axis": "model-families",
    "definition": "Architectures expanded in the next branch.",
    "definitionSourceId": "S05",
    "note": {
      "en": "This broad family includes all neural entries in the shared catalogue. More specific architecture and modality groups overlap.",
      "tr": "Bu geniş aile, ortak katalogdaki tüm sinir ağı kayıtlarını içerir. Daha özel mimari ve veri türü grupları örtüşür."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-glm53"
        ]
      },
      {
        "modelId": "gliner2",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-gliner2"
        ]
      },
      {
        "modelId": "nli",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-nli"
        ]
      },
      {
        "modelId": "coref",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-coref"
        ]
      },
      {
        "modelId": "stanza",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-stanza"
        ]
      },
      {
        "modelId": "nllb",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-nllb"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-coedit"
        ]
      },
      {
        "modelId": "embedding",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      },
      {
        "modelId": "reranker",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-reranker"
        ]
      },
      {
        "modelId": "siglip",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-siglip"
        ]
      },
      {
        "modelId": "dino",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-dino"
        ]
      },
      {
        "modelId": "sam3",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-sam3"
        ]
      },
      {
        "modelId": "mask2former",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-mask2former"
        ]
      },
      {
        "modelId": "depth",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-depth"
        ]
      },
      {
        "modelId": "pose",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-pose"
        ]
      },
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-videomae"
        ]
      },
      {
        "modelId": "ocr",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-ocr"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-image"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-imageedit"
        ]
      },
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-fill"
        ]
      },
      {
        "modelId": "wan",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "shape",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-shape"
        ]
      },
      {
        "modelId": "asr",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-asr"
        ]
      },
      {
        "modelId": "seamless",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-seamless"
        ]
      },
      {
        "modelId": "keyword",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-keyword"
        ]
      },
      {
        "modelId": "emotion",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-emotion"
        ]
      },
      {
        "modelId": "ast",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-ast"
        ]
      },
      {
        "modelId": "ecapa",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-ecapa"
        ]
      },
      {
        "modelId": "diarization",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-diarization"
        ]
      },
      {
        "modelId": "tts",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-tts"
        ]
      },
      {
        "modelId": "separation",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-separation"
        ]
      },
      {
        "modelId": "enhancement",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-enhancement"
        ]
      },
      {
        "modelId": "voice",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-voice"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      },
      {
        "modelId": "ace",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-ace"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-coder"
        ]
      },
      {
        "modelId": "sql",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-sql"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-codet5plus"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-bart"
        ]
      },
      {
        "modelId": "tabpfn",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-tabpfn"
        ]
      },
      {
        "modelId": "chronos",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-chronos"
        ]
      },
      {
        "modelId": "moment",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-moment"
        ]
      },
      {
        "modelId": "boltz",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-boltz"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-prover"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      },
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "A pretrained neural model or neural pipeline in the shared task catalogue. The linked tasks refer to the released checkpoint or full pipeline.",
          "tr": "Ortak görev kataloğundaki önceden eğitilmiş sinir ağı veya sinir ağı işlem hattı. Bağlı görevler yayımlanmış ağırlıklara ya da tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-r1"
        ]
      }
    ]
  },
  {
    "id": "multilayer-perceptrons",
    "name": "Multilayer Perceptrons",
    "axis": "neural-architectures",
    "definition": "Feedforward, densely connected layers.",
    "definitionSourceId": "S05",
    "note": {
      "en": "The current catalogue has no verified standalone checkpoint for this family. Many examples require fitting to the target dataset; having a linear or MLP layer inside another model is not sufficient for whole-model membership.",
      "tr": "Mevcut katalogda bu aileye ait doğrulanmış bağımsız ağırlık kaydı yoktur. Birçok örnek hedef veri kümesine eğitim gerektirir; başka bir modelin içinde doğrusal veya MLP katmanı olması tüm modelin bu aileden sayılmasına yetmez."
    },
    "models": []
  },
  {
    "id": "convolutional-networks",
    "name": "Convolutional Networks",
    "axis": "neural-architectures",
    "definition": "Shared filters over structured inputs.",
    "definitionSourceId": "S05",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "ecapa",
        "relation": "member",
        "rationale": {
          "en": "The ECAPA-TDNN speaker encoder uses convolutional and residual blocks.",
          "tr": "ECAPA-TDNN konuşmacı kodlayıcısı evrişim ve artık bağlantı blokları kullanır."
        },
        "sourceIds": [
          "ow-ecapa"
        ]
      }
    ]
  },
  {
    "id": "recurrent-networks",
    "name": "Recurrent Networks",
    "axis": "neural-architectures",
    "definition": "Recurrent state; LSTM and GRU variants.",
    "definitionSourceId": "S03",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "stanza",
        "relation": "member",
        "rationale": {
          "en": "The Stanza paper describes bidirectional LSTM taggers and parsers. This entry is a collection of English processors, not a single universal RNN.",
          "tr": "Stanza makalesi çift yönlü LSTM etiketleyici ve ayrıştırıcıları açıklar. Kayıt, tek bir genel RNN yerine İngilizce işlemcilerden oluşur."
        },
        "sourceIds": [
          "ow-stanza",
          "ow-family-stanza-paper"
        ]
      }
    ]
  },
  {
    "id": "transformers",
    "name": "Transformers",
    "axis": "neural-architectures",
    "definition": "Attention-based representation processing.",
    "definitionSourceId": "S24",
    "note": {
      "en": "Includes attention-based backbones and explicitly labelled hybrids or components. A library tag alone is not evidence of an architecture.",
      "tr": "Dikkat tabanlı omurgaları ve açıkça etiketlenen hibritleri veya bileşenleri içerir. Kütüphane etiketi tek başına mimari kanıtı değildir."
    },
    "models": [
      {
        "modelId": "gliner2",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-gliner2",
          "ow-family-gliner2-config"
        ]
      },
      {
        "modelId": "nli",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-nli",
          "ow-family-nli-config"
        ]
      },
      {
        "modelId": "coref",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-coref",
          "ow-family-coref-config"
        ]
      },
      {
        "modelId": "nllb",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-nllb",
          "ow-family-nllb-config"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-coedit",
          "ow-family-coedit-config"
        ]
      },
      {
        "modelId": "embedding",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-embedding",
          "ow-family-embedding-config"
        ]
      },
      {
        "modelId": "reranker",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-reranker",
          "ow-family-reranker-config"
        ]
      },
      {
        "modelId": "siglip",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-siglip",
          "ow-family-siglip-config"
        ]
      },
      {
        "modelId": "dino",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-dino",
          "ow-family-dino-config"
        ]
      },
      {
        "modelId": "mask2former",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-mask2former",
          "ow-family-mask2former-config"
        ]
      },
      {
        "modelId": "depth",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-depth",
          "ow-family-depth-config"
        ]
      },
      {
        "modelId": "pose",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-pose",
          "ow-family-pose-config"
        ]
      },
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-videomae",
          "ow-family-videomae-config"
        ]
      },
      {
        "modelId": "ocr",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-ocr",
          "ow-family-ocr-config"
        ]
      },
      {
        "modelId": "seamless",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-seamless",
          "ow-family-seamless-config"
        ]
      },
      {
        "modelId": "keyword",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-keyword",
          "ow-family-keyword-config"
        ]
      },
      {
        "modelId": "emotion",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-emotion",
          "ow-family-emotion-config"
        ]
      },
      {
        "modelId": "ast",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-ast",
          "ow-family-ast-config"
        ]
      },
      {
        "modelId": "separation",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-separation",
          "ow-family-separation-config"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-musicgen",
          "ow-family-musicgen-config"
        ]
      },
      {
        "modelId": "sql",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-sql",
          "ow-family-sql-config"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-codet5",
          "ow-family-codet5-config"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-codet5plus",
          "ow-family-codet5plus-config"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-bart",
          "ow-family-bart-config"
        ]
      },
      {
        "modelId": "tabpfn",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-tabpfn",
          "ow-family-tabpfn-config"
        ]
      },
      {
        "modelId": "chronos",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-chronos",
          "ow-family-chronos-config"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-prover",
          "ow-family-prover-config"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-uitars",
          "ow-family-uitars-config"
        ]
      },
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-r1",
          "ow-family-r1-config"
        ]
      },
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "The model card or checkpoint configuration identifies a Transformer backbone or Transformer-based model. Consult the scope for the task-specific head or pipeline.",
          "tr": "Model kartı veya ağırlık yapılandırması Transformer omurgasını ya da Transformer tabanlı modeli tanımlar. Göreve özel çıkış katmanı veya işlem hattı için kapsamı incele."
        },
        "sourceIds": [
          "ow-glm53",
          "ow-family-glm53-config"
        ]
      },
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "Attention blocks are combined with Gated DeltaNet in this hybrid architecture; this is not a plain full-attention Transformer.",
          "tr": "Bu hibrit mimaride dikkat blokları Gated DeltaNet ile birleşir; saf tam dikkatli Transformer değildir."
        },
        "sourceIds": [
          "ow-qwen38",
          "ow-family-qwen38-config"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "Attention blocks are combined with Gated DeltaNet in this hybrid architecture; this is not a plain full-attention Transformer.",
          "tr": "Bu hibrit mimaride dikkat blokları Gated DeltaNet ile birleşir; saf tam dikkatli Transformer değildir."
        },
        "sourceIds": [
          "ow-coder",
          "ow-family-coder-config"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "The Qwen-Image architecture uses a multimodal diffusion Transformer; the checkpoint card identifies this image-generation family.",
          "tr": "Qwen-Image mimarisi çok kipli difüzyon Transformer kullanır; ağırlık kartı bu görüntü üretim ailesini tanımlar."
        },
        "sourceIds": [
          "ow-image",
          "ow-family-qwen-image-paper"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "The Qwen-Image architecture uses a multimodal diffusion Transformer; the checkpoint card identifies this image-generation family.",
          "tr": "Qwen-Image mimarisi çok kipli difüzyon Transformer kullanır; ağırlık kartı bu görüntü üretim ailesini tanımlar."
        },
        "sourceIds": [
          "ow-imageedit",
          "ow-family-qwen-image-paper"
        ]
      },
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "The publisher identifies this exact Fill checkpoint as a rectified-flow Transformer.",
          "tr": "Yayıncı, bu Fill sürümünü düzeltilmiş akış Transformer olarak tanımlar."
        },
        "sourceIds": [
          "ow-fill"
        ]
      },
      {
        "modelId": "ace",
        "relation": "component",
        "rationale": {
          "en": "The released music system includes a diffusion Transformer. The planner and audio generator are distinct components.",
          "tr": "Yayımlanan müzik sistemi difüzyon Transformer içerir. Planlayıcı ve ses üretici ayrı bileşenlerdir."
        },
        "sourceIds": [
          "ow-ace"
        ]
      }
    ]
  },
  {
    "id": "graph-neural-networks",
    "name": "Graph Neural Networks",
    "axis": "neural-architectures",
    "definition": "Computation over nodes and edges.",
    "definitionSourceId": "S32",
    "note": {
      "en": "No source-verified example from the shared open-weight catalogue is mapped here yet. This is a catalogue coverage gap, not a claim that pretrained models do not exist.",
      "tr": "Ortak açık ağırlık kataloğundan kaynakla doğrulanmış bir örnek henüz buraya eşlenmedi. Bu bir katalog kapsam eksikliğidir; önceden eğitilmiş modellerin bulunmadığı iddiası değildir."
    },
    "models": []
  },
  {
    "id": "state-space-networks",
    "name": "State-Space Networks",
    "axis": "neural-architectures",
    "definition": "Structured sequence state dynamics.",
    "definitionSourceId": "S25",
    "note": {
      "en": "No explicit state-space checkpoint is included in this catalogue. Hybrid attention or recurrent computation alone does not establish membership in the Mamba-style state-space family.",
      "tr": "Bu katalogda açıkça durum uzayı modeli olarak belgelenmiş ağırlık yoktur. Hibrit dikkat veya tekrarlayan hesaplama tek başına Mamba türü durum uzayı ailesinin üyesi olduğunu kanıtlamaz."
    },
    "models": []
  },
  {
    "id": "encoder-only",
    "name": "Encoder-Only",
    "axis": "neural-architectures",
    "definition": "Contextual representations of inputs.",
    "definitionSourceId": "S33",
    "note": {
      "en": "An encoder with a classification or forecast head is included. Producing embeddings alone does not establish encoder-only architecture: Qwen3 embeddings use a causal decoder backbone.",
      "tr": "Sınıflandırma veya tahmin başlığı olan kodlayıcılar dahildir. Vektör üretmek tek başına yalnız kodlayıcı mimarisini kanıtlamaz: Qwen3 vektör modelleri nedensel çözücü omurgası kullanır."
    },
    "models": [
      {
        "modelId": "gliner2",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-gliner2",
          "ow-family-gliner2-config"
        ]
      },
      {
        "modelId": "nli",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-nli",
          "ow-family-nli-config"
        ]
      },
      {
        "modelId": "coref",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-coref",
          "ow-family-coref-config"
        ]
      },
      {
        "modelId": "siglip",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-siglip",
          "ow-family-siglip-config"
        ]
      },
      {
        "modelId": "depth",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-depth",
          "ow-family-depth-config"
        ]
      },
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-videomae",
          "ow-family-videomae-config"
        ]
      },
      {
        "modelId": "ast",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-ast",
          "ow-family-ast-config"
        ]
      },
      {
        "modelId": "chronos",
        "relation": "member",
        "rationale": {
          "en": "The backbone encodes inputs into contextual representations; a task head may be attached. The architecture is supported by the card or configuration.",
          "tr": "Omurga girdileri bağlamsal temsillere kodlar; göreve özel çıkış katmanı eklenebilir. Mimari, kart veya yapılandırmayla desteklenir."
        },
        "sourceIds": [
          "ow-chronos",
          "ow-family-chronos-config"
        ]
      }
    ]
  },
  {
    "id": "decoder-only",
    "name": "Decoder-Only",
    "axis": "neural-architectures",
    "definition": "Causal sequence generation.",
    "definitionSourceId": "S33",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-glm53",
          "ow-family-glm53-config"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-coder",
          "ow-family-coder-config"
        ]
      },
      {
        "modelId": "sql",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-sql",
          "ow-family-sql-config"
        ]
      },
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-r1",
          "ow-family-r1-config"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-prover",
          "ow-family-prover-config"
        ]
      },
      {
        "modelId": "embedding",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-embedding",
          "ow-family-embedding-config"
        ]
      },
      {
        "modelId": "reranker",
        "relation": "member",
        "rationale": {
          "en": "The causal language backbone is decoder-only. Embedding and reranking checkpoints reuse this backbone for their documented scoring or representation tasks.",
          "tr": "Nedensel dil omurgası yalnız çözücüdür. Vektör ve yeniden sıralama sürümleri bu omurgayı belgelenmiş puanlama veya temsil görevlerinde kullanır."
        },
        "sourceIds": [
          "ow-reranker",
          "ow-family-reranker-config"
        ]
      },
      {
        "modelId": "qwen38",
        "relation": "component",
        "rationale": {
          "en": "The language component is a causal decoder; the complete multimodal model also has a vision encoder.",
          "tr": "Dil bileşeni nedensel çözücüdür; çok kipli modelin tamamında ayrıca görsel kodlayıcı bulunur."
        },
        "sourceIds": [
          "ow-qwen38",
          "ow-family-qwen38-config"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "component",
        "rationale": {
          "en": "The language component is a causal decoder; the complete multimodal model also has a vision encoder.",
          "tr": "Dil bileşeni nedensel çözücüdür; çok kipli modelin tamamında ayrıca görsel kodlayıcı bulunur."
        },
        "sourceIds": [
          "ow-deepseek41",
          "ow-family-deepseek41-config"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "component",
        "rationale": {
          "en": "The language component is a causal decoder; the complete multimodal model also has a vision encoder.",
          "tr": "Dil bileşeni nedensel çözücüdür; çok kipli modelin tamamında ayrıca görsel kodlayıcı bulunur."
        },
        "sourceIds": [
          "ow-uitars",
          "ow-family-uitars-config"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "component",
        "rationale": {
          "en": "The audio-token generator is an autoregressive Transformer decoder within a system that also includes conditioning and audio codecs.",
          "tr": "Ses token üreticisi, koşullandırma ve ses kodeklerini de içeren sistemdeki otoregresif Transformer çözücüsüdür."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "component",
        "rationale": {
          "en": "The audio-token generator is an autoregressive Transformer decoder within a system that also includes conditioning and audio codecs.",
          "tr": "Ses token üreticisi, koşullandırma ve ses kodeklerini de içeren sistemdeki otoregresif Transformer çözücüsüdür."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      }
    ]
  },
  {
    "id": "encoder-decoder",
    "name": "Encoder–Decoder",
    "axis": "neural-architectures",
    "definition": "Input encoding with output generation.",
    "definitionSourceId": "S33",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "nllb",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses an encoder–decoder sequence-to-sequence architecture. Task readiness still depends on its fine-tuning.",
          "tr": "Ağırlıklar kodlayıcı–çözücü diziden diziye mimarisini kullanır. Bir göreve hazır oluşu yine ince ayarına bağlıdır."
        },
        "sourceIds": [
          "ow-nllb",
          "ow-family-nllb-config"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses an encoder–decoder sequence-to-sequence architecture. Task readiness still depends on its fine-tuning.",
          "tr": "Ağırlıklar kodlayıcı–çözücü diziden diziye mimarisini kullanır. Bir göreve hazır oluşu yine ince ayarına bağlıdır."
        },
        "sourceIds": [
          "ow-coedit",
          "ow-family-coedit-config"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses an encoder–decoder sequence-to-sequence architecture. Task readiness still depends on its fine-tuning.",
          "tr": "Ağırlıklar kodlayıcı–çözücü diziden diziye mimarisini kullanır. Bir göreve hazır oluşu yine ince ayarına bağlıdır."
        },
        "sourceIds": [
          "ow-codet5",
          "ow-family-codet5-config"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses an encoder–decoder sequence-to-sequence architecture. Task readiness still depends on its fine-tuning.",
          "tr": "Ağırlıklar kodlayıcı–çözücü diziden diziye mimarisini kullanır. Bir göreve hazır oluşu yine ince ayarına bağlıdır."
        },
        "sourceIds": [
          "ow-codet5plus",
          "ow-family-codet5plus-config"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses an encoder–decoder sequence-to-sequence architecture. Task readiness still depends on its fine-tuning.",
          "tr": "Ağırlıklar kodlayıcı–çözücü diziden diziye mimarisini kullanır. Bir göreve hazır oluşu yine ince ayarına bağlıdır."
        },
        "sourceIds": [
          "ow-bart",
          "ow-family-bart-config"
        ]
      },
      {
        "modelId": "seamless",
        "relation": "member",
        "rationale": {
          "en": "SeamlessM4T combines text and speech encoders with translation and speech-generation decoders.",
          "tr": "SeamlessM4T, metin ve konuşma kodlayıcılarını çeviri ve konuşma üretimi çözücüleriyle birleştirir."
        },
        "sourceIds": [
          "ow-seamless",
          "ow-family-seamless-config"
        ]
      }
    ]
  },
  {
    "id": "mixture-of-experts",
    "name": "Mixture of Experts",
    "axis": "neural-architectures",
    "definition": "Routing to specialized subnetworks.",
    "definitionSourceId": "S26",
    "note": {
      "en": "Expert routing is a model property. Wan2.2 TI2V-5B is dense; the A14B family description does not make the 5B checkpoint MoE.",
      "tr": "Uzman yönlendirme modele ait bir özelliktir. Wan2.2 TI2V-5B yoğundur; A14B ailesinin açıklaması 5B sürümünü MoE yapmaz."
    },
    "models": [
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint architecture uses routed experts. This membership is specific to the released model, not every checkpoint from the same vendor.",
          "tr": "Ağırlık mimarisi yönlendirilmiş uzmanlar kullanır. Üyelik yayımlanan modele özeldir; aynı sağlayıcının tüm modellerini kapsamaz."
        },
        "sourceIds": [
          "ow-glm53",
          "ow-family-glm53-config"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint architecture uses routed experts. This membership is specific to the released model, not every checkpoint from the same vendor.",
          "tr": "Ağırlık mimarisi yönlendirilmiş uzmanlar kullanır. Üyelik yayımlanan modele özeldir; aynı sağlayıcının tüm modellerini kapsamaz."
        },
        "sourceIds": [
          "ow-coder",
          "ow-family-coder-config"
        ]
      },
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint architecture uses routed experts. This membership is specific to the released model, not every checkpoint from the same vendor.",
          "tr": "Ağırlık mimarisi yönlendirilmiş uzmanlar kullanır. Üyelik yayımlanan modele özeldir; aynı sağlayıcının tüm modellerini kapsamaz."
        },
        "sourceIds": [
          "ow-r1",
          "ow-family-r1-config"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint architecture uses routed experts. This membership is specific to the released model, not every checkpoint from the same vendor.",
          "tr": "Ağırlık mimarisi yönlendirilmiş uzmanlar kullanır. Üyelik yayımlanan modele özeldir; aynı sağlayıcının tüm modellerini kapsamaz."
        },
        "sourceIds": [
          "ow-prover",
          "ow-family-prover-config"
        ]
      }
    ]
  },
  {
    "id": "supervised-learning",
    "name": "Supervised Learning",
    "axis": "learning-paradigms",
    "definition": "Labeled input–target examples.",
    "definitionSourceId": "S02",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "nli",
        "relation": "member",
        "rationale": {
          "en": "The card documents training or fine-tuning with task labels or target outputs. This can follow earlier self-supervised pretraining.",
          "tr": "Kart, görev etiketleri veya hedef çıktılarla eğitim ya da ince ayar belirtir. Bu aşama önceki öz gözetimli ön eğitimi takip edebilir."
        },
        "sourceIds": [
          "ow-nli"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "The card documents training or fine-tuning with task labels or target outputs. This can follow earlier self-supervised pretraining.",
          "tr": "Kart, görev etiketleri veya hedef çıktılarla eğitim ya da ince ayar belirtir. Bu aşama önceki öz gözetimli ön eğitimi takip edebilir."
        },
        "sourceIds": [
          "ow-coedit"
        ]
      },
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "The card documents training or fine-tuning with task labels or target outputs. This can follow earlier self-supervised pretraining.",
          "tr": "Kart, görev etiketleri veya hedef çıktılarla eğitim ya da ince ayar belirtir. Bu aşama önceki öz gözetimli ön eğitimi takip edebilir."
        },
        "sourceIds": [
          "ow-videomae"
        ]
      },
      {
        "modelId": "ast",
        "relation": "member",
        "rationale": {
          "en": "The card documents training or fine-tuning with task labels or target outputs. This can follow earlier self-supervised pretraining.",
          "tr": "Kart, görev etiketleri veya hedef çıktılarla eğitim ya da ince ayar belirtir. Bu aşama önceki öz gözetimli ön eğitimi takip edebilir."
        },
        "sourceIds": [
          "ow-ast"
        ]
      },
      {
        "modelId": "ecapa",
        "relation": "member",
        "rationale": {
          "en": "The card documents training or fine-tuning with task labels or target outputs. This can follow earlier self-supervised pretraining.",
          "tr": "Kart, görev etiketleri veya hedef çıktılarla eğitim ya da ince ayar belirtir. Bu aşama önceki öz gözetimli ön eğitimi takip edebilir."
        },
        "sourceIds": [
          "ow-ecapa"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The card documents training or fine-tuning with task labels or target outputs. This can follow earlier self-supervised pretraining.",
          "tr": "Kart, görev etiketleri veya hedef çıktılarla eğitim ya da ince ayar belirtir. Bu aşama önceki öz gözetimli ön eğitimi takip edebilir."
        },
        "sourceIds": [
          "ow-bart"
        ]
      }
    ]
  },
  {
    "id": "unsupervised-learning",
    "name": "Unsupervised Learning",
    "axis": "learning-paradigms",
    "definition": "Structure without externally supplied targets.",
    "definitionSourceId": "S02",
    "note": {
      "en": "No separate unsupervised-learning checkpoint is mapped here. Self-supervised pretraining is listed under its more specific axis; these labels overlap in the literature.",
      "tr": "Buraya ayrı bir gözetimsiz öğrenme ağırlığı eşlenmedi. Öz gözetimli ön eğitim daha özel başlığı altında listelenir; literatürde bu etiketler örtüşebilir."
    },
    "models": []
  },
  {
    "id": "semi-supervised-learning",
    "name": "Semi-Supervised Learning",
    "axis": "learning-paradigms",
    "definition": "Labeled and unlabeled examples together.",
    "definitionSourceId": "S02",
    "note": {
      "en": "No exact checkpoint in the catalogue has a verified semi-supervised training record here. Mixing pretraining and fine-tuning alone does not establish this label.",
      "tr": "Katalogdaki belirli ağırlıklar için burada doğrulanmış yarı gözetimli eğitim kaydı yoktur. Ön eğitim ve ince ayarı birleştirmek tek başına bu etiketi kanıtlamaz."
    },
    "models": []
  },
  {
    "id": "self-supervised-learning",
    "name": "Self-Supervised Learning",
    "axis": "learning-paradigms",
    "definition": "Targets derived from the observations.",
    "definitionSourceId": "S31",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "The published pretraining objective reconstructs masked or corrupted observations. The released checkpoint may subsequently be fine-tuned with labels.",
          "tr": "Yayımlanan ön eğitim amacı maskelenmiş veya bozulmuş gözlemleri yeniden kurar. Yayımlanan ağırlıklar daha sonra etiketlerle ince ayarlanmış olabilir."
        },
        "sourceIds": [
          "ow-videomae"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The published pretraining objective reconstructs masked or corrupted observations. The released checkpoint may subsequently be fine-tuned with labels.",
          "tr": "Yayımlanan ön eğitim amacı maskelenmiş veya bozulmuş gözlemleri yeniden kurar. Yayımlanan ağırlıklar daha sonra etiketlerle ince ayarlanmış olabilir."
        },
        "sourceIds": [
          "ow-bart"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The published pretraining objective reconstructs masked or corrupted observations. The released checkpoint may subsequently be fine-tuned with labels.",
          "tr": "Yayımlanan ön eğitim amacı maskelenmiş veya bozulmuş gözlemleri yeniden kurar. Yayımlanan ağırlıklar daha sonra etiketlerle ince ayarlanmış olabilir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      }
    ]
  },
  {
    "id": "reinforcement-learning",
    "name": "Reinforcement Learning",
    "axis": "learning-paradigms",
    "definition": "Actions evaluated through reward signals.",
    "definitionSourceId": "S01",
    "note": {
      "en": "Reward-based post-training is distinct from a deployed control policy and from RLHF. Tasks shown below retain their original evidence limits.",
      "tr": "Ödül tabanlı son eğitim, sahaya uygulanmış kontrol politikasından ve RLHF yönteminden ayrıdır. Aşağıdaki görevler özgün kanıt sınırlarını korur."
    },
    "models": [
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "The model card documents reinforcement-learning post-training. This does not by itself establish learning from human preference labels.",
          "tr": "Model kartı pekiştirmeli son eğitimi belgeler. Bu bilgi tek başına insan tercih etiketlerinden öğrenildiğini kanıtlamaz."
        },
        "sourceIds": [
          "ow-r1"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The model card documents reinforcement-learning post-training. This does not by itself establish learning from human preference labels.",
          "tr": "Model kartı pekiştirmeli son eğitimi belgeler. Bu bilgi tek başına insan tercih etiketlerinden öğrenildiğini kanıtlamaz."
        },
        "sourceIds": [
          "ow-prover"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "member",
        "rationale": {
          "en": "The model card documents reinforcement-learning post-training. This does not by itself establish learning from human preference labels.",
          "tr": "Model kartı pekiştirmeli son eğitimi belgeler. Bu bilgi tek başına insan tercih etiketlerinden öğrenildiğini kanıtlamaz."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      },
      {
        "modelId": "ocr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents reinforcement-learning post-training. This does not by itself establish learning from human preference labels.",
          "tr": "Model kartı pekiştirmeli son eğitimi belgeler. Bu bilgi tek başına insan tercih etiketlerinden öğrenildiğini kanıtlamaz."
        },
        "sourceIds": [
          "ow-ocr"
        ]
      }
    ]
  },
  {
    "id": "autoregressive-models",
    "name": "Autoregressive Models",
    "axis": "generative-formulations",
    "definition": "Factorization into conditional predictions.",
    "definitionSourceId": "S05",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-glm53",
          "ow-family-glm53-config"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-coder",
          "ow-family-coder-config"
        ]
      },
      {
        "modelId": "sql",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-sql",
          "ow-family-sql-config"
        ]
      },
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-r1",
          "ow-family-r1-config"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-prover",
          "ow-family-prover-config"
        ]
      },
      {
        "modelId": "nllb",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-nllb",
          "ow-family-nllb-config"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-coedit",
          "ow-family-coedit-config"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-bart",
          "ow-family-bart-config"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-codet5",
          "ow-family-codet5-config"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "The generative decoder predicts a sequence conditionally on earlier tokens. Architecture and checkpoint scope are given in the sources.",
          "tr": "Üretici çözücü, diziyi önceki tokenlara koşullu tahmin eder. Mimari ve sürüm kapsamı kaynaklarda belirtilir."
        },
        "sourceIds": [
          "ow-codet5plus",
          "ow-family-codet5plus-config"
        ]
      },
      {
        "modelId": "qwen38",
        "relation": "component",
        "rationale": {
          "en": "The language component generates tokens causally; visual input is processed by other components.",
          "tr": "Dil bileşeni tokenları nedensel üretir; görsel girdiler diğer bileşenlerce işlenir."
        },
        "sourceIds": [
          "ow-qwen38",
          "ow-family-qwen38-config"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "component",
        "rationale": {
          "en": "The language component generates tokens causally; visual input is processed by other components.",
          "tr": "Dil bileşeni tokenları nedensel üretir; görsel girdiler diğer bileşenlerce işlenir."
        },
        "sourceIds": [
          "ow-deepseek41",
          "ow-family-deepseek41-config"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "component",
        "rationale": {
          "en": "The language component generates tokens causally; visual input is processed by other components.",
          "tr": "Dil bileşeni tokenları nedensel üretir; görsel girdiler diğer bileşenlerce işlenir."
        },
        "sourceIds": [
          "ow-uitars",
          "ow-family-uitars-config"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "member",
        "rationale": {
          "en": "The audio generation design predicts discrete codec tokens as a sequence, conditioned on text.",
          "tr": "Ses üretim tasarımı, metne koşullu ayrık kodek tokenlarını dizi olarak tahmin eder."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "member",
        "rationale": {
          "en": "The audio generation design predicts discrete codec tokens as a sequence, conditioned on text.",
          "tr": "Ses üretim tasarımı, metne koşullu ayrık kodek tokenlarını dizi olarak tahmin eder."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      },
      {
        "modelId": "tts",
        "relation": "member",
        "rationale": {
          "en": "The audio generation design predicts discrete codec tokens as a sequence, conditioned on text.",
          "tr": "Ses üretim tasarımı, metne koşullu ayrık kodek tokenlarını dizi olarak tahmin eder."
        },
        "sourceIds": [
          "ow-tts"
        ]
      }
    ]
  },
  {
    "id": "variational-autoencoders",
    "name": "Variational Autoencoders",
    "axis": "generative-formulations",
    "definition": "Latent variables with variational inference.",
    "definitionSourceId": "S29",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "wan",
        "relation": "component",
        "rationale": {
          "en": "The released video pipeline includes Wan2.2-VAE for latent compression and reconstruction. Video generation belongs to the full pipeline, not to the VAE alone.",
          "tr": "Yayımlanan video işlem hattı, gizil sıkıştırma ve yeniden kurma için Wan2.2-VAE içerir. Video üretimi yalnız VAE bileşenine değil, tam işlem hattına aittir."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "image",
        "relation": "component",
        "rationale": {
          "en": "A VAE encodes and decodes image latents in the Qwen-Image pipeline. The listed generation/editing tasks require the complete model.",
          "tr": "Qwen-Image işlem hattında VAE görüntünün gizil temsillerini kodlar ve çözer. Listelenen üretim/düzenleme görevleri modelin tamamını gerektirir."
        },
        "sourceIds": [
          "ow-image",
          "ow-family-qwen-image-paper"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "component",
        "rationale": {
          "en": "A VAE encodes and decodes image latents in the Qwen-Image pipeline. The listed generation/editing tasks require the complete model.",
          "tr": "Qwen-Image işlem hattında VAE görüntünün gizil temsillerini kodlar ve çözer. Listelenen üretim/düzenleme görevleri modelin tamamını gerektirir."
        },
        "sourceIds": [
          "ow-imageedit",
          "ow-family-qwen-image-paper"
        ]
      }
    ]
  },
  {
    "id": "generative-adversarial-networks",
    "name": "Generative Adversarial Networks",
    "axis": "generative-formulations",
    "definition": "Generator trained against a discriminator.",
    "definitionSourceId": "S30",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "enhancement",
        "relation": "member",
        "rationale": {
          "en": "MetricGAN+ trains an enhancement generator against a discriminator that approximates a perceptual quality metric. The released generator enhances speech.",
          "tr": "MetricGAN+, algısal kalite ölçüsünü yaklaştıran ayırt ediciye karşı iyileştirme üreticisini eğitir. Yayımlanan üretici konuşmayı iyileştirir."
        },
        "sourceIds": [
          "ow-enhancement"
        ]
      }
    ]
  },
  {
    "id": "diffusion-models",
    "name": "Diffusion Models",
    "axis": "generative-formulations",
    "definition": "Generation through learned denoising.",
    "definitionSourceId": "S27",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "shape",
        "relation": "member",
        "rationale": {
          "en": "The model documentation identifies diffusion-based generation; this does not establish a particular sampler or training objective for every variant.",
          "tr": "Model belgesi difüzyon tabanlı üretimi tanımlar; her varyant için belirli bir örnekleyici veya eğitim amacı kanıtlamaz."
        },
        "sourceIds": [
          "ow-shape"
        ]
      },
      {
        "modelId": "wan",
        "relation": "member",
        "rationale": {
          "en": "The model documentation identifies diffusion-based generation; this does not establish a particular sampler or training objective for every variant.",
          "tr": "Model belgesi difüzyon tabanlı üretimi tanımlar; her varyant için belirli bir örnekleyici veya eğitim amacı kanıtlamaz."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "Qwen-Image uses a diffusion Transformer and flow-matching training. These overlapping formulations are not mutually exclusive families.",
          "tr": "Qwen-Image, difüzyon Transformer ve akış eşleme eğitimi kullanır. Bu örtüşen yaklaşımlar birbirini dışlayan aileler değildir."
        },
        "sourceIds": [
          "ow-image",
          "ow-family-qwen-image-paper"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "Qwen-Image uses a diffusion Transformer and flow-matching training. These overlapping formulations are not mutually exclusive families.",
          "tr": "Qwen-Image, difüzyon Transformer ve akış eşleme eğitimi kullanır. Bu örtüşen yaklaşımlar birbirini dışlayan aileler değildir."
        },
        "sourceIds": [
          "ow-imageedit",
          "ow-family-qwen-image-paper"
        ]
      },
      {
        "modelId": "ace",
        "relation": "component",
        "rationale": {
          "en": "The system contains a diffusion Transformer for audio generation, with a separate language-model planner.",
          "tr": "Sistem, ayrı dil modeli planlayıcısı yanında ses üretimi için difüzyon Transformer içerir."
        },
        "sourceIds": [
          "ow-ace"
        ]
      }
    ]
  },
  {
    "id": "normalizing-flows",
    "name": "Normalizing Flows",
    "axis": "generative-formulations",
    "definition": "Invertible distribution transformations.",
    "definitionSourceId": "S28",
    "note": {
      "en": "No source-verified example from the shared open-weight catalogue is mapped here yet. This is a catalogue coverage gap, not a claim that pretrained models do not exist.",
      "tr": "Ortak açık ağırlık kataloğundan kaynakla doğrulanmış bir örnek henüz buraya eşlenmedi. Bu bir katalog kapsam eksikliğidir; önceden eğitilmiş modellerin bulunmadığı iddiası değildir."
    },
    "models": []
  },
  {
    "id": "energy-based-models",
    "name": "Energy-Based Models",
    "axis": "generative-formulations",
    "definition": "Compatibility encoded by an energy function.",
    "definitionSourceId": "S05",
    "note": {
      "en": "No source-verified example from the shared open-weight catalogue is mapped here yet. This is a catalogue coverage gap, not a claim that pretrained models do not exist.",
      "tr": "Ortak açık ağırlık kataloğundan kaynakla doğrulanmış bir örnek henüz buraya eşlenmedi. Bu bir katalog kapsam eksikliğidir; önceden eğitilmiş modellerin bulunmadığı iddiası değildir."
    },
    "models": []
  },
  {
    "id": "flow-matching",
    "name": "Flow Matching",
    "axis": "generative-formulations",
    "definition": "Vector-field training for continuous flows.",
    "definitionSourceId": "S44",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "The exact checkpoint is documented as a rectified-flow Transformer for inpainting. This is distinct from classical invertible normalizing flows.",
          "tr": "Bu sürüm, iç boyama için düzeltilmiş akış Transformer olarak belgelenir. Klasik tersinir normalleştirme akışlarından ayrıdır."
        },
        "sourceIds": [
          "ow-fill"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "The Qwen-Image technical report describes flow matching for its image generator; checkpoint cards identify the corresponding generation and editing variants.",
          "tr": "Qwen-Image teknik raporu görüntü üreticisinde akış eşlemeyi açıklar; ağırlık kartları ilgili üretim ve düzenleme varyantlarını tanımlar."
        },
        "sourceIds": [
          "ow-image",
          "ow-family-qwen-image-paper"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "The Qwen-Image technical report describes flow matching for its image generator; checkpoint cards identify the corresponding generation and editing variants.",
          "tr": "Qwen-Image teknik raporu görüntü üreticisinde akış eşlemeyi açıklar; ağırlık kartları ilgili üretim ve düzenleme varyantlarını tanımlar."
        },
        "sourceIds": [
          "ow-imageedit",
          "ow-family-qwen-image-paper"
        ]
      }
    ]
  },
  {
    "id": "text",
    "name": "Text",
    "axis": "modalities-data",
    "definition": "Natural-language sequences.",
    "definitionSourceId": "S04",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-glm53"
        ]
      },
      {
        "modelId": "gliner2",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-gliner2"
        ]
      },
      {
        "modelId": "nli",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-nli"
        ]
      },
      {
        "modelId": "coref",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-coref"
        ]
      },
      {
        "modelId": "stanza",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-stanza"
        ]
      },
      {
        "modelId": "nllb",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-nllb"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-coedit"
        ]
      },
      {
        "modelId": "embedding",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      },
      {
        "modelId": "reranker",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-reranker"
        ]
      },
      {
        "modelId": "siglip",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-siglip"
        ]
      },
      {
        "modelId": "dino",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-dino"
        ]
      },
      {
        "modelId": "ocr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ocr"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-image"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-imageedit"
        ]
      },
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-fill"
        ]
      },
      {
        "modelId": "wan",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "shape",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-shape"
        ]
      },
      {
        "modelId": "asr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-asr"
        ]
      },
      {
        "modelId": "seamless",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-seamless"
        ]
      },
      {
        "modelId": "tts",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-tts"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      },
      {
        "modelId": "ace",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ace"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-coder"
        ]
      },
      {
        "modelId": "sql",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-sql"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-codet5plus"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-bart"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-prover"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      },
      {
        "modelId": "r1",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-r1"
        ]
      }
    ]
  },
  {
    "id": "code",
    "name": "Code",
    "axis": "modalities-data",
    "definition": "Programming-language sequences.",
    "definitionSourceId": "S07",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "glm53",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-glm53"
        ]
      },
      {
        "modelId": "embedding",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-embedding"
        ]
      },
      {
        "modelId": "coder",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-coder"
        ]
      },
      {
        "modelId": "sql",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-sql"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-codet5plus"
        ]
      },
      {
        "modelId": "prover",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-prover"
        ]
      }
    ]
  },
  {
    "id": "images",
    "name": "Images",
    "axis": "modalities-data",
    "definition": "Still visual observations.",
    "definitionSourceId": "S04",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "siglip",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-siglip"
        ]
      },
      {
        "modelId": "dino",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-dino"
        ]
      },
      {
        "modelId": "sam3",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-sam3"
        ]
      },
      {
        "modelId": "mask2former",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-mask2former"
        ]
      },
      {
        "modelId": "depth",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-depth"
        ]
      },
      {
        "modelId": "pose",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-pose"
        ]
      },
      {
        "modelId": "ocr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ocr"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-image"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-imageedit"
        ]
      },
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-fill"
        ]
      },
      {
        "modelId": "wan",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      }
    ]
  },
  {
    "id": "video",
    "name": "Video",
    "axis": "modalities-data",
    "definition": "Sequences of visual frames.",
    "definitionSourceId": "S04",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-videomae"
        ]
      },
      {
        "modelId": "wan",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "sam3",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-sam3"
        ]
      }
    ]
  },
  {
    "id": "speech-audio",
    "name": "Speech & Audio",
    "axis": "modalities-data",
    "definition": "Spoken language and other sounds.",
    "definitionSourceId": "S08",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "asr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-asr"
        ]
      },
      {
        "modelId": "seamless",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-seamless"
        ]
      },
      {
        "modelId": "keyword",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-keyword"
        ]
      },
      {
        "modelId": "emotion",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-emotion"
        ]
      },
      {
        "modelId": "ast",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ast"
        ]
      },
      {
        "modelId": "ecapa",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ecapa"
        ]
      },
      {
        "modelId": "diarization",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-diarization"
        ]
      },
      {
        "modelId": "tts",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-tts"
        ]
      },
      {
        "modelId": "separation",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-separation"
        ]
      },
      {
        "modelId": "enhancement",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-enhancement"
        ]
      },
      {
        "modelId": "voice",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-voice"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      },
      {
        "modelId": "ace",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ace"
        ]
      }
    ]
  },
  {
    "id": "tabular-data",
    "name": "Tabular Data",
    "axis": "modalities-data",
    "definition": "Records with defined feature columns.",
    "definitionSourceId": "S02",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "tabpfn",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-tabpfn"
        ]
      }
    ]
  },
  {
    "id": "time-series",
    "name": "Time Series",
    "axis": "modalities-data",
    "definition": "Time-indexed measurements.",
    "definitionSourceId": "S10",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "chronos",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-chronos"
        ]
      },
      {
        "modelId": "moment",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-moment"
        ]
      }
    ]
  },
  {
    "id": "graphs",
    "name": "Graphs",
    "axis": "modalities-data",
    "definition": "Entities connected through relations.",
    "definitionSourceId": "S11",
    "note": {
      "en": "No source-verified example from the shared open-weight catalogue is mapped here yet. This is a catalogue coverage gap, not a claim that pretrained models do not exist.",
      "tr": "Ortak açık ağırlık kataloğundan kaynakla doğrulanmış bir örnek henüz buraya eşlenmedi. Bu bir katalog kapsam eksikliğidir; önceden eğitilmiş modellerin bulunmadığı iddiası değildir."
    },
    "models": []
  },
  {
    "id": "3d-representations",
    "name": "3D Representations",
    "axis": "modalities-data",
    "definition": "Shapes, meshes and spatial fields.",
    "definitionSourceId": "S47",
    "note": {
      "en": "Shapes, spatial geometry and molecular coordinates are different representations. Boltz-2 predicts molecular structures; it is not a general 3D asset generator.",
      "tr": "Şekiller, uzamsal geometri ve moleküler koordinatlar farklı temsillerdir. Boltz-2 moleküler yapı tahmin eder; genel 3D varlık üreticisi değildir."
    },
    "models": [
      {
        "modelId": "shape",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-shape"
        ]
      },
      {
        "modelId": "depth",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-depth"
        ]
      },
      {
        "modelId": "boltz",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-boltz"
        ]
      }
    ]
  },
  {
    "id": "multimodal-models",
    "name": "Multimodal Models",
    "axis": "modalities-data",
    "definition": "Several modalities within one model.",
    "definitionSourceId": "S37",
    "note": {
      "en": "Grouped by documented inputs or outputs. A modality match does not imply support for every task involving that modality.",
      "tr": "Belgelenmiş girdilere veya çıktılara göre gruplanır. Bir veri türüyle eşleşme, o türdeki tüm görevlerin desteklendiği anlamına gelmez."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "deepseek41",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-deepseek41"
        ]
      },
      {
        "modelId": "siglip",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-siglip"
        ]
      },
      {
        "modelId": "dino",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-dino"
        ]
      },
      {
        "modelId": "ocr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ocr"
        ]
      },
      {
        "modelId": "image",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-image"
        ]
      },
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-imageedit"
        ]
      },
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-fill"
        ]
      },
      {
        "modelId": "wan",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-wan"
        ]
      },
      {
        "modelId": "shape",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-shape"
        ]
      },
      {
        "modelId": "asr",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-asr"
        ]
      },
      {
        "modelId": "seamless",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-seamless"
        ]
      },
      {
        "modelId": "tts",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-tts"
        ]
      },
      {
        "modelId": "audiogen",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-audiogen"
        ]
      },
      {
        "modelId": "musicgen",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-musicgen"
        ]
      },
      {
        "modelId": "ace",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-ace"
        ]
      },
      {
        "modelId": "uitars",
        "relation": "member",
        "rationale": {
          "en": "The model card documents this data type as an input, output or conditioning signal. Only the task relationships below are claimed.",
          "tr": "Model kartı bu veri türünü girdi, çıktı veya koşullandırma sinyali olarak belgeler. Yalnızca aşağıdaki görev ilişkileri ileri sürülür."
        },
        "sourceIds": [
          "ow-uitars"
        ]
      }
    ]
  },
  {
    "id": "foundation-model-pretraining",
    "name": "Foundation-Model Pretraining",
    "axis": "training-adaptation",
    "definition": "Broad training for downstream adaptation.",
    "definitionSourceId": "S37",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "qwen38",
        "relation": "member",
        "rationale": {
          "en": "The source describes broad pretraining or a foundation-model base for downstream use. The released checkpoint may also include later adaptation.",
          "tr": "Kaynak, sonraki kullanım için geniş ön eğitimi veya temel model omurgasını açıklar. Yayımlanan sürüm daha sonraki uyarlamaları da içerebilir."
        },
        "sourceIds": [
          "ow-qwen38"
        ]
      },
      {
        "modelId": "codet5",
        "relation": "member",
        "rationale": {
          "en": "The source describes broad pretraining or a foundation-model base for downstream use. The released checkpoint may also include later adaptation.",
          "tr": "Kaynak, sonraki kullanım için geniş ön eğitimi veya temel model omurgasını açıklar. Yayımlanan sürüm daha sonraki uyarlamaları da içerebilir."
        },
        "sourceIds": [
          "ow-codet5"
        ]
      },
      {
        "modelId": "codet5plus",
        "relation": "member",
        "rationale": {
          "en": "The source describes broad pretraining or a foundation-model base for downstream use. The released checkpoint may also include later adaptation.",
          "tr": "Kaynak, sonraki kullanım için geniş ön eğitimi veya temel model omurgasını açıklar. Yayımlanan sürüm daha sonraki uyarlamaları da içerebilir."
        },
        "sourceIds": [
          "ow-codet5plus"
        ]
      },
      {
        "modelId": "tabpfn",
        "relation": "member",
        "rationale": {
          "en": "The source describes broad pretraining or a foundation-model base for downstream use. The released checkpoint may also include later adaptation.",
          "tr": "Kaynak, sonraki kullanım için geniş ön eğitimi veya temel model omurgasını açıklar. Yayımlanan sürüm daha sonraki uyarlamaları da içerebilir."
        },
        "sourceIds": [
          "ow-tabpfn"
        ]
      },
      {
        "modelId": "chronos",
        "relation": "member",
        "rationale": {
          "en": "The source describes broad pretraining or a foundation-model base for downstream use. The released checkpoint may also include later adaptation.",
          "tr": "Kaynak, sonraki kullanım için geniş ön eğitimi veya temel model omurgasını açıklar. Yayımlanan sürüm daha sonraki uyarlamaları da içerebilir."
        },
        "sourceIds": [
          "ow-chronos"
        ]
      },
      {
        "modelId": "moment",
        "relation": "member",
        "rationale": {
          "en": "The source describes broad pretraining or a foundation-model base for downstream use. The released checkpoint may also include later adaptation.",
          "tr": "Kaynak, sonraki kullanım için geniş ön eğitimi veya temel model omurgasını açıklar. Yayımlanan sürüm daha sonraki uyarlamaları da içerebilir."
        },
        "sourceIds": [
          "ow-moment"
        ]
      }
    ]
  },
  {
    "id": "task-specific-fine-tuning",
    "name": "Task-Specific Fine-Tuning",
    "axis": "training-adaptation",
    "definition": "Update parameters for a target task.",
    "definitionSourceId": "S33",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "nli",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint is explicitly trained or fine-tuned for the cited downstream task. It is not the untuned base model.",
          "tr": "Ağırlıklar, belirtilen sonraki görev için açıkça eğitilmiş veya ince ayarlanmıştır. İnce ayarsız temel model değildir."
        },
        "sourceIds": [
          "ow-nli"
        ]
      },
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint is explicitly trained or fine-tuned for the cited downstream task. It is not the untuned base model.",
          "tr": "Ağırlıklar, belirtilen sonraki görev için açıkça eğitilmiş veya ince ayarlanmıştır. İnce ayarsız temel model değildir."
        },
        "sourceIds": [
          "ow-coedit"
        ]
      },
      {
        "modelId": "bart",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint is explicitly trained or fine-tuned for the cited downstream task. It is not the untuned base model.",
          "tr": "Ağırlıklar, belirtilen sonraki görev için açıkça eğitilmiş veya ince ayarlanmıştır. İnce ayarsız temel model değildir."
        },
        "sourceIds": [
          "ow-bart"
        ]
      },
      {
        "modelId": "videomae",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint is explicitly trained or fine-tuned for the cited downstream task. It is not the untuned base model.",
          "tr": "Ağırlıklar, belirtilen sonraki görev için açıkça eğitilmiş veya ince ayarlanmıştır. İnce ayarsız temel model değildir."
        },
        "sourceIds": [
          "ow-videomae"
        ]
      },
      {
        "modelId": "ast",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint is explicitly trained or fine-tuned for the cited downstream task. It is not the untuned base model.",
          "tr": "Ağırlıklar, belirtilen sonraki görev için açıkça eğitilmiş veya ince ayarlanmıştır. İnce ayarsız temel model değildir."
        },
        "sourceIds": [
          "ow-ast"
        ]
      }
    ]
  },
  {
    "id": "instruction-tuning",
    "name": "Instruction Tuning",
    "axis": "training-adaptation",
    "definition": "Supervised learning from instructions.",
    "definitionSourceId": "S35",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "coedit",
        "relation": "member",
        "rationale": {
          "en": "CoEdIT fine-tunes FLAN-T5 on task-specific editing instructions. The evidence identifies the training method for this checkpoint.",
          "tr": "CoEdIT, FLAN-T5 modelini göreve özel düzenleme talimatlarıyla ince ayarlar. Kanıt, bu sürümün eğitim yöntemini tanımlar."
        },
        "sourceIds": [
          "ow-coedit"
        ]
      }
    ]
  },
  {
    "id": "low-rank-adaptation-lora",
    "name": "Low-Rank Adaptation (LoRA)",
    "axis": "training-adaptation",
    "definition": "Train small low-rank parameter updates.",
    "definitionSourceId": "S34",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "imageedit",
        "relation": "member",
        "rationale": {
          "en": "The 2511 release card states that selected LoRAs are integrated into the model. This records that integration; it does not make all model training LoRA-based.",
          "tr": "2511 sürüm kartı seçili LoRA uyarlamalarının modele entegre edildiğini belirtir. Bu kayıt entegrasyonu gösterir; tüm eğitimi LoRA tabanlı saymaz."
        },
        "sourceIds": [
          "ow-imageedit"
        ]
      }
    ]
  },
  {
    "id": "rl-from-human-feedback",
    "name": "RL from Human Feedback",
    "axis": "training-adaptation",
    "definition": "Reward-based tuning from human preferences.",
    "definitionSourceId": "S35",
    "note": {
      "en": "The catalogue does not yet verify human-preference reward training for an exact checkpoint. Reward-based reasoning and verifier feedback alone are not evidence of RLHF.",
      "tr": "Katalog henüz belirli bir ağırlık sürümünde insan tercihlerine dayalı ödül eğitimini doğrulamıyor. Ödül tabanlı akıl yürütme ve doğrulayıcı geri bildirimi tek başına RLHF kanıtı değildir."
    },
    "models": []
  },
  {
    "id": "direct-preference-optimization",
    "name": "Direct Preference Optimization",
    "axis": "training-adaptation",
    "definition": "Optimize directly from preference pairs.",
    "definitionSourceId": "S36",
    "note": {
      "en": "No exact catalogue checkpoint is verified as DPO-trained. A DPO baseline appearing in another model’s benchmark table is not evidence about that model’s own training.",
      "tr": "Katalogdaki belirli bir ağırlık sürümünün DPO ile eğitildiği doğrulanmadı. Başka bir modelin puan tablosunda DPO referansı bulunması, o modelin kendi eğitiminin kanıtı değildir."
    },
    "models": []
  },
  {
    "id": "knowledge-distillation",
    "name": "Knowledge Distillation",
    "axis": "training-adaptation",
    "definition": "Transfer behavior from teacher to student.",
    "definitionSourceId": "S38",
    "note": {
      "en": "These are source-backed examples from the shared catalogue. Architecture, training method and task support are independent properties.",
      "tr": "Bunlar ortak katalogdan kaynaklı örneklerdir. Mimari, eğitim yöntemi ve görev desteği bağımsız özelliklerdir."
    },
    "models": [
      {
        "modelId": "nllb",
        "relation": "member",
        "rationale": {
          "en": "The publisher documents distillation for this released model: translation compression, coreference teacher transfer or guidance distillation respectively.",
          "tr": "Yayıncı bu sürüm için sırasıyla çeviri sıkıştırması, eşgönderim öğretmen aktarımı veya yönlendirme damıtması belgeler."
        },
        "sourceIds": [
          "ow-nllb"
        ]
      },
      {
        "modelId": "coref",
        "relation": "member",
        "rationale": {
          "en": "The publisher documents distillation for this released model: translation compression, coreference teacher transfer or guidance distillation respectively.",
          "tr": "Yayıncı bu sürüm için sırasıyla çeviri sıkıştırması, eşgönderim öğretmen aktarımı veya yönlendirme damıtması belgeler."
        },
        "sourceIds": [
          "ow-coref"
        ]
      },
      {
        "modelId": "fill",
        "relation": "member",
        "rationale": {
          "en": "The publisher documents distillation for this released model: translation compression, coreference teacher transfer or guidance distillation respectively.",
          "tr": "Yayıncı bu sürüm için sırasıyla çeviri sıkıştırması, eşgönderim öğretmen aktarımı veya yönlendirme damıtması belgeler."
        },
        "sourceIds": [
          "ow-fill"
        ]
      }
    ]
  }
] satisfies ModelFamily[];
