# Task benchmark evidence audit — 2026-10-21

## Scope / Kapsam

All 85 task cards have an English/Turkish research review. There are 48 scoped numerical tables: 34 tasks have a comparison, 10 have a single verified result, and 41 have an explicit explanation of the missing comparable evidence. The review adds 39 release records and 139 primary observations. These records extend the task inspector; they do not silently change the 77-entry architecture catalogue.

85 görev kartının tümünde İngilizce/Türkçe araştırma değerlendirmesi bulunur. 48 kapsamı belirtilmiş sayısal tablo vardır: 34 görev karşılaştırmalı, 10 görev tek doğrulanmış sonuçlu, 41 görev ise karşılaştırılabilir kanıtın neden eksik olduğunu açıklar. İnceleme 39 sürüm kaydı ve 139 birincil gözlem ekler. Bunlar görev panelini genişletir; 77 kayıtlı mimari kataloğunu sessizce değiştirmez.

## Evidence rules / Kanıt kuralları

- Published results were inspected, not reproduced by running models. Weight presence and immutable release identities were checked through repository metadata; large checkpoint payloads were not downloaded or hashed.
- Yayımlanmış sonuçlar incelendi; modeller çalıştırılarak yeniden üretilmedi. Ağırlık varlığı ve değişmez sürüm kimlikleri depo meta verisinden kontrol edildi; büyük checkpoint dosyaları indirilmedi veya hash hesaplanmadı.
- A leader is local to a dataset, metric and protocol. Tables remain separate; no overall score, universal best-model claim or confidence interval is invented. Single-result tables have no winner badge.
- Liderlik veri kümesi, ölçüt ve protokolle sınırlıdır. Tablolar ayrı kalır; genel puan, evrensel en iyi model iddiası veya güven aralığı üretilmez. Tek sonuçlu tablolarda lider rozeti yoktur.
- Source observation date and result publication date are distinct. Unknown publication dates stay null. Year/month precision is preserved; prior-year results are labelled in the UI.
- Kaynağın kontrol tarihi ve sonucun yayım tarihi farklıdır. Bilinmeyen yayım tarihi null kalır. Yıl/ay hassasiyeti korunur; önceki yıl sonuçları arayüzde etiketlenir.
- Proxies are labelled: IFBench for generation/dialogue, MTEB aggregate for document/passage retrieval, OmniDocBench for OCR, Toolathlon for function calling, and code reranking for code search.
- Dolaylı ölçümler etiketlidir: üretim/sohbet için IFBench, belge/pasaj getirme için MTEB ortalaması, OCR için OmniDocBench, işlev çağırma için Toolathlon ve kod arama için yeniden sıralama.
- The MQR-A1 card reports BRIGHT pipeline scores, but its inspected revision has no weight files. It is cited as an exclusion, not registered as a released model. Mage-Flow scores are not attributed to unavailable checkpoints. Qwen-Image-2.1 is a released candidate without an invented matching score.
- MQR-A1 kartı BRIGHT işlem hattı puanları bildirir; incelenen sürümde ağırlık dosyası yoktur. Dışlama gerekçesi olarak kaynaklandırılır, yayımlanmış model kaydı olmaz. Mage-Flow puanları erişilemeyen checkpoint’lere atanmaz. Qwen-Image-2.1, eşleşen puanı uydurulmadan yayımlanmış aday olarak yer alır.
- pyannote 3.1 is a gated pipeline/configuration that resolves separately released model components. It is not a standalone tensor bundle. Marigold V2 is an adapter requiring its documented base. DriftSE and DriftSE† refer to distinct released checkpoint paths.
- pyannote 3.1, ayrı yayımlanmış model bileşenlerini çözen erişim koşullu işlem hattı/ayarlardır; tek tensör paketi değildir. Marigold V2 belgelenmiş tabanını gerektiren adaptördür. DriftSE ve DriftSE† farklı checkpoint yollarına işaret eder.

## Numerical observations / Sayısal gözlemler

| ID | Tasks | Dataset / metric | Results | Published | Primary source |
| --- | --- | --- | --- | --- | --- |
| gliner-class | text-classification | Classification / F1 (higher) | GLiNER2.5 multi v1: 72.44; GLiNER2.5 base v1: 69.86; GLiNER2 multi v1: 70.32; GLiNER2 base v1: 68.89 | 2026-08-24 | [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction) |
| gliner-xnli | natural-language-inference | XNLI / F1 (higher) | GLiNER2.5 multi v1: 62.3; GLiNER2.5 base v1: 54.49; GLiNER2 multi v1: 37.55; GLiNER2 base v1: 49.01 | 2026-08-24 | [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction) |
| gliner-crossner | named-entity-recognition | CrossNER / F1 (higher) | GLiNER2.5 multi v1: 54.85; GLiNER2.5 base v1: 58.3; GLiNER2 multi v1: 57.84; GLiNER2 base v1: 59.06 | 2026-08-24 | [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction) |
| gliner-fewnerd | named-entity-recognition | FewNERD / F1 (higher) | GLiNER2.5 multi v1: 52.37; GLiNER2.5 base v1: 55.14; GLiNER2 multi v1: 51.49; GLiNER2 base v1: 47.22 | 2026-08-24 | [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction) |
| coref-ontonotes | coreference-resolution | OntoNotes 5.0 · test / Mean CoNLL F1 (higher) | LingMess Coref: 81.4; F-Coref: 78.5 | 2022-10-25 | [F-coref · Table 1](https://arxiv.org/html/2209.04280v4) |
| coedit-jfleg | grammatical-error-correction | JFLEG · EditEval / GLEU (higher) | CoEdIT XL: 60.7; CoEdIT large: 59.3 | 2023-10-23 | [CoEdIT · Table 2](https://arxiv.org/html/2305.09857v2) |
| hymt-wmt | machine-translation | WMT25 / XCOMET-XXL (higher) | Hy-MT2-7B: 63.86; Hy-MT2-30B-A3B: 62.89 | 2026-05-21 | [Hy-MT2 · Table 2](https://arxiv.org/html/2605.22064v1) |
| hymt-wmt-gemba | machine-translation | WMT25 / GEMBA (higher) | Hy-MT2-7B: 82.24; Hy-MT2-30B-A3B: 84.34 | 2026-05-21 | [Hy-MT2 · Table 2](https://arxiv.org/html/2605.22064v1) |
| qwen-if | text-generation, dialogue-response-generation | IFBench / Accuracy (higher) | Qwen3.8-27B: 79.5; Qwen3.6-27B: 69.1 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| qwen-gpqa | question-answering | GPQA Diamond / Accuracy (higher) | Qwen3.8-27B: 89.2; Qwen3.6-27B: 87.8 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| qwen-vqa | visual-question-answering | RealWorldQA / Accuracy (higher) | Qwen3.8-27B: 85.9; Qwen3.6-27B: 84.1 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| qwen-ocr | optical-character-recognition | OmniDocBench 1.5 / Overall score (higher) | Qwen3.8-27B: 91.1; Qwen3.6-27B: 89.4 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| qwen-code | text-to-code-generation | LiveCodeBench v6 / Pass rate (higher) | Qwen3.8-27B: 90.3; Qwen3.6-27B: 83.9 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| qwen-web | web-task-execution | WebArena-Verified / Success rate (higher) | Qwen3.8-27B: 64.8; Qwen3.6-27B: 48.8 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| qwen-desktop | desktop-task-execution | OSWorld-Verified / Success rate (higher) | Qwen3.8-27B: 84.3; Qwen3.6-27B: 63.9 | not stated / belirtilmemiş | [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md) |
| deepseek-swe | code-repair | DeepSWE v1.1 / Success rate (higher) | DeepSeek-V4.1-Flash-1017: 77; Kimi K3: 67.5; GLM-5.3: 66.9 | 2026-10-17 | [deepseek-ai/DeepSeek-V4.1-Flash-1017 · model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/README.md) |
| glm-toolathlon | function-calling | Toolathlon Verified / Pass@1 (higher) | Kimi K3: 76.5; GLM-5.3: 73 | 2026-10-14 | [zai-org/GLM-5.3 · model card](https://huggingface.co/zai-org/GLM-5.3/blob/ba32f8c19c8738e2c57c71798c601d477a7bf844/README.md) |
| embedding-sts | semantic-textual-similarity | MTEB English v2 · STS / STS aggregate (higher) | Qwen3-Embedding-8B: 88.58; Qwen3-Embedding-4B: 88.72 | 2025-06-05 | [Qwen/Qwen3-Embedding-8B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/README.md) |
| embedding-retrieval | document-retrieval, passage-retrieval | MTEB English v2 · Retrieval / Retrieval aggregate (higher) | Qwen3-Embedding-8B: 69.44; Qwen3-Embedding-4B: 68.46 | 2025-06-05 | [Qwen/Qwen3-Embedding-8B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/README.md) |
| rerank-mteb | re-ranking | MTEB-R / Retrieval score (higher) | Qwen3-Reranker-8B: 69.02; Qwen3-Reranker-4B: 69.76 | 2025-06-05 | [Qwen/Qwen3-Reranker-8B · model card](https://huggingface.co/Qwen/Qwen3-Reranker-8B/blob/77d193c791ed757ca307ee72715aa132723da912/README.md) |
| rerank-code | code-search | MTEB-Code / Retrieval score (higher) | Qwen3-Reranker-8B: 81.22; Qwen3-Reranker-4B: 81.2 | 2025-06-05 | [Qwen/Qwen3-Reranker-8B · model card](https://huggingface.co/Qwen/Qwen3-Reranker-8B/blob/77d193c791ed757ca307ee72715aa132723da912/README.md) |
| primera-multinews | multi-document-summarization | Multi-News / ROUGE-2 (higher) | PRIMERA · Multi-News fine-tuned: 20.9; PRIMERA · zero-shot: 13.6 | not stated / belirtilmemiş | [allenai/PRIMERA-multinews · model card](https://huggingface.co/allenai/PRIMERA-multinews/blob/1b507148874734de104f3a5e98a69f384db616fe/README.md) |
| mask-ade | semantic-segmentation | ADE20K validation / mIoU (higher) | Mask2Former Swin large · ADE20K: 56.1; Mask2Former Swin tiny · ADE20K: 47.7 | 2022-01-19 | [Mask2Former · ADE20K semantic segmentation](https://github.com/facebookresearch/Mask2Former/blob/9b0651c6c1d5b3af2e6da0589b719c514ec0d69a/MODEL_ZOO.md) |
| pose-coco | keypoint-detection | COCO validation · 256×192 / AP (higher) | ViTPose+ huge: 79.4; ViTPose+ base: 77 | 2023-01-10 | [ViTPose++ · COCO validation results](https://github.com/ViTAE-Transformer/ViTPose/blob/c050ed29112da7704797cc1a65af0234b525010d/README.md) |
| depth-marigold | depth-estimation | ETH3D · PPD evaluation protocol / AbsRel (lower) | Marigold V2 · Log-stage2: 2.8 | 2026-09-08 | [Marigold V2 · Table 1](https://arxiv.org/html/2609.08084v1) |
| klein-geneval | text-to-image-generation | GenEval · Mage-Flow comparison / Overall score (higher) | FLUX.2 klein 9B: 0.86; FLUX.2 klein 4B: 0.83 | 2026-07-22 | [Mage-Flow · generation and editing comparisons](https://github.com/microsoft/Mage/blob/76bec2bb3818863f470de7e867c2dc7f1d0bfd83/mage_flow/README.md) |
| edit-imgedit | image-to-image-generation | ImgEdit-Bench / Judge score (higher) | Qwen-Image-Edit-2511: 4.51; FLUX.2 klein 9B: 4.18; FLUX.2 klein 4B: 4.01 | 2026-07-22 | [Mage-Flow · generation and editing comparisons](https://github.com/microsoft/Mage/blob/76bec2bb3818863f470de7e867c2dc7f1d0bfd83/mage_flow/README.md) |
| edit-gedit | image-to-image-generation | GEdit-Bench EN / Judge score (higher) | Qwen-Image-Edit-2511: 7.877; FLUX.2 klein 9B: 8.04; FLUX.2 klein 4B: 7.717 | 2026-07-22 | [Mage-Flow · generation and editing comparisons](https://github.com/microsoft/Mage/blob/76bec2bb3818863f470de7e867c2dc7f1d0bfd83/mage_flow/README.md) |
| moebius-places | image-inpainting | Places2 · small masks / FID (lower) | Moebius · Places2: 0.92; FLUX.1 Fill dev: 0.94 | 2026-06-18 | [Moebius · Table 1](https://arxiv.org/html/2606.19195v1) |
| qwen-asr | automatic-speech-recognition | Open ASR English suite · 7 datasets / Mean WER (lower) | Qwen3-ASR-1.7B · Transformers: 5.59; Qwen3-ASR-0.6B · Transformers: 6.31 | 2026-06-26 | [Qwen/Qwen3-ASR-1.7B-hf · model card](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/blob/bcd2b5b7f32b480ab5790554cfa8347f246a14f3/README.md) |
| tts-english | text-to-speech | Qwen TTS multilingual test set · English / WER (lower) | Qwen3-TTS 1.7B CustomVoice: 0.899; Qwen3-TTS 0.6B CustomVoice: 1.188 | 2026-01 | [Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice · model card](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice/blob/0c0e3051f131929182e2c023b9537f8b1c68adfe/README.md) |
| diar-community | speaker-diarization | AMI IHM / DER (lower) | pyannote Community-1: 17; pyannote speaker-diarization-3.1: 18.8 | 2025-09 | [pyannote/speaker-diarization-community-1 · model card](https://huggingface.co/pyannote/speaker-diarization-community-1/blob/3533c8cf8e369892e6b79ff1bf80f7b0286a54ee/README.md) |
| diar-audar | speaker-diarization | Eight-corpus macro · Audar evaluation / DER (lower) | Audar-Diarization-V1: 22.03; pyannote speaker-diarization-3.1: 29.66 | 2026 | [audarai/Audar-Diarization-V1 · model card](https://huggingface.co/audarai/Audar-Diarization-V1/blob/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb/README.md) |
| redimnet-verify | speaker-verification | VoxCeleb1-O / EER (lower) | ReDimNet2+: 0.351 | not stated / belirtilmemiş | [lab260/redimnet2-plus · model card](https://huggingface.co/lab260/redimnet2-plus/blob/fd45d1968c0ea91b62ad0d2469eee4607756bb07/README.md) |
| drift-pesq | speech-enhancement | VoiceBank-DEMAND / PESQ (higher) | DriftSE · DistilHuBERT: 3.0; DriftSE† · DistilHuBERT: 3.45 | not stated / belirtilmemiş | [LIANGXU123/DriftSE · model card](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md) |
| drift-sisdr | speech-enhancement | VoiceBank-DEMAND / SI-SDR (higher) | DriftSE · DistilHuBERT: 15.6; DriftSE† · DistilHuBERT: 20.6 | not stated / belirtilmemiş | [LIANGXU123/DriftSE · model card](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md) |
| audiomosaic-tag | audio-classification | AudioSet-2M eval · 527 classes / mAP (higher) | AudioMosaic ViT-B/16 · AudioSet-2M: 50.19 | 2026-05 | [hanxunh/AudioMosaic-vit-b16-finetune-as2m · model card](https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/blob/1a7f51c115161d2b564cdb97f6f1268c659ffe4e/README.md) |
| keyword-superb | keyword-spotting | SUPERB · Speech Commands test / Accuracy (higher) | wav2vec 2.0 · SUPERB KS: 96.43 | 2021 | [superb/wav2vec2-base-superb-ks · model card](https://huggingface.co/superb/wav2vec2-base-superb-ks/blob/372e0486cd83e6f0c05c20a27262e9ca09450d24/README.md) |
| emotion-superb | speech-emotion-recognition | SUPERB · IEMOCAP session1 / Accuracy (higher) | HuBERT large · SUPERB ER: 67.62 | 2021 | [superb/hubert-large-superb-er · model card](https://huggingface.co/superb/hubert-large-superb-er/blob/ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb/README.md) |
| sep-whamr | speech-separation | WHAMR! test / SI-SNR improvement (higher) | SepFormer · WHAMR!: 13.7 | 2021-03-30 | [speechbrain/sepformer-whamr · model card](https://huggingface.co/speechbrain/sepformer-whamr/blob/9950fd8055b38679d2af5bef2366b5dba600ec66/README.md) |
| xiyan-bird | text-to-sql | BIRD dev · M-Schema / Execution accuracy (higher) | XiYanSQL-QwenCoder-32B-2412: 67.01; XiYanSQL-QwenCoder-7B-2502: 59.78 | 2025 | [XGenerationLab/XiYanSQL-QwenCoder-7B-2502 · model card](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/blob/1009ef00833bafa68ca4251a7a2319fa58e9ab77/README.md) |
| kumo-cls | classification | TALENT / Average rank · accuracy (lower) | NVIDIA Kumo Tabular · Large: 6.67 | 2026-09-29 | [Kumo Tabular · TALENT results](https://huggingface.co/blog/nvidia/kumo-tabular) |
| kumo-reg | regression | TALENT / Average rank · RMSE (lower) | NVIDIA Kumo Tabular · Large: 4.22 | 2026-09-29 | [Kumo Tabular · TALENT results](https://huggingface.co/blog/nvidia/kumo-tabular) |
| timestral-gift | time-series-forecasting | GIFT-Eval / MASE (lower) | Timestral-209M: 0.658; Timestral-28M: 0.678; Chronos-2: 0.698 | 2026-10-15 | [mistralai/Timestral-209M · model card](https://huggingface.co/mistralai/Timestral-209M/blob/9874d252ab0aae16f7f7c999f98f98d6ad7d8365/README.md) |
| timestral-time | time-series-forecasting | TIME · 98 tasks / MASE (lower) | Timestral-209M: 0.626; Timestral-28M: 0.638; Chronos-2: 0.662 | 2026-10-15 | [mistralai/Timestral-209M · model card](https://huggingface.co/mistralai/Timestral-209M/blob/9874d252ab0aae16f7f7c999f98f98d6ad7d8365/README.md) |
| ultra-transductive | link-prediction | 16 transductive graphs / Mean MRR (higher) | ULTRA 50g: 0.389; ULTRA 3g: 0.329 | 2023 | [mgalkin/ultra_50g · model card](https://huggingface.co/mgalkin/ultra_50g/blob/d46107d8415549e7c7386d26903ad11c9a8de4fd/README.md) |
| longcat-minif2f | formal-theorem-proving | MiniF2F-Test / Pass@72 (higher) | LongCat-Flash-Prover: 97.1 | 2026-03-22 | [LongCat-Flash-Prover technical report](https://arxiv.org/html/2603.21065v1) |
| r1-aime | math-word-problem-solving | AIME 2025 / Pass@1 (higher) | DeepSeek-R1-0528: 87.5 | 2025-05-28 | [deepseek-ai/DeepSeek-R1-0528 · model card](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/4236a6af538feda4548eca9ab308586007567f52/README.md) |

## Per-task findings / Görev bazında bulgular

### text-classification

**comparison / karşılaştırma**

GLiNER2.5 multi leads the selected zero-shot classification aggregate; base and multilingual variants trade places on individual datasets. This is not a comparison against supervised DeBERTa or language-identification fastText under matched labels.

GLiNER2.5 multi, seçili sıfır örnekli sınıflandırma ortalamasında önde; taban ve çok dilli sürümlerin sırası veri kümesine göre değişiyor. Bu sonuç, aynı etiketlerle eğitilmiş DeBERTa veya dil tanıma fastText karşılaştırması değildir.

Candidates / Adaylar: GLiNER2.5 multi v1, GLiNER2.5 base v1, GLiNER2 multi v1, GLiNER2 base v1, GLiNER2 large v1, DeBERTa v3 large NLI, fastText lid218e.

Primary evidence / Birincil kanıt: [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction); [fastino/gliner2.5-multi-v1 · model card](https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md); [fastino/gliner2.5-base-v1 · model card](https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md).

### natural-language-inference

**comparison / karşılaştırma**

GLiNER2.5 multi improves the XNLI F1 result within its extraction-model family. The existing DeBERTa checkpoint is supervised on NLI; its accuracy must not be mixed with this zero-shot F1 table.

GLiNER2.5 multi, kendi çıkarım modeli ailesinde XNLI F1 sonucunu yükseltiyor. Mevcut DeBERTa checkpoint’i NLI üzerinde gözetimli eğitilmiştir; doğruluk puanı bu sıfır örnekli F1 tablosuna karıştırılmaz.

Candidates / Adaylar: GLiNER2.5 multi v1, GLiNER2.5 base v1, GLiNER2 multi v1, GLiNER2 base v1, DeBERTa v3 large NLI.

Primary evidence / Birincil kanıt: [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction); [fastino/gliner2.5-multi-v1 · model card](https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md); [fastino/gliner2.5-base-v1 · model card](https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md).

### named-entity-recognition

**comparison / karşılaştırma**

GLiNER2 base wins CrossNER in this subset, while GLiNER2.5 base wins FewNERD: the newer model is not uniformly better. Entity domains, span conventions and label descriptions must match before transferring these results.

Bu alt kümede CrossNER’de GLiNER2 base, FewNERD’de GLiNER2.5 base önde: yeni model her ölçümde daha iyi değil. Bu sonuçları aktarmadan önce varlık alanı, metin aralığı kuralları ve etiket açıklamaları eşleşmelidir.

Candidates / Adaylar: GLiNER2.5 multi v1, GLiNER2.5 base v1, GLiNER2 multi v1, GLiNER2 base v1, GLiNER2 large v1.

Primary evidence / Birincil kanıt: [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction); [fastino/gliner2.5-multi-v1 · model card](https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md); [fastino/gliner2.5-base-v1 · model card](https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md).

### relation-extraction

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

GLiNER2.5 adds a documented joint entity/relation extraction interface and is a current candidate alongside GLiNER2. The release’s NER and classification F1 tables do not measure relation extraction; no exact-checkpoint TACRED/DocRED comparison was verified.

GLiNER2.5 belgelenmiş ortak varlık/ilişki çıkarımı sunuyor; GLiNER2 yanında güncel adaydır. Sürümün NER ve sınıflandırma F1 tabloları ilişki çıkarımını ölçmüyor; tam checkpoint’e bağlı TACRED/DocRED karşılaştırması doğrulanamadı.

Candidates / Adaylar: GLiNER2.5 base v1, GLiNER2.5 multi v1, GLiNER2 large v1.

Primary evidence / Birincil kanıt: [GLiNER2.5 evaluation tables](https://fastino.ai/blog/gliner2-5-span-free-information-extraction); [fastino/gliner2.5-base-v1 · model card](https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md); [fastino/gliner2.5-multi-v1 · model card](https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md).

### coreference-resolution

**comparison / karşılaştırma**

LingMess has higher OntoNotes F1; distilled F-coref trades some accuracy for documented speed and memory savings. The 2022 English benchmark is a historical accuracy/efficiency reference, not a 2026 multilingual winner.

LingMess’in OntoNotes F1 puanı daha yüksek; damıtılmış F-coref belgelenmiş hız ve bellek avantajı için bir miktar doğruluktan ödün veriyor. 2022 İngilizce benchmark’ı tarihsel doğruluk/verimlilik referansıdır; 2026 çok dilli lideri değildir.

Candidates / Adaylar: LingMess Coref, F-Coref.

Primary evidence / Birincil kanıt: [F-coref · Table 1](https://arxiv.org/html/2209.04280v4); [biu-nlp/lingmess-coref · model card](https://huggingface.co/biu-nlp/lingmess-coref/blob/fa5d8a827a09388d03adbe9e800c7d8c509c3935/README.md); [F-Coref — model card](https://huggingface.co/biu-nlp/f-coref).

### part-of-speech-tagging

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Stanza supplies language/treebank-specific POS weights and a reproducible linguistic pipeline. Universal Dependencies version, tokenization and treebank must match; the English package is not one universal POS model and has no verified current cross-model table here.

Stanza dil ve ağaç bankasına özgü POS ağırlıkları ile tekrarlanabilir bir dil işleme hattı sağlar. Universal Dependencies sürümü, sözcükleme ve ağaç bankası eşleşmeli; İngilizce paket tek bir evrensel POS modeli değil ve burada doğrulanmış güncel ortak tablo yok.

Candidates / Adaylar: Stanza English models.

Primary evidence / Birincil kanıt: [Stanza English models — model card](https://huggingface.co/stanfordnlp/stanza-en); [Stanza processors](https://stanfordnlp.github.io/stanza/pipeline.html).

### syntactic-parsing

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Stanza is a ready parser pipeline when the language, treebank and tokenization contract are fixed. UAS/LAS with gold tokens and end-to-end raw-text scores are different; no matched current checkpoint comparison was established.

Dil, ağaç bankası ve sözcükleme kuralları sabitlendiğinde Stanza hazır bir ayrıştırıcı işlem hattıdır. Doğru sözcük sınırları verilen UAS/LAS ile ham metinden uçtan uca puan farklıdır; güncel checkpoint’ler için eşleşen karşılaştırma kurulamadı.

Candidates / Adaylar: Stanza English models.

Primary evidence / Birincil kanıt: [Stanza English models — model card](https://huggingface.co/stanfordnlp/stanza-en); [Stanza processors](https://stanfordnlp.github.io/stanza/pipeline.html).

### text-generation

**comparison / karşılaştırma**

Qwen3.8-27B improves over Qwen3.6-27B on instruction following at the same nominal parameter scale. DeepSeek-V4.1 is another current general-purpose candidate. IFBench measures constraint following, not all writing quality, truthfulness or latency; no universal text-generation winner follows.

Qwen3.8-27B aynı nominal parametre ölçeğinde Qwen3.6-27B’den daha iyi yönerge takibi gösteriyor. DeepSeek-V4.1 de güncel genel amaçlı adaydır. IFBench kısıt takibini ölçer; tüm yazım kalitesini, doğruluğu veya gecikmeyi değil. Evrensel metin üretimi lideri çıkarılamaz.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, DeepSeek-V4.1-Flash-1017, Mamba2 2.7B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### machine-translation

**comparison / karşılaştırma**

Hy-MT2-7B leads XCOMET on WMT25, while 30B-A3B leads GEMBA. The preferred model depends on how translation quality is judged. The aggregate does not establish superiority for every language pair; NLLB’s wider language coverage is a separate requirement.

WMT25’te XCOMET ölçüsünde Hy-MT2-7B, GEMBA ölçüsünde 30B-A3B önde. Tercih, çeviri kalitesinin nasıl ölçüldüğüne bağlı. Ortalama sonuç her dil çifti için üstünlük kurmaz; NLLB’nin daha geniş dil kapsamı ayrı bir gereksinimdir.

Candidates / Adaylar: Hy-MT2-7B, Hy-MT2-30B-A3B, NLLB-200 distilled 600M, SeamlessM4T v2 large.

Primary evidence / Birincil kanıt: [Hy-MT2 · Table 2](https://arxiv.org/html/2605.22064v1); [tencent/Hy-MT2-7B · model card](https://huggingface.co/tencent/Hy-MT2-7B/blob/9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223/README.md); [tencent/Hy-MT2-30B-A3B · model card](https://huggingface.co/tencent/Hy-MT2-30B-A3B/blob/d3ead4dba61c09aac60a261a96ad1df3e705febb/README.md).

### text-summarization

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

BART CNN/DailyMail remains a reproducible news-summary specialist; current instruction models can also summarize with a suitable prompt. News ROUGE, long-context fidelity and human preference are different targets. No shared current benchmark tied to these exact releases was verified.

BART CNN/DailyMail tekrarlanabilir bir haber özetleme uzmanıdır; güncel yönerge modelleri de uygun istemle özetleyebilir. Haber ROUGE puanı, uzun bağlamda sadakat ve insan tercihi farklı hedeflerdir. Bu tam sürümlere bağlı ortak güncel benchmark doğrulanamadı.

Candidates / Adaylar: Qwen3.8-27B, DeepSeek-V4.1-Flash-1017, BART large · CNN/DailyMail.

Primary evidence / Birincil kanıt: [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [DeepSeek-V4.1-Flash-1017 — model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017); [BART large · CNN/DailyMail — model card](https://huggingface.co/facebook/bart-large-cnn).

### multi-document-summarization

**comparison / karşılaştırma**

PRIMERA fine-tuned on Multi-News beats its zero-shot version on the same HF evaluation; it is a more direct fit than single-document BART. This demonstrates task-specific fine-tuning, not leadership over today’s long-context LLMs or evidence-faithfulness guarantees.

Multi-News üzerinde ince ayarlı PRIMERA aynı HF değerlendirmesinde sıfır örnekli sürümünü geçiyor; tek belgeli BART’a göre göreve daha doğrudan uyuyor. Bu sonuç göreve özgü ince ayarı gösterir; bugünün uzun bağlamlı LLM’lerine üstünlük veya kanıta sadakat garantisi değildir.

Candidates / Adaylar: PRIMERA · Multi-News fine-tuned, PRIMERA · zero-shot, BART large · CNN/DailyMail.

Primary evidence / Birincil kanıt: [allenai/PRIMERA-multinews · model card](https://huggingface.co/allenai/PRIMERA-multinews/blob/1b507148874734de104f3a5e98a69f384db616fe/README.md); [allenai/PRIMERA · model card](https://huggingface.co/allenai/PRIMERA/blob/931d08e790f7d2a2293f2e9901d73a6db8449f5c/README.md); [BART large · CNN/DailyMail — model card](https://huggingface.co/facebook/bart-large-cnn).

### grammatical-error-correction

**comparison / karşılaştırma**

CoEdIT XL improves JFLEG GLEU over large, with a larger model and the same editing evaluation. The reference is English and historical; it cannot rank Turkish correction or newer LLMs without a matched test.

CoEdIT XL daha büyük model ve aynı düzenleme değerlendirmesiyle large sürümünün JFLEG GLEU puanını yükseltiyor. Referans İngilizce ve tarihseldir; eşleşen test olmadan Türkçe düzeltmeyi veya yeni LLM’leri sıralayamaz.

Candidates / Adaylar: CoEdIT XL, CoEdIT large.

Primary evidence / Birincil kanıt: [CoEdIT · Table 2](https://arxiv.org/html/2305.09857v2); [grammarly/coedit-xl · model card](https://huggingface.co/grammarly/coedit-xl/blob/be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf/README.md); [CoEdIT large — model card](https://huggingface.co/grammarly/coedit-large).

### question-answering

**comparison / karşılaştırma**

Qwen3.8-27B improves GPQA Diamond over Qwen3.6-27B in the publisher’s same-size comparison. GPQA is expert multiple-choice science QA; it does not measure cited retrieval answers, open-domain factuality or all frontier models.

Qwen3.8-27B, yayıncının aynı boyuttaki karşılaştırmasında Qwen3.6-27B’ye göre GPQA Diamond puanını yükseltiyor. GPQA uzman düzeyinde çoktan seçmeli bilim sorularıdır; kaynaklı bilgi getirme yanıtlarını, genel olgusal doğruluğu veya tüm üst düzey modelleri ölçmez.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, DeepSeek-V4.1-Flash-1017.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### dialogue-response-generation

**comparison / karşılaştırma**

Qwen3.8 is a current instruction-following candidate; the IFBench result supports a specific response-control capability. Single-turn instruction compliance is not multi-turn conversational preference. OLMo DPO and Llama RLHF are alignment examples, not benchmark winners here.

Qwen3.8 güncel bir yönerge takibi adayıdır; IFBench sonucu belirli bir yanıt kontrolü yeteneğini destekler. Tek turlu yönerge uyumu çok turlu sohbet tercihi değildir. OLMo DPO ve Llama RLHF burada hizalama örnekleridir; benchmark liderleri değildir.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, DeepSeek-V4.1-Flash-1017, OLMo 2 7B DPO · 1124, Llama 3.1 8B Instruct.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### semantic-textual-similarity

**comparison / karşılaştırma**

Qwen3-Embedding-4B narrowly leads 8B in the published English STS aggregate, illustrating that size alone does not determine quality. The small difference has no uncertainty interval here; multilingual STS and retrieval have different rankings.

Qwen3-Embedding-4B yayımlanmış İngilizce STS ortalamasında 8B’nin az farkla önünde; boyut tek başına kaliteyi belirlemiyor. Küçük fark için burada belirsizlik aralığı yok; çok dilli STS ve bilgi getirmede sıralamalar farklıdır.

Candidates / Adaylar: Qwen3-Embedding-8B, Qwen3-Embedding-4B, GloVe 6B · 300-dimensional word factors.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-Embedding-8B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/README.md); [Qwen3-Embedding-8B — model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B); [Qwen/Qwen3-Embedding-4B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-4B/blob/5cf2132abc99cad020ac570b19d031efec650f2b/README.md).

### document-retrieval

**comparison / karşılaştırma**

Qwen3-Embedding-8B leads 4B in the shared MTEB retrieval aggregate and is a documented dense-retrieval candidate. The aggregate combines datasets; chunking, query instructions and language can change document-retrieval quality.

Qwen3-Embedding-8B ortak MTEB bilgi getirme ortalamasında 4B’yi geçiyor ve belgelenmiş yoğun bilgi getirme adayıdır. Ortalama farklı veri kümelerini birleştirir; parçalama, sorgu yönergeleri ve dil belge getirme kalitesini değiştirebilir.

Candidates / Adaylar: Qwen3-Embedding-8B, Qwen3-Embedding-4B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-Embedding-8B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/README.md); [Qwen3-Embedding-8B — model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B); [Qwen/Qwen3-Embedding-4B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-4B/blob/5cf2132abc99cad020ac570b19d031efec650f2b/README.md).

### passage-retrieval

**comparison / karşılaştırma**

Qwen3-Embedding-8B has stronger aggregate retrieval evidence than 4B in the selected release table. MTEB retrieval is a mixed category, not a passage-only MS MARCO result; no passage-specific winner is inferred.

Seçili sürüm tablosunda Qwen3-Embedding-8B’nin toplam bilgi getirme kanıtı 4B’den daha güçlü. MTEB bilgi getirme karma bir kategoridir; yalnız pasajlardan oluşan MS MARCO sonucu değildir. Pasaja özgü lider sonucu çıkarılmaz.

Candidates / Adaylar: Qwen3-Embedding-8B, Qwen3-Embedding-4B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-Embedding-8B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B/blob/1d8ad4ca9b3dd8059ad90a75d4983776a23d44af/README.md); [Qwen3-Embedding-8B — model card](https://huggingface.co/Qwen/Qwen3-Embedding-8B); [Qwen/Qwen3-Embedding-4B · model card](https://huggingface.co/Qwen/Qwen3-Embedding-4B/blob/5cf2132abc99cad020ac570b19d031efec650f2b/README.md).

### re-ranking

**comparison / karşılaştırma**

Qwen3-Reranker-4B leads 8B on MTEB-R; the 8B model does not win every retrieval metric. This is the 2025 release evaluation, not a continuously updated leaderboard; first-stage recall bounds the result.

Qwen3-Reranker-4B MTEB-R’de 8B’yi geçiyor; 8B model her bilgi getirme ölçüsünü kazanmıyor. Bu, 2025 sürüm değerlendirmesidir; sürekli güncellenen sıralama değildir. İlk aşama getirme kapsamı sonucu sınırlar.

Candidates / Adaylar: Qwen3-Reranker-8B, Qwen3-Reranker-4B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-Reranker-8B · model card](https://huggingface.co/Qwen/Qwen3-Reranker-8B/blob/77d193c791ed757ca307ee72715aa132723da912/README.md); [Qwen3-Reranker-8B — model card](https://huggingface.co/Qwen/Qwen3-Reranker-8B); [Qwen/Qwen3-Reranker-4B · model card](https://huggingface.co/Qwen/Qwen3-Reranker-4B/blob/22e683669bc0f0bd69640a1354a6d0aebcfeede5/README.md).

### query-expansion

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Qwen3.8 can generate expansions, but its benefit must be measured together with the target retriever and corpus. MQR-A1 reports strong BRIGHT pipeline scores, but the inspected repository revision contains no released weight files. It is excluded from the open-weight ranking; a rewrite score would not isolate expansion anyway.

Qwen3.8 sorgu genişletmeleri üretebilir; yararı hedef getirici ve korpusla birlikte ölçülmelidir. MQR-A1 güçlü BRIGHT işlem hattı puanları bildiriyor; ancak incelenen depo sürümünde yayımlanmış ağırlık dosyası yok. Açık ağırlıklı sıralamaya alınmadı; yeniden yazma puanı da genişletmenin etkisini tek başına ayırmaz.

Candidates / Adaylar: Qwen3.8-27B.

Primary evidence / Birincil kanıt: [ForwardAILabs/MQR-A1 · model card](https://huggingface.co/ForwardAILabs/MQR-A1/blob/6f94e962e4ee86485935648fa2626e8a4afc6b76/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B).

### top-k-recommendation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

P5 Beauty Small is a downloadable recommendation checkpoint for the Beauty corpus and its prompt/task conventions. Top-k results depend on candidate sampling, temporal split, prompt and exact task checkpoint. Paper-wide P5 best scores cannot be assigned to this one artifact.

P5 Beauty Small, Beauty korpusu ve onun istem/görev kuralları için indirilebilir bir öneri checkpoint’idir. Top-k sonuçları aday örnekleme, zaman bölümü, istem ve tam görev checkpoint’ine bağlıdır. Makaledeki en iyi P5 puanları bu tek dosyaya atanamaz.

Candidates / Adaylar: P5 Beauty Small.

Primary evidence / Birincil kanıt: [P5 Beauty Small — author-linked model distribution](https://huggingface.co/makitanikaze/P5_beauty_small); [P5 — author release and Hugging Face distribution link](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/README.md); [P5 Beauty Small — rating and top-k evaluation notebook](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb).

### rating-prediction

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

P5 Beauty Small is an executable starting point for corpus-specific rating prediction. RMSE/MAE require the exact rating prompt and split. Recommendation hit-rate scores are not rating accuracy, and no current matched comparison was verified.

P5 Beauty Small korpusa özgü puan tahmini için çalıştırılabilir bir başlangıç noktasıdır. RMSE/MAE için tam puanlama istemi ve veri bölümü gerekir. Öneri isabet oranı puan tahmini doğruluğu değildir; güncel eşleşen karşılaştırma doğrulanamadı.

Candidates / Adaylar: P5 Beauty Small.

Primary evidence / Birincil kanıt: [P5 Beauty Small — author-linked model distribution](https://huggingface.co/makitanikaze/P5_beauty_small); [P5 — author release and Hugging Face distribution link](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/README.md); [P5 Beauty Small — rating and top-k evaluation notebook](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb).

### image-classification

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

SigLIP 2 is a flexible image-text classifier; supervised ResNet and MLP-Mixer checkpoints are useful fixed-label alternatives. Zero-shot prompt-ensemble accuracy and supervised ImageNet top-1 use different training and label access; no unified rank is assigned.

SigLIP 2 esnek bir görüntü-metin sınıflandırıcısıdır; gözetimli ResNet ve MLP-Mixer checkpoint’leri sabit etiketli alternatiflerdir. Sıfır örnekli çoklu istem doğruluğu ve gözetimli ImageNet top-1 farklı eğitim ve etiket erişimi kullanır; ortak sıra atanmaz.

Candidates / Adaylar: SigLIP 2 SO400M, MLP-Mixer B/16 · ImageNet, ResNet-50 SSL · YFCC100M → ImageNet, JEM · CIFAR-10.

Primary evidence / Birincil kanıt: [SigLIP 2 SO400M — model card](https://huggingface.co/google/siglip2-so400m-patch14-384); [MLP-Mixer B/16 · ImageNet — model card](https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k); [ResNet-50 SSL · YFCC100M → ImageNet — model card](https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k).

### object-detection

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Grounding DINO supports open-vocabulary boxes; SAM 3 supports prompted concepts and masks. They serve different detection contracts. Closed-label COCO AP, open-vocabulary grounding and prompted segmentation cannot be treated as the same task score; exact matched release evidence is missing.

Grounding DINO açık sözlüklü kutuları; SAM 3 istemle belirtilen kavram ve maskeleri destekler. Farklı algılama koşullarına yöneliktirler. Kapalı etiketli COCO AP, açık sözlüklü grounding ve istemli segmentasyon aynı görev puanı değildir; tam eşleşen sürüm kanıtı eksik.

Candidates / Adaylar: Grounding DINO base, SAM 3.

Primary evidence / Birincil kanıt: [Grounding DINO base — model card](https://huggingface.co/IDEA-Research/grounding-dino-base); [SAM 3 — model card](https://huggingface.co/facebook/sam3).

### semantic-segmentation

**comparison / karşılaştırma**

Mask2Former Swin-L leads Swin-T in the same ADE20K model zoo, with more pretraining and a larger backbone. The comparison is historical and does not establish leadership over 2026 segmentation models; single-scale and multi-scale scores remain separate.

Mask2Former Swin-L aynı ADE20K model koleksiyonunda daha fazla ön eğitim ve daha büyük omurgayla Swin-T’yi geçiyor. Karşılaştırma tarihseldir ve 2026 segmentasyon modellerine üstünlük kurmaz; tek ölçek ve çoklu ölçek puanları ayrı tutulur.

Candidates / Adaylar: Mask2Former Swin large · ADE20K, Mask2Former Swin tiny · ADE20K.

Primary evidence / Birincil kanıt: [Mask2Former · ADE20K semantic segmentation](https://github.com/facebookresearch/Mask2Former/blob/9b0651c6c1d5b3af2e6da0589b719c514ec0d69a/MODEL_ZOO.md); [Mask2Former Swin large · ADE20K — model card](https://huggingface.co/facebook/mask2former-swin-large-ade-semantic); [facebook/mask2former-swin-tiny-ade-semantic · model card](https://huggingface.co/facebook/mask2former-swin-tiny-ade-semantic/blob/c8cf1b5e823aee214d937d0d001c1850ba44ef6a/README.md).

### instance-segmentation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

SAM 3 offers released promptable instance masks and concept segmentation. Prompted mask quality, concept recall and closed-set COCO instance AP are different measurements; no same-protocol current comparison was verified.

SAM 3 yayımlanmış istemli nesne maskeleri ve kavram segmentasyonu sunar. İstemli maske kalitesi, kavram yakalama oranı ve kapalı kümeli COCO nesne AP farklı ölçümlerdir; aynı protokolde güncel karşılaştırma doğrulanamadı.

Candidates / Adaylar: SAM 3.

Primary evidence / Birincil kanıt: [SAM 3 — model card](https://huggingface.co/facebook/sam3).

### depth-estimation

**single result / tek sonuç**

Marigold V2 adds a September 2026 released depth adapter with strong ETH3D relative-depth evidence; DA3-large remains a multi-view-capable alternative. The selected score follows ground-truth alignment. It is not a metric-depth accuracy claim or a matched DA3 comparison.

Marigold V2, Eylül 2026’da yayımlanmış ve ETH3D göreli derinlik kanıtı güçlü bir adaptör ekliyor; DA3-large çoklu görüntü yetenekli alternatiftir. Seçili puan gerçek derinliğe hizalama sonrası hesaplanır. Metrik derinlik doğruluğu iddiası veya eşleşen DA3 karşılaştırması değildir.

Candidates / Adaylar: Marigold V2 · Log-stage2, Depth Anything 3 large.

Primary evidence / Birincil kanıt: [Marigold V2 · Table 1](https://arxiv.org/html/2609.08084v1); [huawei-bayerlab/marigold-v2-0 · model card](https://huggingface.co/huawei-bayerlab/marigold-v2-0/blob/cdf9810fb690886391a63aec012b5f501064fb0d/README.md); [Depth Anything 3 large — model card](https://huggingface.co/depth-anything/DA3-LARGE).

### keypoint-detection

**comparison / karşılaştırma**

ViTPose+ huge improves COCO AP over base under the shared model-zoo configuration. Human body keypoints differ from animal, whole-body and five-point facial landmarks; this historical body-pose result cannot rank all of them.

ViTPose+ huge ortak model koleksiyonu ayarlarında base sürümüne göre COCO AP’yi yükseltiyor. İnsan vücut noktaları hayvan, tüm vücut ve beş noktalı yüz işaretlerinden farklıdır; tarihsel vücut poz sonucu hepsini sıralayamaz.

Candidates / Adaylar: ViTPose+ huge, ViTPose+ base, dlib · 5-point face landmarks.

Primary evidence / Birincil kanıt: [ViTPose++ · COCO validation results](https://github.com/ViTAE-Transformer/ViTPose/blob/c050ed29112da7704797cc1a65af0234b525010d/README.md); [ViTPose+ huge — model card](https://huggingface.co/usyd-community/vitpose-plus-huge); [usyd-community/vitpose-plus-base · model card](https://huggingface.co/usyd-community/vitpose-plus-base/blob/92be54d7a29e42fad47b6e2ca01dd9e685a61e0d/README.md).

### video-classification

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

VideoMAE large is a released Kinetics-400 action classifier with task-specific fine-tuning. HF conversion and original model-zoo scores differ; frames, test views and checkpoint identity must be reconciled before ranking current video encoders.

VideoMAE large, göreve özgü ince ayarlı ve yayımlanmış bir Kinetics-400 eylem sınıflandırıcısıdır. HF dönüşümü ile özgün model koleksiyonu puanları farklı; güncel video kodlayıcılarını sıralamadan önce kareler, test görünümleri ve checkpoint kimliği eşleştirilmeli.

Candidates / Adaylar: VideoMAE large · Kinetics-400.

Primary evidence / Birincil kanıt: [VideoMAE large · Kinetics-400 — model card](https://huggingface.co/MCG-NJU/videomae-large-finetuned-kinetics).

### optical-character-recognition

**comparison / karşılaştırma**

Qwen3.8 improves OmniDocBench 1.5 over Qwen3.6; PaddleOCR-VL-1.6 remains a task-focused document parsing candidate. The overall document score combines layout and content elements; it is not character-error rate or proof that Qwen beats PaddleOCR on pure OCR.

Qwen3.8 OmniDocBench 1.5’te Qwen3.6’yı geçiyor; PaddleOCR-VL-1.6 göreve odaklı belge ayrıştırma adayıdır. Genel belge puanı yerleşim ve içerik bileşenlerini birleştirir; karakter hata oranı veya Qwen’in saf OCR’de PaddleOCR’yi geçtiğinin kanıtı değildir.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, PaddleOCR-VL-1.6.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### image-captioning

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Qwen3.8 can describe images through its documented visual-language interface. RealWorldQA and OmniDocBench do not measure caption quality. A matched CIDEr/SPICE or human-preference caption test was not verified for these releases.

Qwen3.8 belgelenmiş görsel-dil arayüzüyle görüntü açıklaması üretebilir. RealWorldQA ve OmniDocBench açıklama kalitesini ölçmez. Bu sürümler için eşleşen CIDEr/SPICE veya insan tercihli açıklama testi doğrulanamadı.

Candidates / Adaylar: Qwen3.8-27B.

Primary evidence / Birincil kanıt: [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B).

### visual-question-answering

**comparison / karşılaştırma**

Qwen3.8-27B leads Qwen3.6-27B on RealWorldQA in the same release comparison. This visual QA subset does not cover every chart, document or spatial reasoning setting; larger open-weight models may rank differently.

Qwen3.8-27B aynı sürüm karşılaştırmasında RealWorldQA’da Qwen3.6-27B’yi geçiyor. Bu görsel soru yanıtlama alt kümesi her grafik, belge veya uzamsal akıl yürütme düzenini kapsamaz; daha büyük açık ağırlıklı modellerin sırası farklı olabilir.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### document-question-answering

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Qwen3.8 supports document-image input and is a current multimodal candidate. OmniDocBench measures parsing, not question-answering ANLS. No exact current DocVQA/InfographicVQA comparison was verified; parsing scores are deliberately not reused.

Qwen3.8 belge görüntüsü girdisini destekler ve güncel çok modlu adaydır. OmniDocBench ayrıştırmayı ölçer, soru yanıtlama ANLS’yi değil. Güncel tam DocVQA/InfographicVQA karşılaştırması doğrulanamadı; ayrıştırma puanları yeniden kullanılmıyor.

Candidates / Adaylar: Qwen3.8-27B.

Primary evidence / Birincil kanıt: [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B).

### text-to-image-generation

**comparison / karşılaştırma**

Klein 9B leads 4B on GenEval in the selected shared comparison. Qwen-Image-2.1 is a newer released candidate with generation and editing support. GenEval tests prompt composition. The newer Qwen card lacks a matching numeric row, so it is not assigned a synthetic score or global rank.

Klein 9B seçili ortak karşılaştırmada GenEval’de 4B’yi geçiyor. Qwen-Image-2.1 üretim ve düzenleme destekleyen daha yeni yayımlanmış adaydır. GenEval istem bileşimini ölçer. Yeni Qwen kartında eşleşen sayısal satır yok; bu nedenle yapay puan veya küresel sıra atanmaz.

Candidates / Adaylar: FLUX.2 klein 9B, FLUX.2 klein 4B, Qwen-Image-2.1, Qwen-Image-2512.

Primary evidence / Birincil kanıt: [Mage-Flow · generation and editing comparisons](https://github.com/microsoft/Mage/blob/76bec2bb3818863f470de7e867c2dc7f1d0bfd83/mage_flow/README.md); [black-forest-labs/FLUX.2-klein-9B · model card](https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/blob/92196c8e11f7b6cf2b7493e037d8c5345c559216/README.md); [black-forest-labs/FLUX.2-klein-4B · model card](https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/blob/e7b7dc27f91deacad38e78976d1f2b499d76a294/README.md).

### image-to-image-generation

**comparison / karşılaştırma**

Qwen-Image-Edit-2511 leads the selected ImgEdit rows, while Klein 9B leads their GEdit-English rows; evaluation preference changes the recommendation. Qwen uses 50 steps and Klein uses four. Qwen-Image-2.1 is also released, but no matching row was verified for it.

Qwen-Image-Edit-2511 seçili ImgEdit satırlarında, Klein 9B ise GEdit-English satırlarında önde; değerlendirme tercihi öneriyi değiştiriyor. Qwen 50, Klein dört adım kullanıyor. Qwen-Image-2.1 de yayımlanmış durumda; ancak onun için eşleşen satır doğrulanamadı.

Candidates / Adaylar: Qwen-Image-Edit-2511, FLUX.2 klein 9B, FLUX.2 klein 4B, Qwen-Image-2.1, Glow · CelebA-HQ 256.

Primary evidence / Birincil kanıt: [Mage-Flow · generation and editing comparisons](https://github.com/microsoft/Mage/blob/76bec2bb3818863f470de7e867c2dc7f1d0bfd83/mage_flow/README.md); [Qwen-Image-Edit-2511 — model card](https://huggingface.co/Qwen/Qwen-Image-Edit-2511); [black-forest-labs/FLUX.2-klein-9B · model card](https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/blob/92196c8e11f7b6cf2b7493e037d8c5345c559216/README.md).

### image-inpainting

**comparison / karşılaştırma**

Moebius Places2 has a slightly lower reported FID than FLUX.1 Fill dev for small masks with fewer sampling steps. This dataset-specific fine-tune and tiny FID gap do not establish a general inpainting champion; large masks and text-guided edits need separate tests.

Moebius Places2 küçük maskelerde daha az örnekleme adımıyla FLUX.1 Fill dev’den biraz daha düşük FID bildiriyor. Veri kümesine özgü bu ince ayar ve çok küçük FID farkı genel doldurma lideri kurmaz; büyük maskeler ve metinle düzenleme ayrı test gerektirir.

Candidates / Adaylar: Moebius · Places2, FLUX.1 Fill dev.

Primary evidence / Birincil kanıt: [Moebius · Table 1](https://arxiv.org/html/2606.19195v1); [hustvl/Moebius · model card](https://huggingface.co/hustvl/Moebius/blob/cd01f47fb648219d3fa605806c5ce00b713faa5e/README.md); [FLUX.1 Fill dev — model card](https://huggingface.co/black-forest-labs/FLUX.1-Fill-dev).

### text-to-video-generation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

LTX-2.3 adds a released 22B video/audio generator alongside Wan2.2 TI2V-5B; hardware and output requirements differ. The inspected LTX card gives no matched VBench score. Wan A14B results cannot be assigned to TI2V-5B; no numeric winner is declared.

LTX-2.3, Wan2.2 TI2V-5B yanına yayımlanmış 22B video/ses üreticisi ekliyor; donanım ve çıktı gereksinimleri farklı. İncelenen LTX kartı eşleşen VBench puanı vermiyor. Wan A14B sonuçları TI2V-5B’ye atanamaz; sayısal lider ilan edilmez.

Candidates / Adaylar: LTX-2.3 · 22B dev, Wan2.2 TI2V 5B.

Primary evidence / Birincil kanıt: [Lightricks/LTX-2.3 · model card](https://huggingface.co/Lightricks/LTX-2.3/blob/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc/README.md); [Wan2.2 TI2V 5B — model card](https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B).

### image-to-video-generation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

LTX-2.3 and Wan2.2 TI2V-5B both provide released image-conditioned video generation paths. T2V scores do not measure first-frame consistency or motion following in I2V. No matched I2V benchmark for these exact variants was verified.

LTX-2.3 ve Wan2.2 TI2V-5B yayımlanmış görüntü koşullu video üretim yolları sağlar. T2V puanları I2V ilk kare tutarlılığını veya hareket takibini ölçmez. Bu tam sürümler için eşleşen I2V benchmark’ı doğrulanamadı.

Candidates / Adaylar: LTX-2.3 · 22B dev, Wan2.2 TI2V 5B.

Primary evidence / Birincil kanıt: [Lightricks/LTX-2.3 · model card](https://huggingface.co/Lightricks/LTX-2.3/blob/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc/README.md); [Wan2.2 TI2V 5B — model card](https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B).

### text-to-3d-generation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Shap-E remains a verifiable released text-to-implicit-3D checkpoint. Many newer 3D releases are image-to-3D or generate CAD/Blender code. Their geometry, texture and code-success scores do not provide a matched text-to-3D ranking here.

Shap-E doğrulanabilir, yayımlanmış bir metinden örtük 3B temsile üretim checkpoint’idir. Birçok yeni 3B sürüm görüntüden 3B üretir veya CAD/Blender kodu üretir. Geometri, doku ve kod başarısı puanları burada eşleşen metinden 3B sıralaması sağlamaz.

Candidates / Adaylar: Shap-E.

Primary evidence / Birincil kanıt: [Shap-E — model card](https://huggingface.co/openai/shap-e).

### automatic-speech-recognition

**comparison / karşılaştırma**

The 1.7B Transformers Qwen3-ASR release has lower mean English WER than 0.6B in the shared Open ASR evaluation. Conversion/runtime and language matter; these rows are not the original Qwen inference table or a Turkish benchmark.

Transformers Qwen3-ASR 1.7B sürümü ortak Open ASR değerlendirmesinde 0.6B’den daha düşük ortalama İngilizce WER gösteriyor. Dönüşüm/çalıştırma ortamı ve dil önemlidir; bu satırlar özgün Qwen çıkarım tablosu veya Türkçe benchmark değildir.

Candidates / Adaylar: Qwen3-ASR-1.7B · Transformers, Qwen3-ASR-0.6B · Transformers, Qwen3-ASR-1.7B, PocketSphinx · US English HMM-GMM.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-ASR-1.7B-hf · model card](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/blob/bcd2b5b7f32b480ab5790554cfa8347f246a14f3/README.md); [Qwen/Qwen3-ASR-0.6B-hf · model card](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf/blob/7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c/README.md); [Qwen3-ASR-1.7B — model card](https://huggingface.co/Qwen/Qwen3-ASR-1.7B).

### speech-translation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

SeamlessM4T v2 large is a released specialist for speech-to-text and speech-to-speech translation. ASR WER and text-only Hy-MT COMET cannot rank speech translation; language direction, transcription pipeline and BLEU/ASR-BLEU protocol must match.

SeamlessM4T v2 large konuşmadan metne ve konuşmadan konuşmaya çeviri için yayımlanmış uzman modeldir. ASR WER ve yalnız metinli Hy-MT COMET konuşma çevirisini sıralayamaz; dil yönü, transkripsiyon hattı ve BLEU/ASR-BLEU protokolü eşleşmeli.

Candidates / Adaylar: SeamlessM4T v2 large.

Primary evidence / Birincil kanıt: [SeamlessM4T v2 large — model card](https://huggingface.co/facebook/seamless-m4t-v2-large).

### keyword-spotting

**single result / tek sonuç**

The released wav2vec 2.0 SUPERB head has a traceable Speech Commands test result. This historical accuracy does not establish the best always-on wake-word system; false alarms, vocabulary, noise and device cost are unmeasured here.

Yayımlanmış wav2vec 2.0 SUPERB başlığının izlenebilir Speech Commands test sonucu var. Bu tarihsel doğruluk en iyi sürekli açık uyandırma sözcüğü sistemini belirlemez; yanlış alarm, sözlük, gürültü ve cihaz maliyeti burada ölçülmüyor.

Candidates / Adaylar: wav2vec 2.0 · SUPERB KS.

Primary evidence / Birincil kanıt: [superb/wav2vec2-base-superb-ks · model card](https://huggingface.co/superb/wav2vec2-base-superb-ks/blob/372e0486cd83e6f0c05c20a27262e9ca09450d24/README.md); [wav2vec 2.0 · SUPERB KS — model card](https://huggingface.co/superb/wav2vec2-base-superb-ks).

### speech-emotion-recognition

**single result / tek sonuç**

HuBERT large has a traceable SUPERB emotion head and a reported session-specific accuracy. IEMOCAP session1 is not a five-fold mean or evidence of reliable emotion inference across languages and real users.

HuBERT large izlenebilir SUPERB duygu başlığı ve raporlanmış oturuma özgü doğruluk sunar. IEMOCAP session1 beş katlı ortalama veya diller ve gerçek kullanıcılar arasında güvenilir duygu çıkarımı kanıtı değildir.

Candidates / Adaylar: HuBERT large · SUPERB ER.

Primary evidence / Birincil kanıt: [superb/hubert-large-superb-er · model card](https://huggingface.co/superb/hubert-large-superb-er/blob/ef1a2ebfd7cfc424dc7f0fbcdc406e8b794d63bb/README.md); [HuBERT large · SUPERB ER — model card](https://huggingface.co/superb/hubert-large-superb-er).

### audio-classification

**single result / tek sonuç**

AudioMosaic adds a 2026 AudioSet-2M fine-tuned checkpoint with a published 50.19 mAP result. AST and AudioMosaic training/augmentation recipes need a common rerun or exact paper mapping before declaring a pairwise winner.

AudioMosaic, yayımlanmış 50.19 mAP sonucu olan 2026 AudioSet-2M ince ayarlı checkpoint’i ekliyor. AST ve AudioMosaic eğitim/artırma reçeteleri için ortak yeniden değerlendirme veya tam makale eşlemesi gerekir; bundan önce ikili lider ilan edilmez.

Candidates / Adaylar: AudioMosaic ViT-B/16 · AudioSet-2M, Audio Spectrogram Transformer.

Primary evidence / Birincil kanıt: [hanxunh/AudioMosaic-vit-b16-finetune-as2m · model card](https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/blob/1a7f51c115161d2b564cdb97f6f1268c659ffe4e/README.md); [Audio Spectrogram Transformer — model card](https://huggingface.co/MIT/ast-finetuned-audioset-10-10-0.4593).

### speaker-identification

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

ECAPA and ReDimNet2+ embeddings can support enrolled-speaker identification with an explicit enrollment and scoring layer. Verification EER measures same/different pairs, not closed-set identification accuracy or unknown-speaker rejection. No matching identification benchmark was verified.

ECAPA ve ReDimNet2+ gömmeleri açık bir kayıt ve puanlama katmanıyla kayıtlı konuşmacı tanımayı destekleyebilir. Doğrulama EER’si aynı/farklı çiftlerini ölçer; kapalı küme kimlik doğruluğunu veya bilinmeyen konuşmacı reddini değil. Eşleşen kimlik benchmark’ı doğrulanamadı.

Candidates / Adaylar: ReDimNet2+, ECAPA-TDNN · VoxCeleb.

Primary evidence / Birincil kanıt: [lab260/redimnet2-plus · model card](https://huggingface.co/lab260/redimnet2-plus/blob/fd45d1968c0ea91b62ad0d2469eee4607756bb07/README.md); [ECAPA-TDNN · VoxCeleb — model card](https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb).

### speaker-verification

**single result / tek sonuç**

ReDimNet2+ is a current released candidate with low reported VoxCeleb1-O EER under a four-second-window protocol. The comparison baselines are not uniquely tied to released checkpoints; ECAPA full-utterance numbers are not merged into this table.

ReDimNet2+ dört saniyelik pencere protokolünde düşük VoxCeleb1-O EER bildiren güncel yayımlanmış adaydır. Karşılaştırma tabanları yayımlanmış checkpoint’lere benzersiz bağlanmıyor; ECAPA tam konuşma puanları bu tabloya birleştirilmiyor.

Candidates / Adaylar: ReDimNet2+, ECAPA-TDNN · VoxCeleb.

Primary evidence / Birincil kanıt: [lab260/redimnet2-plus · model card](https://huggingface.co/lab260/redimnet2-plus/blob/fd45d1968c0ea91b62ad0d2469eee4607756bb07/README.md); [ECAPA-TDNN · VoxCeleb — model card](https://huggingface.co/speechbrain/spkrec-ecapa-voxceleb).

### speaker-diarization

**comparison / karşılaştırma**

Community-1 improves the no-collar AMI result over legacy 3.1. Audar supplies a newer streaming comparison under a different scoring protocol. Overlap exclusion, forgiveness collar and corpus selection materially change DER; leaders are local to each table.

Community-1 toleranssız AMI sonucunda legacy 3.1’i geçiyor. Audar farklı puanlama protokolünde daha yeni bir akış karşılaştırması sağlıyor. Örtüşmenin çıkarılması, zaman toleransı ve korpus seçimi DER’yi belirgin değiştirir; liderlik her tabloyla sınırlıdır.

Candidates / Adaylar: pyannote Community-1, pyannote speaker-diarization-3.1, Audar-Diarization-V1.

Primary evidence / Birincil kanıt: [pyannote/speaker-diarization-community-1 · model card](https://huggingface.co/pyannote/speaker-diarization-community-1/blob/3533c8cf8e369892e6b79ff1bf80f7b0286a54ee/README.md); [audarai/Audar-Diarization-V1 · model card](https://huggingface.co/audarai/Audar-Diarization-V1/blob/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb/README.md); [pyannote Community-1 — model card](https://huggingface.co/pyannote/speaker-diarization-community-1).

### text-to-speech

**comparison / karşılaştırma**

Qwen3-TTS 1.7B CustomVoice has lower English WER than 0.6B in the matched target-speaker table. Intelligibility is only one criterion. Naturalness, voice similarity, streaming delay and Turkish quality need separate evidence.

Qwen3-TTS 1.7B CustomVoice eşleşen hedef konuşmacı tablosunda 0.6B’den daha düşük İngilizce WER gösteriyor. Anlaşılabilirlik yalnızca bir ölçüttür. Doğallık, ses benzerliği, akış gecikmesi ve Türkçe kalite ayrı kanıt gerektirir.

Candidates / Adaylar: Qwen3-TTS 1.7B CustomVoice, Qwen3-TTS 0.6B CustomVoice.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice · model card](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice/blob/0c0e3051f131929182e2c023b9537f8b1c68adfe/README.md); [Qwen3-TTS 1.7B CustomVoice — model card](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice); [Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice · model card](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice/blob/85e237c12c027371202489a0ec509ded67b5e4b5/README.md).

### speech-enhancement

**comparison / karşılaştırma**

The auxiliary-loss DriftSE† checkpoint improves both PESQ and SI-SDR over the released base DistilHuBERT variant. These are matched one-step in-domain variants; the selected subset does not include every stronger PESQ model or establish out-of-domain leadership.

Yardımcı kayıplı DriftSE† checkpoint’i yayımlanmış taban DistilHuBERT sürümüne göre hem PESQ hem SI-SDR’yi yükseltiyor. Bunlar aynı tek adımlı, eğitim alanına yakın sürümlerdir; seçili alt küme daha güçlü tüm PESQ modellerini içermez ve alan dışı liderlik kurmaz.

Candidates / Adaylar: DriftSE · DistilHuBERT, DriftSE† · DistilHuBERT, MetricGAN+ · VoiceBank.

Primary evidence / Birincil kanıt: [LIANGXU123/DriftSE · model card](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md); [MetricGAN+ · VoiceBank — model card](https://huggingface.co/speechbrain/metricgan-plus-voicebank).

### speech-separation

**single result / tek sonuç**

SepFormer WHAMR! provides a specific released two-speaker noisy/reverberant separation checkpoint and SI-SNR improvement. Clean WSJ0-2mix scores, music-source separation and more-speaker mixtures are different conditions; this historical row cannot rank them.

SepFormer WHAMR! gürültülü/yankılı iki konuşmacı ayırmaya özgü yayımlanmış checkpoint ve SI-SNR iyileşmesi sunar. Temiz WSJ0-2mix puanları, müzik kaynak ayırma ve daha fazla konuşmacı farklı koşullardır; bu tarihsel satır onları sıralayamaz.

Candidates / Adaylar: SepFormer · WHAMR!.

Primary evidence / Birincil kanıt: [speechbrain/sepformer-whamr · model card](https://huggingface.co/speechbrain/sepformer-whamr/blob/9950fd8055b38679d2af5bef2366b5dba600ec66/README.md); [SepFormer · WHAMR! — model card](https://huggingface.co/speechbrain/sepformer-whamr).

### voice-conversion

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Seed-VC v2 and kNN-VC provide released conversion pipelines with different generation and retrieval approaches. Source/target speakers, reference duration, vocoder and speaker-similarity evaluator must match; no shared current table for these artifacts was verified.

Seed-VC v2 ve kNN-VC farklı üretim ve getirme yaklaşımlarıyla yayımlanmış dönüştürme hatları sağlar. Kaynak/hedef konuşmacılar, referans süresi, vokoder ve konuşmacı benzerliği ölçücüsü eşleşmeli; bu dosyalar için ortak güncel tablo doğrulanamadı.

Candidates / Adaylar: Seed-VC v2, kNN-VC · prematched HiFi-GAN.

Primary evidence / Birincil kanıt: [Seed-VC v2 — model card](https://huggingface.co/Plachta/Seed-VC); [kNN-VC · prematched HiFi-GAN — model and inference documentation](https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/README.md); [Seed-VC official models and inference](https://github.com/Plachtaa/seed-vc).

### text-to-audio-generation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

AudioGen medium is a released environmental-sound generation checkpoint with a defined audio tokenizer and sampling pipeline. FAD depends on embedding model, reference audio, duration and sampling count. Incompatible newer FAD or TTS scores are not used to declare a winner.

AudioGen medium belirli bir ses tokenizer’ı ve örnekleme hattıyla yayımlanmış çevresel ses üretim checkpoint’idir. FAD gömme modeline, referans sese, süreye ve örnek sayısına bağlıdır. Uyumsuz yeni FAD veya TTS puanları lider ilan etmek için kullanılmaz.

Candidates / Adaylar: AudioGen medium.

Primary evidence / Birincil kanıt: [AudioGen medium — model card](https://huggingface.co/facebook/audiogen-medium).

### conditional-music-generation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

ACE-Step 1.5 offers newer text/lyric-controlled music generation; MusicGen large is a documented text-conditioned baseline. The ACE card’s qualitative quality labels are not numerical benchmarks. Vocal/song and instrumental tests, FAD encoders and conditioning differ; no matched rank is available.

ACE-Step 1.5 daha yeni metin/şarkı sözü kontrollü müzik üretimi sunar; MusicGen large belgelenmiş metin koşullu referanstır. ACE kartının nitel kalite etiketleri sayısal benchmark değildir. Vokalli/şarkı ve enstrümantal testler, FAD kodlayıcıları ve koşullandırma farklı; eşleşen sıra yok.

Candidates / Adaylar: ACE-Step 1.5, MusicGen large.

Primary evidence / Birincil kanıt: [ACE-Step 1.5 — model card](https://huggingface.co/ACE-Step/Ace-Step1.5); [MusicGen large — model card](https://huggingface.co/facebook/musicgen-large).

### text-to-code-generation

**comparison / karşılaştırma**

Qwen3.8-27B improves LiveCodeBench v6 over Qwen3.6-27B; DeepSeek-V4.1 remains a strong repository-agent candidate. Programming-contest pass rate and agentic repository success are distinct. This table does not establish one best coding model for every workflow.

Qwen3.8-27B LiveCodeBench v6’da Qwen3.6-27B’yi geçiyor; DeepSeek-V4.1 güçlü bir depo ajanı adayı olmaya devam ediyor. Programlama yarışması başarı oranı ve ajanlı depo başarısı farklıdır. Bu tablo her iş akışı için tek en iyi kod modelini belirlemez.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, DeepSeek-V4.1-Flash-1017, Qwen3-Coder-Next.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### code-completion

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

CodeT5+ 770M supports a released code-generation/completion interface; Qwen3-Coder-Next is a newer coding candidate. Repository agent benchmarks do not measure fill-in-the-middle completion, edit latency or keystroke savings; no matched completion result was verified.

CodeT5+ 770M yayımlanmış kod üretimi/tamamlama arayüzü sunar; Qwen3-Coder-Next daha yeni kodlama adayıdır. Depo ajanı benchmark’ları arayı doldurma tamamlamasını, düzenleme gecikmesini veya tuş tasarrufunu ölçmez; eşleşen tamamlama sonucu doğrulanamadı.

Candidates / Adaylar: Qwen3-Coder-Next, CodeT5+ 770M.

Primary evidence / Birincil kanıt: [Qwen3-Coder-Next — model card](https://huggingface.co/Qwen/Qwen3-Coder-Next); [CodeT5+ 770M — model card](https://huggingface.co/Salesforce/codet5p-770m).

### code-repair

**comparison / karşılaştırma**

DeepSeek-V4.1-Flash-1017 leads the selected open-weight rows in its October DeepSWE v1.1 table. This is publisher-reported agent performance with a scaffold and tools; it is not an independently rerun comparison or a guaranteed fix rate on your repository.

DeepSeek-V4.1-Flash-1017 Ekim tarihli DeepSWE v1.1 tablosunda seçili açık ağırlıklı satırların önünde. Bu, çalıştırma düzeni ve araçlarla yayıncı tarafından raporlanan ajan performansıdır; bağımsız yeniden test veya sizin deponuz için garantili düzeltme oranı değildir.

Candidates / Adaylar: DeepSeek-V4.1-Flash-1017, Kimi K3, GLM-5.3.

Primary evidence / Birincil kanıt: [deepseek-ai/DeepSeek-V4.1-Flash-1017 · model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017/blob/1bae0e1088993b9b82de08f59de5be5a34e42170/README.md); [DeepSeek-V4.1-Flash-1017 — model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017); [moonshotai/Kimi-K3 · model card](https://huggingface.co/moonshotai/Kimi-K3/blob/f831ab66814297da540d832a5235f8e904f29d06/README.md).

### code-translation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

CodeT5 is a released starting backbone for translation between programming languages. The base checkpoint is not the paper’s translation-fine-tuned checkpoint. CodeXGLUE BLEU without exact task weights and execution tests cannot justify a current winner.

CodeT5 programlama dilleri arası çeviri için yayımlanmış bir başlangıç omurgasıdır. Taban checkpoint makalenin çeviri için ince ayarlanmış checkpoint’i değildir. Tam görev ağırlıkları ve çalıştırma testleri olmadan CodeXGLUE BLEU güncel lideri doğrulamaz.

Candidates / Adaylar: CodeT5 base.

Primary evidence / Birincil kanıt: [CodeT5 base — model card](https://huggingface.co/Salesforce/codet5-base).

### text-to-sql

**comparison / karşılaştırma**

XiYanSQL 32B leads 7B under the same BIRD dev M-Schema setting; both exact SQL-specialized releases are downloadable. This historical single-model result does not rank current BIRD agent systems or transfer SQLCoder’s separate test-suite score.

XiYanSQL 32B aynı BIRD dev M-Schema düzeninde 7B’yi geçiyor; SQL’e özel iki tam sürüm de indirilebilir. Bu tarihsel tek-model sonucu güncel BIRD ajan sistemlerini sıralamaz veya SQLCoder’ın ayrı test kümesi puanını aktarmaz.

Candidates / Adaylar: XiYanSQL-QwenCoder-32B-2412, XiYanSQL-QwenCoder-7B-2502, SQLCoder 70B alpha.

Primary evidence / Birincil kanıt: [XGenerationLab/XiYanSQL-QwenCoder-7B-2502 · model card](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/blob/1009ef00833bafa68ca4251a7a2319fa58e9ab77/README.md); [XGenerationLab/XiYanSQL-QwenCoder-32B-2412 · model card](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-32B-2412/blob/b74605a579662ea82404dde034d4d4c2f032fab6/README.md); [SQLCoder 70B alpha — model card](https://huggingface.co/defog/sqlcoder-70b-alpha).

### code-summarization

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

CodeT5 can be fine-tuned for code-to-text summaries; current coding LLMs also accept summarization prompts. Code generation pass@1 is not summary quality. The exact released summarization head and language-specific CodeSearchNet evaluation were not verified for a current comparison.

CodeT5 koddan metne özetler için ince ayarlanabilir; güncel kodlama LLM’leri de özetleme istemi alabilir. Kod üretimi pass@1 özet kalitesi değildir. Güncel karşılaştırma için yayımlanmış tam özetleme başlığı ve dile özgü CodeSearchNet değerlendirmesi doğrulanamadı.

Candidates / Adaylar: Qwen3-Coder-Next, CodeT5 base.

Primary evidence / Birincil kanıt: [Qwen3-Coder-Next — model card](https://huggingface.co/Qwen/Qwen3-Coder-Next); [CodeT5 base — model card](https://huggingface.co/Salesforce/codet5-base).

### code-search

**comparison / karşılaştırma**

Qwen3-Reranker 8B and 4B are almost tied on the shared MTEB-Code result; embedding retrieval remains the first stage. The 0.02-point gap has no uncertainty estimate. Reranking a candidate set is not a standalone full-corpus code-search benchmark.

Qwen3-Reranker 8B ve 4B ortak MTEB-Code sonucunda neredeyse eşit; gömme ile getirme ilk aşama olmaya devam eder. 0.02 puan farkı için belirsizlik tahmini yok. Aday kümesini yeniden sıralama bağımsız tam korpus kod arama benchmark’ı değildir.

Candidates / Adaylar: Qwen3-Reranker-8B, Qwen3-Reranker-4B, Qwen3-Embedding-8B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3-Reranker-8B · model card](https://huggingface.co/Qwen/Qwen3-Reranker-8B/blob/77d193c791ed757ca307ee72715aa132723da912/README.md); [Qwen3-Reranker-8B — model card](https://huggingface.co/Qwen/Qwen3-Reranker-8B); [Qwen/Qwen3-Reranker-4B · model card](https://huggingface.co/Qwen/Qwen3-Reranker-4B/blob/22e683669bc0f0bd69640a1354a6d0aebcfeede5/README.md).

### code-clone-detection

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

CodeT5 is a transferable backbone, but the catalogue’s base release is not a ready BigCloneBench classifier. Clone F1 depends on negative-pair construction, split leakage and a trained classification head; paper task scores are not assigned to base weights.

CodeT5 aktarılabilir omurgadır; ancak katalogdaki taban sürüm hazır BigCloneBench sınıflandırıcısı değildir. Klon F1 negatif çift üretimine, bölümler arası sızıntıya ve eğitilmiş sınıflandırma başlığına bağlıdır; makalenin görev puanları taban ağırlıklara atanmaz.

Candidates / Adaylar: CodeT5 base.

Primary evidence / Birincil kanıt: [CodeT5 base — model card](https://huggingface.co/Salesforce/codet5-base).

### defect-detection

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

CodeT5 can initialize a defect classifier; a supervised defect head and a defined vulnerability/bug target are still needed. Code repair success and Devign/BigVul classification are different tasks. No exact current released defect checkpoint comparison was verified.

CodeT5 hata sınıflandırıcısını başlatabilir; gözetimli hata başlığı ve tanımlı güvenlik açığı/hata hedefi gerekir. Kod onarım başarısı ile Devign/BigVul sınıflandırması farklı görevlerdir. Güncel yayımlanmış tam hata checkpoint’i karşılaştırması doğrulanamadı.

Candidates / Adaylar: CodeT5 base.

Primary evidence / Birincil kanıt: [CodeT5 base — model card](https://huggingface.co/Salesforce/codet5-base).

### classification

**single result / tek sonuç**

Kumo Tabular adds September 2026 benchmark evidence and public weights alongside TabPFN 3.5 for in-context tabular prediction. The displayed TALENT average rank is relative to the publisher’s candidate pool. A matching TabPFN-3.5 score was not verified, so no numerical head-to-head winner is shown.

Kumo Tabular bağlamdan tablosal tahmin için TabPFN 3.5 yanına Eylül 2026 benchmark kanıtı ve herkese açık ağırlıklar ekliyor. Gösterilen TALENT ortalama sırası yayıncının aday havuzuna göredir. Eşleşen TabPFN-3.5 puanı doğrulanamadığından sayısal ikili lider gösterilmez.

Candidates / Adaylar: NVIDIA Kumo Tabular · Large, TabPFN 3.5.

Primary evidence / Birincil kanıt: [Kumo Tabular · TALENT results](https://huggingface.co/blog/nvidia/kumo-tabular); [nvidia/Kumo-Tabular · model card](https://huggingface.co/nvidia/Kumo-Tabular/blob/c5893d418e162b9f841ae179dc767afefff73831/README.md); [TabPFN 3.5 — model card](https://huggingface.co/Prior-Labs/tabpfn_3_5).

### regression

**single result / tek sonuç**

Kumo Tabular and TabPFN 3.5 are current tabular regression candidates; Kumo publishes a TALENT RMSE-based average rank. BRISQUE is a specific image-quality regressor and is not a competing universal tabular predictor; rank is not an RMSE in your target units.

Kumo Tabular ve TabPFN 3.5 güncel tablosal regresyon adaylarıdır; Kumo TALENT RMSE temelli ortalama sıra yayımlar. BRISQUE belirli bir görüntü kalitesi regresörüdür, evrensel tablosal tahmin rakibi değildir; sıra sizin hedef biriminizde RMSE anlamına gelmez.

Candidates / Adaylar: NVIDIA Kumo Tabular · Large, TabPFN 3.5, BRISQUE · LIVE-R2 RBF-SVR.

Primary evidence / Birincil kanıt: [Kumo Tabular · TALENT results](https://huggingface.co/blog/nvidia/kumo-tabular); [nvidia/Kumo-Tabular · model card](https://huggingface.co/nvidia/Kumo-Tabular/blob/c5893d418e162b9f841ae179dc767afefff73831/README.md); [TabPFN 3.5 — model card](https://huggingface.co/Prior-Labs/tabpfn_3_5).

### time-series-forecasting

**comparison / karşılaştırma**

Timestral-209M has lower reported MASE than Chronos-2 and Timestral-28M on both GIFT-Eval and TIME in the October 15 release. Timestral-28M offers a smaller candidate; domain, horizon, context and covariates still require validation. These are publisher results, not local runs.

Timestral-209M, 15 Ekim sürümünde hem GIFT-Eval hem TIME üzerinde Chronos-2 ve Timestral-28M’den daha düşük MASE bildiriyor. Timestral-28M daha küçük bir aday sunar; alan, ufuk, bağlam ve yardımcı değişkenler yine doğrulama gerektirir. Bunlar yayıncı sonuçlarıdır, yerel koşu değildir.

Candidates / Adaylar: Timestral-209M, Timestral-28M, Chronos-2.

Primary evidence / Birincil kanıt: [mistralai/Timestral-209M · model card](https://huggingface.co/mistralai/Timestral-209M/blob/9874d252ab0aae16f7f7c999f98f98d6ad7d8365/README.md); [mistralai/Timestral-28M · model card](https://huggingface.co/mistralai/Timestral-28M/blob/49b26409ac87b5935539a5d8ffe7f397b720db47/README.md); [Chronos-2 — model card](https://huggingface.co/amazon/chronos-2).

### clustering

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

SCAN CIFAR-10 is an exact released clustering head; its labels are learned from a fixed image domain. SCAN-loss and subsequent self-labeling checkpoints are different. Their CIFAR scores cannot rank arbitrary-text or tabular clustering, or be interchanged.

SCAN CIFAR-10 belirli görüntü alanından öğrenilmiş etiketlerle yayımlanmış tam kümeleme başlığıdır. SCAN-loss ve sonraki öz etiketleme checkpoint’leri farklıdır. CIFAR puanları rastgele metin veya tablosal kümelemeyi sıralayamaz ve birbirine atanamaz.

Candidates / Adaylar: SCAN · CIFAR-10 (SCAN-loss).

Primary evidence / Birincil kanıt: [SCAN CIFAR-10 — clustering model zoo and inference](https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/README.md); [SCAN-loss CIFAR-10 — scan_cifar-10.pth.tar](https://drive.google.com/file/d/1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0/view); [SCAN — noncommercial license](https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/LICENSE).

### dimensionality-reduction

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

The released UvA autoencoder provides a concrete CIFAR-10 128-dimensional latent representation. Reconstruction distortion, neighborhood preservation and downstream classification measure different goals; no universal pretrained reduction model or common current rank was established.

Yayımlanmış UvA oto-kodlayıcı somut CIFAR-10 128 boyutlu gizil temsil sağlar. Yeniden yapılandırma hatası, komşuluk koruma ve sonraki sınıflandırma farklı hedefleri ölçer; evrensel ön eğitimli indirgeme modeli veya ortak güncel sıra kurulamadı.

Candidates / Adaylar: UvA CIFAR-10 Autoencoder · 128D.

Primary evidence / Birincil kanıt: [UvA deep-learning tutorials — released PyTorch models](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/README.md); [UvA Tutorial 9 — CIFAR-10 encoder and pretrained checkpoints](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial9/AE_CIFAR10.ipynb); [tutorial9/cifar10_128.ckpt — released artifact](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial9/cifar10_128.ckpt).

### density-estimation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

The released UvA multiscale MNIST flow is an inspectable likelihood model; JEM provides a different energy-based route. Bits/dimension depends on dequantization, preprocessing and held-out data. MNIST likelihoods cannot rank density estimation across arbitrary domains.

Yayımlanmış UvA çok ölçekli MNIST akışı incelenebilir olabilirlik modelidir; JEM farklı enerji temelli yol sağlar. Bit/boyut dekuantizasyon, ön işleme ve ayrılmış test verisine bağlıdır. MNIST olabilirlikleri keyfi alanlarda yoğunluk kestirimini sıralayamaz.

Candidates / Adaylar: JEM · CIFAR-10, UvA MNISTFlow · multiscale.

Primary evidence / Birincil kanıt: [JEM · CIFAR-10 — release documentation](https://github.com/wgrathwohl/JEM/blob/3d01161547109b464eee87304f07b2dac8519d03/README.md); [UvA deep-learning tutorials — released PyTorch models](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/README.md); [UvA Tutorial 11 — MNIST normalizing-flow likelihood](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial11/NF_image_modeling.ipynb).

### anomaly-detection

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

MOMENT is an adaptable time-series foundation encoder; JEM supplies an image-domain energy score. Neither one score nor point-adjusted time-series F1 establishes general anomaly leadership. Thresholding, event matching and training contamination require a shared protocol.

MOMENT uyarlanabilir zaman serisi temel kodlayıcısıdır; JEM görüntü alanında enerji puanı sağlar. Tek bir puan veya nokta düzeltmeli zaman serisi F1 genel anomali liderliğini kurmaz. Eşikleme, olay eşleme ve eğitim bulaşması ortak protokol gerektirir.

Candidates / Adaylar: MOMENT-1 large, JEM · CIFAR-10.

Primary evidence / Birincil kanıt: [MOMENT-1 large — model card](https://huggingface.co/AutonLab/MOMENT-1-large); [JEM · CIFAR-10 — release documentation](https://github.com/wgrathwohl/JEM/blob/3d01161547109b464eee87304f07b2dac8519d03/README.md); [JEM — joint classifier and energy objective](https://arxiv.org/abs/1912.03263).

### missing-value-imputation

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

MOMENT supports time-series reconstruction/imputation; the ASIA network supplies a small probabilistic conditional-inference example. Random, block and missing-not-at-random masks differ. No matched released-checkpoint comparison on the same mask pattern was verified.

MOMENT zaman serisi yeniden yapılandırma/tamamlamayı destekler; ASIA ağı küçük olasılıksal koşullu çıkarım örneği sağlar. Rastgele, blok ve rastlantısal olmayan eksiklik maskeleri farklıdır. Aynı maske düzeninde yayımlanmış checkpoint karşılaştırması doğrulanamadı.

Candidates / Adaylar: MOMENT-1 large, ASIA · parameterized Bayesian network.

Primary evidence / Birincil kanıt: [MOMENT-1 large — model card](https://huggingface.co/AutonLab/MOMENT-1-large); [ASIA · parameterized Bayesian network — release documentation](https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/README.md); [ASIA — benchmark structure and parameters](https://www.bnlearn.com/bnrepository/discrete-small.html#asia).

### change-point-detection

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

AutoCPD supplies a verifiable HASC activity-transition classifier for six-channel windows. Its trained transition classes and window setup do not define a generic online change-point detector; synthetic benchmark scores cannot be assigned to this HASC artifact.

AutoCPD altı kanallı pencereler için doğrulanabilir HASC etkinlik geçişi sınıflandırıcısı sağlar. Eğitilmiş geçiş sınıfları ve pencere düzeni genel çevrimiçi değişim noktası algılayıcısı tanımlamaz; sentetik benchmark puanları HASC dosyasına atanamaz.

Candidates / Adaylar: AutoCPD · HASC Demo (0.1.5).

Primary evidence / Birincil kanıt: [AutoCPD — pretrained HASC demonstration](https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/README.md); [AutoCPD — HASC preprocessing and change-point extraction](https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/test/test_load_pretrained_model.py); [AutoCPD 0.1.5 — distribution metadata and published digests](https://pypi.org/pypi/autocpd/0.1.5/json).

### node-classification

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

GraphAny Arxiv is a released transferable node-classification component with explicit graph and label-support requirements. Inductive, transductive and cross-graph settings differ; no same-split, same-label-access current checkpoint table was verified.

GraphAny Arxiv açık graf ve destek etiketi gereksinimleri olan yayımlanmış aktarılabilir düğüm sınıflandırma bileşenidir. Endüktif, transdüktif ve graflar arası düzenler farklıdır; aynı veri bölümü ve etiket erişimiyle güncel checkpoint tablosu doğrulanamadı.

Candidates / Adaylar: GraphAny · Arxiv.

Primary evidence / Birincil kanıt: [GraphAny Arxiv — released inductive node-classification model](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/README.md); [GraphAny — graph features and labeled support-node inputs](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/graphany/data.py); [checkpoints/graph_any_arxiv.pt — released artifact](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_arxiv.pt).

### link-prediction

**comparison / karşılaştırma**

ULTRA adds transferable graph-model weights. Its 50g variant has higher transductive MRR than 3g, but has seen more of the benchmark graphs. The 50g score cannot be advertised as zero-shot on those graphs; AnyBURL WN18RR rules are a different dataset-specific artifact.

ULTRA aktarılabilir graf modeli ağırlıkları ekliyor. 50g sürümü 3g’den daha yüksek transdüktif MRR gösteriyor; ancak benchmark graflarının daha fazlasını görmüş. 50g puanı o graflar üzerinde sıfır örnekli diye sunulamaz; AnyBURL WN18RR kuralları veri kümesine özgü farklı dosyadır.

Candidates / Adaylar: ULTRA 50g, ULTRA 3g, AnyBURL · WN18RR learned rules.

Primary evidence / Birincil kanıt: [mgalkin/ultra_50g · model card](https://huggingface.co/mgalkin/ultra_50g/blob/d46107d8415549e7c7386d26903ad11c9a8de4fd/README.md); [mgalkin/ultra_3g · model card](https://huggingface.co/mgalkin/ultra_3g/blob/bf98f89c4a47f794396fa895eb6940fdb94bfe9c/README.md); [AnyBURL · WN18RR learned rules — release documentation](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md).

### graph-classification

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

DGL-LifeSci GCN Tox21 is a released whole-molecule multi-label classifier with 12 toxicity endpoints. Scaffold/random splits and missing-label treatment change ROC-AUC. A paper’s retrained GAT/GCN average cannot be assigned to this exact checkpoint.

DGL-LifeSci GCN Tox21, 12 toksisite hedefi olan yayımlanmış tüm molekül düzeyinde çok etiketli sınıflandırıcıdır. İskelet/rastgele veri bölümleri ve eksik etiket işlemesi ROC-AUC’yi değiştirir. Makalede yeniden eğitilen GAT/GCN ortalaması bu tam checkpoint’e atanamaz.

Candidates / Adaylar: DGL-LifeSci · GCN canonical Tox21.

Primary evidence / Birincil kanıt: [DGL-LifeSci GCN canonical Tox21 — pretrained model registry](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py); [DGL-LifeSci — graph pooling and classification logits](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/model_zoo/gcn_predictor.py); [GCN canonical Tox21 — published checkpoint](https://data.dgl.ai/dgllife/pre_trained/gcn_canonical_tox21.pth).

### graph-regression

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

CHGNet 0.3.0 is a released atomistic graph potential for materials energies, forces and stresses. Matbench materials targets, molecular QM9 properties and MPtrj force errors have different units and splits; no universal graph-regression winner is inferred.

CHGNet 0.3.0 malzeme enerjisi, kuvvet ve gerilmeleri için yayımlanmış atomistik graf potansiyelidir. Matbench malzeme hedefleri, moleküler QM9 özellikleri ve MPtrj kuvvet hataları farklı birim ve bölümlere sahiptir; evrensel graf regresyon lideri çıkarılmaz.

Candidates / Adaylar: CHGNet 0.3.0 · MPtrj.

Primary evidence / Birincil kanıt: [CHGNet 0.3.0 · MPtrj — release documentation](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md); [CHGNet — crystal graphs and structure prediction](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/README.md).

### molecular-property-prediction

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Boltz-2 is a released specialist for biomolecular structures and protein–ligand binding affinity. Binding affinity is one property, not general ADMET or toxicity prediction. Target leakage, assay units and test splits prevent a single cross-property benchmark rank.

Boltz-2 biyomoleküler yapılar ve protein–ligand bağlanma afinitesi için yayımlanmış uzman modeldir. Bağlanma afinitesi tek bir özelliktir; genel ADMET veya toksisite tahmini değildir. Hedef sızıntısı, deney birimleri ve test bölümleri özellikler arası tek sıralamayı engeller.

Candidates / Adaylar: Boltz-2.

Primary evidence / Birincil kanıt: [Boltz-2 — model card](https://huggingface.co/boltz-community/boltz-2); [Boltz-2 official structure and affinity documentation](https://github.com/jwohlwend/boltz).

### protein-structure-prediction

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

Boltz-2 has verifiable open weights for biomolecular complex prediction and is a strong task-specific candidate. Monomer, multimer and ligand-complex metrics differ; MSA/template dates, sampling count and target overlap must match before a current global rank is credible.

Boltz-2 biyomoleküler kompleks tahmini için doğrulanabilir açık ağırlıklara sahiptir ve göreve özgü güçlü adaydır. Monomer, multimer ve ligand kompleks ölçüleri farklıdır; güncel genel sıralama için MSA/şablon tarihleri, örnek sayısı ve hedef örtüşmesi eşleşmelidir.

Candidates / Adaylar: Boltz-2.

Primary evidence / Birincil kanıt: [Boltz-2 — model card](https://huggingface.co/boltz-community/boltz-2); [Boltz-2 official structure and affinity documentation](https://github.com/jwohlwend/boltz).

### math-word-problem-solving

**single result / tek sonuç**

R1-0528 supplies a reproducible published competition-math result; newer DeepSeek releases are additional reasoning candidates. The AIME result is historical, not a current grade-school word-problem leaderboard; tool use, answer extraction and sampling budget must match.

R1-0528 tekrarlanabilir yayımlanmış yarışma matematiği sonucu sağlar; daha yeni DeepSeek sürümleri ek akıl yürütme adaylarıdır. AIME sonucu tarihseldir; güncel okul düzeyi sözel problem sıralaması değildir. Araç kullanımı, yanıt çıkarımı ve örnekleme bütçesi eşleşmeli.

Candidates / Adaylar: DeepSeek-R1-0528, DeepSeek-V4.1-Flash-1017.

Primary evidence / Birincil kanıt: [deepseek-ai/DeepSeek-R1-0528 · model card](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528/blob/4236a6af538feda4548eca9ab308586007567f52/README.md); [DeepSeek-R1-0528 — model card](https://huggingface.co/deepseek-ai/DeepSeek-R1-0528); [DeepSeek-V4.1-Flash-1017 — model card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017).

### formal-theorem-proving

**single result / tek sonuç**

LongCat-Flash-Prover adds a 2026 released Lean4 prover with high MiniF2F success under its stated inference budget. Pass@72 cannot be compared directly with pass@32 or pass@8192. Formal checker acceptance also differs from faithful formalization of the original problem.

LongCat-Flash-Prover belirtilen çıkarım bütçesinde yüksek MiniF2F başarısı olan 2026 yayımlanmış Lean4 ispatlayıcısını ekliyor. Pass@72 doğrudan pass@32 veya pass@8192 ile karşılaştırılamaz. Biçimsel denetleyici kabulü, özgün problemin sadık biçimselleştirilmesinden de farklıdır.

Candidates / Adaylar: LongCat-Flash-Prover, DeepSeek-Prover-V2 671B.

Primary evidence / Birincil kanıt: [LongCat-Flash-Prover technical report](https://arxiv.org/html/2603.21065v1); [meituan-longcat/LongCat-Flash-Prover · model card](https://huggingface.co/meituan-longcat/LongCat-Flash-Prover/blob/9532d650151da0f91cd14fc8d05eeee85720b93f/README.md); [DeepSeek-Prover-V2 671B — model card](https://huggingface.co/deepseek-ai/DeepSeek-Prover-V2-671B).

### constraint-satisfaction

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

HRM Sudoku Extreme has verified released weights for a narrow constraint task. TRM training-code results do not establish a matching released Sudoku checkpoint. Sudoku accuracy cannot rank generic SAT/CSP solvers or other grid sizes.

HRM Sudoku Extreme dar bir kısıt görevi için doğrulanmış yayımlanmış ağırlıklara sahip. TRM eğitim kodu sonuçları eşleşen yayımlanmış Sudoku checkpoint’ini kanıtlamaz. Sudoku doğruluğu genel SAT/CSP çözücüleri veya başka ızgara boyutlarını sıralayamaz.

Candidates / Adaylar: HRM · Sudoku Extreme 9×9.

Primary evidence / Birincil kanıt: [HRM Sudoku Extreme — author checkpoint](https://huggingface.co/sapientinc/HRM-checkpoint-sudoku-extreme); [HRM — architecture, Sudoku checkpoint and evaluation](https://github.com/sapientinc/HRM/blob/ac15626f8db096a63c775b84c9dc868776a6feda/README.md); [HRM Sudoku Extreme — pinned checkpoint and configuration](https://huggingface.co/sapientinc/HRM-checkpoint-sudoku-extreme/tree/fbb4eb883766c31c8e863426460ebaa0ceb1a5f2).

### classical-planning

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

GOOSE Blocks World provides a released learned ranking heuristic used by a classical search planner. Solved-instance coverage belongs to the complete planner, domain, timeout and hardware. The 12 linear RankSVM parameters are not a universal pretrained planner or a GNN checkpoint.

GOOSE Blocks World klasik arama planlayıcısının kullandığı yayımlanmış öğrenilmiş sıralama sezgisini sağlar. Çözülen örnek kapsamı tüm planlayıcıya, alana, zaman sınırına ve donanıma aittir. 12 doğrusal RankSVM parametresi evrensel ön eğitimli planlayıcı veya GNN checkpoint’i değildir.

Candidates / Adaylar: GOOSE · IPC23LT Blocks World.

Primary evidence / Birincil kanıt: [GOOSE — PDDL planning with released learned heuristics](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/README.md); [GOOSE — pretrained model versions and benchmark scope](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/README.md); [GOOSE — Weisfeiler–Leman features and rank-SVM training](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/configurations/classic.toml).

### robot-localization

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

SuperPoint + SuperGlue outdoor is a released feature-matching component within hierarchical localization. Pose recall requires a reference map, retrieval, camera calibration and geometric verification. Matcher scores alone cannot rank complete robot-localization systems.

SuperPoint + SuperGlue outdoor hiyerarşik konumlandırma içinde yayımlanmış özellik eşleme bileşenidir. Poz yakalama oranı referans harita, getirme, kamera kalibrasyonu ve geometrik doğrulama gerektirir. Eşleyici puanları tek başına tüm robot konumlandırma sistemlerini sıralayamaz.

Candidates / Adaylar: hloc · SuperPoint + SuperGlue outdoor.

Primary evidence / Birincil kanıt: [SuperPoint + SuperGlue outdoor — released visual matching models](https://github.com/magicleap/SuperGluePretrainedNetwork/blob/ddcf11f42e7e0732a0c4607648f9448ea8d73590/README.md); [hloc — image-to-map visual localization pipeline](https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/README.md); [hloc — calibrated 2D–3D absolute pose estimation](https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/hloc/localize_sfm.py).

### robot-motion-planning

**no verified comparable score / karşılaştırılabilir puan doğrulanamadı**

MPiNets Hybrid Expert supplies released neural planning weights for the documented Franka Panda environment. Success depends on obstacle distribution, collision checks, trajectory refinement and time budget. Simulation scores do not transfer to a different robot or establish physical acceptance.

MPiNets Hybrid Expert belgelenmiş Franka Panda ortamı için yayımlanmış sinirsel planlama ağırlıkları sağlar. Başarı engel dağılımı, çarpışma kontrolü, yörünge iyileştirmesi ve zaman bütçesine bağlıdır. Simülasyon puanları farklı robota aktarılmaz ve fiziksel kabul oluşturmaz.

Candidates / Adaylar: MPiNets · Hybrid Expert.

Primary evidence / Birincil kanıt: [Motion Policy Networks — released checkpoint and inference](https://github.com/NVlabs/motion-policy-networks/blob/42ff07bb95bd75f7c7752bf4300eb53698ae099d/README.md); [MPiNets — Franka rollout, goals and point-cloud inputs](https://github.com/NVlabs/motion-policy-networks/blob/42ff07bb95bd75f7c7752bf4300eb53698ae099d/mpinets/run_inference.py); [MPiNets — publisher archive, file checksum and CC-BY-4.0 license](https://zenodo.org/records/8319949).

### function-calling

**comparison / karşılaştırma**

Kimi K3 leads GLM-5.3 in GLM’s Toolathlon Verified table, providing useful evidence for tool-rich workflows. Toolathlon includes planning and execution. It cannot replace a BFCL argument-correctness test, and publisher self-reports may use different scaffolds.

Kimi K3 GLM’nin Toolathlon Verified tablosunda GLM-5.3’ü geçiyor; yoğun araç kullanılan iş akışları için yararlı kanıt sağlıyor. Toolathlon planlama ve yürütme içerir. BFCL argüman doğruluğu testinin yerine geçmez; yayıncı raporları farklı çalıştırma düzenleri kullanabilir.

Candidates / Adaylar: Kimi K3, GLM-5.3, DeepSeek-V4.1-Flash-1017, Qwen3.8-27B.

Primary evidence / Birincil kanıt: [zai-org/GLM-5.3 · model card](https://huggingface.co/zai-org/GLM-5.3/blob/ba32f8c19c8738e2c57c71798c601d477a7bf844/README.md); [moonshotai/Kimi-K3 · model card](https://huggingface.co/moonshotai/Kimi-K3/blob/f831ab66814297da540d832a5235f8e904f29d06/README.md); [GLM-5.3 — model card](https://huggingface.co/zai-org/GLM-5.3).

### web-task-execution

**comparison / karşılaştırma**

Qwen3.8-27B improves WebArena-Verified over Qwen3.6-27B using the publisher’s official-grader setup. Benchmark sites, agent loop and browser permissions constrain transfer; UI-TARS scores from different environments are not merged.

Qwen3.8-27B yayıncının resmi değerlendirici düzeninde WebArena-Verified üzerinde Qwen3.6-27B’yi geçiyor. Benchmark siteleri, ajan döngüsü ve tarayıcı izinleri aktarımı sınırlar; farklı ortamlardaki UI-TARS puanları birleştirilmez.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, UI-TARS 1.5 7B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

### desktop-task-execution

**comparison / karşılaştırma**

Qwen3.8-27B improves OSWorld-Verified over Qwen3.6-27B in the shared release comparison. The score belongs to the model-plus-agent setup on benchmark applications; it does not guarantee successful execution in an arbitrary desktop session.

Qwen3.8-27B ortak sürüm karşılaştırmasında OSWorld-Verified üzerinde Qwen3.6-27B’yi geçiyor. Puan benchmark uygulamalarındaki model ve ajan düzenine aittir; keyfi masaüstü oturumunda başarılı yürütme garantisi değildir.

Candidates / Adaylar: Qwen3.8-27B, Qwen3.6-27B, UI-TARS 1.5 7B.

Primary evidence / Birincil kanıt: [Qwen/Qwen3.8-27B · model card](https://huggingface.co/Qwen/Qwen3.8-27B/blob/1d4bf0f2ff6012fd82039f2fa52739d0dd7c60c0/README.md); [Qwen3.8-27B — model card](https://huggingface.co/Qwen/Qwen3.8-27B); [Qwen/Qwen3.6-27B · model card](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/README.md).

## Release identities / Sürüm kimlikleri

| Candidate | Access | License | Immutable files |
| --- | --- | --- | --- |
| Qwen3.6-27B | public | [Apache-2.0](https://huggingface.co/Qwen/Qwen3.6-27B/blob/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9/LICENSE) | [6a9e13bd6fc8](https://huggingface.co/Qwen/Qwen3.6-27B/tree/6a9e13bd6fc8f0983b9b99948120bc37f49c13e9) |
| GLiNER2.5 base v1 | public | [Apache-2.0](https://huggingface.co/fastino/gliner2.5-base-v1/blob/54785d51df8d86a0d8f2eb212fec15871aad2c4d/README.md) | [54785d51df8d](https://huggingface.co/fastino/gliner2.5-base-v1/tree/54785d51df8d86a0d8f2eb212fec15871aad2c4d) |
| GLiNER2.5 multi v1 | public | [Apache-2.0](https://huggingface.co/fastino/gliner2.5-multi-v1/blob/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3/README.md) | [cf5593a5d45e](https://huggingface.co/fastino/gliner2.5-multi-v1/tree/cf5593a5d45e3bbf204b9df621b13b1c0cf25ee3) |
| GLiNER2 base v1 | public | [Apache-2.0](https://huggingface.co/fastino/gliner2-base-v1/blob/f9634218e53580c56edf0de97ca1a7d3f1c2354e/README.md) | [f9634218e535](https://huggingface.co/fastino/gliner2-base-v1/tree/f9634218e53580c56edf0de97ca1a7d3f1c2354e) |
| GLiNER2 multi v1 | public | [Apache-2.0](https://huggingface.co/fastino/gliner2-multi-v1/blob/ce747d79a8e362d3dee0b0b26d1201f7f1a8615a/README.md) | [ce747d79a8e3](https://huggingface.co/fastino/gliner2-multi-v1/tree/ce747d79a8e362d3dee0b0b26d1201f7f1a8615a) |
| LingMess Coref | public | [MIT](https://huggingface.co/biu-nlp/lingmess-coref/blob/fa5d8a827a09388d03adbe9e800c7d8c509c3935/README.md) | [fa5d8a827a09](https://huggingface.co/biu-nlp/lingmess-coref/tree/fa5d8a827a09388d03adbe9e800c7d8c509c3935) |
| CoEdIT XL | public | [CC-BY-NC-4.0](https://huggingface.co/grammarly/coedit-xl/blob/be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf/README.md) | [be7d1aeebbaa](https://huggingface.co/grammarly/coedit-xl/tree/be7d1aeebbaa0e5c6b97dcf110dd4ba22096d3cf) |
| Hy-MT2-30B-A3B | public | [Apache-2.0](https://huggingface.co/tencent/Hy-MT2-30B-A3B/blob/d3ead4dba61c09aac60a261a96ad1df3e705febb/LICENSE.txt) | [d3ead4dba61c](https://huggingface.co/tencent/Hy-MT2-30B-A3B/tree/d3ead4dba61c09aac60a261a96ad1df3e705febb) |
| Hy-MT2-7B | public | [Apache-2.0](https://huggingface.co/tencent/Hy-MT2-7B/blob/9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223/LICENSE.txt) | [9b0eb4e8f001](https://huggingface.co/tencent/Hy-MT2-7B/tree/9b0eb4e8f001def3e5ff6469a0ac96fdb39ec223) |
| Qwen3-Embedding-4B | public | [Apache-2.0](https://huggingface.co/Qwen/Qwen3-Embedding-4B/blob/5cf2132abc99cad020ac570b19d031efec650f2b/README.md) | [5cf2132abc99](https://huggingface.co/Qwen/Qwen3-Embedding-4B/tree/5cf2132abc99cad020ac570b19d031efec650f2b) |
| Qwen3-Reranker-4B | public | [Apache-2.0](https://huggingface.co/Qwen/Qwen3-Reranker-4B/blob/22e683669bc0f0bd69640a1354a6d0aebcfeede5/README.md) | [22e683669bc0](https://huggingface.co/Qwen/Qwen3-Reranker-4B/tree/22e683669bc0f0bd69640a1354a6d0aebcfeede5) |
| Mask2Former Swin tiny · ADE20K | public | [CC-BY-NC-4.0](https://huggingface.co/facebook/mask2former-swin-tiny-ade-semantic/blob/c8cf1b5e823aee214d937d0d001c1850ba44ef6a/README.md) | [c8cf1b5e823a](https://huggingface.co/facebook/mask2former-swin-tiny-ade-semantic/tree/c8cf1b5e823aee214d937d0d001c1850ba44ef6a) |
| ViTPose+ base | public | [Apache-2.0](https://huggingface.co/usyd-community/vitpose-plus-base/blob/92be54d7a29e42fad47b6e2ca01dd9e685a61e0d/README.md) | [92be54d7a29e](https://huggingface.co/usyd-community/vitpose-plus-base/tree/92be54d7a29e42fad47b6e2ca01dd9e685a61e0d) |
| Marigold V2 · Log-stage2 | public | [Apache-2.0](https://huggingface.co/huawei-bayerlab/marigold-v2-0/blob/cdf9810fb690886391a63aec012b5f501064fb0d/LICENSE) | [cdf9810fb690](https://huggingface.co/huawei-bayerlab/marigold-v2-0/tree/cdf9810fb690886391a63aec012b5f501064fb0d) |
| FLUX.2 klein 4B | public | [Apache-2.0](https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/blob/e7b7dc27f91deacad38e78976d1f2b499d76a294/LICENSE.md) | [e7b7dc27f91d](https://huggingface.co/black-forest-labs/FLUX.2-klein-4B/tree/e7b7dc27f91deacad38e78976d1f2b499d76a294) |
| FLUX.2 klein 9B | gated | [FLUX Non-Commercial License](https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/blob/92196c8e11f7b6cf2b7493e037d8c5345c559216/LICENSE.md) | [92196c8e11f7](https://huggingface.co/black-forest-labs/FLUX.2-klein-9B/tree/92196c8e11f7b6cf2b7493e037d8c5345c559216) |
| Moebius · Places2 | public | [MIT](https://huggingface.co/hustvl/Moebius/blob/cd01f47fb648219d3fa605806c5ce00b713faa5e/README.md) | [cd01f47fb648](https://huggingface.co/hustvl/Moebius/tree/cd01f47fb648219d3fa605806c5ce00b713faa5e) |
| Qwen3-ASR-1.7B · Transformers | public | [Apache-2.0](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/blob/bcd2b5b7f32b480ab5790554cfa8347f246a14f3/README.md) | [bcd2b5b7f32b](https://huggingface.co/Qwen/Qwen3-ASR-1.7B-hf/tree/bcd2b5b7f32b480ab5790554cfa8347f246a14f3) |
| Qwen3-ASR-0.6B · Transformers | public | [Apache-2.0](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf/blob/7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c/README.md) | [7f1569a48a89](https://huggingface.co/Qwen/Qwen3-ASR-0.6B-hf/tree/7f1569a48a89f3e3f4dc3a5c9d28bddd903bc76c) |
| Qwen3-TTS 0.6B CustomVoice | public | [Apache-2.0](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice/blob/85e237c12c027371202489a0ec509ded67b5e4b5/README.md) | [85e237c12c02](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-0.6B-CustomVoice/tree/85e237c12c027371202489a0ec509ded67b5e4b5) |
| ReDimNet2+ | public | [Apache-2.0](https://huggingface.co/lab260/redimnet2-plus/blob/fd45d1968c0ea91b62ad0d2469eee4607756bb07/README.md) | [fd45d1968c0e](https://huggingface.co/lab260/redimnet2-plus/tree/fd45d1968c0ea91b62ad0d2469eee4607756bb07) |
| pyannote speaker-diarization-3.1 | gated | [MIT](https://huggingface.co/pyannote/speaker-diarization-3.1/blob/84fd25912480287da0247647c3d2b4853cb3ee5d/README.md) | [84fd25912480](https://huggingface.co/pyannote/speaker-diarization-3.1/tree/84fd25912480287da0247647c3d2b4853cb3ee5d) |
| Audar-Diarization-V1 | public | [AudarAI Community License v1.0](https://huggingface.co/audarai/Audar-Diarization-V1/blob/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb/README.md) | [230e5afed3f8](https://huggingface.co/audarai/Audar-Diarization-V1/tree/230e5afed3f87637c12c8fb819dd0be9b1ddf6cb) |
| NVIDIA Kumo Tabular · Large | public | [OpenMDW-1.1](https://huggingface.co/nvidia/Kumo-Tabular/blob/c5893d418e162b9f841ae179dc767afefff73831/LICENSE) | [c5893d418e16](https://huggingface.co/nvidia/Kumo-Tabular/tree/c5893d418e162b9f841ae179dc767afefff73831) |
| Timestral-209M | public | [Modified MIT](https://huggingface.co/mistralai/Timestral-209M/blob/9874d252ab0aae16f7f7c999f98f98d6ad7d8365/LICENSE) | [9874d252ab0a](https://huggingface.co/mistralai/Timestral-209M/tree/9874d252ab0aae16f7f7c999f98f98d6ad7d8365) |
| Timestral-28M | public | [Modified MIT](https://huggingface.co/mistralai/Timestral-28M/blob/49b26409ac87b5935539a5d8ffe7f397b720db47/LICENSE) | [49b26409ac87](https://huggingface.co/mistralai/Timestral-28M/tree/49b26409ac87b5935539a5d8ffe7f397b720db47) |
| XiYanSQL-QwenCoder-32B-2412 | public | [Apache-2.0](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-32B-2412/blob/b74605a579662ea82404dde034d4d4c2f032fab6/LICENSE) | [b74605a57966](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-32B-2412/tree/b74605a579662ea82404dde034d4d4c2f032fab6) |
| XiYanSQL-QwenCoder-7B-2502 | public | [Apache-2.0](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/blob/1009ef00833bafa68ca4251a7a2319fa58e9ab77/README.md) | [1009ef00833b](https://huggingface.co/XGenerationLab/XiYanSQL-QwenCoder-7B-2502/tree/1009ef00833bafa68ca4251a7a2319fa58e9ab77) |
| LongCat-Flash-Prover | public | [MIT](https://huggingface.co/meituan-longcat/LongCat-Flash-Prover/blob/9532d650151da0f91cd14fc8d05eeee85720b93f/README.md) | [9532d650151d](https://huggingface.co/meituan-longcat/LongCat-Flash-Prover/tree/9532d650151da0f91cd14fc8d05eeee85720b93f) |
| Kimi K3 | public | [Kimi K3 License](https://huggingface.co/moonshotai/Kimi-K3/blob/f831ab66814297da540d832a5235f8e904f29d06/LICENSE) | [f831ab668142](https://huggingface.co/moonshotai/Kimi-K3/tree/f831ab66814297da540d832a5235f8e904f29d06) |
| ULTRA 50g | public | [MIT](https://huggingface.co/mgalkin/ultra_50g/blob/d46107d8415549e7c7386d26903ad11c9a8de4fd/README.md) | [d46107d84155](https://huggingface.co/mgalkin/ultra_50g/tree/d46107d8415549e7c7386d26903ad11c9a8de4fd) |
| ULTRA 3g | public | [MIT](https://huggingface.co/mgalkin/ultra_3g/blob/bf98f89c4a47f794396fa895eb6940fdb94bfe9c/README.md) | [bf98f89c4a47](https://huggingface.co/mgalkin/ultra_3g/tree/bf98f89c4a47f794396fa895eb6940fdb94bfe9c) |
| LTX-2.3 · 22B dev | public | [LTX-2 Community License](https://huggingface.co/Lightricks/LTX-2.3/blob/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc/LICENSE) | [3c6a4e66e5d0](https://huggingface.co/Lightricks/LTX-2.3/tree/3c6a4e66e5d0a684231950b9c74dd4ded7b6fadc) |
| AudioMosaic ViT-B/16 · AudioSet-2M | public | [MIT](https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/blob/1a7f51c115161d2b564cdb97f6f1268c659ffe4e/README.md) | [1a7f51c11516](https://huggingface.co/hanxunh/AudioMosaic-vit-b16-finetune-as2m/tree/1a7f51c115161d2b564cdb97f6f1268c659ffe4e) |
| PRIMERA · Multi-News fine-tuned | public | [Apache-2.0](https://huggingface.co/allenai/PRIMERA-multinews/blob/1b507148874734de104f3a5e98a69f384db616fe/README.md) | [1b5071488747](https://huggingface.co/allenai/PRIMERA-multinews/tree/1b507148874734de104f3a5e98a69f384db616fe) |
| PRIMERA · zero-shot | public | [Apache-2.0](https://huggingface.co/allenai/PRIMERA/blob/931d08e790f7d2a2293f2e9901d73a6db8449f5c/README.md) | [931d08e790f7](https://huggingface.co/allenai/PRIMERA/tree/931d08e790f7d2a2293f2e9901d73a6db8449f5c) |
| Qwen-Image-2.1 | public | [Qwen Research License](https://huggingface.co/Qwen/Qwen-Image-2.1/blob/d26bb61231c349cf6b7896fa83353113880e1ba3/LICENSE) | [d26bb61231c3](https://huggingface.co/Qwen/Qwen-Image-2.1/tree/d26bb61231c349cf6b7896fa83353113880e1ba3) |
| DriftSE · DistilHuBERT | public | [MIT](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md) | [c668151cbaa5](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/logs/distillhubert_three_layers_with_z/last.ckpt) |
| DriftSE† · DistilHuBERT | public | [MIT](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/README.md) | [c668151cbaa5](https://huggingface.co/LIANGXU123/DriftSE/blob/c668151cbaa5d1355eca7471d336ef8825e95333/logs/distillhubert_three_layers_pesq_sisdr_ccmse_with_z/last.ckpt) |

## Verification / Doğrulama

- `PLAYWRIGHT_PORT=4321 npm run validate:codex`: passed. Includes schema/citation validation, ESLint, TypeScript, 150 Vitest tests, 7 Node script tests, deterministic static build, 23-page static export checks and 54 Playwright browser tests.
- `PLAYWRIGHT_PORT=4321 npm run validate:codex`: başarılı. Şema/kaynak doğrulaması, ESLint, TypeScript, 150 Vitest testi, 7 Node betik testi, deterministik statik derleme, 23 sayfa statik çıktı kontrolü ve 54 Playwright tarayıcı testi içerir.
- Desktop 1440px and mobile 390px visual checks: no horizontal page overflow or browser console/page errors on the forecasting comparison. EN/TR flows, source links, lower-is-better leader selection, historical labels, single-result/no-winner behavior, gap explanations and task filters are covered by browser tests.
- 1440px masaüstü ve 390px mobil görsel kontrolleri: tahmin karşılaştırmasında yatay sayfa taşması veya tarayıcı konsol/sayfa hatası yok. EN/TR akışları, kaynak bağlantıları, düşük-değer-iyi lider seçimi, tarihsel etiketler, tek-sonuç/lidersiz davranış, eksik karşılaştırma açıklamaları ve görev filtreleri tarayıcı testleriyle kapsanır.
- `git diff --check`: passed. The original SVGs are byte-for-byte unchanged: task SHA-256 `5979798187b3943a83644497f8ef6304ea880b5f7a27ed370bce3f183a603974`; model SHA-256 `c9f11cd2e59fb2df847da70b7189e35374180e6f5a203b7aaee1f688f022463c`.
- `git diff --check`: başarılı. Özgün SVG dosyaları bayt düzeyinde değişmedi; SHA-256 değerleri yukarıdadır.
- Production deployment and live-test evidence are reported separately after deployment; local checks alone do not establish production delivery.
- Üretim yayını ve canlı test kanıtı yayın sonrası ayrıca bildirilir; yerel kontroller tek başına canlı teslimatı kanıtlamaz.
