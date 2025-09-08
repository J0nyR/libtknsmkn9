import { Globe, Film as FilmIcon, Video, Award, Ship, Anchor, Wrench, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getDriveLink } from '../../lib/driveLinks';
import { getCategoryName } from '../../data/libraryData';

const FilmSection = () => {
  const openGoogleDrive = (category: string) => {
    const link = getDriveLink(category);
    if (link) {
      window.open(link, '_blank');
    } else {
      alert(`Link Google Drive untuk kategori "${getCategoryName(category)}" belum diatur. Silakan atur di Panel Admin.`);
    }
  };

  return (
    <section id="film" className="py-16 gradient-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🎬 Koleksi Film TKN</h2>
          <p className="text-xl opacity-90">Film edukasi dan dokumenter untuk pembelajaran Teknika Kapal Niaga</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg p-8 card-hover cursor-pointer" onClick={() => openGoogleDrive('film-imo')}>
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Film IMO</h3>
              <p className="text-red-100 text-base mb-6 leading-relaxed">
                Koleksi film resmi dari International Maritime Organization (IMO) yang mencakup standar keselamatan, prosedur darurat, dan regulasi maritim internasional.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center text-red-100"><Video className="mr-2 h-4 w-4" /><span>Video Training & Safety</span></div>
                <div className="flex items-center justify-center text-red-100"><Award className="mr-2 h-4 w-4" /><span>Standar STCW</span></div>
                <div className="flex items-center justify-center text-red-100"><Ship className="mr-2 h-4 w-4" /><span>Maritime Procedures</span></div>
              </div>
              <div className="mt-6">
                <Button className="bg-white text-red-600 hover:bg-red-50">Buka Google Drive</Button>
              </div>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg p-8 card-hover cursor-pointer" onClick={() => openGoogleDrive('film-relevan')}>
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-6">
                <FilmIcon className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Film Relevan</h3>
              <p className="text-red-100 text-base mb-6 leading-relaxed">
                Film dokumenter dan edukasi yang relevan dengan dunia maritim, teknik perkapalan, dan industri pelayaran untuk memperkaya wawasan siswa TKN.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center text-red-100"><Anchor className="mr-2 h-4 w-4" /><span>Dokumenter Maritim</span></div>
                <div className="flex items-center justify-center text-red-100"><Wrench className="mr-2 h-4 w-4" /><span>Teknik Perkapalan</span></div>
                <div className="flex items-center justify-center text-red-100"><GraduationCap className="mr-2 h-4 w-4" /><span>Edukasi Pelayaran</span></div>
              </div>
              <div className="mt-6">
                <Button className="bg-white text-red-600 hover:bg-red-50">Buka Google Drive</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmSection;