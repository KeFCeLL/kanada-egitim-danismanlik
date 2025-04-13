'use client';

import { useState } from 'react';

interface Dialog {
  id: string;
  title: string;
  content: string;
  type: 'popup' | 'notification' | 'banner';
  position: 'top' | 'bottom' | 'center';
  trigger: 'page_load' | 'scroll' | 'time' | 'exit_intent';
  isActive: boolean;
  startDate: string;
  endDate: string;
}

export default function DialogsPage() {
  const [dialogs, setDialogs] = useState<Dialog[]>([
    {
      id: '1',
      title: 'Hoş Geldiniz Mesajı',
      content: 'Kanada Kolay Vize\'ye hoş geldiniz! Size nasıl yardımcı olabiliriz?',
      type: 'popup',
      position: 'center',
      trigger: 'page_load',
      isActive: true,
      startDate: '2024-04-01',
      endDate: '2024-12-31',
    },
    {
      id: '2',
      title: 'Özel İndirim',
      content: 'Vize başvurularında %20 indirim fırsatını kaçırmayın!',
      type: 'banner',
      position: 'top',
      trigger: 'scroll',
      isActive: true,
      startDate: '2024-04-01',
      endDate: '2024-04-30',
    },
  ]);

  const [selectedDialog, setSelectedDialog] = useState<Dialog | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleActive = (id: string) => {
    setDialogs(dialogs.map(dialog => 
      dialog.id === id ? { ...dialog, isActive: !dialog.isActive } : dialog
    ));
  };

  const handleSave = (updatedDialog: Dialog) => {
    if (selectedDialog) {
      setDialogs(dialogs.map(dialog => 
        dialog.id === selectedDialog.id ? updatedDialog : dialog
      ));
    } else {
      setDialogs([...dialogs, { ...updatedDialog, id: Date.now().toString() }]);
    }
    setIsEditing(false);
    setSelectedDialog(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Diyalog Yönetimi</h1>
        <button
          onClick={() => {
            setSelectedDialog(null);
            setIsEditing(true);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
        >
          Yeni Diyalog Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dialogs List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Diyaloglar</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {dialogs.map((dialog) => (
              <div
                key={dialog.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedDialog(dialog)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{dialog.title}</h3>
                    <p className="text-sm text-gray-500">{dialog.content}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        {dialog.type}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        {dialog.position}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                        {dialog.trigger}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleActive(dialog.id);
                    }}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      dialog.isActive
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {dialog.isActive ? 'Aktif' : 'Pasif'}
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {dialog.startDate} - {dialog.endDate}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dialog Editor */}
        {selectedDialog && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Diyalog Düzenle</h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-blue-600 hover:text-blue-800"
              >
                {isEditing ? 'Kaydet' : 'Düzenle'}
              </button>
            </div>
            <div className="p-4 space-y-4">
              {isEditing ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleSave({
                      ...selectedDialog,
                      title: formData.get('title') as string,
                      content: formData.get('content') as string,
                      type: formData.get('type') as Dialog['type'],
                      position: formData.get('position') as Dialog['position'],
                      trigger: formData.get('trigger') as Dialog['trigger'],
                      startDate: formData.get('startDate') as string,
                      endDate: formData.get('endDate') as string,
                    });
                  }}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Başlık
                      </label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={selectedDialog.title}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        İçerik
                      </label>
                      <textarea
                        name="content"
                        defaultValue={selectedDialog.content}
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tip
                        </label>
                        <select
                          name="type"
                          defaultValue={selectedDialog.type}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        >
                          <option value="popup">Popup</option>
                          <option value="notification">Bildirim</option>
                          <option value="banner">Banner</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Pozisyon
                        </label>
                        <select
                          name="position"
                          defaultValue={selectedDialog.position}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        >
                          <option value="top">Üst</option>
                          <option value="bottom">Alt</option>
                          <option value="center">Orta</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tetikleyici
                      </label>
                      <select
                        name="trigger"
                        defaultValue={selectedDialog.trigger}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                      >
                        <option value="page_load">Sayfa Yüklendiğinde</option>
                        <option value="scroll">Kaydırma</option>
                        <option value="time">Zaman</option>
                        <option value="exit_intent">Çıkış Niyeti</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Başlangıç Tarihi
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          defaultValue={selectedDialog.startDate}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Bitiş Tarihi
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          defaultValue={selectedDialog.endDate}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Kaydet
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">{selectedDialog.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{selectedDialog.content}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-700">Tip:</span>
                      <span className="ml-2 text-sm text-gray-500">{selectedDialog.type}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Pozisyon:</span>
                      <span className="ml-2 text-sm text-gray-500">{selectedDialog.position}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Tetikleyici:</span>
                      <span className="ml-2 text-sm text-gray-500">{selectedDialog.trigger}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">Durum:</span>
                      <span className="ml-2 text-sm text-gray-500">
                        {selectedDialog.isActive ? 'Aktif' : 'Pasif'}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {selectedDialog.startDate} - {selectedDialog.endDate}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 