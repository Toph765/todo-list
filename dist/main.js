(()=>{"use strict";const t=(()=>{let t=[];return{addToList:function(e){t.push(e),console.log(t)},TodoList:t}})(),e=(t,e,n)=>({title:t,taskList:e,id:n}),n=(()=>{let n,o=[],c=t.TodoList;const i=e("General",c,0);o.push(i);let u=0;return{submitProject:function(){document.querySelector("#createProject").addEventListener("click",(t=>{t.preventDefault(),function(){n=document.querySelector("#projectTitle").value;const t=0===o.length?0:o[o.length-1].id+1;if(""!==n){const r=e(n,[],t);console.log(r),function(t){o.push(t),console.log(o)}(r)}}(),""!==n&&(r.displayProject(),document.querySelector("#projectTitle").value="",n="")}))},grabProjectId:function(t){let e=parseInt(t.target.getAttribute("data-projectId"));return u=e,u},grabCurrentProject:function(){return u},grabProjectList:function(){return o},projectList:o}})(),o=function(){let t=n.projectList[0].taskList;!function(t,e){const n=document.createElement("div");n.setAttribute("data-taskId",`${t.id}`);const o=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div");o.textContent=`Title: ${t.title}`,r.textContent=`Due Date: ${t.duedate}`,c.textContent=`Description: ${t.description}`,i.textContent=`Priority: ${t.priority}`,n.append(o,r,c,i),e.appendChild(n)}(t[t.length-1],document.querySelector("#general"))},r={displayProject:function(){let t=n.projectList,e=t[t.length-1];const o=document.querySelector(".all-projects"),r=document.createElement("div"),c=document.createElement("div"),i=document.createElement("button");return r.classList.add("project"),r.setAttribute("data-projectId",`${e.id}`),i.setAttribute("data-projectId",`${e.id}`),i.setAttribute("id",`project-${e.id}`),c.textContent=`${e.title}`,i.textContent="+",i.addEventListener("click",(t=>{console.log("project id",n.grabProjectId(t));const e=document.querySelector("#main-form");n.grabProjectId(t),e.removeAttribute("hidden"),t.preventDefault()})),r.append(c,i),o.appendChild(r),o}};function c(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}let i={};function u(){return i}function d(t,e){const n=u(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=c(t),i=r.getDay(),d=(i<o?7:0)+i-o;return r.setDate(r.getDate()-d),r.setHours(0,0,0,0),r}function l(t,e){return function(t,e,n){return+d(t,n)==+d(e,n)}(t,Date.now(),e)}function a(t){const e=c(t);return e.setHours(0,0,0,0),e}function s(t){return e=t,n=Date.now(),+a(e)==+a(n);var e,n}const m=(()=>{let e,r;function i(){const o=n.grabProjectList();e=document.getElementById("title").value,r=document.getElementById("description").value;let i=document.getElementById("date").value,u=document.getElementById("priority").value,d=function(){let e=t.TodoList;return 0===e.length?0:e[e.length-1].id+1}(),a=n.grabCurrentProject();if(console.log(l(c(i))),console.log(s(c(i))),""!==e&&""!==r&&""!==i){const n=((t,e,n,o,r,c)=>({id:t,title:e,description:n,duedate:o,priority:r,project:c}))(d,e,r,i,u,a);console.log(n),0===a&&(o[0].taskList.push(n),console.log(o));for(let e=1;e<o.length;e++)o[e].id===a&&(t.addToList(n),o[e].taskList.push(n),console.log(o))}}function u(){document.getElementById("title").value="",e="",document.getElementById("description").value="",r="",document.getElementById("date").value="",document.getElementById("priority").value="Low"}return{createNewTask:i,initSubmitBtn:function(){document.querySelector("#submit").addEventListener("click",(t=>{!function(){const t=document.querySelector("#main-form"),n=document.querySelector("#newTask");i(),""!==e&&""!==r&&(o(),u(),t.setAttribute("hidden",""),n.removeAttribute("hidden"))}(),t.preventDefault()}))},cancelTask:function(){const t=document.querySelector("#cancel"),e=document.querySelector("#main-form"),n=document.querySelector("#newTask");t.addEventListener("click",(t=>{u(),e.setAttribute("hidden",""),n.removeAttribute("hidden"),t.preventDefault()}))},openTaskCreator:function(){const t=document.querySelector("#newTask"),e=document.querySelector("#main-form");t.addEventListener("click",(o=>{n.grabProjectId(o),e.removeAttribute("hidden"),t.setAttribute("hidden",""),o.preventDefault()}))}}})();m.initSubmitBtn(),m.cancelTask(),m.openTaskCreator(),n.submitProject()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQWMsY0FFM0M2RSxFQUFXNUUsaUJBQWlCLFNBQVVDLElBQ2xDVCxFQUFTbUIsY0FBY1YsR0FDdkJrQyxFQUFZQyxnQkFBZ0IsVUFDNUJ3QyxFQUFXckQsYUFBYSxTQUFVLElBQ2xDdEIsRUFBRUMsZ0JBQWdCLEdBRTFCLEVBR0gsRUF0SGUsR0NUaEJrRSxFQUFRTyxnQkFDUlAsRUFBUVUsYUFDUlYsRUFBUVksa0JBRVJ4RixFQUFTSyxlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21hbmFnZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21hbmFnZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RoaXNXZWVrLm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1RvZGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFuYWdlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWRkdG9MaXN0ID0gKCgpID0+IHtcbiAgICBsZXQgVG9kb0xpc3QgPSBbXTtcblxuICAgIGZ1bmN0aW9uIGFkZFRvTGlzdCh0YXNrKSB7XG4gICAgICAgIFRvZG9MaXN0LnB1c2godGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGRUb0xpc3QsIFRvZG9MaXN0IH07XG59KSgpXG5cblxuZXhwb3J0IHsgQWRkdG9MaXN0IH0iLCJpbXBvcnQgeyByZW5kZXJQcm9qZWN0IH0gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IEFkZHRvTGlzdCB9IGZyb20gXCIuL21hbmFnZUxpc3RcIjtcbmltcG9ydCB7IE5ld1Rhc2sgfSBmcm9tIFwiLi9tYW5hZ2VUYXNrXCI7XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAodGl0bGUsIHRhc2tMaXN0LCBpZCkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCB0YXNrTGlzdCwgaWQgfTtcbn1cblxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0VGl0bGVcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuICAgIGxldCB0YXNrTGlzdCA9IEFkZHRvTGlzdC5Ub2RvTGlzdDtcblxuICAgIGNvbnN0IGdlbmVyYWxMaXN0ID0gbmV3UHJvamVjdCgnR2VuZXJhbCcsIHRhc2tMaXN0LCAwKTtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKGdlbmVyYWxMaXN0KTtcblxuICAgIGxldCBjdXJyZW50UHJvamVjdCA9IDA7XG5cbiAgICBmdW5jdGlvbiBncmFiQ3VycmVudFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiUHJvamVjdExpc3QoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0TGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGNyZWF0ZVByb2plY3RJZCgpXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IFtdO1xuXG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgPT09ICcnKSByZXR1cm5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChwcm9qZWN0VGl0bGUsIHByb2plY3RUYXNrcywgcHJvamVjdElkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJZCgpIHtcbiAgICAgICAgbGV0IGlkO1xuICAgICAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gcHJvamVjdExpc3RbcHJvamVjdExpc3QubGVuZ3RoIC0gMV0uaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpO1xuICAgICAgICBwcm9qZWN0VGl0bGVWYWx1ZS52YWx1ZSA9ICcnO1xuICAgICAgICBwcm9qZWN0VGl0bGUgPSAnJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcblxuICAgICAgICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RUaXRsZSA9PT0gJycpIHJldHVyblxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUHJvamVjdC5kaXNwbGF5UHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JhYlByb2plY3RJZChlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdElkJykpO1xuXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdElkO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJtaXRQcm9qZWN0LCBncmFiUHJvamVjdElkLCBncmFiQ3VycmVudFByb2plY3QsIGdyYWJQcm9qZWN0TGlzdCwgcHJvamVjdExpc3QgfVxufSkoKVxuXG5leHBvcnQgeyBwcm9qZWN0cyB9XG5cbiIsImltcG9ydCB7IEFkZHRvTGlzdCB9IGZyb20gXCIuL21hbmFnZUxpc3RcIjtcbmltcG9ydCB7IE5ld1Rhc2sgfSBmcm9tIFwiLi9tYW5hZ2VUYXNrXCI7IFxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9tYW5hZ2VQcm9qZWN0XCI7XG5cbmNvbnN0IHJlbmRlclRhc2sgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrKGl0ZW1zLCBkaXNwbGF5KSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFza0lkJywgYCR7aXRlbXMuaWR9YClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtpdGVtcy50aXRsZX1gO1xuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke2l0ZW1zLmR1ZWRhdGV9YDtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7aXRlbXMuZGVzY3JpcHRpb259YDtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7aXRlbXMucHJpb3JpdHl9YDtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGRpc3BsYXk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUluYm94KCkge1xuICAgICAgICBsZXQgbGlzdCA9IHByb2plY3RzLnByb2plY3RMaXN0WzBdLnRhc2tMaXN0O1xuICAgICAgICBsZXQgaXRlbXMgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhbCcpO1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheUFsbFRhc2soaXRlbXMsIGdlbmVyYWxMaXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5SW5ib3ggfVxufSkoKVxuXG5jb25zdCByZW5kZXJQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdCgpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBwcm9qZWN0cy5wcm9qZWN0TGlzdDtcbiAgICAgICAgbGV0IHByb2plY3QgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdElkJywgYCR7cHJvamVjdC5pZH1gKTtcbiAgICAgICAgcHJvamVjdFRhc2tCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3RJZCcsIGAke3Byb2plY3QuaWR9YCk7XG4gICAgICAgIHByb2plY3RUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC0ke3Byb2plY3QuaWR9YCk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgICAgICBwcm9qZWN0VGFza0J0bi50ZXh0Q29udGVudCA9ICcrJztcblxuICAgICAgICBwcm9qZWN0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdCBpZCcsIHByb2plY3RzLmdyYWJQcm9qZWN0SWQoZSkpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1mb3JtJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzLmdyYWJQcm9qZWN0SWQoZSk7XG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGFza0J0bik7XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3REaXNwbGF5XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheVByb2plY3QgfVxufSkoKVxuXG5leHBvcnQgeyByZW5kZXJUYXNrLCByZW5kZXJQcm9qZWN0IH0iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwibGV0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGlzU2FtZVdlZWsgfSBmcm9tIFwiLi9pc1NhbWVXZWVrLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgaXNUaGlzV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGF0ZSwgb3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lV2VlayhkYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RoaXNXZWVrO1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZVdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVMZWZ0LCBvcHRpb25zKTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkYXRlUmlnaHQsIG9wdGlvbnMpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mV2VlayA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZXZWVrO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZVdlZWs7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gXCIuL2lzU2FtZURheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB0b2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICByZXR1cm4gaXNTYW1lRGF5KGRhdGUsIERhdGUubm93KCkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVG9kYXk7XG4iLCJpbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuXG4gKiBAcmV0dXJucyBUaGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mRGF5ID09PSArZGF0ZVJpZ2h0U3RhcnRPZkRheTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1NhbWVEYXk7XG4iLCJpbXBvcnQgeyBBZGR0b0xpc3QgfSBmcm9tIFwiLi9tYW5hZ2VMaXN0XCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrIH0gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdFwiO1xuaW1wb3J0IHsgdG9EYXRlLCBpc1RoaXNXZWVrLCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxuY29uc3QgY3JlYXRlVGFzayA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0XG4gICAgfVxufVxuXG5jb25zdCBOZXdUYXNrID0gKCgpID0+IHtcblxuICAgIGxldCB0aXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb247XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHByb2plY3RzLmdyYWJQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgICAgICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gY3JlYXRlSWQoKTtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IHByb2plY3RzLmdyYWJDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGlzVGhpc1dlZWsodG9EYXRlKGR1ZWRhdGUpKSlcbiAgICAgICAgY29uc29sZS5sb2coaXNUb2RheSh0b0RhdGUoZHVlZGF0ZSkpKVxuXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycgfHxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID09PSAnJyB8fFxuICAgICAgICAgICAgZHVlZGF0ZSA9PT0gJycpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFswXS50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmlkID09PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQWRkdG9MaXN0LmFkZFRvTGlzdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3RbaV0udGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUlkKCkge1xuICAgICAgICBsZXQgbGlzdCA9IEFkZHRvTGlzdC5Ub2RvTGlzdDtcbiAgICAgICAgbGV0IGlkO1xuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpZCA9IGxpc3RbbGlzdC5sZW5ndGgtMV0uaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlVmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgdGl0bGUgPSAnJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvblZhbHVlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gJyc7XG5cbiAgICAgICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBkdWVkYXRlLnZhbHVlID0gJyc7XG5cbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFN1Ym1pdEJ0bigpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBzdWJtaXRUYXNrKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWZvcm0nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrJyk7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVOZXdUYXNrKCk7XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnJyB8fCBkZXNjcmlwdGlvbiA9PT0gJycpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2suZGlzcGxheUluYm94KCk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgbmV3VGFza0Zvcm0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgICAgICBuZXdUYXNrQnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxUYXNrKCkge1xuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tZm9ybScpO1xuICAgICAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2snKTtcblxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgbmV3VGFza0J0bi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9wZW5UYXNrQ3JlYXRvcigpIHtcbiAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tZm9ybScpO1xuXG4gICAgICAgIG5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdHMuZ3JhYlByb2plY3RJZChlKTtcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBuZXdUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Rhc2ssIGluaXRTdWJtaXRCdG4sIGNhbmNlbFRhc2ssIG9wZW5UYXNrQ3JlYXRvciB9XG59KSgpO1xuXG5leHBvcnQgeyBOZXdUYXNrIH1cbiIsImltcG9ydCB7IE5ld1Rhc2sgfSBmcm9tIFwiLi9tYW5hZ2VUYXNrLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL21hbmFnZVByb2plY3QuanNcIjtcblxuTmV3VGFzay5pbml0U3VibWl0QnRuKCk7XG5OZXdUYXNrLmNhbmNlbFRhc2soKTtcbk5ld1Rhc2sub3BlblRhc2tDcmVhdG9yKCk7XG5cbnByb2plY3RzLnN1Ym1pdFByb2plY3QoKTtcbiJdLCJuYW1lcyI6WyJBZGR0b0xpc3QiLCJUb2RvTGlzdCIsImFkZFRvTGlzdCIsInRhc2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm5ld1Byb2plY3QiLCJ0aXRsZSIsInRhc2tMaXN0IiwiaWQiLCJwcm9qZWN0cyIsInByb2plY3RUaXRsZSIsInByb2plY3RMaXN0IiwiZ2VuZXJhbExpc3QiLCJjdXJyZW50UHJvamVjdCIsInN1Ym1pdFByb2plY3QiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJwcm9qZWN0SWQiLCJsZW5ndGgiLCJwcm9qZWN0IiwiYWRkVG9Qcm9qZWN0TGlzdCIsImNyZWF0ZVByb2plY3QiLCJyZW5kZXJQcm9qZWN0IiwiZGlzcGxheVByb2plY3QiLCJncmFiUHJvamVjdElkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJncmFiQ3VycmVudFByb2plY3QiLCJncmFiUHJvamVjdExpc3QiLCJyZW5kZXJUYXNrIiwibGlzdCIsIml0ZW1zIiwiZGlzcGxheSIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkdWVkYXRlIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJkaXNwbGF5QWxsVGFzayIsInByb2plY3REaXNwbGF5IiwicHJvamVjdFRhc2tCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJuZXdUYXNrRm9ybSIsInJlbW92ZUF0dHJpYnV0ZSIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJnU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiTmFOIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInN0YXJ0T2ZXZWVrIiwiZGF0ZSIsIm9wdGlvbnMiLCJ3ZWVrU3RhcnRzT24iLCJsb2NhbGUiLCJfZGF0ZSIsImRheSIsImdldERheSIsImRpZmYiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldEhvdXJzIiwiaXNUaGlzV2VlayIsImRhdGVMZWZ0IiwiZGF0ZVJpZ2h0IiwiaXNTYW1lV2VlayIsIm5vdyIsInN0YXJ0T2ZEYXkiLCJpc1RvZGF5IiwiTmV3VGFzayIsImNyZWF0ZU5ld1Rhc2siLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUlkIiwiY3JlYXRlVGFzayIsImkiLCJyZXNldCIsImluaXRTdWJtaXRCdG4iLCJuZXdUYXNrQnRuIiwic3VibWl0VGFzayIsImNhbmNlbFRhc2siLCJjYW5jZWxCdG4iLCJvcGVuVGFza0NyZWF0b3IiXSwic291cmNlUm9vdCI6IiJ9