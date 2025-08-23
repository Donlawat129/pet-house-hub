import { useParams, Link } from "react-router-dom";
import { petData } from "@/data/petData";
import PetDetail from "@/components/PetDetail";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";  

export default function PetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const pet = petData.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); // 👈 เพิ่ม
  }, [id]);

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow">
          <h1 className="text-2xl font-bold mb-3">ไม่พบข้อมูลสัตว์เลี้ยง</h1>
          <p className="text-muted-foreground mb-6">
            อาจถูกลบออกหรือพิมพ์ลิงก์ไม่ถูกต้อง
          </p>
          <Link to="/pets">
            <Button variant="playful" size="lg">กลับไปดูรายการทั้งหมด</Button>
          </Link>
        </div>
      </div>
    );
  }

  // === Breadcrumb + Content ===
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Breadcrumb
        <nav
            className="max-w-6xl mx-auto px-4 pt-6"
            aria-label="Breadcrumb"
        >
            <ol className="flex items-center gap-2 text-sm">
            <li>
                <Link
                to="/"
                className="text-slate-600 hover:text-sky-700 hover:underline"
                >
                หน้าแรก
                </Link>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            <li>
                <Link
                to="/pets"
                className="text-slate-600 hover:text-sky-700 hover:underline"
                >
                สัตว์เลี้ยงทั้งหมด
                </Link>
            </li>
            <li aria-hidden className="text-slate-400">/</li>
            <li aria-current="page" className="font-semibold text-sky-700">
                {pet.name}
            </li>
            </ol>
        </nav> */}

      {/* เนื้อหารายละเอียด */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <PetDetail pet={pet} onBack={undefined} />
      </div>
    </div>
  );
}
