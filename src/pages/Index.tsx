import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import PetCard from "@/components/PetCard";
import heroImage from "@/assets/hero-pets.jpg";
import { petData } from "@/data/petData";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Show first 8 pets for preview
  const previewPets = petData.slice(0, 8);
  
  // Filter pets based on search term
  const filteredPets = previewPets.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

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
          {/* <Button 
            variant="hero" 
            size="xl"
            className="animate-wiggle hover:animate-none"
          >
            Start Now
          </Button> */}
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-bounce-soft text-primary">
            ค้นหาสัตว์เลี้ยงของคุณ
          </h2>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Pet Breeds Preview */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-bounce-soft text-accent">
            สายพันธุ์ยอดนิยม
          </h2>
          
          {searchTerm && (
            <p className="text-center mb-8 text-lg text-muted-foreground">
              พบ {filteredPets.length} ผลลัพธ์สำหรับ "{searchTerm}"
            </p>
          )}
          
          {filteredPets.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                ไม่พบสัตว์เลี้ยงที่ค้นหา
              </p>
              <p className="text-muted-foreground mb-6">
                ลองค้นหาด้วยคำอื่นหรือดูสัตว์เลี้ยงทั้งหมด
              </p>
              <Link to="/pets">
                <Button variant="playful" size="lg">
                  ดูสัตว์เลี้ยงทั้งหมด
                </Button>
              </Link>
            </div>
          )}

          {filteredPets.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPets.map((pet, index) => (
                <div key={pet.id} className="animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <PetCard
                    image={pet.image}
                    name={pet.name}
                    description={pet.description}
                    onSeeDetails={() => window.location.href = '/pets'}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 text-center bg-gradient-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-float text-white">
            ดูสัตว์เลี้ยงทั้งหมดกว่า 20 สายพันธุ์
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-float">
            เรียนรู้ข้อมูลครบถ้วนก่อนตัดสินใจเลี้ยง!
          </p>
          <Link to="/pets">
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/90 text-cta border-white hover:bg-white hover:scale-105 transition-all duration-300 font-semibold"
            >
              Explore All Pets
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer
      <footer className="py-8 px-4 bg-primary text-primary-foreground text-center bg-gradient-secondary">
        <p className="text-lg">
          🐾 Pet House - Your Complete Pet Care Guide 🐾
        </p>
      </footer> */}
    </div>
  );
};

export default Index;