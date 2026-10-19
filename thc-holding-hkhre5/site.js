(function(){var d=document,b=d.body,h=d.querySelector('.hdr'),cb=d.querySelector('.callbar');
function sc(){var y=window.scrollY;if(h)h.classList.toggle('solid',y>40||b.classList.contains('inner-solid'));if(cb)cb.classList.toggle('show',y>420)}
sc();window.addEventListener('scroll',sc,{passive:true});
var bg=d.querySelector('.burger');if(bg)bg.addEventListener('click',function(){var o=b.classList.toggle('menu-open');bg.setAttribute('aria-expanded',o)});
d.querySelectorAll('.mmenu a').forEach(function(a){a.addEventListener('click',function(){b.classList.remove('menu-open')})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.08});d.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else{d.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}
d.querySelectorAll('.filters button').forEach(function(btn){btn.addEventListener('click',function(){d.querySelectorAll('.filters button').forEach(function(x){x.classList.remove('on')});btn.classList.add('on');var f=btn.dataset.f;d.querySelectorAll('.prow').forEach(function(r){r.classList.toggle('hide',f!=='all'&&r.dataset.s.indexOf(f)<0)})})});
var fm=d.querySelector('form.enq');if(fm)fm.addEventListener('submit',function(e){e.preventDefault();if(!fm.checkValidity()){fm.reportValidity();return}b.classList.add('sent');fm.scrollIntoView({behavior:'smooth',block:'center'})});
var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
