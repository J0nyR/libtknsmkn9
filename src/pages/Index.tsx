import { useState } from 'react';
import Navbar from '../components/library/Navbar';
import HeroSection from '../components/library/HeroSection';
import CategorySection from '../components/library/CategorySection';
import FilmSection from '../components/library/FilmSection';
import PptSection from '../components/library/PptSection';
import SearchSection from '../components/library/SearchSection';
import Footer from '../components/library/Footer';
import { initialLibraryData, LibraryData, LibraryItem } from '../data/libraryData';
import ManageLinksModal from '../components/library/ManageLinksModal';
import AddItemModal from '../components/library/AddItemModal';

type Page = 'beranda' | 'kategori' | 'film' | 'ppt' | 'pencarian';

const Index = () => {
  const [activePage, setActivePage] = useState<Page>('beranda');
  const [libraryData, setLibraryData] = useState<LibraryData>(initialLibraryData);
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);

  const handleAddItem = (item: LibraryItem) => {
    // This is a simplified logic. In a real app, you'd find the correct category for the item.
    // For now, we'll add it to a generic category like 'internal'.
    const category = item.type === 'book' ? 'internal' : item.type === 'film' ? 'film-relevan' : 'ppt-tkn';

    setLibraryData(prevData => {
      const newCategoryData = [...(prevData[category] || []), item];
      return { ...prevData, [category]: newCategoryData };
    });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'beranda':
        return <HeroSection setActivePage={setActivePage} />;
      case 'kategori':
        return <CategorySection libraryData={libraryData} />;
      case 'film':
        return <FilmSection />;
      case 'ppt':
        return <PptSection />;
      case 'pencarian':
        return <SearchSection libraryData={libraryData} />;
      default:
        return <HeroSection setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage} 
        onOpenAddModal={() => setIsAddItemModalOpen(true)}
        onOpenLinksModal={() => setIsLinksModalOpen(true)}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <ManageLinksModal isOpen={isLinksModalOpen} onClose={() => setIsLinksModalOpen(false)} />
      <AddItemModal 
        isOpen={isAddItemModalOpen} 
        onClose={() => setIsAddItemModalOpen(false)}
        onAddItem={handleAddItem}
      />
    </div>
  );
};

export default Index;