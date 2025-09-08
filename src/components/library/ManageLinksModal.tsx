import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getDriveLink, saveDriveLinks } from '@/lib/driveLinks';
import { getCategoryName } from '@/data/libraryData';
import { toast } from "sonner";

interface ManageLinksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  'imo', 'textbooks', 'bibliography', 'external', 'internal', 
  'film-imo', 'film-relevan', 'ppt-tkn'
];

const ManageLinksModal = ({ isOpen, onClose }: ManageLinksModalProps) => {
  const [links, setLinks] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      const loadedLinks: Record<string, string> = {};
      categories.forEach(cat => {
        loadedLinks[cat] = getDriveLink(cat);
      });
      setLinks(loadedLinks);
    }
  }, [isOpen]);

  const handleSave = () => {
    saveDriveLinks(links);
    toast.success("Link Google Drive berhasil disimpan!");
    onClose();
  };

  const handleChange = (category: string, value: string) => {
    setLinks(prev => ({ ...prev, [category]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Kelola Link Google Drive</DialogTitle>
          <DialogDescription>
            Masukkan URL folder Google Drive untuk setiap kategori.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {categories.map(cat => (
            <div className="grid grid-cols-4 items-center gap-4" key={cat}>
              <Label htmlFor={cat} className="text-right">
                {getCategoryName(cat)}
              </Label>
              <Input
                id={cat}
                value={links[cat] || ''}
                onChange={(e) => handleChange(cat, e.target.value)}
                className="col-span-3"
                placeholder="https://drive.google.com/..."
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={onClose}>Batal</Button>
          <Button type="submit" onClick={handleSave}>Simpan Perubahan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ManageLinksModal;