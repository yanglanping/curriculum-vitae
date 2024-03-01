// 获取父页面的 window 对象
const parentWindow = window.parent;
window.addEventListener('wheel', function(e) {
  // 发送消息到父页面
  parentWindow.postMessage({type:'wheel',delta:e.deltaY}, '*');
},{ passive: false })

window.addEventListener('keyup',function(event){
  // 发送消息到父页面
  parentWindow.postMessage({type:'keyup',keyCode:event.keyCode}, '*');
})

// 禁止鼠标右键
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
})