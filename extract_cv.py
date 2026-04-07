import pdfplumber

pdf_path = r'c:\Workspace\Labib\Projects\PortFolio Website\public\LabibTahmid_v1.pdf'

with pdfplumber.open(pdf_path) as pdf:
    text = ''
    for page in pdf.pages:
        text += page.extract_text()
    print(text)
