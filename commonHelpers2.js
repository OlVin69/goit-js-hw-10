import"./assets/styles-6036bdc1.js";import{i}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form");o.addEventListener("submit",l=>{l.preventDefault();const m=o.querySelector("input"),n=o.querySelectorAll('[name="state"]'),e=parseInt(m.value),s=Array.from(n).find(r=>r.checked);!isNaN(e)&&s&&new Promise((t,a)=>{s.value==="fulfilled"?setTimeout(()=>{t(e)},e):setTimeout(()=>{a(e)},e)}).then(t=>{i.success({messageColor:"rgb(255, 255, 255)",backgroundColor:"green",timeout:"20000",message:` Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{i.error({messageColor:"rgb(255, 255, 255)",backgroundColor:"red",timeout:"20000",message:` Rejected promise in ${t}ms`,position:"topRight"})}),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
