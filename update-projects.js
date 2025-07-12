#!/usr/bin/env node

/**
 * GitHub Projects Updater
 * This script helps you update your portfolio projects with actual GitHub data
 */

const fs = require('fs');
const path = require('path');

// Your GitHub username
const GITHUB_USERNAME = 'kanavxsamotra';

// Language colors mapping
const LANGUAGE_COLORS = {
  'TypeScript': '#3178c6',
  'JavaScript': '#f1e05a',
  'Python': '#3572A5',
  'Java': '#b07219',
  'C++': '#f34b7d',
  'C#': '#178600',
  'PHP': '#4F5D95',
  'Ruby': '#701516',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'Swift': '#ffac45',
  'Kotlin': '#F18E33',
  'Scala': '#c22d40',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'Vue': '#2c3e50',
  'React': '#61dafb',
  'Angular': '#dd0031',
  'Node.js': '#339933'
};

// Example projects - Replace with your actual projects
const YOUR_PROJECTS = [
  {
    name: 'portfolio',
    title: 'Portfolio Website',
    description: 'Modern React TypeScript portfolio with animated UI and responsive design built with Vite and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://kanavxsamotra.vercel.app'
  },
  {
    name: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with user authentication, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: 'https://ecommerce-demo.vercel.app'
  },
  {
    name: 'task-manager',
    title: 'Task Management App',
    description: 'Real-time task management application with drag-and-drop functionality and team collaboration features.',
    tech: ['React', 'Firebase', 'Socket.io', 'Material-UI'],
    demoUrl: 'https://task-manager-demo.vercel.app'
  },
  {
    name: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Interactive weather dashboard with real-time data, charts, and location-based forecasts.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation'],
    demoUrl: 'https://weather-dashboard-demo.vercel.app'
  }
];

async function fetchGitHubData(repoName) {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`);
    if (!response.ok) {
      throw new Error(`Repository ${repoName} not found or not accessible`);
    }
    const data = await response.json();
    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      language: data.language,
      languageColor: LANGUAGE_COLORS[data.language] || '#6e7781'
    };
  } catch (error) {
    console.warn(`Warning: Could not fetch data for ${repoName}: ${error.message}`);
    return {
      stars: 0,
      forks: 0,
      language: 'Unknown',
      languageColor: '#6e7781'
    };
  }
}

async function generateProjectsCode() {
  console.log('🔄 Fetching GitHub data for your projects...\n');
  
  const projectsCode = [];
  
  for (const project of YOUR_PROJECTS) {
    console.log(`📦 Processing: ${project.name}`);
    const githubData = await fetchGitHubData(project.name);
    
    const projectCode = `  {
    title: '${project.title}',
    description: '${project.description}',
    tech: [${project.tech.map(tech => `'${tech}'`).join(', ')}],
    githubUrl: 'https://github.com/${GITHUB_USERNAME}/${project.name}',
    demoUrl: '${project.demoUrl}',
    stars: ${githubData.stars},
    forks: ${githubData.forks},
    language: '${githubData.language}',
    languageColor: '${githubData.languageColor}'
  }`;
    
    projectsCode.push(projectCode);
    console.log(`✅ ${project.name}: ${githubData.stars} stars, ${githubData.forks} forks, ${githubData.language}`);
  }
  
  return projectsCode.join(',\n');
}

function updateProjectsFile(projectsCode) {
  const filePath = path.join(__dirname, 'src', 'components', 'ProjectsSection.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.error('❌ ProjectsSection.tsx not found!');
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the githubProjects array and replace it
  const startMarker = 'const githubProjects = [';
  const endMarker = '];';
  
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker, startIndex);
  
  if (startIndex === -1 || endIndex === -1) {
    console.error('❌ Could not find githubProjects array in the file');
    return false;
  }
  
  const newContent = content.substring(0, startIndex + startMarker.length) + 
                    '\n' + projectsCode + '\n' + 
                    content.substring(endIndex);
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  return true;
}

async function main() {
  console.log('🚀 GitHub Projects Updater\n');
  console.log(`👤 GitHub Username: ${GITHUB_USERNAME}\n`);
  
  try {
    const projectsCode = await generateProjectsCode();
    
    console.log('\n📝 Generated projects code:');
    console.log('```typescript');
    console.log('const githubProjects = [');
    console.log(projectsCode);
    console.log('];');
    console.log('```\n');
    
    console.log('💾 Updating ProjectsSection.tsx...');
    const success = updateProjectsFile(projectsCode);
    
    if (success) {
      console.log('✅ Successfully updated ProjectsSection.tsx!');
      console.log('\n🎉 Your portfolio now includes your actual GitHub projects!');
      console.log('\n📋 Next steps:');
      console.log('1. Review the updated projects in src/components/ProjectsSection.tsx');
      console.log('2. Update demo URLs with your actual deployed project URLs');
      console.log('3. Run "npm run dev" to see your updated portfolio');
      console.log('4. Deploy your portfolio to showcase your projects');
    } else {
      console.log('❌ Failed to update the file');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

// Check if fetch is available (Node.js 18+)
if (typeof fetch === 'undefined') {
  console.error('❌ This script requires Node.js 18+ or you need to install node-fetch');
  console.log('💡 To install node-fetch: npm install node-fetch');
  process.exit(1);
}

main(); 