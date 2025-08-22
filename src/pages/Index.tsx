import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import InfoTabs from "@/components/InfoTabs";
import PetCard from "@/components/PetCard";
import heroImage from "@/assets/hero-pets.jpg";
import goldenRetriever from "@/assets/pets/golden-retriever.jpg";
import persianCat from "@/assets/pets/persian-cat.jpg";
import hamster from "@/assets/pets/hamster.jpg";
import parakeet from "@/assets/pets/parakeet.jpg";
import siameseCat from "@/assets/pets/siamese-cat.jpg";
import labrador from "@/assets/pets/labrador.jpg";
import rabbit from "@/assets/pets/rabbit.jpg";
import guineaPig from "@/assets/pets/guinea-pig.jpg";

const Index = () => {
  const petBreeds = [
    {
      image: goldenRetriever,
      name: "Golden Retriever",
      description: "สุนัขใจดี ชอบเล่นน้ำ เหมาะกับครอบครัว"
    },
    {
      image: persianCat,
      name: "แมวเปอร์เซีย",
      description: "แมวขนยาว นิสัยเงียบ ชอบนอนหลับ"
    },
    {
      image: hamster,
      name: "แฮมสเตอร์",
      description: "สัตว์เล็ก น่ารัก เลี้ยงง่าย"
    },
    {
      image: parakeet,
      name: "นกแก้วเล็ก",
      description: "นักสีสดใส พูดได้ เลี้ยงในกรง"
    },
    {
      image: siameseCat,
      name: "แมวสยาม",
      description: "แมวไทย ฉลาด พูดเก่ง"
    },
    {
      image: labrador,
      name: "ลาบราดอร์",
      description: "สุนัขซื่อสัตย์ ฉลาด เหมาะฝึกงาน"
    },
    {
      image: rabbit,
      name: "กระต่าย",
      description: "สัตว์อ่อนโยน เงียบ กินผักผลไม้"
    },
    {
      image: guineaPig,
      name: "หนูตะเภา",
      description: "สัตว์เลี้ยงแสนรู้ เสียงใส น่ารัก"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce-soft bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to the Pet House
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80 animate-float">
            ค้นหาวิธีการเลี้ยงสัตว์เลี้ยงได้ง่าย ๆ ครบทุกสายพันธุ์
          </p>
          <div className="relative mb-8 max-w-md mx-auto">
            <img 
              src={heroImage} 
              alt="Cute pets illustration" 
              className="rounded-2xl shadow-2xl animate-float"
            />
          </div>
          <Button 
            variant="hero" 
            size="xl"
            className="animate-wiggle hover:animate-none"
          >
            Start Now
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-bounce-soft text-primary">
            ค้นหาสัตว์เลี้ยงของคุณ
          </h2>
          <SearchBar />
        </div>
      </section>

      {/* Information Tabs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-wiggle text-secondary">
            ข้อมูลการเลี้ยงสัตว์
          </h2>
          <InfoTabs />
        </div>
      </section>

      {/* Pet Breeds Highlight */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-bounce-soft text-accent">
            สายพันธุ์ยอดนิยม
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {petBreeds.map((pet, index) => (
              <div key={index} className="animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                <PetCard
                  image={pet.image}
                  name={pet.name}
                  description={pet.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 text-center bg-gradient-cta">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-wiggle text-white">
            พร้อมเลี้ยงสัตว์ตัวใหม่หรือยัง?
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-float">
            มาค้นหาข้อมูลก่อนตัดสินใจ!
          </p>
          <Button 
            variant="outline" 
            size="xl"
            className="bg-white/90 text-cta border-white hover:bg-white hover:scale-105 transition-all duration-300 font-semibold"
          >
            Explore Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-primary text-primary-foreground text-center">
        <p className="text-lg">
          🐾 Pet House - Your Complete Pet Care Guide 🐾
        </p>
      </footer>
    </div>
  );
};

export default Index;