const toggle = $('#theme');
const topBg = $('.top-bg');
const card = $('.card');
const cardSm =$('.card-sm');
const body = $('body');
const text = $('.text-secondary');
toggle.on('click',(e)=>{
   topBg.toggleClass('bg-light-top');
   card.toggleClass('light-card');
   cardSm.toggleClass('light-card');
    body.toggleClass('bg-light light-text-2');
    text.toggleClass('light-text');
    
})