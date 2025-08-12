import React from 'react';

const About = () => {
  return (
    <section className="bg-[#FAF3E0] text-black py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-impact tracking-wide mb-4">ABOUT US</h2>

        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-[#d99058] rounded-full mx-1" />
          <div className="w-3 h-1 bg-[#d99058] rounded-full mx-1" />
          <div className="w-16 h-1 bg-[#d99058] rounded-full mx-1" />
        </div>

        <div className="text-left space-y-12 px-4 md:px-0">
          {/* Mission Statement */}
          <div>
            <h3 className="text-2xl text-[#d99058] font-bold mb-2">MISSION STATEMENT:</h3>
            <p className="text-black leading-relaxed">
            At karmooz Deli, we celebrate the vibrant spirit of Alexandria—a historic crossroads of cultures, flavors, and traditions. Inspired by the city’s rich Mediterranean heritage, we craft a dining experience where bold Egyptian flavors mingle with Greek, Italian, Levantine, and North African influences.  

            </p>

           
          </div>
          <div>
          Our commitment is to serve thoughtfully prepared dishes made with fresh and locally sourced ingredients to craft a modern dining experience that honors tradition while embracing innovation.  We believe in the power of food to connect people, spark curiosity, and create lasting memories. 

</div>
          <div>
          From our kitchen to your table, Karmooz Deli is more than a meal—it’s an invitation to savor the world.  

            </div>

          {/* Story */}
          <div>
            <h3 className="text-2xl text-[#d99058] font-bold mb-2">STORY:</h3>
            <p className="text-black leading-relaxed">
            Born from a shared passion for food, heritage, and the vibrant soul of Alexandria, Karmooz Deli is the dream of two lifelong friends, a real estate visionary, and a biotechnologist. Growing up in Egypt, they were disappointed by the watered-down, stereotyped versions of Mediterranean cuisine served abroad—dishes stripped of their true depth, history, and authenticity.  
            </p>
            
          </div>
          <div>Their mission? To reclaim the narrative. Drawing from family recipes, childhood memories of Alexandria’s bustling markets, and a scientist’s precision in crafting flavors, they’ve
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
