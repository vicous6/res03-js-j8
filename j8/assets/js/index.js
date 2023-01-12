import { Ingredient } from './classes/ingredient.js';
import { Pizza } from './classes/pizza.js';



let Bacon = new Ingredient("Bacon","assets/img/bacon.png")
let Carotte = new Ingredient("Carotte","assets/img/carrots.png")
let Fromage = new Ingredient("Fromage","assets/img/cheese.png")
let Oeuf = new Ingredient("Oeuf","assets/img/egg.png")
let Aubergine = new Ingredient("Aubergine","assets/img/eggplant.png")
let FromageDeChèvre = new Ingredient("Fromage de chèvre","assets/img/goat-cheese.png")
let Miel = new Ingredient("Miel","assets/img/honey.png")
let Champignon = new Ingredient("Champignon","assets/img/mushroom.png")
let Olive = new Ingredient("Olive","assets/img/olive.png")
let Piment = new Ingredient("Piment","assets/img/pepper.png")
let PommeDeTerre = new Ingredient("Pomme de terre","assets/img/potato.png")
let Tomate = new Ingredient("Tomate","assets/img/tomato.png")


let availableIngredients = [Bacon,Carotte,Fromage,Oeuf,Aubergine,FromageDeChèvre,Miel,Champignon,Olive,Piment,PommeDeTerre,Tomate]


window.addEventListener("DOMContentLoaded", (event) => {
    
    
    // let choice = document.getElementsByClassName("choice")
    

        for(let i = 0 ; i < availableIngredients.length; i++){
            
            
           let liste = document.getElementById("liste")
           
              let li = document.createElement("li")
            //   li.classList.add('clickAble')
              let article = document.createElement("article")
                 article.classList.add('clickAble')
              let header = document.createElement("header")
              let figure = document.createElement("figure")
              let h3 = document.createElement("h3")
              let img = document.createElement("img")
              
              
              h3.textContent= availableIngredients[i].name;
              img.setAttribute("src", availableIngredients[i].file)
              
              figure.appendChild(img)
              
              header.appendChild(figure)
              header.appendChild(h3)
              
              article.appendChild(header)
              
                 li.appendChild(article)
              
              liste.appendChild(li)
            
            
           
        }
        
            
        let clickAble = document.getElementsByClassName("clickAble")
        let liste2 = document.getElementById("liste-2")
        console.log(clickAble , liste2)
        for(let i = 0 ; i < clickAble.length; i++){
            
            
            
            clickAble[i].addEventListener("click",function(){
                
                
              if(clickAble[i].classList.contains("on")===true){
                      let truc = document.getElementsByClassName(i)
                
                truc[0].remove()
                console.log("ok")
                  clickAble[i].classList.remove("on")
              } else{
                   
                  clickAble[i].classList.add("on")
                   
                   
                   
              let li = document.createElement("li")
              li.classList.add('clickAble')
              li.classList.add(i)
              let article = document.createElement("article")
              let header = document.createElement("header")
              let figure = document.createElement("figure")
              let h3 = document.createElement("h3")
              let img = document.createElement("img")
              
              
              h3.textContent= availableIngredients[i].name;
              img.setAttribute("src", availableIngredients[i].file)
              
              figure.appendChild(img)
              
              header.appendChild(figure)
              header.appendChild(h3)
              
              article.appendChild(header)
              
              li.appendChild(article)
              
              liste2.prepend(li)
            
              }
           
                
            })
            
            
            
            
        }
        
        

  });