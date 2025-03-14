function addNewWField() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute("placeholder", "Enter-Here");

    let weob = document.getElementById("we");
    let weAddbuttonob = document.getElementById("weAddButton");

    weob.insertBefore(newnode, weAddbuttonob);
}

function Addnewacad() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute("placeholder", "Enter-Here");

    let weob = document.getElementById("Acad");
    let weAddbuttonob = document.getElementById("acaddbutton");

    weob.insertBefore(newnode, weAddbuttonob);
}

function generateCV() {
    let nameField = document.getElementById("nameField").value;
    document.getElementById("nameT").innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("gT").innerHTML = document.getElementById("EmField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedinField").value;
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("skT").innerHTML = document.getElementById("skField").value;
    document.getElementById("objectT").innerHTML = document.getElementById("objectivefield").value;

    let wes = document.getElementsByClassName("weField");
    let workExp = "";
    for (let e of wes) {
        workExp += `<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = workExp;

    let acad = document.getElementsByClassName("eqfield");
    let acadQual = "";
    for (let e of acad) {
        acadQual += `<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML = acadQual;

    let file = document.getElementById("imageField").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            document.getElementById("imgtemplate").src = reader.result;
        };
    }

    document.getElementById("cv-form").style.display = 'none';
    document.getElementById("cv-template").style.display = 'block';
}

function printcv() {
    window.print();
}
