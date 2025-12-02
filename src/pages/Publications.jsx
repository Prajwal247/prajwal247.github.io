import React, { useMemo, useState } from 'react';
import Nav from '../components/Nav.jsx';
import Particles from '../components/Particles.jsx';

export default function Publications() {
  const [category, setCategory] = useState('all');
  const filterButton = (key, label) => (
    <button
      className={`filter-btn${category === key ? ' active' : ''}`}
      onClick={() => setCategory(key)}
    >
      {label}
    </button>
  );

  const isVisible = (cardCat) => category === 'all' || cardCat === category;

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: #fff; overflow-x: hidden; min-height: 100vh;
          transition: background 0.3s ease, color 0.3s ease;
        }
        body.light-theme { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); color: #1a1a2e; }
        body.light-theme .particle { background: rgba(0,0,0,0.1); }
        body.light-theme nav { background: rgba(255,255,255,0.8); border-bottom: 1px solid rgba(0,0,0,0.1); }
        body.light-theme .logo, body.light-theme .nav-links a { color: #1a1a2e; }
        body.light-theme .nav-links a::after { background: #1a1a2e; }
        body.light-theme .burger-menu span { background: #1a1a2e; }
        body.light-theme .filter-btn, body.light-theme .publication-card, body.light-theme .stat-card {
          background: rgba(255,255,255,0.6); border-color: rgba(0,0,0,0.1); color: #1a1a2e;
        }
        body.light-theme .filter-btn:hover, body.light-theme .filter-btn.active {
          background: rgba(255,255,255,0.9); border-color: rgba(0,0,0,0.2);
        }
        body.light-theme .publication-card:hover, body.light-theme .stat-card:hover {
          background: rgba(255,255,255,0.8); border-color: rgba(0,0,0,0.15);
        }
        body.light-theme .publication-title { color: #1a1a2e; }
        body.light-theme .tag, body.light-theme .publication-icon { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1); }
        body.light-theme .pub-link-primary { background: #1a1a2e; color: #fff; }
        body.light-theme .pub-link-secondary { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.2); color: #1a1a2e; }
        body.light-theme .pub-link-secondary:hover { background: rgba(0,0,0,0.1); }
        body.light-theme .hero h1 { background: linear-gradient(45deg, #1a1a2e, #16213e); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        body.light-theme .page-header h1 {
          background: linear-gradient(45deg, #1a1a2e, #16213e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .particles { position: fixed; top:0; left:0; width:100%; height:100%; z-index:0; pointer-events:none; }
        .particle { position: absolute; background: rgba(255,255,255,0.1); border-radius: 50%; animation: float 15s infinite; }
        @keyframes float { 0%,100%{transform:translateY(0) translateX(0);} 25%{transform:translateY(-100px) translateX(50px);} 50%{transform:translateY(-200px) translateX(-50px);} 75%{transform:translateY(-100px) translateX(100px);} }
        nav {
          position: fixed; top: 0; width: 100%; padding: 20px 50px; display:flex; justify-content: space-between; align-items:center;
          background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); z-index:1000; transition: all 0.3s ease;
        }
        .logo { font-size:24px; font-weight:bold; letter-spacing:2px; text-decoration:none; color:#fff; transition: transform 0.3s ease; }
        .logo:hover { transform: scale(1.05); }
        .nav-links { display:flex; gap:30px; list-style:none; margin-left:auto; }
        .nav-links a { color:#fff; text-decoration:none; font-size:16px; transition: all 0.3s ease; position:relative; }
        .nav-links a::after { content:''; position:absolute; bottom:-5px; left:0; width:0; height:2px; background:#fff; transition: width 0.3s ease; }
        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
        .burger-menu { display: none; flex-direction: column; gap: 5px; cursor:pointer; z-index:1001; }
        .burger-menu span { width:25px; height:3px; background:#fff; border-radius:3px; transition: all 0.3s ease; }
        .burger-menu.active span:nth-child(1){ transform: rotate(45deg) translate(8px, 8px); }
        .burger-menu.active span:nth-child(2){ opacity: 0; }
        .burger-menu.active span:nth-child(3){ transform: rotate(-45deg) translate(7px, -7px); }
        .theme-switcher { position: relative; margin-left: 20px; }
        .theme-current {
          display:flex; align-items:center; gap:8px; background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius:25px;
          backdrop-filter: blur(10px); border:1px solid rgba(255,255,255,0.2); cursor:pointer; font-size:14px; color:#fff; transition: all 0.3s ease; min-width:120px; justify-content: space-between;
        }
        body.light-theme .theme-current { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1); color: #1a1a2e; }
        .theme-current:hover { background: rgba(255,255,255,0.15); }
        body.light-theme .theme-current:hover { background: rgba(0,0,0,0.08); }
        .theme-dropdown {
          position:absolute; top: calc(100% + 8px); right:0; background: rgba(0,0,0,0.95); backdrop-filter: blur(20px);
          border:1px solid rgba(255,255,255,0.2); border-radius: 15px; padding:8px; min-width:150px; opacity:0; visibility:hidden; transform: translateY(-10px); transition: all 0.3s ease; z-index:1100;
        }
        body.light-theme .theme-dropdown { background: rgba(255,255,255,0.95); border-color: rgba(0,0,0,0.1); }
        .theme-switcher.open .theme-dropdown { opacity:1; visibility:visible; transform: translateY(0); }
        .theme-option { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; cursor:pointer; font-size:14px; color:#fff; transition:all 0.2s ease; border:none; background:transparent; width:100%; text-align:left; }
        body.light-theme .theme-option { color: #1a1a2e; }
        .theme-option:hover { background: rgba(255,255,255,0.1); }
        body.light-theme .theme-option:hover { background: rgba(0,0,0,0.05); }
        .theme-option.active { background: rgba(255,255,255,0.15); }
        body.light-theme .theme-option.active { background: rgba(0,0,0,0.08); }
        .dropdown-arrow { font-size:10px; transition: transform 0.3s ease; }
        .theme-switcher.open .dropdown-arrow { transform: rotate(180deg); }
        .container { position:relative; max-width:1200px; margin:0 auto; padding:120px 50px 80px; z-index:1; }
        .page-header { text-align:center; margin-bottom:60px; animation: fadeInUp 0.8s ease; }
        @keyframes fadeInUp { from { opacity:0; transform: translateY(30px);} to { opacity:1; transform: translateY(0);} }
        .page-header h1 {
          font-size:56px; margin-bottom:15px; background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .page-header p { font-size:18px; opacity:0.8; max-width:600px; margin:0 auto; }
        .filter-section { display:flex; justify-content:center; gap:15px; margin-bottom:50px; flex-wrap:wrap; animation: fadeInUp 0.8s ease 0.2s both; }
        .filter-btn {
          padding: 10px 25px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.05); color:#fff; border-radius:25px; cursor:pointer;
          transition: all 0.3s ease; font-size:14px; backdrop-filter: blur(10px);
        }
        .filter-btn:hover, .filter-btn.active { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.5); transform: translateY(-2px); }
        .publications-grid { display:grid; gap:30px; animation: fadeInUp 0.8s ease 0.4s both; }
        .publication-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 15px; padding: 30px; backdrop-filter: blur(10px);
          transition: all 0.3s ease; display:flex; gap:25px;
        }
        .publication-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.3); }
        .publication-icon { width:60px; height:60px; background: rgba(255,255,255,0.1); border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:28px; flex-shrink:0; }
        .publication-content { flex:1; }
        .publication-title { font-size:22px; font-weight:600; margin-bottom:10px; color:#fff; line-height:1.4; }
        .publication-meta { display:flex; gap:15px; flex-wrap:wrap; margin-bottom:15px; font-size:14px; opacity:0.7; }
        .publication-meta span { display:flex; align-items:center; gap:5px; }
        .publication-description { font-size:15px; line-height:1.7; opacity:0.85; margin-bottom:20px; }
        .publication-tags { display:flex; gap:10px; flex-wrap:wrap; margin-bottom:15px; }
        .tag { padding: 5px 12px; background: rgba(255,255,255,0.1); border-radius: 15px; font-size:12px; border:1px solid rgba(255,255,255,0.2); }
        .publication-links { display:flex; gap:15px; flex-wrap:wrap; }
        .pub-link { padding:8px 20px; border-radius:20px; text-decoration:none; font-size:14px; font-weight:500; transition: all 0.3s ease; display:inline-flex; align-items:center; gap:8px; }
        .pub-link-primary { background:#fff; color:#1a1a2e; }
        .pub-link-primary:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,255,255,0.3); }
        .pub-link-secondary { background: rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.3); }
        .pub-link-secondary:hover { background: rgba(255,255,255,0.2); transform: translateY(-2px); }
        .stats-section { display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:20px; margin-bottom:60px; animation: fadeInUp 0.8s ease 0.3s both; }
        .stat-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius:15px; padding:25px; text-align:center; backdrop-filter: blur(10px); transition: all 0.3s ease; }
        .stat-card:hover { background: rgba(255,255,255,0.08); transform: translateY(-3px); }
        .stat-number { font-size:36px; font-weight:bold; margin-bottom:8px; }
        .stat-label { font-size:14px; opacity:0.7; }
        @media (max-width: 768px) {
          nav { padding: 15px 20px; }
          .theme-switcher { position:absolute; top:15px; right:70px; }
          .burger-menu { display:flex; }
          .nav-links {
            position:fixed; top:70px; right:-100%; width:280px; height:calc(100vh - 70px); background: rgba(0,0,0,0.95);
            backdrop-filter: blur(20px); flex-direction:column; padding:40px 20px; gap:25px; transition: right 0.4s ease; border-left: 1px solid rgba(255,255,255,0.1);
          }
          .nav-links.active { right: 0; }
          .nav-links li { opacity:0; transform: translateX(50px); transition: all 0.3s ease; }
          .nav-links.active li { opacity:1; transform: translateX(0); }
          .nav-links.active li:nth-child(1){ transition-delay:0.1s; }
          .nav-links.active li:nth-child(2){ transition-delay:0.2s; }
          .nav-links.active li:nth-child(3){ transition-delay:0.3s; }
          .nav-links.active li:nth-child(4){ transition-delay:0.4s; }
          .nav-links.active li:nth-child(5){ transition-delay:0.5s; }
          .nav-links a { font-size:18px; }
          .container { padding: 100px 20px 60px; }
          .page-header h1 { font-size:36px; }
          .publication-card { flex-direction:column; padding:20px; }
          .publication-title { font-size:18px; }
          .stats-section { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <Particles />
      <Nav />

      <div className="container">
        <div className="page-header">
          <h1>Publications</h1>
          <p>Research papers, conference proceedings, and academic contributions</p>
        </div>

        <div className="stats-section">
          <div className="stat-card"><div className="stat-number">4+</div><div className="stat-label">Publications</div></div>
          <div className="stat-card"><div className="stat-number">5+</div><div className="stat-label">Citations</div></div>
          <div className="stat-card"><div className="stat-number">2</div><div className="stat-label">Conference Papers</div></div>
          <div className="stat-card"><div className="stat-number">2</div><div className="stat-label">Journal Articles</div></div>
        </div>

        <div className="filter-section">
          {filterButton('all', 'All')}
          {filterButton('conference', 'Conference')}
          {filterButton('journal', 'Journal')}
          {filterButton('preprint', 'Preprint')}
          {filterButton('workshop', 'Workshop')}
        </div>

        <div className="publications-grid" id="publications">
          {isVisible('workshop') && (
            <div className="publication-card" data-category="workshop">
              <div className="publication-icon">📄</div>
              <div className="publication-content">
                <h3 className="publication-title">Development of pre-trained transformer-based models for the Nepali language</h3>
                <div className="publication-meta">
                  <span>📅 2025</span>
                  <span>🏛️ Coling 2025</span>
                  <span>👥 P Thapa, J Nyachhyon, M Sharma, BK Bal</span>
                </div>
                <p className="publication-description">
                  Transformer-based pre-trained language models have dominated the field of Natural Language Processing (NLP) for quite some time now. However, the Nepali language, spoken by approximately 32 million people worldwide, remains significantly underrepresented in this domain. This underrepresentation is primarily attributed to the scarcity of monolingual data corpora and limited available resources for the Nepali language. While existing efforts have predominantly concentrated on basic encoder-based models, there is a notable gap in the exploration of decoder-based architectures. To address this gap, we have collected 27.5 GB of Nepali text data, approximately 2.4 x larger than any previously available Nepali language corpus. Leveraging this data, we pre-trained three different models ie, BERT, RoBERTa, and GPT-2, exclusively for the Nepali Language. Furthermore, we performed instruction tuning and explored its potential for monolingual Nepali data, providing a foundation for future research. Our models outperformed the existing best model by 2 points on Nep-gLUE benchmark, scoring 95.60 and also outperformed existing models on text generation tasks, demonstrating improvements in both understanding and generating Nepali text.
                </p>
                <div className="publication-tags">
                  <span className="tag">Pre-trained Language Models</span>
                  <span className="tag">Nepali Language</span>
                  <span className="tag">Instruction Tuning</span>
                </div>
                <div className="publication-links">
                  <a href="https://aclanthology.org/2025.chipsal-1.2.pdf" className="pub-link pub-link-primary" target="_blank" rel="noopener noreferrer">📖 Read Paper</a>
                  <a href="https://huggingface.co/datasets/IRIIS-RESEARCH/Nepali-Text-Corpus" className="pub-link pub-link-secondary" target="_blank" rel="noopener noreferrer">💻 Dataset and Models</a>
                </div>
              </div>
            </div>
          )}

          {isVisible('conference') && (
            <div className="publication-card" data-category="conference">
              <div className="publication-icon">📄</div>
              <div className="publication-content">
                <h3 className="publication-title">Consolidating and Developing Benchmarking Datasets for the Nepali Natural Language Understanding Tasks</h3>
                <div className="publication-meta">
                  <span>📅 2025</span>
                  <span>🏛️ IJCNLP-AACL 2025</span>
                  <span>👥 Jinu Nyachhyon, Mridul Sharma, Prajwal Thapa, Bal Krishna Bal</span>
                </div>
                <p className="publication-description">
                  The Nepali language has distinct linguistic features, especially its complex script (Devanagari script), morphology, and various dialects, which pose a unique challenge for natural language processing (NLP) evaluation. While the Nepali Language Understanding Evaluation (Nep-gLUE) benchmark provides a foundation for evaluating models, it remains limited in scope, covering four tasks. This restricts their utility for comprehensive assessments of NLP models. To address this limitation, we introduce eight new datasets, creating a new benchmark, the Nepali Language Understanding Evaluation (NLUE) benchmark, which covers a total of 12 tasks for evaluating the performance of models across a diverse set of Natural Language Understanding (NLU) tasks. The added tasks include single-sentence classification, similarity and paraphrase tasks, and Natural Language Inference (NLI) tasks. On evaluating the models using added tasks, we observe that the existing models fall short in handling complex NLU tasks effectively. This expanded benchmark sets a new standard for evaluating, comparing, and advancing models, contributing significantly to the broader goal of advancing NLP research for low-resource languages.
                </p>
                <div className="publication-tags">
                  <span className="tag">Nepali Language</span>
                  <span className="tag">Natural Language Understanding</span>
                  <span className="tag">Benchmarking</span>
                  <span className="tag">Dataset Development</span>
                </div>
                <div className="publication-links">
                  <a href="https://arxiv.org/pdf/2411.19244?" target="_blank" rel="noopener noreferrer" className="pub-link pub-link-primary">📖 Read Paper</a>
                  <a href="https://huggingface.co/IRIIS-RESEARCH/datasets" target="_blank" rel="noopener noreferrer" className="pub-link pub-link-secondary">� Dataset and Models</a>
                </div>
              </div>
            </div>
          )}

          {isVisible('preprint') && (
            <div className="publication-card" data-category="preprint">
              <div className="publication-icon">📄</div>
              <div className="publication-content">
                <h3 className="publication-title">Local Herb Identification Using Transfer Learning: A CNN-Powered Mobile Application for Nepalese Flora</h3>
                <div className="publication-meta">
                  <span>📅 2025</span>
                  <span>🏛️ arXiv Preprint</span>
                  <span>👥 Prajwal Thapa, Mridul Sharma, Jinu Nyachhyon, Yagya Raj Pandeya</span>
                </div>
                <p className="publication-description">
                  Herb classification presents a critical challenge in botanical research, particularly in regions with rich biodiversity such as Nepal. This study introduces a novel deep learning approach for classifying 60 different herb species using Convolutional Neural Networks (CNNs) and transfer learning techniques. Using a manually curated dataset of 12,000 herb images, we developed a robust machine learning model that addresses existing limitations in herb recognition methodologies. Our research employed multiple model architectures, including DenseNet121, 50-layer Residual Network (ResNet50), 16-layer Visual Geometry Group Network (VGG16), InceptionV3, EfficientNetV2, and Vision Transformer (VIT), with DenseNet121 ultimately demonstrating superior performance. Data augmentation and regularization techniques were applied to mitigate overfitting and enhance the generalizability of the model. This work advances herb classification techniques, preserving traditional botanical knowledge and promoting sustainable herb utilization.
                </p>
                <div className="publication-tags">
                  <span className="tag">Herb Classification</span>
                  <span className="tag">Transfer Learning</span>
                  <span className="tag">CNN</span>
                  <span className="tag">Mobile Application</span>
                </div>
                <div className="publication-links">
                  <a href="https://arxiv.org/pdf/2505.02147?" target="_blank" rel="noopener noreferrer" className="pub-link pub-link-primary">📖 Read Paper</a>
                  <a href="https://huggingface.co/datasets/IRIIS-RESEARCH/Local-Herbs-Dataset" target="_blank" rel="noopener noreferrer" className="pub-link pub-link-secondary">💻 Dataset</a>
                </div>
              </div>
            </div>
          )}

          {isVisible('journal') && (
            <div className="publication-card" data-category="journal">
              <div className="publication-icon">📄</div>
              <div className="publication-content">
                <h3 className="publication-title">Spatio-Temporal Graph Neural Networks for Late Blight Disease Forecasting</h3>
                <div className="publication-meta">
                  <span>📅 2024</span>
                  <span>🏛️ IJICTDC</span>
                  <span>👥 Harish Chandra Bhandari, Roshan Subedi, Kumar Lama, Yagya Raj Pandeya, Rajendra Dhakal, Oshin Sharma, Rojina Shakya, Prajwal Thapa, Bauram Chaudhary</span>
                </div>
                <p className="publication-description">
                  Late blight, caused by Phytophthora infestans, threatens tomato and potato crops in Nepal. This study explores developing and deploying a mobile application powered by a graph neural network (GNN) to predict late blight risk for Nepali farmers. The GNN trained on 43 years of NASA satellite weather data can generate 5-days forecast for 320 weather stations in Sudurpashim and Karnali Province, Nepal. The mobile application offers user-friendly forecasts and visualizes late blight risk through clear graphical interfaces. In the visited sites, 30% of tomato and potato crops were found infected with late blight, which the app had identified as high-risk. Samples infected with late blight were collected and analyzed in a wet lab setting. All infected samples tested positive for P. infestans, confirming the app's ability to predict real-world late blight outbreaks. This study showcases the successful development and …
                </p>
                <div className="publication-tags">
                  <span className="tag">Graph Neural Networks</span>
                  <span className="tag">Weather Forecasting</span>
                  <span className="tag">Late Blight Disease Forecasting</span>
                  <span className="tag">Weather Forecasting</span>
                </div>
                <div className="publication-links">
                  <a href="https://www.earticle.net/Article/A458892" target="_blank" rel="noopener noreferrer" className="pub-link pub-link-primary">📖 Read Paper</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

