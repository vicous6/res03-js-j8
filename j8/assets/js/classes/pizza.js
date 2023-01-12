class Pizza{
    #ingredients= []
   
   
    
    constructor(ingredient){
        this.#ingredients =ingredient;
       
       
    }
        get ingredient(){
            
            return this.ingredient;
        }
   
  
        addIngredient(ingredient){
            
         this.#ingredients.push(ingredient)
        }
      removeIngredient(ingredient) {
        let newIngredienstTab = []
        for(let i = 0; this.#ingredients.length; i++) {
            if(ingredient !== this.#ingredients[i]) {
                newIngredientsTab.push(this.#ingredients[i]);
            }
        }

        this.#ingredients = newIngredientsTab;

    }
    
}


export { Pizza } ;