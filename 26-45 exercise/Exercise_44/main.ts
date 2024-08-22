function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
  }
  
  make_sandwich("chicken", "cheese");
  make_sandwich("chicken", "lettuce", "tomato");
  make_sandwich("chicken", "ketchup", "tomato", "mayo");
  
  