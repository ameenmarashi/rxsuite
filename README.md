# Rx Suite

Static marketing site for the Rx software family, led by System Rx and linked to the App Store pages for:

- System Rx
- Cleaner Rx
- Cyber Rx
- Connectivty Rx

## Local preview

Because this is a plain static site, any simple server works:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to GitHub

1. Initialize the repo:

   ```bash
   git init
   git add .
   git commit -m "Create Rx Suite landing site"
   ```

2. Create a new GitHub repository and connect it:

   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

## Deploy to Cloudflare Pages

1. In Cloudflare Pages, create a new project and connect the GitHub repository.
2. Use these settings:
   - Framework preset: `None`
   - Build command: leave empty
   - Build output directory: `/`
3. Deploy.

This project is fully static, so no special build step is required.
