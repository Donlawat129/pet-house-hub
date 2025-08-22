import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="ค้นหาสัตว์ที่ต้องการรู้ (ใส่สายพันธุ์เพื่อเจาะจง)"
            className="pl-10 pr-20 py-3 text-lg border-2 border-primary-light bg-white/90 backdrop-blur-sm hover:border-primary focus:border-primary transition-colors"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <Button 
              type="submit"
              variant="playful" 
              size="sm"
              className="h-8"
            >
              ค้นหา
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;