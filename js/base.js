let listCategory = document.querySelectorAll(".category");

listCategory.forEach(function(category, index, listCategory) {
    category.addEventListener("click",function(event){
        let imgCategory = category.querySelector("img");
        let textCategory = category.querySelector("p");
        if (textCategory.style.color != "#E6126B"){
            listCategory.forEach(function(anotherCategory, index, listCategory) {
                let textAnotherCategory = anotherCategory.querySelector("p");
                let imgAnotherCategory = anotherCategory.querySelector("img");
                textAnotherCategory.style.color = "#913B66";
                if (imgAnotherCategory.src != imgAnotherCategory.src.split("-select.png")[0])
                    imgAnotherCategory.src = imgAnotherCategory.src.split("-select.png")[0] += ".png"

                
            })
            imgCategory.src = imgCategory.src.split(".png")[0] += "-select.png";
            textCategory.style.color = "#E6126B";
            
        }
    }); 
  });