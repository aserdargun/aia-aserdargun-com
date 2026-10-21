import type { ModelFamily } from "@/data/schema";

/** Non-exclusive memberships of the existing SVG concepts. */
export const modelFamilies = [
  {
    "id": "logical-representations",
    "name": "Logical Representations",
    "axis": "model-families",
    "definition": "Propositional and first-order representations.",
    "definitionSourceId": "S01",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "anyburl-rules",
        "relation": "member",
        "rationale": {
          "en": "The released rules explicitly encode variables, binary predicates, heads and bodies. This is a first-order rule representation with empirical confidence, not a language-model reasoning label.",
          "tr": "Yayımlanan kurallar değişken, ikili yüklem, baş ve gövdeleri açıkça kodlar. Deneysel güven değerli birinci dereceden kural temsilidir; bir dil modelinin akıl yürütme etiketi değildir."
        },
        "sourceIds": [
          "ow-anyburl-rules",
          "ow-anyburl-syntax",
          "ow-anyburl-loader"
        ]
      },
      {
        "modelId": "goose-blocksworld",
        "relation": "component",
        "rationale": {
          "en": "PDDL predicates, action schemas and a symbolic search engine are components of the pipeline around the learned heuristic.",
          "tr": "PDDL yüklemleri, eylem şemaları ve sembolik arama motoru, öğrenilmiş sezgisel modelin çevresindeki işlem hattının bileşenleridir."
        },
        "sourceIds": [
          "ow-goose-blocksworld",
          "ow-goose-blocksworld-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "A representation is not itself a pretrained network. Here the concrete artifact is a learned first-order WN18RR rule set; it covers a restricted relational language, not all propositional or first-order reasoning.",
        "tr": "Bir temsil kendi başına ön eğitimli ağ değildir. Buradaki somut dosya, öğrenilmiş birinci dereceden WN18RR kural kümesidir; tüm önermesel veya birinci dereceden akıl yürütmeyi değil sınırlı ilişkisel dili kapsar."
      },
      "sourceIds": [
        "ow-anyburl-rules",
        "ow-anyburl-syntax"
      ]
    }
  },
  {
    "id": "rule-based-models",
    "name": "Rule-Based Models",
    "axis": "model-families",
    "definition": "Explicit rules for inference.",
    "definitionSourceId": "S01",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "anyburl-rules",
        "relation": "member",
        "rationale": {
          "en": "PyClause applies this learned WN18RR rule file to rank missing graph links, using stored support statistics.",
          "tr": "PyClause, eksik graf bağlantılarını sıralamak için bu öğrenilmiş WN18RR kural dosyasını kayıtlı destek istatistikleriyle uygular."
        },
        "sourceIds": [
          "ow-anyburl-rules",
          "ow-anyburl-ranking",
          "ow-anyburl-loader"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "A learned rule file is available, so this concept need not remain empty. Rules and support counts are the reusable model parameters; another domain needs its own facts, vocabulary and usually new rules.",
        "tr": "Öğrenilmiş kural dosyası bulunduğundan kavramın boş kalması gerekmez. Kurallar ve destek sayıları yeniden kullanılabilir model parametreleridir; başka alan kendi olgularını, sözlüğünü ve çoğunlukla yeni kuralları gerektirir."
      },
      "sourceIds": [
        "ow-anyburl-rules",
        "ow-anyburl-ranking"
      ]
    }
  },
  {
    "id": "linear-logistic-models",
    "name": "Linear & Logistic Models",
    "axis": "model-families",
    "definition": "Linear predictors and linked probabilities.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "fasttext-lid",
        "relation": "member",
        "rationale": {
          "en": "fastText factorizes a linear text classifier over averaged word/ngram features; its classifier family is documented in the authors’ paper.",
          "tr": "fastText, ortalanmış kelime/ngram özellikleri üzerindeki doğrusal metin sınıflandırıcısını çarpanlarına ayırır; sınıflandırıcı ailesi yazarların makalesinde belgelenir."
        },
        "sourceIds": [
          "ow-fasttext-lid",
          "ow-fasttext-paper"
        ]
      },
      {
        "modelId": "goose-blocksworld",
        "relation": "member",
        "rationale": {
          "en": "GOOSE’s published heuristic is a linear scorer over graph features; the archive contains its numerical coefficients. It is not a logistic classifier.",
          "tr": "GOOSE’un yayımlanan sezgisel modeli graf özellikleri üzerinde doğrusal puanlayıcıdır; arşiv sayısal katsayılarını içerir. Lojistik sınıflandırıcı değildir."
        },
        "sourceIds": [
          "ow-goose-blocksworld",
          "ow-goose-training-config",
          "ow-goose-blocksworld-weights"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "fastText provides a released linear-classifier example for language identification. The feature vocabulary and class set are fixed; its weights are not a generic classifier for arbitrary tables.",
        "tr": "fastText, dil tanıma için yayımlanmış doğrusal sınıflandırıcı örneği sağlar. Özellik sözlüğü ve sınıflar sabittir; ağırlıkları keyfi tablolar için genel sınıflandırıcı değildir."
      },
      "sourceIds": [
        "ow-fasttext-lid",
        "ow-fasttext-paper"
      ]
    }
  },
  {
    "id": "kernel-methods",
    "name": "Kernel Methods",
    "axis": "model-families",
    "definition": "Support vector machines; Gaussian processes.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "brisque",
        "relation": "member",
        "rationale": {
          "en": "The published YAML explicitly declares EPS_SVR, an RBF kernel, gamma and 774 support vectors.",
          "tr": "Yayımlanan YAML; EPS_SVR, RBF çekirdeği, gamma ve 774 destek vektörünü açıkça belirtir."
        },
        "sourceIds": [
          "ow-brisque",
          "ow-brisque-parameters"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "A ready RBF-SVR exists in OpenCV’s BRISQUE release. Its support vectors and scaling are specific to image-quality features; reuse with unrelated features would be invalid.",
        "tr": "OpenCV’nin BRISQUE sürümünde hazır RBF-SVR vardır. Destek vektörleri ve ölçekleme görüntü kalitesi özelliklerine özgüdür; ilişkisiz özelliklerle yeniden kullanım geçersiz olur."
      },
      "sourceIds": [
        "ow-brisque",
        "ow-brisque-parameters"
      ]
    }
  },
  {
    "id": "decision-trees-ensembles",
    "name": "Decision Trees & Ensembles",
    "axis": "model-families",
    "definition": "Trees; random forests; gradient boosting.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "dlib-five",
        "relation": "member",
        "rationale": {
          "en": "The exact five-point training program calls dlib’s shape predictor trainer, whose documented algorithm is an ensemble of regression trees.",
          "tr": "Beş noktalı modelin tam eğitim programı, belgelenmiş algoritması regresyon ağacı topluluğu olan dlib şekil tahmincisi eğiticisini kullanır."
        },
        "sourceIds": [
          "ow-dlib-five",
          "ow-dlib-five-training",
          "ow-dlib-tree-method"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "dlib publishes the trained five-landmark regression-tree ensemble. This fills the family with a narrow ready model; it does not make the tree ensemble transferable to arbitrary prediction targets.",
        "tr": "dlib eğitilmiş beş noktalı regresyon ağacı topluluğunu yayımlar. Aileye dar kapsamlı hazır model sağlar; ağaç topluluğunu keyfi tahmin hedeflerine aktarılabilir yapmaz."
      },
      "sourceIds": [
        "ow-dlib-five",
        "ow-dlib-five-training",
        "ow-dlib-tree-method"
      ]
    }
  },
  {
    "id": "nearest-neighbor-models",
    "name": "Nearest-Neighbor Models",
    "axis": "model-families",
    "definition": "Predictions from nearby observations.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "knnvc",
        "relation": "component",
        "rationale": {
          "en": "The conversion stage performs k-nearest-neighbor regression in WavLM feature space. Released neural checkpoints supply the encoder and vocoder; the kNN stage itself has no pretrained weights.",
          "tr": "Dönüştürme aşaması WavLM özellik uzayında k-en yakın komşu regresyonu yapar. Yayımlanmış sinir ağı ağırlıkları kodlayıcı ve vokoder içindir; kNN aşamasının kendi ön eğitimli ağırlıkları yoktur."
        },
        "sourceIds": [
          "ow-knnvc",
          "ow-knnvc-paper",
          "ow-knnvc-loader"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "There are no learned kNN weights to download. kNN-VC is a documented complete pipeline with released encoder/vocoder weights; its neighbor set comes from the required target-speaker audio. The relation is explicitly a component.",
        "tr": "İndirilecek öğrenilmiş kNN ağırlıkları yoktur. kNN-VC, kodlayıcı/vokoder ağırlıkları yayımlanmış belgeli tam hattır; komşu kümesi gerekli hedef konuşmacı sesinden gelir. İlişki açıkça bileşen olarak işaretlidir."
      },
      "sourceIds": [
        "ow-knnvc",
        "ow-knnvc-loader"
      ]
    }
  },
  {
    "id": "bayesian-networks",
    "name": "Bayesian Networks",
    "axis": "model-families",
    "definition": "Directed probabilistic dependencies.",
    "definitionSourceId": "S01",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "asia-bn",
        "relation": "member",
        "rationale": {
          "en": "The BIF contains a directed network and conditional probability tables for eight variables. These published parameters instantiate a Bayesian network.",
          "tr": "BIF, sekiz değişken için yönlü ağ ve koşullu olasılık tablolarını içerir. Yayımlanan bu parametreler somut bir Bayes ağı oluşturur."
        },
        "sourceIds": [
          "ow-asia-bn",
          "ow-asia-description"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "The downloadable ASIA network includes probability tables. These are published benchmark parameters rather than a generally pretrained or clinically validated predictor. Its named variables must match.",
        "tr": "İndirilebilir ASIA ağı olasılık tablolarını içerir. Bunlar genel ön eğitimli veya klinik doğrulanmış tahminci değil, yayımlanmış karşılaştırma parametreleridir. Adlandırılmış değişkenleri eşleşmelidir."
      },
      "sourceIds": [
        "ow-asia-bn",
        "ow-asia-description"
      ]
    }
  },
  {
    "id": "hidden-markov-models",
    "name": "Hidden Markov Models",
    "axis": "model-families",
    "definition": "Latent state transitions and emissions.",
    "definitionSourceId": "S01",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "pocketsphinx",
        "relation": "component",
        "rationale": {
          "en": "The acoustic model and transition matrices implement the HMM state sequence described by CMUSphinx. Speech recognition belongs to the full decoder pipeline.",
          "tr": "Akustik model ve geçiş matrisleri CMUSphinx’in tanımladığı HMM durum dizisini uygular. Konuşma tanıma tam kod çözücü hattına aittir."
        },
        "sourceIds": [
          "ow-pocketsphinx",
          "ow-sphinx-hmm-gmm",
          "ow-pocketsphinx-usage"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "The English acoustic checkpoint provides a concrete HMM example. Standalone transcription still needs a compatible decoder, language model and pronunciation dictionary, all documented by PocketSphinx.",
        "tr": "İngilizce akustik ağırlıkları somut HMM örneği sağlar. Metne dönüştürme ayrıca PocketSphinx’in belgelediği uyumlu kod çözücü, dil modeli ve telaffuz sözlüğünü gerektirir."
      },
      "sourceIds": [
        "ow-pocketsphinx",
        "ow-pocketsphinx-usage",
        "ow-sphinx-hmm-gmm"
      ]
    }
  },
  {
    "id": "gaussian-mixture-models",
    "name": "Gaussian Mixture Models",
    "axis": "model-families",
    "definition": "Mixtures of component distributions.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "pocketsphinx",
        "relation": "component",
        "rationale": {
          "en": "Gaussian means, variances and mixture weights parameterize acoustic emissions within the HMM recognizer. This is a GMM component, not a standalone general clustering model.",
          "tr": "Gauss ortalamaları, varyansları ve karışım ağırlıkları HMM tanıyıcısındaki akustik emisyonları parametreler. Bir GMM bileşenidir; bağımsız genel kümeleme modeli değildir."
        },
        "sourceIds": [
          "ow-pocketsphinx",
          "ow-sphinx-hmm-gmm"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "The published acoustic GMM is usable within its HMM recognizer. It is not a pretrained clustering solution for arbitrary observations; new domains require fitted distributions.",
        "tr": "Yayımlanmış akustik GMM, kendi HMM tanıyıcısında kullanılabilir. Keyfi gözlemler için ön eğitimli kümeleme çözümü değildir; yeni alanlar uyarlanmış dağılımlar gerektirir."
      },
      "sourceIds": [
        "ow-pocketsphinx",
        "ow-sphinx-hmm-gmm"
      ]
    }
  },
  {
    "id": "linear-factor-models",
    "name": "Linear Factor Models",
    "axis": "model-families",
    "definition": "PCA and related latent-factor models.",
    "definitionSourceId": "S05",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "glove-factors",
        "relation": "member",
        "rationale": {
          "en": "The authors derive a global log-bilinear, weighted matrix-factorization objective. The published word vectors are latent factors; this membership covers related factor models, not PCA specifically.",
          "tr": "Yazarlar küresel log-bilineer, ağırlıklı matris çarpanlama hedefini türetir. Yayımlanmış kelime vektörleri gizli faktörlerdir; üyelik özellikle PCA’yı değil ilişkili faktör modellerini kapsar."
        },
        "sourceIds": [
          "ow-glove-factors",
          "ow-glove-paper",
          "ow-glove-method"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "GloVe supplies released log-bilinear latent factors. This is a related factor-model example, not PCA. A ready PCA transform for arbitrary feature schemas cannot be inferred from these word vectors.",
        "tr": "GloVe yayımlanmış log-bilineer gizli faktörler sağlar. İlişkili faktör modeli örneğidir, PCA değildir. Bu kelime vektörlerinden keyfi özellik şemaları için hazır PCA dönüşümü çıkarılamaz."
      },
      "sourceIds": [
        "ow-glove-factors",
        "ow-glove-paper"
      ]
    }
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
      },
      {
        "modelId": "mamba2",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-mamba2",
          "ow-mamba2-method"
        ]
      },
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
        ]
      },
      {
        "modelId": "mlp-mixer",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-mlp-mixer"
        ]
      },
      {
        "modelId": "resnet50-ssl",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-resnet50-ssl"
        ]
      },
      {
        "modelId": "chgnet",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-chgnet",
          "ow-chgnet-usage"
        ]
      },
      {
        "modelId": "glow",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-glow"
        ]
      },
      {
        "modelId": "jem",
        "relation": "member",
        "rationale": {
          "en": "The cited architecture is a trained neural network.",
          "tr": "Kaynak verilen mimari eğitilmiş sinir ağıdır."
        },
        "sourceIds": [
          "ow-jem"
        ]
      },
      {
        "modelId": "p5-beauty-small",
        "relation": "member",
        "rationale": {
          "en": "The released configuration declares a T5 encoder–decoder with a P5 recommendation head and task objectives.",
          "tr": "Yayımlanan yapılandırma, P5 öneri hedefleriyle kullanılan T5 kodlayıcı–çözücü mimarisini belirtir."
        },
        "sourceIds": [
          "ow-p5-beauty-small",
          "ow-p5-beauty-config"
        ]
      },
      {
        "modelId": "scan-cifar10",
        "relation": "member",
        "rationale": {
          "en": "SCAN learns image clusters with a convolutional backbone and unlabeled-image training; this entry is the fitted CIFAR-10 SCAN-loss checkpoint.",
          "tr": "SCAN, evrişimli omurga ve etiketsiz görüntü eğitimiyle kümeler öğrenir; bu kayıt eğitilmiş CIFAR-10 SCAN-loss sürümüdür."
        },
        "sourceIds": [
          "ow-scan-cifar10"
        ]
      },
      {
        "modelId": "uva-autoencoder128",
        "relation": "member",
        "rationale": {
          "en": "The tutorial’s convolutional encoder/decoder learns a compact image representation through reconstruction without class targets.",
          "tr": "Eğitim materyalindeki evrişimli kodlayıcı/çözücü, sınıf hedefleri olmadan yeniden oluşturma yoluyla sıkıştırılmış görüntü gösterimi öğrenir."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-autoencoder-method"
        ]
      },
      {
        "modelId": "uva-mnist-flow",
        "relation": "member",
        "rationale": {
          "en": "The trained multiscale image flow uses invertible coupling transformations and a likelihood objective; it has no supervised class target.",
          "tr": "Eğitilmiş çok ölçekli görüntü akışı tersinir coupling dönüşümleri ve olabilirlik hedefi kullanır; denetimli sınıf hedefi yoktur."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-flow-method"
        ]
      },
      {
        "modelId": "autocpd-hasc",
        "relation": "member",
        "rationale": {
          "en": "The HASC residual neural classifier is trained on labeled activity/transition windows; the documented pipeline extracts temporal change points.",
          "tr": "HASC residual sinir ağı sınıflandırıcısı etiketli etkinlik/geçiş pencereleriyle eğitilir; belgelenmiş akış zamansal değişim noktalarını çıkarır."
        },
        "sourceIds": [
          "ow-autocpd-hasc",
          "ow-autocpd-inference"
        ]
      },
      {
        "modelId": "graphany-arxiv",
        "relation": "member",
        "rationale": {
          "en": "GraphAny applies learned attention to graph predictors constructed from node features and a labeled subset of the target graph.",
          "tr": "GraphAny, düğüm özellikleri ve hedef grafın etiketli alt kümesinden oluşturulan tahmincilere öğrenilmiş dikkat uygular."
        },
        "sourceIds": [
          "ow-graphany-arxiv",
          "ow-graphany-inputs"
        ]
      },
      {
        "modelId": "dgl-gcn-tox21",
        "relation": "member",
        "rationale": {
          "en": "The Tox21 checkpoint uses graph convolutions, graph pooling and a supervised 12-output molecular classifier.",
          "tr": "Tox21 sürümü graf evrişimleri, graf havuzlama ve denetimli 12 çıktılı molekül sınıflandırıcısı kullanır."
        },
        "sourceIds": [
          "ow-dgl-gcn-tox21",
          "ow-dgl-gcn-readout"
        ]
      },
      {
        "modelId": "hrm-sudoku",
        "relation": "member",
        "rationale": {
          "en": "The author describes two interacting recurrent neural modules trained on Sudoku input/output examples; this membership does not imply a general constraint solver.",
          "tr": "Yazar, Sudoku girdi/çıktı örnekleriyle eğitilen iki etkileşimli tekrarlayan sinir modülü tanımlar; üyelik genel kısıt çözücü desteği anlamına gelmez."
        },
        "sourceIds": [
          "ow-hrm-sudoku",
          "ow-hrm-author-release"
        ]
      },
      {
        "modelId": "hloc-superglue",
        "relation": "component",
        "rationale": {
          "en": "The pipeline includes the released SuperPoint and SuperGlue neural checkpoints alongside geometric localization.",
          "tr": "İşlem hattı, geometrik konumlamanın yanında yayımlanmış SuperPoint ve SuperGlue sinir ağı ağırlıklarını içerir."
        },
        "sourceIds": [
          "ow-hloc-superglue",
          "ow-hloc-pipeline"
        ]
      },
      {
        "modelId": "mpinets-hybrid",
        "relation": "member",
        "rationale": {
          "en": "A neural motion policy learns from hybrid-expert trajectories and consumes robot/scene point clouds and joint-state inputs.",
          "tr": "Sinir ağı hareket politikası hybrid-expert yörüngelerinden öğrenir; robot/sahne nokta bulutları ve eklem durumu girdilerini kullanır."
        },
        "sourceIds": [
          "ow-mpinets-hybrid",
          "ow-mpinets-rollout"
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
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "mlp-mixer",
        "relation": "member",
        "rationale": {
          "en": "Mixer alternates token-mixing and channel-mixing MLPs. Its all-MLP design is explicit in the paper and the exact timm checkpoint card.",
          "tr": "Mixer, token karıştıran ve kanal karıştıran MLP’leri dönüşümlü kullanır. Tam MLP tasarımı makalede ve tam timm ağırlık kartında açıkça belirtilir."
        },
        "sourceIds": [
          "ow-mlp-mixer",
          "ow-mixer-paper"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "MLP-Mixer is an all-MLP vision architecture with an actual released classifier checkpoint. This avoids labeling every network that merely contains a dense layer as an MLP model.",
        "tr": "MLP-Mixer, gerçekten yayımlanmış sınıflandırıcı ağırlıkları olan tam MLP görsel mimarisidir. Yalnızca yoğun katman içeren her ağı MLP modeli sayma hatasından kaçınılır."
      },
      "sourceIds": [
        "ow-mlp-mixer",
        "ow-mixer-paper"
      ]
    }
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
      },
      {
        "modelId": "resnet50-ssl",
        "relation": "member",
        "rationale": {
          "en": "The released image model uses a convolutional residual network.",
          "tr": "Yayımlanmış görüntü modeli evrişimli artık ağ kullanır."
        },
        "sourceIds": [
          "ow-resnet50-ssl"
        ]
      },
      {
        "modelId": "jem",
        "relation": "member",
        "rationale": {
          "en": "The released image model uses a convolutional residual network.",
          "tr": "Yayımlanmış görüntü modeli evrişimli artık ağ kullanır."
        },
        "sourceIds": [
          "ow-jem"
        ]
      },
      {
        "modelId": "scan-cifar10",
        "relation": "member",
        "rationale": {
          "en": "SCAN learns image clusters with a convolutional backbone and unlabeled-image training; this entry is the fitted CIFAR-10 SCAN-loss checkpoint.",
          "tr": "SCAN, evrişimli omurga ve etiketsiz görüntü eğitimiyle kümeler öğrenir; bu kayıt eğitilmiş CIFAR-10 SCAN-loss sürümüdür."
        },
        "sourceIds": [
          "ow-scan-cifar10"
        ]
      },
      {
        "modelId": "uva-autoencoder128",
        "relation": "member",
        "rationale": {
          "en": "The tutorial’s convolutional encoder/decoder learns a compact image representation through reconstruction without class targets.",
          "tr": "Eğitim materyalindeki evrişimli kodlayıcı/çözücü, sınıf hedefleri olmadan yeniden oluşturma yoluyla sıkıştırılmış görüntü gösterimi öğrenir."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-autoencoder-method"
        ]
      },
      {
        "modelId": "autocpd-hasc",
        "relation": "member",
        "rationale": {
          "en": "The HASC residual neural classifier is trained on labeled activity/transition windows; the documented pipeline extracts temporal change points.",
          "tr": "HASC residual sinir ağı sınıflandırıcısı etiketli etkinlik/geçiş pencereleriyle eğitilir; belgelenmiş akış zamansal değişim noktalarını çıkarır."
        },
        "sourceIds": [
          "ow-autocpd-hasc",
          "ow-autocpd-inference"
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
      },
      {
        "modelId": "hrm-sudoku",
        "relation": "member",
        "rationale": {
          "en": "The author describes two interacting recurrent neural modules trained on Sudoku input/output examples; this membership does not imply a general constraint solver.",
          "tr": "Yazar, Sudoku girdi/çıktı örnekleriyle eğitilen iki etkileşimli tekrarlayan sinir modülü tanımlar; üyelik genel kısıt çözücü desteği anlamına gelmez."
        },
        "sourceIds": [
          "ow-hrm-sudoku",
          "ow-hrm-author-release"
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
      },
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The model is an autoregressive transformer language model.",
          "tr": "Model otoregresif transformer dil modelidir."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "The model is an autoregressive transformer language model.",
          "tr": "Model otoregresif transformer dil modelidir."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
        ]
      },
      {
        "modelId": "p5-beauty-small",
        "relation": "member",
        "rationale": {
          "en": "The released configuration declares a T5 encoder–decoder with a P5 recommendation head and task objectives.",
          "tr": "Yayımlanan yapılandırma, P5 öneri hedefleriyle kullanılan T5 kodlayıcı–çözücü mimarisini belirtir."
        },
        "sourceIds": [
          "ow-p5-beauty-small",
          "ow-p5-beauty-config"
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
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "chgnet",
        "relation": "member",
        "rationale": {
          "en": "CHGNet performs learned atom and bond interactions on crystal graphs to predict physical properties.",
          "tr": "CHGNet fiziksel özellikleri tahmin etmek için kristal grafları üzerinde öğrenilmiş atom ve bağ etkileşimleri kullanır."
        },
        "sourceIds": [
          "ow-chgnet",
          "ow-chgnet-usage"
        ]
      },
      {
        "modelId": "dgl-gcn-tox21",
        "relation": "member",
        "rationale": {
          "en": "The Tox21 checkpoint uses graph convolutions, graph pooling and a supervised 12-output molecular classifier.",
          "tr": "Tox21 sürümü graf evrişimleri, graf havuzlama ve denetimli 12 çıktılı molekül sınıflandırıcısı kullanır."
        },
        "sourceIds": [
          "ow-dgl-gcn-tox21",
          "ow-dgl-gcn-readout"
        ]
      },
      {
        "modelId": "hloc-superglue",
        "relation": "component",
        "rationale": {
          "en": "SuperGlue uses an attentional graph neural network for matching; the full hloc pipeline also includes a geometric solver.",
          "tr": "SuperGlue eşleştirmede dikkat tabanlı graf sinir ağı kullanır; tam hloc akışı ayrıca geometrik çözücü içerir."
        },
        "sourceIds": [
          "ow-hloc-superglue",
          "ow-hloc-pipeline"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "CHGNet’s versioned crystal-potential checkpoint gives a concrete graph-network example. Node classification and unrelated graph tasks are not implied by its architecture.",
        "tr": "CHGNet’in sürümlü kristal potansiyeli ağırlıkları somut graf ağı örneğidir. Düğüm sınıflandırma ve ilişkisiz graf görevleri mimariden çıkarılamaz."
      },
      "sourceIds": [
        "ow-chgnet",
        "ow-chgnet-usage"
      ]
    }
  },
  {
    "id": "state-space-networks",
    "name": "State-Space Networks",
    "axis": "neural-architectures",
    "definition": "Structured sequence state dynamics.",
    "definitionSourceId": "S25",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "mamba2",
        "relation": "member",
        "rationale": {
          "en": "The authors list this exact Mamba2 checkpoint and document its structured state-space duality blocks. It is distinct from their separately released attention hybrid.",
          "tr": "Yazarlar tam bu Mamba2 ağırlıklarını listeler ve yapılandırılmış durum uzayı dualitesi bloklarını belgeler. Ayrı yayımladıkları dikkat hibritinden farklıdır."
        },
        "sourceIds": [
          "ow-mamba2",
          "ow-mamba2-method"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "The released Mamba2 2.7B base checkpoint is explicitly documented as an SSM architecture. Its evidence is separate from hybrid recurrent/attention models and does not establish assistant behavior.",
        "tr": "Yayımlanmış Mamba2 2.7B temel ağırlıkları açıkça SSM mimarisi olarak belgelenir. Kanıtı hibrit yinelemeli/dikkat modellerinden ayrıdır ve asistan davranışını kanıtlamaz."
      },
      "sourceIds": [
        "ow-mamba2",
        "ow-mamba2-method"
      ]
    }
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
      },
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses a causal language-model decoder.",
          "tr": "Ağırlıklar nedensel dil modeli kod çözücüsü kullanır."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "The checkpoint uses a causal language-model decoder.",
          "tr": "Ağırlıklar nedensel dil modeli kod çözücüsü kullanır."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
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
      },
      {
        "modelId": "p5-beauty-small",
        "relation": "member",
        "rationale": {
          "en": "The released configuration declares a T5 encoder–decoder with a P5 recommendation head and task objectives.",
          "tr": "Yayımlanan yapılandırma, P5 öneri hedefleriyle kullanılan T5 kodlayıcı–çözücü mimarisini belirtir."
        },
        "sourceIds": [
          "ow-p5-beauty-small",
          "ow-p5-beauty-config"
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
      },
      {
        "modelId": "fasttext-lid",
        "relation": "member",
        "rationale": {
          "en": "The cited release is fitted to labeled targets in its stated domain.",
          "tr": "Kaynak verilen sürüm belirtilen alandaki etiketli hedeflere göre eğitilmiştir."
        },
        "sourceIds": [
          "ow-fasttext-lid"
        ]
      },
      {
        "modelId": "dlib-five",
        "relation": "member",
        "rationale": {
          "en": "The cited release is fitted to labeled targets in its stated domain.",
          "tr": "Kaynak verilen sürüm belirtilen alandaki etiketli hedeflere göre eğitilmiştir."
        },
        "sourceIds": [
          "ow-dlib-five",
          "ow-dlib-five-training"
        ]
      },
      {
        "modelId": "brisque",
        "relation": "member",
        "rationale": {
          "en": "The cited release is fitted to labeled targets in its stated domain.",
          "tr": "Kaynak verilen sürüm belirtilen alandaki etiketli hedeflere göre eğitilmiştir."
        },
        "sourceIds": [
          "ow-brisque",
          "ow-brisque-parameters"
        ]
      },
      {
        "modelId": "mlp-mixer",
        "relation": "member",
        "rationale": {
          "en": "The cited release is fitted to labeled targets in its stated domain.",
          "tr": "Kaynak verilen sürüm belirtilen alandaki etiketli hedeflere göre eğitilmiştir."
        },
        "sourceIds": [
          "ow-mlp-mixer"
        ]
      },
      {
        "modelId": "chgnet",
        "relation": "member",
        "rationale": {
          "en": "The cited release is fitted to labeled targets in its stated domain.",
          "tr": "Kaynak verilen sürüm belirtilen alandaki etiketli hedeflere göre eğitilmiştir."
        },
        "sourceIds": [
          "ow-chgnet",
          "ow-chgnet-usage"
        ]
      },
      {
        "modelId": "p5-beauty-small",
        "relation": "member",
        "rationale": {
          "en": "Observed ratings and item sequences supervise the recommendation tasks in the author evaluation setup.",
          "tr": "Yazarın değerlendirme düzeninde gözlenen puanlar ve ürün dizileri öneri görevlerinin hedefleridir."
        },
        "sourceIds": [
          "ow-p5-beauty-small",
          "ow-p5-beauty-evaluation"
        ]
      },
      {
        "modelId": "autocpd-hasc",
        "relation": "member",
        "rationale": {
          "en": "The HASC residual neural classifier is trained on labeled activity/transition windows; the documented pipeline extracts temporal change points.",
          "tr": "HASC residual sinir ağı sınıflandırıcısı etiketli etkinlik/geçiş pencereleriyle eğitilir; belgelenmiş akış zamansal değişim noktalarını çıkarır."
        },
        "sourceIds": [
          "ow-autocpd-hasc",
          "ow-autocpd-inference"
        ]
      },
      {
        "modelId": "dgl-gcn-tox21",
        "relation": "member",
        "rationale": {
          "en": "The Tox21 checkpoint uses graph convolutions, graph pooling and a supervised 12-output molecular classifier.",
          "tr": "Tox21 sürümü graf evrişimleri, graf havuzlama ve denetimli 12 çıktılı molekül sınıflandırıcısı kullanır."
        },
        "sourceIds": [
          "ow-dgl-gcn-tox21",
          "ow-dgl-gcn-readout"
        ]
      },
      {
        "modelId": "hrm-sudoku",
        "relation": "member",
        "rationale": {
          "en": "The author describes two interacting recurrent neural modules trained on Sudoku input/output examples; this membership does not imply a general constraint solver.",
          "tr": "Yazar, Sudoku girdi/çıktı örnekleriyle eğitilen iki etkileşimli tekrarlayan sinir modülü tanımlar; üyelik genel kısıt çözücü desteği anlamına gelmez."
        },
        "sourceIds": [
          "ow-hrm-sudoku",
          "ow-hrm-author-release"
        ]
      },
      {
        "modelId": "mpinets-hybrid",
        "relation": "member",
        "rationale": {
          "en": "A neural motion policy learns from hybrid-expert trajectories and consumes robot/scene point clouds and joint-state inputs.",
          "tr": "Sinir ağı hareket politikası hybrid-expert yörüngelerinden öğrenir; robot/sahne nokta bulutları ve eklem durumu girdilerini kullanır."
        },
        "sourceIds": [
          "ow-mpinets-hybrid",
          "ow-mpinets-rollout"
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
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "glow",
        "relation": "member",
        "rationale": {
          "en": "Glow learns an image distribution by maximum likelihood without external class targets in its unconditional CelebA-HQ setup. Attribute manipulation is a separate demo operation.",
          "tr": "Glow, koşulsuz CelebA-HQ düzeninde dış sınıf hedefleri olmadan maksimum olabilirlikle görüntü dağılımını öğrenir. Nitelik değiştirme ayrı bir demo işlemidir."
        },
        "sourceIds": [
          "ow-glow",
          "ow-glow-paper"
        ]
      },
      {
        "modelId": "scan-cifar10",
        "relation": "member",
        "rationale": {
          "en": "SCAN learns image clusters with a convolutional backbone and unlabeled-image training; this entry is the fitted CIFAR-10 SCAN-loss checkpoint.",
          "tr": "SCAN, evrişimli omurga ve etiketsiz görüntü eğitimiyle kümeler öğrenir; bu kayıt eğitilmiş CIFAR-10 SCAN-loss sürümüdür."
        },
        "sourceIds": [
          "ow-scan-cifar10"
        ]
      },
      {
        "modelId": "uva-autoencoder128",
        "relation": "member",
        "rationale": {
          "en": "The tutorial’s convolutional encoder/decoder learns a compact image representation through reconstruction without class targets.",
          "tr": "Eğitim materyalindeki evrişimli kodlayıcı/çözücü, sınıf hedefleri olmadan yeniden oluşturma yoluyla sıkıştırılmış görüntü gösterimi öğrenir."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-autoencoder-method"
        ]
      },
      {
        "modelId": "uva-mnist-flow",
        "relation": "member",
        "rationale": {
          "en": "The trained multiscale image flow uses invertible coupling transformations and a likelihood objective; it has no supervised class target.",
          "tr": "Eğitilmiş çok ölçekli görüntü akışı tersinir coupling dönüşümleri ve olabilirlik hedefi kullanır; denetimli sınıf hedefi yoktur."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-flow-method"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "Unconditional Glow distribution learning supplies a concrete unsupervised example. The model learns image statistics; the demo’s later attribute manipulation does not imply supervised pretraining.",
        "tr": "Koşulsuz Glow dağılım öğrenmesi somut gözetimsiz örnek sağlar. Model görüntü istatistiklerini öğrenir; demonun sonraki nitelik değiştirme işlemi gözetimli ön eğitim anlamına gelmez."
      },
      "sourceIds": [
        "ow-glow",
        "ow-glow-paper"
      ]
    }
  },
  {
    "id": "semi-supervised-learning",
    "name": "Semi-Supervised Learning",
    "axis": "learning-paradigms",
    "definition": "Labeled and unlabeled examples together.",
    "definitionSourceId": "S02",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "resnet50-ssl",
        "relation": "member",
        "rationale": {
          "en": "The SSL release uses a teacher trained on labeled data to label selected unlabeled images, followed by ImageNet fine-tuning. This is documented training history.",
          "tr": "SSL sürümü, seçili etiketsiz görüntüleri etiketlemek için etiketli veriyle eğitilmiş öğretmen kullanır; ardından ImageNet ince ayarı gelir. Bu, belgelenmiş eğitim geçmişidir."
        },
        "sourceIds": [
          "ow-resnet50-ssl",
          "ow-ssl-method"
        ]
      },
      {
        "modelId": "graphany-arxiv",
        "relation": "member",
        "rationale": {
          "en": "GraphAny applies learned attention to graph predictors constructed from node features and a labeled subset of the target graph.",
          "tr": "GraphAny, düğüm özellikleri ve hedef grafın etiketli alt kümesinden oluşturulan tahmincilere öğrenilmiş dikkat uygular."
        },
        "sourceIds": [
          "ow-graphany-arxiv",
          "ow-graphany-inputs"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "Meta’s SSL release explicitly combines labeled-teacher supervision with unlabeled images. The selected timm artifact identifies this training recipe; generic pretraining plus fine-tuning alone was not used as evidence.",
        "tr": "Meta’nın SSL sürümü, etiketli öğretmen gözetimini etiketsiz görüntülerle açıkça birleştirir. Seçilen timm dosyası bu eğitim tarifini belirtir; yalnızca genel ön eğitim ve ince ayar kanıt sayılmamıştır."
      },
      "sourceIds": [
        "ow-resnet50-ssl",
        "ow-ssl-method"
      ]
    }
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
      },
      {
        "modelId": "mamba2",
        "relation": "member",
        "rationale": {
          "en": "The documented language model generates a continuation one token at a time.",
          "tr": "Belgelenmiş dil modeli devamı token token üretir."
        },
        "sourceIds": [
          "ow-mamba2",
          "ow-mamba2-method"
        ]
      },
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The documented language model generates a continuation one token at a time.",
          "tr": "Belgelenmiş dil modeli devamı token token üretir."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "The documented language model generates a continuation one token at a time.",
          "tr": "Belgelenmiş dil modeli devamı token token üretir."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
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
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "glow",
        "relation": "member",
        "rationale": {
          "en": "Glow composes invertible transforms, including learned invertible 1×1 convolutions; the official demo links the released CelebA-HQ graph.",
          "tr": "Glow, öğrenilmiş terslenebilir 1×1 evrişimler dahil terslenebilir dönüşümleri birleştirir; resmî demo yayımlanmış CelebA-HQ grafını bağlar."
        },
        "sourceIds": [
          "ow-glow",
          "ow-glow-paper",
          "ow-glow-download"
        ]
      },
      {
        "modelId": "uva-mnist-flow",
        "relation": "member",
        "rationale": {
          "en": "The trained multiscale image flow uses invertible coupling transformations and a likelihood objective; it has no supervised class target.",
          "tr": "Eğitilmiş çok ölçekli görüntü akışı tersinir coupling dönüşümleri ve olabilirlik hedefi kullanır; denetimli sınıf hedefi yoktur."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-flow-method"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "The original Glow demo’s hosted graph is still available. It has no immutable Git artifact revision; the catalogue records its observed file size and ETag and displays that limitation. Legacy runtime and domain constraints remain.",
        "tr": "Özgün Glow demosunun barındırılan grafına hâlâ erişiliyor. Dosyanın değişmez Git sürümü yoktur; katalog gözlenen boyutu ve ETag’i kaydeder, bu sınırı gösterir. Eski çalışma ortamı ve alan kısıtları geçerlidir."
      },
      "sourceIds": [
        "ow-glow",
        "ow-glow-download"
      ]
    }
  },
  {
    "id": "energy-based-models",
    "name": "Energy-Based Models",
    "axis": "generative-formulations",
    "definition": "Compatibility encoded by an energy function.",
    "definitionSourceId": "S05",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "jem",
        "relation": "member",
        "rationale": {
          "en": "JEM jointly trains its classifier and an energy-based marginal over inputs. The repository identifies the released CIFAR-10 checkpoint and its evaluation commands.",
          "tr": "JEM sınıflandırıcısını ve girdiler üzerindeki enerji tabanlı marjinalini birlikte eğitir. Depo, yayımlanan CIFAR-10 ağırlıklarını ve değerlendirme komutlarını belirtir."
        },
        "sourceIds": [
          "ow-jem",
          "ow-jem-paper"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "JEM releases a CIFAR-10 checkpoint trained with an explicit energy objective. The publisher-hosted file is observable but not Git-pinned; an ordinary classifier was not relabeled as an EBM.",
        "tr": "JEM açık enerji hedefiyle eğitilmiş CIFAR-10 ağırlıkları yayımlar. Yayıncıdaki dosya gözlenebilir ancak Git sürümüne sabitli değildir; sıradan sınıflandırıcı yeniden EBM diye etiketlenmemiştir."
      },
      "sourceIds": [
        "ow-jem",
        "ow-jem-paper"
      ]
    }
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
      },
      {
        "modelId": "fasttext-lid",
        "relation": "member",
        "rationale": {
          "en": "The released artifact operates on text or word representations.",
          "tr": "Yayımlanmış dosya metin veya kelime temsilleri üzerinde çalışır."
        },
        "sourceIds": [
          "ow-fasttext-lid"
        ]
      },
      {
        "modelId": "mamba2",
        "relation": "member",
        "rationale": {
          "en": "The released artifact operates on text or word representations.",
          "tr": "Yayımlanmış dosya metin veya kelime temsilleri üzerinde çalışır."
        },
        "sourceIds": [
          "ow-mamba2",
          "ow-mamba2-method"
        ]
      },
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The released artifact operates on text or word representations.",
          "tr": "Yayımlanmış dosya metin veya kelime temsilleri üzerinde çalışır."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "The released artifact operates on text or word representations.",
          "tr": "Yayımlanmış dosya metin veya kelime temsilleri üzerinde çalışır."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
        ]
      },
      {
        "modelId": "glove-factors",
        "relation": "member",
        "rationale": {
          "en": "The released artifact operates on text or word representations.",
          "tr": "Yayımlanmış dosya metin veya kelime temsilleri üzerinde çalışır."
        },
        "sourceIds": [
          "ow-glove-factors",
          "ow-glove-method"
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
      },
      {
        "modelId": "mlp-mixer",
        "relation": "member",
        "rationale": {
          "en": "The released model and its documented inference use image inputs.",
          "tr": "Yayımlanmış model ve belgelenmiş çıkarımı görüntü girdileri kullanır."
        },
        "sourceIds": [
          "ow-mlp-mixer"
        ]
      },
      {
        "modelId": "resnet50-ssl",
        "relation": "member",
        "rationale": {
          "en": "The released model and its documented inference use image inputs.",
          "tr": "Yayımlanmış model ve belgelenmiş çıkarımı görüntü girdileri kullanır."
        },
        "sourceIds": [
          "ow-resnet50-ssl"
        ]
      },
      {
        "modelId": "dlib-five",
        "relation": "member",
        "rationale": {
          "en": "The released model and its documented inference use image inputs.",
          "tr": "Yayımlanmış model ve belgelenmiş çıkarımı görüntü girdileri kullanır."
        },
        "sourceIds": [
          "ow-dlib-five",
          "ow-dlib-five-training"
        ]
      },
      {
        "modelId": "brisque",
        "relation": "member",
        "rationale": {
          "en": "The released model and its documented inference use image inputs.",
          "tr": "Yayımlanmış model ve belgelenmiş çıkarımı görüntü girdileri kullanır."
        },
        "sourceIds": [
          "ow-brisque",
          "ow-brisque-parameters"
        ]
      },
      {
        "modelId": "glow",
        "relation": "member",
        "rationale": {
          "en": "The released model and its documented inference use image inputs.",
          "tr": "Yayımlanmış model ve belgelenmiş çıkarımı görüntü girdileri kullanır."
        },
        "sourceIds": [
          "ow-glow"
        ]
      },
      {
        "modelId": "jem",
        "relation": "member",
        "rationale": {
          "en": "The released model and its documented inference use image inputs.",
          "tr": "Yayımlanmış model ve belgelenmiş çıkarımı görüntü girdileri kullanır."
        },
        "sourceIds": [
          "ow-jem"
        ]
      },
      {
        "modelId": "scan-cifar10",
        "relation": "member",
        "rationale": {
          "en": "SCAN learns image clusters with a convolutional backbone and unlabeled-image training; this entry is the fitted CIFAR-10 SCAN-loss checkpoint.",
          "tr": "SCAN, evrişimli omurga ve etiketsiz görüntü eğitimiyle kümeler öğrenir; bu kayıt eğitilmiş CIFAR-10 SCAN-loss sürümüdür."
        },
        "sourceIds": [
          "ow-scan-cifar10"
        ]
      },
      {
        "modelId": "uva-autoencoder128",
        "relation": "member",
        "rationale": {
          "en": "The tutorial’s convolutional encoder/decoder learns a compact image representation through reconstruction without class targets.",
          "tr": "Eğitim materyalindeki evrişimli kodlayıcı/çözücü, sınıf hedefleri olmadan yeniden oluşturma yoluyla sıkıştırılmış görüntü gösterimi öğrenir."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-autoencoder-method"
        ]
      },
      {
        "modelId": "uva-mnist-flow",
        "relation": "member",
        "rationale": {
          "en": "The trained multiscale image flow uses invertible coupling transformations and a likelihood objective; it has no supervised class target.",
          "tr": "Eğitilmiş çok ölçekli görüntü akışı tersinir coupling dönüşümleri ve olabilirlik hedefi kullanır; denetimli sınıf hedefi yoktur."
        },
        "sourceIds": [
          "ow-uva-saved-models",
          "ow-uva-flow-method"
        ]
      },
      {
        "modelId": "hloc-superglue",
        "relation": "member",
        "rationale": {
          "en": "Camera images supply features and matches for localization against a reference map.",
          "tr": "Kamera görüntüleri, referans haritada konumlama için özellik ve eşleşmeleri sağlar."
        },
        "sourceIds": [
          "ow-hloc-superglue",
          "ow-hloc-pipeline"
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
      },
      {
        "modelId": "pocketsphinx",
        "relation": "member",
        "rationale": {
          "en": "The documented full pipeline processes speech waveforms.",
          "tr": "Belgelenmiş tam hat konuşma dalga biçimlerini işler."
        },
        "sourceIds": [
          "ow-pocketsphinx",
          "ow-pocketsphinx-usage"
        ]
      },
      {
        "modelId": "knnvc",
        "relation": "member",
        "rationale": {
          "en": "The documented full pipeline processes speech waveforms.",
          "tr": "Belgelenmiş tam hat konuşma dalga biçimlerini işler."
        },
        "sourceIds": [
          "ow-knnvc"
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
      },
      {
        "modelId": "autocpd-hasc",
        "relation": "member",
        "rationale": {
          "en": "The HASC residual neural classifier is trained on labeled activity/transition windows; the documented pipeline extracts temporal change points.",
          "tr": "HASC residual sinir ağı sınıflandırıcısı etiketli etkinlik/geçiş pencereleriyle eğitilir; belgelenmiş akış zamansal değişim noktalarını çıkarır."
        },
        "sourceIds": [
          "ow-autocpd-hasc",
          "ow-autocpd-inference"
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
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "chgnet",
        "relation": "member",
        "rationale": {
          "en": "Its inputs are periodic crystal graphs containing atoms and their neighborhood relations. Graph-level energy is a supported numerical output.",
          "tr": "Girdileri atomları ve komşuluk ilişkilerini içeren periyodik kristal graflarıdır. Graf düzeyinde enerji desteklenen sayısal çıktıdır."
        },
        "sourceIds": [
          "ow-chgnet",
          "ow-chgnet-usage"
        ]
      },
      {
        "modelId": "anyburl-rules",
        "relation": "member",
        "rationale": {
          "en": "The released symbolic rules operate on a relational knowledge graph.",
          "tr": "Yayımlanmış sembolik kurallar ilişkisel bilgi grafı üzerinde çalışır."
        },
        "sourceIds": [
          "ow-anyburl-rules"
        ]
      },
      {
        "modelId": "graphany-arxiv",
        "relation": "member",
        "rationale": {
          "en": "GraphAny applies learned attention to graph predictors constructed from node features and a labeled subset of the target graph.",
          "tr": "GraphAny, düğüm özellikleri ve hedef grafın etiketli alt kümesinden oluşturulan tahmincilere öğrenilmiş dikkat uygular."
        },
        "sourceIds": [
          "ow-graphany-arxiv",
          "ow-graphany-inputs"
        ]
      },
      {
        "modelId": "dgl-gcn-tox21",
        "relation": "member",
        "rationale": {
          "en": "The Tox21 checkpoint uses graph convolutions, graph pooling and a supervised 12-output molecular classifier.",
          "tr": "Tox21 sürümü graf evrişimleri, graf havuzlama ve denetimli 12 çıktılı molekül sınıflandırıcısı kullanır."
        },
        "sourceIds": [
          "ow-dgl-gcn-tox21",
          "ow-dgl-gcn-readout"
        ]
      },
      {
        "modelId": "goose-blocksworld",
        "relation": "member",
        "rationale": {
          "en": "The pipeline represents PDDL states as graphs and applies Weisfeiler–Leman features before its learned scorer.",
          "tr": "İşlem hattı, PDDL durumlarını graf olarak temsil eder ve öğrenilmiş puanlayıcıdan önce Weisfeiler–Leman özellikleri uygular."
        },
        "sourceIds": [
          "ow-goose-blocksworld",
          "ow-goose-training-config"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "Periodic crystal graphs are supported by CHGNet. A modality label does not imply support for every graph task; the shared task edge is crystal-energy regression.",
        "tr": "Periyodik kristal grafları CHGNet tarafından desteklenir. Veri türü etiketi tüm graf görevlerini kapsamaz; ortak görev ilişkisi kristal enerjisi regresyonudur."
      },
      "sourceIds": [
        "ow-chgnet",
        "ow-chgnet-usage"
      ]
    }
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
      },
      {
        "modelId": "hloc-superglue",
        "relation": "component",
        "rationale": {
          "en": "A 3D SfM map and 2D–3D correspondences are geometric components required for pose estimation.",
          "tr": "3B SfM haritası ve 2B–3B eşleşmeler, poz kestirimi için gerekli geometrik bileşenlerdir."
        },
        "sourceIds": [
          "ow-hloc-superglue",
          "ow-hloc-pose"
        ]
      },
      {
        "modelId": "mpinets-hybrid",
        "relation": "member",
        "rationale": {
          "en": "A neural motion policy learns from hybrid-expert trajectories and consumes robot/scene point clouds and joint-state inputs.",
          "tr": "Sinir ağı hareket politikası hybrid-expert yörüngelerinden öğrenir; robot/sahne nokta bulutları ve eklem durumu girdilerini kullanır."
        },
        "sourceIds": [
          "ow-mpinets-hybrid",
          "ow-mpinets-rollout"
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
      },
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The release explicitly includes supervised instruction post-training.",
          "tr": "Sürüm açıkça gözetimli talimat son eğitimi içerir."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      },
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "The release explicitly includes supervised instruction post-training.",
          "tr": "Sürüm açıkça gözetimli talimat son eğitimi içerir."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
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
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "llama31-rlhf",
        "relation": "member",
        "rationale": {
          "en": "Meta’s model card explicitly attributes SFT and reinforcement learning with human feedback to the instruction-tuned Llama 3.1 models.",
          "tr": "Meta’nın model kartı talimatla ayarlanmış Llama 3.1 modelleri için SFT ve insan geri bildirimiyle pekiştirmeli öğrenmeyi açıkça belirtir."
        },
        "sourceIds": [
          "ow-llama31-rlhf"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "Llama 3.1 Instruct’s own card explicitly names RLHF. This mapping does not infer human preference training from generic reinforcement learning, reward models or verifier feedback.",
        "tr": "Llama 3.1 Instruct’ın kendi kartı RLHF’yi açıkça adlandırır. Bu eşleştirme genel pekiştirmeli öğrenme, ödül modelleri veya doğrulayıcı geri bildiriminden insan tercihli eğitim çıkarmaz."
      },
      "sourceIds": [
        "ow-llama31-rlhf"
      ]
    }
  },
  {
    "id": "direct-preference-optimization",
    "name": "Direct Preference Optimization",
    "axis": "training-adaptation",
    "definition": "Optimize directly from preference pairs.",
    "definitionSourceId": "S36",
    "note": {
      "en": "The example below is specific to its released artifact, input domain and documented task.",
      "tr": "Aşağıdaki örnek yayımlanmış dosyasına, girdi alanına ve belgelenmiş görevine özgüdür."
    },
    "models": [
      {
        "modelId": "olmo2-dpo",
        "relation": "member",
        "rationale": {
          "en": "The exact stage card states that SFT is followed by DPO on the named preference mix, and separately lists later RLVR checkpoints.",
          "tr": "Tam aşama kartı, SFT’yi adı verilen tercih karışımı üzerinde DPO’nun izlediğini belirtir ve sonraki RLVR ağırlıklarını ayrı listeler."
        },
        "sourceIds": [
          "ow-olmo2-dpo"
        ]
      }
    ],
    "review": {
      "observedAt": "2026-10-21",
      "summary": {
        "en": "The named OLMo DPO-stage checkpoint documents direct preference training. Its later RLVR sibling is kept separate, including the evaluation claims.",
        "tr": "Adı verilen OLMo DPO aşaması ağırlıkları doğrudan tercih eğitimini belgeler. Sonraki RLVR kardeşi, değerlendirme iddiaları dahil ayrı tutulur."
      },
      "sourceIds": [
        "ow-olmo2-dpo"
      ]
    }
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
