    document.addEventListener('DOMContentLoaded',function(){
      function updateNumbers(){
        const nums=document.querySelectorAll('.page-number');
        nums.forEach((el,i)=>el.textContent=i+1);
        const total=nums.length||1;document.querySelectorAll('.page-count').forEach(el=>el.textContent=total);
      }
      if(window.Paged){document.addEventListener('pagedjs:rendered',updateNumbers);}else{updateNumbers();}
    });
