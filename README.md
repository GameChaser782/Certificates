# Certificates

This repository contains my academic and professional certificates in a
recruiter-friendly format. The site is a static portfolio page with a responsive
in-page PDF viewer and collapsible certificate groups.

## What you will find

- Important: AWS Certified Solutions Architect - Associate (featured first)
- Coursera Specializations: 3 specialization blocks with specialization
  certificates + course certificates
- Coursera Projects: guided project certificates in a dedicated block
- Other: Inside-IIM certificates in a dedicated block

## Repository layout

- `index.html`: page structure
- `styles.css`: styling, responsive layout, and block/toggle states
- `script.js`: certificate data, rendering logic, and viewer sizing
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

The site renders from `script.js`, so content changes are immediate on refresh.

## Behavior notes

- The AWS certificate opens by default on page load.
- All certificate tiles are clickable and open the in-page PDF viewer.
- Desktop opens certificate groups by default; mobile starts them collapsed.
- Specialization blocks include a summary card and key skills.
- The script has defensive container fallbacks to avoid a full render failure if
  deployed HTML and JS are briefly out of sync during GitHub Pages rollout.

## Deployment note

GitHub Pages can temporarily serve a newer `script.js` with an older
`index.html`, or vice versa, during propagation. If you see missing blocks or
counts stuck at `0`, hard refresh once the deploy finishes. The current script
also includes fallbacks for legacy container IDs to reduce that risk.
