const professionalExperiencesBox = document.querySelector("#professional-experiences");

const settings = {
    "url": "http://127.0.0.1:3022/api/v1/experiencias-profissionais",
    "method": "GET",
    "timeout": 0,
};
  
$.ajax(settings).done(function (response) {
    response.forEach(item => {

        professionalExperiencesBox.innerHTML += `
        
            <div class="professional-experience" id="${item.id}">
                <div class="info">
                    <div class="box-header">
                        <h2 class="job-title">${item.titulo}</h2>
                    </div>
                    <div class="box-content">
                        <p class="business-name-and-date">${item.local} | ${item.periodo}</p>
                    <p class="job-description">${item.descricao}</p>
                    </div>
                </div>
                <div class="actions">
                    <img src="./Edit.svg" alt="edit icon" onclick="edit(${item.id})">
                    <img src="./Delete.svg" alt="trash icon" onclick="deleteExperience(${item.id})">
                </div>
            </div>

        `
    })

    $(".professional-experience").each(function(index) {
        $(this).on( "click", function(e) {
            if(!$(this).hasClass("active")) {
                $(this)[0].children[1].style.display = "initial";
                $(this).addClass("active");
                $(this)[0].children[0].children[1].src="./Arrow-Up.svg"
            } else {
                $(this)[0].children[1].style.display = "none";
                $(this).removeClass("active");
                $(this)[0].children[0].children[1].src=="./Arrow-Down.svg"
            }
        });
    
    })
});

document.querySelector(".primary-button").addEventListener("click", function(e) {

    var settings = {
        "url": "http://127.0.0.1:3022/api/v1/experiencias-profissionais/create",
        "method": "POST",
        "timeout": 0,
        "data": {
            "titulo": document.querySelector("#titulo").value,
            "local": document.querySelector("#local").value,
            "periodo": document.querySelector("#periodo").value,
            "descricao": document.querySelector("#descricao").value,
        }
    };
      
    $.ajax(settings);

})

function deleteExperience(id) {

    let settings = {
        "url": `http://127.0.0.1:3022/api/v1/experiencias-profissionais/${id}`,
        "method": "DELETE",
        "timeout": 0,
    };
      
    $.ajax(settings).done(function (response) {
    console.log(response);
    });

}

function edit(id) {

    var settings = {
        "url": `http://127.0.0.1:3022/api/v1/experiencias-profissionais/${id}`,
        "method": "GET",
        "timeout": 0,
    };
      
    $.ajax(settings).done(function (response) {
        document.body.innerHTML += `
 
            <div id="popup">
                
                <form>

                    <div class="input-field">
                        <label for="titulo">T??tulo:</label>
                        <input type="text" name="titulo" id="up-titulo" placeholder="T??tulo da fun????o" value="${response[0].titulo}" required>
                    </div>
                    

                    <div class="input-field">
                        <label for="local">Local:</label>
                        <input type="text" name="local" id="up-local" placeholder="Organiza????o tal" value="${response[0].local}" required>
                    </div>

                    <div class="input-field">
                        <label for="per??odo">Per??odo:</label>
                        <input type="text" name="periodo" id="up-periodo" placeholder="Jul 2012 - Ago 2014" value="${response[0].periodo}" required>
                    </div>

                    <div class="input-field">
                        <label for="descri????o">Descri????o:</label>
                        <input type="text" name="descri????o" id="up-descricao" placeholder="Exercia isso, isso e isso..." value="${response[0].descricao}" required>
                    </div>

                    <button type="button" class="primary-button" onclick="atualizar(${response[0].id})">Atualizar</button>
                    
                </form>

            </div>
            
            `
    });

}

function atualizar(id) {

    var settings = {
        "url": `http://127.0.0.1:3022/api/v1/experiencias-profissionais/${id}`,
        "method": "PUT",
        "timeout": 0,
        "data": {
            "titulo": document.querySelector("#up-titulo").value,
            "local": document.querySelector("#up-local").value,
            "periodo": document.querySelector("#up-periodo").value,
            "descricao": document.querySelector("#up-descricao").value,
        }
    };
      
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}