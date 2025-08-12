import React from "react";
import bg from "../../assets/menu-bg.jpg";

const menuData = {
  FOLDS: {
    desc: "(Savory-stuffed Pies)",
    items: [
      {
        name: "SMOKED SUPREME",
        price: "$18.99",
        desc: "Pepperoni, Mortadella, Turkey, Tomatoes, Green pepper, Olives, Ricotta, Mozzarella.",
      },
      {
        name: "ALEXANDRIAN HAWAWSHI",
        price: "$18.99",
        desc: "Ground beef and Lamb Mix, Mozzarella.",
      },
      {
        name: "THE DUO",
        price: "$18.99",
        desc: "Pastrami, Sogo’, Tomatoes, Green pepper, Olives, Ricotta, Mozzarella.",
      },
      {
        name: "CORDON BLEU",
        price: "$18.99",
        desc: "Chicken Tenders,  Ham, Turkey, Green Pepper, Provolone, Mozzarella.",
      },
      {
        name: "ALEXANDRIAN HAWAWSHI",
        price: "$15.99",
        desc: "Traditional Egyptian street food with spiced meat inside crispy bread.",
      },
      {
        name: "SOGO’",
        price: "$17.99",
        desc: "Egyptian Sausage,Tomatoes, Green pepper, Olives, Ricotta, Mozzarella.",
      },
      {
        name: "PASTRAMI",
        price: "$16.99",
        desc: "Pastrami, Tomatoes, Green pepper,Olives, Ricotta, Mozzarella.",
      },
      {
        name: "CHICKEN SHESH",
        price: "$16.99",
        desc: "Chargrilled Marinated Chicken, Green Pepper, Olives, Mozzarella.",
      },
      {
        name: "PEPPERONI",
        price: "$15.99",
        desc: "Pepperoni, Mozzarella, House-Made Marinara Sauce.",
      },
      {
        name: "CHICKEN TENDERS",
        price: "$15.99",
        desc: "Chicken Tenders, Tomatoes, Green pepper, Olives, Mozzarella.",
      },
      {
        name: "SPINACH CHEESE",
        price: "$15.99",
        desc: "Spinach, Olives,  Feta, Ricotta, Mozzarella.",
      },
    ],
  },
  SANDWICHES: {
    desc: "(FULL/HALF)",
    items: [
      {
        name: "THE ITALIAN CLASSIC",
        price: "$19.99/12.99",
        desc: "Salami, Pepperoni, Mortadella, Provolone, Arugula, Tomatoes, Onions, Olives, Basil, Aioli, Italian Vinaigrette, Italian Seasoning.",
      },
      {
        name: "THE MEDITERRANEAN MORTADELLA",
        price: "$18.99/11.99",
        desc: "Mortadella, Turkey, Mozzarella, Lettuce, Tomatoes, Basil, Olives, Aioli, Italian vinaigrette, Dried Oregano.",
      },
      {
        name: "MORTADELLA & MOZZARELLA MELT",
        price: "$18.99/11.99",
        desc: "Mortadella (double stack), Mozzarella, Parmesan, Tomato slices, Basil, Olive Oil.",
      },
      {
        name: "PASTRAMI SUPREME",
        price: "$18.99/11.99",
        desc: "Pastrami, Turkey, Mozzarella, Parmesan, Lettuce, Tomatoes, Pickles, Mayonnaise, Olive Oil, Dried Oregano.",
      },
      {
        name: " PICKLE LOVER'S PASTRAMI",
        price: "$17.99/10.99",
        desc: "Pastrami, Provolone, Pickles, Onions, Arugula, Aioli, Italian Vinaigrette.",
      },
      {
        name: "CHICKEN PARMESAN",
        price: "$18.99/11,99",
        desc: "Crispy Breaded Chicken, Marinara Sauce, Mozzarella, Parmesan.",
      },
      {
        name: "TURKEY & PROVOLONE",
        price: "$17.99/11.99",
        desc: "Turkey, Provolone, Lettuce, Tomatoes, Onions, Basil, Aioli.",
      },
      {
        name: "THE GARDEN GOURMET",
        price: "$17.99/10.99",
        desc: "Mozzarella, Parmesan,  Arugula, Lettuce, Tomatoes, Onions, Pickles, Olives, Basil, Aioli, Italian Vinaigrette, Dried Oregano, Italian Seasoning.",
      },
    ],
  },
  SLIDES: {
   
    items: [
      { name: "CHICKEN STRIPS (2)", price: "$5.99",  },
      { name: "BABA GHANOUJ", price: "$5.99",  },
      { name: "CHEESY FRIES", price: "$5.99", },
      { name: "FRIES", price: "$4.49",},
     
    ],
  },
  DESSERTS: {
   
    items: [
      { name: "TIRAMISU", price: "$7.99",},
      { name: "CHEESECAKE", price: "$6.99",  },
      { name: "BASBUSA", price: "$6.99", desc: "Semolina Cake" },
    ],
  },
  BEVERAGES: {
    
    items: [{ name: "COKE PRODUCTS", price: "$2.99", }],
  },
  EXTRAS: {
    desc: "(All sauces crafted in-house, with our signature touch)",
    items: [
      "GREEN HERB SAUCE",
      "SPICY TAHINI",
      "TAHINI",
      "HERBAL CRÈMA",
      "MARINARA",
      "GARLIC SAUSE",
      "ALOLI",
    ].map((name) => ({ name, price: "$0.99", })),
  },
};

const Section = ({ title, color, sectionDesc, items }) => (
  <div>
    <h2 className="bg-black text-white text-xl font-bold px-2">{title}</h2>
    {sectionDesc && <p className="text-sm text-gray-700 italic mt-1 mb-3 px-1">{sectionDesc}</p>}
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <div className="flex justify-between items-start font-semibold">
            <div>
              <span className="block">{item.name}</span>
              {item.desc && <span className="text-xs italic block text-gray-600">{item.desc}</span>}
            </div>
            <div className="text-right">
              <span className={`text-[${color}] font-bold`}>{item.price}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Menu = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center px-6 py-12"
      style={{
        backgroundImage: `url(${bg})`,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white/90 p-6 rounded-lg shadow-lg grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Section title="FOLDS" color="#DD8E3E" sectionDesc={menuData.FOLDS.desc} items={menuData.FOLDS.items} />
          <Section title="SLIDES" color="#DD8E3E" sectionDesc={menuData.SLIDES.desc} items={menuData.SLIDES.items} />
          <Section title="BEVERAGES" color="#DD8E3E" sectionDesc={menuData.BEVERAGES.desc} items={menuData.BEVERAGES.items} />
        </div>
        <div className="space-y-6">
          <Section title="SANDWICHES" color="#DD8E3E" sectionDesc={menuData.SANDWICHES.desc} items={menuData.SANDWICHES.items} />
          <Section title="DESSERTS" color="#DD8E3E" sectionDesc={menuData.DESSERTS.desc} items={menuData.DESSERTS.items} />
          <Section title="EXTRAS" color="#DD8E3E" sectionDesc={menuData.EXTRAS.desc} items={menuData.EXTRAS.items} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
