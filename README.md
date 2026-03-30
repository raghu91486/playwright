# Simple Playwright TypeScript Project

A minimal Playwright TypeScript project with a single test that navigates to the Tekion login page.

## 🚀 Setup

1. **Install dependencies:**
   ```bash
   cd simple-playwright-project
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 🧪 Run Tests

```bash
# Run tests (headless mode)
npm test

# Run tests with browser visible
npm run test:headed

# Run tests in UI mode (interactive)
npm run test:ui

# Debug mode
npm run test:debug

# Show test report
npm run report
```

## 📁 Project Structure

```
simple-playwright-project/
├── tests/
│   └── login-navigation.spec.ts    # Login navigation test
├── package.json                     # Dependencies
├── playwright.config.ts             # Playwright configuration
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # This file
```

## 🎯 What the Test Does

The test navigates to `https://preprodapp.tekioncloud.com/login` and:
- Waits for the page to load
- Verifies the URL contains "/login"
- Takes a screenshot (saved to `screenshots/login-page.png`)
- Logs success message to console

## 📸 Screenshots

Screenshots are saved to the `screenshots/` folder when tests run.

## 📊 Test Reports

After running tests, view the HTML report:
```bash
npm run report
```

## 🌐 Base URL

The base URL is configured in `playwright.config.ts`:
```typescript
baseURL: 'https://preprodapp.tekioncloud.com'
```

## 🔧 Customization

### Change browser:
Edit `playwright.config.ts` and add more projects:
```typescript
projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
]
```

### Add more tests:
Create new `.spec.ts` files in the `tests/` folder.

