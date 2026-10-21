# Artificial intelligence: model and task taxonomy

English reference maps, curated 21 October 2026.

## Scope and method

The maps are an editorial synthesis of established concepts. No source is presented as endorsing this entire hierarchy. The main map uses seven complementary classification axes rather than treating every branch as a mutually exclusive model type. Each concept is linked to an author textbook, original research/benchmark publication, or official documentation. The selection is broad, not exhaustive.

The task map contains 85 selected entries grouped into eight navigation families. Each entry defines an input and an intended output. This operational definition does not guarantee that a model produces a correct result. Specialized scientific tasks are examples, not a complete scientific-domain taxonomy. General tasks and specializations may overlap.

The labels `system` identify end-to-end browser and desktop benchmarks. Their success depends on an agent/system and its environment, not on a standalone model alone. Function calling is shown as a request-to-function-and-arguments prediction task; it does not imply successful execution or authorization.

Source links establish that a concept or task is documented. A recent benchmark establishes a formal task formulation, not necessarily decades of consensus or a universal label. The maps therefore distinguish technical task entries from system tasks without assigning unsupported confidence or consensus scores.

## Corrections to the earlier use-case grouping

- **Everyday assistance:** a broad application label. Replace it with explicit tasks such as question answering, dialogue response generation or planning.
- **Content creation:** a broad application label. Use concrete outputs such as text generation, image generation, text-to-speech or music generation.
- **Localization:** the term is domain-dependent. Language localization is a workflow involving translation and adaptation; **robot localization** is a well-defined spatial estimation task.
- **Evidence synthesis:** an established research workflow, but too broad to serve as a universal atomic AI task. Multi-document summarization, retrieval and extraction are relevant technical components. MS2 [S48] explicitly studies multi-document summarization of medical evidence.

These distinctions do not imply that application labels are invalid. They are unsuitable as interchangeable peers of model architectures, learning paradigms and precisely evaluated technical tasks.

## Model classification axes

### Model Families

What form represents knowledge?

**Symbolic representations**

- **Logical Representations:** Propositional and first-order representations. [S01](#s01)
- **Rule-Based Models:** Explicit rules for inference. [S01](#s01)

**Statistical predictors**

- **Linear & Logistic Models:** Linear predictors and linked probabilities. [S02](#s02)
- **Kernel Methods:** Support vector machines; Gaussian processes. [S02](#s02)
- **Decision Trees & Ensembles:** Trees; random forests; gradient boosting. [S02](#s02)
- **Nearest-Neighbor Models:** Predictions from nearby observations. [S02](#s02)

**Probabilistic & latent-variable models**

- **Bayesian Networks:** Directed probabilistic dependencies. [S01](#s01)
- **Hidden Markov Models:** Latent state transitions and emissions. [S01](#s01)
- **Gaussian Mixture Models:** Mixtures of component distributions. [S02](#s02)
- **Linear Factor Models:** PCA and related latent-factor models. [S05](#s05)

**Neural models**

- **Neural Networks:** Architectures expanded in the next branch. [S05](#s05)

### Neural Architectures

How is computation organized?

**Network structures**

- **Multilayer Perceptrons:** Feedforward, densely connected layers. [S05](#s05)
- **Convolutional Networks:** Shared filters over structured inputs. [S05](#s05)
- **Recurrent Networks:** Recurrent state; LSTM and GRU variants. [S03](#s03)
- **Transformers:** Attention-based representation processing. [S24](#s24)
- **Graph Neural Networks:** Computation over nodes and edges. [S32](#s32)
- **State-Space Networks:** Structured sequence state dynamics. [S25](#s25)

**Transformer configurations**

- **Encoder-Only:** Contextual representations of inputs. [S33](#s33)
- **Decoder-Only:** Causal sequence generation. [S33](#s33)
- **Encoder–Decoder:** Input encoding with output generation. [S33](#s33)

**Cross-cutting computation pattern**

- **Mixture of Experts:** Routing to specialized subnetworks. [S26](#s26)

### Learning Paradigms

Where does the learning signal come from?

**Learning from data**

- **Supervised Learning:** Labeled input–target examples. [S02](#s02)
- **Unsupervised Learning:** Structure without externally supplied targets. [S02](#s02)
- **Semi-Supervised Learning:** Labeled and unlabeled examples together. [S02](#s02)
- **Self-Supervised Learning:** Targets derived from the observations. [S31](#s31)

**Learning through decisions**

- **Reinforcement Learning:** Actions evaluated through reward signals. [S01](#s01)

**Relation between labels**

- **Paradigms Can Be Combined (reading note):** A single model can use several stages. [S35](#s35)
- **Learning Signals Can Overlap (reading note):** These labels are not mutually exclusive.

### Generative Formulations

How is a data distribution represented?

**Selected generative model families**

- **Autoregressive Models:** Factorization into conditional predictions. [S05](#s05)
- **Variational Autoencoders:** Latent variables with variational inference. [S29](#s29)
- **Generative Adversarial Networks:** Generator trained against a discriminator. [S30](#s30)
- **Diffusion Models:** Generation through learned denoising. [S27](#s27)
- **Normalizing Flows:** Invertible distribution transformations. [S28](#s28)
- **Energy-Based Models:** Compatibility encoded by an energy function. [S05](#s05)

**A related training method**

- **Flow Matching:** Vector-field training for continuous flows. [S44](#s44)

**How to interpret this branch**

- **Formulation and Architecture (reading note):** Separate, potentially overlapping axes.

### Modalities & Data

What can the model receive or produce?

**Language and symbols**

- **Text:** Natural-language sequences. [S04](#s04)
- **Code:** Programming-language sequences. [S07](#s07)

**Perceptual inputs and outputs**

- **Images:** Still visual observations. [S04](#s04)
- **Video:** Sequences of visual frames. [S04](#s04)
- **Speech & Audio:** Spoken language and other sounds. [S08](#s08)

**Structured observations**

- **Tabular Data:** Records with defined feature columns. [S02](#s02)
- **Time Series:** Time-indexed measurements. [S10](#s10)
- **Graphs:** Entities connected through relations. [S11](#s11)
- **3D Representations:** Shapes, meshes and spatial fields. [S47](#s47)

**Combined modalities**

- **Multimodal Models:** Several modalities within one model. [S37](#s37)

### Training & Adaptation

How is the model prepared and specialized?

**Training scope and stages**

- **Foundation-Model Pretraining:** Broad training for downstream adaptation. [S37](#s37)
- **Task-Specific Fine-Tuning:** Update parameters for a target task. [S33](#s33)
- **Instruction Tuning:** Supervised learning from instructions. [S35](#s35)

**Parameter-efficient updates**

- **Low-Rank Adaptation (LoRA):** Train small low-rank parameter updates. [S34](#s34)

**Preferences and behavior**

- **RL from Human Feedback:** Reward-based tuning from human preferences. [S35](#s35)
- **Direct Preference Optimization:** Optimize directly from preference pairs. [S36](#s36)

**Knowledge transfer**

- **Knowledge Distillation:** Transfer behavior from teacher to student. [S38](#s38)

### Task Families

What output or outcome is evaluated?

**Detailed in the companion task map**

- **Language & Text (navigation link):** Meaning, structure and generation.
- **Retrieval & Recommendation (navigation link):** Finding and ordering relevant items.
- **Vision, Video & 3D (navigation link):** Visual perception and synthesis.
- **Speech & Audio (navigation link):** Speech, speakers and sound.
- **Code & Programs (navigation link):** Program understanding and synthesis.
- **Data & Time Series (navigation link):** General statistical prediction tasks.
- **Graphs & Scientific Prediction (navigation link):** Graph tasks and selected scientific tasks.
- **Reasoning, Planning & Action (navigation link):** Formal problems and evaluated actions.

**Evaluation boundary**

- **Model / Algorithm Tasks (reading note):** Evaluate a defined input–output mapping. [S04](#s04)
- **System-Level Tasks (reading note):** Evaluate end-to-end task completion. [S19](#s19)

## Task definitions

### Language & Text

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Text Classification | Text → category labels | Model / algorithm | [S13](#s13) |
| Natural Language Inference | Premise + hypothesis → relation | Model / algorithm | [S13](#s13) |
| Named Entity Recognition | Text → named spans and types | Model / algorithm | [S03](#s03) |
| Relation Extraction | Text + entities → relations | Model / algorithm | [S03](#s03) |
| Coreference Resolution | Text → linked mentions | Model / algorithm | [S03](#s03) |
| Part-of-Speech Tagging | Tokens → grammatical tags | Model / algorithm | [S03](#s03) |
| Syntactic Parsing | Sentence → grammatical structure | Model / algorithm | [S03](#s03) |
| Text Generation | Context → generated text | Model / algorithm | [S04](#s04) |
| Machine Translation | Source-language text → target text | Model / algorithm | [S03](#s03) |
| Text Summarization | Document → condensed account | Model / algorithm | [S04](#s04) |
| Multi-document Summarization | Documents → combined summary | Model / algorithm | [S48](#s48) |
| Grammatical Error Correction | Erroneous text → corrected text | Model / algorithm | [S14](#s14) |
| Question Answering | Question (+ context) → answer | Model / algorithm | [S04](#s04) |
| Dialogue Response Generation | Dialogue context → next response | Model / algorithm | [S03](#s03) |
| Semantic Textual Similarity | Text pair → similarity score | Model / algorithm | [S13](#s13) |

### Retrieval & Recommendation

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Document Retrieval | Query + corpus → relevant documents | Model / algorithm | [S06](#s06) |
| Passage Retrieval | Query + passages → relevant passages | Model / algorithm | [S12](#s12) |
| Re-ranking | Query + candidates → revised ranking | Model / algorithm | [S12](#s12) |
| Query Expansion | Query + evidence → expanded query | Model / algorithm | [S06](#s06) |
| Top-k Recommendation | User context + items → ranked items | Model / algorithm | [S21](#s21) |
| Rating Prediction | User–item pair → predicted rating | Model / algorithm | [S21](#s21) |

### Vision, Video & 3D

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Image Classification | Image → class labels | Model / algorithm | [S04](#s04) |
| Object Detection | Image → object boxes and classes | Model / algorithm | [S04](#s04) |
| Semantic Segmentation | Image → per-pixel class labels | Model / algorithm | [S39](#s39) |
| Instance Segmentation | Image → individual object masks | Model / algorithm | [S39](#s39) |
| Depth Estimation | Image → depth map | Model / algorithm | [S04](#s04) |
| Keypoint Detection | Image → landmark coordinates | Model / algorithm | [S04](#s04) |
| Video Classification | Video → class or action labels | Model / algorithm | [S04](#s04) |
| Optical Character Recognition | Text image → recognized text | Model / algorithm | [S40](#s40) |
| Image Captioning | Image → textual description | Model / algorithm | [S40](#s40) |
| Visual Question Answering | Image + question → answer | Model / algorithm | [S41](#s41) |
| Document Question Answering | Document image + question → answer | Model / algorithm | [S42](#s42) |
| Text-to-Image Generation | Text prompt → image | Model / algorithm | [S04](#s04) |
| Image-to-Image Generation | Image + conditioning → new image | Model / algorithm | [S04](#s04) |
| Image Inpainting | Image + mask → completed image | Model / algorithm | [S43](#s43) |
| Text-to-Video Generation | Text prompt → video | Model / algorithm | [S04](#s04) |
| Image-to-Video Generation | Image + conditioning → video | Model / algorithm | [S04](#s04) |
| Text-to-3D Generation | Text description → 3D representation | Model / algorithm | [S47](#s47) |

### Speech & Audio

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Automatic Speech Recognition | Speech → transcript | Model / algorithm | [S08](#s08) |
| Speech Translation | Speech → text in another language | Model / algorithm | [S09](#s09) |
| Keyword Spotting | Speech → target-word detection | Model / algorithm | [S08](#s08) |
| Speech Emotion Recognition | Speech → emotion label | Model / algorithm | [S08](#s08) |
| Audio Classification | Sound clip → class labels | Model / algorithm | [S04](#s04) |
| Speaker Identification | Speech → enrolled speaker identity | Model / algorithm | [S08](#s08) |
| Speaker Verification | Speech pair → same-speaker decision | Model / algorithm | [S08](#s08) |
| Speaker Diarization | Audio → who spoke when | Model / algorithm | [S08](#s08) |
| Text-to-Speech | Text → spoken waveform | Model / algorithm | [S03](#s03) |
| Speech Enhancement | Noisy speech → cleaner speech | Model / algorithm | [S09](#s09) |
| Speech Separation | Mixed speech → speaker signals | Model / algorithm | [S09](#s09) |
| Voice Conversion | Speech + target voice → converted speech | Model / algorithm | [S09](#s09) |
| Text-to-Audio Generation | Sound description → audio | Model / algorithm | [S46](#s46) |
| Conditional Music Generation | Text or melody → music | Model / algorithm | [S45](#s45) |

### Code & Programs

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Text-to-Code Generation | Natural-language specification → code | Model / algorithm | [S07](#s07) |
| Code Completion | Code context → continuation | Model / algorithm | [S07](#s07) |
| Code Repair | Faulty code → corrected code | Model / algorithm | [S07](#s07) |
| Code Translation | Code → equivalent code in another language | Model / algorithm | [S07](#s07) |
| Text-to-SQL | Question + database schema → SQL | Model / algorithm | [S15](#s15) |
| Code Summarization | Code → natural-language description | Model / algorithm | [S07](#s07) |
| Code Search | Natural-language query → relevant code | Model / algorithm | [S07](#s07) |
| Code Clone Detection | Code pair → clone / similarity label | Model / algorithm | [S07](#s07) |
| Defect Detection | Code → defect or vulnerability label | Model / algorithm | [S07](#s07) |

### Data & Time Series

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Classification | Feature vector → category | Model / algorithm | [S02](#s02) |
| Regression | Feature vector → numerical target | Model / algorithm | [S02](#s02) |
| Time-Series Forecasting | Past observations → future values | Model / algorithm | [S10](#s10) |
| Clustering | Observations → groups | Model / algorithm | [S02](#s02) |
| Dimensionality Reduction | Features → lower-dimensional representation | Model / algorithm | [S02](#s02) |
| Density Estimation | Observations → probability density | Model / algorithm | [S02](#s02) |
| Anomaly Detection | Observations → anomaly scores or flags | Model / algorithm | [S02](#s02) |
| Missing-Value Imputation | Incomplete data → estimated missing values | Model / algorithm | [S02](#s02) |
| Change-Point Detection | Time series → regime-change locations | Model / algorithm | [S10](#s10) |

### Graphs & Scientific Prediction

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Node Classification | Graph + nodes → node labels | Model / algorithm | [S11](#s11) |
| Link Prediction | Graph + node pairs → link scores | Model / algorithm | [S11](#s11) |
| Graph Classification | Graph → graph-level labels | Model / algorithm | [S11](#s11) |
| Graph Regression | Graph → graph-level numerical targets | Model / algorithm | [S11](#s11) |
| Molecular Property Prediction | Molecule representation → properties | Model / algorithm | [S23](#s23) |
| Protein Structure Prediction | Sequence + context → 3D protein structure | Model / algorithm | [S22](#s22) |

### Reasoning, Planning & Action

| Task | Input → intended output | Evaluation level | Source |
| --- | --- | --- | --- |
| Math Word-Problem Solving | Mathematical word problem → solution | Model / algorithm | [S16](#s16) |
| Formal Theorem Proving | Formal statement → verifiable proof | Model / algorithm | [S17](#s17) |
| Constraint Satisfaction | Variables + constraints → valid assignment | Model / algorithm | [S01](#s01) |
| Classical Planning | Initial state + actions + goal → plan | Model / algorithm | [S01](#s01) |
| Robot Localization | Sensor observations + map → robot pose | Model / algorithm | [S01](#s01) |
| Robot Motion Planning | Start + goal + obstacles → feasible path | Model / algorithm | [S01](#s01) |
| Function Calling | Request + tool schemas → function arguments | Model / algorithm | [S20](#s20) |
| Web Task Execution | Goal + website state → completed task | System | [S18](#s18) |
| Desktop Task Execution | Goal + desktop state → completed task | System | [S19](#s19) |

## Source catalogue

Sources support the linked concepts, not the editorial branch boundaries. Versioned documentation is intentionally retained where used.

<a id="s01"></a>
### S01 — AI: A Modern Approach, 4th ed.

[AI: A Modern Approach, 4th ed.](https://aima.cs.berkeley.edu/contents.html) — Author textbook; logic, probabilistic models, learning, planning and robotics.

<a id="s02"></a>
### S02 — scikit-learn User Guide

[scikit-learn User Guide](https://scikit-learn.org/stable/user_guide.html) — Official documentation; statistical model families and general learning tasks.

<a id="s03"></a>
### S03 — Speech and Language Processing

[Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) — Author textbook; language, speech and linguistic structure.

<a id="s04"></a>
### S04 — Hugging Face Tasks

[Hugging Face Tasks](https://huggingface.co/tasks) — Official task catalogue; selected task labels and modalities, not a universal taxonomy.

<a id="s05"></a>
### S05 — Deep Learning

[Deep Learning](https://www.deeplearningbook.org/) — Author textbook; neural networks, latent representations and generative modeling.

<a id="s06"></a>
### S06 — Introduction to Information Retrieval

[Introduction to Information Retrieval](https://nlp.stanford.edu/IR-book/html/htmledition/irbook.html) — Author textbook; retrieval, ranking and query expansion.

<a id="s07"></a>
### S07 — CodeXGLUE

[CodeXGLUE](https://github.com/microsoft/CodeXGLUE#tasks-and-datasets) — Original benchmark repository; code task definitions.

<a id="s08"></a>
### S08 — SUPERB

[SUPERB](https://www.isca-archive.org/interspeech_2021/yang21c_interspeech.pdf) — Original benchmark paper; speech recognition, speakers and paralinguistics.

<a id="s09"></a>
### S09 — SUPERB-SG

[SUPERB-SG](https://arxiv.org/html/2203.06849) — Original benchmark paper; speech translation, conversion, separation and enhancement.

<a id="s10"></a>
### S10 — sktime API Reference

[sktime API Reference](https://www.sktime.net/docs/api-reference/) — Official documentation; time-series tasks.

<a id="s11"></a>
### S11 — Open Graph Benchmark

[Open Graph Benchmark](https://ogb.stanford.edu/docs/home/) — Original benchmark documentation; node, link and graph prediction.

<a id="s12"></a>
### S12 — BEIR

[BEIR](https://openreview.net/pdf?id=wCu6T5xFjeJ) — Original benchmark paper; retrieval and re-ranking.

<a id="s13"></a>
### S13 — GLUE

[GLUE](https://arxiv.org/abs/1804.07461) — Original benchmark paper; classification, inference and textual similarity.

<a id="s14"></a>
### S14 — CoNLL-2014 Grammatical Error Correction

[CoNLL-2014 Grammatical Error Correction](https://aclanthology.org/W14-1701/) — Original shared-task paper; grammatical error correction.

<a id="s15"></a>
### S15 — Spider

[Spider](https://aclanthology.org/D18-1425/) — Original benchmark paper; text-to-SQL semantic parsing.

<a id="s16"></a>
### S16 — GSM8K: Training Verifiers

[GSM8K: Training Verifiers](https://arxiv.org/abs/2110.14168) — Original benchmark paper; mathematical word-problem solving.

<a id="s17"></a>
### S17 — miniF2F

[miniF2F](https://arxiv.org/abs/2109.00110) — Original benchmark paper; formal theorem proving.

<a id="s18"></a>
### S18 — WebArena

[WebArena](https://arxiv.org/abs/2307.13854) — Original benchmark paper; browser tasks evaluated at the system level.

<a id="s19"></a>
### S19 — OSWorld

[OSWorld](https://arxiv.org/abs/2404.07972) — Original benchmark paper; desktop tasks evaluated at the system level.

<a id="s20"></a>
### S20 — Berkeley Function Calling Leaderboard

[Berkeley Function Calling Leaderboard](https://gorilla.cs.berkeley.edu/leaderboard) — Original benchmark; function selection and argument generation.

<a id="s21"></a>
### S21 — RecBole Evaluation Support

[RecBole Evaluation Support](https://recbole.io/docs/v0.2.0/user_guide/evaluation_support.html) — Official versioned documentation; rating prediction and top-k recommendation.

<a id="s22"></a>
### S22 — AlphaFold

[AlphaFold](https://www.nature.com/articles/s41586-021-03819-2) — Original research paper; protein structure prediction.

<a id="s23"></a>
### S23 — MoleculeNet

[MoleculeNet](https://arxiv.org/abs/1703.00564) — Original benchmark paper; molecular property prediction.

<a id="s24"></a>
### S24 — Attention Is All You Need

[Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Original Transformer paper.

<a id="s25"></a>
### S25 — Mamba

[Mamba](https://arxiv.org/abs/2312.00752) — Original selective state-space model paper.

<a id="s26"></a>
### S26 — Sparsely-Gated Mixture-of-Experts

[Sparsely-Gated Mixture-of-Experts](https://arxiv.org/abs/1701.06538) — Original sparse expert-routing layer paper.

<a id="s27"></a>
### S27 — Denoising Diffusion Probabilistic Models

[Denoising Diffusion Probabilistic Models](https://arxiv.org/abs/2006.11239) — Original diffusion model paper.

<a id="s28"></a>
### S28 — Variational Inference with Normalizing Flows

[Variational Inference with Normalizing Flows](https://arxiv.org/abs/1505.05770) — Original normalizing-flow research paper.

<a id="s29"></a>
### S29 — Auto-Encoding Variational Bayes

[Auto-Encoding Variational Bayes](https://arxiv.org/abs/1312.6114) — Original variational autoencoder paper.

<a id="s30"></a>
### S30 — Generative Adversarial Networks

[Generative Adversarial Networks](https://arxiv.org/abs/1406.2661) — Original GAN paper.

<a id="s31"></a>
### S31 — SimCLR

[SimCLR](https://arxiv.org/abs/2002.05709) — Original contrastive self-supervised learning paper.

<a id="s32"></a>
### S32 — Graph Convolutional Networks

[Graph Convolutional Networks](https://arxiv.org/abs/1609.02907) — Original graph convolutional network paper.

<a id="s33"></a>
### S33 — Transformer Architectures

[Transformer Architectures](https://huggingface.co/learn/llm-course/en/chapter1/4) — Official teaching material; encoder, decoder and encoder-decoder configurations.

<a id="s34"></a>
### S34 — LoRA

[LoRA](https://arxiv.org/abs/2106.09685) — Original parameter-efficient adaptation paper.

<a id="s35"></a>
### S35 — InstructGPT

[InstructGPT](https://arxiv.org/abs/2203.02155) — Original instruction tuning and human-feedback learning paper.

<a id="s36"></a>
### S36 — Direct Preference Optimization

[Direct Preference Optimization](https://arxiv.org/abs/2305.18290) — Original preference-optimization paper.

<a id="s37"></a>
### S37 — Foundation Models

[Foundation Models](https://arxiv.org/abs/2108.07258) — Original formulation of the foundation-model concept.

<a id="s38"></a>
### S38 — Knowledge Distillation

[Knowledge Distillation](https://arxiv.org/abs/1503.02531) — Original neural knowledge-distillation paper.

<a id="s39"></a>
### S39 — Image Segmentation

[Image Segmentation](https://huggingface.co/tasks/image-segmentation) — Official task documentation; semantic, instance and panoptic segmentation.

<a id="s40"></a>
### S40 — Image-to-Text

[Image-to-Text](https://huggingface.co/tasks/image-to-text) — Official task documentation; captioning and optical character recognition.

<a id="s41"></a>
### S41 — Visual Question Answering

[Visual Question Answering](https://huggingface.co/tasks/visual-question-answering) — Official task documentation; visual question answering.

<a id="s42"></a>
### S42 — Document Question Answering

[Document Question Answering](https://huggingface.co/tasks/document-question-answering) — Official task documentation; questions over document images.

<a id="s43"></a>
### S43 — Image Inpainting

[Image Inpainting](https://huggingface.co/docs/diffusers/using-diffusers/inpaint) — Official library documentation; mask-conditioned image completion.

<a id="s44"></a>
### S44 — Flow Matching

[Flow Matching](https://arxiv.org/abs/2210.02747) — Original training method for continuous normalizing flows; not a downstream task.

<a id="s45"></a>
### S45 — MusicGen

[MusicGen](https://arxiv.org/abs/2306.05284) — Original research paper; conditional music generation.

<a id="s46"></a>
### S46 — AudioGen

[AudioGen](https://arxiv.org/abs/2209.15352) — Original research paper; text-conditioned sound generation.

<a id="s47"></a>
### S47 — Shap-E

[Shap-E](https://arxiv.org/abs/2305.02463) — Original research paper; conditional 3D generation.

<a id="s48"></a>
### S48 — MS2: Multi-Document Summarization

[MS2: Multi-Document Summarization](https://aclanthology.org/2021.emnlp-main.594/) — Original benchmark paper; multi-document summarization of medical studies.
