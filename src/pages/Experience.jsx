import React, { useState } from 'react';
import Nav from '../components/Nav.jsx';
import Particles from '../components/Particles.jsx';

export default function Experience() {
  const [tab, setTab] = useState('industry');

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color:#fff; overflow-x:hidden; min-height:100vh; transition: background 0.3s ease, color 0.3s ease;
        }
        body.light-theme { background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); color:#1a1a2e; }
        body.light-theme .particle { background: rgba(0,0,0,0.1); }
        body.light-theme nav { background: rgba(255,255,255,0.8); border-bottom: 1px solid rgba(0,0,0,0.1); }
        body.light-theme .logo, body.light-theme .nav-links a { color: #1a1a2e; }
        body.light-theme .nav-links a::after { background: #1a1a2e; }
        body.light-theme .burger-menu span { background: #1a1a2e; }
        body.light-theme .tab-btn, body.light-theme .experience-card, body.light-theme .stat-card {
          background: rgba(255,255,255,0.6); border-color: rgba(0,0,0,0.1); color:#1a1a2e;
        }
        body.light-theme .tab-btn:hover, body.light-theme .tab-btn.active { background: rgba(255,255,255,0.9); border-color: rgba(0,0,0,0.2); }
        body.light-theme .experience-card:hover, body.light-theme .stat-card:hover { background: rgba(255,255,255,0.8); border-color: rgba(0,0,0,0.15); }
        body.light-theme .experience-role, body.light-theme .experience-company { color:#1a1a2e; }
        body.light-theme .skill-tag, body.light-theme .experience-duration { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1); }
        body.light-theme .timeline::before { background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%); }
        body.light-theme .timeline-dot { background: #1a1a2e; box-shadow: 0 0 0 4px rgba(0,0,0,0.1); }
        body.light-theme .hero h1 { background: linear-gradient(45deg, #1a1a2e, #16213e); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        body.light-theme .page-header h1 {
          background: linear-gradient(45deg, #1a1a2e, #16213e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .particles { position:fixed; top:0; left:0; width:100%; height:100%; z-index:0; pointer-events:none; }
        .particle { position:absolute; background: rgba(255,255,255,0.1); border-radius:50%; animation: float 15s infinite; }
        @keyframes float { 0%,100%{transform:translateY(0) translateX(0);} 25%{transform:translateY(-100px) translateX(50px);} 50%{transform:translateY(-200px) translateX(-50px);} 75%{transform:translateY(-100px) translateX(100px);} }
        nav {
          position:fixed; top:0; width:100%; padding:20px 50px; display:flex; justify-content:space-between; align-items:center;
          background: rgba(0,0,0,0.5); backdrop-filter: blur(10px); z-index:1000; transition: all 0.3s ease;
        }
        .logo { font-size:24px; font-weight:bold; letter-spacing:2px; text-decoration:none; color:#fff; transition: transform 0.3s ease; }
        .logo:hover { transform: scale(1.05); }
        .nav-links { display:flex; gap:30px; list-style:none; margin-left:auto; }
        .nav-links a { color:#fff; text-decoration:none; font-size:16px; transition: all 0.3s ease; position:relative; }
        .nav-links a::after { content:''; position:absolute; bottom:-5px; left:0; width:0; height:2px; background:#fff; transition: width 0.3s ease; }
        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }
        .burger-menu { display:none; flex-direction:column; gap:5px; cursor:pointer; z-index:1001; }
        .burger-menu span { width:25px; height:3px; background:#fff; border-radius:3px; transition: all 0.3s ease; }
        .burger-menu.active span:nth-child(1){ transform: rotate(45deg) translate(8px, 8px); }
        .burger-menu.active span:nth-child(2){ opacity:0; }
        .burger-menu.active span:nth-child(3){ transform: rotate(-45deg) translate(7px, -7px); }
        .theme-switcher { position:relative; margin-left:20px; }
        .theme-current {
          display:flex; align-items:center; gap:8px; background: rgba(255,255,255,0.1); padding:8px 16px; border-radius:25px; backdrop-filter: blur(10px);
          border:1px solid rgba(255,255,255,0.2); cursor:pointer; font-size:14px; color:#fff; transition: all 0.3s ease; min-width:120px; justify-content:space-between;
        }
        body.light-theme .theme-current { background: rgba(0,0,0,0.05); border-color: rgba(0,0,0,0.1); color:#1a1a2e; }
        .theme-current:hover { background: rgba(255,255,255,0.15); }
        body.light-theme .theme-current:hover { background: rgba(0,0,0,0.08); }
        .theme-dropdown {
          position:absolute; top: calc(100% + 8px); right:0; background: rgba(0,0,0,0.95); backdrop-filter: blur(20px);
          border:1px solid rgba(255,255,255,0.2); border-radius:15px; padding:8px; min-width:150px; opacity:0; visibility:hidden; transform: translateY(-10px); transition: all 0.3s ease; z-index:1100;
        }
        body.light-theme .theme-dropdown { background: rgba(255,255,255,0.95); border-color: rgba(0,0,0,0.1); }
        .theme-switcher.open .theme-dropdown { opacity:1; visibility:visible; transform: translateY(0); }
        .theme-option { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:10px; cursor:pointer; font-size:14px; color:#fff; transition: all 0.2s ease; border:none; background:transparent; width:100%; text-align:left; }
        body.light-theme .theme-option { color:#1a1a2e; }
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
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .page-header p { font-size:18px; opacity:0.8; max-width:600px; margin:0 auto; }
        .tab-navigation { display:flex; justify-content:center; gap:20px; margin-bottom:50px; animation: fadeInUp 0.8s ease 0.2s both; }
        .tab-btn {
          padding:12px 35px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.05); color:#fff; border-radius:25px;
          cursor:pointer; transition: all 0.3s ease; font-size:16px; font-weight:500; backdrop-filter: blur(10px);
        }
        .tab-btn:hover, .tab-btn.active { background: rgba(255,255,255,0.2); border-color: rgba(255,255,255,0.5); transform: translateY(-2px); }
        .timeline-container { display:none; animation: fadeInUp 0.8s ease; }
        .timeline-container.active { display:block; }
        .timeline { position:relative; padding-left:50px; }
        .timeline::before {
          content:''; position:absolute; left:0; top:0; height:100%; width:3px;
          background: linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
        }
        .timeline-item { position:relative; margin-bottom:50px; animation: fadeInLeft 0.6s ease; animation-fill-mode: both; }
        .timeline-item:nth-child(1){ animation-delay: 0.1s; }
        .timeline-item:nth-child(2){ animation-delay: 0.2s; }
        .timeline-item:nth-child(3){ animation-delay: 0.3s; }
        .timeline-item:nth-child(4){ animation-delay: 0.4s; }
        .timeline-item:nth-child(5){ animation-delay: 0.5s; }
        @keyframes fadeInLeft { from { opacity:0; transform: translateX(-30px);} to { opacity:1; transform: translateX(0);} }
        .timeline-dot { position:absolute; left:-56px; top:8px; width:16px; height:16px; background:#fff; border-radius:50%; box-shadow: 0 0 0 4px rgba(255,255,255,0.2); }
        .experience-card { background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:15px; padding:30px; backdrop-filter: blur(10px); transition: all 0.3s ease; }
        .experience-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); transform: translateX(10px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .experience-header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:15px; flex-wrap:wrap; gap:15px; }
        .experience-title-section { flex:1; min-width:250px; }
        .experience-role { font-size:24px; font-weight:600; margin-bottom:8px; color:#fff; }
        .experience-company { font-size:18px; opacity:0.8; display:flex; align-items:center; gap:8px; margin-bottom:5px; }
        .experience-location { font-size:14px; opacity:0.6; display:flex; align-items:center; gap:5px; }
        .experience-duration { padding:8px 16px; background: rgba(255,255,255,0.1); border-radius:20px; font-size:14px; white-space:nowrap; border:1px solid rgba(255,255,255,0.2); }
        .experience-description { font-size:15px; line-height:1.7; opacity:0.85; margin-bottom:20px; }
        .experience-highlights { margin-bottom:20px; }
        .experience-highlights ul { list-style:none; padding:0; }
        .experience-highlights li {
          padding-left:25px; margin-bottom:12px; position:relative; font-size:15px; line-height:1.6; opacity:0.85;
        }
        .experience-highlights li::before { content:'▸'; position:absolute; left:0; color: rgba(255,255,255,0.6); font-weight:bold; }
        .experience-skills { display:flex; gap:10px; flex-wrap:wrap; }
        .skill-tag { padding:6px 14px; background: rgba(255,255,255,0.1); border-radius:15px; font-size:12px; border:1px solid rgba(255,255,255,0.2); transition: all 0.3s ease; }
        .skill-tag:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }
        .summary-stats { display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:20px; margin-bottom:50px; animation: fadeInUp 0.8s ease 0.3s both; }
        .stat-card { background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:15px; padding:25px; text-align:center; backdrop-filter: blur(10px); transition: all 0.3s ease; }
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
          .tab-navigation { flex-direction:column; align-items:stretch; }
          .tab-btn { width:100%; }
          .timeline { padding-left:30px; }
          .timeline-dot { left:-36px; }
          .experience-card { padding:20px; }
          .experience-role { font-size:20px; }
          .experience-company { font-size:16px; }
          .experience-header { flex-direction:column; }
          .summary-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <Particles />
      <Nav />

      <div className="container">
        <div className="page-header">
          <h1>Experience</h1>
          <p>My professional journey in industry and research</p>
        </div>

        <div className="tab-navigation">
          <button className={`tab-btn${tab === 'industry' ? ' active' : ''}`} onClick={() => setTab('industry')}>💼 Industry Experience</button>
          <button className={`tab-btn${tab === 'research' ? ' active' : ''}`} onClick={() => setTab('research')}>🔬 Research Experience</button>
        </div>

        <div id="industry" className={`timeline-container${tab === 'industry' ? ' active' : ''}`}>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">AI Engineer</h3>
                    <div className="experience-company">
                      <span>🏢</span>
                      <span>Insyde AI</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Maryland, USA</span>
                    </div>
                  </div>
                  <div className="experience-duration">September 2025 - Present</div>
                </div>
                <p className="experience-description">
                  Research and development tools and infrastructure for mortgage lending companies.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Conducted research in generative models for mortgage document processing and analysis</li>
                    <li>Built custom functions and tools to support loan officers in streamlining mortgage workflows</li>
                    <li>Integrated voice-to-voice call capabilities for enhanced customer interaction</li>
                    <li>Improved RAG (Retrieval-Augmented Generation) systems for accurate information retrieval</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">RAG</span>
                  <span className="skill-tag">MLOps</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Generative AI</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">AI R&D Engineer</h3>
                    <div className="experience-company">
                      <span>🏢</span>
                      <span>Qualz AI</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Ohio, USA</span>
                    </div>
                  </div>
                    <div className="experience-duration">September 2025 - June 2025</div>
                </div>
                <p className="experience-description">
                  Research and development of AI Agent behavior and interaction with users.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Collaborate with Dr. Sagar Sharma, Dr. VenuGopal Vasudevan, Dr. Prajwal Paudyal, and the R&D team to research and develop advanced AI features for qualz.ai</li>
                    <li>Design, develop, and deploy web applications to support and integrate AI features being researched and implemented</li>
                    <li>Contribute to white papers, conference papers, and technical blogs documenting research findings and innovations</li>
                    <li>Prepare and publish technical content including research findings and project updates to share knowledge with the broader community</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Scikit-learn</span>
                  <span className="skill-tag">NLP</span>
                  <span className="skill-tag">AI Agents</span>
                  <span className="skill-tag">Web Development</span>
                  <span className="skill-tag">Generative AI</span>
                  <span className="skill-tag">Git</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">Mid - Level ML Engineer</h3>
                    <div className="experience-company">
                      <span>🏢</span>
                      <span>Virtly IT & Business Solutions Sarl (ICEBRKR)</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Lalitpur, Nepal</span>
                    </div>
                  </div>
                  <div className="experience-duration">February 2024 - September 2025</div>
                </div>
                <p className="experience-description">
                  Developed predictive models and conducted data analysis to support business decision-making.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Fine-tuned deep learning models (BART, MobileLLM, Pegasus) to generate concise and accurate summaries of chat conversations, enhancing user experience and information retrieval</li>
                    <li>Developed and implemented sophisticated algorithms to identify and resolve scheduling conflicts, proposing optimal time slots for all participants</li>
                    <li>Leveraged Phi-3 to design and deploy a task prioritization system, ensuring efficient workflow management and resource allocation based on task urgency and importance</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">BART</span>
                  <span className="skill-tag">MobileLLM</span>
                  <span className="skill-tag">Pegasus</span>
                  <span className="skill-tag">Phi-3</span>
                  <span className="skill-tag">Fine-tuning</span>
                  <span className="skill-tag">NLP</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">Software Engineer</h3>
                    <div className="experience-company">
                      <span>🏢</span>
                      <span>Readytowork corp.</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Tokyo, Japan</span>
                    </div>
                  </div>
                  <div className="experience-duration">September 2022 - February 2024</div>
                </div>
                <p className="experience-description">
                  Build a full fledged web application for a client.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Built responsive websites and reusable components in ReactJS</li>
                    <li>Developed web applications using NextJS and TypeScript</li>
                    <li>Designed and integrated RESTful APIs for seamless backend communication</li>
                    <li>Ensured full-stack functionality by collaborating on backend development using Node.js and Express</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">RAG</span>
                  <span className="skill-tag">MLOps</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Kubernetes</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Generative AI</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">Associate Software Engineer</h3>
                    <div className="experience-company">
                      <span>🏢</span>
                      <span>Truemark Technology</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                  <div className="experience-duration">December 2020 - September 2022</div>
                </div>
                <p className="experience-description">
                  Develop and learn web development technologies.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Developed interactive and responsive web applications using ReactJS</li>
                    <li>Built robust backend services utilizing the Django REST framework</li>
                    <li>Wrote and maintained clean, scalable, and maintainable code for both frontend and backend</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">ReactJS</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">Django REST framework</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="research" className={`timeline-container${tab === 'research' ? ' active' : ''}`}>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">AI Researcher</h3>
                    <div className="experience-company">
                      <span>🎓</span>
                      <span>IRIIS (Institute for Research and Innovation in Intelligent Systems)</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>
                  <div className="experience-duration">July 2024 - Present</div>
                </div>
                <p className="experience-description">
                  Research and improve the capability of AI and LLMs to understand and generate Nepali language, focusing on underrepresented languages.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Explored model interpretability and built fair and reliable benchmarks for underrepresented languages</li>
                    <li>Wrote research papers, white papers, and technical blogs on AI and LLM capabilities</li>
                    <li>Presented research at academic and industry forums to drive AI research efforts locally and globally</li>
                    <li>Developed experimental AI systems, datasets, and prototypes to demonstrate research ideas</li>
                    <li>Built and hosted lightweight web tools and demos to test hypotheses and facilitate collaborative research</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Large Language Models</span>
                  <span className="skill-tag">NLP</span>
                  <span className="skill-tag">Model Interpretability</span>
                  <span className="skill-tag">Research Writing</span>
                  <span className="skill-tag">Benchmarking</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Low-Resource Languages</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">Research Assistant</h3>
                    <div className="experience-company">
                      <span>🎓</span>
                      <span>Information and Language Processing Research Lab (ILPRL)</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Kavrepalanchok, Nepal</span>
                    </div>
                  </div>
                  <div className="experience-duration">Advisor: Prof. Dr. Bal Krishna Bal</div>
                </div>
                <p className="experience-description">
                  Research on Natural Language Processing for Nepali language, focusing on language model development and benchmark creation.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Collected the largest Nepali text corpus (27.5GB) for language model training</li>
                    <li>Pre-trained BERT, RoBERTa, and GPT-2 models exclusively for the Nepali Language with instruction tuning</li>
                    <li>Introduced the first-ever GPT-2 (decoder model) for the Nepali Language</li>
                    <li>Enhanced Natural Language Understanding (NLU) benchmark by adding Sentiment Analysis, Conference Resolution, Acceptability Judgments, and Paraphrase Detection to NepGLUE</li>
                    <li>Developed the first-ever Natural Language Generation (NLG) benchmark for Nepali</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">BERT</span>
                  <span className="skill-tag">RoBERTa</span>
                  <span className="skill-tag">GPT-2</span>
                  <span className="skill-tag">NLP</span>
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">Transformers</span>
                  <span className="skill-tag">NepGLUE</span>
                  <span className="skill-tag">Low-Resource Languages</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-role">Research Associate</h3>
                    <div className="experience-company">
                      <span>🎓</span>
                      <span>Directorate of Research, Development and Innovation, Kathmandu University</span>
                    </div>
                    <div className="experience-location">
                      <span>📍</span>
                      <span>Kavrepalanchok, Nepal</span>
                    </div>
                  </div>
                  <div className="experience-duration">Acting Director: Associate Prof. Brijesh Adhikary</div>
                </div>
                <p className="experience-description">
                  Conducted research on agricultural disease prediction in collaboration with ICIMOD and mentored undergraduate students.
                </p>
                <div className="experience-highlights">
                  <ul>
                    <li>Worked on ICIMOD (International Centre for Integrated Mountain Development) research project on Late Blight Prediction, a common disease affecting crops like potato and tomato</li>
                    <li>Developed predictive models to help farmers identify and prevent Late Blight disease outbreaks</li>
                    <li>Supervised undergraduate minor projects, providing guidance on research methodology and technical implementation</li>
                    <li>Conducted various seminars on current trends and practices in Artificial Intelligence for faculty and students</li>
                  </ul>
                </div>
                <div className="experience-skills">
                  <span className="skill-tag">Machine Learning</span>
                  <span className="skill-tag">Disease Prediction</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Research</span>
                  <span className="skill-tag">Mentoring</span>
                  <span className="skill-tag">Agricultural AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

