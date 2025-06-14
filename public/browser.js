

console.log("Frontend ishga tushdi");

function itemTemplate(item) {
  return ` 
    <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <span class="item-text">${item.reja}</span>
      <div>
        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
        O'zgartirish
        </button>
        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
      </div>
    </li>`;
}


let createField = document.getElementById("create-field");
let new_reja = createField.value;

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();//boshqa page otib ketmasligi uchun

    axios
    .post("/create-item", {    reja: createField.value})
    .then((response) => {
        document.getElementById("item-list")
            .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus(); 
    })

    .catch((err) => {
        console.log("Xatolik yuz berdi:", err);
    });

    console.log("Qaytadan harakat qiling");
});



    document.addEventListener("click", function(e) {
        console.log(e);
        if(e.target.classList.contains("delete-me")) {
        if(confirm("aniq o'chirmoqchimisiz?")) {
            axios.post("/delete-item", {id: e.target
                .getAttribute("data-id")})
            .then((response) => { 
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => { 
                 console.log("Qaytadan harakat qiling");
            });
        }
        }
         
        if(e.target.classList.contains("edit-me")) {
        let userInput = prompt("Ozgartirish kiriting",
             e.target.parentElement.parentElement
            .querySelector(".item-text").innerHTML); //textni olib uni ozgartirdik
        if(userInput) {
            axios.post("/edit-item", {
                id: e.target.getAttribute("data-id"),
                userInput: userInput
            }) 
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement
                .querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err) => {
                console.log("Qaytadan harakat qiling");
                
            })

        }       


        }


    });

    document.getElementById("clean-all").addEventListener("click", () => {
        axios.post("/delete-all", {delete_all: true})
        .then((response) => {
            alert(response.data.state);
            document.location.reload();
        })
        .catch((err) => {
            console.log("Qaytadan harakat qiling");
        });
    });    