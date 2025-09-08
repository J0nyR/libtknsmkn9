import { useState } from 'react';
import { Anchor, Menu } from 'lucide-react';

type Page = 'beranda' | 'kategori' | 'film' | 'ppt' | 'pencarian' | 'admin';

interface NavbarProps {
  setActivePage: (page: Page) => void;
}

const navLinks: { id: Page; label: string }[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'kategori', label: 'Kategori Buku' },
  { id: 'film', label: 'Film' },
  { id: 'ppt', label: 'PPT TKN' },
  { id: 'pencarian', label: 'Pencarian' },
  { id: 'admin', label: 'Admin' },
];

const Navbar = ({ setActivePage }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setActivePage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Anchor className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Perpustakaan TKN</h1>
              <p className="text-xs text-gray-600">SMKN 9 Pontianak</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left py-2 text-gray-700"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;