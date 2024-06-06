//Javascript

function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput == null || nameInput == '') {
        alert('Inputan Kosong');
    } else {
        console.log(nameInput);
    }
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('Index ' + (indexSlide - 1) + ' Adalah Index Image Yang di tampilkan');
}

setInterval(() => nextSlide(1), 3000);

//
function validateForm(){
    const nama = document.forms["contus"]["nama"].value;
    const nohp = document.forms["contus"]["nohp"].value;
    const email = document.forms["contus"]["email"].value;
    const pilihKursus = document.forms["contus"]["pilihkursus"].value;
    const pesan = document.forms["contus"]["pesan"].value;

    if (nama != "" && nohp != "" && email != "" && pilihKursus != "" && pesan != ""){
        document.getElementById("sukses-submit").innerHTML = "Data Tersimpan"
    }

    setSenderUI(nama, nohp, email, pilihKursus, pesan);

    return false;
}

function setSenderUI(nama, nohp, email, pilihKursus, pesan){
    document.getElementById("sender-nama").innerHTML = nama;
    document.getElementById("sender-nohp").innerHTML = nohp;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-pilihkursus").innerHTML = pilihKursus;
    document.getElementById("sender-pesan").innerHTML = pesan;
}