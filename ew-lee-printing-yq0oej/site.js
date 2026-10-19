(function(){var d=document,b=d.body,h=d.querySelector('.hdr'),ab=d.querySelector('.actbar');
function sc(){var y=window.scrollY;if(h)h.classList.toggle('solid',y>8);if(ab)ab.classList.toggle('show',y>380)}
sc();window.addEventListener('scroll',sc,{passive:true});
var bg=d.querySelector('.burger'),mm=d.getElementById('mmenu');
function setMenu(o){b.classList.toggle('menu-open',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Close menu':'Open menu');mm.hidden=!o;b.style.overflow=o?'hidden':''}
if(bg)bg.addEventListener('click',function(){setMenu(mm.hidden)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&mm&&!mm.hidden){setMenu(false);bg.focus()}});
d.querySelectorAll('.mmenu a').forEach(function(a){a.addEventListener('click',function(){setMenu(false)})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -6% 0px',threshold:.06});d.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else{d.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
var lb=d.querySelector('.lb');
if(lb&&lb.showModal){var li=lb.querySelector('img'),lp=lb.querySelector('p'),last;
 d.querySelectorAll('.zoom').forEach(function(z){z.addEventListener('click',function(){last=z;li.src=z.dataset.full;li.alt=z.dataset.cap;lp.textContent=z.dataset.cap;lb.showModal()})});
 lb.querySelector('.lbx').addEventListener('click',function(){lb.close()});
 lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
 lb.addEventListener('close',function(){if(last)last.focus()})}
var fm=d.getElementById('quote');
if(fm){var sv=d.getElementById('sv'),p=new URLSearchParams(location.search).get('service');
 if(p&&sv){var hit=false;for(var i=0;i<sv.options.length;i++){if(sv.options[i].text.toLowerCase()===p.toLowerCase()){sv.selectedIndex=i;hit=true;break}}if(!hit){for(var j=0;j<sv.options.length;j++){if(/^Other/.test(sv.options[j].text)){sv.selectedIndex=j}}var ds=d.getElementById('ds');if(ds&&!ds.value)ds.value='I\'m interested in '+p.toLowerCase()+'. '}}
 fm.addEventListener('submit',function(e){e.preventDefault();var ok=true;fm.querySelectorAll('[required]').forEach(function(f){var v=f.checkValidity();f.setAttribute('aria-invalid',!v);if(!v&&ok){ok=false;f.focus()}});
  if(!ok){fm.reportValidity();return}fm.classList.add('sent');var t=fm.querySelector('.thanks');t.setAttribute('tabindex','-1');t.focus();fm.scrollIntoView({behavior:'smooth',block:'center'})})}
var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
