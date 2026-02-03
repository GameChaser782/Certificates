# Certificates

This repository contains my academic and professional certificates in a
recruiter-friendly format. The website renders everything in a clean layout with
an in-page PDF viewer.

## What you will find

- Important: AWS Certified Solutions Architect - Associate (featured first)
- Coursera Specializations: specialization certificates + course certificates
- Coursera Projects: guided project certificates
- Other: Inside-IIM certificates

## Repository layout

- `index.html`: page structure
- `styles.css`: styling and responsive layout
- `script.js`: certificate data + rendering logic
- `Important/`: highest-value certificate
- `Coursera Specializations/`: three specializations with courses
- `Coursera Projects/`: guided projects
- `Other/Inside-IIM/`: additional certificates

## Updating certificates

To add a new certificate:

1. Drop the PDF into an appropriate folder (or create a new folder).
2. Add a matching entry in `script.js` with the title and file path.
3. Keep Coursera IDs in filenames for traceability, but do not include them in
   the displayed title.

The site renders from `script.js`, so changes are immediate on refresh.

## Behavior notes

- The AWS certificate opens by default on page load.
- All certificate tiles are clickable and open the in-page PDF viewer.
- Specialization cards include a short summary and key skills.
