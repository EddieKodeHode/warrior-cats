(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const s=["short","medium","long"],a=["straight","soft","curly","dirty","messy","clean","spiky"],d=["white","grey","blue","black","brown","cream","orange"],u=["plain-colored","tabby","tortoiseshell","torbie","calico","leopard spots","tiger-stripes"],y=["deep","dark","glowing","light","pale","mysterious"],h=["brown","green","yellow","blue","heterochromic"],m=["scar on face","scar on ear","scar on body","scar on paw","scar on tail","missing ear","missing tail","overbite","small body","large body","skinny","overweight","muscular","new collar","worn collar","bald spot","bandana","bandage"],f=["leader","deputy","warrior","apprentice","medicine cat","medicine cat apprentice","queen","kit","elder","kittypet","loner"];function t(o){return o[Math.floor(Math.random()*o.length)]}document.querySelector("b:nth-child(1)").innerHTML=t(s);document.querySelector("b:nth-child(2)").innerHTML=t(a);document.querySelector("b:nth-child(3)").innerHTML=t(d);document.querySelector("b:nth-child(4)").innerHTML=t(u);document.querySelector("b:nth-child(5)").innerHTML=t(y);document.querySelector("b:nth-child(6)").innerHTML=t(h);document.querySelector("b:nth-child(7)").innerHTML=t(m);document.querySelector("b:nth-child(8)").innerHTML=t(f);
