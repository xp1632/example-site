//Xiuzhu's code about playing different animations after click on refresh button
window.onload = function () {
    let next = document.getElementById("reloadBtn");
    let img = document.getElementsByTagName("img")[0];
    //Create a list to save the imgs
    let imgArr = [
      "../briefy_images/slotmachine0.gif",
      "../briefy_images/slotmachine1.gif",
      "../briefy_images/slotmachine2.gif",
      "../briefy_images/slotmachine3.gif",
      "../briefy_images/slotmachine4.gif",
      "../briefy_images/slotmachine5.gif",
      "../briefy_images/slotmachine6.gif",
      "../briefy_images/slotmachine7.gif",
      "../briefy_images/slotmachine8.gif",
      "../briefy_images/slotmachine9.gif",
    ];
    let index = 0;
    next.onclick = function () {
      index++;
      //next.style.backgroundColor="#ff4c31";
      if (index > imgArr.length - 1) {
        index = 0;
      }
      img.src = imgArr[index];
    };
  };