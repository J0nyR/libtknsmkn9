import { useState } from 'react';
import Navbar from '../components/library/Navbar';
import HeroSection from '../components/library/HeroSection';
import CategorySection from '../components/library/CategorySection';
import FilmSection from '../components/library/FilmSection';
import PptSection from '../components/library/PptSection';
import SearchSection from '../components/library/SearchSection';
import Footer from '../components/library/Footer';
import { initialLibraryData, LibraryData, LibraryItem } from '../data/libraryData';

type Page = 'beranda' | 'kategori' | 'film' | 'ppt' | 'pencarian';

const Index = () => {
  const [activePage, setActivePage] = useState<Page>('beranda');
  const [libraryData, setLibraryData] = useState<LibraryData>(initialLibraryData);

  const handleAddItem = (item: LibraryItem) => {
    const categoryKey = item.category || (item.type === 'book' ? 'internal' : item.type === 'film' ? 'film-relevan' : 'ppt-tkn');

    setLibraryData(prevData => {
      const newCategoryData = [...(prevData[categoryKey] || []), item];
      return { ...prevData, [categoryKey]: newCategoryData };
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
        return <SearchSection libraryData={libraryData} onAddItem={handleAddItem} />;
      default:
        return <HeroSection setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Navbar 
        activePage={activePage}
        setActivePage={setActivePage} 
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;