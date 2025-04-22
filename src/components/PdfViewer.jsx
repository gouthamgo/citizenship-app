import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// This is the critical line that was missing - worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  };

  const onDocumentLoadError = (err) => {
    console.error("PDF load error:", err);
    setLoading(false);
    setError("Failed to load PDF. Please make sure the file exists and is correctly formatted.");
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 p-4 rounded-md w-full mb-4 flex justify-center">
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
            <p className="mt-2 text-gray-500">Loading PDF...</p>
          </div>
        )}
        
        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-red-500">
            <p>{error}</p>
            <p className="mt-2 text-sm">Check that the PDF file is in your public folder and named correctly.</p>
          </div>
        )}
        
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          className="max-w-full"
        >
          {!loading && !error && (
            <Page 
              pageNumber={pageNumber} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="shadow-lg"
              scale={1.2}
            />
          )}
        </Document>
      </div>
      
      {!error && (
        <div className="flex items-center justify-between w-full border-t pt-4">
          <div className="text-sm text-gray-500">
            Page {pageNumber} of {numPages || '...'}
          </div>
          
          <div className="flex gap-4">
            <button 
              className="px-4 py-2 flex items-center gap-1 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={previousPage}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            
            <button 
              className="px-4 py-2 flex items-center gap-1 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
          
          <a 
            href={pdfUrl} 
            download="australian-citizenship-our-common-bond.pdf"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;