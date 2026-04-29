export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
          <path d="M10.218 1.688a.75.75 0 10-1.436-.432l-2.97 9.876a.75.75 0 001.436.432zM4.78 3.97a.75.75 0 010 1.06L2.56 7.25l2.22 2.22a.75.75 0 01-1.06 1.06l-2.75-2.75a.75.75 0 010-1.06l2.75-2.75a.75.75 0 011.06 0zm6.44 0a.75.75 0 011.06 0l2.75 2.75a.75.75 0 010 1.06l-2.75 2.75a.75.75 0 11-1.06-1.06l2.22-2.22-2.22-2.22a.75.75 0 010-1.06z" />
        </svg>
      ),
      skills: ["Python", "SQL"],
      color: "#f97316"
    },
    {
      title: "Libraries",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
        </svg>
      ),
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "#3b82f6"
    },
    {
      title: "Visualization",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
          <path d="M1.5 1.75V13.5h13.75a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75V1.75a.75.75 0 011.5 0zm14.28 2.53l-5.25 5.25a.75.75 0 01-1.06 0L7 7.06 4.28 9.78a.75.75 0 01-1.06-1.06l3.25-3.25a.75.75 0 011.06 0L10 7.94l4.72-4.72a.75.75 0 111.06 1.06z" />
        </svg>
      ),
      skills: ["Tableau", "Google Sheets", "Looker Studio"],
      color: "#8b5cf6"
    },
    {
      title: "Tools",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
          <path d="M7.875.188a.75.75 0 01.25 0l5.5 1.937a.75.75 0 01.5.707v5.793c0 2.58-1.404 4.457-2.858 5.72a12.2 12.2 0 01-2.718 1.838l-.073.038-.03.015-.012.005-.004.002a.75.75 0 01-.6 0l-.004-.002-.012-.005-.03-.015-.073-.038a12.2 12.2 0 01-2.718-1.838C3.904 13.082 2.5 11.205 2.5 8.625V2.832a.75.75 0 01.5-.707zM8 1.7L3.5 3.285v5.34c0 2.015 1.112 3.535 2.358 4.632A10.7 10.7 0 008 14.747a10.7 10.7 0 002.142-1.49C11.388 12.16 12.5 10.64 12.5 8.625V3.285z" />
        </svg>
      ),
      skills: ["Excel", "Jupyter Notebooks", "GitHub"],
      color: "#10b981"
    },
    {
      title: "Expertise",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
          <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.751.751 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
        </svg>
      ),
      skills: ["Statistics", "Data Cleaning", "EDA", "Dashboarding", "KPI Framework Design"],
      color: "#ec4899"
    }
  ]

  return (
    <div className="skills-section">
      <div className="skills-header">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
          <path d="M7.875.188a.75.75 0 01.25 0l5.5 1.937a.75.75 0 01.5.707v5.793c0 2.58-1.404 4.457-2.858 5.72a12.2 12.2 0 01-2.718 1.838l-.073.038-.03.015-.012.005-.004.002a.75.75 0 01-.6 0l-.004-.002-.012-.005-.03-.015-.073-.038a12.2 12.2 0 01-2.718-1.838C3.904 13.082 2.5 11.205 2.5 8.625V2.832a.75.75 0 01.5-.707z" />
        </svg>
        <span className="skills-title">Skills & Technologies</span>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category-card">
            <div className="skill-category-header">
              {category.icon}
              <span className="skill-category-title">{category.title}</span>
              <span
                className="skill-category-dot"
                style={{ backgroundColor: category.color }}
              />
            </div>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag"
                  style={{
                    borderColor: `${category.color}33`,
                    backgroundColor: `${category.color}0d`,
                    color: category.color
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
