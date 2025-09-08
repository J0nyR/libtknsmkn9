import { Plus, Tags, Upload, BarChart } from 'lucide-react';

const adminFunctions = [
    { id: 'add-book', name: 'Tambah Buku', description: 'Tambahkan buku baru ke koleksi', icon: <Plus/> },
    { id: 'manage-categories', name: 'Kelola Kategori', description: 'Atur kategori buku', icon: <Tags/> },
    { id: 'upload-pdf', name: 'Upload PDF', description: 'Upload file PDF buku', icon: <Upload/> },
    { id: 'statistics', name: 'Statistik', description: 'Lihat statistik penggunaan', icon: <BarChart/> },
];

const AdminSection = () => {
  return (
    <section id="admin" className="py-16 gradient-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">⚙️ Panel Admin</h2>
          <p className="text-xl opacity-90">Kelola koleksi perpustakaan digital</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminFunctions.map(func => (
            <div key={func.id} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl shadow-lg p-6 card-hover cursor-pointer" onClick={() => alert(`Membuka fungsi: ${func.name}`)}>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  {func.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{func.name}</h3>
                <p className="text-blue-100 text-sm">{func.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminSection;