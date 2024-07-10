
let accordionSection = document.getElementsByClassName("accordion__section");

for (let i = 0; i < accordionSection.length; i++) {

    accordionSection[i].addEventListener("click",()=>{

        let text = accordionSection[i].getElementsByClassName("section__text")[0];
        let icon = accordionSection[i].getElementsByClassName("material-symbols-outlined")[0];
        
        text.classList.toggle("hide");
        text.classList.contains("hide")? ((icon.textContent = "add") && (icon.classList.remove("dark"))) : ((icon.textContent = "remove") && (icon.classList.add("dark")));

    });

};