const db = require("./connection");
const { User, Product, Tag } = require("../models");

db.once("open", async () => {
  await Tag.deleteMany();

  const tags = await Tag.insertMany([
    {
      tagName: "Protein",
      tagDescription:
        "Protein is essential for building muscle and maintaining a lean and healthy physique, optimize your daily nutrition for more power and cleaner energy with these proteins",
    },
    {
      tagName: "Rest & Recovery",
      tagDescription:
        "These products will promote an optimum daily rest phase, giving you more energy and power for your next big pump.",
    },
    {
      tagName: "Pre-Workouts & Fat-Burners",
      tagDescription:
        "Bring more fire to the gym and to your weight loss journey with these energy boosting products.",
    },
    {
      tagName: "Mass Gainers",
      tagDescription:
        "Build your body, better. These nutritionally balanced caloric beasts will help you put on the mass you want.",
    },
    {
      tagName: "Accessories",
      tagDescription:
        "Get the most from your supplement products with this official branded merch.",
    },
  ]);

  console.log("tags seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      prodName: "BROTEIN",
      prodDescrip:
        "This casein based protein will help you build denser and more powerful muscular structures during your daily resting phase. Vanilla Ice - 1.5lbs",
      prodImage: ["brotein1.png", "brotein2.png"],
      tags: [tags[0]._id, tags[1]._id],
      price: 42.99,
      quantity: 500,
    },
    {
      prodName: "MAN BEEF",
      prodDescrip:
        "This extreme mass gainer contains a whopping 1100 calories per serving. Available in peanut butter chocolate and only available in peanut butter chocolate, this will put more mass on your body than anything else, faster than anything else! Chocolate Peanut Butter - 3lbs",
      prodImage: ["man-beef1.png", "man-beef2.png"],
      tags: [tags[0]._id, tags[3]._id],
      price: 52.99,
      quantity: 500,
    },
    {
      prodName: "CLEAN AND JERK",
      prodDescrip:
        "This jerk chicken whey isolate is extremely low in calories and comes absolutely loaded with caffeine to unleash the inner beast! Get the cleanest source of energy on the market for those mythical lean gain! UNICORN MEAT JERK CHICKEN - 1.5lbs",
      prodImage: ["clean1.png", "clean2.png"],
      tags: [tags[0]._id, tags[2]._id],
      price: 64.99,
      quantity: 500,
    },
    {
      prodName: "GOODNIGHT",
      prodDescrip:
        "These melatonin capsules will ensure that you go down for the night and stay down for the night. Clinically proven to assist in a good nights sleep, these capsules are easy to eat and fast acting. 1 Bottle - 45 5mg capsules.",
      prodImage: ["goodnight1.png", "goodnight2.png"],
      tags: [tags[1]._id, tags[4]._id],
      price: 64.99,
      quantity: 500,
    },
    {
      prodName: "REBUILD",
      prodDescrip:
        "These highly concentrated branch chain amino acids will assist in the biological processes necessary to produce high density muscle fiber without the undue nutritional burdens. Mythical lean gains, take before and after a workout. Raspberry Sherbert Powder - 8oz",
      prodImage: ["rebuild1.png", "rebuild2.png"],
      tags: [tags[1]._id, tags[2]._id],
      price: 64.99,
      quantity: 500,
    },
    {
      prodName: "GO JUICE",
      prodDescrip:
        "Unlock the beast with GO JUICE - drink this before your workout to ramp up the energy to the absolute maximum. This comes with a laundry list of medical professional warnings, but feel free to disregard them and unlock your inner badass. Sewer Water - 15oz Bottle",
      prodImage: ["gojuice1.png", "gojuice2.png"],
      tags: [tags[2]._id, tags[3]._id],
      price: 4.99,
      quantity: 500,
    },
    {
      prodName: "BRICK SAUCE",
      prodDescrip:
        "This high calorie bbq sauce will add mass to your body regardless of what you're eating. Eggs? Sauced. Beef? Sauced. Your grandma's peach pie? Sauced, and adding mass to your body over the holidays. BRICK SAUCE Bbq Sauce - 15oz bottle",
      prodImage: ["brick1.png", "brick2.png"],
      tags: [tags[4]._id, tags[3]._id],
      price: 14.99,
      quantity: 500,
    },
    {
      prodName: "POWDA SHAKA",
      prodDescrip: "It's a 16 oz protein shaker, what do you expect?",
      prodImage: ["shake1.png", "shake2.png"],
      tags: [tags[4]._id, tags[0]._id],
      price: 14.99,
      quantity: 500,
    },
    {
      prodName: "BROBEANS",
      prodDescrip:
        "Way better than the coffee that that weird cat poops out, our BROBEANS will energize even the most slovenly and unmotivated. Take no excuses, drink our coffee.",
      prodImage: ["coffee1.png", "coffee2.png"],
      tags: [tags[4]._id, tags[2]._id],
      price: 24.99,
      quantity: 500,
    },
    {
      prodName: "BAG O' ROCKS",
      prodDescrip:
        "Kids love rocks! Get these rocks shipped directly to your home or office for a taste of the free range geographical liberty that only the stones of this great country get to experience. USDA Prime 100% American rocks. Imported from Mexico.",
      prodImage: ["rocks1.png", "rocks2.png"],
      tags: [tags[4]._id, tags[2]._id],
      price: 84.99,
      quantity: 500,
    },
    {
      prodName: "TAXIDERMY MARLIN",
      prodDescrip:
        "It's a big ol' stuffed fish. Looks great on your father in law's wall. You know, if you're looking for a gift, just sayin'.",
      prodImage: ["marlin1.png", "marlin2.png"],
      tags: [tags[0]._id, tags[1]._id],
      price: 14999.99,
      quantity: 500,
    },
    {
      prodName: "USED TIRE IRON",
      prodDescrip:
        "Flat tire? TOUGH! No excuses, jack that ride up and put on the donut with our full range of used Tire Irons",
      prodImage: ["tire1.png", "tire2.png"],
      tags: [tags[1]._id, tags[3]._id],
      price: 34.99,
      quantity: 500,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Daniel",
    lastName: "Kim",
    email: "dan@dan.com",
    password: "password123",
    orders: [
      {
        products: [products[0]._id, products[1]._id, products[2]._id],
      },
    ],
  });

  await User.create({
    firstName: "Patrick",
    lastName: "Sutcliffe",
    email: "pat@pat.com",
    password: "password123",
    orders: [
      {
        products: [products[3]._id, products[4]._id, products[5]._id],
      },
    ],
  });

  await User.create({
    firstName: "Zac",
    lastName: "Goad",
    email: "zax@zac.com",
    password: "password123",
    orders: [
      {
        products: [products[6]._id, products[7]._id],
      },
    ],
  });

  console.log("users seeded");

  process.exit();
});
