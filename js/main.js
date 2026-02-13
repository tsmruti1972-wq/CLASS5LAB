document.addEventListener('DOMContentLoaded',()=>{
  const yearEls = [document.getElementById('year'), document.getElementById('year-2')];
  yearEls.forEach(el=>{ if(el) el.textContent = new Date().getFullYear(); });

  // Nav toggle for mobile
  const togglePairs = [ ['nav-toggle','main-nav'], ['nav-toggle-2','main-nav-2'] ];
  togglePairs.forEach(([btnId,navId])=>{
    const btn = document.getElementById(btnId);
    const nav = document.getElementById(navId);
    if(!btn||!nav) return;
    btn.addEventListener('click',()=>{ nav.style.display = (nav.style.display==='block')? 'none':'block'; });
  });

  // Simple contact form handler
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const status = document.getElementById('form-status');
      status.textContent = 'Thanks — message queued (demo).';
      status.classList.add('muted');
      form.reset();
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.parentElement;
      item.classList.toggle('open');
    });
  });

  // Freshman checklist: restore saved state and wire up checkboxes
  const checklist = document.querySelectorAll('.checklist-list li');
  try{
    const saved = JSON.parse(localStorage.getItem('smu_checklist')||'{}');
    checklist.forEach(li=>{
      const id = li.dataset.id;
      const cb = li.querySelector('input[type="checkbox"]');
      if(!cb) return;
      if(saved[id]){
        cb.checked = true;
        li.classList.add('completed');
      }
      cb.addEventListener('change', ()=>{
        if(cb.checked){ li.classList.add('completed'); saved[id]=true; } else { li.classList.remove('completed'); delete saved[id]; }
        try{ localStorage.setItem('smu_checklist', JSON.stringify(saved)); }catch(e){}
      });
    });
  }catch(e){/* ignore storage errors */}
});

// Expose chat opener for CTAs
function openChat(){
  const el = document.getElementById('chtl-script');
  if(el){ el.scrollIntoView({behavior:'smooth', block:'end'}); }
  if(window.chtl && typeof window.chtl.open === 'function'){
    try{ window.chtl.open(); }catch(e){}
  }
}

window.openChat = openChat;

// Ensure autoplay for hero video (muted required for autoplay in many browsers)
document.addEventListener('DOMContentLoaded', ()=>{
  const hv = document.querySelector('.hero-video');
  if(hv){
    hv.muted = true;
    // attempt to play; ignore failures
    hv.play && hv.play().catch(()=>{});
  }
});

// Scroll progress bar update
function updateProgressBar(){
  const bar = document.querySelector('.progress-bar');
  if(!bar) return;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / (docHeight || 1)) * 100;
  bar.style.height = Math.min(100, Math.max(0, scrolled)) + '%';
}
window.addEventListener('scroll', updateProgressBar, {passive:true});
window.addEventListener('resize', updateProgressBar);
document.addEventListener('DOMContentLoaded', updateProgressBar);
