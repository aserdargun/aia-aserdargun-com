# Task taxonomy gap research — 2026-10-21

## Scope and evidence / Kapsam ve kanıt

The starting snapshot had 12 empty tasks out of 85. This review adds 11 published model/parameter/pipeline records, 12 task edges and 47 primary observations. The resulting catalogue contains 77 entries, 115 task edges, 224 task-model sources and 371 non-exclusive family memberships. All 85 tasks now have candidates, including pre-existing adaptation-only entries. This is coverage, not proof that every task has a universally ready model or the best current model.

Başlangıçta 85 görevin 12’si boştu. Araştırma, yayımlanmış 11 model/parametre/işlem hattı kaydı, 12 görev ilişkisi ve 47 birincil gözlem ekler. Son katalog 77 kayıt, 115 görev ilişkisi, 224 görev-model kaynağı ve birbirini dışlamayan 371 aile üyeliği içerir. Önceden yalnızca uyarlama önerisi olanlar dahil, 85 görevin tamamında aday bulunur. Bu, kapsama bilgisidir; her görev için evrensel hazır model veya güncel en iyi model kanıtı değildir.

Acceptance requires an identified published artifact, a primary source linking that artifact to the task, and visible license scope. Eight of the 12 new task matches are specialist checkpoints; four require a documented pipeline. Public files with unclear artifact-specific licensing are disclosed as such. Repository licenses are not silently promoted to weight licenses. No new numerical performance ranking is introduced.

Kabul için belirli bir yayımlanmış dosya, dosyayı göreve bağlayan birincil kaynak ve görünür lisans kapsamı gerekir. Yeni 12 eşleşmenin sekizi uzman ağırlık sürümü, dördü belgelenmiş işlem hattıdır. Dosyaya özel lisansı belirsiz olan herkese açık kayıtlar açıkça belirtilir. Depo lisansları sessizce ağırlık lisansına dönüştürülmez. Yeni sayısal başarım sıralaması eklenmez.

### What was checked / Kontrol edilenler

- Author repositories, release instructions, inference/evaluation code, exact model configurations and license text.
- Hugging Face revisions and binary-file responses, Git trees and checkpoint responses, Google Drive download metadata, PyPI archive contents, and Zenodo file metadata.
- The AutoCPD wheel was read as a ZIP archive to confirm both SavedModel files and `Demo/label_dict.npy`. The small GOOSE archive was read as ZIP/JSON to confirm actual learned coefficients. Neither package nor model code was executed.
- Checkpoint loading, neural inference, benchmark reproduction, physical robot execution and full binary integrity checks were not performed. Publisher checksums shown in the UI were not independently recomputed.

- Yazar depoları, sürüm yönergeleri, çıkarım/değerlendirme kodu, tam model ayarları ve lisans metinleri incelendi.
- Hugging Face sürümleri ve ikili dosya yanıtları, Git ağaçları ve ağırlık yanıtları, Google Drive indirme üst verileri, PyPI arşiv içeriği ve Zenodo dosya üst verileri kontrol edildi.
- AutoCPD wheel paketi ZIP olarak okunup SavedModel dosyaları ve `Demo/label_dict.npy` doğrulandı. Küçük GOOSE arşivi ZIP/JSON olarak okunup gerçek öğrenilmiş katsayılar görüldü. Paket veya model kodu çalıştırılmadı.
- Ağırlık yükleme, sinir ağı çıkarımı, benchmark tekrarı, fiziksel robot yürütmesi ve tam ikili dosya bütünlük kontrolü yapılmadı. Arayüzde gösterilen yayıncı sağlama toplamları bağımsız yeniden hesaplanmadı.

## Task decisions / Görev kararları

### Top-k Recommendation

**P5 Beauty Small** · `specialist`

A published recommender checkpoint is available for Amazon Beauty. It predicts identifiers from that catalogue, not arbitrary new products. Preserve the author’s user/item mapping, prompts, candidate validation and ranking protocol. New items or users outside the trained representation require adaptation; this release is a reproducible historical reference, not a current universal leader.

Amazon Beauty için yayımlanmış önerici ağırlıkları var. Bu model, eğitim kataloğundaki kimlikleri tahmin eder; herhangi bir yeni ürün kataloğunu doğrudan desteklemez. Yazarın kullanıcı/ürün eşlemesi, istemleri, aday doğrulaması ve sıralama protokolü korunmalıdır. Eğitimdeki gösterim dışında kalan ürün veya kullanıcılar uyarlama gerektirir; bu sürüm tarihsel bir referanstır, güncel evrensel lider değildir.

Primary evidence / Birincil kanıt:

- [P5 Beauty Small — author-linked model distribution](https://huggingface.co/makitanikaze/P5_beauty_small)
- [P5 — author release and Hugging Face distribution link](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/README.md)
- [P5 Beauty Small — rating and top-k evaluation notebook](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb)
- [P5 Beauty Small — T5 architecture and training tasks](https://huggingface.co/makitanikaze/P5_beauty_small/blob/8d67aef9aea18955cfb038bbbf48f764104ca09a/config.json)

### Rating Prediction

**P5 Beauty Small** · `specialist`

This is an explicit rating-prediction checkpoint, rather than a generic language model asked to guess a score. Ratings depend on the Amazon Beauty user/item IDs, prompt and numerical postprocessing. A different rating scale or commercial catalogue needs new data and validation; generated scores are not calibrated probabilities.

Bu, genel bir dil modelinden puan tahmini istemenin ötesinde, puan tahmini hedefiyle eğitilmiş bir sürümdür. Puanlar Amazon Beauty kullanıcı/ürün kimliklerine, isteme ve sayısal son işlemeye bağlıdır. Farklı puan ölçeği veya ürün kataloğu yeni veri ve doğrulama gerektirir; üretilen puanlar kalibre edilmiş olasılıklar değildir.

Primary evidence / Birincil kanıt:

- [P5 Beauty Small — author-linked model distribution](https://huggingface.co/makitanikaze/P5_beauty_small)
- [P5 — author release and Hugging Face distribution link](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/README.md)
- [P5 Beauty Small — rating and top-k evaluation notebook](https://github.com/jeykigung/P5/blob/1fa28ba7bb3946da94677013cc88e392cfc760ca/notebooks/test_beauty_small.ipynb)
- [P5 Beauty Small — T5 architecture and training tasks](https://huggingface.co/makitanikaze/P5_beauty_small/blob/8d67aef9aea18955cfb038bbbf48f764104ca09a/config.json)

### Clustering

**SCAN · CIFAR-10 (SCAN-loss)** · `specialist`

A real trained clustering model is available. Its cluster identities and number are fixed by the CIFAR-10 experiment; they are not reusable semantic labels for arbitrary data. For a new dataset or cluster count, fit the clustering procedure again. Generic k-means implementations alone would not constitute released trained weights.

Gerçek bir eğitilmiş kümeleme modeli mevcut. Küme kimlikleri ve sayısı CIFAR-10 deneyine bağlıdır; herhangi bir veri için yeniden kullanılabilir anlamsal etiketler değildir. Yeni veri kümesi veya küme sayısı için kümeleme süreci yeniden eğitilir. Yalnızca genel k-means uygulaması sunmak, yayımlanmış eğitilmiş ağırlık sayılmaz.

Primary evidence / Birincil kanıt:

- [SCAN CIFAR-10 — clustering model zoo and inference](https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/README.md)
- [SCAN-loss CIFAR-10 — scan_cifar-10.pth.tar](https://drive.google.com/file/d/1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0/view)
- [SCAN — noncommercial license](https://github.com/wvangansbeke/Unsupervised-Classification/blob/952ec31eee2c38e7233d8ad3ac0de39bb031877a/LICENSE)

### Dimensionality Reduction

**UvA CIFAR-10 Autoencoder · 128D** · `specialist`

A pretrained nonlinear dimensionality reducer is available for CIFAR-10 images. Its input layout, normalization and latent dimension are fixed; it does not reduce arbitrary spreadsheets or embeddings without retraining. PCA/UMAP implementations require fitting to the target distribution and are not themselves pretrained checkpoints.

CIFAR-10 görüntüleri için önceden eğitilmiş doğrusal olmayan boyut indirgeme modeli mevcut. Girdi düzeni, normalizasyonu ve gizil boyutu sabittir; yeniden eğitim olmadan herhangi bir tabloyu veya gömmeyi indirgeyemez. PCA/UMAP uygulamalarının hedef dağılıma uydurulması gerekir; uygulamanın kendisi hazır ağırlık değildir.

Primary evidence / Birincil kanıt:

- [UvA deep-learning tutorials — released PyTorch models](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/README.md)
- [UvA Tutorial 9 — CIFAR-10 encoder and pretrained checkpoints](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial9/AE_CIFAR10.ipynb)
- [tutorial9/cifar10_128.ckpt — released artifact](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial9/cifar10_128.ckpt)

### Density Estimation

**UvA MNISTFlow · multiscale** · `specialist`

A density-estimation checkpoint is available with an explicit likelihood implementation. It models the MNIST image distribution; discrete-image likelihood is estimated using the tutorial’s dequantization and sampling procedure. This does not establish a density model for arbitrary tabular data or calibrated anomaly detection. The earlier Glow demo entry remains excluded from this task because its exported demo does not expose the full likelihood path.

Açık olabilirlik uygulamasıyla bir yoğunluk kestirim modeli mevcut. MNIST görüntü dağılımını modeller; ayrık görüntü olabilirliği, eğitim materyalindeki dequantization ve örnekleme yordamıyla tahmin edilir. Bu, herhangi bir tablo verisinin yoğunluğunu veya kalibre edilmiş anomali tespitini doğrulamaz. Önceki Glow demo kaydı, dışa aktarılan demosu tam olabilirlik yolunu sunmadığı için bu göreve eklenmedi.

Primary evidence / Birincil kanıt:

- [UvA deep-learning tutorials — released PyTorch models](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/README.md)
- [UvA Tutorial 11 — MNIST normalizing-flow likelihood](https://github.com/phlippe/uvadlc_notebooks/blob/c7d9e18f42fee53bc8925f08ec2358371b1e9200/docs/tutorial_notebooks/tutorial11/NF_image_modeling.ipynb)
- [tutorial11/MNISTFlow_multiscale.ckpt — released artifact](https://github.com/phlippe/saved_models/blob/e38faed1ab83a593d2c90098ea563d32287fc80f/tutorial11/MNISTFlow_multiscale.ckpt)

### Change-Point Detection

**AutoCPD · HASC Demo (0.1.5)** · `pipeline`

Released weights exist for human-activity transitions in HASC accelerometer data. The author’s complete preprocessing and aggregation pipeline is part of the task support. The Git model directory alone lacks the label dictionary required by the demonstration; the checked 0.1.5 wheel contains it. An arbitrary industrial or financial time series needs domain-specific training and evaluation.

HASC ivmeölçer verisindeki insan etkinliği geçişleri için yayımlanmış ağırlıklar var. Yazarın tüm ön işleme ve birleştirme akışı, görev desteğinin parçasıdır. Git model klasörü tek başına demonun istediği etiket sözlüğünü içermiyor; kontrol edilen 0.1.5 wheel paketi bu dosyayı içeriyor. Farklı endüstriyel veya finansal zaman serileri alana özel eğitim ve değerlendirme gerektirir.

Primary evidence / Birincil kanıt:

- [AutoCPD — pretrained HASC demonstration](https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/README.md)
- [AutoCPD — HASC preprocessing and change-point extraction](https://github.com/Jieli12/AutoCPD/blob/a4c244776775e4295ddee241410a85708f6d9a64/test/test_load_pretrained_model.py)
- [AutoCPD 0.1.5 — distribution metadata and published digests](https://pypi.org/pypi/autocpd/0.1.5/json)
- [AutoCPD 0.1.5 — wheel containing HASC model and label dictionary](https://files.pythonhosted.org/packages/1a/85/c3c2af34062ede635d9dd8cc2d45fb6b0835a763ea3a029d77cac27c42ac/autocpd-0.1.5-py3-none-any.whl)

### Node Classification

**GraphAny · Arxiv** · `specialist`

An inductive node classifier with released parameters is available. Target labels are inputs to the linear support predictors even when the learned meta-model is frozen. Supply the graph, compatible features and a labeled support split; do not interpret cross-graph transfer as a guarantee for every unseen graph or a completely unlabeled graph.

Yayımlanmış parametreleri olan bir indüktif düğüm sınıflandırıcısı mevcut. Öğrenilmiş meta-model sabit tutulsa bile hedef etiketler doğrusal destek tahmincilerinin girdisidir. Graf, uygun özellikler ve etiketli destek bölümü sağlanmalıdır; graflar arası aktarım her görülmemiş grafa veya tamamen etiketsiz grafa yönelik başarı garantisi değildir.

Primary evidence / Birincil kanıt:

- [GraphAny Arxiv — released inductive node-classification model](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/README.md)
- [GraphAny — graph features and labeled support-node inputs](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/graphany/data.py)
- [checkpoints/graph_any_arxiv.pt — released artifact](https://github.com/DeepGraphLearning/GraphAny/blob/02c810e9977e89bda66f43ad4e206937af37cf26/checkpoints/graph_any_arxiv.pt)

### Graph Classification

**DGL-LifeSci · GCN canonical Tox21** · `specialist`

A graph-classification checkpoint is available for molecular bioassays. This is a whole-graph output, unlike node classification. Its featurizer, molecular representation and 12 labels are fixed; other graph domains or label sets require a new head, training and evaluation. Repository licensing is recorded separately from unspecified checkpoint-specific terms.

Moleküler biyodeneyler için graf sınıflandırma ağırlıkları mevcut. Düğüm sınıflandırmasından farklı olarak çıktı tüm grafa aittir. Özellik çıkarıcı, moleküler gösterim ve 12 etiket sabittir; başka graf alanları veya etiket kümeleri yeni çıktı katmanı, eğitim ve değerlendirme gerektirir. Depo lisansı, belirtilmemiş ağırlığa özel koşullardan ayrı gösterilir.

Primary evidence / Birincil kanıt:

- [DGL-LifeSci GCN canonical Tox21 — pretrained model registry](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/pretrain/moleculenet/tox21.py)
- [DGL-LifeSci — graph pooling and classification logits](https://github.com/awslabs/dgl-lifesci/blob/be8bc71d29ecf34a9dab7c7bd47c08f3383d9be0/python/dgllife/model/model_zoo/gcn_predictor.py)
- [GCN canonical Tox21 — published checkpoint](https://data.dgl.ai/dgllife/pre_trained/gcn_canonical_tox21.pth)

### Constraint Satisfaction

**HRM · Sudoku Extreme 9×9** · `specialist`

A ready checkpoint exists for a specific CSP: 9×9 Sudoku. It is not a complete solver for arbitrary constraints and does not certify unsatisfiability or guarantee a valid solution. Check each prediction against the original clues and Sudoku constraints. Public weight availability is verified; a separate artifact license was not found in the release, so the repository license must not be presented as explicit weight permission.

Belirli bir kısıt sağlama problemi olan 9×9 Sudoku için hazır ağırlıklar var. Model, herhangi bir kısıt sistemi için eksiksiz çözücü değildir; çözümsüzlük belgesi veya geçerli çözüm garantisi vermez. Her tahmin özgün ipuçları ve Sudoku kısıtlarıyla kontrol edilmelidir. Ağırlıkların herkese açık olduğu doğrulandı; sürümde ayrı dosya lisansı bulunmadığı için depo lisansı, ağırlığa açık kullanım izni olarak sunulmamalıdır.

Primary evidence / Birincil kanıt:

- [HRM Sudoku Extreme — author checkpoint](https://huggingface.co/sapientinc/HRM-checkpoint-sudoku-extreme)
- [HRM — architecture, Sudoku checkpoint and evaluation](https://github.com/sapientinc/HRM/blob/ac15626f8db096a63c775b84c9dc868776a6feda/README.md)
- [HRM Sudoku Extreme — pinned checkpoint and configuration](https://huggingface.co/sapientinc/HRM-checkpoint-sudoku-extreme/tree/fbb4eb883766c31c8e863426460ebaa0ceb1a5f2)
- [HRM — Apache-2.0 repository license](https://github.com/sapientinc/HRM/blob/ac15626f8db096a63c775b84c9dc868776a6feda/LICENSE)

### Classical Planning

**GOOSE · IPC23LT Blocks World** · `pipeline`

A released learned model exists inside a complete classical-planning pipeline. The verified archive targets Blocks World; it does not generate valid plans for arbitrary PDDL domains by itself. New domains need corresponding parameters or training, and the planner still requires domain/problem files. This release uses classical graph features and rank-SVM coefficients; calling it a GNN checkpoint would be incorrect.

Tam klasik planlama akışı içinde yayımlanmış öğrenilmiş bir model mevcut. Doğrulanan arşiv Blocks World alanını hedefler; kendi başına herhangi bir PDDL alanı için geçerli plan üretmez. Yeni alanlar uygun parametre veya eğitim gerektirir; planlayıcı ayrıca alan/problem dosyalarına ihtiyaç duyar. Bu sürüm klasik graf özellikleri ve rank-SVM katsayıları kullanır; GNN ağırlığı olarak sunmak yanlış olur.

Primary evidence / Birincil kanıt:

- [GOOSE — PDDL planning with released learned heuristics](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/README.md)
- [GOOSE — pretrained model versions and benchmark scope](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/README.md)
- [GOOSE — Weisfeiler–Leman features and rank-SVM training](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/configurations/classic.toml)
- [pretrained_models/ipc23lt-blocksworld.model — released artifact](https://github.com/DillonZChen/goose/blob/04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57/pretrained_models/ipc23lt-blocksworld.model)

### Robot Localization

**hloc · SuperPoint + SuperGlue outdoor** · `pipeline`

A source-backed visual-localization pipeline with released weights is available. A matcher alone cannot return a robot’s world pose: it also needs the reference map, calibration, image pairing and geometric solver. Metric robot localization further requires map scale/frame and camera-to-robot extrinsics. This is a camera-based route, not a pretrained solution for every LiDAR, odometry or SLAM setup.

Yayımlanmış ağırlıkları olan kaynaklı bir görsel konumlama akışı mevcut. Eşleştirici tek başına robotun dünya pozunu veremez; referans harita, kalibrasyon, görüntü eşlemesi ve geometrik çözücü gerekir. Metrik robot konumlaması ayrıca harita ölçeği/çerçevesi ve kamera–robot dış kalibrasyonu ister. Bu, kamera tabanlı bir yaklaşımdır; her LiDAR, odometri veya SLAM düzeni için hazır çözüm değildir.

Primary evidence / Birincil kanıt:

- [SuperPoint + SuperGlue outdoor — released visual matching models](https://github.com/magicleap/SuperGluePretrainedNetwork/blob/ddcf11f42e7e0732a0c4607648f9448ea8d73590/README.md)
- [hloc — image-to-map visual localization pipeline](https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/README.md)
- [hloc — calibrated 2D–3D absolute pose estimation](https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/hloc/localize_sfm.py)
- [hloc — SuperGlue outdoor matcher configuration](https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/hloc/match_features.py)
- [hloc — Apache-2.0 code license](https://github.com/cvg/Hierarchical-Localization/blob/c13273bd0ecc2917a35910fd843712a1c6243193/LICENSE)

### Robot Motion Planning

**MPiNets · Hybrid Expert** · `pipeline`

A trained motion-planning policy is available for the documented Franka setup. It is neither a generic planner for any robot morphology nor a guarantee of collision-free motion. Match robot geometry, input coordinates and rollout settings, then independently validate the trajectory. Public checkpoint availability and publisher metadata were checked; no robot execution or model performance test was performed.

Belgelenmiş Franka düzeni için eğitilmiş hareket planlama politikası mevcut. Her robot geometrisine uygun genel planlayıcı veya çarpışmasız hareket garantisi değildir. Robot geometrisi, girdi koordinatları ve yörünge üretme ayarları eşleştirilmeli, ardından yörünge bağımsız doğrulanmalıdır. Ağırlık erişimi ve yayıncı üst verileri kontrol edildi; robot yürütmesi veya model başarım testi yapılmadı.

Primary evidence / Birincil kanıt:

- [Motion Policy Networks — released checkpoint and inference](https://github.com/NVlabs/motion-policy-networks/blob/42ff07bb95bd75f7c7752bf4300eb53698ae099d/README.md)
- [MPiNets — Franka rollout, goals and point-cloud inputs](https://github.com/NVlabs/motion-policy-networks/blob/42ff07bb95bd75f7c7752bf4300eb53698ae099d/mpinets/run_inference.py)
- [MPiNets — publisher archive, file checksum and CC-BY-4.0 license](https://zenodo.org/records/8319949)
- [MPiNets hybrid expert — pretrained checkpoint](https://zenodo.org/records/8319949/files/mpinets_hybrid_expert.ckpt?download=1)

## Exact artifacts / Tam dosyalar

File sizes below are observed download metadata or Git-tree sizes. Git revisions pin repository state; Drive IDs and publisher-hosted URLs do not. The entries preserve this distinction in the UI.

Aşağıdaki dosya boyutları gözlemlenen indirme üst verilerinden veya Git ağacından gelir. Git sürümleri depo durumunu sabitler; Drive kimlikleri ve yayıncı bağlantıları sabitlemez. Arayüz bu ayrımı korur.

| Entry | Artifact | Observed bytes | Identity / access evidence |
| --- | --- | ---: | --- |
| P5 Beauty Small | `pytorch_model.bin` | 243,063,197 | HF revision `8d67aef9aea18955cfb038bbbf48f764104ca09a`; binary HEAD 200 |
| SCAN CIFAR-10 | `scan_cifar-10.pth.tar` | 44,757,714 | Drive file `1v6b6jJY5M4-duSqWpGFmdf9e9T3dPrx0`; author model-zoo link, binary HEAD 200 and Content-Disposition filename |
| UvA Autoencoder | `tutorial9/cifar10_128.ckpt` | 1,882,119 | Git `e38faed1ab83a593d2c90098ea563d32287fc80f`; binary HEAD 200 |
| UvA MNISTFlow | `tutorial11/MNISTFlow_multiscale.ckpt` | 6,975,233 | Same saved-model repository revision; binary HEAD 200 |
| AutoCPD | `autocpd-0.1.5-py3-none-any.whl` | 11,651,829 | Official PyPI distribution; archive inspected; SHA-256 published by PyPI |
| GraphAny | `checkpoints/graph_any_arxiv.pt` | 91,253 | Git `02c810e9977e89bda66f43ad4e206937af37cf26`; binary HEAD 200 |
| DGL-LifeSci | `gcn_canonical_tox21.pth` | 68,744 | Official `data.dgl.ai` host, registry link, binary HEAD 200; ETag recorded |
| HRM Sudoku | `checkpoint` | 109,123,938 | HF revision `fbb4eb883766c31c8e863426460ebaa0ceb1a5f2`; binary HEAD 200 |
| GOOSE | `ipc23lt-blocksworld.model` | 1,372 | Git `04dbe8f27a8ec027626e6c6b5d6e7610b81f9d57`; archive GET 200; JSON contains 12 numerical coefficients and `rank-svm` options |
| hloc components | `superpoint_v1.pth` + `superglue_outdoor.pth` | 5,206,086 + 48,233,807 | Git `ddcf11f42e7e0732a0c4607648f9448ea8d73590`; both binary HEAD 200 |
| MPiNets | `mpinets_hybrid_expert.ckpt` | 228,862,379 | Zenodo record `8319949`; binary HEAD 200; publisher MD5 recorded; artifact license CC-BY-4.0 |

## Exclusions and boundaries / Dışlananlar ve sınırlar

- The umbrella `makitanikaze/P5` repository contains no weights. The author-linked Beauty Small distribution has actual weights and a task configuration. Its original Google Drive download returned 404 during this review; no identity equivalence with that unavailable binary is claimed.
- SCAN pretext-only and self-labeling artifacts are distinct from the selected SCAN-loss file. Their scores are not transferred to this record.
- The earlier Glow demo is not added to density estimation. A published sampler does not establish an accessible likelihood implementation; the UvA checkpoint has that explicit implementation.
- AutoCPD’s Git model directory alone omits the label dictionary used by the example. The checked PyPI wheel includes the complete demo assets.
- The inspected Plansformer/SOFAI model folders did not supply a verified usable weight artifact. They were not admitted. This is a finding about the inspected release paths, not proof that no Plansformer weights exist elsewhere. GOOSE supplies a verifiable alternative.
- The selected GOOSE main-branch release explicitly uses classical learned graph features, not GNNs. Its model archive confirms coefficients and configuration.
- SuperPoint/SuperGlue alone are not robot localizers. The admitted record is the documented hloc pipeline with map, calibration and geometric pose estimation.
- HRM’s code repository is Apache-2.0; the exact HF checkpoint has no separate license declaration. MPiNets code is MIT while its Zenodo archive declares CC-BY-4.0. Both distinctions are visible.

- `makitanikaze/P5` üst deposu ağırlık içermez. Yazarların bağlantı verdiği Beauty Small dağıtımında gerçek ağırlık ve görev yapılandırması vardır. Özgün Google Drive indirmesi incelemede 404 döndürdü; erişilemeyen dosyayla özdeşlik iddiası yoktur.
- SCAN pretext-only ve self-labeling dosyaları seçilen SCAN-loss dosyasından ayrıdır. Puanları bu kayda taşınmaz.
- Önceki Glow demosu yoğunluk kestirimine eklenmez. Yayımlanmış örnekleyici, erişilebilir olabilirlik uygulamasını kanıtlamaz; UvA sürümü açık uygulamayı sağlar.
- AutoCPD’nin Git model klasörü tek başına örneğin kullandığı etiket sözlüğünü içermez. Kontrol edilen PyPI wheel paketi tüm demo dosyalarını içerir.
- İncelenen Plansformer/SOFAI model klasörlerinde doğrulanmış kullanılabilir ağırlık bulunamadı; kataloğa kabul edilmediler. Bu, incelenen sürüm yollarına ilişkin bulgudur, başka yerde Plansformer ağırlığı bulunmadığının kanıtı değildir. GOOSE doğrulanabilir alternatif sağlar.
- Seçilen GOOSE ana dal sürümü GNN yerine klasik öğrenilmiş graf özelliklerini kullanır. Model arşivi katsayı ve yapılandırmayı doğrular.
- SuperPoint/SuperGlue tek başlarına robot konumlayıcı değildir. Kabul edilen kayıt; harita, kalibrasyon ve geometrik poz kestirimiyle belgelenmiş hloc akışıdır.
- HRM kod deposu Apache-2.0’dır; tam HF sürümünde ayrı lisans beyanı yoktur. MPiNets kodu MIT, Zenodo arşivi CC-BY-4.0’dır. Her iki ayrım görünürdür.

## Application validation / Uygulama doğrulaması

The source schema adds publisher checksums and explicit Drive file identities; the task schema adds dated, bilingual research outcomes. Validation rejects dangling citations, contradictory research outcomes, wrong Drive IDs, invalid checksum formats and fabricated Git revisions. Source/model family memberships use the canonical task edges. Original SVGs and prior observation dates are unchanged.

Kaynak şeması yayıncı sağlama toplamlarını ve açık Drive dosya kimliklerini; görev şeması tarihli iki dilli araştırma sonuçlarını ekler. Doğrulama çözülemeyen atıfları, çelişkili araştırma sonuçlarını, yanlış Drive kimliklerini, geçersiz sağlama toplamı biçimlerini ve uydurma Git sürümlerini reddeder. Model aileleri kanonik görev ilişkilerini kullanır. Özgün SVG’ler ve önceki gözlem tarihleri korunur.

Check results are recorded after execution; this document does not treat artifact discovery as successful model inference or deployment proof.

Kontrol sonuçları çalıştırmadan sonra kaydedilir; bu kayıt dosya keşfini başarılı model çıkarımı veya yayın kanıtı saymaz.

### Executed local checks / Çalıştırılmış yerel kontroller

- `PLAYWRIGHT_PORT=4321 npm run validate:codex`: passed; includes canonical data validation, ESLint, TypeScript, 144 Vitest tests, 7 script tests, deterministic static build/export checks, 51 Playwright tests and `git diff --check`.
- All 47 new source URLs returned HTTP 200 during the final reachability check. This supplements, rather than replaces, the primary-content and binary-artifact inspection above.
- An initial browser run exposed two tests that assumed a family contained only one model. Those selectors now target the named model card and the complete suite passes with the expanded catalogue.

- `PLAYWRIGHT_PORT=4321 npm run validate:codex`: geçti; kanonik veri doğrulaması, ESLint, TypeScript, 144 Vitest testi, 7 betik testi, deterministik statik derleme/çıktı kontrolleri, 51 Playwright testi ve `git diff --check` içerir.
- Son erişim kontrolünde yeni 47 kaynak bağlantısının tamamı HTTP 200 döndürdü. Bu kontrol, yukarıdaki birincil içerik ve ikili dosya incelemesini tamamlar; onun yerine geçmez.
- İlk tarayıcı çalışması, bir ailede yalnızca tek model bulunduğunu varsayan iki testi ortaya çıkardı. Seçiciler artık adı belirtilen model kartını hedefler; genişletilmiş katalogla tüm paket geçer.
