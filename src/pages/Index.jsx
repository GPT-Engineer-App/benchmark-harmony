import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CatBreed = ({ name, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats." },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur." },
    { name: "Bengal", description: "Wild-looking cats with leopard-like spots or marbling." },
    { name: "Sphynx", description: "Hairless cats known for their wrinkled skin and affectionate nature." },
  ];

  const catImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  ];

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

        <Carousel className="mb-8">
          <CarouselContent>
            {catImages.map((src, index) => (
              <CarouselItem key={index}>
                <img
                  src={src}
                  alt={`Cat ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg"
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
            <motion.p
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Cats are fascinating creatures that have been domesticated for thousands of years. Known for their
              independence, agility, and affectionate nature, cats make wonderful companions for millions of people
              around the world. Their playful antics and soothing purrs have captured the hearts of humans across cultures.
            </motion.p>
          </TabsContent>
          <TabsContent value="characteristics">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">Characteristics of Cats</h2>
              <ul className="list-disc list-inside mb-8 text-gray-700">
                <li>Retractable claws for climbing and hunting</li>
                <li>Excellent night vision</li>
                <li>Flexible bodies and quick reflexes</li>
                <li>Highly developed sense of smell and hearing</li>
                <li>Independent yet affectionate personalities</li>
                <li>Ability to purr, which can have healing properties</li>
                <li>Excellent balance and agility</li>
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
              {catBreeds.map((breed, index) => (
                <CatBreed key={index} name={breed.name} description={breed.description} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
