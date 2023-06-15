export default function menu()
{
    const element = document.querySelector('#content');

    const div = document.createElement('div');
    div.setAttribute('id', 'main-content');

    const div_menu_header = document.createElement('div');
    div_menu_header.classList.add('menu-header');
    div_menu_header.classList.add('main-content-info');
    div_menu_header.textContent = 'Menu';

    div.appendChild(div_menu_header);

    const entree_header = document.createElement('h1');
    entree_header.classList.add('main-content-info');
    entree_header.classList.add('menu-subsection');
    entree_header.textContent = 'Entrees';

    div.appendChild(entree_header);


    const div_lasagna = document.createElement('div');
    div_lasagna.classList.add('main-content-info');
    const div_lasagna_header = document.createElement('div');
    div_lasagna_header.textContent = 'Lasagna';
    div_lasagna.appendChild(div_lasagna_header);
    const div_lasagna_desc = document.createElement('div');
    div_lasagna_desc.textContent = 'An Italian dish with layers of pasta, cheese sauce, and meat. It is very filling and sure to put a smile on your face.'
    div_lasagna.appendChild(div_lasagna_desc);
    const div_lasagna_price = document.createElement('div');
    div_lasagna_price.textContent = '$7';
    div_lasagna.appendChild(div_lasagna_price);


    div.appendChild(div_lasagna);


    const div_pizza = document.createElement('div');
    div_pizza.classList.add('main-content-info');
    const div_pizza_header = document.createElement('div');
    div_pizza_header.textContent = 'Pizza';
    div_pizza.appendChild(div_pizza_header);
    const div_pizza_desc = document.createElement('div');
    div_pizza_desc.textContent = 'A 14-inch pizza with pepperoni, mozzarella cheese, drizzle of olive oil and absolutely no pineapples.';
    div_pizza.appendChild(div_pizza_desc);
    const div_pizza_price = document.createElement('div');
    div_pizza_price.textContent = '$10';
    div_pizza.appendChild(div_pizza_price);

    div.appendChild(div_pizza);

    const div_spaghetti = document.createElement('div');
    div_spaghetti.classList.add('main-content-info');
    const div_spaghetti_header = document.createElement('div');
    div_spaghetti_header.textContent = 'Spaghetti';
    div_spaghetti.appendChild(div_spaghetti_header);
    const div_spaghetti_desc = document.createElement('div');
    div_spaghetti_desc.textContent = 'An italian dish comprised of spaghetti pasta and meat sauce made with olive oil, garlic, and half ground beef and half sausage.';
    div_spaghetti.appendChild(div_spaghetti_desc);
    const div_spaghetti_price = document.createElement('div');
    div_spaghetti_price.textContent = '$5';
    div_spaghetti.appendChild(div_spaghetti_price);

    div.appendChild(div_spaghetti);

    const dessert_header = document.createElement('h1');
    dessert_header.classList.add('main-content-info');
    dessert_header.classList.add('menu-subsection');
    dessert_header.textContent = 'Dessert';

    div.appendChild(dessert_header);


    const div_tiramisu = document.createElement('div');
    div_tiramisu.classList.add('main-content-info');
    const div_tiramisu_header = document.createElement('div');
    div_tiramisu_header.textContent = 'Tiramisu';
    div_tiramisu.appendChild(div_tiramisu_header);
    const div_tiramisu_desc = document.createElement('div');
    div_tiramisu_desc.textContent = 'A coffee flavored cake. It is made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.';
    div_tiramisu.appendChild(div_tiramisu_desc);
    const div_tiramisu_price = document.createElement('div');
    div_tiramisu_price.textContent = '$4';
    div_tiramisu.appendChild(div_tiramisu_price);

    div.appendChild(div_tiramisu);

    const div_cannoli = document.createElement('div');
    div_cannoli.classList.add('main-content-info');
    const div_cannoli_header = document.createElement('div');
    div_cannoli_header.textContent = 'Cannoli';
    div_cannoli.appendChild(div_cannoli_header);
    const div_cannoli_desc = document.createElement('div');
    div_cannoli_desc.textContent = 'A tube-shaped pastry filled with a sweet, creamy filling containing ricotta cheese.';
    div_cannoli.appendChild(div_cannoli_desc);
    const div_cannoli_price = document.createElement('div');
    div_cannoli_price.textContent = '$2';
    div_cannoli.appendChild(div_cannoli_price);

    div.appendChild(div_cannoli);

    element.appendChild(div);

}