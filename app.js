/* ===== متجر رُبوة — منطق المتجر ===== */
const PRODUCTS = [
  {id:'eth', name:'إثيوبيا يرقاتشيف', cat:'single', price:68, old:85, rating:4.9, rev:412, pop:98, icon:'🌿', img:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop', c1:'#e8d9a8', c2:'#c9a45c', tag:'الأكثر مبيعاً', desc:'زهور الياسمين والتوت الأزرق مع حموضة مشرقة وقوام شايي — حمصة فاتحة.', notes:'ياسمين • توت • شاي أخضر'},
  {id:'col', name:'كولومبيا سوبريمو', cat:'single', price:75, old:null, rating:4.8, rev:356, pop:95, icon:'⛰️', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop', c1:'#d9b98a', c2:'#8a5f36', tag:'', desc:'شوكولاتة بالحليب وكراميل مع حلاوة متوازنة — مثالية للفلتر والاسبريسو.', notes:'كراميل • شوكولاتة • مكسرات'},
  {id:'brz', name:'البرازيل سيرادو', cat:'espresso', price:62, old:72, rating:4.7, rev:289, pop:90, icon:'☀️', img:'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop', c1:'#e5b97e', c2:'#9a6330', tag:'خصم', desc:'كريما كثيفة ونكهة البندق والكاكاو — خيار الباريستا الأول للحليب.', notes:'بندق • كاكاو • سكر بني'},
  {id:'ken', name:'كينيا AA', cat:'single', price:82, old:null, rating:4.9, rev:198, pop:88, icon:'🍒', img:'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop', c1:'#e8a09a', c2:'#a83a32', tag:'محصول جديد', desc:'كشمش أسود وجريب فروت بحموضة لامعة — تجربة فاكهية جريئة.', notes:'كشمش • جريب فروت • قصب سكر'},
  {id:'esp1', name:'خلطة رُبوة الذهبية', cat:'espresso', price:69, old:null, rating:4.8, rev:521, pop:99, icon:'🏆', img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop', c1:'#ecd28a', c2:'#a8861b', tag:'الأكثر مبيعاً', desc:'خلطتنا الأشهر: 60% برازيل + 40% إثيوبيا — متوازنة لكل الأذواق.', notes:'عسل • شوكولاتة • فواكه'},
  {id:'esp2', name:'اسبريسو إيطالي غامق', cat:'espresso', price:59, old:null, rating:4.6, rev:234, pop:80, icon:'🌋', img:'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop', c1:'#8a6a4a', c2:'#2B1A12', tag:'', desc:'تحميص غامق بطابع إيطالي كلاسيكي — مرارة منخفضة وكريما غنية.', notes:'دبس • تبغ حلو • خشب الأرز'},
  {id:'ar1', name:'قهوة عربية — خلطة شيوخ', cat:'arabic', price:48, old:60, rating:4.9, rev:643, pop:97, icon:'🍵', img:'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=600&auto=format&fit=crop', c1:'#e3cfa0', c2:'#8a6a35', tag:'خصم', desc:'بن عربي فاخر مع هيل وزعفران — مطحونة طازجة على الطريقة النجدية.', notes:'هيل • زعفران • مسمار'},
  {id:'ar2', name:'دلة الضيافة الفاخرة', cat:'arabic', price:95, old:null, rating:4.8, rev:167, pop:75, icon:'🏺', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop', c1:'#d9c08a', c2:'#6F4A2F', tag:'تغليف هدايا', desc:'علبة هدية فاخرة: قهوة عربية + تمر سكري + دلة مصغرة.', notes:'مناسبة للإهداء والمناسبات'},
  {id:'cold1', name:'كولد برو جاهز — 6 عبوات', cat:'cold', price:54, old:null, rating:4.7, rev:189, pop:82, icon:'🧊', img:'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop', c1:'#a8d0e6', c2:'#3a6a8a', tag:'', desc:'نقع بارد 18 ساعة، مركز ومنعش — 6 عبوات × 250مل بنكهات متنوعة.', notes:'شوكولاتة • كراميل • فانيليا'},
  {id:'cold2', name:'بن التقطير V60 — إثيوبي', cat:'cold', price:72, old:null, rating:4.8, rev:143, pop:78, icon:'💧', img:'https://images.unsplash.com/photo-1522992319-0365e5f11656?q=80&w=600&auto=format&fit=crop', c1:'#c9e0d0', c2:'#5a8a6a', tag:'', desc:'محمصة فاتحة مخصصة للتقطير: حلاوة عالية ووضوح نكهة استثنائي.', notes:'خوخ • ياسمين • عسل'},
  {id:'box', name:'بوكس الاكتشاف 4×250غ', cat:'single', price:189, old:260, rating:5.0, rev:98, pop:93, icon:'📦', img:'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=600&auto=format&fit=crop', c1:'#f0d48a', c2:'#8a5f36', tag:'وفّر 27%', desc:'أربع محاصيل (إثيوبيا+كولومبيا+البرازيل+كينيا) + مطحنة هدية.', notes:'أفضل طريقة لاكتشاف ذوقك'},
  {id:'t1', name:'طاحونة يدوية احترافية', cat:'tools', price:149, old:199, rating:4.7, rev:211, pop:70, icon:'⚙️', img:'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=600&auto=format&fit=crop', c1:'#c9c9c9', c2:'#5a5a5a', tag:'خصم', desc:'تروس سيراميك بـ 40 درجة طحن — من الاسبريسو للفرنش برس.', notes:'ضمان سنتين'},
  {id:'t2', name:'قمع التقطير V60 + فلاتر', cat:'tools', price:65, old:null, rating:4.6, rev:156, pop:65, icon:'☕', img:'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=600&auto=format&fit=crop', c1:'#e8d5c0', c2:'#a07040', tag:'', desc:'طقم تقطير سيراميك مع 100 فلتر ورقي + ملعقة معيارية.', notes:'سيراميك ياباني أصلي'},
  {id:'t3', name:'ميزان قهوة رقمي', cat:'tools', price:89, old:110, rating:4.5, rev:89, pop:60, icon:'⚖️', img:'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600&auto=format&fit=crop', c1:'#d0d8e0', c2:'#5a6a7a', tag:'خصم', desc:'دقة 0.1غ مع مؤقت مدمج — أساس أي وصفة ناجحة.', notes:'شحن USB-C'},
  {id:'ar3', name:'قهوة عربية بالهيل الملكي', cat:'arabic', price:55, old:null, rating:4.7, rev:278, pop:85, icon:'👑', img:'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop', c1:'#e8d9a8', c2:'#7a5c20', tag:'', desc:'خلطة ملكية بهيل غواتيمالي فاخر — رائحة تملأ المجلس.', notes:'هيل فاخر • زعفران إيراني'},
  {id:'cold3', name:'قهوة مثلجة مركزة', cat:'cold', price:42, old:null, rating:4.6, rev:134, pop:72, icon:'🥤', img:'https://images.unsplash.com/photo-1517959105821-eaf259accbcb?q=80&w=600&auto=format&fit=crop', c1:'#b8d8e8', c2:'#2a5a7a', tag:'جديد', desc:'مركز قهوة 1:4 — ملعقتان + ثلج + حليب = لاتيه مثلج مثالي.', notes:'تكفي 12 كوب'},
];
const CAT_NAMES = {single:'مختصة', espresso:'اسبريسو', arabic:'قهوة عربية', cold:'باردة ومقطرة', tools:'أدوات'};

let cart = {};
try { cart = JSON.parse(localStorage.getItem('robua_cart')||'{}'); } catch(e){ cart={}; }
let activeCat = 'all', activeSort = 'pop', activeSearch = '';

const $ = s => document.querySelector(s);
const grid = $('#grid'), resultCount = $('#resultCount');

function save(){ localStorage.setItem('robua_cart', JSON.stringify(cart)); }
function toast(msg){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(()=>t.classList.remove('show'), 2200);
}
function stars(r){ return '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r)); }
function prodPrice(p, size){
  if(size==='500') return Math.round(p.price*1.4);
  if(size==='1000') return Math.round(p.price*1.9);
  return p.price;
}

/* --- عرض المنتجات --- */
function getList(){
  let list = PRODUCTS.filter(p =>
    (activeCat==='all' || p.cat===activeCat) &&
    (!activeSearch || (p.name+p.desc+p.notes).includes(activeSearch))
  );
  if(activeSort==='cheap') list.sort((a,b)=>a.price-b.price);
  else if(activeSort==='exp') list.sort((a,b)=>b.price-a.price);
  else if(activeSort==='rate') list.sort((a,b)=>b.rating-a.rating);
  else list.sort((a,b)=>b.pop-a.pop);
  return list;
}
function render(){
  const list = getList();
  resultCount.textContent = list.length ? `عرض ${list.length} منتج` : 'لا توجد نتائج — جرّب كلمة أخرى 🔍';
  grid.innerHTML = list.map(p=>`
    <div class="card">
      ${p.tag?`<span class="tag ${/جديد|هدايا|جديدة/.test(p.tag)?'new':''}">${p.tag}</span>`:''}
      <div class="card-art" style="--c1:${p.c1};--c2:${p.c2}" data-quick="${p.id}">${p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.remove()">`:p.icon}</div>
      <div class="card-body">
        <span class="card-cat">${CAT_NAMES[p.cat]}</span>
        <h3 data-quick="${p.id}">${p.name}</h3>
        <div class="stars">${stars(p.rating)} <small>${p.rating} (${p.rev})</small></div>
        <p class="card-desc">${p.desc}</p>
        <div class="price-row"><span class="price">${p.price} ر.س</span>${p.old?`<span class="old">${p.old} ر.س</span>`:''}</div>
        <button class="add-btn" data-add="${p.id}">أضف للسلة 🛒</button>
      </div>
    </div>`).join('');
}
document.addEventListener('click', e=>{
  const add = e.target.closest('[data-add]');
  if(add){ addToCart(add.dataset.add); return; }
  const q = e.target.closest('[data-quick]');
  if(q){ openQuick(q.dataset.quick); }
});

/* --- السلة --- */
function cartQty(){ return Object.values(cart).reduce((s,i)=>s+i.qty,0); }
function cartSub(){
  return Object.entries(cart).reduce((s,[id,i])=>{
    const p = PRODUCTS.find(x=>x.id===id); if(!p) return s;
    return s + prodPrice(p, i.size||'250')*i.qty;
  },0);
}
function addToCart(id, size='250', grind='حبوب كاملة', silent=false){
  const key = id+'|'+size+'|'+grind;
  cart[key] = cart[key] || {id, size, grind, qty:0};
  cart[key].qty++;
  save(); renderCart();
  if(!silent) toast('تمت الإضافة للسلة ✅');
  openCartFn();
}
function renderCart(){
  const n = cartQty();
  $('#cartCount').textContent = n;
  $('#cartN').textContent = n ? `(${n})` : '';
  const box = $('#cartItems');
  const keys = Object.keys(cart);
  if(!keys.length){
    box.innerHTML = `<div class="empty">🛒<br>سلتك فارغة<br><small>اكتشف محاصيلنا الطازجة وابدأ رحلتك</small></div>`;
  } else {
    box.innerHTML = keys.map(k=>{
      const i = cart[k], p = PRODUCTS.find(x=>x.id===i.id); if(!p) return '';
      const price = prodPrice(p, i.size);
      return `<div class="ci">
        <div class="ci-art" style="background:linear-gradient(135deg,${p.c1},${p.c2})">${p.img?`<img src="${p.img}" alt="" loading="lazy">`:p.icon}</div>
        <div class="ci-info"><b>${p.name}</b><small>${i.size}غ • ${i.grind}</small>
          <div class="qty">
            <button data-dec="${k}">−</button><span>${i.qty}</span><button data-inc="${k}">+</button>
            <span style="margin-inline-start:auto;font-weight:900">${price*i.qty} ر.س</span>
          </div>
        </div>
        <button class="ci-del" data-del="${k}">🗑️</button>
      </div>`;
    }).join('');
  }
  const sub = cartSub();
  const ship = sub===0 ? 0 : (sub>=150 ? 0 : 25);
  $('#subTotal').textContent = sub+' ر.س';
  $('#shipCost').textContent = sub===0 ? '—' : (ship===0?'مجاني 🎉':ship+' ر.س');
  $('#grandTotal').textContent = (sub+ship)+' ر.س';
  $('#shipFill').style.width = Math.min(100, sub/150*100)+'%';
  $('#shipMsg').innerHTML = sub>=150 ? '🎉 ربحت <b>الشحن المجاني!</b>' : (sub>0 ? `أضف منتجات بـ <b>${150-sub} ر.س</b> واحصل على شحن مجاني` : 'الشحن مجاني للطلبات فوق 150 ر.س');
}
document.addEventListener('click', e=>{
  const inc=e.target.closest('[data-inc]'), dec=e.target.closest('[data-dec]'), del=e.target.closest('[data-del]');
  if(inc){ cart[inc.dataset.inc].qty++; save(); renderCart(); }
  if(dec){ const k=dec.dataset.dec; cart[k].qty--; if(cart[k].qty<=0) delete cart[k]; save(); renderCart(); }
  if(del){ delete cart[del.dataset.del]; save(); renderCart(); toast('تم حذف المنتج'); }
});
$('#clearCart').onclick = ()=>{ if(!Object.keys(cart).length) return; cart={}; save(); renderCart(); };

/* فتح/إغلاق */
const cartEl=$('#cart'), overlay=$('#overlay');
function openCartFn(){ cartEl.classList.add('open'); overlay.classList.add('show'); }
function closeCartFn(){ cartEl.classList.remove('open'); overlay.classList.remove('show'); }
$('#openCart').onclick = openCartFn;
$('#closeCart').onclick = closeCartFn;
overlay.onclick = ()=>{ closeCartFn(); closeModal('#checkoutModal'); closeModal('#quickModal'); };

/* فلاتر + بحث + ترتيب */
$('#filters').addEventListener('click', e=>{
  const b = e.target.closest('.chip'); if(!b) return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  b.classList.add('active'); activeCat = b.dataset.cat; render();
});
$('#sortSel').onchange = e=>{ activeSort=e.target.value; render(); };
$('#searchMini').oninput = e=>{ activeSearch=e.target.value.trim(); render(); };

/* القائمة الجوال */
$('#menuBtn').onclick = ()=> $('#mobileNav').classList.toggle('open');
document.querySelectorAll('#mobileNav a').forEach(a=>a.onclick=()=>$('#mobileNav').classList.remove('open'));

/* --- العرض السريع --- */
let quickId=null;
function openModal(s){ $(s).classList.add('show'); }
function closeModal(s){ $(s).classList.remove('show'); }
function openQuick(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  quickId=id;
  $('#qName').textContent=p.name;
  $('#qArt').innerHTML = p.img?`<img src="${p.img}" alt="${p.name}">`:p.icon;
  $('#qArt').style.background = p.img?'#f5eee2':`linear-gradient(135deg,${p.c1},${p.c2})`;
  $('#qDesc').textContent=p.desc;
  $('#qMeta').innerHTML=`<div class="stars">${stars(p.rating)} <small>${p.rating} (${p.rev} تقييم)</small></div><p style="font-size:13.5px;color:#8a7a6e">الإيحاءات: ${p.notes}</p>`;
  $('#qSize').value='250';
  updQPrice();
  openModal('#quickModal');
}
function updQPrice(){
  const p = PRODUCTS.find(x=>x.id===quickId); if(!p) return;
  $('#qPrice').textContent = prodPrice(p,$('#qSize').value)+' ر.س';
}
$('#qSize').onchange = updQPrice;
$('#qAdd').onclick = ()=>{ closeModal('#quickModal'); addToCart(quickId, $('#qSize').value, $('#qGrind').value); };
$('#closeQuick').onclick = ()=>closeModal('#quickModal');

/* --- إتمام الطلب --- */
function goStep(n){
  document.querySelectorAll('.mstep').forEach(s=>s.classList.toggle('hide', s.dataset.p!=n));
  document.querySelectorAll('.step').forEach(s=>s.classList.toggle('on', +s.dataset.s<=n));
}
$('#checkoutBtn').onclick = ()=>{
  if(!Object.keys(cart).length){ toast('سلتك فارغة — أضف قهوتك أولاً ☕'); return; }
  closeCartFn(); goStep(1); openModal('#checkoutModal');
};
$('#closeCheckout').onclick = ()=>closeModal('#checkoutModal');
$('#backShip').onclick = ()=>goStep(1);
$('#toPay').onclick = ()=>{
  const name=$('#fName').value.trim(), phone=$('#fPhone').value.trim(), addr=$('#fAddr').value.trim();
  if(name.length<3){ toast('فضلاً أدخل الاسم الكامل'); return; }
  if(!/^0?5\d{8}$/.test(phone.replace(/\s/g,''))){ toast('فضلاً أدخل رقم جوال سعودي صحيح'); return; }
  if(addr.length<5){ toast('فضلاً أدخل العنوان'); return; }
  const sub=cartSub(), ship=sub>=150?0:25;
  $('#orderSum').innerHTML = Object.values(cart).map(i=>{
    const p=PRODUCTS.find(x=>x.id===i.id);
    return `<div class="row"><span>${p.name} × ${i.qty}</span><b>${prodPrice(p,i.size)*i.qty} ر.س</b></div>`;
  }).join('')+`<div class="row"><span>التوصيل (${$('#fCity').value})</span><b>${ship===0?'مجاني':ship+' ر.س'}</b></div><div class="row total"><span>الإجمالي</span><b>${sub+ship} ر.س</b></div>`;
  goStep(2);
};
document.querySelectorAll('input[name=pay]').forEach(r=>r.onchange=()=>{
  $('#cardBox').classList.toggle('hide', document.querySelector('input[name=pay]:checked').value!=='card');
});
$('#cNum').oninput = e=>{
  e.target.value = e.target.value.replace(/\D/g,'').slice(0,16).replace(/(\d{4})(?=\d)/g,'$1 ');
};
$('#confirmOrder').onclick = ()=>{
  const pay = document.querySelector('input[name=pay]:checked').value;
  if(pay==='card'){
    if($('#cNum').value.replace(/\s/g,'').length<16){ toast('رقم البطاقة غير مكتمل'); return; }
    if(!/^\d{2}\/\d{2}$/.test($('#cExp').value.trim())){ toast('صيغة الانتهاء MM/YY'); return; }
    if($('#cCvv').value.length<3){ toast('رمز CVV غير مكتمل'); return; }
  }
  const no = '#RB-'+Math.floor(1000+Math.random()*9000);
  $('#orderNo').textContent=no;
  const sub=cartSub(), ship=sub>=150?0:25;
  const payName={cod:'الدفع عند الاستلام',card:'بطاقة بنكية',apple:'Apple Pay'}[pay];
  $('#doneMsg').textContent=`${$('#fName').value.trim()}، طلبك (${cartQty()} منتج) بقيمة ${sub+ship} ر.س — ${payName}. التوصيل إلى ${$('#fCity').value} خلال 2-4 أيام. أرسلنا التفاصيل لجوالك 📱`;
  cart={}; save(); renderCart();
  goStep(3);
};
$('#doneClose').onclick = ()=>{ closeModal('#checkoutModal'); };

/* النشرة */
$('#newsForm').onsubmit = e=>{
  e.preventDefault();
  toast('تم الاشتراك! كود خصمك: ROBUA15 🎁');
  $('#newsMail').value='';
};

/* عداد العرض */
let secs = 2*3600+14*60+55;
setInterval(()=>{
  if(secs<=0) secs=2*3600;
  secs--;
  const h=String(Math.floor(secs/3600)).padStart(2,'0'), m=String(Math.floor(secs%3600/60)).padStart(2,'0'), s=String(secs%60).padStart(2,'0');
  const el=$('#timer'); if(el) el.textContent=`${h}:${m}:${s}`;
},1000);

/* هيدر عند التمرير */
addEventListener('scroll', ()=> $('#header').style.boxShadow = scrollY>10 ? '0 6px 24px rgba(43,26,18,.12)' : 'none');

render(); renderCart();
