import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as m,i as l}from"./assets/vendor-651d7991.js";let a;const e={startBtn:document.querySelector("button[data-start]"),timerDays:document.querySelector("span[data-days]"),timerHours:document.querySelector("span[data-hours]"),timerMinutes:document.querySelector("span[data-minutes]"),timerSeconds:document.querySelector("span[data-seconds]")},f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()>Date.now()?(a=t[0].getTime(),e.startBtn.classList.remove("disabled")):(l.show({position:"topRight",iconUrl:"../img/error.svg#error",iconColor:"#fff",message:"Please choose a date in the future!",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0}),e.startBtn.classList.add("disabled"))}};m("#datetime-picker",f);e.startBtn.addEventListener("click",t=>{const r=setInterval(()=>{const s=a-Date.now(),o=h(s);s<=0?clearInterval(r):(e.timerDays.textContent=n(o.days),e.timerHours.textContent=n(o.hours),e.timerMinutes.textContent=n(o.minutes),e.timerSeconds.textContent=n(o.seconds))},1e3)});function n(t){return t=String(t),t.length<2?t.padStart(2,"0"):t}function h(t){const i=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
