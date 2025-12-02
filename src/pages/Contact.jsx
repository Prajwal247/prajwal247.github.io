import React, { useRef, useState } from 'react';
import Nav from '../components/Nav.jsx';
import Particles from '../components/Particles.jsx';

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    setShowSuccess(false);
    try {
      const formData = new FormData(formRef.current);
      const response = await fetch('https://formspree.io/f/xwpekgqg', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      setLoading(false);
      if (response.ok) {
        setShowSuccess(true);
        formRef.current.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (err) {
      setLoading(false);
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  };

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
        body.light-theme .logo, body.light-theme .nav-links a { color:#1a1a2e; }
        body.light-theme .nav-links a::after { background: #1a1a2e; }
        body.light-theme .burger-menu span { background: #1a1a2e; }
        body.light-theme .contact-form-section, body.light-theme .info-card, body.light-theme .social-links-section { background: rgba(255,255,255,0.6); border-color: rgba(0,0,0,0.1); }
        body.light-theme .form-group input, body.light-theme .form-group textarea { background: rgba(255,255,255,0.8); border-color: rgba(0,0,0,0.15); color:#1a1a2e; }
        body.light-theme .form-group input::placeholder, body.light-theme .form-group textarea::placeholder { color: rgba(0,0,0,0.5); }
        body.light-theme .submit-btn { background:#1a1a2e; color:#fff; }
        body.light-theme .social-link { background: rgba(255,255,255,0.5); border-color: rgba(0,0,0,0.1); color:#1a1a2e; }
        body.light-theme .social-link:hover { background: rgba(255,255,255,0.8); }
        body.light-theme .social-link-icon svg { fill:#1a1a2e; }
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
        .nav-links a:hover::after, .nav-links a.active::after { width:100%; }
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
        .contact-grid { display:grid; grid-template-columns: 1fr 1fr; gap:40px; animation: fadeInUp 0.8s ease 0.2s both; }
        .contact-form-section { background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:40px; backdrop-filter: blur(10px); }
        .contact-form-section h2 { font-size:28px; margin-bottom:10px; }
        .contact-form-section p { opacity:0.7; margin-bottom:30px; }
        .form-group { margin-bottom:25px; }
        .form-group label { display:block; margin-bottom:8px; font-size:14px; font-weight:500; opacity:0.9; }
        .form-group input, .form-group textarea {
          width:100%; padding:14px 18px; background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2); border-radius:10px; color:#fff; font-size:15px; font-family: inherit; transition: all 0.3s ease;
        }
        .form-group input:focus, .form-group textarea:focus { outline:none; background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.4); }
        .form-group textarea { resize:vertical; min-height:150px; }
        .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,0.5); }
        .submit-btn { width:100%; padding:15px; background:#fff; color:#1a1a2e; border:none; border-radius:10px; font-size:16px; font-weight:600; cursor:pointer; transition: all 0.3s ease; position:relative; }
        .submit-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(255,255,255,0.3); }
        .submit-btn:active { transform: translateY(-1px); }
        .submit-btn:disabled { opacity:0.6; cursor:not-allowed; transform:none; }
        .submit-btn.loading { pointer-events:none; }
        .submit-btn .btn-text { display:inline-block; transition: opacity 0.3s ease; }
        .submit-btn.loading .btn-text { opacity:0; }
        .submit-btn .loading-spinner {
          display:none; position:absolute; top:50%; left:50%; transform: translate(-50%, -50%); width:20px; height:20px; border:3px solid rgba(26,26,46,0.3); border-top-color:#1a1a2e; border-radius:50%; animation: spin 0.8s linear infinite;
        }
        .submit-btn.loading .loading-spinner { display:block; }
        @keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg);} }
        .contact-info-section { display:flex; flex-direction:column; gap:30px; }
        .info-card { background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:30px; backdrop-filter: blur(10px); transition: all 0.3s ease; }
        .info-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.2); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
        .info-card h3 { font-size:22px; margin-bottom:20px; display:flex; align-items:center; gap:12px; }
        .info-card-icon { width:40px; height:40px; background: rgba(255,255,255,0.1); border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:20px; }
        .contact-method { margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.1); }
        .contact-method:last-child { margin-bottom:0; padding-bottom:0; border-bottom:none; }
        .contact-method-label { font-size:13px; opacity:0.6; margin-bottom:5px; }
        .contact-method-value { font-size:16px; opacity:0.9; }
        .contact-method-value a { color:#fff; text-decoration:none; transition: opacity 0.3s ease; }
        .contact-method-value a:hover { opacity:0.7; }
        .social-links-section { background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:30px; backdrop-filter: blur(10px); }
        .social-links-section h3 { font-size:22px; margin-bottom:20px; display:flex; align-items:center; gap:12px; }
        .social-links-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:15px; }
        .social-link { display:flex; align-items:center; gap:12px; padding:15px; background: rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; text-decoration:none; color:#fff; transition: all 0.3s ease; }
        .social-link:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); transform: translateY(-3px); }
        .social-link-icon { width:35px; height:35px; background: rgba(255,255,255,0.1); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .social-link-icon svg { width:18px; height:18px; fill:#fff; }
        .social-link-text { flex:1; }
        .social-link-label { font-size:12px; opacity:0.6; margin-bottom:2px; }
        .social-link-username { font-size:14px; font-weight:500; }
        .availability-badge { display:inline-flex; align-items:center; gap:8px; padding:10px 20px; background: rgba(46,213,115,0.15); border:1px solid rgba(46,213,115,0.3); border-radius:25px; font-size:14px; margin-bottom:30px; }
        .availability-dot { width:8px; height:8px; background:#2ed573; border-radius:50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.5;} }
        .success-message { display:none; padding:15px; background: rgba(46,213,115,0.15); border:1px solid rgba(46,213,115,0.3); border-radius:10px; margin-bottom:20px; color:#2ed573; text-align:center; }
        .success-message.show { display:block; animation: slideIn 0.5s ease; }
        body.light-theme .success-message { background: rgba(46,213,115,0.2); color:#27ae60; }
        @keyframes slideIn { from{ opacity:0; transform: translateY(-10px);} to{ opacity:1; transform: translateY(0);} }
        @media (max-width: 968px) { .contact-grid { grid-template-columns:1fr; } .social-links-grid { grid-template-columns:1fr; } }
        @media (max-width: 768px) {
          nav { padding: 15px 20px; }
          .theme-switcher { position:absolute; top:15px; right:70px; }
          .burger-menu { display:flex; }
          .nav-links {
            position:fixed; top:70px; right:-100%; width:280px; height:calc(100vh - 70px); background: rgba(0,0,0,0.95);
            backdrop-filter: blur(20px); flex-direction:column; padding:40px 20px; gap:25px; transition: right 0.4s ease; border-left:1px solid rgba(255,255,255,0.1);
          }
          .nav-links.active { right:0; }
          .nav-links li { opacity:0; transform: translateX(50px); transition: all 0.3s ease; }
          .nav-links.active li { opacity:1; transform: translateX(0); }
          .nav-links.active li:nth-child(1){ transition-delay:0.1s; }
          .nav-links.active li:nth-child(2){ transition-delay:0.2s; }
          .nav-links.active li:nth-child(3){ transition-delay:0.3s; }
          .nav-links.active li:nth-child(4){ transition-delay:0.4s; }
          .nav-links.active li:nth-child(5){ transition-delay:0.5s; }
          .nav-links.active li:nth-child(6){ transition-delay:0.6s; }
          .nav-links.active li:nth-child(7){ transition-delay:0.7s; }
          .nav-links a { font-size:18px; }
          .container { padding: 100px 20px 60px; }
          .page-header h1 { font-size:36px; }
          .contact-form-section, .info-card, .social-links-section { padding:25px; }
        }
      `}</style>

      <Particles />
      <Nav />

      <div className="container">
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p>Feel free to reach out for collaborations, opportunities, or just to say hi!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-section">
            <div className="availability-badge">
              <span className="availability-dot"></span>
              <span>Available for opportunities</span>
            </div>

            <h2>Send Me a Message</h2>
            <p>I'll get back to you within 24 hours</p>

            <div className={`success-message${showSuccess ? ' show' : ''}`}>
              ✓ Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.
            </div>

            <form ref={formRef} onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="What's this about?" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="Tell me more about your inquiry..." required />
              </div>
              <button type="submit" className={`submit-btn${loading ? ' loading' : ''}`} disabled={loading}>
                <span className="btn-text">Send Message</span>
                <span className="loading-spinner"></span>
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="info-card">
              <h3><span className="info-card-icon">📧</span>Direct Contact</h3>
              <div className="contact-method">
                <div className="contact-method-label">Email</div>
                <div className="contact-method-value"><a href="mailto:prazzwalthapa87@gmail.com">prazzwalthapa87@gmail.com</a></div>
              </div>
              <div className="contact-method">
                <div className="contact-method-label">Phone</div>
                <div className="contact-method-value"><a href="tel:+9779842972646">+977 9842972646</a></div>
              </div>
              <div className="contact-method">
                <div className="contact-method-label">Location</div>
                <div className="contact-method-value">Kathmandu, Nepal</div>
              </div>
            </div>

            <div className="social-links-section">
              <h3><span className="info-card-icon">🌐</span>Connect on Social</h3>
              <div className="social-links-grid">
                <a href="https://github.com/prajwal247" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-link-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </div>
                  <div className="social-link-text">
                    <div className="social-link-label">GitHub</div>
                    <div className="social-link-username">@prajwal247</div>
                  </div>
                </a>

                <a href="https://linkedin.com/in/prajwal-thapa-64048a1a4" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-link-icon">
                    <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </div>
                  <div className="social-link-text">
                    <div className="social-link-label">LinkedIn</div>
                    <div className="social-link-username">/in/prajwal-thapa-64048a1a4</div>
                  </div>
                </a>

                <a href="https://x.com/prazzwal16" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-link-icon">
                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                  <div className="social-link-text">
                    <div className="social-link-label">X (Twitter)</div>
                    <div className="social-link-username">@prazzwal16</div>
                  </div>
                </a>

                <a href="https://scholar.google.com/citations?user=pgmm1FUAAAAJ&hl=en" target="_blank" rel="noreferrer" className="social-link">
                  <div className="social-link-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>
                  </div>
                  <div className="social-link-text">
                    <div className="social-link-label">Google Scholar</div>
                    <div className="social-link-username">View Profile</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="info-card">
              <h3><span className="info-card-icon">💼</span>Looking For</h3>
              <div className="contact-method">
                <div className="contact-method-label">Opportunities</div>
                <div className="contact-method-value">Research collaborations, consulting projects, speaking engagements</div>
              </div>
              <div className="contact-method">
                <div className="contact-method-label">Response Time</div>
                <div className="contact-method-value">Within 24-48 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

