# Edu-e-Lite Website

A responsive, static website for Edu-e-Lite, an academic learning centre focused on B.Tech Computer Science & Engineering, BCA and MCA students.

## Website features

- Responsive desktop and mobile layout
- About, programmes, subject areas, teaching approach and contact sections
- Engineering Mathematics highlighted as a core strength
- Core Computer Science, C/C++, Java, Python, Machine Learning and Deep Learning coverage
- Enquiry form that prepares an email using the visitor's default email application
- SEO metadata and a custom SVG favicon
- No build process, framework installation, database or server required

## Preview locally

1. Download and extract this project.
2. Open the `edu-e-lite-website` folder.
3. Double-click `index.html` to preview it in a browser.

For a local development server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish using GitHub Pages

1. Sign in to GitHub and create a new **public** repository, for example `edu-e-lite-website`.
2. Upload all files and folders from this project. Ensure `index.html` is in the repository's root.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then click **Save**.
6. Wait for GitHub Pages to publish the site. The published URL will appear in the Pages settings. It will usually look like `https://YOUR-USERNAME.github.io/edu-e-lite-website/`.

Whenever you update and push files to the `main` branch, GitHub Pages will publish the changes.

## Important before launch

- Confirm that the location text `Barisha, Kolkata, West Bengal` is correct.
- Add the institute's verified phone/WhatsApp number if you want visitors to contact by phone.
- The enquiry form uses `mailto:`. It opens the visitor's configured email application; it does not send or store form submissions by itself.
- Add your final logo, genuine classroom photographs and verified faculty details when available.
- If you purchase a custom domain, configure it in **Settings → Pages → Custom domain** and follow GitHub's DNS instructions. Do not change DNS records until the domain is registered and you are ready to connect it.

## Contact

Edu-e-Lite  
Email: eduelite.official2025@gmail.com  
Location shown on website: Barisha, Kolkata, West Bengal

## Editing content

- Main page content: `index.html`
- Design and colours: `styles.css`
- Mobile menu and enquiry behaviour: `script.js`
- Browser icon: `assets/favicon.svg`

The website intentionally does not claim unverified results, faculty credentials, class sizes, fees or schedules. Add only confirmed information.
