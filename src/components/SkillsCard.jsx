import '../Styles/skills.css';


function SkillsCard({ title, items }) {
return (
<li className="skills-card">
<h3>{title}</h3>
<div className="skills-items">
{items.map(({ icon, label }, idx) => (
<div key={idx} className="skill-item">
<div className="skill-icon">{icon}</div>
<span className="skill-label">{label}</span>
</div>
))}
</div>
</li>
);
}

export default SkillsCard;
