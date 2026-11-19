import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import {
  ArrowDown, ArrowLeft, ArrowUpRight, Award, BriefcaseBusiness, Check,
  ChevronRight, Code2, ExternalLink, Gamepad2, Github, GraduationCap,
  Heart, Mail, MapPin, Menu, Moon, Palette, Play, Sigma, Volume2, VolumeX, Workflow,
} from 'lucide-react'
import { achievements, contacts, profile, projects, skills } from './data/profile'
import type { Project } from './types'

const navItems = [
  ['player', 'PLAYER'], ['projetos', 'PROJETOS'], ['inventario', 'INVENTÁRIO'],
  ['conquistas', 'CONQUISTAS'], ['contato', 'CONTATO'],
] as const

function App() {
  const [started, setStarted] = useState(false)
  const [active, setActive] = useState('player')
  const [sound, setSound] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [characterGreeting, setCharacterGreeting] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-30% 0px -55% 0px' })
    document.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (selectedProject && !dialog.open) dialog.showModal()
    if (!selectedProject && dialog.open) dialog.close()
  }, [selectedProject])

  const navigate = (id: string) => {
    playUiSound()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenu(false)
  }

  const start = () => {
    setStarted(true)
    window.setTimeout(() => navigate('player'), 180)
  }

  const playUiSound = () => {
    if (!sound) return
    try {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AudioContextClass) return
      const context = new AudioContextClass()
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = 'square'; oscillator.frequency.value = 520
      gain.gain.setValueAtTime(0.025, context.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.08)
      oscillator.connect(gain); gain.connect(context.destination)
      oscillator.start(); oscillator.stop(context.currentTime + 0.08)
      oscillator.onended = () => { void context.close() }
    } catch { /* áudio é opcional */ }
  }

  const interactWithCharacter = () => {
    setCharacterGreeting(true)
    window.setTimeout(() => setCharacterGreeting(false), 2600)
  }

  return (
    <div className={`app-shell ${started ? 'is-started' : ''}`}>
      <a className="skip-link" href="#player">Pular para o conteúdo</a>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Fabinho8_, início" onClick={(e) => { e.preventDefault(); navigate('inicio') }}>
          <span className="brand-pad"><Gamepad2 size={27} strokeWidth={2.2} /></span>
          <span className="brand-copy"><strong>Fabinho8_</strong><small>PORTFÓLIO</small></span>
        </a>
        <button className="mobile-menu-button" aria-label={mobileMenu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}><Menu size={21} /></button>
        <nav className={`main-nav ${mobileMenu ? 'nav-open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={(e) => { e.preventDefault(); navigate(id) }}>{label}</a>)}
        </nav>
        <div className="topbar-tools">
          <button className="icon-button sound-button" onClick={() => setSound(!sound)} aria-label={sound ? 'Desativar sons da interface' : 'Ativar sons da interface'} aria-pressed={sound} title={sound ? 'Som ligado' : 'Som desligado'}>
            {sound ? <Volume2 size={19} /> : <VolumeX size={19} />}
          </button>
          <span className="tool-divider" />
          <span className="lives" aria-label="Player 01"><Heart size={17} fill="currentColor"/><Heart size={17} fill="currentColor"/><Heart size={17} fill="currentColor"/></span>
        </div>
      </header>

      <main>
        <section className="hero scene" id="inicio" aria-labelledby="hero-title">
          <div className="scene-moon" aria-hidden="true"><Moon /></div>
          <div className="scene-stars" aria-hidden="true" />
          <div className="city city-back" aria-hidden="true" />
          <div className="city city-front" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-tag"><span className="status-dot" /> PLAYER 01 <i /> DIGITAL WORLD</div>
            <h1 id="hero-title">FÁBIO<br /><span>JOSÉ</span></h1>
            <p className="hero-role">SOFTWARE DEVELOPER <span>// EM FORMAÇÃO</span></p>
            <p className="hero-line">Transformando ideias em<br className="mobile-only" /> experiências digitais.</p>
            <button className="start-button" onClick={() => { playUiSound(); start() }}><Play size={17} fill="currentColor" /> PRESS START <ChevronRight size={17} /></button>
            <div className="hero-hint"><ArrowDown size={14} /> ROLE PARA EXPLORAR</div>
          </div>
          <div className="hero-avatar-wrap" aria-label="Retrato de Fábio José em pixel art">
            <div className="portrait-frame"><img src="/assets/fabio-pixel-portrait.webp" alt="Retrato pixel art de Fábio José com terno azul e gravata borboleta" /><span className="frame-corner top-left"/><span className="frame-corner bottom-right"/></div>
            <div className="sprite-badge"><span className="pixel-person" aria-hidden="true">FJ</span><span><b>PLAYER 01</b><small>OPEN TO INTERNSHIP</small></span></div>
          </div>
          <div className="scene-ground" aria-hidden="true" />
          <div className="scroll-cue" aria-hidden="true"><span>SCROLL</span><i /></div>
        </section>

        <section className="section profile-section" id="player" data-section aria-labelledby="profile-title">
          <SectionHeading eyebrow="PLAYER PROFILE // 001" title="PLAYER 01" note="PERFIL DO JOGADOR" />
          <div className="profile-grid">
            <button className={`character-card ${characterGreeting ? 'greeting' : ''}`} onClick={interactWithCharacter} aria-label="Interagir com Fábio. Ativar saudação">
              <div className="character-image"><img src="/assets/fabio-pixel-portrait.webp" alt="Retrato pixel art de Fábio José" /><span className="portrait-scanline" /></div>
              <div className="character-card-footer"><span><i className="status-dot"/> PLAYER PORTRAIT</span><span className="tiny-prompt">TOQUE PARA SAUDAR <ArrowUpRight size={13}/></span></div>
              <span className="greeting-bubble" role="status">{characterGreeting ? 'Boa! Valeu por visitar meu perfil! 👋' : 'Clique para interagir'}</span>
            </button>
            <button className={`character-sprite-card ${characterGreeting ? 'greeting' : ''}`} onClick={interactWithCharacter} aria-label="Interagir com o sprite de Fábio. Ativar saudação">
              <span className="sprite-stage"><img className="sprite-character" src="/assets/fabio-pixel-sprite.webp" alt="" /><span className="sprite-speech" role="status">{characterGreeting ? 'Boa! Valeu por visitar meu perfil! 👋' : 'OLÁ, PLAYER!'}</span></span>
              <span className="sprite-caption"><b>PLAYER SPRITE</b><small>CLIQUE PARA SAUDAR <ArrowUpRight size={12}/></small></span>
            </button>
            <div className="profile-main">
              <div className="panel profile-title-panel">
                <div className="panel-topline"><span><span className="purple-mark">◆</span> PLAYER PROFILE</span><span className="level-chip">LV. 18</span></div>
                <h2 id="profile-title">FÁBIO JOSÉ</h2>
                <p className="class-line">// CLASS: DEVELOPER</p>
                <p className="profile-sub">Player 01 <span>·</span> Digital World</p>
                <div className="student-chip"><GraduationCap size={17}/> COMPUTER SCIENCE STUDENT</div>
                <div className="availability"><span className="status-dot"/> OPEN TO INTERNSHIP</div>
              </div>
              <div className="profile-lower-grid">
                <div className="panel info-panel">
                  <PanelTitle icon={<Code2 size={16}/>} title="INFORMAÇÕES" />
                  <InfoRow icon={<Award/>} label="IDADE" value={`${profile.age} anos`} />
                  <InfoRow icon={<MapPin/>} label="LOCAL" value={profile.location} />
                  <InfoRow icon={<GraduationCap/>} label="FACULDADE" value={profile.institution} />
                  <InfoRow icon={<BriefcaseBusiness/>} label="PERÍODO" value={profile.period} />
                </div>
                <div className="panel objective-panel">
                  <PanelTitle icon={<Award size={16}/>} title="OBJETIVO ATUAL" accent="gold" />
                  <div className="trophy" aria-hidden="true">🏆</div>
                  <p>{profile.goal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="dialogue-box"><div className="dialogue-avatar">FJ</div><span className="dialogue-arrow">›</span><p>Olá! Eu sou o Fábio. Bem-vindo ao meu portfólio!<br className="desktop-only"/> Explore meus projetos e faça parte dessa jornada.</p><button onClick={() => navigate('projetos')}>VER QUEST LOG <ChevronRight size={16}/></button></div>
        </section>

        <section className="section quests-section" id="projetos" data-section aria-labelledby="projects-title">
          <SectionHeading eyebrow="QUEST LOG // MY PROJECTS" title="MISSÕES" note="PROJETOS E EXPERIMENTOS" />
          <div className="section-intro"><p>Projetos que transformam ideias em experiências digitais. Selecione uma missão para ver os detalhes.</p><span className="quest-count">{String(projects.length).padStart(2, '0')} MISSÕES</span></div>
          <div className="project-grid">
            {projects.map((project, index) => <button key={project.id} className="project-card" onClick={() => { playUiSound(); setSelectedProject(project) }}>
              <div className={`project-art art-${index + 1}`} aria-hidden="true"><span className="art-sigil">{index === 0 ? 'M' : index === 1 ? 'F' : index === 2 ? 'L' : 'A'}</span><span className="art-grid"/><span className="art-index">QUEST {String(index + 1).padStart(2, '0')}</span><span className="art-open"><ArrowUpRight size={18}/></span></div>
              <div className="project-copy"><div className="project-meta"><span>{project.category}</span><span className="quest-status">{project.status}</span></div><h3>{project.name}</h3><p>{project.summary}</p><div className="project-foot"><span>ABRIR MISSÃO</span><ChevronRight size={15}/></div></div>
            </button>)}
          </div>
        </section>

        <section className="section inventory-section" id="inventario" data-section aria-labelledby="inventory-title">
          <SectionHeading eyebrow="INVENTORY // DEVELOPER SKILLS" title="INVENTÁRIO" note="FERRAMENTAS DE JORNADA" />
          <div className="section-intro"><p>Conhecimentos que estou usando e desenvolvendo ao longo da minha formação.</p><span className="inventory-count"><BriefcaseBusiness size={15}/> {skills.length} ITENS</span></div>
          <div className="skill-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.name}>
            <div className={`skill-icon skill-icon-${index % 4}`} aria-hidden="true"><SkillSymbol skill={skill} index={index}/></div>
            <div className="skill-copy"><span className="skill-category">{skill.category}</span><h3>{skill.name}</h3><p>{skill.description}</p></div>
            {skill.familiarity && <span className="learning-chip"><span className="status-dot"/>{skill.familiarity}</span>}
          </article>)}</div>
          <div className="inventory-footnote"><span>✦</span> O inventário evolui junto com cada projeto e novo aprendizado.</div>
        </section>

        <section className="section achievements-section" id="conquistas" data-section aria-labelledby="achievements-title">
          <SectionHeading eyebrow="ACHIEVEMENTS // MY JOURNEY" title="CONQUISTAS" note="PROGRESSO DE JORNADA" />
          <div className="achievement-track">{achievements.map((item, index) => <article className="achievement-card" key={item.title}>
            <div className="achievement-icon">{item.kind === 'education' ? <GraduationCap/> : <Check/>}</div>
            <div className="achievement-copy"><span className="achievement-label">{item.kind === 'education' ? 'FORMAÇÃO' : 'PROJETO'}</span><h3>{item.title}</h3><p>{item.description}</p></div>
            <span className="achievement-number">0{index + 1}</span>
          </article>)}<article className="achievement-card locked-card"><div className="achievement-icon"><Award/></div><div className="achievement-copy"><span className="achievement-label">PRÓXIMA CONQUISTA</span><h3>Continua a jornada</h3><p>Novas etapas serão adicionadas conforme a trajetória evoluir.</p></div><span className="lock-mark">···</span></article></div>
        </section>

        <section className="section about-section" id="sobre" data-section aria-labelledby="about-title">
          <div className="about-panel panel"><div className="about-symbol" aria-hidden="true"><span>FJ</span><i/></div><div className="about-copy"><SectionHeading eyebrow="ABOUT PLAYER // BACKGROUND" title="SOBRE MIM" note="MINHA JORNADA" compact headingId="about-title"/><p>{profile.about}</p><div className="about-tags"><span><GraduationCap size={14}/> {profile.degree}</span><span><MapPin size={14}/> {profile.location}</span></div></div></div>
        </section>

        <section className="section contact-section" id="contato" data-section aria-labelledby="contact-title">
          <SectionHeading eyebrow="CONNECT // LET'S TALK" title="VAMOS CONVERSAR" note="CONTATO" headingId="contact-title" />
          <p className="contact-lead">Estou aberto a oportunidades de estágio, projetos e conexões na área de tecnologia.</p>
          <div className="contact-grid">
            <ContactCard href={contacts.github} label="GitHub" detail="Projetos e código" icon={<Github/>}/>
            <ContactCard href={contacts.linkedin} label="LinkedIn" detail="Perfil profissional" icon={<BriefcaseBusiness/>}/>
            <ContactCard href={contacts.instagram} label="Instagram" detail="Conexões e cotidiano" icon={<span className="instagram-glyph">◎</span>}/>
            <ContactCard href={contacts.email ? `mailto:${contacts.email}` : null} label="E-mail" detail="Vamos trocar uma ideia" icon={<Mail/>}/>
          </div>
          <a href="#inicio" className="back-top" onClick={(e) => {e.preventDefault(); navigate('inicio')}}><ArrowUpRight size={15}/> VOLTAR AO TOPO</a>
        </section>
      </main>

      <footer className="footer"><a className="footer-brand" href="#inicio" onClick={(e) => {e.preventDefault(); navigate('inicio')}}>Fabinho8_ <span>PORTFÓLIO</span></a><p>Feito com curiosidade, código e alguns pixels.</p><span className="footer-version">PORTFÓLIO <i/></span></footer>

      <dialog className="project-dialog" ref={dialogRef} aria-labelledby="project-dialog-title" onClose={() => setSelectedProject(null)} onClick={(event) => { if (event.target === dialogRef.current) setSelectedProject(null) }}>
        {selectedProject && <ProjectDetails project={selectedProject} onBack={() => setSelectedProject(null)} />}
      </dialog>
    </div>
  )
}

function SectionHeading({ eyebrow, title, note, compact = false, headingId }: { eyebrow: string; title: string; note: string; compact?: boolean; headingId?: string }) {
  return <div className={`section-heading ${compact ? 'compact-heading' : ''}`}><div><span className="eyebrow"><i/> {eyebrow}</span><h2 id={headingId}>{title}</h2></div><span className="section-note">{note}</span></div>
}
function PanelTitle({ icon, title, accent }: { icon: ReactNode; title: string; accent?: string }) { return <div className={`panel-title ${accent ?? ''}`}><span>{icon}</span>{title}</div> }
function InfoRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) { return <div className="info-row"><span className="info-icon">{icon}</span><span className="info-label">{label}</span><span className="info-value">{value}</span></div> }
function SkillSymbol({ skill, index }: { skill: (typeof skills)[number]; index: number }) {
  if (skill.icon === 'palette') return <Palette size={18}/>
  if (skill.icon === 'math') return <Sigma size={20}/>
  if (skill.icon === 'engineering') return <Workflow size={18}/>
  return <span>{['Py', 'J', '</>', '◈', '⌘', 'λ', '⌘', '▤'][index]}</span>
}
function ContactCard({ href, label, detail, icon }: { href: string | null; label: string; detail: string; icon: ReactNode }) {
  const content = <><span className="contact-icon">{icon}</span><span className="contact-copy"><b>{label}</b><small>{href ? detail : 'Link será adicionado'}</small></span>{href ? <ExternalLink className="contact-arrow" size={15}/> : <span className="contact-pending">EM BREVE</span>}</>
  return href ? <a className="contact-card" href={href} target="_blank" rel="noreferrer">{content}</a> : <div className="contact-card contact-disabled" aria-disabled="true">{content}</div>
}
function ProjectDetails({ project, onBack }: { project: Project; onBack: () => void }) {
  return <div className="project-details">
    <div className="details-top"><button className="back-button" onClick={onBack}><ArrowLeft size={16}/> VOLTAR AO QUEST LOG</button><span className="quest-status">{project.status}</span></div>
    <div className="details-hero"><span className="eyebrow"><i/> QUEST LOG // {project.category}</span><h2 id="project-dialog-title">{project.name}</h2><p>{project.summary}</p></div>
    <div className="details-grid">
      <DetailBlock title="OVERVIEW"><p>{project.description}</p></DetailBlock>
      <DetailBlock title="OBJECTIVES"><p>{project.objective ?? 'Objetivo em atualização.'}</p></DetailBlock>
      <DetailBlock title="FEATURES"><ul>{(project.features?.length ? project.features : ['Detalhes em atualização.']).map((feature) => <li key={feature}>{feature}</li>)}</ul></DetailBlock>
      <DetailBlock title="TECHNOLOGIES"><div className="detail-tags">{project.technologies?.length ? project.technologies.map((tech) => <span key={tech}>{tech}</span>) : <p>Informações em atualização.</p>}</div></DetailBlock>
      <DetailBlock title="DEVELOPMENT"><p>{project.role ?? 'Papel e detalhes de desenvolvimento em atualização.'}</p></DetailBlock>
      <DetailBlock title="SOURCE CODE"><LinkOrEmpty href={project.github} label="Ver repositório" /></DetailBlock>
      <DetailBlock title="LIVE DEMO"><LinkOrEmpty href={project.demo} label="Abrir demonstração" /></DetailBlock>
    </div>
  </div>
}
function DetailBlock({ title, children }: { title: string; children: ReactNode }) { return <section className="detail-block"><h3>{title}</h3>{children}</section> }
function LinkOrEmpty({ href, label }: { href?: string; label: string }) { return href ? <a href={href} target="_blank" rel="noreferrer">{label} <ExternalLink size={14}/></a> : <p className="not-provided">Link não informado.</p> }

export default App
