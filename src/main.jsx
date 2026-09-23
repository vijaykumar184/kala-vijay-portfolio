import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Download, Menu, X, Code2, BrainCircuit, BarChart3, Globe2, Cloud, ExternalLink, Send, Sparkles } from 'lucide-react'
import './index.css'

const profile = {
  name: 'Kala Vijay Kumar',
  role: 'AI & Data Science Graduate | Software Engineer | Data Analyst',
  email: 'your.email@example.com',
  phone: '+91 XXXXX XXXXX',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  resume: '/resume.pdf'
}

const skillGroups = [
  { title:'Programming', icon:Code2, items:['Python','Java','JavaScript','SQL'] },
  { title:'AI / Machine Learning', icon:BrainCircuit, items:['Machine Learning','Deep Learning','YOLO','Computer Vision'] },
  { title:'Data Analytics', icon:BarChart3, items:['Tableau','Data Analysis','Data Visualization'] },
  { title:'Web Development', icon:Globe2, items:['HTML','CSS','JavaScript','Django'] },
  { title:'Cloud / Tools', icon:Cloud, items:['AWS','Git','GitHub','MySQL','VS Code'] }
]

const projects = [
  { title:'Vision Assist: Object Detection for the Blind', description:'A deep-learning based accessibility application that uses real-time object detection and audio feedback to help visually impaired users understand their surroundings.', tech:['Python','YOLOv8','OpenCV','Django','PyTorch','COCO Dataset','Text-to-Speech'], features:['Real-time object detection','Audio feedback','Computer vision','Smartphone-friendly interface'] },
  { title:'Your Next Project', description:'Add another practical project here with a concise problem statement, what you built, and the outcome.', tech:['Technology','Technology'], features:['Key feature','Key feature'] },
  { title:'Another Project', description:'Keep this card as a ready-to-edit placeholder for another software, AI/ML, or analytics project.', tech:['Technology','Technology'], features:['Key feature','Key feature'] }
]

const certifications = ['Operating Systems – NPTEL','Python Full Stack – Avishkar Tech Solutions','AWS Cloud Practitioner Virtual Experience – Forage','Python Skill-Up – GeeksforGeeks','Data Analytics / Tableau – SmartBridge']

function useReveal(){
  useEffect(()=>{
    const els=document.querySelectorAll('.reveal')
    if(!('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('visible'));return}
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.12})
    els.forEach(el=>obs.observe(el)); return ()=>obs.disconnect()
  },[])
}

function Nav(){
  const [open,setOpen]=useState(false)
  const links=['About','Skills','Projects','Education','Certifications','Experience','Resume','Contact']
  return <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b14]/75 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
      <a href="#home" className="font-semibold tracking-tight text-white"><span className="gradient-text">KVK</span><span className="ml-2 text-slate-300">Portfolio</span></a>
      <nav className="hidden items-center gap-5 md:flex">{links.map(x=><a key={x} href={'#'+x.toLowerCase()} className="text-sm text-slate-400 transition hover:text-white">{x}</a>)}</nav>
      <button aria-label="Toggle menu" onClick={()=>setOpen(!open)} className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
    </div>
    {open&&<nav className="border-t border-white/5 bg-[#070b14] px-5 pb-5 md:hidden">{links.map(x=><a onClick={()=>setOpen(false)} key={x} href={'#'+x.toLowerCase()} className="block py-2 text-slate-300">{x}</a>)}</nav>}
  </header>
}

function Socials(){return <div className="flex items-center gap-3"><a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="glass rounded-xl p-3 text-slate-300 transition hover:-translate-y-1 hover:text-white"><Github size={19}/></a><a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="glass rounded-xl p-3 text-slate-300 transition hover:-translate-y-1 hover:text-white"><Linkedin size={19}/></a></div>}

function SectionTitle({eyebrow,title,children}){return <div className="reveal mb-10 max-w-2xl"><p className="mb-2 text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">{eyebrow}</p><h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>{children&&<p className="mt-4 leading-7 text-slate-400">{children}</p>}</div>}

function App(){
  useReveal()
  return <div className="min-h-screen overflow-x-hidden bg-[#070b14]">
    <Nav/>
    <main>
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20"><div className="grid-bg absolute inset-0"/><div className="orb left-1/4 top-24 h-72 w-72 bg-indigo-500"/><div className="orb right-10 top-1/3 h-80 w-80 bg-cyan-400" style={{animationDelay:'-3s'}}/>
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.25fr_.75fr]">
          <div className="reveal"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-1.5 text-xs text-cyan-200"><Sparkles size={14}/> Open to entry-level opportunities</div><h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">Kala Vijay Kumar</h1><p className="gradient-text mt-5 max-w-3xl text-xl font-semibold leading-8 sm:text-2xl">{profile.role}</p><p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">Passionate about building intelligent solutions, analyzing data, and developing practical software applications using modern technologies.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">View My Projects <ArrowUpRight size={17}/></a><a href={profile.resume} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><Download size={17}/> Download Resume</a></div><div className="mt-7"><Socials/></div></div>
          <div className="reveal flex justify-center lg:justify-end"><div className="glass relative aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] p-4 shadow-2xl shadow-indigo-950/30"><div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-500/25 bg-slate-950/50"><div className="mb-5 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-indigo-400/20 to-cyan-300/10 ring-1 ring-white/10"><BrainCircuit size={56} className="text-cyan-200"/></div><p className="font-semibold text-white">Profile Photo</p><p className="mt-2 max-w-[220px] text-center text-sm text-slate-500">Replace this placeholder with your professional photo.</p></div></div></div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-24"><SectionTitle eyebrow="01 — About" title="A practical, curious technology graduate.">I’m a 2026 B.Tech graduate in Artificial Intelligence and Data Science with an interest in software development, artificial intelligence, machine learning, and data analytics. I enjoy turning ideas into practical applications and learning the technologies needed to solve real problems.</SectionTitle></section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-12"><SectionTitle eyebrow="02 — Skills" title="Tools I use to build and analyze."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skillGroups.map(({title,icon:Icon,items})=><div key={title} className="reveal glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"><div className="mb-5 flex items-center gap-3"><div className="rounded-xl bg-white/5 p-2.5 text-cyan-200"><Icon size={20}/></div><h3 className="font-semibold text-white">{title}</h3></div><div className="flex flex-wrap gap-2">{items.map(i=><span key={i} className="rounded-lg border border-white/8 bg-white/[.035] px-3 py-1.5 text-sm text-slate-300">{i}</span>)}</div></div>)}</div></section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-24"><SectionTitle eyebrow="03 — Projects" title="Selected work and experiments."/><div className="grid gap-5 lg:grid-cols-3">{projects.map((p,i)=><article key={p.title} className="reveal glass flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"><div className="mb-6 flex items-start justify-between"><span className="rounded-lg bg-indigo-400/10 px-2.5 py-1 text-xs font-semibold text-indigo-200">0{i+1}</span><ExternalLink size={18} className="text-slate-600"/></div><h3 className="text-xl font-semibold text-white">{p.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{p.description}</p><ul className="mt-5 space-y-2 text-sm text-slate-300">{p.features.map(f=><li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"/>{f}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-400">{t}</span>)}</div><div className="mt-auto flex gap-2 pt-7"><a href="#" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/5">GitHub <Github size={14}/></a><a href="#" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-white/5">Live Demo <ExternalLink size={14}/></a><a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-950">View Project <ArrowUpRight size={14}/></a></div></article>)}</div></section>

      <section id="education" className="mx-auto max-w-6xl px-5 py-12"><SectionTitle eyebrow="04 — Education" title="Academic foundation."/><div className="reveal relative ml-3 border-l border-white/10 pl-8"><div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-cyan-300 ring-8 ring-cyan-300/5"/><p className="text-sm font-medium text-cyan-300">2026</p><h3 className="mt-2 text-xl font-semibold text-white">B.Tech — Artificial Intelligence and Data Science</h3><p className="mt-2 text-slate-400">Annamacharya Institute of Technology and Science, Tirupati</p></div></section>

      <section id="certifications" className="mx-auto max-w-6xl px-5 py-24"><SectionTitle eyebrow="05 — Certifications" title="Courses and learning milestones."/><div className="grid gap-4 sm:grid-cols-2">{certifications.map((c,i)=><div key={c} className="reveal glass flex items-center gap-4 rounded-2xl p-5"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-cyan-200">{String(i+1).padStart(2,'0')}</div><p className="text-sm font-medium text-slate-200">{c}</p></div>)}</div></section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-12"><div className="reveal glass overflow-hidden rounded-3xl p-8 sm:p-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">06 — Experience</p><h2 className="mt-2 text-3xl font-bold text-white">Open to Opportunities</h2><p className="mt-3 max-w-2xl leading-7 text-slate-400">I’m currently looking for entry-level opportunities where I can contribute to software development, AI/ML, data analytics, and related technology teams while continuing to grow.</p></div><a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950">Let’s Connect <ArrowUpRight size={17}/></a></div></div></section>

      <section id="resume" className="mx-auto max-w-6xl px-5 py-24"><div className="reveal glass flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:p-10 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">07 — Resume</p><h2 className="mt-2 text-3xl font-bold text-white">Want the full picture?</h2><p className="mt-3 text-slate-400">View or download my resume for a concise overview of my skills and education.</p></div><div className="flex flex-wrap gap-3"><a href={profile.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">View Resume</a><a href={profile.resume} download className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950"><Download size={17}/> Download Resume</a></div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-12"><SectionTitle eyebrow="08 — Contact" title="Let’s build something useful."/><div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal glass rounded-2xl p-6"><div className="space-y-5"><a href={'mailto:'+profile.email} className="flex gap-4"><Mail className="text-cyan-200" size={20}/><span><span className="block text-xs text-slate-500">Email</span><span className="text-sm text-slate-200">{profile.email}</span></span></a><a href={'tel:'+profile.phone} className="flex gap-4"><Phone className="text-cyan-200" size={20}/><span><span className="block text-xs text-slate-500">Phone</span><span className="text-sm text-slate-200">{profile.phone}</span></span></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex gap-4"><Linkedin className="text-cyan-200" size={20}/><span><span className="block text-xs text-slate-500">LinkedIn</span><span className="text-sm text-slate-200">Replace with your profile</span></span></a><a href={profile.github} target="_blank" rel="noreferrer" className="flex gap-4"><Github className="text-cyan-200" size={20}/><span><span className="block text-xs text-slate-500">GitHub</span><span className="text-sm text-slate-200">Replace with your profile</span></span></a><div className="flex gap-4"><MapPin className="text-cyan-200" size={20}/><span><span className="block text-xs text-slate-500">Location</span><span className="text-sm text-slate-200">Bengaluru, Karnataka, India</span></span></div></div></div><form onSubmit={e=>e.preventDefault()} className="reveal glass rounded-2xl p-6"><div className="grid gap-4 sm:grid-cols-2"><label className="text-sm text-slate-400">Name<input required className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-white outline-none focus:border-cyan-300/40" placeholder="Your name"/></label><label className="text-sm text-slate-400">Email<input required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-white outline-none focus:border-cyan-300/40" placeholder="you@example.com"/></label></div><label className="mt-4 block text-sm text-slate-400">Message<textarea required rows="6" className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[.035] px-4 py-3 text-white outline-none focus:border-cyan-300/40" placeholder="Tell me a little about your opportunity or idea..."/></label><button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5">Send Message <Send size={16}/></button><p className="mt-3 text-xs text-slate-600">Connect this form to Formspree, EmailJS, or your own backend to enable real submissions.</p></form></div></section>
    </main>
    <footer className="mt-24 border-t border-white/5"><div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-slate-500">© 2026 Kala Vijay Kumar. All rights reserved.</p><Socials/></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
