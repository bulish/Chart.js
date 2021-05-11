const body = document.body;
const title = document.querySelector('#title');
const firstCol = document.querySelector('.firstCol');
const secondCol = document.querySelector('.secondCol');
const firstCol2 = document.querySelector('.firstCol2');
const secondCol2 = document.querySelector('.secondCol2');
const chartSection = document.querySelector("#chart");
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

var tl = gsap.timeline();
tl.fromTo(firstCol, {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1, duration: .9, ease: 'power1.out'});
tl.fromTo(secondCol, {opacity: 0, scale: 0.2}, {opacity: 1, scale: 1, duration: .9, ease: 'power1.out'});

btn1.addEventListener("click", function() {
    var tl = gsap.timeline();
    tl.to(title, {opacity: 0, display: 'none', duration: 1.15, ease: 'linear'});
    tl.fromTo(chartSection, { display: 'none', opacity: 0}, {display: 'block', opacity: 1, duration: 1.15, ease: 'linear'}, ">");
    tl.fromTo(firstCol2, {opacity: 0}, {opacity: 1, duration: 1.2, ease: 'power1.out'});
    tl.fromTo(secondCol2, {opacity: 0}, {opacity: 1, duration: 1.2, ease: 'power1.out'}, "<");
})

btn1.addEventListener("mouseenter", function() {
    gsap.to(btn1, {scale: 1.2});
})

btn1.addEventListener('mouseleave', function () {
	gsap.to(btn1, { scale: 1 });
});

btn2.addEventListener("click", function() {
    var tl = gsap.timeline();
    tl.fromTo(chartSection, {display: 'block', opacity: 1}, { display: 'none', opacity: 0, duration: 1.15, ease: 'linear'})
    tl.to(title, { display: 'block', opacity: 1, duration: 1.15, ease: 'linear'}, ">");
})

btn2.addEventListener('mouseenter', function () {
	gsap.to(btn2, { scale: 1.2 });
});

btn2.addEventListener('mouseleave', function () {
	gsap.to(btn2, { scale: 1 });
});