

export const cvDownload = () => {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/uc?export=download&id=1diKW6cvRyEyjrVO0gD_z4CI469rPWLNp";
  link.download = "Anush_CV.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
