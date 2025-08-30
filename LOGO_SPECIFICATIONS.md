# grāmatr Logo Specifications

## Logo Description

The grāmatr logo consists of the wordmark "grāmatr" enclosed in square brackets `[grāmatr]`, creating a clean, systematic identity that communicates the concept of a "packaged system." The design uses Inter Medium typography with purple bracket accents.

## Design Rationale

### Strategic Decision Points
1. **Universal Recognition**: Square brackets are universally understood across technical and non-technical audiences
2. **System Metaphor**: Brackets suggest containment, packaging, and systematic organization
3. **Cross-Audience Appeal**: 
   - Developers recognize array/code notation
   - Business users see packaged product indication
   - Consumers understand grouping/categorization
4. **Scalability**: Simple geometric elements scale perfectly across all media
5. **Memorability**: Unique bracket notation differentiates from abstract tech logos

### Typography Choice
- **Primary Font**: Inter Variable Medium (500 weight)
- **Rationale**: System-neutral typeface avoiding vendor associations
- **Accessibility**: Excellent readability across sizes and contexts

### Color System
- **Bracket Color**: #7c3aed (Tailwind Purple 600)
- **Wordmark**: Inherits text color (responsive to light/dark themes)
- **Contrast Ratio**: 4.5:1+ meets WCAG AA standards

## Implementation Guidelines

### Spacing Specifications
- Left bracket position: x="70"
- Wordmark position: x="82" (12px gap from bracket)
- Right bracket position: x="195" (2px gap from wordmark end)
- Baseline: y="42"
- Font size: 32px for wordmark, 32px for brackets

### Clear Space
Maintain minimum clear space equivalent to the height of one bracket around the entire logo.

### Minimum Size
- Digital: 16px height minimum (favicon usage)
- Print: 0.5 inch height minimum

### Color Variations
1. **Primary**: Purple brackets (#7c3aed) with adaptive wordmark
2. **Monochrome**: Single color version for limited color contexts
3. **Reverse**: White version for dark backgrounds

## SVG Implementations

### Standard Logo (300x70px)
```svg
<svg width="300" height="70" viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg">
  <!-- Left bracket -->
  <text x="70" y="42" font-size="32" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="#7c3aed">[</text>
  
  <!-- Wordmark -->
  <text x="82" y="42" font-size="32" font-family="Inter, system-ui, sans-serif" font-weight="500" fill="currentColor">grāmatr</text>
  
  <!-- Right bracket -->
  <text x="195" y="42" font-size="32" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="#7c3aed">]</text>
</svg>
```

### Compact Logo (200x50px)
```svg
<svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
  <!-- Left bracket -->
  <text x="20" y="32" font-size="24" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="#7c3aed">[</text>
  
  <!-- Wordmark -->
  <text x="30" y="32" font-size="24" font-family="Inter, system-ui, sans-serif" font-weight="500" fill="currentColor">grāmatr</text>
  
  <!-- Right bracket -->
  <text x="145" y="32" font-size="24" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="#7c3aed">]</text>
</svg>
```

### Icon Version (Square Format - 100x100px)
```svg
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Left bracket -->
  <text x="10" y="58" font-size="18" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="#7c3aed">[</text>
  
  <!-- Wordmark -->
  <text x="18" y="58" font-size="18" font-family="Inter, system-ui, sans-serif" font-weight="500" fill="currentColor">grāmatr</text>
  
  <!-- Right bracket -->
  <text x="85" y="58" font-size="18" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="#7c3aed">]</text>
</svg>
```

### Monochrome Version
```svg
<svg width="300" height="70" viewBox="0 0 300 70" xmlns="http://www.w3.org/2000/svg">
  <!-- Left bracket -->
  <text x="70" y="42" font-size="32" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="currentColor">[</text>
  
  <!-- Wordmark -->
  <text x="82" y="42" font-size="32" font-family="Inter, system-ui, sans-serif" font-weight="500" fill="currentColor">grāmatr</text>
  
  <!-- Right bracket -->
  <text x="195" y="42" font-size="32" font-family="Inter, system-ui, sans-serif" font-weight="400" fill="currentColor">]</text>
</svg>
```

## Typography Implementation

### Web Implementation
```css
/* Import Inter Variable */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

/* Logo container */
.gramatr-logo {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-feature-settings: "kern" 1, "liga" 1;
}

/* Wordmark styling */
.gramatr-wordmark {
  font-weight: 500;
  font-size: 32px;
  color: inherit;
}

/* Bracket styling */
.gramatr-brackets {
  font-weight: 400;
  font-size: 32px;
  color: #7c3aed;
}
```

### HTML Implementation
```html
<div class="gramatr-logo">
  <span class="gramatr-brackets">[</span><span class="gramatr-wordmark">grāmatr</span><span class="gramatr-brackets">]</span>
</div>
```

## Usage Guidelines

### Do's
- Maintain consistent spacing relationships
- Use on backgrounds with sufficient contrast
- Scale proportionally (maintain aspect ratio)
- Use approved color variations

### Don'ts
- Don't separate brackets from wordmark
- Don't alter character spacing within wordmark
- Don't use on backgrounds with insufficient contrast
- Don't stretch or condense disproportionally
- Don't add effects (shadows, gradients, etc.)

## File Organization

Recommended file structure for logo assets:
```
/logos/
  /svg/
    gramatr-logo-standard.svg
    gramatr-logo-compact.svg
    gramatr-logo-icon.svg
    gramatr-logo-monochrome.svg
  /png/
    gramatr-logo-standard@1x.png
    gramatr-logo-standard@2x.png
    gramatr-logo-standard@3x.png
  /web/
    favicon.ico
    apple-touch-icon.png
    manifest-icon-192.png
    manifest-icon-512.png
```

---

**Brand Identity System**: grāmatr Universal AI Operating System  
**Design Date**: August 2024  
**Version**: 1.0