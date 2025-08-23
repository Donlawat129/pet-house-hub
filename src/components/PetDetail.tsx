import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Home, AlertTriangle, ArrowLeft } from "lucide-react";
import { Pet } from "@/data/petData";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface PetDetailProps {
  pet: Pet;
  onBack: () => void;
}

const PetDetail = ({ pet, onBack }: PetDetailProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/pets">
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-6 bg-white/90 hover:bg-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Pets
        </Button>
        </Link>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-1/3">
              <ImageCarousel
                images={pet.images?.length ? pet.images : [pet.image]}
                alt={pet.name}
              />
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-primary mb-4">{pet.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{pet.description}</p>
            </div>
          </div>

          <Tabs defaultValue="food" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-primary-light/30 p-1 h-auto mb-8">
              <TabsTrigger 
                value="food" 
                className="flex items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-primary font-semibold"
              >
                <UtensilsCrossed className="w-5 h-5" />
                อาหาร
              </TabsTrigger>
              <TabsTrigger 
                value="habitat" 
                className="flex items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-primary font-semibold"
              >
                <Home className="w-5 h-5" />
                ที่อยู่อาศัย
              </TabsTrigger>
              <TabsTrigger 
                value="care" 
                className="flex items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:text-primary font-semibold"
              >
                <AlertTriangle className="w-5 h-5" />
                ข้อควรระวัง
              </TabsTrigger>
            </TabsList>

            <TabsContent value="food">
              <div className="grid gap-6">
                <Card className="border-2 border-primary-light/50 bg-gradient-primary/10">
                  <CardHeader>
                    <CardTitle className="text-primary">อาหารที่แนะนำ</CardTitle>
                    <CardDescription>อาหารหลักที่เหมาะสมและปลอดภัย</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.food.recommended.map((food, index) => (
                        <li key={index} className="text-muted-foreground">{food}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary-light/50 bg-gradient-secondary/10">
                  <CardHeader>
                    <CardTitle className="text-secondary">อาหารที่ชอบ</CardTitle>
                    <CardDescription>อาหารโปรดที่ให้เป็นของรางวัลได้</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.food.favorite.map((food, index) => (
                        <li key={index} className="text-muted-foreground">{food}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive/50 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-destructive">อาหารที่ห้าม</CardTitle>
                    <CardDescription>อาหารที่อันตรายและต้องหลีกเลี่ยง</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.food.forbidden.map((food, index) => (
                        <li key={index} className="text-muted-foreground">{food}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="habitat">
              <div className="grid gap-6">
                <Card className="border-2 border-accent-light/50 bg-gradient-accent/10">
                  <CardHeader>
                    <CardTitle className="text-accent">ที่อยู่ที่เหมาะสม</CardTitle>
                    <CardDescription>สภาพแวดล้อมที่ดีที่สุดสำหรับสัตว์เลี้ยง</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.habitat.suitable.map((habitat, index) => (
                        <li key={index} className="text-muted-foreground">{habitat}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary-light/50 bg-gradient-primary/10">
                  <CardHeader>
                    <CardTitle className="text-primary">สัตว์ที่อยู่ร่วมได้</CardTitle>
                    <CardDescription>เพื่อนร่วมบ้านที่เข้ากันได้</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.habitat.companions.map((companion, index) => (
                        <li key={index} className="text-muted-foreground">{companion}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-destructive/50 bg-destructive/5">
                  <CardHeader>
                    <CardTitle className="text-destructive">ที่อยู่ที่ไม่เหมาะสม</CardTitle>
                    <CardDescription>สภาพแวดล้อมที่ควรหลีกเลี่ยง</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.habitat.unsuitable.map((habitat, index) => (
                        <li key={index} className="text-muted-foreground">{habitat}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="care">
              <div className="grid gap-6">
                <Card className="border-2 border-accent-light/50 bg-gradient-accent/10">
                  <CardHeader>
                    <CardTitle className="text-accent">ข้อดี</CardTitle>
                    <CardDescription>จุดเด่นของการเลี้ยงสัตว์ชนิดนี้</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.care.pros.map((pro, index) => (
                        <li key={index} className="text-muted-foreground">{pro}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-cta/50 bg-cta/5">
                  <CardHeader>
                    <CardTitle className="text-cta">ข้อเสีย</CardTitle>
                    <CardDescription>สิ่งที่ต้องพิจารณาก่อนเลี้ยง</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.care.cons.map((con, index) => (
                        <li key={index} className="text-muted-foreground">{con}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary-light/50 bg-gradient-secondary/10">
                  <CardHeader>
                    <CardTitle className="text-secondary">คำแนะนำการดูแล</CardTitle>
                    <CardDescription>เคล็ดลับสำคัญในการเลี้ยงดู</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {pet.care.tips.map((tip, index) => (
                        <li key={index} className="text-muted-foreground">{tip}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;

function ImageCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;
  const wrap = (n: number) => (n + total) % total;

  // รองรับ swipe มือถือ
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) setIdx((i) => wrap(i + (dx < 0 ? 1 : -1)));
    startX.current = null;
  };

  // รองรับคีย์บอร์ด ← →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIdx((i) => wrap(i + 1));
      if (e.key === "ArrowLeft") setIdx((i) => wrap(i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  return (
    <div
      className="relative group rounded-2xl overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* รูป */}
      <img
        src={images[idx]}
        alt={alt}
        className="w-full aspect-square object-cover rounded-2xl transition-transform duration-300 will-change-transform transform-gpu shadow-lg"
        loading="eager"
        decoding="async"
      />

      {/* ไฟกั้นจาง ๆ ซ้าย/ขวา */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      {/* ปุ่มลูกศรจาง ๆ */}
      <button
        aria-label="Previous"
        onClick={() => setIdx((i) => wrap(i - 1))}
        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/70 hover:bg-white shadow backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-700">
          <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button
        aria-label="Next"
        onClick={() => setIdx((i) => wrap(i + 1))}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white/70 hover:bg-white shadow backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-700">
          <path fill="currentColor" d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
        </svg>
      </button>

      {/* จุดบอกตำแหน่ง */}
      {total > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full cursor-pointer transition ${i === idx ? "bg-sky-500" : "bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
