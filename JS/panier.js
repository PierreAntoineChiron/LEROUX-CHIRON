    function store(){
        var inputFirstName = document.getElementById("firstname");
        var inputName = document.getElementById("name");
        var inputEmail = document.getElementById("mail");
        var inputPhone = document.getElementById("phone");
        var inputAdresse = document.getElementById("adress");
        var inputCodePostal = document.getElementById("codepostal");
        var inputDate = document.getElementById("date");

        localStorage.setItem("Prénom", inputFirstName.value);
        localStorage.setItem("Nom", inputName.value);
        localStorage.setItem("Email", inputEmail.value);
        localStorage.setItem("Numéro de télephone", inputPhone.value);
        localStorage.setItem("Adresse", inputAdresse.value);
        localStorage.setItem("Code Postal", inputCodePostal.value);
        localStorage.setItem("Date de livraison", inputDate.value);
        
}