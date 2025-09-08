import { Anchor, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Anchor className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Perpustakaan TKN</h3>
                <p className="text-gray-400 text-sm">SMKN 9 Pontianak</p>
              </div>
            </div>
            <p className="text-gray-400">
              Perpustakaan digital untuk Program Studi Teknika Kapal Niaga dengan koleksi berbasis standar internasional.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" />SMKN 9 Pontianak, Kalimantan Barat</p>
              <p className="flex items-center"><Phone className="mr-2 h-4 w-4" />+62 561 123456</p>
              <p className="flex items-center"><Mail className="mr-2 h-4 w-4" />perpustakaan@smkn9pontianak.sch.id</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-gray-400">
              <p>Senin - Jumat: 07:00 - 16:00</p>
              <p>Sabtu: 07:00 - 12:00</p>
              <p>Minggu: Tutup</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Perpustakaan Digital TKN - SMKN 9 Pontianak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;