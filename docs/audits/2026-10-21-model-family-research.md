# Model-family research — 2026-10-21

All twenty previously unmapped concepts were researched. Sixteen releases now supply concrete examples across all fifty concepts. This is a source and artifact review, not an inference benchmark or a claim of current superiority. Historical releases were selected when they document the actual architecture, training stage or parameters most clearly.

Önceden eşleşmeyen yirmi kavramın tamamı araştırıldı. On altı sürüm, elli kavramın tamamında somut örnekler sağlıyor. Bu, kaynak ve dosya incelemesidir; çıkarım karşılaştırması veya güncel üstünlük iddiası değildir. Tarihsel sürümler, gerçek mimariyi, eğitim aşamasını veya parametreleri en açık belgeledikleri durumlarda seçildi.

## Evidence boundaries / Kanıt sınırları

- Membership evidence and task evidence are independent. / Üyelik ve görev kanıtları bağımsızdır.
- Statistical tables and learned rules are labeled explicitly. A representation or nonparametric algorithm does not acquire neural weights by association. / İstatistiksel tablolar ve öğrenilmiş kurallar açıkça etiketlenir. Bir temsil veya parametrik olmayan algoritma, ilişkilendirilerek sinir ağı ağırlığı kazanmaz.
- GitHub/Hugging Face artifacts use observed commit revisions. Glow and JEM use publisher-hosted files with observed sizes and ETags; kNN-VC records the actual v0.1 release assets. These are not claimed to be immutable or cryptographically verified. / GitHub ve Hugging Face dosyaları gözlenen commit sürümlerini kullanır. Glow ve JEM için yayıncı dosyalarının gözlenen boyutları ve ETag’leri, kNN-VC için gerçek v0.1 sürüm dosyaları kaydedilir. Bunların değişmez veya kriptografik doğrulanmış olduğu iddia edilmez.
- Repository and model-specific license declarations are distinguished. / Depo lisansı ve modele özel lisans beyanı ayrılır.
- The exact WN18RR rules, ASIA probability tables and BRISQUE model declaration were inspected. No model inference or benchmark reproduction was performed. / Tam WN18RR kuralları, ASIA olasılık tabloları ve BRISQUE model beyanı incelendi. Model çıkarımı veya karşılaştırma tekrarı yapılmadı.

## Research register / Araştırma dökümü

### Logical Representations

A representation is not itself a pretrained network. Here the concrete artifact is a learned first-order WN18RR rule set; it covers a restricted relational language, not all propositional or first-order reasoning.

Bir temsil kendi başına ön eğitimli ağ değildir. Buradaki somut dosya, öğrenilmiş birinci dereceden WN18RR kural kümesidir; tüm önermesel veya birinci dereceden akıl yürütmeyi değil sınırlı ilişkisel dili kapsar.

- [AnyBURL · WN18RR learned rules](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md) · [AnyBURL · WN18RR learned rules — published parameters](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/data/wnrr/anyburl-rules-c5-3600) · `member`
- [AnyBURL · WN18RR learned rules — release documentation](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md) — University of Mannheim / PyClause
- [PyClause — first-order atoms, variables and rule bodies](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/docs/data/rule_types.rst) — University of Mannheim

### Rule-Based Models

A learned rule file is available, so this concept need not remain empty. Rules and support counts are the reusable model parameters; another domain needs its own facts, vocabulary and usually new rules.

Öğrenilmiş kural dosyası bulunduğundan kavramın boş kalması gerekmez. Kurallar ve destek sayıları yeniden kullanılabilir model parametreleridir; başka alan kendi olgularını, sözlüğünü ve çoğunlukla yeni kuralları gerektirir.

- [AnyBURL · WN18RR learned rules](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md) · [AnyBURL · WN18RR learned rules — published parameters](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/data/wnrr/anyburl-rules-c5-3600) · `member`
- [AnyBURL · WN18RR learned rules — release documentation](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md) — University of Mannheim / PyClause
- [PyClause — ranking example using the exact WN18RR rule artifact](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/examples/demo-ranking.py) — University of Mannheim

### Linear & Logistic Models

fastText provides a released linear-classifier example for language identification. The feature vocabulary and class set are fixed; its weights are not a generic classifier for arbitrary tables.

fastText, dil tanıma için yayımlanmış doğrusal sınıflandırıcı örneği sağlar. Özellik sözlüğü ve sınıflar sabittir; ağırlıkları keyfi tablolar için genel sınıflandırıcı değildir.

- [fastText lid218e](https://huggingface.co/facebook/fasttext-language-identification) · [fastText lid218e — checkpoint files](https://huggingface.co/facebook/fasttext-language-identification/tree/3af127d4124fc58b75666f3594bb5143b9757e78) · `member`
- [fastText lid218e — model card](https://huggingface.co/facebook/fasttext-language-identification) — Meta
- [fastText — rank-constrained linear classifier](https://arxiv.org/abs/1607.01759) — Joulin et al. / FAIR

### Kernel Methods

A ready RBF-SVR exists in OpenCV’s BRISQUE release. Its support vectors and scaling are specific to image-quality features; reuse with unrelated features would be invalid.

OpenCV’nin BRISQUE sürümünde hazır RBF-SVR vardır. Destek vektörleri ve ölçekleme görüntü kalitesi özelliklerine özgüdür; ilişkisiz özelliklerle yeniden kullanım geçersiz olur.

- [BRISQUE · LIVE-R2 RBF-SVR](https://github.com/opencv/opencv_contrib/blob/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/README.md) · [BRISQUE · LIVE-R2 RBF-SVR — published parameters](https://github.com/opencv/opencv_contrib/tree/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/samples) · `member`
- [BRISQUE · LIVE-R2 RBF-SVR — release documentation](https://github.com/opencv/opencv_contrib/blob/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/README.md) — OpenCV
- [BRISQUE — serialized RBF kernel, support vectors and coefficients](https://github.com/opencv/opencv_contrib/blob/eca97a4adb2fa32afc82478947d7f049fce57ee1/modules/quality/samples/brisque_model_live.yml) — OpenCV

### Decision Trees & Ensembles

dlib publishes the trained five-landmark regression-tree ensemble. This fills the family with a narrow ready model; it does not make the tree ensemble transferable to arbitrary prediction targets.

dlib eğitilmiş beş noktalı regresyon ağacı topluluğunu yayımlar. Aileye dar kapsamlı hazır model sağlar; ağaç topluluğunu keyfi tahmin hedeflerine aktarılabilir yapmaz.

- [dlib · 5-point face landmarks](https://github.com/davisking/dlib-models/blob/fd81b6308a6a73d4ce08859eb2f4b628a21e27a2/README.md) · [dlib · 5-point face landmarks — published parameters](https://github.com/davisking/dlib-models/blob/fd81b6308a6a73d4ce08859eb2f4b628a21e27a2/shape_predictor_5_face_landmarks.dat.bz2) · `member`
- [dlib · 5-point face landmarks — release documentation](https://github.com/davisking/dlib-models/blob/fd81b6308a6a73d4ce08859eb2f4b628a21e27a2/README.md) — Davis King
- [dlib — exact five-point training program](https://github.com/davisking/dlib/blob/9dfc591c950a45f7cdc399b961473927da4e892f/tools/archive/train_face_5point_model.cpp) — Davis King
- [dlib shape predictor — ensemble of regression trees](https://github.com/davisking/dlib/blob/9dfc591c950a45f7cdc399b961473927da4e892f/dlib/image_processing/shape_predictor_trainer_abstract.h) — Davis King

### Nearest-Neighbor Models

There are no learned kNN weights to download. kNN-VC is a documented complete pipeline with released encoder/vocoder weights; its neighbor set comes from the required target-speaker audio. The relation is explicitly a component.

İndirilecek öğrenilmiş kNN ağırlıkları yoktur. kNN-VC, kodlayıcı/vokoder ağırlıkları yayımlanmış belgeli tam hattır; komşu kümesi gerekli hedef konuşmacı sesinden gelir. İlişki açıkça bileşen olarak işaretlidir.

- [kNN-VC · prematched HiFi-GAN](https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/README.md) · [kNN-VC · prematched HiFi-GAN — v0.1 checkpoint release](https://github.com/bshall/knn-vc/releases/tag/v0.1) · `component`
- [kNN-VC · prematched HiFi-GAN — model and inference documentation](https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/README.md) — Baas, van Niekerk & Kamper
- [kNN-VC — exact encoder and vocoder release assets](https://github.com/bshall/knn-vc/blob/c616845c4e309e24d5927f15adbdf277a3d65358/hubconf.py) — Baas, van Niekerk & Kamper

### Bayesian Networks

The downloadable ASIA network includes probability tables. These are published benchmark parameters rather than a generally pretrained or clinically validated predictor. Its named variables must match.

İndirilebilir ASIA ağı olasılık tablolarını içerir. Bunlar genel ön eğitimli veya klinik doğrulanmış tahminci değil, yayımlanmış karşılaştırma parametreleridir. Adlandırılmış değişkenleri eşleşmelidir.

- [ASIA · parameterized Bayesian network](https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/README.md) · [ASIA · parameterized Bayesian network — published parameters](https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/discrete/asia.bif.gz) · `member`
- [ASIA · parameterized Bayesian network — release documentation](https://github.com/pgmpy/example_models/blob/920f4e03fce2a319af0fbc8dc6fad1ac99ff4318/README.md) — bnlearn / pgmpy
- [ASIA — benchmark structure and parameters](https://www.bnlearn.com/bnrepository/discrete-small.html#asia) — bnlearn / Marco Scutari

### Hidden Markov Models

The English acoustic checkpoint provides a concrete HMM example. Standalone transcription still needs a compatible decoder, language model and pronunciation dictionary, all documented by PocketSphinx.

İngilizce akustik ağırlıkları somut HMM örneği sağlar. Metne dönüştürme ayrıca PocketSphinx’in belgelediği uyumlu kod çözücü, dil modeli ve telaffuz sözlüğünü gerektirir.

- [PocketSphinx · US English HMM-GMM](https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us/en-us/README) · [PocketSphinx · US English HMM-GMM — published parameters](https://github.com/cmusphinx/pocketsphinx/tree/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us) · `component`
- [PocketSphinx · US English HMM-GMM — release documentation](https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us/en-us/README) — CMUSphinx / Alpha Cephei
- [PocketSphinx — default models and speech recognition](https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/README.md) — CMUSphinx
- [CMUSphinx — HMM states and Gaussian acoustic models](https://cmusphinx.github.io/wiki/tutorialconcepts/) — CMUSphinx

### Gaussian Mixture Models

The published acoustic GMM is usable within its HMM recognizer. It is not a pretrained clustering solution for arbitrary observations; new domains require fitted distributions.

Yayımlanmış akustik GMM, kendi HMM tanıyıcısında kullanılabilir. Keyfi gözlemler için ön eğitimli kümeleme çözümü değildir; yeni alanlar uyarlanmış dağılımlar gerektirir.

- [PocketSphinx · US English HMM-GMM](https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us/en-us/README) · [PocketSphinx · US English HMM-GMM — published parameters](https://github.com/cmusphinx/pocketsphinx/tree/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us) · `component`
- [PocketSphinx · US English HMM-GMM — release documentation](https://github.com/cmusphinx/pocketsphinx/blob/f20ff1b7a5db64c5e892a798479e20df86e79a35/model/en-us/en-us/README) — CMUSphinx / Alpha Cephei
- [CMUSphinx — HMM states and Gaussian acoustic models](https://cmusphinx.github.io/wiki/tutorialconcepts/) — CMUSphinx

### Linear Factor Models

GloVe supplies released log-bilinear latent factors. This is a related factor-model example, not PCA. A ready PCA transform for arbitrary feature schemas cannot be inferred from these word vectors.

GloVe yayımlanmış log-bilineer gizli faktörler sağlar. İlişkili faktör modeli örneğidir, PCA değildir. Bu kelime vektörlerinden keyfi özellik şemaları için hazır PCA dönüşümü çıkarılamaz.

- [GloVe 6B · 300-dimensional word factors](https://huggingface.co/stanfordnlp/glove) · [GloVe 6B · 300-dimensional word factors — checkpoint files](https://huggingface.co/stanfordnlp/glove/tree/1db2080b2d94def6e5b0386a523102f9d8849e9d) · `member`
- [GloVe 6B · 300-dimensional word factors — model card](https://huggingface.co/stanfordnlp/glove) — Stanford NLP
- [GloVe — global matrix-factorization objective](https://nlp.stanford.edu/pubs/glove.pdf) — Pennington, Socher & Manning

### Multilayer Perceptrons

MLP-Mixer is an all-MLP vision architecture with an actual released classifier checkpoint. This avoids labeling every network that merely contains a dense layer as an MLP model.

MLP-Mixer, gerçekten yayımlanmış sınıflandırıcı ağırlıkları olan tam MLP görsel mimarisidir. Yalnızca yoğun katman içeren her ağı MLP modeli sayma hatasından kaçınılır.

- [MLP-Mixer B/16 · ImageNet](https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k) · [MLP-Mixer B/16 · ImageNet — checkpoint files](https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k/tree/0006300d604941f96f16cb7d229137363e1b2ac6) · `member`
- [MLP-Mixer B/16 · ImageNet — model card](https://huggingface.co/timm/mixer_b16_224.goog_in21k_ft_in1k) — Google Research / timm
- [MLP-Mixer — an all-MLP architecture for vision](https://arxiv.org/abs/2105.01601) — Tolstikhin et al. / Google Research

### Graph Neural Networks

CHGNet’s versioned crystal-potential checkpoint gives a concrete graph-network example. Node classification and unrelated graph tasks are not implied by its architecture.

CHGNet’in sürümlü kristal potansiyeli ağırlıkları somut graf ağı örneğidir. Düğüm sınıflandırma ve ilişkisiz graf görevleri mimariden çıkarılamaz.

- [CHGNet 0.3.0 · MPtrj](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md) · [CHGNet 0.3.0 · MPtrj — published parameters](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/chgnet_0.3.0_e29f68s314m37.pth.tar) · `member`
- [CHGNet 0.3.0 · MPtrj — release documentation](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md) — Ceder Group / Berkeley Lab
- [CHGNet — crystal graphs and structure prediction](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/README.md) — Ceder Group / Berkeley Lab

### State-Space Networks

The released Mamba2 2.7B base checkpoint is explicitly documented as an SSM architecture. Its evidence is separate from hybrid recurrent/attention models and does not establish assistant behavior.

Yayımlanmış Mamba2 2.7B temel ağırlıkları açıkça SSM mimarisi olarak belgelenir. Kanıtı hibrit yinelemeli/dikkat modellerinden ayrıdır ve asistan davranışını kanıtlamaz.

- [Mamba2 2.7B](https://huggingface.co/state-spaces/mamba2-2.7b) · [Mamba2 2.7B — checkpoint files](https://huggingface.co/state-spaces/mamba2-2.7b/tree/99b226cc377d131cccc610ed4346db564f381f1e) · `member`
- [Mamba2 2.7B — model card](https://huggingface.co/state-spaces/mamba2-2.7b) — State Spaces
- [Mamba2 — architecture, checkpoints and generation](https://github.com/state-spaces/mamba/blob/e9594ce1c732d97440f0332fdc43170a2294dbfa/README.md) — Gu & Dao

### Unsupervised Learning

Unconditional Glow distribution learning supplies a concrete unsupervised example. The model learns image statistics; the demo’s later attribute manipulation does not imply supervised pretraining.

Koşulsuz Glow dağılım öğrenmesi somut gözetimsiz örnek sağlar. Model görüntü istatistiklerini öğrenir; demonun sonraki nitelik değiştirme işlemi gözetimli ön eğitim anlamına gelmez.

- [Glow · CelebA-HQ 256](https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/README.md) · [Glow · CelebA-HQ 256 — publisher checkpoint](https://openaipublic.azureedge.net/glow-demo/large3/graph_optimized.pb) · `member`
- [Glow · CelebA-HQ 256 — release documentation](https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/README.md) — OpenAI
- [Glow — invertible flow and likelihood training](https://arxiv.org/abs/1807.03039) — Kingma & Dhariwal

### Semi-Supervised Learning

Meta’s SSL release explicitly combines labeled-teacher supervision with unlabeled images. The selected timm artifact identifies this training recipe; generic pretraining plus fine-tuning alone was not used as evidence.

Meta’nın SSL sürümü, etiketli öğretmen gözetimini etiketsiz görüntülerle açıkça birleştirir. Seçilen timm dosyası bu eğitim tarifini belirtir; yalnızca genel ön eğitim ve ince ayar kanıt sayılmamıştır.

- [ResNet-50 SSL · YFCC100M → ImageNet](https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k) · [ResNet-50 SSL · YFCC100M → ImageNet — checkpoint files](https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k/tree/2bfbb0e194aa59bf9f8c88d3fd3719ed3b7420a5) · `member`
- [ResNet-50 SSL · YFCC100M → ImageNet — model card](https://huggingface.co/timm/resnet50.fb_ssl_yfcc100m_ft_in1k) — Meta / timm
- [ResNet SSL — teacher, unlabeled data and model license](https://github.com/facebookresearch/semi-supervised-ImageNet1K-models/blob/a189fd0ab046bc0eb13c7a24098be8367d3da2f1/README.md) — Meta

### Normalizing Flows

The original Glow demo’s hosted graph is still available. It has no immutable Git artifact revision; the catalogue records its observed file size and ETag and displays that limitation. Legacy runtime and domain constraints remain.

Özgün Glow demosunun barındırılan grafına hâlâ erişiliyor. Dosyanın değişmez Git sürümü yoktur; katalog gözlenen boyutu ve ETag’i kaydeder, bu sınırı gösterir. Eski çalışma ortamı ve alan kısıtları geçerlidir.

- [Glow · CelebA-HQ 256](https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/README.md) · [Glow · CelebA-HQ 256 — publisher checkpoint](https://openaipublic.azureedge.net/glow-demo/large3/graph_optimized.pb) · `member`
- [Glow · CelebA-HQ 256 — release documentation](https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/README.md) — OpenAI
- [Glow — official demo weight and manipulation-vector URLs](https://github.com/openai/glow/blob/91b2c577a5c110b2b38761fc56d81f7d87f077c1/demo/script.sh) — OpenAI

### Energy-Based Models

JEM releases a CIFAR-10 checkpoint trained with an explicit energy objective. The publisher-hosted file is observable but not Git-pinned; an ordinary classifier was not relabeled as an EBM.

JEM açık enerji hedefiyle eğitilmiş CIFAR-10 ağırlıkları yayımlar. Yayıncıdaki dosya gözlenebilir ancak Git sürümüne sabitli değildir; sıradan sınıflandırıcı yeniden EBM diye etiketlenmemiştir.

- [JEM · CIFAR-10](https://github.com/wgrathwohl/JEM/blob/3d01161547109b464eee87304f07b2dac8519d03/README.md) · [JEM · CIFAR-10 — publisher checkpoint](https://www.cs.toronto.edu/~wgrathwohl/CIFAR10_MODEL.pt) · `member`
- [JEM · CIFAR-10 — release documentation](https://github.com/wgrathwohl/JEM/blob/3d01161547109b464eee87304f07b2dac8519d03/README.md) — Grathwohl et al.
- [JEM — joint classifier and energy objective](https://arxiv.org/abs/1912.03263) — Grathwohl et al.

### Graphs

Periodic crystal graphs are supported by CHGNet. A modality label does not imply support for every graph task; the shared task edge is crystal-energy regression.

Periyodik kristal grafları CHGNet tarafından desteklenir. Veri türü etiketi tüm graf görevlerini kapsamaz; ortak görev ilişkisi kristal enerjisi regresyonudur.

- [CHGNet 0.3.0 · MPtrj](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md) · [CHGNet 0.3.0 · MPtrj — published parameters](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/chgnet_0.3.0_e29f68s314m37.pth.tar) · `member`
- [AnyBURL · WN18RR learned rules](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/README.md) · [AnyBURL · WN18RR learned rules — published parameters](https://github.com/symbolic-kg/PyClause/blob/87c82ec3dd904767741a493dcbdf7605377d4535/data/wnrr/anyburl-rules-c5-3600) · `member`
- [CHGNet 0.3.0 · MPtrj — release documentation](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/chgnet/pretrained/0.3.0/README.md) — Ceder Group / Berkeley Lab
- [CHGNet — crystal graphs and structure prediction](https://github.com/CederGroupHub/chgnet/blob/b9a6c15860237297a5a5169660e83b2e61a78e76/README.md) — Ceder Group / Berkeley Lab

### RL from Human Feedback

Llama 3.1 Instruct’s own card explicitly names RLHF. This mapping does not infer human preference training from generic reinforcement learning, reward models or verifier feedback.

Llama 3.1 Instruct’ın kendi kartı RLHF’yi açıkça adlandırır. Bu eşleştirme genel pekiştirmeli öğrenme, ödül modelleri veya doğrulayıcı geri bildiriminden insan tercihli eğitim çıkarmaz.

- [Llama 3.1 8B Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) · [Llama 3.1 8B Instruct — checkpoint files](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct/tree/0e9e39f249a16976918f6564b8830bc894c89659) · `member`
- [Llama 3.1 8B Instruct — model card](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) — Meta

### Direct Preference Optimization

The named OLMo DPO-stage checkpoint documents direct preference training. Its later RLVR sibling is kept separate, including the evaluation claims.

Adı verilen OLMo DPO aşaması ağırlıkları doğrudan tercih eğitimini belgeler. Sonraki RLVR kardeşi, değerlendirme iddiaları dahil ayrı tutulur.

- [OLMo 2 7B DPO · 1124](https://huggingface.co/allenai/OLMo-2-1124-7B-DPO) · [OLMo 2 7B DPO · 1124 — checkpoint files](https://huggingface.co/allenai/OLMo-2-1124-7B-DPO/tree/e34ea60adff2e575f4fe7569eaffd1b28509b6fd) · `member`
- [OLMo 2 7B DPO · 1124 — model card](https://huggingface.co/allenai/OLMo-2-1124-7B-DPO) — Ai2

## Verification / Doğrulama

All 72 newly registered source URLs returned HTTP 200 during this review. Public landing pages for gated models do not imply anonymous access to their weights. Automated catalogue validation checks source resolution, exact SVG coverage, revision consistency, released artifact metadata and reverse task traversal. / Yeni kaydedilen 72 kaynak URL’sinin tamamı inceleme sırasında HTTP 200 döndürdü. Erişim koşullu modellerin herkese açık tanıtım sayfaları, ağırlıklarına anonim erişim anlamına gelmez. Otomatik katalog doğrulaması kaynak çözümlemeyi, tam SVG kapsamını, sürüm tutarlılığını, yayımlanmış dosya kimliğini ve ters görev geçişlerini kontrol eder.
