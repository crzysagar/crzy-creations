const products=[
{id:1,n:"Floral Maxi Dress",m:"Dress • Pink",p:1499,c:"#e88cae",bg:"#f3d8df",cat:"dress",tag:"40% OFF"},
{id:2,n:"Black Elegance Dress",m:"Dress • Black",p:1799,c:"#25252a",bg:"#ddd9d8",cat:"dress",tag:"BESTSELLER"},
{id:3,n:"Pastel Co-ord Set",m:"Co-ord • Blue",p:1299,c:"#9cb7d7",bg:"#dbe6ee",cat:"coord",tag:"35% OFF"},
{id:4,n:"Red Party Gown",m:"Party Wear • Red",p:2499,c:"#b73545",bg:"#e5c5c7",cat:"party",tag:"TRENDING"},
{id:5,n:"White Summer Dress",m:"Western • White",p:1199,c:"#eee7dc",bg:"#e7e0d7",cat:"western",tag:"37% OFF"},
{id:6,n:"Printed Kurti",m:"Kurti • Floral",p:899,c:"#d58c8d",bg:"#ead9d2",cat:"kurti",tag:"40% OFF"},
{id:7,n:"Lavender Dream Dress",m:"Dress • Lavender",p:1299,c:"#9e88d2",bg:"#e0d8ef",cat:"dress",tag:"NEW"},
{id:8,n:"Classic Ethnic Set",m:"Ethnic • Green",p:1599,c:"#6f8468",bg:"#d9e0d5",cat:"ethnic",tag:"NEW"}];
let bag=JSON.parse(localStorage.getItem("crzyBag")||"[]"), current="all";
const money=n=>"₹"+n.toLocaleString("en-IN");
function filter(x){current=x;render()}
function render(){let q=(document.getElementById("search").value||"").toLowerCase();let list=products.filter(p=>(current==="all"||p.cat===current)&&(p.n.toLowerCase().includes(q)||p.m.toLowerCase().includes(q)));document.getElementById("products").innerHTML=list.map(p=>`<article class="product"><div class="pic" style="--c:${p.c};--bg:${p.bg}"><span class="tag">${p.tag}</span><button class="heart" onclick="this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button><div class="dress"></div></div><div class="info"><h3>${p.n}</h3><p>${p.m}</p><span class="price">${money(p.p)}</span></div><button class="add" onclick="add(${p.id})">ADD TO CART</button></article>`).join("")}
function add(id){let x=bag.find(a=>a.id===id);if(x)x.q++;else bag.push({id,q:1});save();openBag()}
function save(){localStorage.setItem("crzyBag",JSON.stringify(bag));update()}
function update(){document.getElementById("count").textContent=bag.reduce((a,x)=>a+x.q,0);let total=0;document.getElementById("bagItems").innerHTML=bag.map(x=>{let p=products.find(a=>a.id===x.id);total+=p.p*x.q;return `<div class="bagitem"><span>${p.n} × ${x.q}</span><b>${money(p.p*x.q)}</b></div>`}).join("")||"<p>Your bag is empty.</p>";document.getElementById("total").textContent=total.toLocaleString("en-IN")}
function openBag(){document.getElementById("bag").classList.add("open");document.getElementById("shade").classList.add("open");update()}
function closeBag(){document.getElementById("bag").classList.remove("open");document.getElementById("shade").classList.remove("open")}
function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
function focusSearch(){document.getElementById("search").focus();document.getElementById("shop").scrollIntoView()}
function subscribe(e){e.preventDefault();document.getElementById("msg").textContent="Welcome to the CRZY Fam ❤️";e.target.reset()}
render();update();
