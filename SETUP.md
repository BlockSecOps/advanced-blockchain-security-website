# Quick Setup Guide

## 1. Install Dependencies

```bash
cd /Users/pwner/Git/abs-website/advancedblockchainsecurity
npm install
```

## 2. Set Up Environment

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
PAYLOAD_SECRET=your-super-secret-key-change-this
DATABASE_URI=mongodb://localhost:27017/abs-wiki
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

## 3. Start MongoDB (Choose One)

### Option A: Local MongoDB with Docker (Easiest)
```bash
docker run -d -p 27017:27017 --name mongodb-abs mongo:latest
```

### Option B: MongoDB Atlas (Recommended for Production)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Get connection string
4. Update `DATABASE_URI` in `.env.local`

### Option C: Local MongoDB Installation
```bash
# macOS
brew install mongodb-community
brew services start mongodb-community
```

## 4. Start Development Server

```bash
npm run dev
```

Visit:
- **Website**: http://localhost:5000
- **Admin Panel**: http://localhost:5000/admin

## 5. Create Admin User

1. Go to http://localhost:5000/admin
2. Create your admin account
3. You're ready to add wiki content!

## Next Steps

### Add Your First Wiki Article

1. Log in to admin panel
2. Click "Wiki" → "Create New"
3. Fill in:
   - Title: "Getting Started with Blockchain Security"
   - Slug: "getting-started-blockchain-security"
   - Category: "Blockchain Fundamentals"
   - Excerpt: "Introduction to blockchain security concepts"
   - Content: Write your article
   - Difficulty: "Beginner"
   - Read Time: 5
   - Status: "Published"
4. Click "Save & Publish"
5. Visit http://localhost:5000/wiki to see your article!

### Customize the Site

1. **Colors**: Edit `tailwind.config.ts`
2. **Logo**: Replace Shield icon in Navigation and Footer
3. **Content**: Update sections in `src/components/sections/`
4. **Metadata**: Update SEO info in `src/app/layout.tsx`

## Production Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production

```env
PAYLOAD_SECRET=generate-a-very-secure-random-string
DATABASE_URI=your-mongodb-atlas-connection-string
NEXT_PUBLIC_SERVER_URL=https://advancedblockchainsecurity.com
```

## Troubleshooting

### Port Already in Use
```bash
# Change port in package.json
"dev": "next dev -p 5001"
```

### MongoDB Connection Error
- Check MongoDB is running: `docker ps` or `brew services list`
- Verify `DATABASE_URI` in `.env.local`
- Check firewall settings

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

## Support

- Next.js Docs: https://nextjs.org/docs
- Payload CMS Docs: https://payloadcms.com/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
