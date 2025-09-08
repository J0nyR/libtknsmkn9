import { Presentation, Cog, Compass, Shield, Scale, FileText, Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PptSection = () => {
  const openGoogleDrive = (category: string) => {
    alert(`Membuka Google Drive untuk: ${category}. (Fungsi Demo)`);
  };

  return (
    <section id="ppt" className="py-16 gradient-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 PPT TKN</h2>
          <p className="text-xl opacity-90">Koleksi presentasi PowerPoint untuk pembelajaran Teknika Kapal Niaga</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg p-8 card-hover cursor-pointer" onClick={() => openGoogleDrive('ppt-tkn')}>
            <div className="text-center">
              <div className="w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Presentation className="text-white text-4xl" />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-6">Presentasi TKN</h3>
              <p className="text-green-100 text-lg mb-8 leading-relaxed">
                Koleksi lengkap presentasi PowerPoint yang mencakup semua mata pelajaran dan materi pembelajaran Program Studi Teknika Kapal Niaga SMKN 9 Pontianak.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-4"><Cog className="text-2xl text-green-200 mb-2 mx-auto" /><h4 className="font-semibold text-white mb-1">Mesin Kapal</h4><p className="text-green-200 text-sm">Sistem propulsi & auxiliary</p></div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4"><Compass className="text-2xl text-green-200 mb-2 mx-auto" /><h4 className="font-semibold text-white mb-1">Navigasi</h4><p className="text-green-200 text-sm">Sistem navigasi modern</p></div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4"><Shield className="text-2xl text-green-200 mb-2 mx-auto" /><h4 className="font-semibold text-white mb-1">Keselamatan</h4><p className="text-green-200 text-sm">Safety & emergency procedures</p></div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4"><Scale className="text-2xl text-green-200 mb-2 mx-auto" /><h4 className="font-semibold text-white mb-1">Stabilitas</h4><p className="text-green-200 text-sm">Ship stability & cargo handling</p></div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center text-green-100"><FileText className="mr-3 h-5 w-5" /><span>Format: PowerPoint (.pptx)</span></div>
                <div className="flex items-center justify-center text-green-100"><Download className="mr-3 h-5 w-5" /><span>Dapat diunduh untuk presentasi offline</span></div>
                <div className="flex items-center justify-center text-green-100"><Users className="mr-3 h-5 w-5" /><span>Siap untuk pembelajaran kelas</span></div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg">Buka Google Drive</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PptSection;