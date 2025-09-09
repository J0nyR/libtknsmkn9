import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { LibraryItem } from '@/data/libraryData';
import { toast } from "sonner";

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddItem: (item: LibraryItem) => void;
}

const AddItemModal = ({ isOpen, onClose, onAddItem }: AddItemModalProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState<'book' | 'film' | 'ppt'>('book');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !author || !year || !category || !description) {
      toast.error("Harap isi semua field yang wajib diisi.");
      return;
    }

    const newItem: LibraryItem = {
      id: Date.now(),
      title,
      author,
      year,
      type,
      description,
      status: 'available',
      source: 'internal',
      link: '#',
      category: category,
    };
    
    onAddItem(newItem);
    toast.success(`"${title}" berhasil ditambahkan!`);
    onClose();
    // Reset form
    setTitle('');
    setAuthor('');
    setYear('');
    setType('book');
    setCategory('');
    setDescription('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tambah Item Baru</DialogTitle>
          <DialogDescription>
            Tambahkan buku, film, atau PPT baru ke dalam koleksi perpustakaan.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Judul</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="author" className="text-right">Penulis/Penerbit</Label>
            <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="year" className="text-right">Tahun</Label>
            <Input id="year" type="number" value={year} onChange={(e) => setYear(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type" className="text-right">Jenis</Label>
            <Select onValueChange={(value: 'book' | 'film' | 'ppt') => setType(value)} defaultValue={type}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Pilih jenis item" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="book">Buku</SelectItem>
                <SelectItem value="film">Film</SelectItem>
                <SelectItem value="ppt">PPT</SelectItem>
              </SelectContent>
            </Select>
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">Kategori</Label>
            <Select onValueChange={(value) => setCategory(value)} value={category}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="internal">Buku Internal</SelectItem>
                <SelectItem value="external">External Relevan</SelectItem>
                <SelectItem value="imo">IMO References</SelectItem>
                <SelectItem value="textbooks">Textbooks</SelectItem>
                <SelectItem value="bibliography">Bibliography</SelectItem>
                <SelectItem value="film-imo">Film IMO</SelectItem>
                <SelectItem value="film-relevan">Film Relevan</SelectItem>
                <SelectItem value="ppt-tkn">PPT TKN</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">Deskripsi</Label>
            <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>Batal</Button>
          <Button type="submit" onClick={handleSubmit}>Tambah Item</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemModal;