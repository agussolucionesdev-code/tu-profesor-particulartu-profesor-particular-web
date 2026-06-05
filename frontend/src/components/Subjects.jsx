import Reveal from './motion/Reveal.jsx';
import RevealGroup from './motion/RevealGroup.jsx';
import { subjects, subjectsIntro } from '../data/siteData.js';
import { IconByKey } from '../lib/iconMap.jsx';

export default function Subjects() {
  return (
    <section className="materias-bg" id="materias">
      <div className="container">
        <Reveal className="subjects-heading" style={{ marginBottom: 44 }}>
          <div className="section-label">{subjectsIntro.label}</div>
          <h2 className="section-title">
            {subjectsIntro.titleLine1}
            <br />
            {subjectsIntro.titleLine2}
          </h2>
          <p className="section-desc">
            {subjectsIntro.descriptionBefore}
            <em>{subjectsIntro.descriptionEmphasis}</em>
            {subjectsIntro.descriptionAfter}
          </p>
        </Reveal>
        <RevealGroup className="materias-grid" variant="cards" stagger={0.09}>
          {subjects.map((subject) => (
            <article className={`materia-card${subject.dark ? ' dark' : ''}`} key={subject.title}>
              <div className="materia-icon">
                <IconByKey iconKey={subject.iconKey} size={26} strokeWidth={1.85} />
              </div>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

