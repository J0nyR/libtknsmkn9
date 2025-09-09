import { useState } from 'react';
import { LibraryData, LibraryItem } from '../../data/libraryData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Book, Film, Presentation as PresentationIcon, User, Calendar, Barcode, Clock, FileText as PptIcon, Eye, Plus, Settings } from 'lucide-react';
import AddItemModal from './AddItemModal';
import ManageLinksModal from './ManageLinksModal';

interface SearchSectionProps {
  libraryData: LibraryData;
  onAddItem: (item: LibraryItem) => void;
}

const SearchSection = ({ libraryData, onAddItem }: SearchSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<LibraryItem[]>([]);
  const [searched, setSearched] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);

  const performSearch = () => {
    setSearched(true);
    const allItems = Object.values(libraryData).flat();
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = allItems.filter((item: LibraryItem) =>
      item.title.toLowerCase().includes(lowercasedTerm) ||
      item.author.toLowerCase().includes(lowercasedTerm) ||
      item.description.toLowerCase().includes(lowercasedTerm)
    );
    setResults(filtered);
  };

  const getTypeIcon = (type: string) => {
    if (type === 'book') return <Book className="h-5 w-5 text-blue-500" />;
    if (type === 'film') return <Film className="h-5 w-5 text-red-500" />;
    if (type === 'ppt') return <PresentationIcon className="h-5 w-5 text-green-500" />;
    return null;
  };

  return (
    <>
      <section id="pencarian" className="py-16 gradient-bg text-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🔍 Pencarian Universal</h2>
            <p className="text-xl opacity-90">Temukan buku, film, dan presentasi TKN dengan mudah</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && performSearch()}
                  placeholder="Cari buku, film, atau PPT..."
                  className="bg-white bg-opacity-20 text-white placeholder-blue-200 border-white/30"
                />
                <Button onClick={performSearch} className="bg-white text-blue-600 hover:bg-blue-100">
                  <Search className="mr-2 h-4 w-4" />Cari
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-6">
                <Button onClick={() => setIsAddItemModalOpen(true)} className="bg-white/20 hover:bg-white/30">
                  <Plus className="mr-2 h-4 w-4" /> Tambah Item
                </Button>
                <Button onClick={() => setIsLinksModalOpen(true)} className="bg-white/20 hover:bg-white/30">
                  <Settings className="mr-2 h-4 w-4" /> Kelola Link
                </Button>
              </div>
            </div>

            <div id="searchResults" className="space-y-4">
              {searched && results.length === 0 && (
                <div className="text-center py-12">
                  <Search className="text-white text-4xl mb-4 opacity-60 mx-auto" />
                  <h3 className="text-xl font-semibold text-white mb-2">Tidak ada hasil ditemukan</h3>
                  <p className="text-blue-200">Coba ubah kata kunci pencarian Anda</p>
                </div>
              )}
              {results.map(item => (
                <div key={item.id} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg shadow-md p-6 card-hover">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">{getTypeIcon(item.type)}<h3 className="text-xl font-semibold text-white">{item.title}</h3></div>
                      <p className="text-blue-100 mb-2 flex items-center"><User className="mr-2 h-4 w-4" />{item.author}</p>
                      <p className="text-blue-100 mb-2 flex items-center"><Calendar className="mr-2 h-4 w-4" />{item.year}</p>
                      {item.isbn && <p className="text-blue-100 mb-2 flex items-center"><Barcode className="mr-2 h-4 w-4" />ISBN: {item.isbn}</p>}
                      {item.duration && <p className="text-blue-100 mb-2 flex items-center"><Clock className="mr-2 h-4 w-4" />Durasi: {item.duration}</p>}
                      {item.slides && <p className="text-blue-100 mb-2 flex items-center"><PptIcon className="mr-2 h-4 w-4" />Slide: {item.slides}</p>}
                      <p className="text-white text-sm mt-4">{item.description}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end justify-between">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${item.status === 'available' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                        {item.status === 'available' ? 'Tersedia' : 'Out of Print'}
                      </span>
                      <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-100">
                        <Eye className="mr-2 h-4 w-4" />Detail
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AddItemModal 
        isOpen={isAddItemModalOpen} 
        onClose={() => setIsAddItemModalOpen(false)}
        onAddItem={onAddItem}
      />
      <ManageLinksModal isOpen={isLinksModalOpen} onClose={() => setIsLinksModalOpen(false)} />
    </>
  );
};

export default SearchSection;