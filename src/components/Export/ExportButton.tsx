import React from 'react';
import { Download } from 'lucide-react';
import { ExportModal } from './ExportModal';
import { useExportModal } from '../../hooks/useExportModal';

export function ExportButton() {
  const { isOpen, openModal, closeModal } = useExportModal();

  return (
    <>
      <button
        onClick={openModal}
        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        aria-label="Open export data modal"
      >
        <Download className="h-4 w-4" />
        <span>Export Data</span>
      </button>

      {isOpen && <ExportModal onClose={closeModal} />}
    </>
  );
}