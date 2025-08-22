# Supabase Migration Plan for KanaKana

## 📋 Migration Overview

### Phase 1: Infrastructure Setup (Week 1)
- [ ] Setup Supabase Cloud project
- [ ] Configure Prisma ORM with Supabase
- [ ] Setup environment variables and configuration
- [ ] Create initial database schema
- [ ] Setup Row Level Security (RLS) policies

### Phase 2: Authentication System (Week 2)
- [ ] Implement Supabase Auth integration
- [ ] Migrate from local user storage to Supabase Auth
- [ ] Add social login providers (Google, Apple)
- [ ] Implement session management
- [ ] Add password reset and email verification

### Phase 3: Core Data Migration (Week 3-4)
- [ ] Migrate vocabulary data to Supabase
- [ ] Create data import scripts
- [ ] Setup caching strategy for offline support
- [ ] Migrate user profiles and settings
- [ ] Implement data sync mechanism

### Phase 4: Game Features (Week 5-6)
- [ ] Implement game session recording
- [ ] Add leaderboard functionality
- [ ] Create achievement system
- [ ] Add daily challenges
- [ ] Implement multiplayer preparation

### Phase 5: Testing & Optimization (Week 7)
- [ ] Performance testing
- [ ] Offline mode testing
- [ ] Data sync validation
- [ ] Security audit
- [ ] Load testing

## 🗃️ Database Schema Design

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

// ==================== User Management ====================

model User {
  id                String    @id @default(uuid())
  email             String    @unique
  username          String?   @unique
  avatarUrl         String?   @map("avatar_url")
  createdAt         DateTime  @default(now()) @map("created_at")
  updatedAt         DateTime  @updatedAt @map("updated_at")
  lastLoginAt       DateTime? @map("last_login_at")
  
  // Relations
  profile           UserProfile?
  settings          UserSettings?
  gameSessions      GameSession[]
  achievements      UserAchievement[]
  leaderboardEntries LeaderboardEntry[]
  dailyChallengeProgress DailyChallengeProgress[]
  
  @@map("users")
}

model UserProfile {
  id                String   @id @default(uuid())
  userId            String   @unique @map("user_id")
  level             Int      @default(1)
  experience        Int      @default(0)
  totalScore        Int      @default(0) @map("total_score")
  gamesPlayed       Int      @default(0) @map("games_played")
  averageWpm        Float    @default(0) @map("average_wpm")
  averageAccuracy   Float    @default(0) @map("average_accuracy")
  preferredMode     String   @default("classic") @map("preferred_mode")
  preferredDifficulty String @default("normal") @map("preferred_difficulty")
  currentStreak     Int      @default(0) @map("current_streak")
  longestStreak     Int      @default(0) @map("longest_streak")
  lastPlayedAt      DateTime? @map("last_played_at")
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("user_profiles")
}

model UserSettings {
  id                String   @id @default(uuid())
  userId            String   @unique @map("user_id")
  
  // Settings as JSONB
  audioSettings     Json     @default("{}") @map("audio_settings")
  visualSettings    Json     @default("{}") @map("visual_settings")
  gameplaySettings  Json     @default("{}") @map("gameplay_settings")
  accessibilitySettings Json @default("{}") @map("accessibility_settings")
  languageSettings  Json     @default("{}") @map("language_settings")
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@map("user_settings")
}

// ==================== Game Data ====================

model GameSession {
  id                String   @id @default(uuid())
  userId            String   @map("user_id")
  mode              String
  difficulty        String
  startTime         DateTime @map("start_time")
  endTime           DateTime? @map("end_time")
  score             Int      @default(0)
  wordsTyped        Int      @default(0) @map("words_typed")
  correctWords      Int      @default(0) @map("correct_words")
  totalCharacters   Int      @default(0) @map("total_characters")
  correctCharacters Int      @default(0) @map("correct_characters")
  wpm               Float    @default(0)
  accuracy          Float    @default(0)
  maxCombo          Int      @default(0) @map("max_combo")
  vocabularyThemes  String[] @map("vocabulary_themes")
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([userId, mode])
  @@index([score])
  @@map("game_sessions")
}

// ==================== Vocabulary System ====================

model Vocabulary {
  id                String   @id @default(uuid())
  word              String
  kana              String
  meaning           String
  chineseMeaning    String?  @map("chinese_meaning")
  difficulty        String
  category          String
  jlptLevel         String?  @map("jlpt_level")
  frequency         Int      @default(0)
  
  // Additional metadata
  kanji             String?
  onyomi            String[]
  kunyomi           String[]
  strokeCount       Int?     @map("stroke_count")
  examples          Json?
  
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")
  
  @@index([difficulty, jlptLevel])
  @@index([category])
  @@map("vocabulary")
}

model LongText {
  id                String   @id @default(uuid())
  title             String
  content           String   @db.Text
  displayContent    String?  @db.Text @map("display_content")
  inputContent      String?  @db.Text @map("input_content")
  difficulty        String
  category          String
  estimatedTime     Int      @map("estimated_time")
  vocabularyList    String[] @map("vocabulary_list")
  
  createdAt         DateTime @default(now()) @map("created_at")
  updatedAt         DateTime @updatedAt @map("updated_at")
  
  @@index([difficulty, category])
  @@map("long_texts")
}

// ==================== Social Features ====================

model Achievement {
  id                String   @id @default(uuid())
  name              String
  description       String
  icon              String
  rarity            String   // common, rare, epic, legendary
  maxProgress       Int?     @map("max_progress")
  category          String
  
  // Relations
  userAchievements  UserAchievement[]
  
  @@map("achievements")
}

model UserAchievement {
  id                String   @id @default(uuid())
  userId            String   @map("user_id")
  achievementId     String   @map("achievement_id")
  unlockedAt        DateTime? @map("unlocked_at")
  progress          Int      @default(0)
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  achievement       Achievement @relation(fields: [achievementId], references: [id])
  
  @@unique([userId, achievementId])
  @@map("user_achievements")
}

model LeaderboardEntry {
  id                String   @id @default(uuid())
  userId            String   @map("user_id")
  mode              String
  score             Int
  wpm               Float
  accuracy          Float
  date              DateTime @default(now())
  rank              Int?
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([mode, score])
  @@index([date])
  @@map("leaderboard_entries")
}

model DailyChallenge {
  id                String   @id @default(uuid())
  date              DateTime @unique
  mode              String
  difficulty        String
  targetWords       String[] @map("target_words")
  targetScore       Int      @map("target_score")
  participantsCount Int      @default(0) @map("participants_count")
  
  // Relations
  progress          DailyChallengeProgress[]
  
  @@map("daily_challenges")
}

model DailyChallengeProgress {
  id                String   @id @default(uuid())
  userId            String   @map("user_id")
  challengeId       String   @map("challenge_id")
  completed         Boolean  @default(false)
  score             Int      @default(0)
  completedAt       DateTime? @map("completed_at")
  
  // Relations
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  challenge         DailyChallenge @relation(fields: [challengeId], references: [id])
  
  @@unique([userId, challengeId])
  @@map("daily_challenge_progress")
}
```

## 🔐 Row Level Security (RLS) Policies

```sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaderboard_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_challenge_progress ENABLE ROW LEVEL SECURITY;

-- Users can only read and update their own data
CREATE POLICY "Users can view own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = user_id);

-- Game sessions - users can only manage their own
CREATE POLICY "Users can create own game sessions" ON game_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view own game sessions" ON game_sessions
  FOR SELECT USING (auth.uid() = user_id);

-- Leaderboard - public read, authenticated write
CREATE POLICY "Anyone can view leaderboard" ON leaderboard_entries
  FOR SELECT USING (true);

CREATE POLICY "Users can create own leaderboard entries" ON leaderboard_entries
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Vocabulary - public read
CREATE POLICY "Anyone can view vocabulary" ON vocabulary
  FOR SELECT USING (true);
```

## 🚀 Implementation Steps

### Step 1: Project Setup
```bash
# Install dependencies
npm install @supabase/supabase-js @prisma/client prisma
npm install --save-dev @types/node

# Initialize Prisma
npx prisma init

# Setup environment variables
# .env.local
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT_ID].supabase.co:5432/postgres?schema=public"
DIRECT_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT_ID].supabase.co:5432/postgres?schema=public"
SUPABASE_URL="https://[PROJECT_ID].supabase.co"
SUPABASE_ANON_KEY="[ANON_KEY]"
SUPABASE_SERVICE_KEY="[SERVICE_KEY]"
```

### Step 2: Prisma Configuration
```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### Step 3: Supabase Client Setup
```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
```

## 📱 Expo + Supabase Integration Notes

### Critical Considerations

1. **Environment Variables**
   - Use `EXPO_PUBLIC_` prefix for client-side variables
   - Never expose service keys in client code
   - Use EAS Secrets for production builds
   - Add `.env.local` to `.gitignore` to prevent committing sensitive data

2. **AsyncStorage for Auth**
   - Supabase Auth requires AsyncStorage for React Native
   - Already installed in project: `@react-native-async-storage/async-storage`
   - Configuration:
   ```typescript
   export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
     auth: {
       storage: AsyncStorage,
       autoRefreshToken: true,
       persistSession: true,
       detectSessionInUrl: false,
     },
   })
   ```

3. **Deep Linking for OAuth**
   ```typescript
   // app.json
   {
     "expo": {
       "scheme": "kanakana",
       "ios": {
         "bundleIdentifier": "com.kanakana.app"
       },
       "android": {
         "package": "com.kanakana.app"
       }
     }
   }
   ```
   - Supabase Dashboard: Add redirect URL `kanakana://` in Auth settings
   - Required for email verification and OAuth callbacks
   - Implementation with expo-auth-session and expo-linking

4. **Expo Go Limitations**
   - **Google OAuth and Apple Sign-In won't work in Expo Go**
   - Must use EAS Build or local development build
   - Social auth requires native modules not available in Expo Go
   - Solution: Create development build with `eas build --profile development`

5. **Realtime Subscriptions**
   - Use sparingly on mobile to conserve battery
   - Implement reconnection logic for network changes
   - Clean up subscriptions on component unmount
   - Consider connection pooling for multiple subscriptions

6. **Offline Support Strategy (Using AsyncStorage)**
   
   **Selected Approach: AsyncStorage with Manual Sync**
   - Best fit for KanaKana's single-user, relatively simple offline needs
   - Zero additional dependencies
   - Full control over sync logic
   - Progressive enhancement possible
   
   ```typescript
   // Implementation approach
   class OfflineManager {
     // Queue for offline operations
     async addToQueue(operation: OfflineOperation) {
       const queue = await this.getQueue();
       queue.push(operation);
       await AsyncStorage.setItem('offline_queue', JSON.stringify(queue));
     }
     
     // Sync when online
     async syncWithSupabase() {
       const queue = await this.getQueue();
       for (const operation of queue) {
         await this.processOperation(operation);
       }
     }
   }
   
   // Vocabulary caching
   class VocabularyCache {
     async getVocabulary(difficulty: string) {
       // 1. Check memory cache
       // 2. Check AsyncStorage cache
       // 3. Fetch from Supabase if online
       // 4. Return cached data if offline
     }
   }
   ```
   
   **Implementation Phases:**
   1. Phase 1: Vocabulary caching with AsyncStorage
   2. Phase 2: Game session offline queue
   3. Phase 3: Sync status UI indicators
   4. Future: Consider WatermelonDB if complexity grows

7. **File Storage Considerations**
   - Use Supabase Storage for user avatars
   - Keep vocabulary data cached locally
   - Implement progressive download for large datasets
   - Consider CDN for static assets

8. **Performance Optimizations**
   - Batch API calls where possible
   - Implement pagination for large datasets (limit/offset or cursor-based)
   - Use database views for complex queries
   - Cache frequently accessed data
   - Consider connection pooling for multiple concurrent requests

9. **Security Best Practices**
   - Row Level Security (RLS) is mandatory for all tables
   - Anon key exposure is safe due to RLS protection
   - Use `auth.uid()` in RLS policies for user data isolation
   - Never use service keys in client code
   - Validate all inputs on both client and server

10. **Type Safety**
    - Generate TypeScript types with Supabase CLI:
    ```bash
    npx supabase gen types typescript --project-id [PROJECT_ID] > types/supabase.ts
    ```
    - Use generated types throughout the application
    - Consider using Prisma for additional type safety

11. **Required Dependencies**
    ```bash
    npm install @supabase/supabase-js @react-native-async-storage/async-storage react-native-url-polyfill
    ```
    - Import `react-native-url-polyfill/auto` at app entry point

12. **Network State Handling**
    - Implement network detection with NetInfo
    - Queue operations when offline
    - Retry failed requests with exponential backoff
    - Show sync status to users

## 🔄 Data Migration Scripts

### Vocabulary Import Script
```typescript
// scripts/import-vocabulary.ts
import { prisma } from '../lib/prisma'
import { allVocabulary } from '../src/data/vocabulary-final'

async function importVocabulary() {
  console.log('Starting vocabulary import...')
  
  const batches = []
  const batchSize = 100
  
  for (let i = 0; i < allVocabulary.length; i += batchSize) {
    const batch = allVocabulary.slice(i, i + batchSize)
    batches.push(batch)
  }
  
  for (const batch of batches) {
    await prisma.vocabulary.createMany({
      data: batch.map(word => ({
        word: word.word,
        kana: word.kana,
        meaning: word.meaning,
        chineseMeaning: word.chineseMeaning,
        difficulty: word.difficulty,
        category: word.category,
        jlptLevel: word.jlptLevel,
        frequency: 0,
        kanji: word.kanji,
        onyomi: [],
        kunyomi: [],
      })),
      skipDuplicates: true,
    })
    
    console.log(`Imported ${batch.length} words`)
  }
  
  console.log('Vocabulary import complete!')
}
```

## 📚 Vocabulary Data Strategy

### Current Status
- **220,000+ lines** of vocabulary data in TypeScript files
- Split into chunks for performance
- Categories: Beginner, Normal, Hard, Expert, JLPT (N5-N1)

### Migration Strategy: **Database-First Approach**

#### Phase 1: Initial Migration
1. Import all vocabulary to Supabase PostgreSQL
2. Create indexes for performance:
   ```sql
   CREATE INDEX idx_vocabulary_difficulty ON vocabulary(difficulty);
   CREATE INDEX idx_vocabulary_jlpt ON vocabulary(jlpt_level);
   CREATE INDEX idx_vocabulary_category ON vocabulary(category);
   CREATE INDEX idx_vocabulary_frequency ON vocabulary(frequency DESC);
   CREATE INDEX idx_vocabulary_word_gin ON vocabulary USING gin(word gin_trgm_ops);
   ```

#### Phase 2: Client-Side Caching
```typescript
// lib/vocabulary-cache.ts
class VocabularyCache {
  private cache = new Map<string, TetrisWord[]>();
  
  async getVocabulary(difficulty: string, limit = 100) {
    const cacheKey = `${difficulty}_${limit}`;
    
    // Check memory cache
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }
    
    // Check AsyncStorage
    const stored = await AsyncStorage.getItem(cacheKey);
    if (stored) {
      const data = JSON.parse(stored);
      this.cache.set(cacheKey, data);
      return data;
    }
    
    // Fetch from Supabase
    const { data } = await supabase
      .from('vocabulary')
      .select('*')
      .eq('difficulty', difficulty)
      .limit(limit);
    
    // Cache in memory and storage
    this.cache.set(cacheKey, data);
    await AsyncStorage.setItem(cacheKey, JSON.stringify(data));
    
    return data;
  }
}
```

#### Phase 3: Progressive Loading
- Download top 100 words per difficulty on first launch
- Load additional vocabulary on-demand
- Pre-fetch next difficulty level in background

#### Benefits
- **Reduce app size by ~10-15MB**
- **Dynamic vocabulary updates without app release**
- **Better performance with database queries**
- **Support for user-generated content**

### Why Not Supabase Storage?
- Storage is for files (images, PDFs)
- Database is for structured, queryable data
- Vocabulary needs filtering, sorting, searching

## 📊 Monitoring & Analytics

### Setup Supabase Dashboard Views
```sql
-- Active users view
CREATE VIEW active_users AS
SELECT 
  DATE(last_login_at) as date,
  COUNT(DISTINCT id) as active_users
FROM users
WHERE last_login_at > NOW() - INTERVAL '30 days'
GROUP BY DATE(last_login_at);

-- Game mode popularity
CREATE VIEW game_mode_stats AS
SELECT 
  mode,
  COUNT(*) as play_count,
  AVG(score) as avg_score,
  AVG(accuracy) as avg_accuracy
FROM game_sessions
GROUP BY mode;
```

## 🎯 Success Metrics

- [ ] Zero data loss during migration
- [ ] < 100ms average API response time
- [ ] 99.9% uptime for authentication
- [ ] Successful offline mode operation
- [ ] Smooth sync when coming online
- [ ] No increase in app size > 5MB

## 📅 Timeline

- **Week 1-2**: Infrastructure and Auth
- **Week 3-4**: Core Data Migration
- **Week 5-6**: Feature Implementation
- **Week 7**: Testing and Optimization
- **Week 8**: Production Deployment

## 🚨 Risk Mitigation

1. **Data Loss Prevention**
   - Full backup before migration
   - Incremental migration approach
   - Rollback procedures prepared

2. **Performance Issues**
   - Load testing before production
   - Query optimization
   - Caching strategy implementation

3. **User Experience**
   - Gradual rollout with feature flags
   - A/B testing for new features
   - Maintain backward compatibility