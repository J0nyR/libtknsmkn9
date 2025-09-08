import { useState } from 'react';
import Navbar from '../components/library/Navbar';
import HeroSection from '../components/library/HeroSection';
import CategorySection from '../components/library/CategorySection';
import FilmSection from '../components/library/FilmSection';
import PptSection from '../components/library/PptSection';
import SearchSection from '../components/library/SearchSection';
import AdminSection from '../components/library/AdminSection';
import Footer from '../components/library/Footer';
import { initialLibraryData } from '../data/libraryData';

type Page = 'beranda' | 'kategori' | 'film' | 'ppt' | 'pencarian' | 'admin';

const Index = () => {
  const [activePage, setActivePage] = useState<Page>('beranda');
  const [libraryData, setLibraryData] = useState(initialLibraryData);

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
      case 'admin':
        return <AdminSection />;
      default:
        return <HeroSection setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans">
      <Navbar setActivePage={setActivePage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default Index;