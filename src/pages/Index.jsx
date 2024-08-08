import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cat, Heart, Info } from "lucide-react";

const CatBreed = ({ name, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="mb-4 overflow-hidden">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <Button variant="secondary" size="sm">
                  Learn More
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Cat className="mr-2 h-4 w-4" />
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [funFact, setFunFact] = useState("");

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots or marbling.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and affectionate nature.", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Sphinx2_July_2006.jpg" },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  ];

  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the meow.",
    "A cat's nose print is unique, like a human's fingerprint.",
    "Cats can rotate their ears 180 degrees.",
  ];

  useEffect(() => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setFunFact(randomFact);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold mb-6 text-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Wonderful World of Cats
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-4 rounded-lg shadow-md mb-8"
        >
          <div className="flex items-center">
            <Info className="text-blue-500 mr-2" />
            <h3 className="text-lg font-semibold">Fun Cat Fact:</h3>
          </div>
          <p className="mt-2 text-gray-700">{funFact}</p>
        </motion.div>

        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <motion.img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Cat Overview</h2>
              <p className="text-xl text-gray-700 mb-4">
                Cats are fascinating creatures that have been domesticated for thousands of years. Known for their
                independence, agility, and affectionate nature, cats make wonderful companions for millions of people
                around the world.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                Their playful antics and soothing purrs have captured the hearts of humans across cultures. From their
                keen hunting instincts to their ability to form strong bonds with their human families, cats continue
                to enchant and surprise us.
              </p>
              <div className="flex justify-center mt-6">
                <Button className="mr-4">
                  <Heart className="mr-2 h-4 w-4" /> Love Cats
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
          </TabsContent>
          <TabsContent value="characteristics">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Characteristics of Cats</h2>
              <ul className="grid grid-cols-2 gap-4 mb-8 text-gray-700">
                {[
                  "Retractable claws for climbing and hunting",
                  "Excellent night vision",
                  "Flexible bodies and quick reflexes",
                  "Highly developed sense of smell and hearing",
                  "Independent yet affectionate personalities",
                  "Ability to purr, which can have healing properties",
                  "Excellent balance and agility",
                  "Self-grooming behavior",
                ].map((trait, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center bg-purple-50 p-3 rounded-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Cat className="text-purple-500 mr-2 h-5 w-5" />
                    {trait}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </TabsContent>
          <TabsContent value="breeds">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Popular Cat Breeds</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {catBreeds.map((breed, index) => (
                  <CatBreed key={index} {...breed} />
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Badge variant="secondary" className="text-lg py-2 px-4">
            Discover the Magic of Cats
          </Badge>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
