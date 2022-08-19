//ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 300,
    reset: true,
    desktop: true,
    mobile: true,
    rotate: {
        x: 0,
        y: 500,
        z: 0
    }
});
sr.reveal('.head', { interval: 200, rotate:{ y: 0 }})
sr.reveal('.content', { delay: 600, interval: 200 })
sr.reveal('.welcome', { delay: 900, interval: 200 })
sr.reveal('.garis', { delay: 1200, interval: 200, rotate:{ y: 0 } })
sr.reveal('.text__project', { delay: 1500, interval: 200 })
sr.reveal('.project', { delay:1800, interval: 200})
sr.reveal('.portofolio')
sr.reveal('.fingerprint')
sr.reveal('.kalkulator')
sr.reveal('.lampu')
sr.reveal('.earth')

//Jam / Date
window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = waktu.getHours();
    document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
}
{
    var tw = new Date();
    if (tw.getTimezoneOffset() == 0) (a = tw.getTime() + (7 *60*60*1000))
        else (a = tw.getTime());
    tw.setTime(a);
    var tahun = tw.getFullYear ();
    var hari = tw.getDay ();
    var bulan = tw.getMonth ();
    var tanggal = tw.getDate ();
    var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
    var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember");
    document.getElementById("mmddyy").innerHTML = hariarray[hari]+" "+tanggal+" "+bulanarray[bulan]+" "+tahun;
}

//fix overflowX  scrolling
const all = document.querySelector('*');
all.style.overflowX = 'hidden';

//Project Linked
let linkPortofolio = document.querySelector('.visit__portofolio');
linkPortofolio.addEventListener("click", function() {
    window.location.assign('../../project/portofolio/');
});

let linkFingerprint = document.querySelector('.visit__fingerprint');
linkFingerprint.addEventListener("click", function() {
    window.location.assign('../../project/fingerprint/');
});

let linkKalkulator = document.querySelector('.visit__kalkulator');
linkKalkulator.addEventListener("click", function() {
    window.location.assign('../../project/kalkulator/');
});

let linkLampu = document.querySelector('.visit__lampu');
linkLampu.addEventListener("click", function() {
    window.location.assign('../../project/lampu/');
});

let linkEarth = document.querySelector('.visit__earth');
linkEarth.addEventListener("click", function() {
    window.location.assign('../../project/earth/');
});