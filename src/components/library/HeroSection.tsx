import { Ship, Library, Search, Globe, Film, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Page = 'beranda' | 'kategori' | 'film' | 'ppt' | 'pencarian';

interface HeroSectionProps {
  setActivePage: (page: Page) => void;
}

const HeroSection = ({ setActivePage }: HeroSectionProps) => {
  return (
    <section id="beranda" className="gradient-bg text-white py-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Ship className="text-6xl mb-6 opacity-90 mx-auto" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Selamat Datang</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-90">Perpustakaan Digital TKN</h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90">Program Studi Teknika Kapal Niaga</p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto mb-8">
            Selamat datang di Perpustakaan Digital TKN SMKN 9 Pontianak. Akses digital terhadap buku-buku , film-film , PPT wajib dan referensi berbasis kurikulum IMO dan standar internasional tersedia untuk mendukung pembelajaran Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <Library className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Koleksi Lengkap</h3>
            <p className="text-sm opacity-90">Akses ke ribuan buku digital berbasis standar internasional</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <Search className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Pencarian Mudah</h3>
            <p className="text-sm opacity-90">Temukan buku yang Anda butuhkan dengan sistem pencarian canggih</p>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6">
            <Globe className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Standar IMO</h3>
            <p className="text-sm opacity-90">Koleksi sesuai dengan standar International Maritime Organization</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button onClick={() => setActivePage('kategori')} className="bg-white text-blue-600 hover:bg-gray-100">
            <Library className="mr-2 h-4 w-4" />Jelajahi Koleksi
          </Button>
          <Button onClick={() => setActivePage('film')} className="bg-red-600 hover:bg-red-700">
            <Film className="mr-2 h-4 w-4" />Film TKN
          </Button>
          <Button onClick={() => setActivePage('ppt')} className="bg-green-600 hover:bg-green-700">
            <Presentation className="mr-2 h-4 w-4" />PPT TKN
          </Button>
          <Button onClick={() => setActivePage('pencarian')} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
            <Search className="mr-2 h-4 w-4" />Cari Buku
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;