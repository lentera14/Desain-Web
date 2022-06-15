var buttonHapus = document.querySelector('#hapus');
var buttonHapus1 = document.querySelector('#hapus1');
var buttonModulus = document.querySelector('#modulus');
var buttonBagi = document.querySelector('#bagi');

var buttonNo7 = document.querySelector('#no7');
var buttonNo8 = document.querySelector('#no8');
var buttonNo9 = document.querySelector('#no9');
var buttonKali = document.querySelector('#kali');

var buttonNo4 = document.querySelector('#no4');
var buttonNo5 = document.querySelector('#no5');
var buttonNo6 = document.querySelector('#no6');
var buttonKurang = document.querySelector('#kurang');

var buttonNo1 = document.querySelector('#no1');
var buttonNo2 = document.querySelector('#no2');
var buttonNo3 = document.querySelector('#no3');
var buttonTambah = document.querySelector('#tambah');

var buttonNo0 = document.querySelector('#no0');
var buttonNo00 = document.querySelector('#no00');
var buttonTitik = document.querySelector('#titik');
var buttonHasil = document.querySelector('#hasil');

function alert(){
	alert('Hai');
}

function hapus(){
	akhir.value = '';
}
function hapus1(){
	akhir.value = akhir.value.slice(0, -1);
}
function modulus(){
	akhir.value += '%';
}
function bagi(){
	akhir.value += '/';
}

buttonHapus.onclick = function(){
	hapus();
}
buttonHapus1.onclick = function(){
	hapus1();
}
buttonModulus.onclick = function(){
	modulus();
}
buttonBagi.onclick = function(){
	bagi();
}

function no7(){
	akhir.value += '7';
}
function no8(){
	akhir.value += '8';
}
function no9(){
	akhir.value += '9';
}
function kali(){
	akhir.value += '*';
}

buttonNo7.onclick = function(){
	no7();
}
buttonNo8.onclick = function(){
	no8();
}
buttonNo9.onclick = function(){
	no9();
}
buttonKali.onclick = function(){
	kali();
}

function no4(){
	akhir.value += '4';
}
function no5(){
	akhir.value += '5';
}
function no6(){
	akhir.value += '6';
}
function kurang(){
	akhir.value += '-';
}

buttonNo4.onclick = function(){
	no4();
}
buttonNo5.onclick = function(){
	no5();
}
buttonNo6.onclick = function(){
	no6();
}
buttonKurang.onclick = function(){
	kurang();
}

function no1(){
	akhir.value += '1';
}
function no2(){
	akhir.value += '2';
}
function no3(){
	akhir.value += '3';
}
function tambah(){
	akhir.value += '+';
}

buttonNo1.onclick = function(){
	no1();
}
buttonNo2.onclick = function(){
	no2();
}
buttonNo3.onclick = function(){
	no3();
}
buttonTambah.onclick = function(){
	tambah();
}

function no0(){
	akhir.value += '0';
}
function no00(){
	akhir.value += '00';
}
function titik(){
	akhir.value += '.';
}
function view(){
	try{
		akhir.value = eval(akhir.value);
	}
	catch(invalid){
		akhir.value = 'invalid'
		setTimeout(hapus, 2000);
	}
}

buttonNo0.onclick = function(){
	no0();
}
buttonNo00.onclick = function(){
	no00();
}
buttonTitik.onclick = function(){
	titik();
}
buttonHasil.onclick = function(){
	view();
}
