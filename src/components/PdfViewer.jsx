import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { pdfjs } from 'react-pdf';

// Use a locally hosted version of the worker
// Important: No dependency on CDN or external resources
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

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
            <div className="mt-4 p-4 bg-gray-50 border rounded text-xs max-w-md overflow-auto">
              <p className="font-semibold">Troubleshooting Steps:</p>
              <ol className="list-decimal pl-4 mt-2">
                <li>Verify the PDF file exists in your public folder</li>
                <li>Make sure the worker file exists at '/pdf.worker.js'</li>
                <li>Try a different PDF file as a test</li>
                <li>Check browser console for detailed errors</li>
              </ol>
            </div>
          </div>
        )}
        
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={null}
          className="max-w-full"
          options={{
            cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@5.1.91/cmaps/',
            cMapPacked: true,
          }}
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
      
      {!error && numPages && (
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