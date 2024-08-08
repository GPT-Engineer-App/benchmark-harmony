import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CatBreed = ({ name, description }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Index = () => {
  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive coloring and vocal nature." },
    { name: "Maine Coon", description: "Large, gentle giants with long, fluffy coats." },
    { name: "Persian", description: "Recognizable by their flat faces and long, luxurious fur." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">All About Cats</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
          alt="A cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures that have been domesticated for thousands of years. Known for their
          independence, agility, and affectionate nature, cats make wonderful companions for millions of people
          around the world.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Characteristics of Cats</h2>
        <ul className="list-disc list-inside mb-8 text-gray-700">
          <li>Retractable claws for climbing and hunting</li>
          <li>Excellent night vision</li>
          <li>Flexible bodies and quick reflexes</li>
          <li>Highly developed sense of smell and hearing</li>
          <li>Independent yet affectionate personalities</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
        {catBreeds.map((breed, index) => (
          <CatBreed key={index} name={breed.name} description={breed.description} />
        ))}
      </div>
    </div>
  );
};

export default Index;
