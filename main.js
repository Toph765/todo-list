(()=>{"use strict";const e=(()=>{let e=[];return{addToList:function(t){e.push(t),console.log(e)},TodoList:e}})(),t=(e,t,n)=>({title:e,taskList:t,id:n}),n=(()=>{let n,o=[],c=e.TodoList;const i=t("General",c,0);o.push(i);let d=0;return{submitProject:function(){document.querySelector("#createProject").addEventListener("click",(e=>{e.preventDefault(),function(){n=document.querySelector("#projectTitle").value;const e=0===o.length?0:o[o.length-1].id+1;if(""!==n){const r=t(n,[],e);console.log(r),function(e){o.push(e),console.log(o)}(r)}}(),""!==n&&(r.displayProject(),document.querySelector("#projectTitle").value="",n="")}))},grabProjectId:function(e){let t=parseInt(e.target.getAttribute("data-projectId"));return d=t,d},grabCurrentProject:function(){return d},grabProjectList:function(){return o},projectList:o}})(),o=function(){let e=n.projectList[0].taskList,t=e[e.length-1];const o=document.querySelector("#general"),r=document.createElement("div");r.setAttribute("data-taskId",`${t.id}`);const c=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),u=document.createElement("div");return c.textContent=`Title: ${t.title}`,i.textContent=`Due Date: ${t.duedate}`,d.textContent=`Description: ${t.description}`,u.textContent=`Priority: ${t.priority}`,r.append(c,i,d,u),o.appendChild(r),o},r={displayProject:function(){let e=n.projectList,t=e[e.length-1];const o=document.querySelector("#Allprojects"),r=document.createElement("div"),c=document.createElement("div"),i=document.createElement("button");return r.classList.add("project"),r.setAttribute("data-projectId",`${t.id}`),i.setAttribute("data-projectId",`${t.id}`),i.setAttribute("id",`project-${t.id}`),c.textContent=`${t.title}`,i.textContent="+",i.addEventListener("click",(e=>{console.log("project id",n.grabProjectId(e));const t=document.querySelector("#main-form");n.grabProjectId(e),t.removeAttribute("hidden"),e.preventDefault()})),r.append(c,i),o.appendChild(r),o}},c=(()=>{let t,r;function c(){const o=n.grabProjectList();t=document.getElementById("title").value,r=document.getElementById("description").value;let c=document.getElementById("date").value,i=document.getElementById("priority").value,d=function(){let t=e.TodoList;return 0===t.length?0:t[t.length-1].id+1}(),u=n.grabCurrentProject();if(""!==t&&""!==r&&""!==c){const n=((e,t,n,o,r,c)=>({id:e,title:t,description:n,duedate:o,priority:r,project:c}))(d,t,r,c,i,u);console.log(n),0===u&&(o[0].taskList.push(n),console.log(o));for(let t=1;t<o.length;t++)o[t].id===u&&(e.addToList(n),o[t].taskList.push(n),console.log(o))}}function i(){document.getElementById("title").value="",t="",document.getElementById("description").value="",r="",document.getElementById("date").value="",document.getElementById("priority").value="Low"}return{createNewTask:c,initSubmitBtn:function(){document.querySelector("#submit").addEventListener("click",(e=>{!function(){const e=document.querySelector("#main-form"),n=document.querySelector("#newTask");c(),""!==t&&""!==r&&(o(),i(),e.setAttribute("hidden",""),n.removeAttribute("hidden"))}(),e.preventDefault()}))},cancelTask:function(){const e=document.querySelector("#cancel"),t=document.querySelector("#main-form"),n=document.querySelector("#newTask");e.addEventListener("click",(e=>{i(),t.setAttribute("hidden",""),n.removeAttribute("hidden"),e.preventDefault()}))},openTaskCreator:function(){const e=document.querySelector("#newTask"),t=document.querySelector("#main-form");e.addEventListener("click",(o=>{n.grabProjectId(o),t.removeAttribute("hidden"),e.setAttribute("hidden",""),o.preventDefault()}))}}})();c.initSubmitBtn(),c.cancelTask(),c.openTaskCreator(),n.submitProject()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDNUJTLEVBQVdyQixhQUFhLFNBQVUsSUFDbENyQixFQUFFQyxnQkFBZ0IsR0FFMUIsRUFHSCxFQW5IZSxHQ1JoQmlDLEVBQVFPLGdCQUNSUCxFQUFRVSxhQUNSVixFQUFRWSxrQkFFUnZELEVBQVNLLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFuYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFuYWdlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21hbmFnZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFkZHRvTGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IFRvZG9MaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRUb0xpc3QodGFzaykge1xuICAgICAgICBUb2RvTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhUb2RvTGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9MaXN0LCBUb2RvTGlzdCB9O1xufSkoKVxuXG5cbmV4cG9ydCB7IEFkZHRvTGlzdCB9IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL1VJXCI7XG5pbXBvcnQgeyBBZGR0b0xpc3QgfSBmcm9tIFwiLi9tYW5hZ2VMaXN0XCI7XG5pbXBvcnQgeyBOZXdUYXNrIH0gZnJvbSBcIi4vbWFuYWdlVGFza1wiO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCB0YXNrTGlzdCwgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgdGFza0xpc3QsIGlkIH07XG59XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdFRpdGxlXG4gICAgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbiAgICBsZXQgdGFza0xpc3QgPSBBZGR0b0xpc3QuVG9kb0xpc3Q7XG5cbiAgICBjb25zdCBnZW5lcmFsTGlzdCA9IG5ld1Byb2plY3QoJ0dlbmVyYWwnLCB0YXNrTGlzdCwgMCk7XG4gICAgcHJvamVjdExpc3QucHVzaChnZW5lcmFsTGlzdCk7XG5cbiAgICBsZXQgY3VycmVudFByb2plY3QgPSAwO1xuXG4gICAgZnVuY3Rpb24gZ3JhYkN1cnJlbnRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ3JhYlByb2plY3RMaXN0KCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICAgICAgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBjcmVhdGVQcm9qZWN0SWQoKVxuICAgICAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBbXTtcblxuICAgICAgICBpZiAocHJvamVjdFRpdGxlID09PSAnJykgcmV0dXJuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ld1Byb2plY3QocHJvamVjdFRpdGxlLCBwcm9qZWN0VGFza3MsIHByb2plY3RJZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIGFkZFRvUHJvamVjdExpc3QocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0SWQoKSB7XG4gICAgICAgIGxldCBpZDtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpZCA9IHByb2plY3RMaXN0W3Byb2plY3RMaXN0Lmxlbmd0aCAtIDFdLmlkICsgMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvUHJvamVjdExpc3QocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlVmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgcHJvamVjdFRpdGxlID0gJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Jyk7XG5cbiAgICAgICAgY3JlYXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QoKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0VGl0bGUgPT09ICcnKSByZXR1cm5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3QuZGlzcGxheVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdyYWJQcm9qZWN0SWQoZSkge1xuICAgICAgICBsZXQgcHJvamVjdElkID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3RJZCcpKTtcblxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RJZDtcblxuICAgICAgICByZXR1cm4gY3VycmVudFByb2plY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VibWl0UHJvamVjdCwgZ3JhYlByb2plY3RJZCwgZ3JhYkN1cnJlbnRQcm9qZWN0LCBncmFiUHJvamVjdExpc3QsIHByb2plY3RMaXN0IH1cbn0pKClcblxuZXhwb3J0IHsgcHJvamVjdHMgfVxuXG4iLCJpbXBvcnQgeyBBZGR0b0xpc3QgfSBmcm9tIFwiLi9tYW5hZ2VMaXN0XCI7XG5pbXBvcnQgeyBOZXdUYXNrIH0gZnJvbSBcIi4vbWFuYWdlVGFza1wiOyBcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdFwiO1xuXG5jb25zdCByZW5kZXJUYXNrID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBkaXNwbGF5QWxsVGFzaygpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBwcm9qZWN0cy5wcm9qZWN0TGlzdFswXS50YXNrTGlzdDtcbiAgICAgICAgbGV0IGl0ZW1Ub0Rpc3BsYXkgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VuZXJhbCcpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRhc2tJZCcsIGAke2l0ZW1Ub0Rpc3BsYXkuaWR9YClcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHtpdGVtVG9EaXNwbGF5LnRpdGxlfWA7XG4gICAgICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7aXRlbVRvRGlzcGxheS5kdWVkYXRlfWA7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke2l0ZW1Ub0Rpc3BsYXkuZGVzY3JpcHRpb259YDtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7aXRlbVRvRGlzcGxheS5wcmlvcml0eX1gO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGl0bGUsIGR1ZWRhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG4gICAgICAgIGdlbmVyYWxMaXN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGdlbmVyYWxMaXN0O1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXlBbGxUYXNrIH1cbn0pKClcblxuY29uc3QgcmVuZGVyUHJvamVjdCA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZGlzcGxheVByb2plY3QoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gcHJvamVjdHMucHJvamVjdExpc3Q7XG4gICAgICAgIGxldCBwcm9qZWN0ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FsbHByb2plY3RzJyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdElkJywgYCR7cHJvamVjdC5pZH1gKTtcbiAgICAgICAgcHJvamVjdFRhc2tCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3RJZCcsIGAke3Byb2plY3QuaWR9YCk7XG4gICAgICAgIHByb2plY3RUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdC0ke3Byb2plY3QuaWR9YCk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50aXRsZX1gO1xuICAgICAgICBwcm9qZWN0VGFza0J0bi50ZXh0Q29udGVudCA9ICcrJztcblxuICAgICAgICBwcm9qZWN0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdCBpZCcsIHByb2plY3RzLmdyYWJQcm9qZWN0SWQoZSkpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1mb3JtJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzLmdyYWJQcm9qZWN0SWQoZSk7XG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlLCBwcm9qZWN0VGFza0J0bik7XG4gICAgICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3REaXNwbGF5XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheVByb2plY3QgfVxufSkoKVxuXG5leHBvcnQgeyByZW5kZXJUYXNrLCByZW5kZXJQcm9qZWN0IH0iLCJpbXBvcnQgeyBBZGR0b0xpc3QgfSBmcm9tIFwiLi9tYW5hZ2VMaXN0XCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrIH0gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdFwiOyAgXG5cblxuY29uc3QgY3JlYXRlVGFzayA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgcHJvamVjdCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0XG4gICAgfVxufVxuXG5jb25zdCBOZXdUYXNrID0gKCgpID0+IHtcblxuICAgIGxldCB0aXRsZTtcbiAgICBsZXQgZGVzY3JpcHRpb247XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOZXdUYXNrKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHByb2plY3RzLmdyYWJQcm9qZWN0TGlzdCgpO1xuXG4gICAgICAgIHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG5cbiAgICAgICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gY3JlYXRlSWQoKTtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IHByb2plY3RzLmdyYWJDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycgfHxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID09PSAnJyB8fFxuICAgICAgICAgICAgZHVlZGF0ZSA9PT0gJycpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0SWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFzayk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGlzdFswXS50YXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0W2ldLmlkID09PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgQWRkdG9MaXN0LmFkZFRvTGlzdCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdExpc3RbaV0udGFza0xpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUlkKCkge1xuICAgICAgICBsZXQgbGlzdCA9IEFkZHRvTGlzdC5Ub2RvTGlzdDtcbiAgICAgICAgbGV0IGlkO1xuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpZCA9IGxpc3RbbGlzdC5sZW5ndGgtMV0uaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGxldCB0aXRsZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlVmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgdGl0bGUgPSAnJztcblxuICAgICAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvblZhbHVlLnZhbHVlID0gJyc7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gJyc7XG5cbiAgICAgICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBkdWVkYXRlLnZhbHVlID0gJyc7XG5cbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5LnZhbHVlID0gJ0xvdyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFN1Ym1pdEJ0bigpIHtcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBzdWJtaXRUYXNrKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWZvcm0nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrJyk7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVOZXdUYXNrKCk7XG5cbiAgICAgICAgaWYgKHRpdGxlID09PSAnJyB8fCBkZXNjcmlwdGlvbiA9PT0gJycpIHJldHVyblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclRhc2suZGlzcGxheUFsbFRhc2soKTtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgICAgIG5ld1Rhc2tCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbFRhc2soKSB7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwnKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFzaycpO1xuXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgbmV3VGFza0Zvcm0uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgICAgICBuZXdUYXNrQnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb3BlblRhc2tDcmVhdG9yKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2snKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1mb3JtJyk7XG5cbiAgICAgICAgbmV3VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0cy5ncmFiUHJvamVjdElkKGUpO1xuICAgICAgICAgICAgbmV3VGFza0Zvcm0ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIG5ld1Rhc2tCdG4uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlTmV3VGFzaywgaW5pdFN1Ym1pdEJ0biwgY2FuY2VsVGFzaywgb3BlblRhc2tDcmVhdG9yIH1cbn0pKCk7XG5cbmV4cG9ydCB7IE5ld1Rhc2sgfVxuIiwiaW1wb3J0IHsgTmV3VGFzayB9IGZyb20gXCIuL21hbmFnZVRhc2suanNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vbWFuYWdlUHJvamVjdC5qc1wiO1xuXG5OZXdUYXNrLmluaXRTdWJtaXRCdG4oKTtcbk5ld1Rhc2suY2FuY2VsVGFzaygpO1xuTmV3VGFzay5vcGVuVGFza0NyZWF0b3IoKTtcblxucHJvamVjdHMuc3VibWl0UHJvamVjdCgpO1xuIl0sIm5hbWVzIjpbIkFkZHRvTGlzdCIsIlRvZG9MaXN0IiwiYWRkVG9MaXN0IiwidGFzayIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibmV3UHJvamVjdCIsInRpdGxlIiwidGFza0xpc3QiLCJpZCIsInByb2plY3RzIiwicHJvamVjdFRpdGxlIiwicHJvamVjdExpc3QiLCJnZW5lcmFsTGlzdCIsImN1cnJlbnRQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsInByb2plY3RJZCIsImxlbmd0aCIsInByb2plY3QiLCJhZGRUb1Byb2plY3RMaXN0IiwiY3JlYXRlUHJvamVjdCIsInJlbmRlclByb2plY3QiLCJkaXNwbGF5UHJvamVjdCIsImdyYWJQcm9qZWN0SWQiLCJwYXJzZUludCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImdyYWJDdXJyZW50UHJvamVjdCIsImdyYWJQcm9qZWN0TGlzdCIsInJlbmRlclRhc2siLCJsaXN0IiwiaXRlbVRvRGlzcGxheSIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkdWVkYXRlIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0RGlzcGxheSIsInByb2plY3RUYXNrQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwibmV3VGFza0Zvcm0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJOZXdUYXNrIiwiY3JlYXRlTmV3VGFzayIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlSWQiLCJjcmVhdGVUYXNrIiwiaSIsInJlc2V0IiwiaW5pdFN1Ym1pdEJ0biIsIm5ld1Rhc2tCdG4iLCJzdWJtaXRUYXNrIiwiY2FuY2VsVGFzayIsImNhbmNlbEJ0biIsIm9wZW5UYXNrQ3JlYXRvciJdLCJzb3VyY2VSb290IjoiIn0=