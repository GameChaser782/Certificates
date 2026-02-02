# Certificates

This repository contains my academic and professional certificates in a
recruiter-friendly format. Instead of browsing PDFs in folders, you can use the
GitHub Pages site to scan everything quickly and open the original documents.

## What you will find

- Applied Data Science with Python: specialization certificate + course
  certificates
- AWS Cloud Solution Architect: specialization certificate + course certificates
- Business Analytics: specialization certificate + course certificates
- Inside-IIM: certificates issued by Inside-IIM
- Projects: Coursera guided project certificates
- Standalone: AWS Certified Solutions Architect - Associate certificate

## GitHub Pages

The website lives at `index.html` with styling in `styles.css` and data in
`script.js`. Once GitHub Pages is enabled for this repo, the site will render
all certificates with filters and search.

If you want to publish:

1. In GitHub, open Settings for this repo.
2. Go to Pages.
3. Select `Deploy from a branch`, then choose `main` (or `master`) and `/ (root)`.
4. Save. GitHub will provide the public URL.

## Updating certificates

To add a new certificate:

1. Drop the PDF into an appropriate folder (or create a new folder).
2. Add a matching entry in `script.js` with the title, group, detail, and file
   path.

That is it. The website will pick it up automatically after the next commit.
