# Benchmark gap follow-up — 2026-10-21

This follow-up reopens the 41 tasks that had no numerical result in the initial audit. It preserves the earlier audit as the initial observation. Published evaluations were inspected; no model inference, training, robot experiment or independent numerical reproduction was performed.

## Outcome

- All 41 reviews were revisited against primary papers, author repositories, released weight manifests and, where available, stored evaluation outputs.
- 21 tasks gained comparisons; 18 gained a single result; 2 remain explicitly unresolved.
- 40 numerical tables and 48 additional release identities were added. The complete catalogue has 88 tables, 87 supplemental releases and 266 benchmark observations.
- Overall coverage: 55 tasks with comparisons, 28 with one result, 2 gaps (85 total).
- Current 2026 evidence includes VBench, compact relation extraction, QMSum, SAFIM, MatrixFormer, TimeRadar, ACE-Step and Blitz. Older references retain their publication year; undated runs remain undated.
- Both task and model maps now use the viewport width with 24 px desktop gutters (14 px mobile); the 1536 px cap was removed.

## Evidence admission and limits

New Hugging Face release identities were resolved through public model metadata, pinned repository trees and cards. Tensor files were not downloaded. GitHub-hosted checkpoints use exact commits; externally hosted checkpoints use a pinned publisher manifest. A manifest commit is not a checksum of its linked binary. UDPipe uses the version-specific LINDAT handle `11234/1-6046`; benchmark source schema version 2 records this separately from a Git SHA.

Numbers were admitted only with a dataset, metric, direction, locator, protocol, named release and explicit limits. Comparisons may evaluate native deployed recipes with unequal compute/input processing; this is stated beside each table and must not be interpreted as weights-only attribution. One-result tables never label a winner. A "comparison" status means a shared published benchmark, not proof of equal compute, statistical significance, complete market coverage or current global leadership.

Specific safeguards:

- Use DocVQA ANLS rather than repurposing OCRBench as document QA.
- Keep CodeT5 translation directions separate; distinguish language-specific and multi-sum releases.
- Use the MMAction2 tested VideoMAE values, not a mixture of original-paper and port results.
- Use VBench Gold team-generated rows; exclude API-only Wan results. Prompt optimization is part of the named system.
- Use the historical Seed-VC evaluation code to identify the 2024 checkpoint; do not attach its score to the newer Seed-VC v2 product.
- Use the executable Socratic SegEnc port result, not the higher score obtained only from released output files.
- Label query expansion retrieval quality, Shap-E CLIP alignment, automatic music quality, HASC window classification and camera relocalization as proxies.
- Preserve MatrixFormer specialist/blend ties and the MNAR regression; reported observed-error fitting is in-sample, not held-out validation.
- TimeRadar weights and results are public, but its README has conflicting MIT/Apache badges and no license file at the inspected commit. This unresolved license is displayed rather than replaced with a guessed license.
- Do not reuse smoke-evaluation, any-correct or different test-time-budget scores as EqR full exact accuracy.

## Türkçe kapsam

İlk incelemede sayısal sonucu olmayan 41 görevin tümü yeniden araştırıldı. 21 görev karşılaştırmalı tabloya, 18 görev tek doğrulanmış sonuca kavuştu; iki görevde dosya–sonuç bağı açık biçimde kurulamadı. Toplam kapsam 55 karşılaştırmalı, 28 tek sonuçlu ve iki eksikli görevdir. Modeller çalıştırılmadı; yayımlanmış sonuçlar ve dosyalar incelendi. Önceki yıllara ait ve tarihi belirtilmeyen sonuçlar güncel ölçüm gibi sunulmaz. İki harita sayfasındaki 1536 piksel sınırı kaldırıldı.

## Task-by-task evidence

### relation-extraction — single result

A June 2026 study releases its best small relation-extraction adapter and reports 0.83 General Avg positive-class micro-F1.

The result is task-tuned and rounded. ReLiK NYT extraction, GLiNER entity extraction and the seven-dataset general average are not the same protocol.

TR: Haziran 2026 çalışması en iyi küçük ilişki çıkarım adaptörünü yayımlar ve General Avg pozitif sınıf mikro F1 değerini 0,83 olarak bildirir. Sonuç göreve ince ayarlıdır ve yuvarlanmıştır. ReLiK NYT çıkarımı, GLiNER varlık çıkarımı ve yedi veri kümeli genel ortalama aynı protokol değildir.

**Compact RE · General average** — Positive-class micro-F1 average (higher is better), direct. Publication: 2026-06.

| Release | Published value | Configuration |
|---|---:|---|
| [Qwen2.5-0.5B · RE GenTune 2-shot adapter](https://huggingface.co/Despina/Qwen2.5-0.5B-Instruct-re_gentune-2-shot/tree/5b9c14e6730ac4e65547fa6025c452670d9e53a5) | 83.0 % | QLoRA adapter on Qwen2.5-0.5B-Instruct; 2-shot prompting |

The paper’s rounded general-domain average; positive-class micro-F1 excludes the no-relation class. The adapter needs the named base model and task formatting.

Only the explicitly released best artifact is admitted. Unreleased tuned rows and closed frontier APIs are not open-weight comparison participants. Literary RE has different training and annotation conditions.

Source: [Compact relation extraction · released artifact and evaluation](https://github.com/DespinaChristou/compact-relex/blob/00b9d2c24632b5c183d7d64e7648de4497074e92/README.md) · Headline result · best released sub-billion checkpoint.

Research trail: [Compact RE · full evaluation and limits](https://arxiv.org/abs/2606.22606), [Compact relation extraction · released artifact and evaluation](https://github.com/DespinaChristou/compact-relex/blob/00b9d2c24632b5c183d7d64e7648de4497074e92/README.md), [Qwen2.5-0.5B · RE GenTune 2-shot adapter · model card](https://huggingface.co/Despina/Qwen2.5-0.5B-Instruct-re_gentune-2-shot/blob/5b9c14e6730ac4e65547fa6025c452670d9e53a5/README.md).

### part-of-speech-tagging — single result

The currently listed UDPipe 2.17 English EWT release provides 96.75 UPOS F1 with an identifiable public weight bundle.

The latest UD treebank release and latest UDPipe model release are separate. Stanza’s older performance table is not assigned to its current package; no cross-version winner is claimed.

TR: Listelenen UDPipe 2.17 English EWT sürümü, kimliği belli açık ağırlık paketiyle 96,75 UPOS F1 sunar. En yeni UD veri kümesi ile en yeni UDPipe model sürümü ayrıdır. Stanza’nın eski performans tablosu güncel paketine atanmaz; farklı sürümler arasında liderlik iddiası kurulmaz.

**UDPipe 2 · English EWT raw text** — UPOS F1 (higher is better), direct. Publication: 2025-11-25.

| Release | Published value | Configuration |
|---|---:|---|
| [UDPipe 2 · English EWT 2.17-251125](https://hdl.handle.net/11234/1-6046) | 96.75 % | Named release |

Official conll18_ud_eval F1 evaluation from raw text, including segmentation errors. Released model bundle 251125.

Gold-tokenization scores are different and excluded. English EWT cannot establish quality for every language/treebank; the persistent release identifier is not a tensor checksum.

Source: [UDPipe 2 · UD 2.17 official performance](https://ufal.mff.cuni.cz/udpipe/2/models#universal_dependencies_217_models) · UD 2.17 · english-ewt-ud-2.17-251125 · Raw text.

Research trail: [Stanza performance by treebank version](https://stanfordnlp.github.io/stanza/performance.html), [UDPipe 2 · UD 2.17 official performance](https://ufal.mff.cuni.cz/udpipe/2/models#universal_dependencies_217_models).

### syntactic-parsing — single result

The currently listed UDPipe 2.17 English EWT release provides 89.91 LAS F1 with an identifiable public weight bundle.

The latest UD treebank release and latest UDPipe model release are separate. Stanza’s older performance table is not assigned to its current package; no cross-version winner is claimed.

TR: Listelenen UDPipe 2.17 English EWT sürümü, kimliği belli açık ağırlık paketiyle 89,91 LAS F1 sunar. En yeni UD veri kümesi ile en yeni UDPipe model sürümü ayrıdır. Stanza’nın eski performans tablosu güncel paketine atanmaz; farklı sürümler arasında liderlik iddiası kurulmaz.

**UDPipe 2 · English EWT raw text** — LAS F1 (higher is better), direct. Publication: 2025-11-25.

| Release | Published value | Configuration |
|---|---:|---|
| [UDPipe 2 · English EWT 2.17-251125](https://hdl.handle.net/11234/1-6046) | 89.91 % | Named release |

Official conll18_ud_eval F1 evaluation from raw text, including segmentation errors. Released model bundle 251125.

Gold-tokenization scores are different and excluded. English EWT cannot establish quality for every language/treebank; the persistent release identifier is not a tensor checksum.

Source: [UDPipe 2 · UD 2.17 official performance](https://ufal.mff.cuni.cz/udpipe/2/models#universal_dependencies_217_models) · UD 2.17 · english-ewt-ud-2.17-251125 · Raw text.

Research trail: [Stanza performance by treebank version](https://stanfordnlp.github.io/stanza/performance.html), [UDPipe 2 · UD 2.17 official performance](https://ufal.mff.cuni.cz/udpipe/2/models#universal_dependencies_217_models).

### text-summarization — comparison

A September 2026 QMSum release supplies exact checkpoints, predictions and one scorer. Span-trained SegEnc scores 36.33 ROUGE-1; the stock-checkpoint port scores 35.30.

Query-focused English meeting summarization with different input regimes. The result does not establish a generic summarization winner or factuality guarantee.

TR: Eylül 2026 QMSum yayını tam ağırlıkları, tahminleri ve tek puanlayıcıyı sunar. Aralıklarla eğitilmiş SegEnc 36,33 ROUGE-1, özgün ağırlığın aktarımı 35,30 alır. Farklı girdi düzenleriyle sorgu odaklı İngilizce toplantı özetlemesidir. Genel özetleme liderliği veya olgusal doğruluk garantisi oluşturmaz.

**QMSum · executable SegEnc comparison** — ROUGE-1 (higher is better), direct. Publication: 2026-09.

| Release | Published value | Configuration |
|---|---:|---|
| [SegEnc 406M · span-trained](https://huggingface.co/ErtasAI/qmsum-summarizer-segenc-406m-spans/tree/26abdfc1b0373c21b54dfd5584eb432e9e9d0a40) | 36.33 % | 2,000 retrieved words; span-trained checkpoint |
| [Socratic SegEnc 406M · ported inference](https://huggingface.co/Salesforce/socratic-pretraining-qmsum/tree/d127cbc54b974a58e8bd75935f2863d136e0bc3d) | 35.3 % | Up to ~11,800 transcript words; publisher port |

Same frozen scorer, official split and greedy decoding. Published 0–1 ROUGE-1 values are multiplied by 100. Each system retains its documented input regime.

This measures training plus retrieval/input regimes, not weights under identical inputs. The 38.60 released-output row is not used as executable checkpoint performance. No significance claim follows from the point estimates alone.

Source: [QMSum · frozen scorer and released checkpoints](https://github.com/ErtasAI/qmsum-retrieved-span-training/blob/3c3dcdb77cd9c2a55d1962adfc770f4b465ad2f7/README.md) · The full comparison · Span-trained / Socratic-SegEnc (our port).

Research trail: [QMSum · frozen scorer and released checkpoints](https://github.com/ErtasAI/qmsum-retrieved-span-training/blob/3c3dcdb77cd9c2a55d1962adfc770f4b465ad2f7/README.md), [SegEnc 406M · span-trained · model card](https://huggingface.co/ErtasAI/qmsum-summarizer-segenc-406m-spans/blob/26abdfc1b0373c21b54dfd5584eb432e9e9d0a40/README.md), [Socratic SegEnc 406M · ported inference · model card](https://huggingface.co/Salesforce/socratic-pretraining-qmsum/blob/d127cbc54b974a58e8bd75935f2863d136e0bc3d/README.md).

### query-expansion — single result

ThinkQE provides a reproducible published system-level reference: 34.9 mean nDCG@10 using an open R1-distilled Qwen-14B generator.

The retrieval index, iterative feedback, prompt recipe and domain subset are required. The verified v1 table is retained instead of attaching a later Phi-4 headline to unspecified settings.

TR: ThinkQE, açık R1 damıtılmış Qwen-14B üreticisiyle 34,9 ortalama nDCG@10 bildiren, yeniden üretilebilir yayımlanmış sistem referansı sunar. Geri getirme indeksi, yinelemeli geribildirim, istem tarifi ve alan alt kümesi gerekir. Sonraki Phi-4 başlık skoru belirsiz ayarlara atanmak yerine doğrulanmış v1 tablosu korunur.

**ThinkQE · retrieval with expansion** — Mean nDCG@10 (higher is better), proxy. Publication: 2025-06.

| Release | Published value | Configuration |
|---|---:|---|
| [DeepSeek-R1-Distill-Qwen-14B · ThinkQE](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B/tree/1df8507178afcc1bef68cd8c393f61a886323761) | 34.9 % | Named release |

R1-distilled Qwen-14B inside the iterative ThinkQE expansion-and-BM25 pipeline; seven natural-language domains only.

A retrieval-system score, not a standalone language-model score or all 12 BRIGHT tasks. MQR-A1 has no verified released weights and is excluded.

Source: [ThinkQE · published BRIGHT evaluation](https://arxiv.org/html/2506.09260v1) · BRIGHT comparison · ThinkQE-14B.

Research trail: [ThinkQE retrieval and expansion implementation](https://github.com/Yibin-Lei/Think_QE), [ThinkQE · published BRIGHT evaluation](https://arxiv.org/html/2506.09260v1), [DeepSeek-R1-Distill-Qwen-14B · ThinkQE · model card](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B/blob/1df8507178afcc1bef68cd8c393f61a886323761/README.md).

### top-k-recommendation — single result

The official P5 notebook contains an exact recorded direct-recommendation output: Beauty small, prompt 5-8, NDCG@10 0.1340.

A catalogue-specific 2022 reference, not a zero-shot recommendation leaderboard. Candidate construction, user/item IDs and prompt changes alter the metric; modern rating RMSE does not rank top-k recommendations.

TR: Resmî P5 not defterinde tam kayıtlı doğrudan öneri çıktısı var: Beauty small, 5-8 istemi, NDCG@10 0,1340. Kataloğa özel 2022 referansıdır; sıfır örnekli öneri liderlik tablosu değildir. Aday oluşturma, kullanıcı/ürün kimlikleri ve istem değişiklikleri metriği etkiler; güncel puan tahmini RMSE’si top-k öneriyi sıralamaz.

**P5 · Beauty direct recommendation** — NDCG@10 (higher is better), direct. Publication: 2022.

| Release | Published value | Configuration |
|---|---:|---|
| [P5 Beauty Small](https://huggingface.co/makitanikaze/P5_beauty_small/tree/8d67aef9aea18955cfb038bbbf48f764104ca09a) | 0.134  | Named release |

Published notebook: Beauty small checkpoint, prompt 5-8, direct candidate recommendation and the notebook’s ranking procedure.

Prompt 2-13 is sequential recommendation with a different score; prompt 5-5 is another configuration, not another model. The original Drive tensor was not bit-compared to the author-linked HF distribution.

Source: [P5 · recorded Beauty evaluation outputs](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb) · Direct recommendation · prompt 5-8 · recorded output.

Research trail: [P5 · recorded Beauty evaluation outputs](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb).

### rating-prediction — comparison

The current MovieLens 100K comparison favors the recommender specialist over the general MatrixFormer expert. MatrixFormer+ ties because it selects that specialist entirely.

No cross-dataset averaging with P5 Beauty or top-k recommendation. The authors note that conventional MF/SVD/PMF remain stronger on their larger MovieLens datasets.

TR: Güncel MovieLens 100K karşılaştırmasında öneri uzmanı, genel MatrixFormer uzmanından daha iyi sonuç verir. MatrixFormer+ tamamen bu uzmanı seçtiği için aynı skoru alır. P5 Beauty veya top-k öneriyle veri kümeleri arası ortalama alınmaz. Yazarlar büyük MovieLens veri kümelerinde geleneksel MF/SVD/PMF yöntemlerinin daha güçlü kaldığını belirtir.

**MatrixFormer · MovieLens ratings** — User-macro RMSE (lower is better), direct. Publication: 2026-10-04.

| Release | Published value | Configuration |
|---|---:|---|
| [MatrixFormer · general expert](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer/impute/model.safetensors) | 0.92016  | Named release |
| [MatrixFormer · recommender specialist](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer/recsys/model.safetensors) | 0.887358  | Named release |
| [MatrixFormer+ · two-expert blend](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer) | 0.887358  | Named release |

Each expert uses its documented normalization, context and rating clipping; macro-average over test users in original rating units. The blend chooses specialist weight 1.0.

Compared deployed recipes differ; this is not weights-only attribution. The equal specialist and blend scores are identical predictions, not independent confirmations.

Source: [MatrixFormer+ · frozen October 2026 results](https://github.com/jacobf18/tabular/blob/2cf54ac47dbcc1154b35e875b527ed0c42a9f416/mcpfn/MATRIXFORMER_PLUS_RESULTS.md) · Recommender systems · MovieLens 100K RMSE.

Research trail: [MatrixFormer+ · frozen October 2026 results](https://github.com/jacobf18/tabular/blob/2cf54ac47dbcc1154b35e875b527ed0c42a9f416/mcpfn/MATRIXFORMER_PLUS_RESULTS.md), [MatrixFormer · general expert · model card](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md), [MatrixFormer · recommender specialist · model card](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md), [MatrixFormer+ · two-expert blend · model card](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md).

### image-classification — comparison

SigLIP 2 g-opt/16 scores 85.0 versus 84.1 for So400m/14 on the same published zero-shot ImageNet evaluation.

A 2025 reference checked in 2026. The larger model’s higher score has a compute cost; no universal image classifier is established.

TR: Aynı yayımlanmış sıfır örnekli ImageNet değerlendirmesinde SigLIP 2 g-opt/16, So400m/14 için 84,1 olan skora karşı 85,0 alır. 2026’da kontrol edilen 2025 referansıdır. Büyük modelin daha yüksek skoru ek hesaplama maliyeti taşır; evrensel bir görüntü sınıflandırma lideri belirlenmez.

**SigLIP 2 · ImageNet zero-shot** — Top-1 accuracy (higher is better), direct. Publication: 2025.

| Release | Published value | Configuration |
|---|---:|---|
| [SigLIP 2 SO400M](https://huggingface.co/google/siglip2-so400m-patch14-384/tree/e8e487298228002f3d8a82e0cd5c8ea9c567f57f) | 84.1 % | Named release |
| [SigLIP 2 g-opt/16 · 384](https://huggingface.co/google/siglip2-giant-opt-patch16-384/tree/a713301b217d38485fb2204c808367d10bc3cc40) | 85.0 % | Named release |

Official zero-shot classifier evaluation at 384-pixel native resolution; no task-specific classification head is trained.

Different model sizes and patch sizes; this does not establish a supervised-classification or Turkish-domain winner.

Source: [SigLIP 2 official model zoo](https://github.com/google-research/big_vision/blob/0127fb6b337ee2a27bf4e54dea79cff176527356/big_vision/configs/proj/image_text/README_siglip2.md) · Model zoo · ImageNet 0-shot.

Research trail: [SigLIP 2 official model zoo](https://github.com/google-research/big_vision/blob/0127fb6b337ee2a27bf4e54dea79cff176527356/big_vision/configs/proj/image_text/README_siglip2.md), [SigLIP 2 g-opt/16 · 384 · model card](https://huggingface.co/google/siglip2-giant-opt-patch16-384/blob/a713301b217d38485fb2204c808367d10bc3cc40/README.md).

### object-detection — comparison

RF-DETR Large has higher COCO box AP than Medium, at a larger input resolution and model size.

The official table was rechecked on 2026-10-21 but does not date each measurement. Closed-set COCO detection is distinct from Grounding DINO open-vocabulary prompting.

TR: RF-DETR Large, daha büyük girdi çözünürlüğü ve model boyutuyla Medium’dan yüksek COCO kutu AP değerine ulaşır. Resmî tablo 2026-10-21’de yeniden kontrol edildi ancak her ölçümün tarihi belirtilmiyor. Kapalı sınıflı COCO algılama, Grounding DINO’nun açık sözlüklü istem kullanımından farklıdır.

**RF-DETR · COCO box AP** — Box AP50:95 (higher is better), direct. Publication: not dated in source.

| Release | Published value | Configuration |
|---|---:|---|
| [RF-DETR Medium](https://huggingface.co/Roboflow/rf-detr-medium/tree/1b5b672408f86dd38e05dd3cf3f2e0834e545a59) | 54.7 % | 576 px |
| [RF-DETR Large](https://huggingface.co/Roboflow/rf-detr-large/tree/f62f7dd5252b61097cbace33886045816dadbde9) | 56.5 % | 704 px |

Published native-resolution COCO evaluation; compare box AP, not AP50 or latency.

Resolution and capacity differ. This is a quality comparison of two verified Apache-2.0 releases; it does not claim the best model across the full leaderboard.

Source: [RF-DETR official COCO detection and segmentation tables](https://github.com/roboflow/rf-detr/blob/5b22dfc0940697ce1abdfa681a5f7392b3eddbfb/README.md) · Object Detection · RF-DETR-M / L.

Research trail: [RF-DETR official COCO detection and segmentation tables](https://github.com/roboflow/rf-detr/blob/5b22dfc0940697ce1abdfa681a5f7392b3eddbfb/README.md), [RF-DETR Medium · model card](https://huggingface.co/Roboflow/rf-detr-medium/blob/1b5b672408f86dd38e05dd3cf3f2e0834e545a59/README.md), [RF-DETR Large · model card](https://huggingface.co/Roboflow/rf-detr-large/blob/f62f7dd5252b61097cbace33886045816dadbde9/README.md).

### instance-segmentation — comparison

RF-DETR Seg 2XL leads the selected released COCO models with 49.9 mask AP; Seg Large has 47.1.

Native resolutions differ and no matched-compute claim is made. The publisher’s current table has no per-result date.

TR: Seçili yayımlanmış COCO modellerinde RF-DETR Seg 2XL, 49,9 maske AP ile öndedir; Seg Large 47,1 alır. Doğal çözünürlükler farklıdır; eşit hesaplama bütçesi iddiası yoktur. Yayıncının güncel tablosunda sonuç başına tarih bulunmaz.

**RF-DETR · COCO mask AP** — Mask AP50:95 (higher is better), direct. Publication: not dated in source.

| Release | Published value | Configuration |
|---|---:|---|
| [RF-DETR Seg Large](https://huggingface.co/Roboflow/rf-detr-seg-large/tree/ae012d516cf1fedb21df93fb384debe15df68f29) | 47.1 % | 504 px |
| [RF-DETR Seg 2XL](https://huggingface.co/Roboflow/rf-detr-seg-xxlarge/tree/4a183fe0213deba48a862e16d9e8a69b176cf3df) | 49.9 % | 768 px |

Task-specific instance-segmentation heads with each released model’s native input size.

Higher-resolution 2XL costs more compute. These mask-AP scores cannot rank SAM 3 promptable segmentation under a different protocol.

Source: [RF-DETR official COCO detection and segmentation tables](https://github.com/roboflow/rf-detr/blob/5b22dfc0940697ce1abdfa681a5f7392b3eddbfb/README.md) · Instance Segmentation · L / 2XL.

Research trail: [RF-DETR official COCO detection and segmentation tables](https://github.com/roboflow/rf-detr/blob/5b22dfc0940697ce1abdfa681a5f7392b3eddbfb/README.md), [RF-DETR Seg Large · model card](https://huggingface.co/Roboflow/rf-detr-seg-large/blob/ae012d516cf1fedb21df93fb384debe15df68f29/README.md), [RF-DETR Seg 2XL · model card](https://huggingface.co/Roboflow/rf-detr-seg-xxlarge/blob/4a183fe0213deba48a862e16d9e8a69b176cf3df/README.md).

### video-classification — comparison

The exact MMAction2 VideoMAE V2 Base artifact reaches 86.6 top-1 versus 83.6 for Small with the same clip/crop protocol.

A 2023 action-recognition reference. Generic video chat or temporal-reasoning scores are not interchangeable with K400 classification.

TR: Tam MMAction2 VideoMAE V2 Base dosyası, aynı klip/kırpma protokolünde Small’un 83,6 skoruna karşı 86,6 top-1 alır. 2023 eylem tanıma referansıdır. Genel video sohbeti veya zamansal akıl yürütme skorları K400 sınıflandırmasının yerine geçmez.

**VideoMAE V2 · MMAction2 K400** — Top-1 accuracy (higher is better), direct. Publication: 2023-05.

| Release | Published value | Configuration |
|---|---:|---|
| [VideoMAE V2 Small · MMAction2](https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md) | 83.6 % | Named release |
| [VideoMAE V2 Base · MMAction2](https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md) | 86.6 % | Named release |

Both ported checkpoints: K710 distillation, 16×4 sampling, short side 320, five clips × three crops.

These are the tested MMAction2 artifacts, not the original paper’s slightly different Small result. Manifest pins identify the release links, not hashes of downloaded tensors.

Source: [MMAction2 · VideoMAE V2 tested checkpoints](https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md) · Results and Models · top1 acc, not reference top1 acc.

Research trail: [MMAction2 · VideoMAE V2 tested checkpoints](https://github.com/open-mmlab/mmaction2/blob/a5a167dff2399e2d182a60332325f9c0d4663517/configs/recognition/videomaev2/README.md).

### image-captioning — comparison

The released Florence-2 large-ft checkpoint scores 143.3 CIDEr versus 140.0 for base-ft under the same fine-tuned COCO protocol.

This is a dated 2024 captioning reference, not proof against every 2026 VLM. General visual-QA scores do not substitute for caption evaluation.

TR: Yayımlanmış Florence-2 large-ft ağırlıkları aynı ince ayarlı COCO protokolünde base-ft’nin 140,0 skoruna karşı 143,3 CIDEr alır. Bu, 2024 tarihli açıklama üretim referansıdır; tüm 2026 VLM’lerine karşı kanıt değildir. Genel görsel soru-cevap skorları açıklama değerlendirmesi yerine geçmez.

**Florence-2 · COCO captions** — CIDEr (higher is better), direct. Publication: 2024.

| Release | Published value | Configuration |
|---|---:|---|
| [Florence-2 base-ft](https://huggingface.co/microsoft/Florence-2-base-ft/tree/f6c1a25888ffc1d945ee8a1a77ac833c7303d46e) | 140.0  | Named release |
| [Florence-2 large-ft](https://huggingface.co/microsoft/Florence-2-large-ft/tree/4a12a2b54b7016a48a22037fbd62da90cd566f2a) | 143.3  | Named release |

Fine-tuned captioning checkpoints on the same COCO Karpathy test split.

CIDEr rewards reference-caption overlap; it is not factuality or safety. Pretrained zero-shot rows are deliberately excluded from this table.

Source: [Florence-2 base-ft · model card](https://huggingface.co/microsoft/Florence-2-base-ft/blob/f6c1a25888ffc1d945ee8a1a77ac833c7303d46e/README.md) · Fine-tuned models · COCO Caption.

Research trail: [Florence-2 base-ft · model card](https://huggingface.co/microsoft/Florence-2-base-ft/blob/f6c1a25888ffc1d945ee8a1a77ac833c7303d46e/README.md), [Florence-2 large-ft · model card](https://huggingface.co/microsoft/Florence-2-large-ft/blob/4a12a2b54b7016a48a22037fbd62da90cd566f2a/README.md).

### document-question-answering — comparison

Qwen2.5-VL-72B has a small published DocVQA advantage over Qwen2-VL-72B: 96.4 versus 96.1 ANLS.

A 2025 validation-set comparison. Newer OCR or document parsing results are different tasks and do not establish a 2026 DocVQA winner.

TR: Qwen2.5-VL-72B’nin Qwen2-VL-72B’ye göre yayımlanmış DocVQA üstünlüğü küçüktür: 96,4’e karşı 96,1 ANLS. 2025 doğrulama kümesi karşılaştırmasıdır. Daha yeni OCR veya belge ayrıştırma sonuçları farklı görevlerdir ve 2026 DocVQA lideri belirlemez.

**Qwen-VL · DocVQA** — ANLS (higher is better), direct. Publication: 2025-01.

| Release | Published value | Configuration |
|---|---:|---|
| [Qwen2-VL-72B-Instruct](https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct/tree/2ac26c967836fbb5729c709ad8f8b5548e1f88aa) | 96.1 % | Named release |
| [Qwen2.5-VL-72B-Instruct](https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct/tree/89c86200743eec961a297729e7990e8f2ddbc4c5) | 96.4 % | Named release |

Publisher-reported document question answering on the same validation benchmark, using the named 72B instruction releases.

The card does not expose a complete matched inference-budget recipe. The 0.3-point difference is not a significance claim; OCRBench is not substituted.

Source: [Qwen2.5-VL-72B-Instruct · model card](https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct/blob/89c86200743eec961a297729e7990e8f2ddbc4c5/README.md) · DocVQA_VAL row.

Research trail: [Qwen2.5-VL-72B-Instruct · model card](https://huggingface.co/Qwen/Qwen2.5-VL-72B-Instruct/blob/89c86200743eec961a297729e7990e8f2ddbc4c5/README.md), [Qwen2-VL-72B-Instruct · model card](https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct/blob/2ac26c967836fbb5729c709ad8f8b5548e1f88aa/README.md).

### text-to-video-generation — comparison

The current VBench Gold rows support a bounded comparison of released Wan checkpoints. Wan2.2 with Qwen prompt optimization scores 84.23; the earlier Wan2.1-T2V-14B system scores 83.69.

The benefit depends on the full sampling pipeline: unoptimized Wan2.2 scores 82.61. Neither LTX-2 results nor closed Wan APIs are assigned to LTX-2.3 or open Wan weights.

TR: Güncel VBench Gold satırları yayımlanmış Wan ağırlıkları arasında sınırlı bir karşılaştırma sağlar. Qwen istem iyileştirmeli Wan2.2 84,23; önceki Wan2.1-T2V-14B sistemi 83,69 alır. Fayda tüm örnekleme hattına bağlıdır: iyileştirmesiz Wan2.2 82,61 alır. LTX-2 sonuçları LTX-2.3’e, kapalı Wan API sonuçları açık Wan ağırlıklarına aktarılmaz.

**VBench · released Wan T2V** — Total score (higher is better), direct. Publication: 2026-02-18.

| Release | Published value | Configuration |
|---|---:|---|
| [Wan2.2-T2V-A14B](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B/tree/c8c270b13ee05bfa474194ac9fb07a5868a97cea) | 84.23 % | Qwen prompt optimization · 2026-02-18 |
| [Wan2.1-T2V-14B](https://huggingface.co/Wan-AI/Wan2.1-T2V-14B/tree/a064a6c71f5be440641209c07bf2a5ce7a2ff5e4) | 83.69 % | VBench Gold row · 2025-07-25 |

Both rows are sampled and evaluated by VBench. The comparison is between published generation systems, including the listed prompt processing.

Prompt processing and native sampling differ. Wan2.2 without prompt optimization scores 82.61 on 2026-02-18, so the ordering is not a weight-only architectural claim. API-only Wan2.1 rows are excluded.

Source: [VBench live leaderboard · T2V and I2V](https://huggingface.co/spaces/Vchitect/VBench_Leaderboard) · T2V · Gold rows · Wan2.2 / Wan2.1-T2V-14B.

Research trail: [VBench live leaderboard · T2V and I2V](https://huggingface.co/spaces/Vchitect/VBench_Leaderboard), [Wan2.2-T2V-A14B · model card](https://huggingface.co/Wan-AI/Wan2.2-T2V-A14B/blob/c8c270b13ee05bfa474194ac9fb07a5868a97cea/README.md), [Wan2.1-T2V-14B · model card](https://huggingface.co/Wan-AI/Wan2.1-T2V-14B/blob/a064a6c71f5be440641209c07bf2a5ce7a2ff5e4/README.md).

### image-to-video-generation — comparison

Wan2.2-TI2V-5B slightly leads the selected Qwen-prompt-optimized I2V systems on the VBench total score, 88.80 versus 88.68.

This is a 2026 independent leaderboard result for named releases, not a universal quality or speed ranking. The margin is small and no uncertainty interval is supplied.

TR: Wan2.2-TI2V-5B, seçili Qwen istem iyileştirmeli I2V sistemlerinde VBench toplam skoruyla az farkla öndedir: 88,80’e karşı 88,68. Adı belirtilen sürümler için 2026 bağımsız tablo sonucudur; evrensel kalite veya hız sıralaması değildir. Fark küçüktür ve belirsizlik aralığı verilmemiştir.

**VBench · Wan image-to-video** — Total score (higher is better), direct. Publication: 2026-03-06.

| Release | Published value | Configuration |
|---|---:|---|
| [Wan2.2 TI2V 5B](https://huggingface.co/Wan-AI/Wan2.2-TI2V-5B/tree/921dbaf3f1674a56f47e83fb80a34bac8a8f203e) | 88.8 % | Qwen prompt optimization · 2026-02-12 |
| [Wan2.2-I2V-A14B](https://huggingface.co/Wan-AI/Wan2.2-I2V-A14B/tree/206a9ee1b7bfaaf8f7e4d81335650533490646a3) | 88.68 % | Qwen prompt optimization · 2026-03-06 |

VBench Team sampled and evaluated both published Qwen-prompt-optimized systems; their native generation settings are retained.

A 0.12-point aggregate difference is not evidence of statistical significance. I2V consistency and quality have different rankings; larger weights are not automatically better on this aggregate.

Source: [VBench live leaderboard · T2V and I2V](https://huggingface.co/spaces/Vchitect/VBench_Leaderboard) · I2V · Gold rows · TI2V-5B / I2V-A14B.

Research trail: [VBench live leaderboard · T2V and I2V](https://huggingface.co/spaces/Vchitect/VBench_Leaderboard), [Wan2.2-I2V-A14B · model card](https://huggingface.co/Wan-AI/Wan2.2-I2V-A14B/blob/206a9ee1b7bfaaf8f7e4d81335650533490646a3/README.md).

### text-to-3d-generation — single result

The original text-only Shap-E release has a published 40.9 CLIP R-Precision result.

Newer HY3D-Bench and Hunyuan3D results often evaluate image-to-3D. Without a specified text-to-image front end they do not form a direct replacement comparison; this remains a historical single-model reference.

TR: Özgün yalnızca metin koşullu Shap-E sürümü için yayımlanmış 40,9 CLIP R-Precision sonucu bulundu. Daha yeni HY3D-Bench ve Hunyuan3D sonuçları çoğunlukla görüntüden 3B üretimi değerlendirir. Belirtilmiş bir metinden görüntü ön aşaması olmadan doğrudan karşılaştırma oluşturmazlar; bu, tek model için tarihsel referans olarak kalır.

**Shap-E · text-only 3D** — CLIP ViT-L/14 R-Precision (higher is better), proxy. Publication: 2023-05.

| Release | Published value | Configuration |
|---|---:|---|
| [Shap-E](https://huggingface.co/openai/shap-e/tree/7bd337afdea1c17842e1c3cc45c4e268356dba40) | 40.9 % | 300M text-conditional model |

Render the text-generated 3D assets and evaluate prompt retrieval using CLIP ViT-L/14.

A 2023 reference. CLIP alignment is not mesh usability or physical validity. Image-conditioned Shap-E and text-to-image-to-3D pipelines are different conditions.

Source: [Shap-E · text-conditional COCO evaluation](https://arxiv.org/abs/2305.02463) · Table 2 · Shap-E (300M, text-only).

Research trail: [HY3D-Bench evaluation scope](https://github.com/Tencent-Hunyuan/HY3D-Bench), [Shap-E · text-conditional COCO evaluation](https://arxiv.org/abs/2305.02463).

### speech-translation — comparison

Official per-language CSVs show SeamlessM4T v2 Large improving Turkish-to-English speech translation BLEU from 25.81 to 30.74.

This is a 2023 paired-release reference for Turkish speech to English text. Recognition WER, translated speech quality and other language directions remain separate.

TR: Resmî dil bazlı CSV’ler, SeamlessM4T v2 Large’ın Türkçeden İngilizceye konuşma çevirisi BLEU değerini 25,81’den 30,74’e çıkardığını gösterir. Türkçe konuşmadan İngilizce metne 2023 sürüm karşılaştırmasıdır. Tanıma WER’i, çevrilmiş ses kalitesi ve diğer dil yönleri ayrı tutulur.

**SeamlessM4T · Turkish speech to English** — BLEU (higher is better), direct. Publication: 2023-11.

| Release | Published value | Configuration |
|---|---:|---|
| [SeamlessM4T v2 large](https://huggingface.co/facebook/seamless-m4t-v2-large/tree/5f8cc790b19fc3f67a61c105133b20b34e3dcb76) | 30.74  | Named release |
| [SeamlessM4T Large v1](https://huggingface.co/facebook/seamless-m4t-large/tree/be77b87c4966c795d4793c1806f6c6dcdca30b49) | 25.81  | Named release |

Direct Turkish-speech to English-text evaluation from the two official release CSVs.

One language direction on FLEURS, not an all-language average or speech-to-speech quality score. Different training data are part of the version change.

Source: [SeamlessM4T v2 · official evaluation CSV bundle](https://dl.fbaipublicfiles.com/seamless/metrics/seamlessM4T_large_v2.zip) · s2tt_fleurs_test.csv · tur-eng (v1 bundle also cited).

Research trail: [SeamlessM4T v1 · official evaluation CSV bundle](https://dl.fbaipublicfiles.com/seamless/metrics/seamlessM4T_large.zip), [SeamlessM4T v2 · official evaluation CSV bundle](https://dl.fbaipublicfiles.com/seamless/metrics/seamlessM4T_large_v2.zip), [SeamlessM4T Large v1 · model card](https://huggingface.co/facebook/seamless-m4t-large/blob/be77b87c4966c795d4793c1806f6c6dcdca30b49/README.md).

### speaker-identification — comparison

The exact SUPERB Transformers heads give HuBERT Base 80.71% and wav2vec 2.0 Base 75.18% speaker-identification accuracy.

A historical closed-set identification comparison. Modern verification embeddings, diarization DER and identification accuracy answer different questions.

TR: Tam SUPERB Transformers başlıkları konuşmacı kimliğinde HuBERT Base için %80,71, wav2vec 2.0 Base için %75,18 doğruluk verir. Tarihsel kapalı küme kimlik karşılaştırmasıdır. Modern doğrulama gömmeleri, diarization DER ve kimlik doğruluğu farklı sorulara yanıt verir.

**SUPERB · speaker identification** — Accuracy (higher is better), direct. Publication: 2021.

| Release | Published value | Configuration |
|---|---:|---|
| [HuBERT Base · SUPERB speaker ID](https://huggingface.co/superb/hubert-base-superb-sid/tree/fd0c9962f8a01e274b9a7996e007775293d1d77e) | 80.71 % | Named release |
| [wav2vec 2.0 Base · SUPERB speaker ID](https://huggingface.co/superb/wav2vec2-base-superb-sid/tree/73365f1ed139a3d88fb8a72b98ecac3a38a1fa0e) | 75.18 % | Named release |

Both converted SUPERB classification heads, 16 kHz speech and a predefined closed set of speakers. Scores from each card’s Transformers column, multiplied by 100.

Speaker identification accuracy is not verification EER. HuBERT’s original S3PRL 81.42 result is not assigned to its Transformers checkpoint.

Source: [HuBERT Base · SUPERB speaker ID · model card](https://huggingface.co/superb/hubert-base-superb-sid/blob/fd0c9962f8a01e274b9a7996e007775293d1d77e/README.md) · Evaluation results · Transformers column (companion wav2vec card cited below).

Research trail: [wav2vec 2.0 Base · SUPERB speaker ID · model card](https://huggingface.co/superb/wav2vec2-base-superb-sid/blob/73365f1ed139a3d88fb8a72b98ecac3a38a1fa0e/README.md), [HuBERT Base · SUPERB speaker ID · model card](https://huggingface.co/superb/hubert-base-superb-sid/blob/fd0c9962f8a01e274b9a7996e007775293d1d77e/README.md).

### voice-conversion — single result

The older evaluation can be tied to its exact Whisper-small checkpoint through the historical evaluation code, giving 11.99 WER.

Current Seed-VC v2 is kept separate. OpenVoice/CosyVoice rows lack equally precise release configuration in this table, so they are not ranked as exact checkpoint peers.

TR: Eski değerlendirme tarihsel kod üzerinden tam Whisper-small ağırlığıyla eşleştirilebiliyor; WER değeri 11,99. Güncel Seed-VC v2 ayrı tutulur. Bu tablodaki OpenVoice/CosyVoice satırlarında aynı kesinlikte sürüm ayarı bulunmadığından tam ağırlık eşleri olarak sıralanmazlar.

**Seed-VC · zero-shot conversion** — WER (lower is better), direct. Publication: 2024-11.

| Release | Published value | Configuration |
|---|---:|---|
| [Seed-VC · 2024 Whisper-small checkpoint](https://huggingface.co/Plachta/Seed-VC/blob/257283f9f41585055e8f858fba4fd044e5caed6e/DiT_seed_v2_uvit_whisper_small_wavenet_bigvgan_pruned.pth) | 11.99 % | Named release |

Historical evaluation code identifies the Whisper-small / BigVGAN checkpoint; reference-conditioned conversion is evaluated with ASR WER.

WER measures content preservation, not speaker similarity. The EVAL table predates the product called Seed-VC v2; its score is not transferred to that newer variant.

Source: [Seed-VC · objective evaluation](https://github.com/Plachtaa/seed-vc/blob/51383efd921027683c89e5348211d93ff12ac2a8/EVAL.md) · Zero-shot voice conversion · Seed-VC row.

Research trail: [Seed-VC evaluation code at result publication](https://github.com/Plachtaa/seed-vc/blob/904a65b673146f6b1d8343c2674493b084cd4de0/eval.py), [Seed-VC · objective evaluation](https://github.com/Plachtaa/seed-vc/blob/51383efd921027683c89e5348211d93ff12ac2a8/EVAL.md).

### text-to-audio-generation — comparison

TangoFlux has the lowest OpenL3 FD and highest CLAP score among the three verified releases in the common AudioCaps comparison.

This result uses different durations/step counts and does not dominate every metric. Read the noncommercial and dataset-related license conditions before deployment.

TR: Ortak AudioCaps karşılaştırmasındaki üç doğrulanmış sürüm arasında TangoFlux en düşük OpenL3 FD ve en yüksek CLAP skoruna sahiptir. Sonuç farklı süre/adım sayıları kullanır ve her metrikte üstün değildir. Kullanımdan önce ticari olmayan kullanım ve veri kümesiyle ilişkili lisans koşulları okunmalıdır.

**TangoFlux · FD (OpenL3)** — FD (OpenL3) (lower is better), direct. Publication: 2024-12.

| Release | Published value | Configuration |
|---|---:|---|
| [TangoFlux · CRPO](https://huggingface.co/declare-lab/TangoFlux/tree/367005e963cb3a9fb2e03a46104d7de23e34ceea) | 75.1  | 50 steps / 30 s |
| [Tango 2](https://huggingface.co/declare-lab/tango2/tree/86d7260a578b8a51218d26f1ba4e8398eaac9761) | 108.4  | 200 steps / 10 s |
| [AudioLDM 2 Large](https://huggingface.co/cvssp/audioldm2-large/tree/4b0b875a9e0c5305dfc917da808584e50e1c7ed4) | 108.3  | 200 steps / 10 s |

Official common AudioCaps test comparison; generation lengths and sampling steps differ as disclosed in each row.

OpenL3 FD is not VGGish FAD. CLAP is machine-estimated alignment, not human preference. Tango 2 has the better reported KL metric, so there is no across-metric winner.

Source: [TangoFlux · objective audio generation evaluation](https://github.com/declare-lab/TangoFlux/blob/164420faa2b3f8a28bb013ccde7006422a616fc7/README.md) · Evaluation · TangoFlux / Tango 2 / AudioLDM 2 Large.

**TangoFlux · CLAP score** — CLAP score (higher is better), direct. Publication: 2024-12.

| Release | Published value | Configuration |
|---|---:|---|
| [TangoFlux · CRPO](https://huggingface.co/declare-lab/TangoFlux/tree/367005e963cb3a9fb2e03a46104d7de23e34ceea) | 0.48  | 50 steps / 30 s |
| [Tango 2](https://huggingface.co/declare-lab/tango2/tree/86d7260a578b8a51218d26f1ba4e8398eaac9761) | 0.447  | 200 steps / 10 s |
| [AudioLDM 2 Large](https://huggingface.co/cvssp/audioldm2-large/tree/4b0b875a9e0c5305dfc917da808584e50e1c7ed4) | 0.419  | 200 steps / 10 s |

Official common AudioCaps test comparison; generation lengths and sampling steps differ as disclosed in each row.

OpenL3 FD is not VGGish FAD. CLAP is machine-estimated alignment, not human preference. Tango 2 has the better reported KL metric, so there is no across-metric winner.

Source: [TangoFlux · objective audio generation evaluation](https://github.com/declare-lab/TangoFlux/blob/164420faa2b3f8a28bb013ccde7006422a616fc7/README.md) · Evaluation · TangoFlux / Tango 2 / AudioLDM 2 Large.

Research trail: [TangoFlux · evaluation data and protocol](https://arxiv.org/html/2412.21037v1), [TangoFlux · objective audio generation evaluation](https://github.com/declare-lab/TangoFlux/blob/164420faa2b3f8a28bb013ccde7006422a616fc7/README.md), [TangoFlux · CRPO · model card](https://huggingface.co/declare-lab/TangoFlux/blob/367005e963cb3a9fb2e03a46104d7de23e34ceea/README.md), [Tango 2 · model card](https://huggingface.co/declare-lab/tango2/blob/86d7260a578b8a51218d26f1ba4e8398eaac9761/README.md), [AudioLDM 2 Large · model card](https://huggingface.co/cvssp/audioldm2-large/blob/4b0b875a9e0c5305dfc917da808584e50e1c7ed4/README.md).

### conditional-music-generation — single result

ACE-Step 1.5 has a numerical 2026 paper result: SongEval musicality 4.67 for the specified 1.7B LM plus distilled DiT pipeline.

This is one identifiable system configuration. A family-level MusicGen or Yue label is insufficient for a fair head-to-head rank, and these automatic scores do not establish human musical preference.

TR: ACE-Step 1.5 için sayısal 2026 makale sonucu bulundu: belirtilen 1,7B LM ve damıtılmış DiT hattında SongEval müzikalite 4,67. Bu, tanımlanabilir tek sistem ayarıdır. Yalnızca MusicGen veya Yue aile adı adil karşılaştırma için yetersizdir; otomatik skorlar insan müzik tercihini belirlemez.

**ACE-Step 1.5 · SongEval** — SongEval musicality (higher is better), proxy. Publication: 2026-02.

| Release | Published value | Configuration |
|---|---:|---|
| [ACE-Step 1.5](https://huggingface.co/ACE-Step/Ace-Step1.5/tree/19671f406d603126926c1b7e2adc169acbcade22) | 4.67  | 1.7B LM + dynamic distilled DiT; no RL |

The paper specifies the 1.7B language-model and distilled-DiT generation pipeline; musicality comes from the ASLP-lab SongEval evaluator.

A model-based quality estimate on author-generated bilingual prompts, not a blinded human score. Other model rows lack an equally explicit checkpoint recipe; style and lyric alignment use the authors’ own reward models.

Source: [ACE-Step 1.5 · objective music evaluation](https://arxiv.org/html/2602.00744v1) · Table 1 · Mus. column.

Research trail: [ACE-Step 1.5 · objective music evaluation](https://arxiv.org/html/2602.00744v1).

### code-completion — comparison

In the 2026 SAFIM evaluation, DeepSeek-V3 Base has higher native-FIM mean pass@1 than Qwen2.5-Coder-32B: 79.6 versus 70.0.

This compares released base models with their FIM protocol. It does not transfer SRI-Coder training gains to Qwen3-Coder-Next or claim that completion and repository repair are interchangeable.

TR: 2026 SAFIM değerlendirmesinde DeepSeek-V3 Base, doğal FIM ortalama pass@1 değerinde Qwen2.5-Coder-32B’den yüksektir: 79,6’ya karşı 70,0. Yayımlanmış taban modeller FIM protokolüyle karşılaştırılır. SRI-Coder eğitim kazanımları Qwen3-Coder-Next’e aktarılmaz; tamamlama ve depo onarımı eşdeğer sayılmaz.

**SAFIM · native fill-in-the-middle** — Mean pass@1 (higher is better), direct. Publication: 2026-01.

| Release | Published value | Configuration |
|---|---:|---|
| [Qwen2.5-Coder-32B Base](https://huggingface.co/Qwen/Qwen2.5-Coder-32B/tree/2e12b5f7bc878d424d222e224ed40aee564ec45f) | 70.0 % | Named release |
| [DeepSeek-V3 Base](https://huggingface.co/deepseek-ai/DeepSeek-V3-Base/tree/afb92e1fa402c2be2a9eb085312bb02e0384d6c7) | 79.6 % | Named release |

Native FIM results for both base models in the same 2026 paper. SRI instruction-formatted results are kept out of this FIM-only comparison.

Different model sizes and training data; no equal-compute or all-language claim. Full software-agent benchmarks do not measure completion in the same way.

Source: [SRI code infilling · 2026 evaluation](https://arxiv.org/html/2601.13384v1) · Execution-based evaluation · Base Models · FIM / Average.

Research trail: [SRI code infilling · 2026 evaluation](https://arxiv.org/html/2601.13384v1), [Qwen2.5-Coder-32B Base · model card](https://huggingface.co/Qwen/Qwen2.5-Coder-32B/blob/2e12b5f7bc878d424d222e224ed40aee564ec45f/README.md), [DeepSeek-V3 Base · model card](https://huggingface.co/deepseek-ai/DeepSeek-V3-Base/blob/afb92e1fa402c2be2a9eb085312bb02e0384d6c7/README.md).

### code-translation — single result

Both translation directions now have exact fine-tuned CodeT5 releases and published BLEU-4 results.

These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.

TR: Her iki çeviri yönü için de göreve özel CodeT5 sürümleri ve yayımlanmış BLEU-4 sonuçları bulundu. Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez.

**CodeT5 · Java → C#** — BLEU-4 (higher is better), direct. Publication: 2021-11.

| Release | Published value | Configuration |
|---|---:|---|
| [CodeT5-base · Java to C#](https://huggingface.co/Salesforce/codet5-base-codexglue-translate-java-cs/tree/7d9b9acfa961a27b45e9d4b5e301b2f378fc245d) | 84.03  | Named release |

The direction-specific fine-tuned checkpoint is evaluated on the paired translation test set.

Opposite directions are separate tasks; these scores are not ranked against each other. BLEU does not prove semantic equivalence or successful compilation.

Source: [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/) · Table 4 · CodeT5-base.

**CodeT5 · C# → Java** — BLEU-4 (higher is better), direct. Publication: 2021-11.

| Release | Published value | Configuration |
|---|---:|---|
| [CodeT5-base · C# to Java](https://huggingface.co/Salesforce/codet5-base-codexglue-translate-cs-java/tree/c2017eaf9cf78fd7145629b1674d2a4e67cfecd1) | 79.87  | Named release |

The direction-specific fine-tuned checkpoint is evaluated on the paired translation test set.

Opposite directions are separate tasks; these scores are not ranked against each other. BLEU does not prove semantic equivalence or successful compilation.

Source: [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/) · Table 4 · CodeT5-base.

Research trail: [CodeT5 task-specific release and replication guide](https://github.com/salesforce/CodeT5/blob/7de7f696c7fb1c7551406f3079e8fed500673199/CodeT5/README.md), [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/), [CodeT5-base · C# to Java · model card](https://huggingface.co/Salesforce/codet5-base-codexglue-translate-cs-java/blob/c2017eaf9cf78fd7145629b1674d2a4e67cfecd1/README.md), [CodeT5-base · Java to C# · model card](https://huggingface.co/Salesforce/codet5-base-codexglue-translate-java-cs/blob/7d9b9acfa961a27b45e9d4b5e301b2f378fc245d/README.md).

### code-summarization — comparison

The released multi-sum checkpoint scores 20.42 Python BLEU-4 versus 20.01 for the Python-specific CodeT5 checkpoint.

These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.

TR: Yayımlanan multi-sum ağırlığı Python BLEU-4’te 20,42; Python’a özel CodeT5 ağırlığı 20,01 alır. Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez.

**CodeT5 · Python summaries** — Smoothed BLEU-4 (higher is better), direct. Publication: 2021.

| Release | Published value | Configuration |
|---|---:|---|
| [CodeT5-base · Python summarization](https://huggingface.co/Salesforce/codet5-base-codexglue-sum-python/tree/a24de036787ca6acb85b82fb14c2bc6d70118b72) | 20.01  | Named release |
| [CodeT5-base · multi-language summarization](https://huggingface.co/Salesforce/codet5-base-multi-sum/tree/37cf4c014106a34663da1008855a6d07affae042) | 20.42  | Named release |

Compare the Python-specific checkpoint with the released single checkpoint shared across six languages. The multi-sum card explicitly distinguishes this release from the original paper’s per-language checkpoint selection.

A lexical metric on a fixed Python split, not documentation correctness. The 20.42 row is the release-card result, not the paper’s 20.36 multi-task row.

Source: [CodeT5-base · multi-language summarization · model card](https://huggingface.co/Salesforce/codet5-base-multi-sum/blob/37cf4c014106a34663da1008855a6d07affae042/README.md) · Released multi-sum model card · Python column.

Research trail: [CodeT5 task-specific release and replication guide](https://github.com/salesforce/CodeT5/blob/7de7f696c7fb1c7551406f3079e8fed500673199/CodeT5/README.md), [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/), [CodeT5-base · multi-language summarization · model card](https://huggingface.co/Salesforce/codet5-base-multi-sum/blob/37cf4c014106a34663da1008855a6d07affae042/README.md), [CodeT5-base · Python summarization · model card](https://huggingface.co/Salesforce/codet5-base-codexglue-sum-python/blob/a24de036787ca6acb85b82fb14c2bc6d70118b72/README.md).

### code-clone-detection — single result

The released task-specific CodeT5 checkpoint has a traceable 97.2 Binary F1 result. It is a historical baseline, not a current winner.

These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.

TR: Yayımlanan göreve özel CodeT5 ağırlıkları için izlenebilir 97,2 Binary F1 sonucu bulundu. Güncel lider değil, tarihsel referanstır. Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez.

**CodeT5 · BigCloneBench** — Binary F1 (higher is better), direct. Publication: 2021-11.

| Release | Published value | Configuration |
|---|---:|---|
| [CodeT5-base · clone detection](https://huggingface.co/Salesforce/codet5-base-codexglue-clone/tree/b0ee6b1fd48012f6074964bc772342cfa3f42128) | 97.2 % | Named release |

CodeXGLUE BigCloneBench clone/non-clone evaluation with the released clone-detection head.

These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.

Source: [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/) · Table 5 · CodeT5-base / Clone F1.

Research trail: [CodeT5 task-specific release and replication guide](https://github.com/salesforce/CodeT5/blob/7de7f696c7fb1c7551406f3079e8fed500673199/CodeT5/README.md), [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/), [CodeT5-base · clone detection · model card](https://huggingface.co/Salesforce/codet5-base-codexglue-clone/blob/b0ee6b1fd48012f6074964bc772342cfa3f42128/README.md).

### defect-detection — single result

The released task-specific CodeT5 checkpoint has a traceable 65.78 Accuracy result. It is a historical baseline, not a current winner.

These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.

TR: Yayımlanan göreve özel CodeT5 ağırlıkları için izlenebilir 65,78 Accuracy sonucu bulundu. Güncel lider değil, tarihsel referanstır. Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez.

**CodeT5 · Devign** — Accuracy (higher is better), direct. Publication: 2021-11.

| Release | Published value | Configuration |
|---|---:|---|
| [CodeT5-base · defect detection](https://huggingface.co/Salesforce/codet5-base-codexglue-defect/tree/8fc5f350c69bab8d30b144d5fda12e6d60915c8a) | 65.78 % | Named release |

CodeXGLUE Devign binary defect classification; test-set accuracy, not vulnerability-repair success.

These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.

Source: [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/) · Table 5 · CodeT5-base / Defect Accuracy.

Research trail: [CodeT5 task-specific release and replication guide](https://github.com/salesforce/CodeT5/blob/7de7f696c7fb1c7551406f3079e8fed500673199/CodeT5/README.md), [CodeT5 · EMNLP 2021 results](https://aclanthology.org/2021.emnlp-main.685/), [CodeT5-base · defect detection · model card](https://huggingface.co/Salesforce/codet5-base-codexglue-defect/blob/8fc5f350c69bab8d30b144d5fda12e6d60915c8a/README.md).

### clustering — single result

The SCAN model zoo links the existing SCAN-loss file to 81.6 clustering accuracy on CIFAR-10.

Its ten-cluster image domain and 2020 evaluation cannot rank arbitrary tabular clustering. The higher self-labeling result belongs to a different trained stage.

TR: SCAN model tablosu, mevcut SCAN-loss dosyasını CIFAR-10 üzerinde 81,6 kümeleme doğruluğuna bağlar. On kümeli görüntü alanı ve 2020 değerlendirmesi, genel tablo kümelemeyi sıralayamaz. Daha yüksek self-labeling sonucu başka eğitilmiş aşamaya aittir.

**SCAN · CIFAR-10 clustering** — Clustering accuracy (higher is better), direct. Publication: 2020.

| Release | Published value | Configuration |
|---|---:|---|
| [SCAN · CIFAR-10 (SCAN-loss)](https://drive.google.com/file/d/1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0/view) | 81.6 % | Named release |

Published SCAN-loss checkpoint with cluster-to-label evaluation. The separately released self-labeling stage has a different checkpoint.

A 2020 image-clustering reference. The self-labeling score 88.3 is not assigned to the SCAN-loss file, and ACC is not label-free internal cluster validity.

Source: [SCAN · released CIFAR-10 model zoo](https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/README.md) · Model zoo · CIFAR10 / SCAN.

Research trail: [SCAN · released CIFAR-10 model zoo](https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/README.md).

### dimensionality-reduction — unresolved

A pretrained 128D CIFAR-10 encoder exists. The tutorial evaluates 64/128/256/384D reconstructions, but the inspected notebook retains a plotted curve rather than an exact numeric test-loss table tied to the 128D artifact.

No number is digitized or guessed from that plot. Different bottleneck dimensions trade compression against reconstruction, while embedding retrieval benchmarks evaluate another objective. A common numeric protocol and artifact-linked outputs are still needed.

TR: Ön eğitimli 128D CIFAR-10 kodlayıcısı var. Eğitim materyali 64/128/256/384D yeniden kurmaları değerlendiriyor; ancak incelenen not defterinde 128D dosyasına bağlı tam sayısal test kaybı tablosu yerine çizilmiş eğri bulunuyor. Grafikten sayı okunup tahmin edilmedi. Farklı darboğaz boyutları sıkıştırma ile yeniden kurma arasında tercih yaratır; gömme geri getirme benchmark’ları başka amaç ölçer. Ortak sayısal protokol ve dosyaya bağlı çıktılar hâlâ gerekiyor.

Research trail: [UvA · autoencoder dimensionality/reconstruction evaluation](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial9/AE_CIFAR10.ipynb).

### density-estimation — comparison

The saved tutorial output links all three published flow checkpoints to test bits/dimension. Multiscale has the lowest value, 1.020.

A narrow MNIST reference with no dated evaluation in the source. It cannot select a universal density estimator for unseen feature spaces.

TR: Kayıtlı eğitim materyali çıktısı üç yayımlanmış flow ağırlığını test boyut başına bit değerine bağlar. Multiscale 1,020 ile en düşüktür. Kaynakta değerlendirme tarihi olmayan dar MNIST referansıdır. Görülmemiş özellik uzayları için evrensel yoğunluk tahmincisi seçemez.

**UvA · MNIST density estimation** — Bits per dimension (lower is better), direct. Publication: not dated in source.

| Release | Published value | Configuration |
|---|---:|---|
| [UvA MNISTFlow · simple](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_simple.ckpt) | 1.078 bits/dim | Named release |
| [UvA MNISTFlow · vardeq](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_vardeq.ckpt) | 1.043 bits/dim | Named release |
| [UvA MNISTFlow · multiscale](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_multiscale.ckpt) | 1.02 bits/dim | Named release |

Released pretrained PyTorch flow checkpoints with the tutorial’s dequantization and test likelihood estimation.

An educational, domain-specific likelihood comparison; parameter counts differ. Not anomaly-detection F1, not cross-dataset density quality, and not a current frontier claim.

Source: [UvA · saved MNIST normalizing-flow evaluation](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial11/NF_image_modeling.ipynb) · Recorded notebook output · Model / Test Bpd table.

Research trail: [UvA · saved MNIST normalizing-flow evaluation](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial11/NF_image_modeling.ipynb).

### anomaly-detection — single result

A 2026 pretrained TimeRadar artifact and matching zero-shot evaluation are public: eight-dataset mean ROC-AUC 76.97.

Public weight files and numerical results are verified, but the README shows both MIT and Apache-2.0 badges with no license file; the usage license is unresolved. ROC-AUC, PR-AUC and affiliation/point-adjusted F1 remain separate metrics.

TR: 2026 ön eğitimli TimeRadar dosyası ve eşleşen sıfır örnekli değerlendirme açıktır: sekiz veri kümesinde ortalama ROC-AUC 76,97. Açık ağırlık dosyaları ve sayısal sonuçlar doğrulandı; ancak README, lisans dosyası olmadan hem MIT hem Apache-2.0 rozeti gösteriyor; kullanım lisansı belirsiz. ROC-AUC, PR-AUC ve affiliation/nokta düzeltmeli F1 ayrı metrikler olarak tutulur.

**TimeRadar · zero-shot anomaly detection** — Mean ROC-AUC (higher is better), direct. Publication: 2026-02.

| Release | Published value | Configuration |
|---|---:|---|
| [TimeRadar · pretrained 100-step model](https://github.com/mala-lab/TimeRadar/blob/4e06d0ad2bbe4c7e349c5a230fa5787d186e1eb2/TimeRadar/model.safetensors) | 76.97 % | Named release |

Monash+ pretrained model without target-dataset fine-tuning. Average ROC-AUC across eight multivariate anomaly datasets; not point-adjusted F1.

Publisher evaluation; baseline family names do not fully specify every released checkpoint, so only the identified TimeRadar artifact is scored here. Random inference masks need a seed for reproduction.

Source: [TimeRadar · zero-shot anomaly evaluation](https://arxiv.org/html/2602.19068v1) · Table 1 · Zero-shot / TimeRadar / AUC-R Avg..

Research trail: [TimeRadar · zero-shot anomaly evaluation](https://arxiv.org/html/2602.19068v1), [TimeRadar · released pretrained anomaly model](https://github.com/mala-lab/TimeRadar/blob/4e06d0ad2bbe4c7e349c5a230fa5787d186e1eb2/README.md).

### missing-value-imputation — comparison

The October 2026 MatrixFormer release provides exact experts and a frozen MissBench comparison. The two-expert blend reduces macro NRMSE from 1.674085 to 1.579644.

The benefit is not uniform: MNAR regresses. These numerical-matrix results do not establish the best time-series imputer, and MatrixFormer+ requires both expert inference passes.

TR: Ekim 2026 MatrixFormer yayını tam uzman ağırlıklarını ve sabit MissBench karşılaştırmasını sunar. İki uzmanlı karışım makro NRMSE’yi 1,674085’ten 1,579644’e düşürür. Kazanç her örüntüde yoktur: MNAR kötüleşir. Sayısal matris sonuçları en iyi zaman serisi tamamlayıcısını belirlemez; MatrixFormer+ iki uzmanın da çıkarımını gerektirir.

**MatrixFormer · MissBench** — Macro NRMSE (lower is better), direct. Publication: 2026-10-04.

| Release | Published value | Configuration |
|---|---:|---|
| [MatrixFormer · general expert](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer/impute/model.safetensors) | 1.674085  | Named release |
| [MatrixFormer · recommender specialist](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer/recsys/model.safetensors) | 1.84499  | Named release |
| [MatrixFormer+ · two-expert blend](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/matrixformer) | 1.579644  | Named release |

462 cases; average cases within each dataset then weight datasets equally. Full-matrix context; no row train/test split. MatrixFormer+ fits a convex blend using observed entries only.

Exploratory publisher campaign, not independent validation. Hidden targets are excluded from fitting, but observed reconstruction loss is in-sample. The blend worsens the MNAR pattern relative to the general expert.

Source: [MatrixFormer+ · frozen October 2026 results](https://github.com/jacobf18/tabular/blob/2cf54ac47dbcc1154b35e875b527ed0c42a9f416/mcpfn/MATRIXFORMER_PLUS_RESULTS.md) · Overall tabular NRMSE · MissBench overall.

Research trail: [MatrixFormer+ · frozen October 2026 results](https://github.com/jacobf18/tabular/blob/2cf54ac47dbcc1154b35e875b527ed0c42a9f416/mcpfn/MATRIXFORMER_PLUS_RESULTS.md), [MatrixFormer · general expert · model card](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md), [MatrixFormer · recommender specialist · model card](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md), [MatrixFormer+ · two-expert blend · model card](https://huggingface.co/Tabimpute/TabImpute/blob/6fabde6aa21ded04f818b63631f1c2155260ebdc/README.md).

### change-point-detection — single result

AutoCPD publishes a 96.23% test classification result for the HASC 21-block model behind its released Demo artifact.

It supports window-level activity/change classification only. No exact published continuous-event F1 or delay comparison was verified for the packaged checkpoint, so this proxy is explicitly labeled.

TR: AutoCPD, yayımlanan Demo dosyasının temelindeki HASC 21 bloklu model için %96,23 test sınıflandırma sonucu yayımlar. Yalnızca pencere düzeyinde etkinlik/değişim sınıflandırmasını destekler. Paketlenmiş ağırlık için tam yayımlanmış sürekli olay F1 veya gecikme karşılaştırması doğrulanamadığından vekil metrik açıkça işaretlenir.

**AutoCPD · HASC window classification** — Test classification accuracy (higher is better), proxy. Publication: 2023-10.

| Release | Published value | Configuration |
|---|---:|---|
| [AutoCPD · HASC Demo (0.1.5)](https://files.pythonhosted.org/packages/1a/85/c3c2af34062ede635d9dd8cc2d45fb6b0835a763ea3a029d77cac27c42ac/autocpd-0.1.5-py3-none-any.whl) | 96.23 % | Named release |

The 21-residual-block HASC classifier underlying the released Demo model is evaluated on segmented activity/change windows.

This is a classifier proxy, not continuous change-point localization F1 or delay. Postprocessing and windowing are needed; simulated-signal results are not assigned to the HASC checkpoint.

Source: [AutoCPD · HASC residual classifier evaluation](https://arxiv.org/abs/2211.03860) · Supplement · Figures 12–13 / test accuracy 0.9623.

Research trail: [AutoCPD · HASC residual classifier evaluation](https://arxiv.org/abs/2211.03860).

### node-classification — comparison

The released GraphAny Product model has the highest selected seed-0 overall accuracy, 67.77, versus Arxiv 67.58 and Cora 66.98.

These small differences are on 31 datasets including each model’s training graph. Cross-graph inference still consumes support labels; this is not label-free learning.

TR: Yayımlanan GraphAny Product modeli, Arxiv 67,58 ve Cora 66,98’e karşı seçili seed-0 genel doğrulukta 67,77 ile öndedir. Küçük farklar, her modelin eğitim grafını da içeren 31 veri kümesindedir. Graflar arası çıkarım destek etiketlerini kullanır; etiketsiz öğrenme değildir.

**GraphAny · seed-0 released models** — Mean test accuracy (higher is better), direct. Publication: 2025.

| Release | Published value | Configuration |
|---|---:|---|
| [GraphAny · Cora](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_cora.pt) | 66.98 % | Named release |
| [GraphAny · Arxiv](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_arxiv.pt) | 67.58 % | Named release |
| [GraphAny · Product](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_product.pt) | 67.77 % | Named release |

Same 31-dataset overall evaluation with the released seed-0 meta-models. Target graph features and labeled support nodes are still required.

Overall includes the training graph; do not call it wholly out-of-domain. Training graph and model capacity differ, and one seed does not establish statistical significance.

Source: [GraphAny · released seed-0 checkpoints](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/README.md) · Reproduce commands · saved seed-0 checkpoints.

Research trail: [GraphAny · released seed-0 checkpoints](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/README.md).

### graph-classification — comparison

The official pretrained-model table and download registry now link three Tox21 heads to 0.77, 0.79 and 0.80 test ROC-AUC; the GIN edge-prediction release leads this selected set.

A narrow MoleculeNet reference with rounded values and no per-result publication date. Gains do not transfer to unrelated graph labels, binding affinity or clinical toxicity decisions.

TR: Resmî ön eğitimli model tablosu ve indirme kaydı, üç Tox21 başlığını 0,77, 0,79 ve 0,80 test ROC-AUC değerine bağlar; GIN kenar tahmini sürümü bu seçili kümede öndedir. Yuvarlanmış değerli, sonuç başına yayın tarihi olmayan dar bir MoleculeNet referansıdır. Kazançlar ilgisiz graf etiketlerine, bağlanma afinitesine veya klinik toksisite kararlarına aktarılmaz.

**DGL-LifeSci · Tox21** — ROC-AUC (higher is better), direct. Publication: not dated in source.

| Release | Published value | Configuration |
|---|---:|---|
| [DGL-LifeSci · GCN canonical Tox21](https://data.dgl.ai/dgllife/pre_trained/gcn_canonical_tox21.pth) | 0.77  | Named release |
| [DGL-LifeSci · GCN attentivefp Tox21](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py) | 0.79  | Named release |
| [DGL-LifeSci · GIN supervised edge prediction Tox21](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py) | 0.8  | Named release |

Released pretrained models; scaffold split and 32-trial Bayesian hyperparameter search with selection by validation performance. Matching featurizers and heads are required.

Scores are rounded to two decimals. This is molecular graph toxicity classification across 12 assays, not all graph classification or all molecular properties; no clinical interpretation follows.

Source: [DGL-LifeSci · pretrained MoleculeNet performance](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/examples/property_prediction/moleculenet/README.md) · Tox21 · Test ROC-AUC.

Research trail: [DGL-LifeSci Tox21 checkpoint registry](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py), [DGL-LifeSci · pretrained MoleculeNet performance](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/examples/property_prediction/moleculenet/README.md).

### graph-regression — single result

The exact CHGNet 0.3.0 release reports 29 meV/atom test energy MAE on MPtrj.

One crystal-energy reference, not a universal regression leaderboard. New MatPES training sets and different test splits prevent a direct version ranking from the inspected table.

TR: Tam CHGNet 0.3.0 sürümü MPtrj üzerinde atom başına 29 meV test enerji MAE bildirir. Tek kristal enerjisi referansıdır; evrensel regresyon tablosu değildir. Yeni MatPES eğitim kümeleri ve farklı test bölümleri, incelenen tablodan doğrudan sürüm sıralaması çıkarmayı engeller.

**CHGNet · crystal energy** — Energy MAE (meV/atom) (lower is better), direct. Publication: 2023.

| Release | Published value | Configuration |
|---|---:|---|
| [CHGNet 0.3.0 · MPtrj](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/chgnet_0.3.0_e29f68s314m37.pth.tar) | 29  | Named release |

The released 0.3.0 crystal-graph potential’s held-out energy error, in meV per atom.

MPtrj-trained 0.3.0 is distinct from the newer MatPES potentials. Energy, force, stress and magnetic-moment errors have different units and cannot be pooled.

Source: [CHGNet 0.3.0 · MPtrj test performance](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md) · MPtrj · Test row / Energy.

Research trail: [CHGNet 0.3.0 · MPtrj test performance](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md).

### molecular-property-prediction — comparison

The official pretrained-model table and download registry now link three Tox21 heads to 0.77, 0.79 and 0.80 test ROC-AUC; the GIN edge-prediction release leads this selected set.

A narrow MoleculeNet reference with rounded values and no per-result publication date. Gains do not transfer to unrelated graph labels, binding affinity or clinical toxicity decisions.

TR: Resmî ön eğitimli model tablosu ve indirme kaydı, üç Tox21 başlığını 0,77, 0,79 ve 0,80 test ROC-AUC değerine bağlar; GIN kenar tahmini sürümü bu seçili kümede öndedir. Yuvarlanmış değerli, sonuç başına yayın tarihi olmayan dar bir MoleculeNet referansıdır. Kazançlar ilgisiz graf etiketlerine, bağlanma afinitesine veya klinik toksisite kararlarına aktarılmaz.

**DGL-LifeSci · Tox21** — ROC-AUC (higher is better), direct. Publication: not dated in source.

| Release | Published value | Configuration |
|---|---:|---|
| [DGL-LifeSci · GCN canonical Tox21](https://data.dgl.ai/dgllife/pre_trained/gcn_canonical_tox21.pth) | 0.77  | Named release |
| [DGL-LifeSci · GCN attentivefp Tox21](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py) | 0.79  | Named release |
| [DGL-LifeSci · GIN supervised edge prediction Tox21](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py) | 0.8  | Named release |

Released pretrained models; scaffold split and 32-trial Bayesian hyperparameter search with selection by validation performance. Matching featurizers and heads are required.

Scores are rounded to two decimals. This is molecular graph toxicity classification across 12 assays, not all graph classification or all molecular properties; no clinical interpretation follows.

Source: [DGL-LifeSci · pretrained MoleculeNet performance](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/examples/property_prediction/moleculenet/README.md) · Tox21 · Test ROC-AUC.

Research trail: [DGL-LifeSci Tox21 checkpoint registry](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py), [DGL-LifeSci · pretrained MoleculeNet performance](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/examples/property_prediction/moleculenet/README.md).

### protein-structure-prediction — comparison

The 16 October 2026 Blitz release compares exact open Boltz-2 variants on common targets. K16 reaches 0.8533 complex lDDT versus the teacher’s 0.8499 with fewer denoiser calls.

Different inference budgets are explicit. K16 does not win every physical-validity metric; the small structural-quality difference is not a significance claim.

TR: 16 Ekim 2026 Blitz yayını tam açık Boltz-2 varyantlarını ortak hedeflerde karşılaştırır. K16 daha az gürültü giderici çağrısıyla öğretmenin 0,8499 değerine karşı 0,8533 kompleks lDDT’ye ulaşır. Farklı çıkarım bütçeleri açıktır. K16 her fiziksel geçerlilik metriğinde üstün değildir; küçük yapısal kalite farkı anlamlılık iddiası değildir.

**Blitz · Boltz-2 structure comparison** — Complex lDDT (higher is better), direct. Publication: 2026-10-16.

| Release | Published value | Configuration |
|---|---:|---|
| [Boltz-2](https://huggingface.co/boltz-community/boltz-2/tree/6fdef46d763fee7fbb83ca5501ccceff43b85607) | 0.8499  | Teacher · 600 NFE |
| [Blitz-Boltz2 · K8](https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/blitz-boltz2-k8.ckpt) | 0.8492  | Distilled · 8 NFE |
| [Blitz-Boltz2 · K16](https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/blitz-boltz2-k16.ckpt) | 0.8533  | Distilled · 16 NFE |

Same five-candidate reference-free reranker and target set. NFE counts denoiser evaluations; the teacher uses three recycle updates.

K16 improves this point estimate with far fewer denoiser calls, but RF-valid is lower than the teacher. Complex lDDT is structural accuracy, not binding affinity, clinical utility or guaranteed physical validity.

Source: [Blitz-Boltz2 · K16 · model card](https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/README.md) · Results · Boltz-2 teacher / Blitz K8 / Blitz K16.

Research trail: [Blitz · common evaluation protocol](https://arxiv.org/abs/2610.23703), [Blitz-Boltz2 · K16 · model card](https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/README.md), [Blitz-Boltz2 · K8 · model card](https://huggingface.co/vinaymatt/Blitz-Boltz2/blob/56af33e632523a3a3729811dceaa798782bf03d9/README.md).

### constraint-satisfaction — single result

EqR now provides a released Sudoku checkpoint and an explicit full evaluation: 99.557% convergence-selected exact accuracy.

The 2026 project’s README does not date this particular run. It requires depth/breadth search and cannot be compared to an HRM number with a different evaluation budget or generalized to all constraints.

TR: EqR yayımlanmış Sudoku ağırlığı ve açık tam değerlendirme sunuyor: yakınsama seçimiyle %99,557 tam doğruluk. 2026 projesinin README’si bu özel koşunun tarihini belirtmiyor. Derinlik/genişlik araması gerekir; farklı değerlendirme bütçeli HRM skoru ile kıyaslanamaz veya tüm kısıtlara genellenemez.

**EqR · full Sudoku evaluation** — Convergence top-k exact accuracy (higher is better), direct. Publication: not dated in source.

| Release | Published value | Configuration |
|---|---:|---|
| [EqR · Sudoku-Extreme](https://huggingface.co/locuslab/EqR-model/blob/89069c8c9c1e8a24c0c7e6404bc0a1a7507ab377/sudoku-extreme/eqr.pth) | 99.557 % | Named release |

Released Sudoku checkpoint; depth 64, breadth 128, convergence top-4 selection, Langevin noise 0.5 and latent reset 1.0.

Large test-time search budget on one constrained puzzle family. The 2,048-sample smoke run and cumulative any-correct metric are different results, and Sudoku does not imply arbitrary SAT/CSP solving.

Source: [Equilibrium Reasoners · released Sudoku full evaluation](https://github.com/locuslab/EqR/blob/134c7541711125860954c78463023c583b2ef21b/README.md) · Full paper-scale run · convergence_top_k/exact_accuracy.

Research trail: [Equilibrium Reasoners · released Sudoku full evaluation](https://github.com/locuslab/EqR/blob/134c7541711125860954c78463023c583b2ef21b/README.md).

### classical-planning — unresolved

The public BlocksWorld RankSVM model is real: the release states WLPlan/GOOSE v2.0.0 and classic.toml for the IPC23 learning-domain models. It is a domain-trained heuristic used inside search.

The inspected release does not bind an individual solved-count/cost/time result to this exact serialized model and search budget. IPC 2023 competition entrants and later ICAPS/NeurIPS 2024 GOOSE experiments are not interchangeable. Without that link, a modern LLM planning score or a competition aggregate would be misleading.

TR: Açık BlocksWorld RankSVM modeli gerçek: sürüm kaydı IPC23 öğrenme alanı modelleri için WLPlan/GOOSE v2.0.0 ve classic.toml belirtir. Arama içinde kullanılan alana özel eğitilmiş sezgiseldir. İncelenen sürüm, bu tam serileştirilmiş modele ve arama bütçesine tekil çözüm sayısı/maliyet/süre sonucu bağlamıyor. IPC 2023 yarışmacıları ile sonraki ICAPS/NeurIPS 2024 GOOSE deneyleri birbirinin yerine geçmez. Bu bağlantı olmadan güncel LLM planlama skoru veya yarışma toplamı yanıltıcı olur.

Research trail: [GOOSE · pretrained model provenance](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/README.md), [GOOSE · versioned training and planning configuration](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/README.md), [IPC 2023 Learning Track official results presentation](https://ipc2023-learning.github.io/talk.pdf).

### robot-localization — single result

The official Aachen submission identifies the exact SuperGlue outdoor pipeline and reports 86.7% night recall at the first localization threshold.

A 2020 camera-pose benchmark with fixed map and retrieval settings. It does not establish full robot localization performance or a current leader.

TR: Resmî Aachen kaydı tam SuperGlue outdoor hattını tanımlar ve ilk konumlandırma eşiğinde %86,7 gece geri çağırma bildirir. Sabit harita ve geri getirme ayarlarıyla 2020 kamera pozu benchmark’ıdır. Tam robot konumlandırma performansı veya güncel liderlik belirlemez.

**hloc · Aachen night camera localization** — Recall at 0.25 m / 2° (higher is better), proxy. Publication: 2020-07-19.

| Release | Published value | Configuration |
|---|---:|---|
| [hloc · SuperPoint + SuperGlue outdoor](https://github.com/magicleap/SuperGluePretrainedNetwork/tree/ddcf11f42e7e0732a0c4607648f9448ea8d73590/models/weights) | 86.7 % | Named release |

NetVLAD Pitts-30k top-50 retrieval, 4,096 SuperPoint keypoints, NMS 3, 1,024-pixel images and SuperGlue outdoor. Geometric pose recovery uses the reference map.

Camera relocalization is a proxy for robot localization. Camera-to-robot calibration, map frame and online tracking are additional requirements; this is not robot trajectory or SLAM drift accuracy.

Source: [Aachen benchmark · SuperPoint + SuperGlue submission](https://www.visuallocalization.net/details/10931/) · Submission 10931 · night / first threshold.

Research trail: [hloc historical result and configuration table](https://github.com/cvg/Hierarchical-Localization/blob/9895a77ea0fc4bc323e421fe36a4a84952881a48/README.md), [Aachen benchmark · SuperPoint + SuperGlue submission](https://www.visuallocalization.net/details/10931/).

### robot-motion-planning — single result

The released Neural Motion Planner pipeline reports 95.83% success on 48 real-world free-hand tasks when test-time optimization is enabled.

The base policy alone scores 66.67%. The MPiNets baseline result is not assigned to the catalogue’s different hybrid checkpoint without an exact artifact match.

TR: Yayımlanan Neural Motion Planner hattı, test zamanı optimizasyonu açıkken 48 gerçek dünya serbest el görevinde %95,83 başarı bildirir. Taban politika tek başına %66,67 alır. MPiNets taban çizgi sonucu, tam dosya eşleşmesi olmadan katalogdaki farklı hybrid ağırlığına atanmaz.

**Neural Motion Planner · real world** — Success rate (higher is better), direct. Publication: 2024-09.

| Release | Published value | Configuration |
|---|---:|---|
| [Neural Motion Planner · released policy](https://huggingface.co/mihdalal/NeuralMP/tree/494c25ee32469374f2d6ac68a1d04e71d627a1fa) | 95.83 % | Policy + test-time optimization |

Published physical evaluation with the full planning and vision-based collision-checking pipeline. The provided release supports the test-time optimization mode.

Without test-time optimization the paper reports 66.67%, not 95.83%. These are the authors’ robot experiments; no robot was operated here and the score is not a safety guarantee.

Source: [Neural Motion Planner · real-world test results](https://mihdalal.github.io/neuralmotionplanner/resources/paper.pdf) · Table I · Ours / Avg.

Research trail: [Neural Motion Planner · released inference system](https://github.com/mihdalal/neuralmotionplanner/blob/5b1e7095c8031b4f011806ac2a58bbe80a2292e6/README.md), [Neural Motion Planner · real-world test results](https://mihdalal.github.io/neuralmotionplanner/resources/paper.pdf), [Neural Motion Planner · released policy · model card](https://huggingface.co/mihdalal/NeuralMP/blob/494c25ee32469374f2d6ac68a1d04e71d627a1fa/README.md).

## Verification

- `PLAYWRIGHT_PORT=4321 npm run validate:codex`: passed. Includes canonical data validation, ESLint, TypeScript, 151 Vitest tests, 7 script tests, deterministic static export, 54 browser checks and `git diff --check`.
- Manual browser inspection of both maps at 2560, 1920 and 390 px: page/viewer widths 2512, 1872 and 362 px respectively; no document overflow and no page errors. Screenshots inspected.
- The two map pages share the fluid-width rule; selected detail panels remain usable beside the map on desktop and below it on mobile.
- 24 pinned GitHub text paths were re-fetched successfully; model metadata and primary pages were inspected during research. UDPipe’s persistent handle resolved to the named 2.17 release. No comprehensive external-link uptime guarantee is implied.
- Production publication is verified separately against the deployment commit and live site; local results above do not themselves prove deployment.
