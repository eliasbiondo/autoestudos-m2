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
            <div class="box-header">
                <h2 class="job-title">${item.titulo}</h2>
                <img src="./Arrow-Down.svg" alt="arrow down">
            </div>
            <div class="box-content">
                <p class="business-name-and-date">${item.local} | ${item.periodo}</p>
            <p class="job-description">${item.descricao}</p>
            </div>
        </div>`
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