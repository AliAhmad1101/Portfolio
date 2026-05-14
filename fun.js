// ─── LOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    const l=document.getElementById('loader');
    l.style.transition='opacity 0.6s ease';
    l.style.opacity='0';
    setTimeout(()=>{l.style.display='none'},600);
  },2000);
});

// ─── NAV SCROLL
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>60);
},{ passive:true });

// ─── MOBILE MENU
function openMobileMenu(){
  const m=document.getElementById('mobileMenu');
  m.classList.add('open');
  const links=m.querySelectorAll('a');
  links.forEach((a,i)=>{ a.style.transitionDelay=(i*0.06)+'s' });
}
function closeMobileMenu(){
  document.getElementById('mobileMenu').classList.remove('open');
}

// ─── SKILL BAR ANIMATION
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-bar-fill').forEach(b=>{
        b.style.width=b.dataset.width;
      });
      e.target.querySelectorAll('.reveal').forEach(r=>r.classList.add('visible'));
    }
  });
},{threshold:0.1});

document.querySelectorAll('#skills').forEach(s=>observer.observe(s));

// ─── REVEAL ON SCROLL
const revealObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(r=>revealObs.observe(r));

// ─── CAROUSEL
const track=document.getElementById('carouselTrack');
const slides=track.querySelectorAll('.proj-slide');
const dotsWrap=document.getElementById('carouselDots');
let cur=0;
const total=slides.length;

// Build dots
slides.forEach((_,i)=>{
  const d=document.createElement('div');
  d.className='dot'+(i===0?' active':'');
  d.onclick=()=>goTo(i);
  dotsWrap.appendChild(d);
});

function goTo(n){
  cur=(n+total)%total;
  track.style.transform=`translateX(-${cur*100}%)`;
  dotsWrap.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===cur));
}
document.getElementById('prevBtn').onclick=()=>goTo(cur-1);
document.getElementById('nextBtn').onclick=()=>goTo(cur+1);

// Auto advance
setInterval(()=>goTo(cur+1),5000);

// Touch swipe
let tx=0;
track.addEventListener('touchstart',e=>{ tx=e.touches[0].clientX },{ passive:true });
track.addEventListener('touchend',e=>{
  const diff=tx-e.changedTouches[0].clientX;
  if(Math.abs(diff)>50) goTo(diff>0?cur+1:cur-1);
},{ passive:true });

// ─── CONTACT FORM (Formspree AJAX)
const form=document.getElementById('contactForm');
const msg=document.getElementById('form-msg');
form.addEventListener('submit',async e=>{
  e.preventDefault();
  const btn=form.querySelector('button');
  btn.textContent='Sending...';btn.disabled=true;
  try{
    const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
    if(res.ok){
      msg.textContent='✓ Message sent! I\'ll get back to you soon.';
      msg.style.color='#4ade80';
      form.reset();
    } else {
      msg.textContent='Something went wrong. Try emailing directly.';
      msg.style.color='#f87171';
    }
  } catch{
    msg.textContent='Network error. Please try again.';
    msg.style.color='#f87171';
  }
  msg.style.opacity='1';
  btn.textContent='Send Message →';btn.disabled=false;
  setTimeout(()=>{ msg.style.opacity='0' },5000);
});
        document.addEventListener('contextmenu', function (event) {
            event.preventDefault(); // Prevent default right-click menu
            alert('Designed and Developed by Ali Ahmad Khan ^_^');
        });