import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Home, AlertTriangle } from "lucide-react";

const InfoTabs = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="food" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-primary-light/30 p-1 h-auto">
          <TabsTrigger 
            value="food" 
            className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:text-primary font-semibold"
          >
            <UtensilsCrossed className="w-4 h-4" />
            อาหาร
          </TabsTrigger>
          <TabsTrigger 
            value="habitat" 
            className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:text-primary font-semibold"
          >
            <Home className="w-4 h-4" />
            ที่อยู่อาศัย
          </TabsTrigger>
          <TabsTrigger 
            value="precautions" 
            className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:text-primary font-semibold"
          >
            <AlertTriangle className="w-4 h-4" />
            ข้อควรระวัง
          </TabsTrigger>
        </TabsList>

        <TabsContent value="food" className="mt-6">
          <Card className="border-2 border-primary-light/50 bg-gradient-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <UtensilsCrossed className="w-5 h-5" />
                ข้อมูลอาหาร
              </CardTitle>
              <CardDescription>
                เรียนรู้เกี่ยวกับอาหารที่เหมาะสมสำหรับสัตว์เลี้ยงของคุณ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">อาหารที่ควรให้</h4>
                <p className="text-sm text-muted-foreground">อาหารแห้งคุณภาพดี, เนื้อสด, ผักและผลไม้ที่ปลอดภัย</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">อาหารโปรด</h4>
                <p className="text-sm text-muted-foreground">ขนมสำหรับสัตว์เลี้ยง, อาหารที่มีโปรตีนสูง</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">อาหารที่ควรหลีกเลี่ยง</h4>
                <p className="text-sm text-muted-foreground">ช็อกโกแลต, หัวหอม, กระเทียม, และอาหารที่มีน้ำตาลมาก</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="habitat" className="mt-6">
          <Card className="border-2 border-secondary-light/50 bg-gradient-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Home className="w-5 h-5" />
                ที่อยู่อาศัย
              </CardTitle>
              <CardDescription>
                สภาพแวดล้อมที่เหมาะสมสำหรับสัตว์เลี้ยง
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">พื้นที่ที่เหมาะสม</h4>
                <p className="text-sm text-muted-foreground">บ้านที่มีพื้นที่เพียงพอ, มีสวนหรือลานกว้าง</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-accent mb-2">สัตว์ที่อยู่ร่วมได้</h4>
                <p className="text-sm text-muted-foreground">สัตว์เลี้ยงชนิดเดียวกัน หรือสัตว์ที่มีนิสัยอ่อนโยน</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-destructive mb-2">สภาพแวดล้อมที่ไม่เหมาะ</h4>
                <p className="text-sm text-muted-foreground">พื้นที่แคบ, เสียงดังมาก, อุณหภูมิสุดขั้ว</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="precautions" className="mt-6">
          <Card className="border-2 border-accent-light/50 bg-gradient-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <AlertTriangle className="w-5 h-5" />
                ข้อควรระวัง
              </CardTitle>
              <CardDescription>
                ข้อดี ข้อเสีย และคำแนะนำในการดูแล
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">ข้อดี</h4>
                <p className="text-sm text-muted-foreground">เป็นเพื่อนที่ดี, ช่วยลดความเครียด, สร้างความสุข</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-cta mb-2">ข้อเสีย</h4>
                <p className="text-sm text-muted-foreground">ต้องใช้เวลาและค่าใช้จ่าย, อาจมีปัญหาสุขภาพ</p>
              </div>
              <div className="bg-white/70 p-4 rounded-lg">
                <h4 className="font-semibold text-secondary mb-2">คำแนะนำสำคัญ</h4>
                <p className="text-sm text-muted-foreground">ตรวจสุขภาพสม่ำเสมอ, ฝึกอบรม, ให้ความรักและความเอาใจใส่</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InfoTabs;