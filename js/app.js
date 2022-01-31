
const skill  = document.querySelectorAll('.skill');
const outPut = document.querySelector('#chk_output')

skill.forEach(data => {
    data.addEventListener('change', () => {
        let all_skill = document.querySelectorAll('.skill:checked');

        let skill_arr = [];

        all_skill.forEach(data => {
            skill_arr.push(data.value)
        });


        let list = '';

        skill_arr.map (data => {
            list += `<li class = "list-group-item">${data}</li>`
        })

        outPut.innerHTML = list
    })
})

//================= Calculator ===============

let val_arr = [];

let cal = (val) => {

    val_arr.push(val);
    document.querySelector('.top-monitor').innerHTML = val_arr.join('')
    document.querySelector('.bottom-monitor').innerHTML = 0;
}

let result = () => {
    let val_string = val_arr.join('');
    document.querySelector('.bottom-monitor').innerHTML =eval(val_string);

}
let allClear =() => {
    val_arr = [];
    document.querySelector('.bottom-monitor').innerHTML = '';
    document.querySelector('.top-monitor').innerHTML = 0;
    
}

let del = () => {
    val_arr.pop();
    document.querySelector('.top-monitor').innerHTML = val_arr.join('');
}

// ========= Analog Clock ===========

const h = document.querySelector('.hour')
const m = document.querySelector('.min')
const s = document.querySelector('.sec')

setInterval(() => {
    let time = new Date();

let curr_h = time.getHours();
let curr_m = time.getMinutes();
let curr_s = time.getSeconds();

h.style.transform = `rotate(${clock(12, curr_h)}deg)`
m.style.transform = `rotate(${clock(60, curr_m)}deg)`
s.style.transform = `rotate(${clock(60, curr_s)}deg)`

}, 1000);



const hour = document.querySelector('.h')
const min = document.querySelector('.m')
const sec = document.querySelector('.s')

setInterval(() => {
    let time = new Date();

let cur_hour = time.getHours();
let cur_min = time.getMinutes();
let cur_sec = time.getSeconds();

hour.style.transform = `rotate(${clock(12, cur_hour)}deg)`
min.style.transform = `rotate(${clock(60, cur_min)}deg)`
sec.style.transform = `rotate(${clock(60, cur_sec)}deg)`

}, 1000);


