# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KanaKana (かなカナ) is a Japanese typing practice game built with React Native and Expo. It features multiple game modes including classic hiragana/katakana practice, kanji reading practice, Tetris-style vocabulary learning, and long text practice.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run with specific platform
npm run ios          # iOS simulator
npm run android      # Android emulator

# Testing
npm test            # Run tests
npm run test:watch  # Watch mode
npm run test:coverage # Coverage report

# Code quality
npm run lint        # Run ESLint
npm run lint:fix    # Auto-fix linting issues
npm run type-check  # TypeScript type checking

# Build for production
npx expo build:ios     # iOS build
npx expo build:android # Android build
```

## Architecture

### Project Structure
- **React Native + Expo**: Mobile framework with managed workflow
- **TypeScript**: Type-safe development
- **Navigation**: React Navigation with native stack navigator
- **State Management**: Zustand for global state, local hooks for component state
- **Internationalization**: i18next with support for Japanese, Chinese (Traditional/Simplified), Korean, and English
- **Styling**: StyleSheet with centralized theme constants

### Key Directories
- `/src/screens/`: Screen components organized by feature (main/, game-modes/, common/)
- `/src/components/`: Reusable UI components with Glass morphism design system
- `/src/data/`: Vocabulary data organized by difficulty levels and JLPT grades
- `/src/hooks/`: Custom React hooks for app logic (version checking, rating prompts, etc.)
- `/src/utils/`: Utility functions for Japanese text processing, version checking, etc.
- `/src/navigation/`: Navigation configuration with typed routes

### Path Aliases
The project uses TypeScript path aliases configured in both tsconfig.json and babel.config.js:
- `@/` → `src/`
- `@/components` → `src/components`
- `@/screens` → `src/screens`
- `@/hooks` → `src/hooks`
- `@/utils` → `src/utils`
- `@/types` → `src/types`
- `@/data` → `src/data`

### Game Modes Architecture
1. **Classic Mode**: Basic hiragana/katakana typing practice
2. **Kanji Mode**: Kanji to kana reading practice with furigana support
3. **Tetris Mode**: Vocabulary learning with falling blocks gameplay
4. **Long Text Mode**: Extended Japanese text practice

### Vocabulary System
- Vocabulary is split into chunks for performance optimization
- Difficulty levels: Beginner, Normal, Hard, Expert
- JLPT integration: N5-N1 vocabulary included
- Data format: `TetrisWord` interface with word, kana, meaning, difficulty

### Version Management
The app includes a force update system:
- Version checking on app launch
- Modal prompt for required updates
- Development server at `/scripts/version-check-server.js`

### Important Features
- **Kuromoji Integration**: Japanese text tokenization and analysis
- **Multiple Reading Support**: Handles kanji with multiple readings
- **Rating System**: In-app review prompts after gameplay milestones
- **Glass Morphism UI**: Modern translucent design system
- **Haptic Feedback**: Touch feedback for better UX

## Testing Approach
- Jest with React Native Testing Library
- Test files located alongside source files
- Run tests before committing major changes
- Coverage reports available via `npm run test:coverage`

## Development Notes
- Always use `npx expo` for Expo CLI commands
- The app uses Expo SDK 53 with React Native 0.79.5
- Node.js >= 18.0.0 required
- Use EAS Build for production builds
- Version check server must be running for force update testing
- **IMPORTANT**: Never create versioned files (e.g., v2, backup, version). Always modify existing files directly
- **IMPORTANT**: Never create scripts or test files unless explicitly requested by the user

## Supabase Integration (Planned)
The project is planning to integrate Supabase for backend services. Key decisions and implementation details are documented in:
- `/docs/supabase-migration-plan.md` - Complete migration plan and technical details
- `/docs/supabase-decisions-needed.md` - Pending decisions before implementation

### Planned Features
- **Authentication**: Email/password and social login (Google, Apple)
- **Cloud Storage**: Game progress, user profiles, and settings
- **Leaderboards**: Global and mode-specific rankings
- **Achievements**: Unlockable achievements system
- **Offline Support**: AsyncStorage-based caching with sync queue
- **Vocabulary Management**: Cloud-based vocabulary with local caching

### Technical Stack (Planned)
- **Backend**: Supabase (PostgreSQL, Auth, Realtime)
- **Client SDK**: @supabase/supabase-js
- **Offline Support**: AsyncStorage with manual sync
- **Environment Variables**: EXPO_PUBLIC_* prefix for client-side configs