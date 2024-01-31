// Data
const recipes = [
  { title: "Idli sambar", 
    description: "Soft rice cakes (idlis) paired with a flavorful lentil stew, a classic and comforting South Indian dish.", 
    image: "images/idli.webp",
    long_description: "Embark on the culinary journey of crafting the quintessential Idli Sambar, a beloved South Indian dish that harmoniously combines soft and spongy idlis with a rich and flavorful lentil stew. Begin by soaking urad dal and rice, grinding them into a smooth batter, and letting it ferment overnight, resulting in the transformation of the mixture into delightful idlis through the magic of steam. Simultaneously, orchestrate the creation of the sambar by boiling pigeon peas with an assortment of vibrant vegetables such as drumsticks, carrots, and bell peppers. Infuse the concoction with the tanginess of tamarind pulp and a medley of spices, including coriander, cumin, and sambar powder, elevating the flavors to a delightful crescendo. In a separate pan, perform a tempering ritual, sizzling mustard seeds, cumin seeds, curry leaves, and a pinch of hing (asafoetida) in hot oil. This aromatic infusion is then carefully integrated into the simmering sambar, adding layers of nuanced flavors. The grand finale unfolds as the hot and pillowy idlis are served alongside the robust and nutrient-packed sambar, creating a gastronomic symphony that encapsulates the cultural richness and culinary finesse of this time-honored South Indian classic—a celebration of textures, aromas, and tastes that captivate the senses and bring joy to the dining experience.",
    instructions: 
    `Sambar Ingredients:
    <br>
    - Toor dal (Pigeon peas) - 1/2 cup<br>
    - Mixed vegetables - 1 cup (carrots, drumsticks, bell peppers, etc.)<br>
    - Tamarind - small lemon-sized ball<br>
    - Sambar powder - 2 tbsp<br>
    - Turmeric powder - 1/2 tsp<br>
    - Salt - to taste<br>
    - Water - as needed<br>
    - Coriander leaves - for garnish<br><br>
    Sambar Seasoning:<br>
    - Mustard seeds - 1 tsp<br>
    - Cumin seeds - 1/2 tsp<br>
    - Fenugreek seeds - 1/4 tsp<br>
    - Asafoetida (hing) - a pinch<br>
    - Curry leaves - a few<br>
    - Red chili powder - 1/2 tsp (optional)<br>
    - Cooking oil or ghee - 1-2 tbsp<br><br>
      Idli Ingredients:<br>
    - Idli batter - as needed (made from rice and urad dal)<br>
    - Idli steamer or idli maker`
  },

  { title: "Medu vada",
    description: "Crispy, golden-fried lentil donuts, a South Indian delight with a delightful crunch.",
    image: "images/medu-vada.webp" ,
    long_description: "Creating the perfect Medu Vada involves soaking urad dal in water for a few hours. After soaking, grind the dal into a smooth, thick batter, ensuring the right water balance. Enhance the flavor by adding cumin seeds, finely chopped green chilies, curry leaves, and salt to the batter. Wet your hands to shape the batter into donuts, forming the characteristic hole in the center. Deep-fry these vadas until golden-brown for a crispy exterior and soft interior. Serve the freshly fried Medu Vadas with coconut chutney or sambar, allowing the contrasting flavors to shine. This delightful South Indian snack beautifully combines the earthy notes of urad dal with aromatic spices, showcasing the culinary finesse of the region.",
    instructions:
    `
    Here are the ingredients typically used to make Medu Vada:
    <br> 
    - Urad dal (black gram) - 1 cup <br>
    - Water - as needed for soaking and grinding <br>
    - Salt - to taste <br>
    - Green chilies - 2-3, finely chopped <br>
    - Ginger - 1-inch piece, grated<br>
    - Curry leaves - a few, chopped<br>
    - Cumin seeds - 1 teaspoon<br>
    - Black pepper - 1/2 teaspoon (optional)<br>
    - Asafoetida (hing) - a pinch<br>
    - Water - as needed for batter consistency<br>
    - Oil - for deep frying`
  },

 { title: "Dosa",
   description: "Thin, crispy rice crepes served with a variety of savory fillings, a staple in South Indian cuisine.",
   image: "images/dosa.webp" ,
   long_description: "Creating the perfect Dosa involves a meticulous process that transforms simple ingredients into a culinary masterpiece. Start by combining rice and urad dal in a proportion suitable for fermentation, soaking them in water for several hours. After draining and grinding the soaked ingredients into a smooth batter, allow it to ferment overnight, cultivating the distinct tangy flavor and airy texture characteristic of a well-prepared dosa. Prior to cooking, add salt to the batter, adjusting to taste. When ready to make dosas, heat a flat griddle or non-stick pan to a medium-high temperature. Pour a ladle of batter onto the hot surface, spreading it in a circular motion to achieve a thin, even layer. Drizzle oil along the edges to enhance crispiness. Once the dosa develops golden-brown hues and a delicate lace-like pattern, flip it to cook the other side briefly. The result is a thin, crispy dosa with a slightly chewy interior. Serve hot with coconut chutney, sambar, or a tangy tomato-based dip. Dosa, a South Indian delicacy, offers a delightful interplay of textures and flavors, making it a versatile and beloved dish for breakfast or any time of the day.",
   instructions: 
        `Here are the ingredients typically used to make Dosa:
        <br>
        Dosa Batter:
        <br>
        - Urad dal (black gram) - 1 cup<br>
        - Rice - 2 cups<br>
        - Fenugreek seeds - 1/2 teaspoon<br>
        - Salt - to taste<br>
        - Water - as needed for grinding and thinning the batter<br>
        Dosa Filling (Masala Dosa):<br>
        
        - Potatoes - 3 medium-sized, boiled and mashed<br>
        - Mustard seeds - 1 teaspoon<br>
        - Urad dal (split black gram) - 1 teaspoon<br>
        - Chana dal (split chickpeas) - 1 teaspoon<br>
        - Curry leaves - a few<br>
        - Green chilies - 2-3, finely chopped<br>
        - Ginger - 1 teaspoon, grated<br>
        - Turmeric powder - 1/2 teaspoon<br>
        - Salt - to taste<br>
        - Oil - for sautéing` 
  },

 { title: "Malai kofta",
   description: " Creamy and rich dumplings in a flavorful tomato-based curry, a North Indian delicacy.",
   image: "images/malai-kofta.webp" ,
   long_description: "Crafting the exquisite dish of Malai Kofta is a culinary journey that combines rich flavors and delicate textures. Begin by preparing the koftas, where a mixture of mashed paneer, potatoes, and a selection of finely ground nuts is shaped into soft, indulgent balls. These koftas are deep-fried until golden brown, achieving a delightful crispy exterior while maintaining a luscious, melt-in-the-mouth consistency inside. Meanwhile, the velvety curry sauce is concocted by simmering tomatoes, onions, and cashews with aromatic spices like cardamom, cinnamon, and cloves. The resultant creamy base is then blended into a smooth, luxurious texture. As the koftas are gently immersed into this opulent sauce, they absorb the richness, imparting a symphony of flavors to the dish. Garnished with a drizzle of fresh cream and chopped cilantro, Malai Kofta is a decadent culinary creation that marries the nutty, savory goodness of koftas with the luxuriously smooth texture of the curry. Serve this regal dish with naan or steamed rice to experience the epitome of North Indian cuisine, where every bite is a celebration of flavor, texture, and culinary artistry.",
   instructions: 
   `Here are the ingredients typically used to make Malai Kofta:
   <br>
   For Koftas:<br>
   
   - Paneer (Indian cottage cheese) - 1 cup, grated<br>
   - Potatoes - 2 medium-sized, boiled and mashed<br>
   - Cashews - 2 tablespoons, finely chopped<br>
   - Raisins - 2 tablespoons<br>
   - Cornflour - 2 tablespoons<br>
   - All-purpose flour (Maida) - 2 tablespoons<br>
   - Garam masala - 1/2 teaspoon<br>
   - Red chili powder - 1/2 teaspoon<br>
   - Salt - to taste<br>
   - Oil - for deep frying<br><br>
   For Curry:<br>
   
   - Onion - 1 large, finely chopped<br>
   - Tomatoes - 2 medium-sized, pureed<br>
   - Cashews - 10-12, soaked in warm water<br>
   - Ginger-garlic paste - 1 tablespoon<br>
   - Heavy cream - 1/4 cup<br>
   - Ghee or oil - 2 tablespoons<br>
   - Bay leaves - 2<br>
   - Cinnamon stick - 1-inch piece<br>
   - Cardamom - 2 pods<br>
   - Cloves - 2<br>
   - Turmeric powder - 1/2 teaspoon<br>
   - Red chili powder - 1 teaspoon<br>
   - Coriander powder - 1 teaspoon<br>
   - Garam masala - 1/2 teaspoon<br>
   - Salt - to taste<br>
   - Water - as needed`
  },
 { title: "Matar paneer",
   description: " Cottage cheese and peas in a spiced tomato-based curry, a classic vegetarian dish.",
   image: "images/matar-paneer.webp" ,
   long_description: "Matar Paneer, a quintessential North Indian dish, is a delectable blend of soft paneer cubes and vibrant green peas immersed in a rich, aromatic tomato-based curry. Begin by sautéing finely chopped onions until golden brown, then add ginger-garlic paste and cook until fragrant. Introduce pureed tomatoes, stirring them into a silky consistency, and infuse the mixture with a medley of spices like coriander, cumin, turmeric, and garam masala. Allow this flavorful base to simmer until the oil begins to separate. Gently fold in the peas, allowing them to absorb the spices, before adding cubes of paneer, creating a harmonious union of textures. Let the curry simmer until the peas are tender and the paneer has absorbed the luscious flavors. Finish with a splash of cream for added richness and a sprinkle of chopped cilantro for freshness. Matar Paneer is a celebration of contrasts — the succulence of peas, the velvety paneer, and the robustness of the curry create a symphony of tastes. Serve this dish with warm naan or fragrant basmati rice, and indulge in the heartwarming flavors of this classic North Indian delight.",
   instructions:
  `
  Here are the ingredients typically used to make Matar Paneer:
  <br>
  - Paneer (Indian cottage cheese) - 200 grams, cubed<br>
  - Green peas (Matar) - 1 cup, fresh or frozen<br>
  - Tomatoes - 3 medium-sized, finely chopped or pureed<br>
  - Onion - 1 large, finely chopped<br>
  - Ginger-garlic paste - 1 tablespoon<br>
  - Green chilies - 1-2, finely chopped (adjust to taste)<br>
  - Cashews - 10-12, soaked in warm water<br>
  - Cumin seeds - 1 teaspoon<br>
  - Coriander powder - 1 teaspoon<br>
  - Red chili powder - 1/2 teaspoon (adjust to taste)<br>
  - Turmeric powder - 1/2 teaspoon<br>
  - Garam masala - 1/2 teaspoon<br>
  - Kasuri methi (dried fenugreek leaves) - 1 teaspoon, crushed<br>
  - Fresh coriander leaves - for garnish<br>
  - Cooking oil or ghee - 2 tablespoons<br>
  - Salt - to taste<br>
  - Water - as needed`
},
{ title: "Indori poha",
  description: "Flattened rice cooked with spices, vegetables, and herbs, a light and flavorful breakfast option.",
  image: "images/poha.jpg" ,
  long_description: "Poha, a beloved breakfast dish in India, is a flavorful and nutritious preparation made with flattened rice. Begin by rinsing the poha under cold water to soften it, then allow it to rest and absorb the moisture. In a pan, heat oil and add mustard seeds, cumin seeds, and curry leaves, allowing them to sizzle. Incorporate finely chopped onions and green chilies, sautéing until the onions turn translucent. Add turmeric powder and diced potatoes, cooking until the potatoes are tender. Introduce the soaked poha to this fragrant mixture, gently tossing to ensure even coating. Sprinkle with salt and garnish with fresh coriander, creating a medley of colors and flavors. For added texture and tang, you can incorporate peanuts and a squeeze of lime juice. Poha is not just a dish; it's a canvas of tastes — the softness of the flattened rice, the crunch of peanuts, and the blend of spices create a delightful symphony. Serve this light and wholesome dish with a side of yogurt or a dollop of coconut chutney, embracing the comforting and aromatic essence of a classic Indian breakfast.",
  instructions: `
  Here are the ingredients typically used to make Poha:
  <br>
  - Poha (flattened rice) - 1 cup <br>
  - Mustard seeds - 1 teaspoon<br>
  - Cumin seeds - 1/2 teaspoon<br>
  - Curry leaves - a few<br>
  - Green chilies - 2-3, finely chopped (adjust to taste)<br>
  - Onion - 1 medium-sized, finely chopped<br>
  - Turmeric powder - 1/2 teaspoon<br>
  - Potatoes - 1 medium-sized, boiled and diced (optional)<br>
  - Peanuts - 2 tablespoons<br>
  - Fresh coriander leaves - a handful, chopped<br>
  - Lemon - 1, juiced<br>
  - Sugar - 1/2 teaspoon (optional)<br>
  - Salt - to taste<br>
  - Oil - 2 tablespoons`
},
{ title: "Black forest cake",
  description: " Decadent chocolate cake layered with cherries and whipped cream, a classic dessert.",
  image: "images/black-forest.webp" ,
  long_description: "Crafting a decadent Black Forest Cake is a delightful journey of layering flavors and textures. Begin by preparing a moist chocolate sponge cake; whisk together flour, cocoa powder, sugar, eggs, and baking soda, then bake until it springs back to the touch. Once cooled, slice the cake horizontally into layers. Whip up a luscious cherry filling by simmering pitted cherries with sugar until a thick compote forms. For the whipped cream, beat heavy cream until soft peaks form, sweetening it with sugar. Assembling the cake involves placing one layer of chocolate sponge, spreading a generous amount of cherry filling, and topping it with a layer of whipped cream. Repeat this process for additional layers. The cake is then frosted with more whipped cream on the sides and decorated with chocolate shavings. Garnish the top with whole cherries for a visually appealing finish. The Black Forest Cake is a symphony of rich chocolate, tart cherries, and pillowy whipped cream, creating a harmonious dessert that is as stunning to look at as it is delightful to savor. Serve chilled, and indulge in the classic charm of this timeless confection.",
  instructions: `For the Chocolate Cake Layers:
  <br>
  - All-purpose flour - 1 and 3/4 cups<br>
  - Cocoa powder - 3/4 cup<br>
  - Baking powder - 2 teaspoons<br>
  - Baking soda - 2 teaspoons<br>
  - Salt - 1/2 teaspoon<br>
  - Sugar - 2 cups<br>
  - Eggs - 2<br>
  - Milk - 1 cup<br>
  - Vegetable oil - 1/2 cup<br>
  - Vanilla extract - 2 teaspoons<br>
  - Boiling water - 1 cup<br><br>
  For the Cherry Filling:
  <br>
  - Cherries - 2 cups, pitted and halved (fresh or canned)<br>
  - Sugar - 1/2 cup<br>
  - Cornstarch - 2 tablespoons<br>
  - Water - 1/4 cup<br><br>
  For the Whipped Cream Frosting:
  <br>
  - Heavy whipping cream - 2 cups, chilled<br>
  - Sugar - 1/2 cup<br>
  - Vanilla extract - 1 teaspoon`
},
{ title: "Samosa",
  description: "Triangular pastry filled with spiced potatoes, peas, and sometimes meat, a popular snack.",
  image: "images/samosa.webp" ,
  long_description: "Creating the perfect samosa is a culinary art that weaves together a crispy exterior and a flavorful, spiced filling. Begin by making the dough, combining all-purpose flour, salt, and ghee, gradually adding water to form a smooth, elastic dough. Let it rest while preparing the filling. Sauté finely chopped onions until golden, then add minced ginger, green chilies, and a blend of aromatic spices like cumin, coriander, and garam masala. Incorporate boiled and mashed potatoes along with peas, cooking until the mixture is well-spiced and fragrant. Roll the rested dough into thin circles and cut them in half to create semi-circles. Form each semi-circle into a cone, fill it with the spiced potato mixture, and seal the edges, creating the iconic triangular shape. Deep-fry the samosas until golden brown and enjoy these crispy delights with mint chutney or tamarind sauce. The symphony of textures, from the flaky crust to the flavorful, savory filling, makes the samosa a beloved snack, celebrated for its versatility and cultural significance in Indian cuisine.",
  instructions: `Here are the ingredients typically used to make Samosas:
  <br>
  For the Dough:
  <br>
  - All-purpose flour (Maida) - 2 cups<br>
  - Ghee or oil - 1/4 cup<br>
  - Salt - 1/2 teaspoon<br>
  - Water - as needed for kneading<br><br>
  For the Filling:
  <br>
  - Potatoes - 3 medium-sized, boiled and mashed<br>
  - Peas - 1/2 cup, boiled (fresh or frozen)<br>
  - Green chilies - 2-3, finely chopped (adjust to taste)<br>
  - Ginger - 1 teaspoon, grated<br>
  - Coriander leaves - a handful, chopped<br>
  - Cumin seeds - 1 teaspoon<br>
  - Coriander powder - 1 teaspoon<br>
  - Garam masala - 1/2 teaspoon<br>
  - Amchur (dry mango powder) - 1/2 teaspoon<br>
  - Red chili powder - 1/2 teaspoon (adjust to taste)<br>
  - Salt - to taste<br>
  - Cooking oil - for frying`
},
{ title: "Rava idli",
  description: "Soft and spongy steamed semolina cakes, a quick and tasty variation of traditional idlis.",
  image: "images/rava-idli.webp" ,
  long_description: "Rava Idli, a popular South Indian dish, offers a quick and delightful alternative to traditional idlis. Begin by roasting semolina (rava) in a pan until it turns golden and emits a nutty aroma. Allow it to cool before mixing it with whisked yogurt, finely chopped coriander, grated carrots, and a tempering of mustard seeds, urad dal, and curry leaves. This amalgamation creates a thick batter, which is left to rest for about 30 minutes, allowing the semolina to absorb the flavors. Just before steaming, incorporate baking soda for a light and fluffy texture. Grease the idli molds and pour the batter into them. Steam the idlis until they are cooked through and appear spongy. The result is a delightful plate of Rava Idlis, with a distinct grainy texture and a burst of flavors from the tempering and added ingredients. Serve hot with coconut chutney and sambar for a wholesome South Indian breakfast experience that beautifully balances the simplicity of preparation with the richness of taste and texture.",
  instructions: `Here are the ingredients typically used to make Rava Idli:
  <br>
  - Semolina (Rava or Sooji) - 1 cup<br>
  - Curd (Yogurt) - 1 cup<br>
  - Water - 1/2 cup (adjust as needed)<br>
  - Mustard seeds - 1 teaspoon<br>
  - Urad dal (split black gram) - 1 teaspoon<br>
  - Chana dal (split chickpeas) - 1 teaspoon<br>
  - Cashews - 1 tablespoon, chopped<br>
  - Green chilies - 1-2, finely chopped<br>
  - Ginger - 1 teaspoon, grated<br>
  - Curry leaves - a few, chopped<br>
  - Baking soda - 1/2 teaspoon<br>
  - Salt - to taste<br>
  - Ghee or oil - 1 tablespoon<br>
  - Fresh coriander leaves - for garnish (optional)`
},
{ title: " Aloo paratha",
description: " Indian flatbread stuffed with spiced mashed potatoes, a hearty and delicious dish.",
image: "images/aloo-paratha.webp" ,
long_description: "Crafting the perfect Aloo Paratha is an art that blends the simplicity of ingredients with the complexity of flavors. Begin by kneading a soft and pliable dough using whole wheat flour, water, and a pinch of salt. Meanwhile, prepare the stuffing by mashing boiled potatoes and combining them with finely chopped onions, green chilies, coriander leaves, and a medley of spices such as cumin, coriander, and garam masala, ensuring a harmonious blend. Divide the dough into small portions and roll each into a small disc, generously filling it with the flavorful potato mixture. Skillfully seal the edges, ensuring the stuffing remains intact during the cooking process. Roll out the stuffed dough into a flat, round paratha, taking care to achieve an even thickness. Cook the paratha on a hot griddle, brushing it with ghee or oil until golden-brown spots appear on both sides. The result is a delectable Aloo Paratha, offering a crispy exterior, tender layers, and a burst of savory, spiced potatoes that make each bite a culinary delight. Serve hot with yogurt, pickles, or a dollop of butter for a wholesome and satisfying experience.",
instructions: 
`
  Here are the ingredients typically used to make Aloo Paratha:
  <br>
  For the Paratha Dough: <br>

  - Whole wheat flour (atta) - 2 cups<br>
  - Water - as needed for kneading<br>
  - Salt - 1/2 teaspoon<br>
  - Ghee or oil - 1 tablespoon (optional)<br><br>
  For the Aloo Paratha Filling:<br>

  - Potatoes - 3 medium-sized, boiled and mashed<br>
  - Green chilies - 1-2, finely chopped (adjust to taste)<br>
  - Ginger - 1 teaspoon, grated<br>
  - Fresh coriander leaves - 2 tablespoons, finely chopped<br>
  - Cumin seeds - 1 teaspoon<br>
  - Garam masala - 1/2 teaspoon<br>
  - Red chili powder - 1/4 teaspoon (adjust to taste)<br>
  - Amchur (dry mango powder) - 1/2 teaspoon<br>
  - Salt - to taste<br>
  - Ghee or oil - for cooking
  `
}
];

// Function used to dynamically render cards
function renderRecipeCards(recipes) {
  const recipeGrid = document.getElementById("recipeGrid");
  recipeGrid.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 mb-4";

    card.innerHTML = `
      <div class="card">
        <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text">${recipe.description}</p>
          <a href="recipe-detail.html?index=${index}" class="btn btn-outline-dark">View Recipe</a>
        </div>
      </div>
    `;
    recipeGrid.appendChild(card);
  });
}
// Function to filter recipes based on search input
function filterRecipes() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchInput));
  console.log(filteredRecipes);
  renderRecipeCards(filteredRecipes);
}

// Initial rendering of recipe cards
renderRecipeCards(recipes);
