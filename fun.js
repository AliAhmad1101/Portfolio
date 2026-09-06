
const CONFIG = {
  name: "ALI AHMAD KHAN",
  role: "Developer / Designer / Author",
  about: "I'm Ali Ahmad Khan ... an aspiring software developer, UI/UX designer and author based in India. I transform ideas into elegant, functional interfaces that feel alive. With a background spanning game development, branding, and interactive media, I bring a multi-disciplinary lens to every project. Currently leading FunLogic Studios ... an indie game development team pushing the boundaries of 3D interactive storytelling.",
  social: [
    {label:"IN", name:"LinkedIn", url:"https://www.linkedin.com/in/ali-ahmad-khan-005415340", icon:"icons/linkedin.svg"},
    {label:"GH", name:"GitHub", url:"https://github.com/AliAhmad1101", icon:"icons/github.svg"},
    {label:"IG", name:"Instagram", url:"https://instagram.com/the_history_buff._", icon:"icons/instagram.svg"}
  ],
  skills: [
    {name:"Software Development", desc:"Making software solutions and scalable applications with readable code."},
    {name:"UI / UX Design", desc:"Designing interfaces that balance beauty with usability ... from wireframes to high-fidelity prototypes."},
    {name:"Visual Design", desc:"Typography, color theory, layout systems ... crafting visual languages that communicate and captivate."},
    {name:"Game Design & UI", desc:"Building immersive game interfaces and HUD systems using Godot 4 and industry-standard pipelines."},
    {name:"Python", desc:"Making practical projects and solving problems through efficient code."},
    {name:"Brand Identity", desc:"Developing cohesive brand systems ... logos, style guides, and visual strategies that stand out."}
  ],
  stats: [
    {n:5, label:"PROJECTS SHIPPED"},
    {n:100, label:"COMMITS"},
    {n:100, label:"DSA SOLVED"},
    {n:10000, label:"LINES OF CODE"},
    {n:6, label:"REPOSITORIES"}
  ],
  leetcode: "https://leetcode.com/u/AliAhmad101",
  hackerrank: "https://www.hackerrank.com/profile/ali_ahmad_khan21",
  tech: [
    {abbr:"", name:"HTML5", desc:"Semantic, accessible markup ... the foundation of every interface I build.", icon:"icons/html.svg"},
    {abbr:"CSS", name:"CSS3", desc:"Grid, flexbox, and animation used to build Swiss-precision layouts.", icon:"icons/css.svg"},
    {abbr:"JS", name:"JavaScript", desc:"Vanilla JS for interactions, canvas work, and DOM-driven motion.", icon:"icons/js.svg"},
    {abbr:"JAVA", name:"Java", desc:"OOP fundamentals, DSA practice, and backend logic.", icon:"icons/java.svg"},
    {abbr:"PY", name:"Python", desc:"Scripting, automation, and Flask backends.", icon:"icons/python.svg"},
    {abbr:"ELEC", name:"Electron.js", desc:"Cross-platform desktop apps from web technologies.", icon:"icons/electron.svg"},
    {abbr:"FLSK", name:"Flask", desc:"Lightweight Python APIs and server-rendered apps.", icon:"icons/flask.svg"},
    {abbr:"RCT", name:"React", desc:"Component-driven interfaces with hooks and state management.", icon:"icons/react.svg"},
    {abbr:"FIG", name:"Figma", desc:"Design systems, prototyping, and hand-off to code.", icon:"icons/figma.svg"},
    {abbr:"GIT", name:"Git", desc:"Branching strategy, rebasing, and clean commit history.", icon:"icons/git.svg"},
    {abbr:"GH", name:"GitHub", desc:"Open-source collaboration, Actions, and project hosting.", icon:"icons/github.svg"}
  ],
  certs: ["certs/cf1.png","certs/cf2.png","certs/cf3.png","certs/cf4.png","certs/cf5.png","certs/cf6.png"],
  projects: [
    {tag:"CSS FRAMEWORK", title:"Griffin CSS", desc:"A modern CSS framework crafted for building clean, responsive, and stylish web interfaces with ease.", img:"gfn.png", url:"https://griffin-css.netlify.app"},
    {tag:"DESIGN TOOL", title:"Compose", desc:"A focused desktop design toolkit for creating color palettes, typography systems, wireframes, and user flows.", img:"cp.png", url:"https://composedesktop.netlify.app"},
    {tag:"DESKTOP APP", title:"Code Flux", desc:"A focused coding environment designed for fast development, scripting, and creative programming workflows.", img:"cf.png", url:"https://studio-flux.netlify.app"}
  ],
  caseStudies: [
    {title:"Code Flux", tag:"UX RESEARCH", poster:"codeflux_casestudycover.png", pdf:"case-studies/codeflux_casestudy.pdf"},
    {title:"Design Flux", tag:"PRODUCT DESIGN", poster:"designflux_casestudycover.jpeg", pdf:"case-studies/designflux_casestudy.pdf"},
    {title:"Griffin CSS", tag:"FRAMEWORK DESIGN", poster:"griffincss_casestudycover.png", pdf:"case-studies/griffincss_casestudy.pdf"}
  ],
  formspree: "https://formspree.io/f/xeenwnne"
};


document.getElementById('logoName').innerHTML = CONFIG.name + '<span>.</span>';
document.getElementById('roleTag').textContent = CONFIG.role;
document.getElementById('aboutText').textContent = CONFIG.about;

function socBadges(){
  return CONFIG.social.map(s=>`<a class="soc-badge" href="${s.url}" target="_blank" rel="noopener" title="${s.name}">${
    s.icon ? `<img src="${s.icon}" alt="${s.name}" onerror="this.parentElement.textContent='${s.label}'">` : s.label
  }</a>`).join('');
}
document.getElementById('socRow').innerHTML = socBadges();
document.getElementById('socRow2').innerHTML = socBadges();

document.getElementById('skillList').innerHTML = CONFIG.skills.map((s,i)=>`
  <div class="sk-item"><h3>${s.name}</h3><p>${s.desc}</p></div>
`).join('');

document.getElementById('statGrid').innerHTML = CONFIG.stats.map(s=>`
  <div class="stat"><span class="big-num" data-count="${s.n}">0</span><span class="label">${s.label}</span></div>
`).join('');

document.getElementById('codeBtns').innerHTML = `
  <a class="btn" href="${CONFIG.leetcode}" target="_blank" rel="noopener">LEETCODE</a>
  <a class="btn" href="${CONFIG.hackerrank}" target="_blank" rel="noopener">HACKERRANK</a>
`;


const bubbleField = document.getElementById('bubbleField');
const bubbleAgents = [];
CONFIG.tech.forEach((t,i)=>{
  const b = document.createElement('div');
  b.className='bubble';
  b.innerHTML = t.icon
    ? `<img src="${t.icon}" alt="${t.name}" onerror="this.parentElement.textContent='${t.abbr}'">`
    : t.abbr;
  b.addEventListener('click', ()=>openModal(t.name, t.desc));
  bubbleField.appendChild(b);
  bubbleAgents.push({
    el:b,
    x: Math.random()*80+5, y: Math.random()*80+5, // percent
    vx: (Math.random()-0.5)*0.05, vy: (Math.random()-0.5)*0.05
  });
});
function stepBubbles(){
  const w = bubbleField.clientWidth, h = bubbleField.clientHeight;
  bubbleAgents.forEach(a=>{
    a.x += a.vx; a.y += a.vy;
    if(a.x < 0 || a.x > 92) a.vx *= -1;
    if(a.y < 0 || a.y > 84) a.vy *= -1;
    a.x = Math.max(0, Math.min(92, a.x));
    a.y = Math.max(0, Math.min(84, a.y));
    a.el.style.left = a.x + '%';
    a.el.style.top = a.y + '%';
  });
  requestAnimationFrame(stepBubbles);
}
if(bubbleField) stepBubbles();

document.getElementById('carouselTrack').innerHTML = CONFIG.certs.map(src=>`
  <div class="cert-item"><img src="${src}" alt="Certificate" onerror="this.parentElement.style.opacity=.25"></div>
`).join('');

document.getElementById('csGrid').innerHTML = CONFIG.caseStudies.map(c=>`
  <div class="cs-card" onclick="window.open('${c.pdf}','_blank')">
    <div class="cs-img"><img src="${c.poster}" alt="${c.title}" onerror="this.style.opacity=.2"></div>
    <h4>${c.title}</h4><span>${c.tag}</span>
  </div>
`).join('');


let pct = 0;
const bar = document.getElementById('loadBar');
const pctEl = document.getElementById('loadPct');
const loadTimer = setInterval(()=>{
  pct += Math.random()*18;
  if(pct >= 100){ pct = 100; clearInterval(loadTimer); }
  bar.style.width = pct + '%';
  pctEl.textContent = Math.floor(pct) + '%';
  if(pct === 100){
    setTimeout(()=> document.body.classList.add('loaded'), 350);
  }
}, 180);


const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [], mouse = {x:-9999, y:-9999};

function resizeCanvas(){
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
  buildParticles();
}
function buildParticles(){
  particles = [];
  const off = document.createElement('canvas');
  off.width = W; off.height = H;
  const octx = off.getContext('2d');
  octx.fillStyle = '#000';
  octx.textAlign = 'center';
  octx.textBaseline = 'middle';
  const family = getComputedStyle(document.body).fontFamily;

  const probe = 100;
  octx.font = `900 ${probe}px ${family}`;
  const measured = octx.measureText('BE CREATIVE').width;
  let fontSize = (W * 0.9 / measured) * probe;
  fontSize = Math.min(fontSize, H * 0.6);
  octx.font = `900 ${fontSize}px ${family}`;
  octx.fillText('BE CREATIVE', W/2, H/2 + H*0.07);
  const data = octx.getImageData(0,0,W,H).data;
  const gap = 4;
  for(let y=0; y<H; y+=gap){
    for(let x=0; x<W; x+=gap){
      const a = data[(y*W+x)*4+3];
      if(a > 120){
        particles.push({ox:x, oy:y, x:x, y:y, vx:0, vy:0});
      }
    }
  }
}
window.addEventListener('resize', resizeCanvas);

// pac-dot wanderer
const pac = {x:80, y:80, dx:1.4, dy:1.0, r:9, mouth:0, dir:1};
let dots = [];
function seedDots(){
  dots = [];
  for(let i=0;i<10;i++){
    dots.push({x: Math.random()*W, y: Math.random()*H});
  }
}
window.addEventListener('resize', seedDots);

canvas.addEventListener('mousemove', e=>{
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left;
  mouse.y = e.clientY - r.top;
});
canvas.addEventListener('mouseleave', ()=>{ mouse.x=-9999; mouse.y=-9999; });

function drawPac(){
  ctx.save();
  ctx.translate(pac.x, pac.y);
  const angle = Math.atan2(pac.dy, pac.dx);
  ctx.rotate(angle);
  pac.mouth += 0.09 * pac.dir;
  if(pac.mouth > 0.5 || pac.mouth < 0.03) pac.dir *= -1;
  ctx.fillStyle = '#0B0B0B';
  ctx.beginPath();
  ctx.arc(0,0,pac.r, pac.mouth, Math.PI*2 - pac.mouth);
  ctx.lineTo(0,0);
  ctx.fill();
  ctx.restore();
}
function stepPac(){
  pac.x += pac.dx; pac.y += pac.dy;
  if(pac.x < pac.r || pac.x > W-pac.r) pac.dx *= -1;
  if(pac.y < pac.r || pac.y > H-pac.r) pac.dy *= -1;
  if(Math.random() < 0.006){ pac.dx = (Math.random()-0.5)*3; pac.dy = (Math.random()-0.5)*3; }
  dots.forEach((d,i)=>{
    const dist = Math.hypot(d.x-pac.x, d.y-pac.y);
    if(dist < pac.r+4){ dots[i] = {x: Math.random()*W, y: Math.random()*H}; }
  });
}

function animate(){
  ctx.clearRect(0,0,W,H);
  ctx.fillStyle = '#0B0B0B';
  const radius = 70, radiusSq = radius*radius;
  for(const p of particles){
    const dx = p.x - mouse.x, dy = p.y - mouse.y;
    const distSq = dx*dx + dy*dy;
    if(distSq < radiusSq){
      const dist = Math.sqrt(distSq) || 1;
      const force = (radius - dist)/radius;
      const ang = Math.atan2(dy,dx) + (Math.random()-0.5)*1.2;
      p.vx += Math.cos(ang) * force * 2.4;
      p.vy += Math.sin(ang) * force * 2.4;
    }
    p.vx += (p.ox - p.x) * 0.02;
    p.vy += (p.oy - p.y) * 0.02;
    p.vx *= 0.82; p.vy *= 0.82;
    p.x += p.vx; p.y += p.vy;
    ctx.fillRect(p.x, p.y, 2, 2);
  }
  ctx.fillStyle = 'rgba(11,11,11,.55)';
  dots.forEach(d=>{ ctx.beginPath(); ctx.arc(d.x,d.y,2.6,0,Math.PI*2); ctx.fill(); });
  stepPac();
  drawPac();
  requestAnimationFrame(animate);
}
resizeCanvas();
seedDots();
animate();


const tilt = document.getElementById('tiltCard');
tilt.addEventListener('mousemove', e=>{
  const r = tilt.getBoundingClientRect();
  const px = (e.clientX - r.left)/r.width;
  const py = (e.clientY - r.top)/r.height;
  const rx = (py-0.5) * -16;
  const ry = (px-0.5) * 16;
  tilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  tilt.style.setProperty('--gx', (px*100)+'%');
  tilt.style.setProperty('--gy', (py*100)+'%');
});
tilt.addEventListener('mouseleave', ()=>{ tilt.style.transform = 'rotateX(0) rotateY(0) scale(1)'; });


const modal = document.getElementById('modal');
function openModal(title, desc){
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDesc').textContent = desc;
  modal.classList.add('open');
}
document.getElementById('modalClose').addEventListener('click', ()=> modal.classList.remove('open'));
modal.addEventListener('click', e=>{ if(e.target === modal) modal.classList.remove('open'); });


const statEls = document.querySelectorAll('[data-count]');
const statIO = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    if(en.isIntersecting){
      const el = en.target;
      const target = +el.dataset.count;
      let cur = 0;
      const step = Math.max(1, target/60);
      const tick = ()=>{
        cur += step;
        if(cur >= target){ el.textContent = target.toLocaleString(); return; }
        el.textContent = Math.floor(cur).toLocaleString();
        requestAnimationFrame(tick);
      };
      tick();
    } else {
      en.target.textContent = '0';
    }
  });
}, {threshold:0.4});
statEls.forEach(el=>statIO.observe(el));


const sectionIO = new IntersectionObserver(entries=>{
  entries.forEach(en=>{
    en.target.classList.toggle('active', en.isIntersecting);
  });
}, {threshold:0.55});
document.querySelectorAll('section').forEach(s=>sectionIO.observe(s));


const stage = document.getElementById('carouselStage');
const track = document.getElementById('carouselTrack');
const certItems = () => track.querySelectorAll('.cert-item');
let rot = 0, dragging = false, lastX = 0, velocity = 0;

function currentRadius(){
  const n = certItems().length || 1;
  const base = Math.max(220, n*55);
  // never let the ring's depth exceed the stage itself — keeps it contained on narrow screens
  return Math.min(base, stage.offsetWidth*0.85, stage.offsetHeight*1.3);
}
function layoutCarousel(){
  const items = certItems();
  const n = items.length;
  const w = Math.min(240, Math.max(150, stage.offsetWidth*0.32));
  const h = w*0.7;
  const radius = currentRadius();
  items.forEach((el,i)=>{
    el.style.width = w+'px'; el.style.height = h+'px';
    const angle = (360/n) * i;
    el.style.transform = `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${radius}px)`;
  });
  track.style.transform = `translateZ(-${radius}px) rotateY(${rot}deg)`;
}
layoutCarousel();

stage.addEventListener('pointerdown', e=>{ dragging = true; lastX = e.clientX; stage.setPointerCapture(e.pointerId); });
stage.addEventListener('pointermove', e=>{
  if(!dragging) return;
  const dx = e.clientX - lastX;
  lastX = e.clientX;
  velocity = dx * 0.4;
  rot += velocity;
});
stage.addEventListener('pointerup', ()=> dragging = false);
stage.addEventListener('pointerleave', ()=> dragging = false);
stage.addEventListener('wheel', e=>{ rot += e.deltaY * 0.05; }, {passive:true});

function carouselLoop(){
  if(!dragging){
    rot += 0.05;
    velocity *= 0.9;
    rot += velocity;
  }
  const radius = currentRadius();
  track.style.transform = `translateZ(-${radius}px) rotateY(${rot}deg)`;
  requestAnimationFrame(carouselLoop);
}
carouselLoop();
window.addEventListener('resize', layoutCarousel);


const projStage = document.getElementById('projStage');
const projDots = document.getElementById('projDots');
let curProj = 0;
let projAnimating = false;

projStage.innerHTML = CONFIG.projects.map((p,i)=>`
  <div class="p-card" data-i="${i}">
    <div class="p-card-inner">
      <div class="p-img"><img src="${p.img}" alt="${p.title}" onerror="this.style.opacity=0"></div>
      <div>
        <span class="p-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <a class="btn accent" href="${p.url}" target="_blank" rel="noopener">VISIT PROJECT →</a>
      </div>
    </div>
  </div>
`).join('');
projDots.innerHTML = CONFIG.projects.map((_,i)=>`<i data-i="${i}"></i>`).join('');

const projCards = () => projStage.querySelectorAll('.p-card');
const projDotEls = () => projDots.querySelectorAll('i');

const isMobileProj = () => window.matchMedia('(max-width:860px)').matches;

function renderProj(){
  if(isMobileProj()){
    // normal document flow on small screens — no transforms, no scroll-jacking
    projCards().forEach(el=>{ el.style.transform=''; el.style.zIndex=''; el.style.filter=''; });
    return;
  }
  projCards().forEach((el,i)=>{
    let ty, sc;
    if(i < curProj){ ty = -3*(curProj-i); sc = 1 - 0.04*(curProj-i); }
    else if(i === curProj){ ty = 0; sc = 1; }
    else { ty = 100; sc = 1; }
    el.style.transform = `translateY(${ty}%) scale(${sc})`;
  
    el.style.zIndex = i + 1;
    el.style.filter = i < curProj ? `brightness(${1-0.15*(curProj-i)})` : 'none';
  });
  projDotEls().forEach((d,i)=> d.classList.toggle('on', i===curProj));
}
renderProj();
window.addEventListener('resize', renderProj);

projDotEls().forEach(d=>{
  d.addEventListener('click', ()=>{ curProj = +d.dataset.i; renderProj(); });
});

document.getElementById('projects').addEventListener('wheel', e=>{
  if(isMobileProj()) return; // let the page scroll normally on mobile
  const atStart = curProj === 0;
  const atEnd = curProj === CONFIG.projects.length - 1;
  if(e.deltaY > 4){
    if(atEnd) return; 
    e.preventDefault();
    if(projAnimating) return;
    curProj++; renderProj();
    projAnimating = true; setTimeout(()=> projAnimating=false, 650);
  } else if(e.deltaY < -4){
    if(atStart) return; 
    e.preventDefault();
    if(projAnimating) return;
    curProj--; renderProj();
    projAnimating = true; setTimeout(()=> projAnimating=false, 650);
  }
}, {passive:false});


const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', async e=>{
  e.preventDefault();
  if(CONFIG.formspree.includes('YOUR_FORM_ID')){
    formMsg.style.color = '#c0392b';
    formMsg.textContent = 'Add your Formspree endpoint in CONFIG.formspree to activate this form.';
    return;
  }
  formMsg.style.color = 'inherit';
  formMsg.textContent = 'Sending…';
  try{
    const res = await fetch(CONFIG.formspree, {
      method:'POST',
      headers:{'Accept':'application/json'},
      body: new FormData(form)
    });
    if(res.ok){
      formMsg.style.color = '#1a7a3c';
      formMsg.textContent = 'Message sent ... thank you.';
      form.reset();
    } else {
      formMsg.style.color = '#c0392b';
      formMsg.textContent = 'Something went wrong. Please try again.';
    }
  }catch(err){
    formMsg.style.color = '#c0392b';
    formMsg.textContent = 'Network error. Please try again.';
  }
});
