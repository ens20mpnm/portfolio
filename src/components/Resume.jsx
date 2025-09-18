import React from 'react'

export default function Resume(){
  return (
    <div className="pdf-container">
      <a href="/MatildaPallin_Resume.pdf" download className="download-btn">Download as PDF</a>
      <a href="/MatildaPallin_Resume.pdf" target="_blank" rel="noreferrer">
        <img src="/CV-svensk2025.jpg" alt="PDF Preview" className="pdf-preview" />
      </a>
    </div>
  )
}
