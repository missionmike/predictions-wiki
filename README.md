# Predictions Blog

A modern static blog built with Vite, React, TypeScript, and shadcn/ui. This blog supports Markdown content, OpenGraph meta tags, and Google Tag Manager integration.

## Features

- 🚀 Built with Vite for fast development and optimized production builds
- ⚛️ React with TypeScript for type safety
- 🎨 shadcn/ui components for a beautiful UI
- 📝 Markdown support with frontmatter
- 🔍 SEO-friendly with OpenGraph meta tags
- 📊 Google Tag Manager integration
- 📱 Responsive design
- 🧪 Jest testing setup
- 💅 ESLint and Prettier for code quality
- 🚀 GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/predictions.git
   cd predictions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

### Adding New Posts

1. Create a new Markdown file in `src/content/posts/` with the following frontmatter:
   ```markdown
   ---
   title: Your Post Title
   category: your-category
   date: YYYY-MM-DD
   author: Your Name
   tags: [tag1, tag2]
   ---

   Your post content here...
   ```

2. The post will be automatically included in the blog.

### Deployment

The blog is automatically deployed to GitHub Pages when changes are pushed to the main branch. You can also manually trigger a deployment from the GitHub Actions tab.

## Configuration

### Google Tag Manager

Replace the GTM ID in `src/main.tsx` with your own:

```typescript
const gtmId = 'GTM-XXXXXXX' // Replace with your GTM ID
```

### Customization

- Edit `tailwind.config.js` to customize the theme
- Modify `src/index.css` to change global styles
- Update components in `src/components/` to change the layout and design

## License

MIT
