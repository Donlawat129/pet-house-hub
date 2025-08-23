import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import PetCard from "@/components/PetCard";
import PetDetail from "@/components/PetDetail";
import { petData, Pet } from "@/data/petData";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PetsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const filteredPets = petData.filter(pet =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pet.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handlePetSelect = (pet: Pet) => {
    setSelectedPet(pet);
  };

  const handleBack = () => {
    setSelectedPet(null);
  };

  if (selectedPet) {
    return <PetDetail pet={selectedPet} onBack={handleBack} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-bounce-soft bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            สัตว์เลี้ยงทั้งหมด
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            ค้นหาและเรียนรู้เกี่ยวกับสัตว์เลี้ยงมากกว่า 20 สายพันธุ์
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
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
              <p className="text-muted-foreground">
                ลองค้นหาด้วยคำอื่นดูสิ
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPets.map((pet, index) => (
              <div 
                key={pet.id} 
                className="animate-float" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PetCard
                  image={pet.image}
                  name={pet.name}
                  description={pet.description}
                  onSeeDetails={() => handlePetSelect(pet)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetsList;