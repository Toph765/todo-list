(()=>{"use strict";const e=(()=>{function e(){const e={title:document.getElementById("title").value,description:document.getElementById("description").value,duedate:document.getElementById("date").value,priority:document.getElementById("priority").value};console.log(e),t.addToList(e)}return{createNewTask:e,submitTask:function(){document.querySelector("#submit").addEventListener("click",(t=>{e(),document.getElementById("title").value="",document.getElementById("description").value="",document.getElementById("date").value="",document.getElementById("priority").value="Low",t.preventDefault()}))}}})(),t=(()=>{let e=[];return{addToList:function(t){e.push(t),console.log(e)}}})();e.submitTask()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFNTUEsRUFBVSxNQUVaLFNBQVNDLElBTUwsTUFBTUMsRUFiSCxDQUNIQyxNQU9ZQyxTQUFTQyxlQUFlLFNBQVNDLE1BUHRDQyxZQVFXSCxTQUFTQyxlQUFlLGVBQWVDLE1BUnJDRSxRQVNOSixTQUFTQyxlQUFlLFFBQVFDLE1BVGpCRyxTQVVkTCxTQUFTQyxlQUFlLFlBQVlDLE9BSW5ESSxRQUFRQyxJQUFJVCxHQUVaVSxFQUFVQyxVQUFVWCxFQUN4QixDQXlCQSxNQUFPLENBQUVELGdCQUFlYSxXQVR4QixXQUNzQlYsU0FBU1csY0FBYyxXQUMvQkMsaUJBQWlCLFNBQVVDLElBQ2pDaEIsSUFoQlFHLFNBQVNDLGVBQWUsU0FDOUJDLE1BQVEsR0FFSUYsU0FBU0MsZUFBZSxlQUM5QkMsTUFBUSxHQUVORixTQUFTQyxlQUFlLFFBQzlCQyxNQUFRLEdBRURGLFNBQVNDLGVBQWUsWUFDOUJDLE1BQVEsTUFRYlcsRUFBRUMsZ0JBQWdCLEdBRTFCLEVBR0gsRUF2Q2UsR0F5Q1ZOLEVBQVksTUFDZCxJQUFJTyxFQUFXLEdBT2YsTUFBTyxDQUFFTixVQUxULFNBQW1CWCxHQUNmaUIsRUFBU0MsS0FBS2xCLEdBQ2RRLFFBQVFDLElBQUlRLEVBQ2hCLEVBR0gsRUFUaUIsR0M3Q2xCbkIsRUFBUWMsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5XG4gICAgfVxufVxuXG5jb25zdCBOZXdUYXNrID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2soKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcblxuICAgICAgICBjb25zdCB0YXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spO1xuXG4gICAgICAgIEFkZHRvTGlzdC5hZGRUb0xpc3QodGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGxldCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcbiAgICAgICAgZHVlZGF0ZS52YWx1ZSA9ICcnO1xuXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQnKTtcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZU5ld1Rhc2soKTtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVOZXdUYXNrLCBzdWJtaXRUYXNrIH1cbn0pKCk7XG5cbmNvbnN0IEFkZHRvTGlzdCA9ICgoKSA9PiB7XG4gICAgbGV0IFRvZG9MaXN0ID0gW107XG5cbiAgICBmdW5jdGlvbiBhZGRUb0xpc3QodGFzaykge1xuICAgICAgICBUb2RvTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICBjb25zb2xlLmxvZyhUb2RvTGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVG9MaXN0IH07XG59KSgpXG5cblxuZXhwb3J0IHsgTmV3VGFzayB9XG5cblxuXG5cbiIsImltcG9ydCB7IE5ld1Rhc2sgfSBmcm9tIFwiLi9jcmVhdGVUYXNrLmpzXCI7XG5cbk5ld1Rhc2suc3VibWl0VGFzaygpO1xuIl0sIm5hbWVzIjpbIk5ld1Rhc2siLCJjcmVhdGVOZXdUYXNrIiwidGFzayIsInRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJkdWVkYXRlIiwicHJpb3JpdHkiLCJjb25zb2xlIiwibG9nIiwiQWRkdG9MaXN0IiwiYWRkVG9MaXN0Iiwic3VibWl0VGFzayIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiVG9kb0xpc3QiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==