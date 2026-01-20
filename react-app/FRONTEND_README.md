# CV Parser - Frontend

A modern, responsive web application for parsing CVs/Resumes using AI.

## Features

- 🎨 **Modern UI**: Clean, gradient-based design with smooth animations
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🤖 **AI-Powered**: Uses backend API with Google Gemini for CV parsing
- 🎯 **Skill Categorization**: Skills are automatically categorized and displayed in expandable boxes
- 🌓 **Dark Mode**: Full dark mode support with theme context
- ⚡ **Fast**: Single-page application with no routing overhead

## Structure

```
src/
├── components/
│   ├── CVParser.jsx        # Main component with upload and results
│   └── SkillCategory.jsx   # Expandable skill category boxes
├── context/
│   └── ThemeContext.jsx    # Dark/light mode theme management
├── App.jsx                 # Root component
├── main.jsx               # Entry point
└── index.css              # Global styles and animations
```

## Key Components

### CVParser
The main component that handles:
- File upload with validation
- API communication with backend
- Results display with personal info, skills, experience, and education
- Responsive layout

### SkillCategory
Expandable skill boxes that:
- Group skills by category (technical, soft, finance, design, domain, other)
- Show skill count on collapsed state
- Display all skills with mentions and proficiency when expanded
- Color-coded by category

## Usage

1. Start the backend server (see backend README)
2. Start the React development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:5173
4. Upload a CV (PDF or DOCX)
5. View parsed results with expandable skill categories

## Customization

### Adding New Skill Categories

Edit the `categoryConfig` object in `CVParser.jsx`:

```javascript
const categoryConfig = {
  your_category: { name: 'Display Name', color: 'blue' }
};
```

Available colors: blue, green, purple, pink, orange, gray

### Modifying Animations

All animations are defined in `index.css`. Key animations:
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `shake` (for errors)
- `bounce-subtle`
- `rotate` (for loading spinners)

## API Integration

The app connects to the backend at `http://localhost:8000/api/process-cv`

Expected backend response format:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "contact": "+1234567890",
  "designation": "Software Engineer",
  "experienceYears": 5.5,
  "allSkills": [
    {
      "name": "Python",
      "mentions": 3,
      "category": "technical",
      "proficiency": "Expert"
    }
  ],
  "workExperience": [
    {
      "company": "Tech Corp",
      "position": "Senior Developer",
      "startDate": "2020-01-01",
      "endDate": "Present",
      "duration": "4 years",
      "description": "Job details..."
    }
  ],
  "education": "B.Tech in Computer Science"
}
```

## Dependencies

- React 18+
- Tailwind CSS (for styling)
- Vite (build tool)

## Development

- Hot reload is enabled
- Dark mode toggle is available via ThemeContext
- All components use Tailwind CSS utility classes
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
