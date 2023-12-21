(()=>{"use strict";const e=(()=>{let e=[];return{addToList:function(t){e.push(t),console.log(e)},TodoList:e}})(),t=(e,t,n)=>({title:e,taskList:t,id:n}),n=(()=>{let n=[],o=e.TodoList;const r=t("General",o,0);return n.push(r),{submitProject:function(){document.querySelector("#createProject").addEventListener("click",(e=>{e.preventDefault(),function(){const e=document.querySelector("#projectTitle").value,o=0===n.length?0:n[n.length-1].id+1;if(""!==e){const c=t(e,[],o);console.log(c),function(e){n.push(e),console.log(n)}(c)}}(),1!==n.length&&c.displayProject()}))},grabProjectId:function(e){return e.target.getAttribute("data-projectId")},projectList:n}})(),o=function(){let e=n.projectList[0].taskList,t=e[e.length-1];const o=document.querySelector("#general"),c=document.createElement("div");c.setAttribute("data-taskId",`${t.id}`);const r=document.createElement("div"),d=document.createElement("div"),i=document.createElement("div"),u=document.createElement("div");return r.textContent=`Title: ${t.title}`,d.textContent=`Due Date: ${t.duedate}`,i.textContent=`Description: ${t.description}`,u.textContent=`Priority: ${t.priority}`,c.append(r,d,i,u),o.appendChild(c),o},c={displayProject:function(){let e=n.projectList,t=e[e.length-1];const o=document.querySelector("#Allprojects"),c=document.createElement("div"),r=document.createElement("div"),d=document.createElement("button");return c.classList.add("project"),c.setAttribute("data-projectId",`${t.id}`),d.setAttribute("data-projectId",`${t.id}`),d.setAttribute("id",`project-${t.id}`),r.textContent=`${t.title}`,d.textContent="+",d.addEventListener("click",(e=>{console.log(n.grabProjectId(e))})),c.append(r,d),o.appendChild(c),o}},r=(()=>{function t(){let t=document.getElementById("title").value,n=document.getElementById("description").value,o=document.getElementById("date").value,c=document.getElementById("priority").value;const r=((e,t,n,o,c,r)=>({id:e,title:t,description:n,duedate:o,priority:c,project:0}))(function(){let t=e.TodoList;return 0===t.length?0:t[t.length-1].id+1}(),t,n,o,c);console.log(r),e.addToList(r)}function n(){document.getElementById("title").value="",document.getElementById("description").value="",document.getElementById("date").value="",document.getElementById("priority").value="Low"}return{createNewTask:t,initSubmitBtn:function(){document.querySelector("#submit").addEventListener("click",(e=>{!function(){const e=document.querySelector("form"),c=document.querySelector("#newTask");t(),o(),n(),e.setAttribute("hidden",""),c.removeAttribute("hidden")}(),e.preventDefault()}))},cancelTask:function(){const e=document.querySelector("#cancel"),t=document.querySelector("form"),o=document.querySelector("#newTask");e.addEventListener("click",(e=>{n(),t.setAttribute("hidden",""),o.removeAttribute("hidden"),e.preventDefault()}))},openTaskCreator:function(){const e=document.querySelector("#newTask"),t=document.querySelector("form");e.addEventListener("click",(n=>{t.removeAttribute("hidden"),e.setAttribute("hidden",""),n.preventDefault()}))}}})();r.initSubmitBtn(),r.cancelTask(),r.openTaskCreator(),n.submitProject()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFhekMsU0FBU0MsY0FBYyxZQUUxQzRDLEVBQVUzQyxpQkFBaUIsU0FBVUMsSUFDakNtQyxJQUNBRSxFQUFZbEIsYUFBYSxTQUFVLElBQ25DbUIsRUFBV0MsZ0JBQWdCLFVBQzNCdkMsRUFBRUMsZ0JBQWdCLEdBRTFCLEVBYW1EMEMsZ0JBWG5ELFdBQ0ksTUFBTUwsRUFBYXpDLFNBQVNDLGNBQWMsWUFDcEN1QyxFQUFjeEMsU0FBU0MsY0FBYyxRQUUzQ3dDLEVBQVd2QyxpQkFBaUIsU0FBVUMsSUFDbENxQyxFQUFZRSxnQkFBZ0IsVUFDNUJELEVBQVduQixhQUFhLFNBQVUsSUFDbENuQixFQUFFQyxnQkFBZ0IsR0FFMUIsRUFHSCxFQTlGZSxHQ1JoQjZCLEVBQVFNLGdCQUNSTixFQUFRVyxhQUNSWCxFQUFRYSxrQkFFUmxELEVBQVNHLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFuYWdlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFuYWdlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21hbmFnZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFkZHRvTGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IFRvZG9MaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRUb0xpc3QodGFzaykge1xuICAgICAgICBUb2RvTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhUb2RvTGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9MaXN0LCBUb2RvTGlzdCB9O1xufSkoKVxuXG5cbmV4cG9ydCB7IEFkZHRvTGlzdCB9IiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdCB9IGZyb20gXCIuL1VJXCI7XG5pbXBvcnQgeyBBZGR0b0xpc3QgfSBmcm9tIFwiLi9tYW5hZ2VMaXN0XCI7XG5pbXBvcnQgeyBOZXdUYXNrIH0gZnJvbSBcIi4vbWFuYWdlVGFza1wiO1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gKHRpdGxlLCB0YXNrTGlzdCwgaWQpID0+IHtcbiAgICByZXR1cm4geyB0aXRsZSwgdGFza0xpc3QsIGlkIH07XG59XG5cbmNvbnN0IHByb2plY3RzID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgICBsZXQgdGFza0xpc3QgPSBBZGR0b0xpc3QuVG9kb0xpc3Q7XG5cbiAgICBjb25zdCBnZW5lcmFsTGlzdCA9IG5ld1Byb2plY3QoJ0dlbmVyYWwnLCB0YXNrTGlzdCwgMCk7XG4gICAgcHJvamVjdExpc3QucHVzaChnZW5lcmFsTGlzdCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGNyZWF0ZVByb2plY3RJZCgpXG4gICAgICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IFtdO1xuXG4gICAgICAgIGlmIChwcm9qZWN0VGl0bGUgPT09ICcnKSByZXR1cm5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3UHJvamVjdChwcm9qZWN0VGl0bGUsIHByb2plY3RUYXNrcywgcHJvamVjdElkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJZCgpIHtcbiAgICAgICAgbGV0IGlkO1xuICAgICAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gcHJvamVjdExpc3RbcHJvamVjdExpc3QubGVuZ3RoIC0gMV0uaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9Qcm9qZWN0TGlzdChwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcblxuICAgICAgICBjcmVhdGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMSkgcmV0dXJuXG4gICAgICAgICAgICBlbHNlIHJlbmRlclByb2plY3QuZGlzcGxheVByb2plY3QoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBncmFiUHJvamVjdElkKGUpIHtcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0SWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBzdWJtaXRQcm9qZWN0LCBncmFiUHJvamVjdElkLCBwcm9qZWN0TGlzdCB9XG59KSgpXG5cbmV4cG9ydCB7IHByb2plY3RzIH1cblxuIiwiaW1wb3J0IHsgQWRkdG9MaXN0IH0gZnJvbSBcIi4vbWFuYWdlTGlzdFwiO1xuaW1wb3J0IHsgTmV3VGFzayB9IGZyb20gXCIuL21hbmFnZVRhc2tcIjsgXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL21hbmFnZVByb2plY3RcIjtcblxuY29uc3QgcmVuZGVyVGFzayA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZGlzcGxheUFsbFRhc2soKSB7XG4gICAgICAgIGxldCBsaXN0ID0gcHJvamVjdHMucHJvamVjdExpc3RbMF0udGFza0xpc3Q7XG4gICAgICAgIGxldCBpdGVtVG9EaXNwbGF5ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbmVyYWwnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS10YXNrSWQnLCBgJHtpdGVtVG9EaXNwbGF5LmlkfWApXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7aXRlbVRvRGlzcGxheS50aXRsZX1gO1xuICAgICAgICBkdWVkYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke2l0ZW1Ub0Rpc3BsYXkuZHVlZGF0ZX1gO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtpdGVtVG9EaXNwbGF5LmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke2l0ZW1Ub0Rpc3BsYXkucHJpb3JpdHl9YDtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRpdGxlLCBkdWVkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgICAgICBnZW5lcmFsTGlzdC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiBnZW5lcmFsTGlzdDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5QWxsVGFzayB9XG59KSgpXG5cbmNvbnN0IHJlbmRlclByb2plY3QgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KCkge1xuICAgICAgICBsZXQgbGlzdCA9IHByb2plY3RzLnByb2plY3RMaXN0O1xuICAgICAgICBsZXQgcHJvamVjdCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNBbGxwcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3RJZCcsIGAke3Byb2plY3QuaWR9YCk7XG4gICAgICAgIHByb2plY3RUYXNrQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0SWQnLCBgJHtwcm9qZWN0LmlkfWApO1xuICAgICAgICBwcm9qZWN0VGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3QtJHtwcm9qZWN0LmlkfWApO1xuXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICAgICAgcHJvamVjdFRhc2tCdG4udGV4dENvbnRlbnQgPSAnKyc7XG5cbiAgICAgICAgcHJvamVjdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMuZ3JhYlByb2plY3RJZChlKSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUsIHByb2plY3RUYXNrQnRuKTtcbiAgICAgICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdERpc3BsYXlcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5UHJvamVjdCB9XG59KSgpXG5cbmV4cG9ydCB7IHJlbmRlclRhc2ssIHJlbmRlclByb2plY3QgfSIsImltcG9ydCB7IEFkZHRvTGlzdCB9IGZyb20gXCIuL21hbmFnZUxpc3RcIjtcbmltcG9ydCB7IHJlbmRlclRhc2sgfSBmcm9tIFwiLi9VSVwiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9tYW5hZ2VQcm9qZWN0XCI7ICBcblxuXG5jb25zdCBjcmVhdGVUYXNrID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb2plY3RcbiAgICB9XG59XG5cbmNvbnN0IE5ld1Rhc2sgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RJZCA9IDA7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VQcm9qZWN0SWQobmV3UHJvamVjdCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdElkID0gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbiAgICAgICAgbGV0IGlkID0gY3JlYXRlSWQoKTtcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0SWQ7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2soaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKTtcblxuICAgICAgICBBZGR0b0xpc3QuYWRkVG9MaXN0KHRhc2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUlkKCkge1xuICAgICAgICBsZXQgbGlzdCA9IEFkZHRvTGlzdC5Ub2RvTGlzdDtcbiAgICAgICAgbGV0IGlkO1xuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpZCA9IGxpc3RbbGlzdC5sZW5ndGgtMV0uaWQgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgZHVlZGF0ZS52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTdWJtaXRCdG4oKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcblxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3VibWl0VGFzaygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcbiAgICAgICAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFzaycpO1xuICAgICAgICBcbiAgICAgICAgY3JlYXRlTmV3VGFzaygpO1xuICAgICAgICByZW5kZXJUYXNrLmRpc3BsYXlBbGxUYXNrKCk7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIG5ld1Rhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICBuZXdUYXNrQnRuLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsVGFzaygpIHtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgbmV3VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrJyk7XG5cbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICBuZXdUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgICAgICAgIG5ld1Rhc2tCdG4ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcGVuVGFza0NyZWF0b3IoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFzaycpO1xuICAgICAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgICBuZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIG5ld1Rhc2tGb3JtLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICBuZXdUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZU5ld1Rhc2ssIGluaXRTdWJtaXRCdG4sIGNhbmNlbFRhc2ssIG9wZW5UYXNrQ3JlYXRvciB9XG59KSgpO1xuXG5leHBvcnQgeyBOZXdUYXNrIH1cbiIsImltcG9ydCB7IE5ld1Rhc2sgfSBmcm9tIFwiLi9tYW5hZ2VUYXNrLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL21hbmFnZVByb2plY3QuanNcIjtcblxuTmV3VGFzay5pbml0U3VibWl0QnRuKCk7XG5OZXdUYXNrLmNhbmNlbFRhc2soKTtcbk5ld1Rhc2sub3BlblRhc2tDcmVhdG9yKCk7XG5cbnByb2plY3RzLnN1Ym1pdFByb2plY3QoKTtcbiJdLCJuYW1lcyI6WyJBZGR0b0xpc3QiLCJUb2RvTGlzdCIsImFkZFRvTGlzdCIsInRhc2siLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIm5ld1Byb2plY3QiLCJ0aXRsZSIsInRhc2tMaXN0IiwiaWQiLCJwcm9qZWN0cyIsInByb2plY3RMaXN0IiwiZ2VuZXJhbExpc3QiLCJzdWJtaXRQcm9qZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3RUaXRsZSIsInZhbHVlIiwicHJvamVjdElkIiwibGVuZ3RoIiwicHJvamVjdCIsImFkZFRvUHJvamVjdExpc3QiLCJjcmVhdGVQcm9qZWN0IiwicmVuZGVyUHJvamVjdCIsImRpc3BsYXlQcm9qZWN0IiwiZ3JhYlByb2plY3RJZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInJlbmRlclRhc2siLCJsaXN0IiwiaXRlbVRvRGlzcGxheSIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJkdWVkYXRlIiwiZGVzY3JpcHRpb24iLCJwcmlvcml0eSIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJwcm9qZWN0RGlzcGxheSIsInByb2plY3RUYXNrQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiTmV3VGFzayIsImNyZWF0ZU5ld1Rhc2siLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZVRhc2siLCJjcmVhdGVJZCIsInJlc2V0IiwiaW5pdFN1Ym1pdEJ0biIsIm5ld1Rhc2tGb3JtIiwibmV3VGFza0J0biIsInJlbW92ZUF0dHJpYnV0ZSIsInN1Ym1pdFRhc2siLCJjYW5jZWxUYXNrIiwiY2FuY2VsQnRuIiwib3BlblRhc2tDcmVhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==