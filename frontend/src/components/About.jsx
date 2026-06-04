import {
  aboutStats,
  aboutTabs,
  brand,
  formationItems,
  images,
  skillItems,
  timelineItems,
  valueCards,
} from '../data/siteData.js';
import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';

function AboutStats() {
  return (
    <>
      {aboutStats.map((stat) => (
        <div className="sobre-stat" key={stat.value}>
          <div className={`sobre-stat-num${stat.tone ? ` ${stat.tone}` : ''}`}>{stat.value}</div>
          <div className="sobre-stat-label">
            {stat.labelLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function FormationTab() {
  return (
    <RevealGroup className="formacion-list" stagger={0.08}>
      {formationItems.map((item) => (
        <div className="formacion-item" key={item.title}>
          <div className="formacion-icon">{item.icon}</div>
          <div>
            <div className="formacion-title">{item.title}</div>
            <div className="formacion-desc">{item.description}</div>
          </div>
        </div>
      ))}
    </RevealGroup>
  );
}

function TimelineTab() {
  return (
    <RevealGroup as="div" className="timeline" stagger={0.1}>
      {timelineItems.map((item) => (
        <div className="timeline-item" key={item.year}>
          <div className="timeline-dot"></div>
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-event">{item.event}</div>
          <div className="timeline-detail">{item.detail}</div>
        </div>
      ))}
    </RevealGroup>
  );
}

function ValuesTab() {
  return (
    <RevealGroup className="valores-grid" stagger={0.08} variant="scale">
      {valueCards.map((value) => (
        <div className="valor-card" key={value.name}>
          <div className="valor-emoji">{value.icon}</div>
          <div className="valor-name">{value.name}</div>
          <div className="valor-desc">{value.description}</div>
        </div>
      ))}
    </RevealGroup>
  );
}

function SkillsTab() {
  return (
    <RevealGroup as="div" className="skills-list" id="skills-list" stagger={0.06}>
      {skillItems.map(([name, percent]) => (
        <div className="skill-item" key={name}>
          <div className="skill-header">
            <span className="skill-name">{name}</span>
            <span className="skill-pct">{percent}</span>
          </div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ '--pct': percent }}></div>
          </div>
        </div>
      ))}
    </RevealGroup>
  );
}

function TabContent({ id, children, active = false }) {
  return (
    <div className={`sobre-tab-content${active ? ' active' : ''}`} id={`tab-${id}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="sobre-bg" id="sobre">
        <div className="container">
          <div className="sobre-inner-v2">
            <Reveal as="div" className="sobre-photo-col" variant="left">
              <div className="sobre-photo-frame">
                <img alt={brand.owner} className="sobre-photo-main" src={images.about} />
                <AboutStats />
              </div>
            </Reveal>

            <Reveal as="div" className="sobre-content-col" variant="right">
              <h2 className="sobre-intro">
                Soy docente porque
                <br />
                <em>lo elegí.</em>
              </h2>
              <span className="sobre-tagline">No por falta de opciones — por vocación real.</span>

              <div className="sobre-tabs">
                {aboutTabs.map((tab, index) => (
                  <button className={`sobre-tab${index === 0 ? ' active' : ''}`} key={tab.id} type="button">
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              <TabContent active id="formacion">
                <FormationTab />
              </TabContent>
              <TabContent id="experiencia">
                <TimelineTab />
              </TabContent>
              <TabContent id="valores">
                <ValuesTab />
              </TabContent>
              <TabContent id="habilidades">
                <SkillsTab />
              </TabContent>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="wave" style={{ background: 'var(--white)' }}>
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,0 L0,0 Z" fill="#1C3558"></path>
        </svg>
      </div>
    </>
  );
}
