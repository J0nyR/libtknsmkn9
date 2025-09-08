import { Globe, Book, List, ExternalLink, School } from 'lucide-react';
import { LibraryData, getCategoryName } from '../../data/libraryData';
import { getDriveLink } from '../../lib/driveLinks';

interface CategorySectionProps {
  libraryData: LibraryData;
}

const categories = [
    { id: 'imo', name: 'IMO References (R)', description: 'Referensi resmi dari International Maritime Organization', icon: <Globe/> },
    { id: 'textbooks', name: 'Textbooks (T)', description: 'Buku teks utama untuk pembelajaran', icon: <Book/> },
    { id: 'bibliography', name: 'Bibliography (B)', description: 'Daftar pustaka dan referensi tambahan', icon: <List/> },
    { id: 'external', name: 'External Relevan', description: 'Buku eksternal yang relevan dengan TKN', icon: <ExternalLink/> },
    { id: 'internal', name: 'Buku Internal', description: 'Koleksi khusus SMKN 9 Pontianak', icon: <School/> },
];

const CategorySection = ({ libraryData }: CategorySectionProps) => {
  const openGoogleDrive = (category: string) => {
    const link = getDriveLink(category);
    if (link) {
      window.open(link, '_blank');
    } else {
      alert(`Link Google Drive untuk kategori "${getCategoryName(category)}" belum diatur. Silakan atur di Panel Admin.`);
    }
  };

  return (
    <section id="kategori" className="py-16 gradient-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📚 Kategori Buku</h2>
          <p className="text-xl opacity-90">Koleksi lengkap berdasarkan standar internasional</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map(cat => (
            <div key={cat.id} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg p-6 card-hover cursor-pointer" onClick={() => alert(`Menampilkan buku untuk kategori: ${cat.name}`)}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{cat.name}</h3>
                <p className="text-blue-100 text-sm mb-4 h-12">{cat.description}</p>
                <span className="inline-block bg-white bg-opacity-30 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {libraryData[cat.id]?.length || 0} Buku
                </span>
                <div className="mt-3">
                  <button onClick={(e) => { e.stopPropagation(); openGoogleDrive(cat.id); }} className="text-white hover:text-blue-200 text-sm font-medium">
                    Lihat di Google Drive
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;