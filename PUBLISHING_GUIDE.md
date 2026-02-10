# Publishing Guide

Complete guide to publish your Website Copy Pro skill to npm and GitHub.

## Prerequisites

- [x] Node.js installed (v14+)
- [ ] npm account ([sign up here](https://www.npmjs.com/signup))
- [ ] GitHub account
- [ ] Git installed locally

---

## Step 1: Prepare for Publishing

### Update package.json

If publishing under your own name, update:

```json
{
  "name": "@yourusername/website-copy-pro",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/website-copy-pro.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/website-copy-pro/issues"
  },
  "homepage": "https://github.com/yourusername/website-copy-pro#readme"
}
```

Replace `yourusername` with your actual npm and GitHub username.

### Verify Files

Ensure these files exist:
```bash
ls -la
```

You should see:
- ✅ `package.json` - npm configuration
- ✅ `bin/install.js` - installation script
- ✅ `skill/SKILL.md` - main skill file
- ✅ `README.md` - documentation
- ✅ `LICENSE` - MIT license
- ✅ `.gitignore` - git ignore rules

---

## Step 2: Publish to npm

### A. Login to npm

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- One-time password (if 2FA enabled)

### B. Test the Package Locally

Before publishing, test installation:

```bash
# Create a symlink for local testing
npm link

# Test the command
npx website-copy-pro

# If it works, unlink
npm unlink
```

### C. Publish to npm

For scoped packages (@username/package):

```bash
npm publish --access public
```

For unscoped packages:

```bash
npm publish
```

**Note:** Scoped packages are private by default, so you need `--access public`.

### D. Verify Publication

Visit: `https://www.npmjs.com/package/@yourusername/website-copy-pro`

You should see your package page with README rendered.

### E. Test Installation from npm

```bash
npx @yourusername/website-copy-pro
```

This should install the skill to Claude's skills directory.

---

## Step 3: Publish to GitHub

### A. Initialize Git Repository

```bash
git init
```

### B. Create Initial Commit

```bash
git add .
git commit -m "Initial commit: Website Copy Pro skill for Claude

- Hostile validation system with 5 personas × 5 layers
- Outputs polished, battle-tested website copy
- Includes hero, problems, solution, benefits, social proof, FAQ, CTA
- npm installable via npx
"
```

### C. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `website-copy-pro`
3. Description: "Battle-tested website copy generator for Claude - hostile validation system"
4. Keep it **Public** (so others can install via npx)
5. **Don't** initialize with README (you already have one)
6. Click "Create repository"

### D. Connect Local to GitHub

```bash
# Add remote
git remote add origin https://github.com/yourusername/website-copy-pro.git

# Rename branch to main (if needed)
git branch -M main

# Push
git push -u origin main
```

### E. Verify on GitHub

Visit: `https://github.com/yourusername/website-copy-pro`

You should see:
- All files
- README rendered on homepage
- License badge

---

## Step 4: Add GitHub Badges (Optional)

Edit `README.md` and add at the top:

```markdown
# Website Copy Pro - Claude Skill

[![npm version](https://badge.fury.io/js/%40yourusername%2Fwebsite-copy-pro.svg)](https://badge.fury.io/js/%40yourusername%2Fwebsite-copy-pro)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@yourusername/website-copy-pro.svg)](https://www.npmjs.com/package/@yourusername/website-copy-pro)

> Battle-tested website copy generation using hostile validation methodology
```

Replace `yourusername` with your npm username (URL-encoded: `@` becomes `%40`).

Commit and push:

```bash
git add README.md
git commit -m "Add npm badges"
git push
```

---

## Step 5: Version Updates

When you make changes and want to publish an update:

### A. Update Version Number

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (1.0.0 → 1.0.1): Bug fixes, typos
  ```bash
  npm version patch
  ```

- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
  ```bash
  npm version minor
  ```

- **Major** (1.0.0 → 2.0.0): Breaking changes
  ```bash
  npm version major
  ```

This automatically:
- Updates `package.json`
- Creates a git commit
- Creates a git tag

### B. Push Changes

```bash
git push
git push --tags
```

### C. Publish New Version

```bash
npm publish --access public
```

### D. Create GitHub Release (Optional)

1. Go to your GitHub repo
2. Click "Releases" → "Create a new release"
3. Choose the tag created by `npm version`
4. Title: `v1.1.0` (match version number)
5. Description: List changes
6. Click "Publish release"

---

## Step 6: Promote Your Skill

### Share on Social

**Twitter/X:**
```
Just published a Claude skill for battle-tested website copy 🚀

✅ 5 hostile personas validate your copy
✅ 25 validation angles (clarity, credibility, friction, etc.)
✅ Outputs polished, conversion-optimized copy

Install: npx @yourusername/website-copy-pro

#AI #Copywriting #Claude
```

**LinkedIn:**
```
Published a new Claude skill: Website Copy Pro

Tired of website copy that doesn't convert? This skill runs your copy through hostile validation - 5 skeptical visitor personas × 5 analysis layers.

The result? Battle-tested copy that survives scrutiny and drives conversions.

Install with one command:
npx @yourusername/website-copy-pro

Perfect for founders, marketers, and copywriters who want data-informed copy, not guesswork.

#AI #Copywriting #MarketingTools
```

**Reddit:**

Post to:
- r/ClaudeAI
- r/SideProject
- r/InternetIsBeautiful
- r/Entrepreneur (if results-focused)

Example:
```
Title: [Project] Built a Claude skill that validates website copy against 5 hostile personas

I created a Claude skill that generates website copy, then tests it against 5 types of skeptical visitors (the scanner, the cynic, the confused bouncer, etc.).

It identifies conversion killers and rebuilds the copy until it passes all validation checks.

Install: npx @yourusername/website-copy-pro
GitHub: [link]

Open to feedback!
```

### Product Hunt Launch

1. Go to [Product Hunt](https://www.producthunt.com/posts/new)
2. Title: "Website Copy Pro for Claude"
3. Tagline: "Battle-tested website copy through hostile validation"
4. Description: [Use your README's intro]
5. Link: Your npm or GitHub page
6. Thumbnail: Create a visual showing the validation process

---

## Maintenance Checklist

### Monthly

- [ ] Check for security vulnerabilities: `npm audit`
- [ ] Update dependencies: `npm update`
- [ ] Test installation still works
- [ ] Review GitHub issues

### Per Update

- [ ] Test locally with `npm link`
- [ ] Update version: `npm version [patch|minor|major]`
- [ ] Update CHANGELOG.md (if you have one)
- [ ] Push to GitHub
- [ ] Publish to npm
- [ ] Create GitHub release
- [ ] Announce update

---

## Troubleshooting

### "You must verify your email"

Go to npmjs.com → Settings → verify your email before publishing.

### "You do not have permission to publish"

Make sure package name isn't taken. Try:
```bash
npm search @yourusername/website-copy-pro
```

If nothing shows, you're good. If taken, choose a different name.

### "Package name too similar"

npm prevents similar names to avoid confusion. Make yours more unique:
- `@yourusername/copy-validator-pro`
- `@yourusername/hostile-copy-validation`
- `@yourusername/conversion-copy-generator`

### "Failed to replace env"

Make sure you updated all instances of `yourusername` in:
- package.json (name, repository, bugs, homepage)
- README.md badges
- Installation instructions

### Users can't find the skill

After installation, users must:
1. Restart Claude if already open
2. Verify skill is in correct directory
3. Check SKILL.md has proper frontmatter:
   ```markdown
   ---
   name: website-copy-pro
   description: [description]
   ---
   ```

---

## Success Metrics

Track these to measure adoption:

### npm Stats
- Weekly downloads: [npmjs.com package page]
- Total downloads
- Dependents (who uses your package)

### GitHub Stats
- Stars
- Forks
- Issues opened
- Contributors

### Qualitative
- User testimonials
- Example websites using your copy
- Feedback in issues/discussions

---

## Advanced: CI/CD

Automate testing and publishing with GitHub Actions.

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Get NPM_TOKEN from npmjs.com → Access Tokens → Generate New Token

Add to GitHub Secrets: Settings → Secrets → New repository secret

Now when you create a GitHub release, it auto-publishes to npm.

---

## Resources

- [npm documentation](https://docs.npmjs.com/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Creating Claude Skills](https://docs.anthropic.com/claude/docs/claude-cli)

---

## Checklist: Ready to Publish?

- [ ] Updated `package.json` with your username
- [ ] Tested installation locally with `npm link`
- [ ] Created npm account and logged in
- [ ] Created GitHub account
- [ ] README is complete and accurate
- [ ] LICENSE file exists
- [ ] .gitignore excludes node_modules
- [ ] All files committed to git
- [ ] Published to npm
- [ ] Pushed to GitHub
- [ ] Added badges to README (optional)
- [ ] Shared on social media (optional)

---

**You're ready to share your skill with the world!** 🚀

Questions? Open an issue on GitHub or reach out to the community.
