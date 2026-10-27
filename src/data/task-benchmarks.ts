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
  },
  {
    "id": "siglip2-giant",
    "name": "SigLIP 2 g-opt/16 · 384",
    "cardSourceId": "br2-siglip2-giant-card",
    "weightsSourceId": "br2-siglip2-giant-weights",
    "licenseSourceId": "br2-siglip2-giant-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "rfdetr-m",
    "name": "RF-DETR Medium",
    "cardSourceId": "br2-rfdetr-m-card",
    "weightsSourceId": "br2-rfdetr-m-weights",
    "licenseSourceId": "br2-rfdetr-m-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "rfdetr-l",
    "name": "RF-DETR Large",
    "cardSourceId": "br2-rfdetr-l-card",
    "weightsSourceId": "br2-rfdetr-l-weights",
    "licenseSourceId": "br2-rfdetr-l-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "rfdetr-seg-l",
    "name": "RF-DETR Seg Large",
    "cardSourceId": "br2-rfdetr-seg-l-card",
    "weightsSourceId": "br2-rfdetr-seg-l-weights",
    "licenseSourceId": "br2-rfdetr-seg-l-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "rfdetr-seg-2xl",
    "name": "RF-DETR Seg 2XL",
    "cardSourceId": "br2-rfdetr-seg-2xl-card",
    "weightsSourceId": "br2-rfdetr-seg-2xl-weights",
    "licenseSourceId": "br2-rfdetr-seg-2xl-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "florence-base-ft",
    "name": "Florence-2 base-ft",
    "cardSourceId": "br2-florence-base-ft-card",
    "weightsSourceId": "br2-florence-base-ft-weights",
    "licenseSourceId": "br2-florence-base-ft-card",
    "license": "mit",
    "access": "public"
  },
  {
    "id": "florence-large-ft",
    "name": "Florence-2 large-ft",
    "cardSourceId": "br2-florence-large-ft-card",
    "weightsSourceId": "br2-florence-large-ft-weights",
    "licenseSourceId": "br2-florence-large-ft-card",
    "license": "mit",
    "access": "public"
  },
  {
    "id": "qwen25vl72",
    "name": "Qwen2.5-VL-72B-Instruct",
    "cardSourceId": "br2-qwen25vl72-card",
    "weightsSourceId": "br2-qwen25vl72-weights",
    "licenseSourceId": "br2-qwen25vl72-card",
    "license": "Qwen license",
    "access": "public"
  },
  {
    "id": "qwen2vl72",
    "name": "Qwen2-VL-72B-Instruct",
    "cardSourceId": "br2-qwen2vl72-card",
    "weightsSourceId": "br2-qwen2vl72-weights",
    "licenseSourceId": "br2-qwen2vl72-card",
    "license": "Qwen license",
    "access": "public"
  },
  {
    "id": "ct-clone",
    "name": "CodeT5-base · clone detection",
    "cardSourceId": "br2-ct-clone-card",
    "weightsSourceId": "br2-ct-clone-weights",
    "licenseSourceId": "br2-ct-clone-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "ct-defect",
    "name": "CodeT5-base · defect detection",
    "cardSourceId": "br2-ct-defect-card",
    "weightsSourceId": "br2-ct-defect-weights",
    "licenseSourceId": "br2-ct-defect-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "ct-cs-java",
    "name": "CodeT5-base · C# to Java",
    "cardSourceId": "br2-ct-cs-java-card",
    "weightsSourceId": "br2-ct-cs-java-weights",
    "licenseSourceId": "br2-ct-cs-java-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "ct-java-cs",
    "name": "CodeT5-base · Java to C#",
    "cardSourceId": "br2-ct-java-cs-card",
    "weightsSourceId": "br2-ct-java-cs-weights",
    "licenseSourceId": "br2-ct-java-cs-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "ct-sum-py",
    "name": "CodeT5-base · Python summarization",
    "cardSourceId": "br2-ct-sum-py-card",
    "weightsSourceId": "br2-ct-sum-py-weights",
    "licenseSourceId": "br2-ct-sum-py-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "ct-multi-sum",
    "name": "CodeT5-base · multi-language summarization",
    "cardSourceId": "br2-ct-multi-sum-card",
    "weightsSourceId": "br2-ct-multi-sum-weights",
    "licenseSourceId": "br2-ct-multi-sum-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "wan22-t2v",
    "name": "Wan2.2-T2V-A14B",
    "cardSourceId": "br2-wan22-t2v-card",
    "weightsSourceId": "br2-wan22-t2v-weights",
    "licenseSourceId": "br2-wan22-t2v-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "wan21-t2v14",
    "name": "Wan2.1-T2V-14B",
    "cardSourceId": "br2-wan21-t2v14-card",
    "weightsSourceId": "br2-wan21-t2v14-weights",
    "licenseSourceId": "br2-wan21-t2v14-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "wan22-i2v",
    "name": "Wan2.2-I2V-A14B",
    "cardSourceId": "br2-wan22-i2v-card",
    "weightsSourceId": "br2-wan22-i2v-weights",
    "licenseSourceId": "br2-wan22-i2v-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "videomaev2-s",
    "name": "VideoMAE V2 Small · MMAction2",
    "cardSourceId": "br2-videomaev2",
    "weightsSourceId": "br2-videomaev2-s-weights",
    "licenseSourceId": "br2-mmaction-license",
    "license": "Apache-2.0 (repository)",
    "access": "public"
  },
  {
    "id": "videomaev2-b",
    "name": "VideoMAE V2 Base · MMAction2",
    "cardSourceId": "br2-videomaev2",
    "weightsSourceId": "br2-videomaev2-b-weights",
    "licenseSourceId": "br2-mmaction-license",
    "license": "Apache-2.0 (repository)",
    "access": "public"
  },
  {
    "id": "udpipe-ewt",
    "name": "UDPipe 2 · English EWT 2.17-251125",
    "cardSourceId": "br2-udpipe",
    "weightsSourceId": "br2-udpipe-ewt-weights",
    "licenseSourceId": "br2-udpipe",
    "license": "CC-BY-NC-SA-4.0",
    "access": "public"
  },
  {
    "id": "compact-re05",
    "name": "Qwen2.5-0.5B · RE GenTune 2-shot adapter",
    "cardSourceId": "br2-compact-re05-card",
    "weightsSourceId": "br2-compact-re05-weights",
    "licenseSourceId": "br2-compact-re05-card",
    "license": "mit",
    "access": "public"
  },
  {
    "id": "r1-qwen14",
    "name": "DeepSeek-R1-Distill-Qwen-14B · ThinkQE",
    "cardSourceId": "br2-r1-qwen14-card",
    "weightsSourceId": "br2-r1-qwen14-weights",
    "licenseSourceId": "br2-r1-qwen14-card",
    "license": "mit",
    "access": "public"
  },
  {
    "id": "qwen25coder32base",
    "name": "Qwen2.5-Coder-32B Base",
    "cardSourceId": "br2-qwen25coder32base-card",
    "weightsSourceId": "br2-qwen25coder32base-weights",
    "licenseSourceId": "br2-qwen25coder32base-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "deepseekv3base",
    "name": "DeepSeek-V3 Base",
    "cardSourceId": "br2-deepseekv3base-card",
    "weightsSourceId": "br2-deepseekv3base-weights",
    "licenseSourceId": "br2-deepseekv3base-card",
    "license": "DeepSeek Model License",
    "access": "public"
  },
  {
    "id": "segenc-spans",
    "name": "SegEnc 406M · span-trained",
    "cardSourceId": "br2-segenc-spans-card",
    "weightsSourceId": "br2-segenc-spans-weights",
    "licenseSourceId": "br2-segenc-spans-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "segenc-stock",
    "name": "Socratic SegEnc 406M · ported inference",
    "cardSourceId": "br2-segenc-stock-card",
    "weightsSourceId": "br2-segenc-stock-weights",
    "licenseSourceId": "br2-segenc-stock-card",
    "license": "bsd-3-clause",
    "access": "public"
  },
  {
    "id": "sid-hubert",
    "name": "HuBERT Base · SUPERB speaker ID",
    "cardSourceId": "br2-sid-hubert-card",
    "weightsSourceId": "br2-sid-hubert-weights",
    "licenseSourceId": "br2-sid-hubert-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "sid-wav2vec",
    "name": "wav2vec 2.0 Base · SUPERB speaker ID",
    "cardSourceId": "br2-sid-wav2vec-card",
    "weightsSourceId": "br2-sid-wav2vec-weights",
    "licenseSourceId": "br2-sid-wav2vec-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "seamless-v1",
    "name": "SeamlessM4T Large v1",
    "cardSourceId": "br2-seamless-v1-card",
    "weightsSourceId": "br2-seamless-v1-weights",
    "licenseSourceId": "br2-seamless-v1-card",
    "license": "cc-by-nc-4.0",
    "access": "public"
  },
  {
    "id": "seedvc-2024",
    "name": "Seed-VC · 2024 Whisper-small checkpoint",
    "cardSourceId": "br2-seed-eval-code",
    "weightsSourceId": "br2-seedvc-2024-weights",
    "licenseSourceId": "ow-voice",
    "license": "gpl-3.0",
    "access": "public"
  },
  {
    "id": "tangoflux",
    "name": "TangoFlux · CRPO",
    "cardSourceId": "br2-tangoflux-card",
    "weightsSourceId": "br2-tangoflux-weights",
    "licenseSourceId": "br2-tangoflux-card",
    "license": "Stability AI Community License + dataset restrictions",
    "access": "public"
  },
  {
    "id": "tango2",
    "name": "Tango 2",
    "cardSourceId": "br2-tango2-card",
    "weightsSourceId": "br2-tango2-weights",
    "licenseSourceId": "br2-tango2-card",
    "license": "CC-BY-NC-SA-4.0",
    "access": "public"
  },
  {
    "id": "audioldm2-l",
    "name": "AudioLDM 2 Large",
    "cardSourceId": "br2-audioldm2-l-card",
    "weightsSourceId": "br2-audioldm2-l-weights",
    "licenseSourceId": "br2-audioldm2-l-card",
    "license": "CC-BY-NC-SA-4.0",
    "access": "public"
  },
  {
    "id": "matrixformer",
    "name": "MatrixFormer · general expert",
    "cardSourceId": "br2-matrixformer-card",
    "weightsSourceId": "br2-matrixformer-weights",
    "licenseSourceId": "br2-matrixformer-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "matrixformer-recsys",
    "name": "MatrixFormer · recommender specialist",
    "cardSourceId": "br2-matrixformer-recsys-card",
    "weightsSourceId": "br2-matrixformer-recsys-weights",
    "licenseSourceId": "br2-matrixformer-recsys-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "matrixformer-plus",
    "name": "MatrixFormer+ · two-expert blend",
    "cardSourceId": "br2-matrixformer-plus-card",
    "weightsSourceId": "br2-matrixformer-plus-weights",
    "licenseSourceId": "br2-matrixformer-plus-card",
    "license": "apache-2.0",
    "access": "public"
  },
  {
    "id": "graphany-cora",
    "name": "GraphAny · Cora",
    "cardSourceId": "br2-graphany",
    "weightsSourceId": "br2-graphany-cora-weights",
    "licenseSourceId": "ow-graphany-license",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "graphany-product",
    "name": "GraphAny · Product",
    "cardSourceId": "br2-graphany",
    "weightsSourceId": "br2-graphany-product-weights",
    "licenseSourceId": "ow-graphany-license",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "dgl-gcn-afp-tox21",
    "name": "DGL-LifeSci · GCN attentivefp Tox21",
    "cardSourceId": "br2-dgl-molecule",
    "weightsSourceId": "br2-dgl-tox21-registry",
    "licenseSourceId": "ow-dgl-lifesci-license",
    "license": "Apache-2.0 (repository)",
    "access": "public"
  },
  {
    "id": "dgl-gin-edge-tox21",
    "name": "DGL-LifeSci · GIN supervised edge prediction Tox21",
    "cardSourceId": "br2-dgl-molecule",
    "weightsSourceId": "br2-dgl-tox21-registry",
    "licenseSourceId": "ow-dgl-lifesci-license",
    "license": "Apache-2.0 (repository)",
    "access": "public"
  },
  {
    "id": "uva-flow-simple",
    "name": "UvA MNISTFlow · simple",
    "cardSourceId": "br2-uva-flow",
    "weightsSourceId": "br2-uva-flow-simple-weights",
    "licenseSourceId": "ow-uva-model-license",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "uva-flow-vardeq",
    "name": "UvA MNISTFlow · vardeq",
    "cardSourceId": "br2-uva-flow",
    "weightsSourceId": "br2-uva-flow-vardeq-weights",
    "licenseSourceId": "ow-uva-model-license",
    "license": "MIT",
    "access": "public"
  },
  {
    "id": "timeradar",
    "name": "TimeRadar · pretrained 100-step model",
    "cardSourceId": "br2-timeradar",
    "weightsSourceId": "br2-timeradar-weights",
    "licenseSourceId": "br2-timeradar",
    "license": "Unresolved: README displays both MIT and Apache-2.0; no license file",
    "access": "public"
  },
  {
    "id": "blitz-boltz-k8",
    "name": "Blitz-Boltz2 · K8",
    "cardSourceId": "br2-blitz-boltz-k8-card",
    "weightsSourceId": "br2-blitz-boltz-k8-weights",
    "licenseSourceId": "br2-blitz-boltz-k8-card",
    "license": "mit",
    "access": "public"
  },
  {
    "id": "blitz-boltz-k16",
    "name": "Blitz-Boltz2 · K16",
    "cardSourceId": "br2-blitz-boltz-k16-card",
    "weightsSourceId": "br2-blitz-boltz-k16-weights",
    "licenseSourceId": "br2-blitz-boltz-k16-card",
    "license": "mit",
    "access": "public"
  },
  {
    "id": "eqr-sudoku",
    "name": "EqR · Sudoku-Extreme",
    "cardSourceId": "br2-eqr",
    "weightsSourceId": "br2-eqr-sudoku-weights",
    "licenseSourceId": "br2-eqr",
    "license": "Apache-2.0 (repository)",
    "access": "public"
  },
  {
    "id": "neuralmp",
    "name": "Neural Motion Planner · released policy",
    "cardSourceId": "br2-neuralmp-card",
    "weightsSourceId": "br2-neuralmp-weights",
    "licenseSourceId": "br2-neuralmp-card",
    "license": "mit",
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
  },
  {
    "id": "siglip2-imagenet",
    "taskIds": [
      "image-classification"
    ],
    "title": "SigLIP 2 · ImageNet zero-shot",
    "dataset": "ImageNet-1k",
    "metric": "Top-1 accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025",
    "sourceId": "br2-siglip",
    "locator": "Model zoo · ImageNet 0-shot",
    "protocol": {
      "en": "Official zero-shot classifier evaluation at 384-pixel native resolution; no task-specific classification head is trained.",
      "tr": "Resmî sıfır örnekli sınıflandırma değerlendirmesi; doğal çözünürlük 384 piksel, göreve özel sınıflandırma başlığı eğitilmez."
    },
    "limitation": {
      "en": "Different model sizes and patch sizes; this does not establish a supervised-classification or Turkish-domain winner.",
      "tr": "Model ve yama boyutları farklıdır; gözetimli sınıflandırma veya Türkçe alan verisi için liderlik göstermez."
    },
    "results": [
      {
        "candidateId": "siglip",
        "score": 84.1
      },
      {
        "candidateId": "siglip2-giant",
        "score": 85.0
      }
    ]
  },
  {
    "id": "rfdetr-coco-box",
    "taskIds": [
      "object-detection"
    ],
    "title": "RF-DETR · COCO box AP",
    "dataset": "COCO validation",
    "metric": "Box AP50:95",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "br2-rfdetr",
    "locator": "Object Detection · RF-DETR-M / L",
    "protocol": {
      "en": "Published native-resolution COCO evaluation; compare box AP, not AP50 or latency.",
      "tr": "Yayımlanan doğal çözünürlüklü COCO değerlendirmesi; kutu AP karşılaştırılır, AP50 veya gecikme değil."
    },
    "limitation": {
      "en": "Resolution and capacity differ. This is a quality comparison of two verified Apache-2.0 releases; it does not claim the best model across the full leaderboard.",
      "tr": "Çözünürlük ve kapasite farklıdır. Doğrulanmış iki Apache-2.0 sürümünün kalite karşılaştırmasıdır; tüm tabloda en iyi model olduğu iddia edilmez."
    },
    "results": [
      {
        "candidateId": "rfdetr-m",
        "score": 54.7,
        "configuration": {
          "en": "576 px",
          "tr": "576 piksel"
        }
      },
      {
        "candidateId": "rfdetr-l",
        "score": 56.5,
        "configuration": {
          "en": "704 px",
          "tr": "704 piksel"
        }
      }
    ]
  },
  {
    "id": "rfdetr-coco-mask",
    "taskIds": [
      "instance-segmentation"
    ],
    "title": "RF-DETR · COCO mask AP",
    "dataset": "COCO validation",
    "metric": "Mask AP50:95",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "br2-rfdetr",
    "locator": "Instance Segmentation · L / 2XL",
    "protocol": {
      "en": "Task-specific instance-segmentation heads with each released model’s native input size.",
      "tr": "Her yayımlanmış modelin doğal girdi boyutunda, göreve özel örnek segmentasyon başlıkları."
    },
    "limitation": {
      "en": "Higher-resolution 2XL costs more compute. These mask-AP scores cannot rank SAM 3 promptable segmentation under a different protocol.",
      "tr": "Yüksek çözünürlüklü 2XL daha fazla hesaplama ister. Bu maske AP skorları, farklı protokollü SAM 3 istemli segmentasyonunu sıralamaz."
    },
    "results": [
      {
        "candidateId": "rfdetr-seg-l",
        "score": 47.1,
        "configuration": {
          "en": "504 px",
          "tr": "504 piksel"
        }
      },
      {
        "candidateId": "rfdetr-seg-2xl",
        "score": 49.9,
        "configuration": {
          "en": "768 px",
          "tr": "768 piksel"
        }
      }
    ]
  },
  {
    "id": "florence-caption",
    "taskIds": [
      "image-captioning"
    ],
    "title": "Florence-2 · COCO captions",
    "dataset": "COCO Karpathy test",
    "metric": "CIDEr",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2024",
    "sourceId": "br2-florence-base-ft-card",
    "locator": "Fine-tuned models · COCO Caption",
    "protocol": {
      "en": "Fine-tuned captioning checkpoints on the same COCO Karpathy test split.",
      "tr": "Aynı COCO Karpathy test bölümündeki ince ayarlı açıklama üretim ağırlıkları."
    },
    "limitation": {
      "en": "CIDEr rewards reference-caption overlap; it is not factuality or safety. Pretrained zero-shot rows are deliberately excluded from this table.",
      "tr": "CIDEr referans açıklamalarla örtüşmeyi ölçer; olgusal doğruluk veya güvenlik değildir. Ön eğitimli sıfır örnekli satırlar bu tabloya katılmaz."
    },
    "results": [
      {
        "candidateId": "florence-base-ft",
        "score": 140.0
      },
      {
        "candidateId": "florence-large-ft",
        "score": 143.3
      }
    ]
  },
  {
    "id": "qwen-docvqa",
    "taskIds": [
      "document-question-answering"
    ],
    "title": "Qwen-VL · DocVQA",
    "dataset": "DocVQA validation",
    "metric": "ANLS",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-01",
    "sourceId": "br2-qwen25vl72-card",
    "locator": "DocVQA_VAL row",
    "protocol": {
      "en": "Publisher-reported document question answering on the same validation benchmark, using the named 72B instruction releases.",
      "tr": "Yayıncının aynı doğrulama benchmark’ında bildirdiği belge soru-cevap sonuçları; adları belirtilen 72B talimat sürümleri."
    },
    "limitation": {
      "en": "The card does not expose a complete matched inference-budget recipe. The 0.3-point difference is not a significance claim; OCRBench is not substituted.",
      "tr": "Kart tam ve eşit çıkarım bütçeli bir tarif sunmaz. 0,3 puanlık fark istatistiksel anlamlılık iddiası değildir; yerine OCRBench kullanılmaz."
    },
    "results": [
      {
        "candidateId": "qwen2vl72",
        "score": 96.1
      },
      {
        "candidateId": "qwen25vl72",
        "score": 96.4
      }
    ]
  },
  {
    "id": "ct-clone-bcb",
    "taskIds": [
      "code-clone-detection"
    ],
    "title": "CodeT5 · BigCloneBench",
    "dataset": "BigCloneBench · CodeXGLUE test",
    "metric": "Binary F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021-11",
    "sourceId": "br2-codet5-paper",
    "locator": "Table 5 · CodeT5-base / Clone F1",
    "protocol": {
      "en": "CodeXGLUE BigCloneBench clone/non-clone evaluation with the released clone-detection head.",
      "tr": "Yayımlanan klon tespiti başlığıyla CodeXGLUE BigCloneBench klon/klon değil değerlendirmesi."
    },
    "limitation": {
      "en": "These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.",
      "tr": "Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez."
    },
    "results": [
      {
        "candidateId": "ct-clone",
        "score": 97.2
      }
    ]
  },
  {
    "id": "ct-defect-devign",
    "taskIds": [
      "defect-detection"
    ],
    "title": "CodeT5 · Devign",
    "dataset": "Devign · CodeXGLUE test",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021-11",
    "sourceId": "br2-codet5-paper",
    "locator": "Table 5 · CodeT5-base / Defect Accuracy",
    "protocol": {
      "en": "CodeXGLUE Devign binary defect classification; test-set accuracy, not vulnerability-repair success.",
      "tr": "CodeXGLUE Devign ikili hata sınıflandırması; test doğruluğudur, güvenlik açığı onarım başarısı değildir."
    },
    "limitation": {
      "en": "These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.",
      "tr": "Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez."
    },
    "results": [
      {
        "candidateId": "ct-defect",
        "score": 65.78
      }
    ]
  },
  {
    "id": "ct-translate-jcs",
    "taskIds": [
      "code-translation"
    ],
    "title": "CodeT5 · Java → C#",
    "dataset": "CodeXGLUE paired Java / C# test",
    "metric": "BLEU-4",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021-11",
    "sourceId": "br2-codet5-paper",
    "locator": "Table 4 · CodeT5-base",
    "protocol": {
      "en": "The direction-specific fine-tuned checkpoint is evaluated on the paired translation test set.",
      "tr": "Yönüne özel ince ayarlı ağırlıklar eşleştirilmiş çeviri test kümesinde değerlendirilir."
    },
    "limitation": {
      "en": "Opposite directions are separate tasks; these scores are not ranked against each other. BLEU does not prove semantic equivalence or successful compilation.",
      "tr": "Zıt yönler ayrı görevlerdir; bu skorlar birbirine karşı sıralanmaz. BLEU anlamsal eşdeğerliği veya derlenebilirliği kanıtlamaz."
    },
    "results": [
      {
        "candidateId": "ct-java-cs",
        "score": 84.03
      }
    ]
  },
  {
    "id": "ct-translate-csj",
    "taskIds": [
      "code-translation"
    ],
    "title": "CodeT5 · C# → Java",
    "dataset": "CodeXGLUE paired Java / C# test",
    "metric": "BLEU-4",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021-11",
    "sourceId": "br2-codet5-paper",
    "locator": "Table 4 · CodeT5-base",
    "protocol": {
      "en": "The direction-specific fine-tuned checkpoint is evaluated on the paired translation test set.",
      "tr": "Yönüne özel ince ayarlı ağırlıklar eşleştirilmiş çeviri test kümesinde değerlendirilir."
    },
    "limitation": {
      "en": "Opposite directions are separate tasks; these scores are not ranked against each other. BLEU does not prove semantic equivalence or successful compilation.",
      "tr": "Zıt yönler ayrı görevlerdir; bu skorlar birbirine karşı sıralanmaz. BLEU anlamsal eşdeğerliği veya derlenebilirliği kanıtlamaz."
    },
    "results": [
      {
        "candidateId": "ct-cs-java",
        "score": 79.87
      }
    ]
  },
  {
    "id": "ct-summary-python",
    "taskIds": [
      "code-summarization"
    ],
    "title": "CodeT5 · Python summaries",
    "dataset": "CodeSearchNet Python · CodeXGLUE test",
    "metric": "Smoothed BLEU-4",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021",
    "sourceId": "br2-ct-multi-sum-card",
    "locator": "Released multi-sum model card · Python column",
    "protocol": {
      "en": "Compare the Python-specific checkpoint with the released single checkpoint shared across six languages. The multi-sum card explicitly distinguishes this release from the original paper’s per-language checkpoint selection.",
      "tr": "Python’a özel ağırlıklar, altı dilde paylaşılan tek yayımlanmış ağırlıkla karşılaştırılır. Multi-sum kartı bu sürümü, özgün makalenin dile göre ağırlık seçiminden açıkça ayırır."
    },
    "limitation": {
      "en": "A lexical metric on a fixed Python split, not documentation correctness. The 20.42 row is the release-card result, not the paper’s 20.36 multi-task row.",
      "tr": "Sabit Python bölümü üzerindeki sözcüksel metriktir; dokümantasyon doğruluğu değildir. 20,42 değeri sürüm kartına aittir; makaledeki 20,36 çok görevli satır değildir."
    },
    "results": [
      {
        "candidateId": "ct-sum-py",
        "score": 20.01
      },
      {
        "candidateId": "ct-multi-sum",
        "score": 20.42
      }
    ]
  },
  {
    "id": "vbench-wan-t2v",
    "taskIds": [
      "text-to-video-generation"
    ],
    "title": "VBench · released Wan T2V",
    "dataset": "VBench T2V",
    "metric": "Total score",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "independent",
    "resultDate": "2026-02-18",
    "sourceId": "br2-vbench-live",
    "locator": "T2V · Gold rows · Wan2.2 / Wan2.1-T2V-14B",
    "protocol": {
      "en": "Both rows are sampled and evaluated by VBench. The comparison is between published generation systems, including the listed prompt processing.",
      "tr": "İki satırın videoları VBench tarafından üretilip değerlendirilmiştir. Karşılaştırma, belirtilen istem işlemesi dâhil yayımlanmış üretim sistemleri arasındadır."
    },
    "limitation": {
      "en": "Prompt processing and native sampling differ. Wan2.2 without prompt optimization scores 82.61 on 2026-02-18, so the ordering is not a weight-only architectural claim. API-only Wan2.1 rows are excluded.",
      "tr": "İstem işlemesi ve doğal örnekleme farklıdır. Wan2.2, 2026-02-18’de istem iyileştirmesi olmadan 82,61 alır; sıralama yalnızca ağırlıklara dayanan mimari üstünlük iddiası değildir. Yalnızca API ile sunulan Wan2.1 satırları dışarıda tutulur."
    },
    "results": [
      {
        "candidateId": "wan22-t2v",
        "score": 84.23,
        "configuration": {
          "en": "Qwen prompt optimization · 2026-02-18",
          "tr": "Qwen istem iyileştirmesi · 2026-02-18"
        }
      },
      {
        "candidateId": "wan21-t2v14",
        "score": 83.69,
        "configuration": {
          "en": "VBench Gold row · 2025-07-25",
          "tr": "VBench Gold satırı · 2025-07-25"
        }
      }
    ]
  },
  {
    "id": "vbench-wan-i2v",
    "taskIds": [
      "image-to-video-generation"
    ],
    "title": "VBench · Wan image-to-video",
    "dataset": "VBench I2V",
    "metric": "Total score",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "independent",
    "resultDate": "2026-03-06",
    "sourceId": "br2-vbench-live",
    "locator": "I2V · Gold rows · TI2V-5B / I2V-A14B",
    "protocol": {
      "en": "VBench Team sampled and evaluated both published Qwen-prompt-optimized systems; their native generation settings are retained.",
      "tr": "VBench ekibi yayımlanmış iki Qwen istem iyileştirmeli sistemi üretip değerlendirmiştir; doğal üretim ayarları korunur."
    },
    "limitation": {
      "en": "A 0.12-point aggregate difference is not evidence of statistical significance. I2V consistency and quality have different rankings; larger weights are not automatically better on this aggregate.",
      "tr": "Toplam skordaki 0,12 puan fark istatistiksel anlamlılık kanıtı değildir. I2V tutarlılığı ve kalite farklı sıralamalar verir; büyük ağırlıklar bu toplam metrikte otomatik olarak üstün değildir."
    },
    "results": [
      {
        "candidateId": "wan",
        "score": 88.8,
        "configuration": {
          "en": "Qwen prompt optimization · 2026-02-12",
          "tr": "Qwen istem iyileştirmesi · 2026-02-12"
        }
      },
      {
        "candidateId": "wan22-i2v",
        "score": 88.68,
        "configuration": {
          "en": "Qwen prompt optimization · 2026-03-06",
          "tr": "Qwen istem iyileştirmesi · 2026-03-06"
        }
      }
    ]
  },
  {
    "id": "videomaev2-k400",
    "taskIds": [
      "video-classification"
    ],
    "title": "VideoMAE V2 · MMAction2 K400",
    "dataset": "Kinetics-400 validation · 19,796 videos",
    "metric": "Top-1 accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2023-05",
    "sourceId": "br2-videomaev2",
    "locator": "Results and Models · top1 acc, not reference top1 acc",
    "protocol": {
      "en": "Both ported checkpoints: K710 distillation, 16×4 sampling, short side 320, five clips × three crops.",
      "tr": "İki aktarılmış ağırlık: K710 damıtma, 16×4 örnekleme, kısa kenar 320, beş klip × üç kırpma."
    },
    "limitation": {
      "en": "These are the tested MMAction2 artifacts, not the original paper’s slightly different Small result. Manifest pins identify the release links, not hashes of downloaded tensors.",
      "tr": "Bunlar test edilen MMAction2 dosyalarıdır; özgün makalenin az farklı Small sonucu değildir. Sabitlenmiş manifest sürüm bağlantılarını tanımlar; indirilen tensörlerin özeti değildir."
    },
    "results": [
      {
        "candidateId": "videomaev2-s",
        "score": 83.6
      },
      {
        "candidateId": "videomaev2-b",
        "score": 86.6
      }
    ]
  },
  {
    "id": "shape-text3d",
    "taskIds": [
      "text-to-3d-generation"
    ],
    "title": "Shap-E · text-only 3D",
    "dataset": "COCO evaluation prompts",
    "metric": "CLIP ViT-L/14 R-Precision",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2023-05",
    "sourceId": "br2-shape-paper",
    "locator": "Table 2 · Shap-E (300M, text-only)",
    "protocol": {
      "en": "Render the text-generated 3D assets and evaluate prompt retrieval using CLIP ViT-L/14.",
      "tr": "Metinden üretilen 3B varlıklar işlenir ve istem geri getirme CLIP ViT-L/14 ile değerlendirilir."
    },
    "limitation": {
      "en": "A 2023 reference. CLIP alignment is not mesh usability or physical validity. Image-conditioned Shap-E and text-to-image-to-3D pipelines are different conditions.",
      "tr": "2023 referansıdır. CLIP hizalaması, ağ kullanılabilirliği veya fiziksel geçerlilik değildir. Görüntü koşullu Shap-E ve metin→görüntü→3B hatları farklı koşullardır."
    },
    "results": [
      {
        "candidateId": "shape",
        "score": 40.9,
        "configuration": {
          "en": "300M text-conditional model",
          "tr": "300M metin koşullu model"
        }
      }
    ]
  },
  {
    "id": "udpipe-part-of-speech-tagging",
    "taskIds": [
      "part-of-speech-tagging"
    ],
    "title": "UDPipe 2 · English EWT raw text",
    "dataset": "UD 2.17 English EWT test",
    "metric": "UPOS F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-11-25",
    "sourceId": "br2-udpipe",
    "locator": "UD 2.17 · english-ewt-ud-2.17-251125 · Raw text",
    "protocol": {
      "en": "Official conll18_ud_eval F1 evaluation from raw text, including segmentation errors. Released model bundle 251125.",
      "tr": "Ham metinden, bölümleme hataları dâhil resmî conll18_ud_eval F1 değerlendirmesi. Yayımlanan model paketi 251125."
    },
    "limitation": {
      "en": "Gold-tokenization scores are different and excluded. English EWT cannot establish quality for every language/treebank; the persistent release identifier is not a tensor checksum.",
      "tr": "Altın tokenizasyon skorları farklıdır ve dışarıda tutulur. English EWT tüm dil/ağaç kümeleri için kalite belirlemez; kalıcı sürüm kimliği tensör özeti değildir."
    },
    "results": [
      {
        "candidateId": "udpipe-ewt",
        "score": 96.75
      }
    ]
  },
  {
    "id": "udpipe-syntactic-parsing",
    "taskIds": [
      "syntactic-parsing"
    ],
    "title": "UDPipe 2 · English EWT raw text",
    "dataset": "UD 2.17 English EWT test",
    "metric": "LAS F1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025-11-25",
    "sourceId": "br2-udpipe",
    "locator": "UD 2.17 · english-ewt-ud-2.17-251125 · Raw text",
    "protocol": {
      "en": "Official conll18_ud_eval F1 evaluation from raw text, including segmentation errors. Released model bundle 251125.",
      "tr": "Ham metinden, bölümleme hataları dâhil resmî conll18_ud_eval F1 değerlendirmesi. Yayımlanan model paketi 251125."
    },
    "limitation": {
      "en": "Gold-tokenization scores are different and excluded. English EWT cannot establish quality for every language/treebank; the persistent release identifier is not a tensor checksum.",
      "tr": "Altın tokenizasyon skorları farklıdır ve dışarıda tutulur. English EWT tüm dil/ağaç kümeleri için kalite belirlemez; kalıcı sürüm kimliği tensör özeti değildir."
    },
    "results": [
      {
        "candidateId": "udpipe-ewt",
        "score": 89.91
      }
    ]
  },
  {
    "id": "compact-re-general",
    "taskIds": [
      "relation-extraction"
    ],
    "title": "Compact RE · General average",
    "dataset": "Seven general-domain RE benchmarks",
    "metric": "Positive-class micro-F1 average",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-06",
    "sourceId": "br2-compact-re",
    "locator": "Headline result · best released sub-billion checkpoint",
    "protocol": {
      "en": "The paper’s rounded general-domain average; positive-class micro-F1 excludes the no-relation class. The adapter needs the named base model and task formatting.",
      "tr": "Makalenin yuvarlanmış genel alan ortalaması; pozitif sınıf mikro F1, ilişki yok sınıfını dışlar. Adaptör, belirtilen taban modeli ve görev biçimlendirmesini gerektirir."
    },
    "limitation": {
      "en": "Only the explicitly released best artifact is admitted. Unreleased tuned rows and closed frontier APIs are not open-weight comparison participants. Literary RE has different training and annotation conditions.",
      "tr": "Yalnızca açıkça yayımlanmış en iyi dosya kabul edilir. Yayımlanmamış ince ayarlı satırlar ve kapalı API’ler açık ağırlık karşılaştırmasına alınmaz. Edebî ilişki çıkarımında eğitim ve anotasyon koşulları farklıdır."
    },
    "results": [
      {
        "candidateId": "compact-re05",
        "score": 83.0,
        "configuration": {
          "en": "QLoRA adapter on Qwen2.5-0.5B-Instruct; 2-shot prompting",
          "tr": "Qwen2.5-0.5B-Instruct üzerinde QLoRA adaptörü; 2 örnekli istem"
        }
      }
    ]
  },
  {
    "id": "thinkqe-bright",
    "taskIds": [
      "query-expansion"
    ],
    "title": "ThinkQE · retrieval with expansion",
    "dataset": "BRIGHT · seven StackExchange domains",
    "metric": "Mean nDCG@10",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2025-06",
    "sourceId": "br2-thinkqe",
    "locator": "BRIGHT comparison · ThinkQE-14B",
    "protocol": {
      "en": "R1-distilled Qwen-14B inside the iterative ThinkQE expansion-and-BM25 pipeline; seven natural-language domains only.",
      "tr": "Yinelemeli ThinkQE genişletme ve BM25 hattında R1 damıtılmış Qwen-14B; yalnızca yedi doğal dil alanı."
    },
    "limitation": {
      "en": "A retrieval-system score, not a standalone language-model score or all 12 BRIGHT tasks. MQR-A1 has no verified released weights and is excluded.",
      "tr": "Bağımsız dil modeli skoru veya BRIGHT’ın 12 görevinin tamamı değil, geri getirme sistemi skorudur. MQR-A1’in yayımlanmış ağırlıkları doğrulanmadığı için dışarıda tutulur."
    },
    "results": [
      {
        "candidateId": "r1-qwen14",
        "score": 34.9
      }
    ]
  },
  {
    "id": "safim-fim-base",
    "taskIds": [
      "code-completion"
    ],
    "title": "SAFIM · native fill-in-the-middle",
    "dataset": "SAFIM · Block / Block V2 / API / Control",
    "metric": "Mean pass@1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "independent",
    "resultDate": "2026-01",
    "sourceId": "br2-sri-paper",
    "locator": "Execution-based evaluation · Base Models · FIM / Average",
    "protocol": {
      "en": "Native FIM results for both base models in the same 2026 paper. SRI instruction-formatted results are kept out of this FIM-only comparison.",
      "tr": "Aynı 2026 makalesindeki iki taban modelin doğal FIM sonuçları. SRI talimat biçimli sonuçlar bu yalnızca FIM karşılaştırmasına katılmaz."
    },
    "limitation": {
      "en": "Different model sizes and training data; no equal-compute or all-language claim. Full software-agent benchmarks do not measure completion in the same way.",
      "tr": "Model boyutları ve eğitim verileri farklıdır; eşit hesaplama veya tüm diller iddiası yoktur. Tam yazılım ajanı benchmark’ları kod tamamlamayı aynı biçimde ölçmez."
    },
    "results": [
      {
        "candidateId": "qwen25coder32base",
        "score": 70.0
      },
      {
        "candidateId": "deepseekv3base",
        "score": 79.6
      }
    ]
  },
  {
    "id": "qmsum-segenc",
    "taskIds": [
      "text-summarization"
    ],
    "title": "QMSum · executable SegEnc comparison",
    "dataset": "QMSum official test · 281 queries / 35 meetings",
    "metric": "ROUGE-1",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-09",
    "sourceId": "br2-qmsum",
    "locator": "The full comparison · Span-trained / Socratic-SegEnc (our port)",
    "protocol": {
      "en": "Same frozen scorer, official split and greedy decoding. Published 0–1 ROUGE-1 values are multiplied by 100. Each system retains its documented input regime.",
      "tr": "Aynı sabit puanlayıcı, resmî bölüm ve açgözlü çözümleme. Yayımlanan 0–1 ROUGE-1 değerleri 100 ile çarpılır. Her sistem belgelenen girdi düzenini korur."
    },
    "limitation": {
      "en": "This measures training plus retrieval/input regimes, not weights under identical inputs. The 38.60 released-output row is not used as executable checkpoint performance. No significance claim follows from the point estimates alone.",
      "tr": "Eğitim ve geri getirme/girdi düzenleri birlikte ölçülür; aynı girdilerde yalnızca ağırlıklar değildir. Yayımlanmış çıktılardan gelen 38,60 satırı çalıştırılabilir ağırlık performansı sayılmaz. Nokta tahminleri tek başına anlamlılık iddiası oluşturmaz."
    },
    "results": [
      {
        "candidateId": "segenc-spans",
        "score": 36.33,
        "configuration": {
          "en": "2,000 retrieved words; span-trained checkpoint",
          "tr": "2.000 geri getirilen sözcük; aralıklarla eğitilmiş ağırlık"
        }
      },
      {
        "candidateId": "segenc-stock",
        "score": 35.3,
        "configuration": {
          "en": "Up to ~11,800 transcript words; publisher port",
          "tr": "Yaklaşık 11.800 transkript sözcüğüne kadar; yayıncının aktarımı"
        }
      }
    ]
  },
  {
    "id": "superb-sid",
    "taskIds": [
      "speaker-identification"
    ],
    "title": "SUPERB · speaker identification",
    "dataset": "VoxCeleb1 · SUPERB SID test",
    "metric": "Accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2021",
    "sourceId": "br2-sid-hubert-card",
    "locator": "Evaluation results · Transformers column (companion wav2vec card cited below)",
    "protocol": {
      "en": "Both converted SUPERB classification heads, 16 kHz speech and a predefined closed set of speakers. Scores from each card’s Transformers column, multiplied by 100.",
      "tr": "İki dönüştürülmüş SUPERB sınıflandırma başlığı, 16 kHz konuşma ve önceden tanımlı kapalı konuşmacı kümesi. Her kartın Transformers sütunundaki skorlar 100 ile çarpılır."
    },
    "limitation": {
      "en": "Speaker identification accuracy is not verification EER. HuBERT’s original S3PRL 81.42 result is not assigned to its Transformers checkpoint.",
      "tr": "Konuşmacı kimliği doğruluğu, konuşmacı doğrulama EER değeri değildir. HuBERT’in özgün S3PRL 81,42 sonucu Transformers ağırlığına atanmaz."
    },
    "results": [
      {
        "candidateId": "sid-hubert",
        "score": 80.71
      },
      {
        "candidateId": "sid-wav2vec",
        "score": 75.18
      }
    ]
  },
  {
    "id": "seamless-turkish",
    "taskIds": [
      "speech-translation"
    ],
    "title": "SeamlessM4T · Turkish speech to English",
    "dataset": "FLEURS test · tur-eng speech-to-text translation",
    "metric": "BLEU",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2023-11",
    "sourceId": "br2-seamless-v2-metrics",
    "locator": "s2tt_fleurs_test.csv · tur-eng (v1 bundle also cited)",
    "protocol": {
      "en": "Direct Turkish-speech to English-text evaluation from the two official release CSVs.",
      "tr": "İki resmî sürüm CSV’sindeki doğrudan Türkçe konuşmadan İngilizce metne değerlendirme."
    },
    "limitation": {
      "en": "One language direction on FLEURS, not an all-language average or speech-to-speech quality score. Different training data are part of the version change.",
      "tr": "FLEURS üzerinde tek dil yönüdür; tüm dillerin ortalaması veya konuşmadan konuşmaya kalite skoru değildir. Eğitim verisi değişimi sürüm değişiminin parçasıdır."
    },
    "results": [
      {
        "candidateId": "seamless",
        "score": 30.74
      },
      {
        "candidateId": "seamless-v1",
        "score": 25.81
      }
    ]
  },
  {
    "id": "seedvc-libritts",
    "taskIds": [
      "voice-conversion"
    ],
    "title": "Seed-VC · zero-shot conversion",
    "dataset": "LibriTTS test-clean · 100 source utterances / 12 reference voices",
    "metric": "WER",
    "unit": "%",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2024-11",
    "sourceId": "br2-seed-eval",
    "locator": "Zero-shot voice conversion · Seed-VC row",
    "protocol": {
      "en": "Historical evaluation code identifies the Whisper-small / BigVGAN checkpoint; reference-conditioned conversion is evaluated with ASR WER.",
      "tr": "Tarihsel değerlendirme kodu Whisper-small / BigVGAN ağırlığını tanımlar; referans ses koşullu dönüşüm ASR WER ile değerlendirilir."
    },
    "limitation": {
      "en": "WER measures content preservation, not speaker similarity. The EVAL table predates the product called Seed-VC v2; its score is not transferred to that newer variant.",
      "tr": "WER içerik korunmasını ölçer, konuşmacı benzerliğini değil. EVAL tablosu Seed-VC v2 adlı üründen öncedir; skoru bu yeni varyanta aktarılmaz."
    },
    "results": [
      {
        "candidateId": "seedvc-2024",
        "score": 11.99
      }
    ]
  },
  {
    "id": "tangoflux-fd",
    "taskIds": [
      "text-to-audio-generation"
    ],
    "title": "TangoFlux · FD (OpenL3)",
    "dataset": "AudioCaps test · 886-sample split",
    "metric": "FD (OpenL3)",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2024-12",
    "sourceId": "br2-tangoflux",
    "locator": "Evaluation · TangoFlux / Tango 2 / AudioLDM 2 Large",
    "protocol": {
      "en": "Official common AudioCaps test comparison; generation lengths and sampling steps differ as disclosed in each row.",
      "tr": "Resmî ortak AudioCaps test karşılaştırması; üretim süreleri ve örnekleme adımları her satırda belirtildiği gibi farklıdır."
    },
    "limitation": {
      "en": "OpenL3 FD is not VGGish FAD. CLAP is machine-estimated alignment, not human preference. Tango 2 has the better reported KL metric, so there is no across-metric winner.",
      "tr": "OpenL3 FD, VGGish FAD değildir. CLAP makineyle kestirilen hizalamadır, insan tercihi değildir. Bildirilen KL metriğinde Tango 2 daha iyidir; tüm metrikler için tek lider yoktur."
    },
    "results": [
      {
        "candidateId": "tangoflux",
        "score": 75.1,
        "configuration": {
          "en": "50 steps / 30 s",
          "tr": "50 steps / 30 s"
        }
      },
      {
        "candidateId": "tango2",
        "score": 108.4,
        "configuration": {
          "en": "200 steps / 10 s",
          "tr": "200 steps / 10 s"
        }
      },
      {
        "candidateId": "audioldm2-l",
        "score": 108.3,
        "configuration": {
          "en": "200 steps / 10 s",
          "tr": "200 steps / 10 s"
        }
      }
    ]
  },
  {
    "id": "tangoflux-clap",
    "taskIds": [
      "text-to-audio-generation"
    ],
    "title": "TangoFlux · CLAP score",
    "dataset": "AudioCaps test · 886-sample split",
    "metric": "CLAP score",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2024-12",
    "sourceId": "br2-tangoflux",
    "locator": "Evaluation · TangoFlux / Tango 2 / AudioLDM 2 Large",
    "protocol": {
      "en": "Official common AudioCaps test comparison; generation lengths and sampling steps differ as disclosed in each row.",
      "tr": "Resmî ortak AudioCaps test karşılaştırması; üretim süreleri ve örnekleme adımları her satırda belirtildiği gibi farklıdır."
    },
    "limitation": {
      "en": "OpenL3 FD is not VGGish FAD. CLAP is machine-estimated alignment, not human preference. Tango 2 has the better reported KL metric, so there is no across-metric winner.",
      "tr": "OpenL3 FD, VGGish FAD değildir. CLAP makineyle kestirilen hizalamadır, insan tercihi değildir. Bildirilen KL metriğinde Tango 2 daha iyidir; tüm metrikler için tek lider yoktur."
    },
    "results": [
      {
        "candidateId": "tangoflux",
        "score": 0.48,
        "configuration": {
          "en": "50 steps / 30 s",
          "tr": "50 steps / 30 s"
        }
      },
      {
        "candidateId": "tango2",
        "score": 0.447,
        "configuration": {
          "en": "200 steps / 10 s",
          "tr": "200 steps / 10 s"
        }
      },
      {
        "candidateId": "audioldm2-l",
        "score": 0.419,
        "configuration": {
          "en": "200 steps / 10 s",
          "tr": "200 steps / 10 s"
        }
      }
    ]
  },
  {
    "id": "ace15-songeval",
    "taskIds": [
      "conditional-music-generation"
    ],
    "title": "ACE-Step 1.5 · SongEval",
    "dataset": "20 styles · Chinese / English structured prompts and lyrics",
    "metric": "SongEval musicality",
    "unit": "score",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2026-02",
    "sourceId": "br2-ace15-paper",
    "locator": "Table 1 · Mus. column",
    "protocol": {
      "en": "The paper specifies the 1.7B language-model and distilled-DiT generation pipeline; musicality comes from the ASLP-lab SongEval evaluator.",
      "tr": "Makale 1,7B dil modeli ve damıtılmış DiT üretim hattını belirtir; müzikalite ASLP-lab SongEval değerlendiricisinden gelir."
    },
    "limitation": {
      "en": "A model-based quality estimate on author-generated bilingual prompts, not a blinded human score. Other model rows lack an equally explicit checkpoint recipe; style and lyric alignment use the authors’ own reward models.",
      "tr": "Yazarların ürettiği iki dilli istemlerde model tabanlı kalite kestirimidir; kör insan değerlendirmesi değildir. Diğer model satırlarında aynı açıklıkta ağırlık tarifi yoktur; stil ve söz hizalaması yazarların kendi ödül modellerini kullanır."
    },
    "results": [
      {
        "candidateId": "ace",
        "score": 4.67,
        "configuration": {
          "en": "1.7B LM + dynamic distilled DiT; no RL",
          "tr": "1,7B LM + dinamik damıtılmış DiT; RL yok"
        }
      }
    ]
  },
  {
    "id": "p5-beauty-topk",
    "taskIds": [
      "top-k-recommendation"
    ],
    "title": "P5 · Beauty direct recommendation",
    "dataset": "Amazon Beauty · P5 test",
    "metric": "NDCG@10",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2022",
    "sourceId": "br2-p5-eval",
    "locator": "Direct recommendation · prompt 5-8 · recorded output",
    "protocol": {
      "en": "Published notebook: Beauty small checkpoint, prompt 5-8, direct candidate recommendation and the notebook’s ranking procedure.",
      "tr": "Yayımlanan not defteri: Beauty small ağırlığı, 5-8 istemi, doğrudan aday önerisi ve not defterinin sıralama yöntemi."
    },
    "limitation": {
      "en": "Prompt 2-13 is sequential recommendation with a different score; prompt 5-5 is another configuration, not another model. The original Drive tensor was not bit-compared to the author-linked HF distribution.",
      "tr": "2-13 istemi farklı skorlu sıralı öneridir; 5-5 başka model değil başka ayardır. Özgün Drive tensörü, yazarın bağlantıladığı HF dağıtımıyla bit düzeyinde karşılaştırılmadı."
    },
    "results": [
      {
        "candidateId": "p5-beauty-small",
        "score": 0.134
      }
    ]
  },
  {
    "id": "matrixformer-missbench",
    "taskIds": [
      "missing-value-imputation"
    ],
    "title": "MatrixFormer · MissBench",
    "dataset": "MissBench · 42 datasets / 11 patterns / 40% missing",
    "metric": "Macro NRMSE",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-10-04",
    "sourceId": "br2-matrixformer",
    "locator": "Overall tabular NRMSE · MissBench overall",
    "protocol": {
      "en": "462 cases; average cases within each dataset then weight datasets equally. Full-matrix context; no row train/test split. MatrixFormer+ fits a convex blend using observed entries only.",
      "tr": "462 durum; önce veri kümesi içindeki durumlar ortalanır, sonra veri kümeleri eşit ağırlık alır. Tam matris bağlamı; satır bazında eğitim/test ayrımı yoktur. MatrixFormer+ yalnızca gözlenen girdilerden dışbükey karışım katsayısı uyarlar."
    },
    "limitation": {
      "en": "Exploratory publisher campaign, not independent validation. Hidden targets are excluded from fitting, but observed reconstruction loss is in-sample. The blend worsens the MNAR pattern relative to the general expert.",
      "tr": "Yayıncının keşif amaçlı çalışmasıdır; bağımsız doğrulama değildir. Gizli hedefler uyarlamaya katılmaz ancak gözlenen yeniden kurma kaybı örneklem içidir. Karışım MNAR örüntüsünde genel uzmandan kötüdür."
    },
    "results": [
      {
        "candidateId": "matrixformer",
        "score": 1.674085
      },
      {
        "candidateId": "matrixformer-recsys",
        "score": 1.84499
      },
      {
        "candidateId": "matrixformer-plus",
        "score": 1.579644
      }
    ]
  },
  {
    "id": "matrixformer-ratings",
    "taskIds": [
      "rating-prediction"
    ],
    "title": "MatrixFormer · MovieLens ratings",
    "dataset": "MovieLens 100K · frozen outer splits",
    "metric": "User-macro RMSE",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-10-04",
    "sourceId": "br2-matrixformer",
    "locator": "Recommender systems · MovieLens 100K RMSE",
    "protocol": {
      "en": "Each expert uses its documented normalization, context and rating clipping; macro-average over test users in original rating units. The blend chooses specialist weight 1.0.",
      "tr": "Her uzman belgelenmiş normalizasyon, bağlam ve puan kırpmasını kullanır; özgün puan birimlerinde test kullanıcılarının makro ortalaması alınır. Karışım uzman ağırlığını 1,0 seçer."
    },
    "limitation": {
      "en": "Compared deployed recipes differ; this is not weights-only attribution. The equal specialist and blend scores are identical predictions, not independent confirmations.",
      "tr": "Karşılaştırılan kullanım tarifleri farklıdır; kazanım yalnızca ağırlıklara atfedilemez. Eşit uzman ve karışım skorları aynı tahminlerdir, bağımsız doğrulamalar değildir."
    },
    "results": [
      {
        "candidateId": "matrixformer",
        "score": 0.92016
      },
      {
        "candidateId": "matrixformer-recsys",
        "score": 0.887358
      },
      {
        "candidateId": "matrixformer-plus",
        "score": 0.887358
      }
    ]
  },
  {
    "id": "graphany-overall",
    "taskIds": [
      "node-classification"
    ],
    "title": "GraphAny · seed-0 released models",
    "dataset": "GraphAny · 31 graph datasets",
    "metric": "Mean test accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2025",
    "sourceId": "br2-graphany",
    "locator": "Reproduce commands · saved seed-0 checkpoints",
    "protocol": {
      "en": "Same 31-dataset overall evaluation with the released seed-0 meta-models. Target graph features and labeled support nodes are still required.",
      "tr": "Yayımlanan seed-0 meta-modelleriyle aynı 31 veri kümeli genel değerlendirme. Hedef graf özellikleri ve etiketli destek düğümleri yine gerekir."
    },
    "limitation": {
      "en": "Overall includes the training graph; do not call it wholly out-of-domain. Training graph and model capacity differ, and one seed does not establish statistical significance.",
      "tr": "Genel ortalama eğitim grafını da içerir; tamamı alan dışı sayılmaz. Eğitim grafı ve model kapasitesi farklıdır; tek tohum istatistiksel anlamlılık oluşturmaz."
    },
    "results": [
      {
        "candidateId": "graphany-cora",
        "score": 66.98
      },
      {
        "candidateId": "graphany-arxiv",
        "score": 67.58
      },
      {
        "candidateId": "graphany-product",
        "score": 67.77
      }
    ]
  },
  {
    "id": "dgl-tox21",
    "taskIds": [
      "graph-classification",
      "molecular-property-prediction"
    ],
    "title": "DGL-LifeSci · Tox21",
    "dataset": "MoleculeNet Tox21 · scaffold test split",
    "metric": "ROC-AUC",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "br2-dgl-molecule",
    "locator": "Tox21 · Test ROC-AUC",
    "protocol": {
      "en": "Released pretrained models; scaffold split and 32-trial Bayesian hyperparameter search with selection by validation performance. Matching featurizers and heads are required.",
      "tr": "Yayımlanan ön eğitimli modeller; iskelet bazlı bölüm ve doğrulama performansıyla seçilen 32 denemeli Bayes hiperparametre araması. Eşleşen özellik çıkarıcılar ve başlıklar gerekir."
    },
    "limitation": {
      "en": "Scores are rounded to two decimals. This is molecular graph toxicity classification across 12 assays, not all graph classification or all molecular properties; no clinical interpretation follows.",
      "tr": "Skorlar iki ondalığa yuvarlanmıştır. Bu, 12 deneyde molekül grafı toksisite sınıflandırmasıdır; tüm graf sınıflandırma veya moleküler özellikleri kapsamaz; klinik yorum çıkarılamaz."
    },
    "results": [
      {
        "candidateId": "dgl-gcn-tox21",
        "score": 0.77
      },
      {
        "candidateId": "dgl-gcn-afp-tox21",
        "score": 0.79
      },
      {
        "candidateId": "dgl-gin-edge-tox21",
        "score": 0.8
      }
    ]
  },
  {
    "id": "chgnet-mptrj",
    "taskIds": [
      "graph-regression"
    ],
    "title": "CHGNet · crystal energy",
    "dataset": "MPtrj test · CHGNet 0.3.0",
    "metric": "Energy MAE (meV/atom)",
    "unit": "score",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2023",
    "sourceId": "br2-chgnet",
    "locator": "MPtrj · Test row / Energy",
    "protocol": {
      "en": "The released 0.3.0 crystal-graph potential’s held-out energy error, in meV per atom.",
      "tr": "Yayımlanan 0.3.0 kristal grafı potansiyelinin ayrılmış testteki enerji hatası; atom başına meV."
    },
    "limitation": {
      "en": "MPtrj-trained 0.3.0 is distinct from the newer MatPES potentials. Energy, force, stress and magnetic-moment errors have different units and cannot be pooled.",
      "tr": "MPtrj ile eğitilen 0.3.0, daha yeni MatPES potansiyellerinden farklıdır. Enerji, kuvvet, gerilme ve manyetik moment hatalarının birimleri farklıdır; birleştirilemez."
    },
    "results": [
      {
        "candidateId": "chgnet",
        "score": 29
      }
    ]
  },
  {
    "id": "scan-cifar10-eval",
    "taskIds": [
      "clustering"
    ],
    "title": "SCAN · CIFAR-10 clustering",
    "dataset": "CIFAR-10 · ten clusters",
    "metric": "Clustering accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2020",
    "sourceId": "br2-scan",
    "locator": "Model zoo · CIFAR10 / SCAN",
    "protocol": {
      "en": "Published SCAN-loss checkpoint with cluster-to-label evaluation. The separately released self-labeling stage has a different checkpoint.",
      "tr": "Yayımlanan SCAN-loss ağırlığı ve kümeden etikete değerlendirme. Ayrı yayımlanan self-labeling aşaması farklı ağırlıktır."
    },
    "limitation": {
      "en": "A 2020 image-clustering reference. The self-labeling score 88.3 is not assigned to the SCAN-loss file, and ACC is not label-free internal cluster validity.",
      "tr": "2020 görüntü kümeleme referansıdır. Self-labeling 88,3 skoru SCAN-loss dosyasına atanmaz; ACC, etiketsiz iç küme geçerliliği değildir."
    },
    "results": [
      {
        "candidateId": "scan-cifar10",
        "score": 81.6
      }
    ]
  },
  {
    "id": "uva-flow-mnist",
    "taskIds": [
      "density-estimation"
    ],
    "title": "UvA · MNIST density estimation",
    "dataset": "MNIST test · discrete pixel likelihood",
    "metric": "Bits per dimension",
    "unit": "bits/dim",
    "direction": "lower",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "br2-uva-flow",
    "locator": "Recorded notebook output · Model / Test Bpd table",
    "protocol": {
      "en": "Released pretrained PyTorch flow checkpoints with the tutorial’s dequantization and test likelihood estimation.",
      "tr": "Eğitim materyalinin dequantization ve test olabilirlik kestirimiyle yayımlanmış ön eğitimli PyTorch flow ağırlıkları."
    },
    "limitation": {
      "en": "An educational, domain-specific likelihood comparison; parameter counts differ. Not anomaly-detection F1, not cross-dataset density quality, and not a current frontier claim.",
      "tr": "Öğretici, alana özel olabilirlik karşılaştırması; parametre sayıları farklıdır. Anomali F1’i veya veri kümeleri arası yoğunluk kalitesi değildir; güncel en ileri model iddiası yoktur."
    },
    "results": [
      {
        "candidateId": "uva-flow-simple",
        "score": 1.078
      },
      {
        "candidateId": "uva-flow-vardeq",
        "score": 1.043
      },
      {
        "candidateId": "uva-mnist-flow",
        "score": 1.02
      }
    ]
  },
  {
    "id": "timeradar-zero-shot",
    "taskIds": [
      "anomaly-detection"
    ],
    "title": "TimeRadar · zero-shot anomaly detection",
    "dataset": "Eight datasets · SMD/MSL/PSM/SWaT/SMAP/CICIDS/SWAN/Creditcard",
    "metric": "Mean ROC-AUC",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-02",
    "sourceId": "br2-timeradar-paper",
    "locator": "Table 1 · Zero-shot / TimeRadar / AUC-R Avg.",
    "protocol": {
      "en": "Monash+ pretrained model without target-dataset fine-tuning. Average ROC-AUC across eight multivariate anomaly datasets; not point-adjusted F1.",
      "tr": "Hedef veri kümesinde ince ayarsız Monash+ ön eğitimli model. Sekiz çok değişkenli anomali veri kümesinde ortalama ROC-AUC; nokta düzeltmeli F1 değildir."
    },
    "limitation": {
      "en": "Publisher evaluation; baseline family names do not fully specify every released checkpoint, so only the identified TimeRadar artifact is scored here. Random inference masks need a seed for reproduction.",
      "tr": "Yayıncı değerlendirmesidir; taban model aile adları her yayımlanmış ağırlığı tam belirtmediğinden burada yalnızca tanımlanan TimeRadar dosyası puanlanır. Yeniden üretim için rastgele çıkarım maskelerine tohum gerekir."
    },
    "results": [
      {
        "candidateId": "timeradar",
        "score": 76.97
      }
    ]
  },
  {
    "id": "autocpd-hasc-eval",
    "taskIds": [
      "change-point-detection"
    ],
    "title": "AutoCPD · HASC window classification",
    "dataset": "HASC · 28 activity/change classes",
    "metric": "Test classification accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "publisher",
    "resultDate": "2023-10",
    "sourceId": "br2-autocpd-paper",
    "locator": "Supplement · Figures 12–13 / test accuracy 0.9623",
    "protocol": {
      "en": "The 21-residual-block HASC classifier underlying the released Demo model is evaluated on segmented activity/change windows.",
      "tr": "Yayımlanan Demo modelinin temelindeki 21 artık bloklu HASC sınıflandırıcısı, bölümlenmiş etkinlik/değişim pencerelerinde değerlendirilir."
    },
    "limitation": {
      "en": "This is a classifier proxy, not continuous change-point localization F1 or delay. Postprocessing and windowing are needed; simulated-signal results are not assigned to the HASC checkpoint.",
      "tr": "Bu bir sınıflandırıcı vekil metriğidir; sürekli değişim noktası yerelleştirme F1’i veya gecikmesi değildir. Son işleme ve pencereleme gerekir; benzetim sinyali sonuçları HASC ağırlığına atanmaz."
    },
    "results": [
      {
        "candidateId": "autocpd-hasc",
        "score": 96.23
      }
    ]
  },
  {
    "id": "blitz-boltz-structure",
    "taskIds": [
      "protein-structure-prediction"
    ],
    "title": "Blitz · Boltz-2 structure comparison",
    "dataset": "Boltz benchmark · approximately 2,300 targets",
    "metric": "Complex lDDT",
    "unit": "score",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2026-10-16",
    "sourceId": "br2-blitz-boltz-k16-card",
    "locator": "Results · Boltz-2 teacher / Blitz K8 / Blitz K16",
    "protocol": {
      "en": "Same five-candidate reference-free reranker and target set. NFE counts denoiser evaluations; the teacher uses three recycle updates.",
      "tr": "Aynı beş adaylı referanssız yeniden sıralayıcı ve hedef kümesi. NFE gürültü giderici değerlendirme sayısıdır; öğretmen üç geri çevrim güncellemesi kullanır."
    },
    "limitation": {
      "en": "K16 improves this point estimate with far fewer denoiser calls, but RF-valid is lower than the teacher. Complex lDDT is structural accuracy, not binding affinity, clinical utility or guaranteed physical validity.",
      "tr": "K16 çok daha az gürültü giderici çağrısıyla bu nokta tahminini iyileştirir ancak RF-valid öğretmenden düşüktür. Kompleks lDDT yapısal doğruluktur; bağlanma afinitesi, klinik yarar veya fiziksel geçerlilik garantisi değildir."
    },
    "results": [
      {
        "candidateId": "boltz",
        "score": 0.8499,
        "configuration": {
          "en": "Teacher · 600 NFE",
          "tr": "Öğretmen · 600 NFE"
        }
      },
      {
        "candidateId": "blitz-boltz-k8",
        "score": 0.8492,
        "configuration": {
          "en": "Distilled · 8 NFE",
          "tr": "Damıtılmış · 8 NFE"
        }
      },
      {
        "candidateId": "blitz-boltz-k16",
        "score": 0.8533,
        "configuration": {
          "en": "Distilled · 16 NFE",
          "tr": "Damıtılmış · 16 NFE"
        }
      }
    ]
  },
  {
    "id": "eqr-sudoku-full",
    "taskIds": [
      "constraint-satisfaction"
    ],
    "title": "EqR · full Sudoku evaluation",
    "dataset": "Sudoku-Extreme · 423,168 evaluated examples",
    "metric": "Convergence top-k exact accuracy",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": null,
    "sourceId": "br2-eqr",
    "locator": "Full paper-scale run · convergence_top_k/exact_accuracy",
    "protocol": {
      "en": "Released Sudoku checkpoint; depth 64, breadth 128, convergence top-4 selection, Langevin noise 0.5 and latent reset 1.0.",
      "tr": "Yayımlanan Sudoku ağırlığı; derinlik 64, genişlik 128, yakınsama top-4 seçimi, Langevin gürültüsü 0,5 ve gizil sıfırlama 1,0."
    },
    "limitation": {
      "en": "Large test-time search budget on one constrained puzzle family. The 2,048-sample smoke run and cumulative any-correct metric are different results, and Sudoku does not imply arbitrary SAT/CSP solving.",
      "tr": "Tek kısıtlı bulmaca ailesinde büyük test zamanı arama bütçesi. 2.048 örnekli kısa kontrol ve birikimli herhangi-biri-doğru metriği farklı sonuçlardır; Sudoku başarısı genel SAT/CSP çözümü anlamına gelmez."
    },
    "results": [
      {
        "candidateId": "eqr-sudoku",
        "score": 99.557
      }
    ]
  },
  {
    "id": "hloc-aachen-night",
    "taskIds": [
      "robot-localization"
    ],
    "title": "hloc · Aachen night camera localization",
    "dataset": "Aachen Day-Night v1.0 · night",
    "metric": "Recall at 0.25 m / 2°",
    "unit": "%",
    "direction": "higher",
    "scope": "proxy",
    "provenance": "independent",
    "resultDate": "2020-07-19",
    "sourceId": "br2-hloc-aachen",
    "locator": "Submission 10931 · night / first threshold",
    "protocol": {
      "en": "NetVLAD Pitts-30k top-50 retrieval, 4,096 SuperPoint keypoints, NMS 3, 1,024-pixel images and SuperGlue outdoor. Geometric pose recovery uses the reference map.",
      "tr": "NetVLAD Pitts-30k top-50 geri getirme, 4.096 SuperPoint anahtar noktası, NMS 3, 1.024 piksellik görüntüler ve SuperGlue outdoor. Geometrik poz çıkarımı referans haritayı kullanır."
    },
    "limitation": {
      "en": "Camera relocalization is a proxy for robot localization. Camera-to-robot calibration, map frame and online tracking are additional requirements; this is not robot trajectory or SLAM drift accuracy.",
      "tr": "Kamera yeniden konumlandırması robot konumlandırması için vekildir. Kamera–robot kalibrasyonu, harita çerçevesi ve çevrim içi takip ek gereksinimlerdir; robot yörüngesi veya SLAM sürüklenme doğruluğu değildir."
    },
    "results": [
      {
        "candidateId": "hloc-superglue",
        "score": 86.7
      }
    ]
  },
  {
    "id": "neuralmp-real",
    "taskIds": [
      "robot-motion-planning"
    ],
    "title": "Neural Motion Planner · real world",
    "dataset": "48 free-hand tasks · tabletop / shelf / articulated",
    "metric": "Success rate",
    "unit": "%",
    "direction": "higher",
    "scope": "direct",
    "provenance": "publisher",
    "resultDate": "2024-09",
    "sourceId": "br2-neuralmp-paper",
    "locator": "Table I · Ours / Avg",
    "protocol": {
      "en": "Published physical evaluation with the full planning and vision-based collision-checking pipeline. The provided release supports the test-time optimization mode.",
      "tr": "Tam planlama ve görüntü tabanlı çarpışma denetimi hattıyla yayımlanmış fiziksel değerlendirme. Sunulan sürüm test zamanı optimizasyonu kipini destekler."
    },
    "limitation": {
      "en": "Without test-time optimization the paper reports 66.67%, not 95.83%. These are the authors’ robot experiments; no robot was operated here and the score is not a safety guarantee.",
      "tr": "Makale test zamanı optimizasyonu olmadan %95,83 değil %66,67 bildirir. Bunlar yazarların robot deneyleridir; burada robot çalıştırılmadı ve skor güvenlik garantisi değildir."
    },
    "results": [
      {
        "candidateId": "neuralmp",
        "score": 95.83,
        "configuration": {
          "en": "Policy + test-time optimization",
          "tr": "Politika + test zamanı optimizasyonu"
        }
      }
    ]
  }
];

export const taskBenchmarkReviews: TaskBenchmarkReview[] = [
  {
    "taskId": "text-classification",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "gliner25",
      "gliner25multi",
      "gliner2",
      "compact-re05"
    ],
    "summary": {
      "en": "A June 2026 study releases its best small relation-extraction adapter and reports 0.83 General Avg positive-class micro-F1.",
      "tr": "Haziran 2026 çalışması en iyi küçük ilişki çıkarım adaptörünü yayımlar ve General Avg pozitif sınıf mikro F1 değerini 0,83 olarak bildirir."
    },
    "limitation": {
      "en": "The result is task-tuned and rounded. ReLiK NYT extraction, GLiNER entity extraction and the seven-dataset general average are not the same protocol.",
      "tr": "Sonuç göreve ince ayarlıdır ve yuvarlanmıştır. ReLiK NYT çıkarımı, GLiNER varlık çıkarımı ve yedi veri kümeli genel ortalama aynı protokol değildir."
    },
    "sourceIds": [
      "bm-gliner25",
      "bm-card-gliner25",
      "bm-card-gliner25multi",
      "ow-gliner2",
      "br2-compact-paper",
      "br2-compact-re",
      "br2-compact-re05-card"
    ]
  },
  {
    "taskId": "coreference-resolution",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "stanza",
      "udpipe-ewt"
    ],
    "summary": {
      "en": "The currently listed UDPipe 2.17 English EWT release provides 96.75 UPOS F1 with an identifiable public weight bundle.",
      "tr": "Listelenen UDPipe 2.17 English EWT sürümü, kimliği belli açık ağırlık paketiyle 96,75 UPOS F1 sunar."
    },
    "limitation": {
      "en": "The latest UD treebank release and latest UDPipe model release are separate. Stanza’s older performance table is not assigned to its current package; no cross-version winner is claimed.",
      "tr": "En yeni UD veri kümesi ile en yeni UDPipe model sürümü ayrıdır. Stanza’nın eski performans tablosu güncel paketine atanmaz; farklı sürümler arasında liderlik iddiası kurulmaz."
    },
    "sourceIds": [
      "ow-stanza",
      "ow-stanza-docs",
      "br2-stanza-performance",
      "br2-udpipe"
    ]
  },
  {
    "taskId": "syntactic-parsing",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "stanza",
      "udpipe-ewt"
    ],
    "summary": {
      "en": "The currently listed UDPipe 2.17 English EWT release provides 89.91 LAS F1 with an identifiable public weight bundle.",
      "tr": "Listelenen UDPipe 2.17 English EWT sürümü, kimliği belli açık ağırlık paketiyle 89,91 LAS F1 sunar."
    },
    "limitation": {
      "en": "The latest UD treebank release and latest UDPipe model release are separate. Stanza’s older performance table is not assigned to its current package; no cross-version winner is claimed.",
      "tr": "En yeni UD veri kümesi ile en yeni UDPipe model sürümü ayrıdır. Stanza’nın eski performans tablosu güncel paketine atanmaz; farklı sürümler arasında liderlik iddiası kurulmaz."
    },
    "sourceIds": [
      "ow-stanza",
      "ow-stanza-docs",
      "br2-stanza-performance",
      "br2-udpipe"
    ]
  },
  {
    "taskId": "text-generation",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "qwen38",
      "deepseek41",
      "bart",
      "segenc-spans",
      "segenc-stock"
    ],
    "summary": {
      "en": "A September 2026 QMSum release supplies exact checkpoints, predictions and one scorer. Span-trained SegEnc scores 36.33 ROUGE-1; the stock-checkpoint port scores 35.30.",
      "tr": "Eylül 2026 QMSum yayını tam ağırlıkları, tahminleri ve tek puanlayıcıyı sunar. Aralıklarla eğitilmiş SegEnc 36,33 ROUGE-1, özgün ağırlığın aktarımı 35,30 alır."
    },
    "limitation": {
      "en": "Query-focused English meeting summarization with different input regimes. The result does not establish a generic summarization winner or factuality guarantee.",
      "tr": "Farklı girdi düzenleriyle sorgu odaklı İngilizce toplantı özetlemesidir. Genel özetleme liderliği veya olgusal doğruluk garantisi oluşturmaz."
    },
    "sourceIds": [
      "ow-qwen38",
      "ow-deepseek41",
      "ow-bart",
      "br2-qmsum",
      "br2-segenc-spans-card",
      "br2-segenc-stock-card"
    ]
  },
  {
    "taskId": "multi-document-summarization",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "qwen38",
      "r1-qwen14"
    ],
    "summary": {
      "en": "ThinkQE provides a reproducible published system-level reference: 34.9 mean nDCG@10 using an open R1-distilled Qwen-14B generator.",
      "tr": "ThinkQE, açık R1 damıtılmış Qwen-14B üreticisiyle 34,9 ortalama nDCG@10 bildiren, yeniden üretilebilir yayımlanmış sistem referansı sunar."
    },
    "limitation": {
      "en": "The retrieval index, iterative feedback, prompt recipe and domain subset are required. The verified v1 table is retained instead of attaching a later Phi-4 headline to unspecified settings.",
      "tr": "Geri getirme indeksi, yinelemeli geribildirim, istem tarifi ve alan alt kümesi gerekir. Sonraki Phi-4 başlık skoru belirsiz ayarlara atanmak yerine doğrulanmış v1 tablosu korunur."
    },
    "sourceIds": [
      "bm-card-mqr",
      "ow-qwen38",
      "br2-thinkqe-code",
      "br2-thinkqe",
      "br2-r1-qwen14-card"
    ]
  },
  {
    "taskId": "top-k-recommendation",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "p5-beauty-small"
    ],
    "summary": {
      "en": "The official P5 notebook contains an exact recorded direct-recommendation output: Beauty small, prompt 5-8, NDCG@10 0.1340.",
      "tr": "Resmî P5 not defterinde tam kayıtlı doğrudan öneri çıktısı var: Beauty small, 5-8 istemi, NDCG@10 0,1340."
    },
    "limitation": {
      "en": "A catalogue-specific 2022 reference, not a zero-shot recommendation leaderboard. Candidate construction, user/item IDs and prompt changes alter the metric; modern rating RMSE does not rank top-k recommendations.",
      "tr": "Kataloğa özel 2022 referansıdır; sıfır örnekli öneri liderlik tablosu değildir. Aday oluşturma, kullanıcı/ürün kimlikleri ve istem değişiklikleri metriği etkiler; güncel puan tahmini RMSE’si top-k öneriyi sıralamaz."
    },
    "sourceIds": [
      "ow-p5-beauty-small",
      "ow-p5-author-release",
      "ow-p5-beauty-evaluation",
      "ow-p5-beauty-config",
      "br2-p5-eval"
    ]
  },
  {
    "taskId": "rating-prediction",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "p5-beauty-small",
      "matrixformer",
      "matrixformer-recsys",
      "matrixformer-plus"
    ],
    "summary": {
      "en": "The current MovieLens 100K comparison favors the recommender specialist over the general MatrixFormer expert. MatrixFormer+ ties because it selects that specialist entirely.",
      "tr": "Güncel MovieLens 100K karşılaştırmasında öneri uzmanı, genel MatrixFormer uzmanından daha iyi sonuç verir. MatrixFormer+ tamamen bu uzmanı seçtiği için aynı skoru alır."
    },
    "limitation": {
      "en": "No cross-dataset averaging with P5 Beauty or top-k recommendation. The authors note that conventional MF/SVD/PMF remain stronger on their larger MovieLens datasets.",
      "tr": "P5 Beauty veya top-k öneriyle veri kümeleri arası ortalama alınmaz. Yazarlar büyük MovieLens veri kümelerinde geleneksel MF/SVD/PMF yöntemlerinin daha güçlü kaldığını belirtir."
    },
    "sourceIds": [
      "ow-p5-beauty-small",
      "ow-p5-author-release",
      "ow-p5-beauty-evaluation",
      "ow-p5-beauty-config",
      "br2-matrixformer",
      "br2-matrixformer-card",
      "br2-matrixformer-recsys-card",
      "br2-matrixformer-plus-card"
    ]
  },
  {
    "taskId": "image-classification",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "siglip",
      "mlp-mixer",
      "resnet50-ssl",
      "jem",
      "siglip2-giant"
    ],
    "summary": {
      "en": "SigLIP 2 g-opt/16 scores 85.0 versus 84.1 for So400m/14 on the same published zero-shot ImageNet evaluation.",
      "tr": "Aynı yayımlanmış sıfır örnekli ImageNet değerlendirmesinde SigLIP 2 g-opt/16, So400m/14 için 84,1 olan skora karşı 85,0 alır."
    },
    "limitation": {
      "en": "A 2025 reference checked in 2026. The larger model’s higher score has a compute cost; no universal image classifier is established.",
      "tr": "2026’da kontrol edilen 2025 referansıdır. Büyük modelin daha yüksek skoru ek hesaplama maliyeti taşır; evrensel bir görüntü sınıflandırma lideri belirlenmez."
    },
    "sourceIds": [
      "ow-siglip",
      "ow-mlp-mixer",
      "ow-resnet50-ssl",
      "ow-jem",
      "ow-ssl-method",
      "br2-siglip",
      "br2-siglip2-giant-card"
    ]
  },
  {
    "taskId": "object-detection",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "dino",
      "sam3",
      "rfdetr-m",
      "rfdetr-l"
    ],
    "summary": {
      "en": "RF-DETR Large has higher COCO box AP than Medium, at a larger input resolution and model size.",
      "tr": "RF-DETR Large, daha büyük girdi çözünürlüğü ve model boyutuyla Medium’dan yüksek COCO kutu AP değerine ulaşır."
    },
    "limitation": {
      "en": "The official table was rechecked on 2026-10-21 but does not date each measurement. Closed-set COCO detection is distinct from Grounding DINO open-vocabulary prompting.",
      "tr": "Resmî tablo 2026-10-21’de yeniden kontrol edildi ancak her ölçümün tarihi belirtilmiyor. Kapalı sınıflı COCO algılama, Grounding DINO’nun açık sözlüklü istem kullanımından farklıdır."
    },
    "sourceIds": [
      "ow-dino",
      "ow-sam3",
      "br2-rfdetr",
      "br2-rfdetr-m-card",
      "br2-rfdetr-l-card"
    ]
  },
  {
    "taskId": "semantic-segmentation",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "sam3",
      "rfdetr-seg-l",
      "rfdetr-seg-2xl"
    ],
    "summary": {
      "en": "RF-DETR Seg 2XL leads the selected released COCO models with 49.9 mask AP; Seg Large has 47.1.",
      "tr": "Seçili yayımlanmış COCO modellerinde RF-DETR Seg 2XL, 49,9 maske AP ile öndedir; Seg Large 47,1 alır."
    },
    "limitation": {
      "en": "Native resolutions differ and no matched-compute claim is made. The publisher’s current table has no per-result date.",
      "tr": "Doğal çözünürlükler farklıdır; eşit hesaplama bütçesi iddiası yoktur. Yayıncının güncel tablosunda sonuç başına tarih bulunmaz."
    },
    "sourceIds": [
      "ow-sam3",
      "br2-rfdetr",
      "br2-rfdetr-seg-l-card",
      "br2-rfdetr-seg-2xl-card"
    ]
  },
  {
    "taskId": "depth-estimation",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "videomae",
      "videomaev2-s",
      "videomaev2-b"
    ],
    "summary": {
      "en": "The exact MMAction2 VideoMAE V2 Base artifact reaches 86.6 top-1 versus 83.6 for Small with the same clip/crop protocol.",
      "tr": "Tam MMAction2 VideoMAE V2 Base dosyası, aynı klip/kırpma protokolünde Small’un 83,6 skoruna karşı 86,6 top-1 alır."
    },
    "limitation": {
      "en": "A 2023 action-recognition reference. Generic video chat or temporal-reasoning scores are not interchangeable with K400 classification.",
      "tr": "2023 eylem tanıma referansıdır. Genel video sohbeti veya zamansal akıl yürütme skorları K400 sınıflandırmasının yerine geçmez."
    },
    "sourceIds": [
      "ow-videomae",
      "br2-videomaev2"
    ]
  },
  {
    "taskId": "optical-character-recognition",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "qwen38",
      "florence-base-ft",
      "florence-large-ft"
    ],
    "summary": {
      "en": "The released Florence-2 large-ft checkpoint scores 143.3 CIDEr versus 140.0 for base-ft under the same fine-tuned COCO protocol.",
      "tr": "Yayımlanmış Florence-2 large-ft ağırlıkları aynı ince ayarlı COCO protokolünde base-ft’nin 140,0 skoruna karşı 143,3 CIDEr alır."
    },
    "limitation": {
      "en": "This is a dated 2024 captioning reference, not proof against every 2026 VLM. General visual-QA scores do not substitute for caption evaluation.",
      "tr": "Bu, 2024 tarihli açıklama üretim referansıdır; tüm 2026 VLM’lerine karşı kanıt değildir. Genel görsel soru-cevap skorları açıklama değerlendirmesi yerine geçmez."
    },
    "sourceIds": [
      "ow-qwen38",
      "br2-florence-base-ft-card",
      "br2-florence-large-ft-card"
    ]
  },
  {
    "taskId": "visual-question-answering",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "qwen38",
      "qwen2vl72",
      "qwen25vl72"
    ],
    "summary": {
      "en": "Qwen2.5-VL-72B has a small published DocVQA advantage over Qwen2-VL-72B: 96.4 versus 96.1 ANLS.",
      "tr": "Qwen2.5-VL-72B’nin Qwen2-VL-72B’ye göre yayımlanmış DocVQA üstünlüğü küçüktür: 96,4’e karşı 96,1 ANLS."
    },
    "limitation": {
      "en": "A 2025 validation-set comparison. Newer OCR or document parsing results are different tasks and do not establish a 2026 DocVQA winner.",
      "tr": "2025 doğrulama kümesi karşılaştırmasıdır. Daha yeni OCR veya belge ayrıştırma sonuçları farklı görevlerdir ve 2026 DocVQA lideri belirlemez."
    },
    "sourceIds": [
      "ow-qwen38",
      "br2-qwen25vl72-card",
      "br2-qwen2vl72-card"
    ]
  },
  {
    "taskId": "text-to-image-generation",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "ltx23",
      "wan",
      "wan22-t2v",
      "wan21-t2v14"
    ],
    "summary": {
      "en": "The current VBench Gold rows support a bounded comparison of released Wan checkpoints. Wan2.2 with Qwen prompt optimization scores 84.23; the earlier Wan2.1-T2V-14B system scores 83.69.",
      "tr": "Güncel VBench Gold satırları yayımlanmış Wan ağırlıkları arasında sınırlı bir karşılaştırma sağlar. Qwen istem iyileştirmeli Wan2.2 84,23; önceki Wan2.1-T2V-14B sistemi 83,69 alır."
    },
    "limitation": {
      "en": "The benefit depends on the full sampling pipeline: unoptimized Wan2.2 scores 82.61. Neither LTX-2 results nor closed Wan APIs are assigned to LTX-2.3 or open Wan weights.",
      "tr": "Fayda tüm örnekleme hattına bağlıdır: iyileştirmesiz Wan2.2 82,61 alır. LTX-2 sonuçları LTX-2.3’e, kapalı Wan API sonuçları açık Wan ağırlıklarına aktarılmaz."
    },
    "sourceIds": [
      "bm-card-ltx23",
      "ow-wan",
      "br2-vbench-live",
      "br2-wan22-t2v-card",
      "br2-wan21-t2v14-card"
    ]
  },
  {
    "taskId": "image-to-video-generation",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "ltx23",
      "wan",
      "wan22-i2v"
    ],
    "summary": {
      "en": "Wan2.2-TI2V-5B slightly leads the selected Qwen-prompt-optimized I2V systems on the VBench total score, 88.80 versus 88.68.",
      "tr": "Wan2.2-TI2V-5B, seçili Qwen istem iyileştirmeli I2V sistemlerinde VBench toplam skoruyla az farkla öndedir: 88,80’e karşı 88,68."
    },
    "limitation": {
      "en": "This is a 2026 independent leaderboard result for named releases, not a universal quality or speed ranking. The margin is small and no uncertainty interval is supplied.",
      "tr": "Adı belirtilen sürümler için 2026 bağımsız tablo sonucudur; evrensel kalite veya hız sıralaması değildir. Fark küçüktür ve belirsizlik aralığı verilmemiştir."
    },
    "sourceIds": [
      "bm-card-ltx23",
      "ow-wan",
      "br2-vbench-live",
      "br2-wan22-i2v-card"
    ]
  },
  {
    "taskId": "text-to-3d-generation",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "shape"
    ],
    "summary": {
      "en": "The original text-only Shap-E release has a published 40.9 CLIP R-Precision result.",
      "tr": "Özgün yalnızca metin koşullu Shap-E sürümü için yayımlanmış 40,9 CLIP R-Precision sonucu bulundu."
    },
    "limitation": {
      "en": "Newer HY3D-Bench and Hunyuan3D results often evaluate image-to-3D. Without a specified text-to-image front end they do not form a direct replacement comparison; this remains a historical single-model reference.",
      "tr": "Daha yeni HY3D-Bench ve Hunyuan3D sonuçları çoğunlukla görüntüden 3B üretimi değerlendirir. Belirtilmiş bir metinden görüntü ön aşaması olmadan doğrudan karşılaştırma oluşturmazlar; bu, tek model için tarihsel referans olarak kalır."
    },
    "sourceIds": [
      "ow-shape",
      "br2-hy3d-bench",
      "br2-shape-paper"
    ]
  },
  {
    "taskId": "automatic-speech-recognition",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "seamless",
      "seamless-v1"
    ],
    "summary": {
      "en": "Official per-language CSVs show SeamlessM4T v2 Large improving Turkish-to-English speech translation BLEU from 25.81 to 30.74.",
      "tr": "Resmî dil bazlı CSV’ler, SeamlessM4T v2 Large’ın Türkçeden İngilizceye konuşma çevirisi BLEU değerini 25,81’den 30,74’e çıkardığını gösterir."
    },
    "limitation": {
      "en": "This is a 2023 paired-release reference for Turkish speech to English text. Recognition WER, translated speech quality and other language directions remain separate.",
      "tr": "Türkçe konuşmadan İngilizce metne 2023 sürüm karşılaştırmasıdır. Tanıma WER’i, çevrilmiş ses kalitesi ve diğer dil yönleri ayrı tutulur."
    },
    "sourceIds": [
      "ow-seamless",
      "br2-seamless-v1-metrics",
      "br2-seamless-v2-metrics",
      "br2-seamless-v1-card"
    ]
  },
  {
    "taskId": "keyword-spotting",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
      "ecapa",
      "sid-hubert",
      "sid-wav2vec"
    ],
    "summary": {
      "en": "The exact SUPERB Transformers heads give HuBERT Base 80.71% and wav2vec 2.0 Base 75.18% speaker-identification accuracy.",
      "tr": "Tam SUPERB Transformers başlıkları konuşmacı kimliğinde HuBERT Base için %80,71, wav2vec 2.0 Base için %75,18 doğruluk verir."
    },
    "limitation": {
      "en": "A historical closed-set identification comparison. Modern verification embeddings, diarization DER and identification accuracy answer different questions.",
      "tr": "Tarihsel kapalı küme kimlik karşılaştırmasıdır. Modern doğrulama gömmeleri, diarization DER ve kimlik doğruluğu farklı sorulara yanıt verir."
    },
    "sourceIds": [
      "bm-card-redimnet",
      "ow-ecapa",
      "br2-sid-wav2vec-card",
      "br2-sid-hubert-card"
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "voice",
      "knnvc",
      "seedvc-2024"
    ],
    "summary": {
      "en": "The older evaluation can be tied to its exact Whisper-small checkpoint through the historical evaluation code, giving 11.99 WER.",
      "tr": "Eski değerlendirme tarihsel kod üzerinden tam Whisper-small ağırlığıyla eşleştirilebiliyor; WER değeri 11,99."
    },
    "limitation": {
      "en": "Current Seed-VC v2 is kept separate. OpenVoice/CosyVoice rows lack equally precise release configuration in this table, so they are not ranked as exact checkpoint peers.",
      "tr": "Güncel Seed-VC v2 ayrı tutulur. Bu tablodaki OpenVoice/CosyVoice satırlarında aynı kesinlikte sürüm ayarı bulunmadığından tam ağırlık eşleri olarak sıralanmazlar."
    },
    "sourceIds": [
      "ow-voice",
      "ow-knnvc",
      "ow-seed-docs",
      "ow-knnvc-loader",
      "ow-knnvc-paper",
      "br2-seed-eval-code",
      "br2-seed-eval"
    ]
  },
  {
    "taskId": "text-to-audio-generation",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "audiogen",
      "tangoflux",
      "tango2",
      "audioldm2-l"
    ],
    "summary": {
      "en": "TangoFlux has the lowest OpenL3 FD and highest CLAP score among the three verified releases in the common AudioCaps comparison.",
      "tr": "Ortak AudioCaps karşılaştırmasındaki üç doğrulanmış sürüm arasında TangoFlux en düşük OpenL3 FD ve en yüksek CLAP skoruna sahiptir."
    },
    "limitation": {
      "en": "This result uses different durations/step counts and does not dominate every metric. Read the noncommercial and dataset-related license conditions before deployment.",
      "tr": "Sonuç farklı süre/adım sayıları kullanır ve her metrikte üstün değildir. Kullanımdan önce ticari olmayan kullanım ve veri kümesiyle ilişkili lisans koşulları okunmalıdır."
    },
    "sourceIds": [
      "ow-audiogen",
      "br2-tangoflux-paper",
      "br2-tangoflux",
      "br2-tangoflux-card",
      "br2-tango2-card",
      "br2-audioldm2-l-card"
    ]
  },
  {
    "taskId": "conditional-music-generation",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "ace",
      "musicgen"
    ],
    "summary": {
      "en": "ACE-Step 1.5 has a numerical 2026 paper result: SongEval musicality 4.67 for the specified 1.7B LM plus distilled DiT pipeline.",
      "tr": "ACE-Step 1.5 için sayısal 2026 makale sonucu bulundu: belirtilen 1,7B LM ve damıtılmış DiT hattında SongEval müzikalite 4,67."
    },
    "limitation": {
      "en": "This is one identifiable system configuration. A family-level MusicGen or Yue label is insufficient for a fair head-to-head rank, and these automatic scores do not establish human musical preference.",
      "tr": "Bu, tanımlanabilir tek sistem ayarıdır. Yalnızca MusicGen veya Yue aile adı adil karşılaştırma için yetersizdir; otomatik skorlar insan müzik tercihini belirlemez."
    },
    "sourceIds": [
      "ow-ace",
      "ow-musicgen",
      "br2-ace15-paper"
    ]
  },
  {
    "taskId": "text-to-code-generation",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "coder",
      "codet5plus",
      "qwen25coder32base",
      "deepseekv3base"
    ],
    "summary": {
      "en": "In the 2026 SAFIM evaluation, DeepSeek-V3 Base has higher native-FIM mean pass@1 than Qwen2.5-Coder-32B: 79.6 versus 70.0.",
      "tr": "2026 SAFIM değerlendirmesinde DeepSeek-V3 Base, doğal FIM ortalama pass@1 değerinde Qwen2.5-Coder-32B’den yüksektir: 79,6’ya karşı 70,0."
    },
    "limitation": {
      "en": "This compares released base models with their FIM protocol. It does not transfer SRI-Coder training gains to Qwen3-Coder-Next or claim that completion and repository repair are interchangeable.",
      "tr": "Yayımlanmış taban modeller FIM protokolüyle karşılaştırılır. SRI-Coder eğitim kazanımları Qwen3-Coder-Next’e aktarılmaz; tamamlama ve depo onarımı eşdeğer sayılmaz."
    },
    "sourceIds": [
      "ow-coder",
      "ow-codet5plus",
      "br2-sri-paper",
      "br2-qwen25coder32base-card",
      "br2-deepseekv3base-card"
    ]
  },
  {
    "taskId": "code-repair",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "codet5",
      "ct-java-cs",
      "ct-cs-java"
    ],
    "summary": {
      "en": "Both translation directions now have exact fine-tuned CodeT5 releases and published BLEU-4 results.",
      "tr": "Her iki çeviri yönü için de göreve özel CodeT5 sürümleri ve yayımlanmış BLEU-4 sonuçları bulundu."
    },
    "limitation": {
      "en": "These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.",
      "tr": "Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez."
    },
    "sourceIds": [
      "ow-codet5",
      "br2-codet5-release",
      "br2-codet5-paper",
      "br2-ct-cs-java-card",
      "br2-ct-java-cs-card"
    ]
  },
  {
    "taskId": "text-to-sql",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "coder",
      "codet5",
      "ct-sum-py",
      "ct-multi-sum"
    ],
    "summary": {
      "en": "The released multi-sum checkpoint scores 20.42 Python BLEU-4 versus 20.01 for the Python-specific CodeT5 checkpoint.",
      "tr": "Yayımlanan multi-sum ağırlığı Python BLEU-4’te 20,42; Python’a özel CodeT5 ağırlığı 20,01 alır."
    },
    "limitation": {
      "en": "These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.",
      "tr": "Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez."
    },
    "sourceIds": [
      "ow-coder",
      "ow-codet5",
      "br2-codet5-release",
      "br2-codet5-paper",
      "br2-ct-multi-sum-card",
      "br2-ct-sum-py-card"
    ]
  },
  {
    "taskId": "code-search",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "codet5",
      "ct-clone"
    ],
    "summary": {
      "en": "The released task-specific CodeT5 checkpoint has a traceable 97.2 Binary F1 result. It is a historical baseline, not a current winner.",
      "tr": "Yayımlanan göreve özel CodeT5 ağırlıkları için izlenebilir 97,2 Binary F1 sonucu bulundu. Güncel lider değil, tarihsel referanstır."
    },
    "limitation": {
      "en": "These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.",
      "tr": "Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez."
    },
    "sourceIds": [
      "ow-codet5",
      "br2-codet5-release",
      "br2-codet5-paper",
      "br2-ct-clone-card"
    ]
  },
  {
    "taskId": "defect-detection",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "codet5",
      "ct-defect"
    ],
    "summary": {
      "en": "The released task-specific CodeT5 checkpoint has a traceable 65.78 Accuracy result. It is a historical baseline, not a current winner.",
      "tr": "Yayımlanan göreve özel CodeT5 ağırlıkları için izlenebilir 65,78 Accuracy sonucu bulundu. Güncel lider değil, tarihsel referanstır."
    },
    "limitation": {
      "en": "These are 2021 task-specific references. General CodeT5 pretraining weights and modern coding-agent scores cannot replace these trained heads or test protocols.",
      "tr": "Bunlar 2021 görev ağırlıklarına ait referanslardır. Genel CodeT5 ön eğitim ağırlıkları ve modern kod ajanı skorları, eğitilmiş bu başlıkların veya test protokollerinin yerine geçmez."
    },
    "sourceIds": [
      "ow-codet5",
      "br2-codet5-release",
      "br2-codet5-paper",
      "br2-ct-defect-card"
    ]
  },
  {
    "taskId": "classification",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
      "en": "The SCAN model zoo links the existing SCAN-loss file to 81.6 clustering accuracy on CIFAR-10.",
      "tr": "SCAN model tablosu, mevcut SCAN-loss dosyasını CIFAR-10 üzerinde 81,6 kümeleme doğruluğuna bağlar."
    },
    "limitation": {
      "en": "Its ten-cluster image domain and 2020 evaluation cannot rank arbitrary tabular clustering. The higher self-labeling result belongs to a different trained stage.",
      "tr": "On kümeli görüntü alanı ve 2020 değerlendirmesi, genel tablo kümelemeyi sıralayamaz. Daha yüksek self-labeling sonucu başka eğitilmiş aşamaya aittir."
    },
    "sourceIds": [
      "ow-scan-cifar10",
      "ow-scan-cifar10-weights",
      "ow-scan-license",
      "br2-scan"
    ]
  },
  {
    "taskId": "dimensionality-reduction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "uva-autoencoder128"
    ],
    "summary": {
      "en": "A pretrained 128D CIFAR-10 encoder exists. The tutorial evaluates 64/128/256/384D reconstructions, but the inspected notebook retains a plotted curve rather than an exact numeric test-loss table tied to the 128D artifact.",
      "tr": "Ön eğitimli 128D CIFAR-10 kodlayıcısı var. Eğitim materyali 64/128/256/384D yeniden kurmaları değerlendiriyor; ancak incelenen not defterinde 128D dosyasına bağlı tam sayısal test kaybı tablosu yerine çizilmiş eğri bulunuyor."
    },
    "limitation": {
      "en": "No number is digitized or guessed from that plot. Different bottleneck dimensions trade compression against reconstruction, while embedding retrieval benchmarks evaluate another objective. A common numeric protocol and artifact-linked outputs are still needed.",
      "tr": "Grafikten sayı okunup tahmin edilmedi. Farklı darboğaz boyutları sıkıştırma ile yeniden kurma arasında tercih yaratır; gömme geri getirme benchmark’ları başka amaç ölçer. Ortak sayısal protokol ve dosyaya bağlı çıktılar hâlâ gerekiyor."
    },
    "sourceIds": [
      "ow-uva-saved-models",
      "ow-uva-autoencoder-method",
      "ow-uva-autoencoder128-weights",
      "br2-uva-ae"
    ]
  },
  {
    "taskId": "density-estimation",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "jem",
      "uva-mnist-flow",
      "uva-flow-simple",
      "uva-flow-vardeq"
    ],
    "summary": {
      "en": "The saved tutorial output links all three published flow checkpoints to test bits/dimension. Multiscale has the lowest value, 1.020.",
      "tr": "Kayıtlı eğitim materyali çıktısı üç yayımlanmış flow ağırlığını test boyut başına bit değerine bağlar. Multiscale 1,020 ile en düşüktür."
    },
    "limitation": {
      "en": "A narrow MNIST reference with no dated evaluation in the source. It cannot select a universal density estimator for unseen feature spaces.",
      "tr": "Kaynakta değerlendirme tarihi olmayan dar MNIST referansıdır. Görülmemiş özellik uzayları için evrensel yoğunluk tahmincisi seçemez."
    },
    "sourceIds": [
      "ow-jem",
      "ow-uva-saved-models",
      "ow-uva-flow-method",
      "ow-uva-mnist-flow-weights",
      "br2-uva-flow"
    ]
  },
  {
    "taskId": "anomaly-detection",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "moment",
      "jem",
      "timeradar"
    ],
    "summary": {
      "en": "A 2026 pretrained TimeRadar artifact and matching zero-shot evaluation are public: eight-dataset mean ROC-AUC 76.97.",
      "tr": "2026 ön eğitimli TimeRadar dosyası ve eşleşen sıfır örnekli değerlendirme açıktır: sekiz veri kümesinde ortalama ROC-AUC 76,97."
    },
    "limitation": {
      "en": "Public weight files and numerical results are verified, but the README shows both MIT and Apache-2.0 badges with no license file; the usage license is unresolved. ROC-AUC, PR-AUC and affiliation/point-adjusted F1 remain separate metrics.",
      "tr": "Açık ağırlık dosyaları ve sayısal sonuçlar doğrulandı; ancak README, lisans dosyası olmadan hem MIT hem Apache-2.0 rozeti gösteriyor; kullanım lisansı belirsiz. ROC-AUC, PR-AUC ve affiliation/nokta düzeltmeli F1 ayrı metrikler olarak tutulur."
    },
    "sourceIds": [
      "ow-moment",
      "ow-jem",
      "ow-jem-paper",
      "br2-timeradar-paper",
      "br2-timeradar"
    ]
  },
  {
    "taskId": "missing-value-imputation",
    "checkedAt": "2026-10-23",
    "candidateIds": [
      "moment",
      "asia-bn",
      "matrixformer",
      "matrixformer-recsys",
      "matrixformer-plus"
    ],
    "summary": {
      "en": "The October 2026 MatrixFormer release provides exact experts and a frozen MissBench comparison. The two-expert blend reduces macro NRMSE from 1.674085 to 1.579644.",
      "tr": "Ekim 2026 MatrixFormer yayını tam uzman ağırlıklarını ve sabit MissBench karşılaştırmasını sunar. İki uzmanlı karışım makro NRMSE’yi 1,674085’ten 1,579644’e düşürür."
    },
    "limitation": {
      "en": "The benefit is not uniform: MNAR regresses. These numerical-matrix results do not establish the best time-series imputer, and MatrixFormer+ requires both expert inference passes.",
      "tr": "Kazanç her örüntüde yoktur: MNAR kötüleşir. Sayısal matris sonuçları en iyi zaman serisi tamamlayıcısını belirlemez; MatrixFormer+ iki uzmanın da çıkarımını gerektirir."
    },
    "sourceIds": [
      "ow-moment",
      "ow-asia-bn",
      "ow-asia-description",
      "ow-bn-prediction",
      "br2-matrixformer",
      "br2-matrixformer-card",
      "br2-matrixformer-recsys-card",
      "br2-matrixformer-plus-card"
    ]
  },
  {
    "taskId": "change-point-detection",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "autocpd-hasc"
    ],
    "summary": {
      "en": "AutoCPD publishes a 96.23% test classification result for the HASC 21-block model behind its released Demo artifact.",
      "tr": "AutoCPD, yayımlanan Demo dosyasının temelindeki HASC 21 bloklu model için %96,23 test sınıflandırma sonucu yayımlar."
    },
    "limitation": {
      "en": "It supports window-level activity/change classification only. No exact published continuous-event F1 or delay comparison was verified for the packaged checkpoint, so this proxy is explicitly labeled.",
      "tr": "Yalnızca pencere düzeyinde etkinlik/değişim sınıflandırmasını destekler. Paketlenmiş ağırlık için tam yayımlanmış sürekli olay F1 veya gecikme karşılaştırması doğrulanamadığından vekil metrik açıkça işaretlenir."
    },
    "sourceIds": [
      "ow-autocpd-hasc",
      "ow-autocpd-inference",
      "ow-autocpd-package",
      "ow-autocpd-hasc-weights",
      "br2-autocpd-paper"
    ]
  },
  {
    "taskId": "node-classification",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "graphany-arxiv",
      "graphany-cora",
      "graphany-product"
    ],
    "summary": {
      "en": "The released GraphAny Product model has the highest selected seed-0 overall accuracy, 67.77, versus Arxiv 67.58 and Cora 66.98.",
      "tr": "Yayımlanan GraphAny Product modeli, Arxiv 67,58 ve Cora 66,98’e karşı seçili seed-0 genel doğrulukta 67,77 ile öndedir."
    },
    "limitation": {
      "en": "These small differences are on 31 datasets including each model’s training graph. Cross-graph inference still consumes support labels; this is not label-free learning.",
      "tr": "Küçük farklar, her modelin eğitim grafını da içeren 31 veri kümesindedir. Graflar arası çıkarım destek etiketlerini kullanır; etiketsiz öğrenme değildir."
    },
    "sourceIds": [
      "ow-graphany-arxiv",
      "ow-graphany-inputs",
      "ow-graphany-arxiv-weights",
      "br2-graphany"
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
      "dgl-gcn-tox21",
      "dgl-gcn-afp-tox21",
      "dgl-gin-edge-tox21"
    ],
    "summary": {
      "en": "The official pretrained-model table and download registry now link three Tox21 heads to 0.77, 0.79 and 0.80 test ROC-AUC; the GIN edge-prediction release leads this selected set.",
      "tr": "Resmî ön eğitimli model tablosu ve indirme kaydı, üç Tox21 başlığını 0,77, 0,79 ve 0,80 test ROC-AUC değerine bağlar; GIN kenar tahmini sürümü bu seçili kümede öndedir."
    },
    "limitation": {
      "en": "A narrow MoleculeNet reference with rounded values and no per-result publication date. Gains do not transfer to unrelated graph labels, binding affinity or clinical toxicity decisions.",
      "tr": "Yuvarlanmış değerli, sonuç başına yayın tarihi olmayan dar bir MoleculeNet referansıdır. Kazançlar ilgisiz graf etiketlerine, bağlanma afinitesine veya klinik toksisite kararlarına aktarılmaz."
    },
    "sourceIds": [
      "ow-dgl-gcn-tox21",
      "ow-dgl-gcn-readout",
      "ow-dgl-gcn-tox21-weights",
      "br2-dgl-tox21-registry",
      "br2-dgl-molecule"
    ]
  },
  {
    "taskId": "graph-regression",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "chgnet"
    ],
    "summary": {
      "en": "The exact CHGNet 0.3.0 release reports 29 meV/atom test energy MAE on MPtrj.",
      "tr": "Tam CHGNet 0.3.0 sürümü MPtrj üzerinde atom başına 29 meV test enerji MAE bildirir."
    },
    "limitation": {
      "en": "One crystal-energy reference, not a universal regression leaderboard. New MatPES training sets and different test splits prevent a direct version ranking from the inspected table.",
      "tr": "Tek kristal enerjisi referansıdır; evrensel regresyon tablosu değildir. Yeni MatPES eğitim kümeleri ve farklı test bölümleri, incelenen tablodan doğrudan sürüm sıralaması çıkarmayı engeller."
    },
    "sourceIds": [
      "ow-chgnet",
      "ow-chgnet-usage",
      "br2-chgnet"
    ]
  },
  {
    "taskId": "molecular-property-prediction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "boltz",
      "dgl-gcn-tox21",
      "dgl-gcn-afp-tox21",
      "dgl-gin-edge-tox21"
    ],
    "summary": {
      "en": "The official pretrained-model table and download registry now link three Tox21 heads to 0.77, 0.79 and 0.80 test ROC-AUC; the GIN edge-prediction release leads this selected set.",
      "tr": "Resmî ön eğitimli model tablosu ve indirme kaydı, üç Tox21 başlığını 0,77, 0,79 ve 0,80 test ROC-AUC değerine bağlar; GIN kenar tahmini sürümü bu seçili kümede öndedir."
    },
    "limitation": {
      "en": "A narrow MoleculeNet reference with rounded values and no per-result publication date. Gains do not transfer to unrelated graph labels, binding affinity or clinical toxicity decisions.",
      "tr": "Yuvarlanmış değerli, sonuç başına yayın tarihi olmayan dar bir MoleculeNet referansıdır. Kazançlar ilgisiz graf etiketlerine, bağlanma afinitesine veya klinik toksisite kararlarına aktarılmaz."
    },
    "sourceIds": [
      "ow-boltz",
      "ow-boltz-docs",
      "br2-dgl-tox21-registry",
      "br2-dgl-molecule"
    ]
  },
  {
    "taskId": "protein-structure-prediction",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "boltz",
      "blitz-boltz-k8",
      "blitz-boltz-k16"
    ],
    "summary": {
      "en": "The 16 October 2026 Blitz release compares exact open Boltz-2 variants on common targets. K16 reaches 0.8533 complex lDDT versus the teacher’s 0.8499 with fewer denoiser calls.",
      "tr": "16 Ekim 2026 Blitz yayını tam açık Boltz-2 varyantlarını ortak hedeflerde karşılaştırır. K16 daha az gürültü giderici çağrısıyla öğretmenin 0,8499 değerine karşı 0,8533 kompleks lDDT’ye ulaşır."
    },
    "limitation": {
      "en": "Different inference budgets are explicit. K16 does not win every physical-validity metric; the small structural-quality difference is not a significance claim.",
      "tr": "Farklı çıkarım bütçeleri açıktır. K16 her fiziksel geçerlilik metriğinde üstün değildir; küçük yapısal kalite farkı anlamlılık iddiası değildir."
    },
    "sourceIds": [
      "ow-boltz",
      "ow-boltz-docs",
      "br2-blitz-paper",
      "br2-blitz-boltz-k16-card",
      "br2-blitz-boltz-k8-card"
    ]
  },
  {
    "taskId": "math-word-problem-solving",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
      "hrm-sudoku",
      "eqr-sudoku"
    ],
    "summary": {
      "en": "EqR now provides a released Sudoku checkpoint and an explicit full evaluation: 99.557% convergence-selected exact accuracy.",
      "tr": "EqR yayımlanmış Sudoku ağırlığı ve açık tam değerlendirme sunuyor: yakınsama seçimiyle %99,557 tam doğruluk."
    },
    "limitation": {
      "en": "The 2026 project’s README does not date this particular run. It requires depth/breadth search and cannot be compared to an HRM number with a different evaluation budget or generalized to all constraints.",
      "tr": "2026 projesinin README’si bu özel koşunun tarihini belirtmiyor. Derinlik/genişlik araması gerekir; farklı değerlendirme bütçeli HRM skoru ile kıyaslanamaz veya tüm kısıtlara genellenemez."
    },
    "sourceIds": [
      "ow-hrm-sudoku",
      "ow-hrm-author-release",
      "ow-hrm-sudoku-weights",
      "ow-hrm-repository-license",
      "br2-eqr"
    ]
  },
  {
    "taskId": "classical-planning",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "goose-blocksworld"
    ],
    "summary": {
      "en": "The public BlocksWorld RankSVM model is real: the release states WLPlan/GOOSE v2.0.0 and classic.toml for the IPC23 learning-domain models. It is a domain-trained heuristic used inside search.",
      "tr": "Açık BlocksWorld RankSVM modeli gerçek: sürüm kaydı IPC23 öğrenme alanı modelleri için WLPlan/GOOSE v2.0.0 ve classic.toml belirtir. Arama içinde kullanılan alana özel eğitilmiş sezgiseldir."
    },
    "limitation": {
      "en": "The inspected release does not bind an individual solved-count/cost/time result to this exact serialized model and search budget. IPC 2023 competition entrants and later ICAPS/NeurIPS 2024 GOOSE experiments are not interchangeable. Without that link, a modern LLM planning score or a competition aggregate would be misleading.",
      "tr": "İncelenen sürüm, bu tam serileştirilmiş modele ve arama bütçesine tekil çözüm sayısı/maliyet/süre sonucu bağlamıyor. IPC 2023 yarışmacıları ile sonraki ICAPS/NeurIPS 2024 GOOSE deneyleri birbirinin yerine geçmez. Bu bağlantı olmadan güncel LLM planlama skoru veya yarışma toplamı yanıltıcı olur."
    },
    "sourceIds": [
      "ow-goose-blocksworld",
      "ow-goose-pretrained",
      "ow-goose-training-config",
      "ow-goose-blocksworld-weights",
      "br2-goose-release",
      "br2-goose-main",
      "br2-ipc23"
    ]
  },
  {
    "taskId": "robot-localization",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "hloc-superglue"
    ],
    "summary": {
      "en": "The official Aachen submission identifies the exact SuperGlue outdoor pipeline and reports 86.7% night recall at the first localization threshold.",
      "tr": "Resmî Aachen kaydı tam SuperGlue outdoor hattını tanımlar ve ilk konumlandırma eşiğinde %86,7 gece geri çağırma bildirir."
    },
    "limitation": {
      "en": "A 2020 camera-pose benchmark with fixed map and retrieval settings. It does not establish full robot localization performance or a current leader.",
      "tr": "Sabit harita ve geri getirme ayarlarıyla 2020 kamera pozu benchmark’ıdır. Tam robot konumlandırma performansı veya güncel liderlik belirlemez."
    },
    "sourceIds": [
      "ow-hloc-superglue",
      "ow-hloc-pipeline",
      "ow-hloc-pose",
      "ow-hloc-matcher",
      "ow-hloc-license",
      "br2-hloc-history",
      "br2-hloc-aachen"
    ]
  },
  {
    "taskId": "robot-motion-planning",
    "checkedAt": "2026-10-21",
    "candidateIds": [
      "mpinets-hybrid",
      "neuralmp"
    ],
    "summary": {
      "en": "The released Neural Motion Planner pipeline reports 95.83% success on 48 real-world free-hand tasks when test-time optimization is enabled.",
      "tr": "Yayımlanan Neural Motion Planner hattı, test zamanı optimizasyonu açıkken 48 gerçek dünya serbest el görevinde %95,83 başarı bildirir."
    },
    "limitation": {
      "en": "The base policy alone scores 66.67%. The MPiNets baseline result is not assigned to the catalogue’s different hybrid checkpoint without an exact artifact match.",
      "tr": "Taban politika tek başına %66,67 alır. MPiNets taban çizgi sonucu, tam dosya eşleşmesi olmadan katalogdaki farklı hybrid ağırlığına atanmaz."
    },
    "sourceIds": [
      "ow-mpinets-hybrid",
      "ow-mpinets-rollout",
      "ow-mpinets-zenodo",
      "ow-mpinets-hybrid-weights",
      "br2-neuralmp",
      "br2-neuralmp-paper",
      "br2-neuralmp-card"
    ]
  },
  {
    "taskId": "function-calling",
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
    "checkedAt": "2026-10-23",
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
  },
  {
    "taskId": "action-selection",
    "checkedAt": "2026-10-27",
    "candidateIds": [
      "strands-decider-v21",
      "pplx-decider-v12",
      "pplx-decider-flash-v12",
      "clef-27b"
    ],
    "summary": {
      "en": "Decision-model support is documented; no matched task-specific numeric comparison was verified for this entry.",
      "tr": "Karar modeli desteği belgelenmiş; bu kayıt için aynı koşullarda göreve özel sayısal karşılaştırma doğrulanmadı."
    },
    "limitation": {
      "en": "Broad Decision Index aggregates, evaluator suites and small routing experiments have different protocols. They are selection evidence, not a matched benchmark of these exact checkpoints on this task. Models were not run locally.",
      "tr": "Geniş Decision Index toplamları, değerlendirici kümeleri ve küçük yönlendirme deneyleri farklı protokollere sahiptir. Bunlar seçim kanıtıdır; bu tam ağırlıkların aynı koşullarda görev karşılaştırması değildir. Modeller yerelde çalıştırılmadı."
    },
    "sourceIds": [
      "ow-strands-decider-v21",
      "ow-strands-architecture",
      "ow-pplx-decider-v12",
      "ow-pplx-decider-flash-v12",
      "ow-clef-27b"
    ]
  },
  {
    "taskId": "rubric-based-scoring",
    "checkedAt": "2026-10-27",
    "candidateIds": [
      "strands-decider-v21",
      "pplx-decider-v12",
      "pplx-decider-flash-v12",
      "clef-27b"
    ],
    "summary": {
      "en": "Decision-model support is documented; no matched task-specific numeric comparison was verified for this entry.",
      "tr": "Karar modeli desteği belgelenmiş; bu kayıt için aynı koşullarda göreve özel sayısal karşılaştırma doğrulanmadı."
    },
    "limitation": {
      "en": "Broad Decision Index aggregates, evaluator suites and small routing experiments have different protocols. They are selection evidence, not a matched benchmark of these exact checkpoints on this task. Models were not run locally.",
      "tr": "Geniş Decision Index toplamları, değerlendirici kümeleri ve küçük yönlendirme deneyleri farklı protokollere sahiptir. Bunlar seçim kanıtıdır; bu tam ağırlıkların aynı koşullarda görev karşılaştırması değildir. Modeller yerelde çalıştırılmadı."
    },
    "sourceIds": [
      "ow-strands-decider-v21",
      "ow-strands-architecture",
      "ow-pplx-decider-v12",
      "ow-pplx-decider-flash-v12",
      "ow-clef-27b"
    ]
  }
];
