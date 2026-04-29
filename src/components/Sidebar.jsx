export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img
        src="https://github.com/pragya238.png"
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Pragya Kashyap</h1>
      <p className="sidebar-username">pragya238</p>
      <p className="sidebar-bio">
        Data Visualization and Analytics enthusiast with hands-on experience in data cleaning, EDA, and interactive dashboard development using Tableau and modern web technologies.
      </p>

      <a
        href="https://github.com/pragya238"
        target="_blank"
        rel="noreferrer"
        className="sidebar-follow-btn"
      >
        View GitHub
      </a>
      <div className="sidebar-socials">
        <a
          href="https://github.com/pragya238"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/pragya-kashyap-401788323"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          LinkedIn
        </a>
        <a
          href="https://kaggle.com/pragyakashyap23"
          target="_blank"
          rel="noreferrer"
          className="sidebar-social-btn"
        >
          Kaggle
        </a>
      </div>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>Sainik School Tilaiya, Jharkhand</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z" />
          </svg>
          <a href="mailto:kashyapragya23@gmail.com">kashyapragya23@gmail.com</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M2 1h12a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1v12h12V2H2zm5.5 8h1v3h-1v-3zm0-5h1v4h-1V5z" />
          </svg>
          <a href="tel:9341681608">9341681608</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
          </svg>
          <span>B.Tech, 2024–2028 | CGPA: 7.6</span>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">Python</span>
          <span className="org-pill">SQL</span>
          <span className="org-pill">Pandas</span>
          <span className="org-pill">NumPy</span>
          <span className="org-pill">Matplotlib</span>
          <span className="org-pill">Seaborn</span>
          <span className="org-pill">Tableau</span>
          <span className="org-pill">Google Sheets</span>
          <span className="org-pill">Looker Studio</span>
          <span className="org-pill">Excel</span>
          <span className="org-pill">Jupyter Notebooks</span>
          <span className="org-pill">GitHub</span>
          <span className="org-pill">Statistics</span>
          <span className="org-pill">Data Cleaning</span>
          <span className="org-pill">EDA</span>
          <span className="org-pill">Dashboarding</span>
          <span className="org-pill">KPI Framework Design</span>
        </div>
      </div>
    </aside>
  )
}
