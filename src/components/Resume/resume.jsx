import React from 'react';

import path from 'node:path';
import fs from 'node:fs';

const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');

fs.copyFileSync(pdfWorkerPath, './dist/pdf.worker.js');

import { Document, Page } from 'react-pdf';

function Resume() {
  return (
    <div>
      <Document file="../public/Garrett-Gutierrez.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      </Document>
    </div>
  );
}

export default Resume;