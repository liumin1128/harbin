import"./index.3cbcaca4.js";import{$ as e}from"./vendor.d8c1462c.js";var t=document.querySelectorAll(".create-form-step1");Array.prototype.slice.call(t).forEach((function(t){t.addEventListener("submit",(function(t){t.preventDefault(),t.stopPropagation();let o=e(".create-form-step1").serialize();console.log("json : ",o),alert(JSON.stringify(o)),window.location.pathname="/create2.html"}),!1)}));
