import requests
import re
from PyPDF2 import PdfReader

url = "https://www.fnb.co.za/downloads/pricing-guides/FNB-Easy-Zero-Account.pdf"
response = requests.get(url)

with open("FNB-Easy-Zero-Account.pdf", "wb") as pdf_file:
    pdf_file.write(response.content)

print("PDF dowload")

reader = PdfReader("FNB-Easy-Zero-Account.pdf")
text = ""

for page in reader.pages:
    text += page.extract_text()

print("Exctracted Text:\n", text)
