import { Button } from "@/components/ui/button";

interface PetCardProps {
  image: string;
  name: string;
  description: string;
}

const PetCard = ({ image, name, description }: PetCardProps) => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-md pet-card-hover border border-primary-light/30">
      <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-gradient-hero">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-foreground">{name}</h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
      <Button 
        variant="soft" 
        size="sm" 
        className="w-full"
      >
        See Details
      </Button>
    </div>
  );
};

export default PetCard;