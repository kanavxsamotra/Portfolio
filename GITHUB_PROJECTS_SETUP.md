# GitHub Projects Setup Guide

## 🚀 Overview
Your portfolio now includes a dedicated GitHub Projects section with live demo links. Here's how to customize it with your actual projects.

## 📋 Prerequisites
1. **Node.js & npm** (if not installed):
   - Download from: https://nodejs.org/
   - Install the LTS version
   - Verify installation: `node --version` and `npm --version`

2. **GitHub Account** with your projects
3. **Deployment Platform** (Vercel, Netlify, etc.) for live demos

## 🔧 Customization Steps

### 1. Update GitHub Projects
Edit `src/components/ProjectsSection.tsx` and replace the `githubProjects` array with your actual repositories:

```typescript
const githubProjects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of your project',
    tech: ['React', 'Node.js', 'MongoDB'], // Technologies used
    githubUrl: 'https://github.com/yourusername/your-repo',
    demoUrl: 'https://your-demo-url.vercel.app', // Live demo URL
    stars: 15, // Number of GitHub stars
    forks: 8,  // Number of GitHub forks
    language: 'TypeScript', // Primary language
    languageColor: '#3178c6' // Language color (hex code)
  },
  // Add more projects...
];
```

### 2. Update Featured Projects
Also update the `projects` array with your actual featured projects:

```typescript
const projects = [
  {
    title: 'Your Featured Project',
    description: 'Description of your featured project',
    icon: Server, // Choose from lucide-react icons
    tech: ['Technology1', 'Technology2'],
    gradient: 'from-orange-400 to-red-500', // Tailwind gradient
    githubUrl: 'https://github.com/yourusername/project',
    demoUrl: 'https://your-demo-url.com',
    hasDemo: true // Set to false if no demo available
  },
  // Add more projects...
];
```

## 🌐 Deployment Options for Live Demos

### Option 1: Vercel (Recommended)
1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy your projects**:
   ```bash
   # In each project directory
   vercel
   ```

3. **Get deployment URLs** and add them to your portfolio

### Option 2: Netlify
1. **Drag & Drop**: Upload your built project to Netlify
2. **Git Integration**: Connect your GitHub repo for automatic deployments
3. **Custom Domain**: Add your custom domain if needed

### Option 3: GitHub Pages
1. **Enable GitHub Pages** in your repository settings
2. **Set source** to main branch or gh-pages branch
3. **URL format**: `https://yourusername.github.io/repository-name`

### Option 4: Firebase Hosting
1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize and deploy**:
   ```bash
   firebase init hosting
   firebase deploy
   ```

## 📊 GitHub API Integration (Optional)

For dynamic GitHub data (stars, forks, language), you can integrate the GitHub API:

```typescript
// Add this function to fetch GitHub data
const fetchGitHubData = async (repoName: string) => {
  try {
    const response = await fetch(`https://api.github.com/repos/yourusername/${repoName}`);
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      languageColor: getLanguageColor(data.language)
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return null;
  }
};
```

## 🎨 Customization Tips

### 1. Language Colors
Common language colors:
- TypeScript: `#3178c6`
- JavaScript: `#f1e05a`
- Python: `#3572A5`
- React: `#61dafb`
- Node.js: `#339933`

### 2. Icons
Choose from [Lucide React icons](https://lucide.dev/icons/):
- `Server` - Backend/DevOps projects
- `Globe` - Web applications
- `Mobile` - Mobile apps
- `Database` - Database projects
- `Brain` - AI/ML projects

### 3. Gradients
Tailwind CSS gradients for project cards:
- `from-cyan-400 to-blue-500` - Blue theme
- `from-purple-400 to-pink-500` - Purple theme
- `from-green-400 to-blue-500` - Green theme
- `from-orange-400 to-red-500` - Orange theme

## 🚀 Running Your Portfolio

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Deploy your portfolio**:
   ```bash
   # Using Vercel
   vercel
   
   # Or build and upload to your hosting provider
   npm run build
   ```

## 📝 Example Project Entry

Here's a complete example of how to add your project:

```typescript
{
  title: 'E-Commerce Platform',
  description: 'Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  githubUrl: 'https://github.com/yourusername/ecommerce-platform',
  demoUrl: 'https://ecommerce-demo.vercel.app',
  stars: 23,
  forks: 12,
  language: 'JavaScript',
  languageColor: '#f1e05a'
}
```

## 🔗 Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://pages.github.com/)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Lucide React Icons](https://lucide.dev/icons/)
- [Tailwind CSS Gradients](https://tailwindcss.com/docs/gradient-color-stops)

## 🎯 Next Steps

1. **Add your actual GitHub repositories** to the `githubProjects` array
2. **Deploy your projects** to get live demo URLs
3. **Update the featured projects** with your best work
4. **Deploy your portfolio** to showcase your projects
5. **Share your portfolio** with potential employers and clients

Your portfolio now has a professional GitHub projects section that will impress visitors with your coding skills and live demonstrations! 