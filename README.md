# Advanced Blockchain Security Website

Enterprise-grade blockchain security solutions website built with Next.js 15, Tailwind CSS, and Payload CMS.

## Features

- **Modern Next.js 15** with App Router
- **Payload CMS** for wiki content management
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **TypeScript** for type safety
- **SEO Optimized** with proper meta tags
- **Responsive Design** for all devices
- **Dark Theme** with professional corporate styling

## Project Structure

```
advancedblockchainsecurity/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── wiki/               # Wiki section
│   │       ├── page.tsx        # Wiki index
│   │       └── [slug]/         # Dynamic wiki articles
│   │           └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation
│   │   ├── Footer.tsx          # Footer component
│   │   ├── sections/           # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Products.tsx
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Badge.tsx
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── payload.config.ts           # Payload CMS configuration
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   cd /Users/pwner/Git/abs-website/advancedblockchainsecurity
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and update:
   - `PAYLOAD_SECRET`: Generate a secure random string
   - `DATABASE_URI`: Your MongoDB connection string
   - `NEXT_PUBLIC_SERVER_URL`: Your site URL

4. **Set up MongoDB**

   **Option A: Local MongoDB**
   ```bash
   # macOS with Homebrew
   brew install mongodb-community
   brew services start mongodb-community

   # Or use Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

   **Option B: MongoDB Atlas (Recommended)**
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create a free cluster
   - Get your connection string
   - Update `DATABASE_URI` in `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

   The site will be available at:
   - Frontend: http://localhost:5000
   - Payload Admin: http://localhost:5000/admin

6. **Create admin user**
   - Navigate to http://localhost:5000/admin
   - Create your first admin user account
   - Start adding wiki articles!

## Using Payload CMS

### Accessing the Admin Panel

1. Navigate to http://localhost:5000/admin (or your production URL + /admin)
2. Sign in with your admin credentials
3. Click "Wiki" to manage wiki articles

### Creating a Wiki Article

1. Click "Wiki" → "Create New"
2. Fill in the fields:
   - **Title**: Article headline
   - **Slug**: URL-friendly version (e.g., "understanding-reentrancy")
   - **Category**: Select from predefined categories
   - **Excerpt**: Short description for SEO
   - **Content**: Full article content (supports rich text)
   - **Tags**: Add relevant tags
   - **Difficulty**: Beginner/Intermediate/Advanced/Expert
   - **Read Time**: Estimated minutes to read
   - **Status**: Draft or Published

3. Click "Save" (saves as draft) or "Publish"
4. Your article will appear at: `/wiki/your-slug`

### Wiki Categories

- Smart Contract Security
- DeFi Security
- Blockchain Fundamentals
- Security Tools
- Best Practices
- Common Vulnerabilities
- Incident Response
- Compliance

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server on port 3001

# Production
npm run build        # Build for production
npm run start        # Start production server

# Other
npm run lint         # Run ESLint
```

### Adding New Sections

To add a new section to the homepage:

1. Create a new component in `src/components/sections/`
2. Export it from `src/components/sections/index.ts`
3. Import and add it to `src/app/page.tsx`

Example:
```tsx
// src/components/sections/NewSection.tsx
export function NewSection() {
  return (
    <section className="py-24 bg-dark-900">
      {/* Your content */}
    </section>
  )
}
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* Your primary colors */ },
  secondary: { /* Your secondary colors */ },
  // ...
}
```

### Fonts

The site uses:
- **Inter** for body text
- **Space Grotesk** for headings

To change fonts, edit `src/app/layout.tsx`.

### Logo

Replace the Shield icon in:
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `PAYLOAD_SECRET`
   - `DATABASE_URI`
   - `NEXT_PUBLIC_SERVER_URL`
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS
- DigitalOcean

**Important**: Make sure your MongoDB instance is accessible from your deployment platform.

## SEO

The site includes:
- Proper meta tags and Open Graph data
- Semantic HTML structure
- Dynamic sitemap (add `app/sitemap.ts`)
- Mobile-friendly responsive design

To improve SEO:
1. Add more descriptive metadata in `app/layout.tsx`
2. Create a `sitemap.ts` for automatic sitemap generation
3. Add `robots.txt` in the `public` folder
4. Ensure all wiki articles have good excerpts and titles

## Performance

- Uses Next.js 15 App Router with automatic code splitting
- Static generation for wiki articles (ISR supported)
- Optimized images with Next.js Image component (recommended)
- Minimal JavaScript for fast page loads

## Security

- Environment variables for sensitive data
- MongoDB connection secured with authentication
- Admin panel protected with Payload auth
- Regular dependency updates recommended

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Payload CMS documentation](https://payloadcms.com/docs)
- Review this README

## License

© 2025 Advanced Blockchain Security. All rights reserved.

## Related Projects

- **BlockSecOps**: https://blocksecops.com - Our unified Web3 security platform
