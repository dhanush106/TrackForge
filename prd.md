# TrackForge PRD

## 1. Product Summary
TrackForge is a minimal placement-preparation operating system for software engineering students. It helps users plan their day, track study time, solve DSA problems, manage tasks, and monitor placement readiness from a single distraction-free dashboard.

The product is designed to be calm, fast, and execution-focused. It should help a student answer one question every time they open the app: “What should I do next?”

---

## 2. Problem Statement
Most placement preparation fails not because students lack motivation, but because their workflow is fragmented.

Students often know what they should study, but still struggle with:
- deciding what to do today
- tracking progress across multiple topics
- staying consistent over weeks or months
- measuring improvement in DSA, SQL, CS subjects, and projects
- managing time without distraction

TrackForge solves this by combining planning, execution, coding practice, and progress tracking into one focused workspace.

---

## 3. Product Vision
Create a lightweight daily operating system for placement preparation that helps students stay consistent, measure progress, and become placement-ready through repeated execution.

---

## 4. Target Users
- Placement preparation students
- GATE + placement aspirants
- Software engineering students
- Competitive programming beginners
- Developers preparing for internships
- Final-year students preparing for SDE interviews

---

## 5. Core Goals
- Help users know exactly what to do each day
- Keep the daily workflow simple and fast
- Increase consistency in study and coding habits
- Make placement progress visible and measurable
- Reduce friction between planning and execution

### Non-Goals
- Social networking or community features
- AI assistant functionality
- Heavy note-taking or content creation tools
- Full-life personal productivity management
- Complex dashboards with unnecessary clutter

---

## 6. Design Principles
The experience should feel:
- Linear
- Minimal
- Calm
- Fast
- Productivity-focused

The app should avoid:
- social feeds
- notification overload
- unnecessary animations
- feature bloat

Every screen should support a single purpose: helping the user move forward.

---

## 7. Core User Flows

### Morning Flow
1. Open TrackForge
2. Review today’s dashboard
3. Start the Pomodoro timer
4. Complete the planned tasks
5. Sync progress from coding practice
6. Review analytics and plan tomorrow

### Evening Flow
1. Mark completed tasks
2. Log study hours and Pomodoro sessions
3. Complete a short reflection
4. Set tomorrow’s priority

---

## 8. Functional Requirements

### FR-01: Dashboard
The dashboard must provide a quick summary of the current day, including:
- today’s date and greeting
- current streak
- tasks completed
- study hours
- active timer
- today’s focus
- progress ring for tasks, study goal, Pomodoro completion, and LeetCode goal
- weekly heatmap
- daily timeline

### FR-02: Smart Daily Planner
Users must be able to organize tasks by category, such as:
- Placement
- Health
- Personal
- Learning

Each task should include:
- title
- description
- category
- priority
- estimated time
- deadline
- status
- tags

### FR-03: Todo System
The app must support:
- multiple priorities (High, Medium, Low)
- drag and drop task ordering
- subtasks
- task dependencies
- recurring tasks
- deadline alerts
- task history
- task notes
- estimated vs actual time tracking
- progress bar and completion percentage

### FR-04: Placement Roadmap
The app must provide a dedicated roadmap view for placement preparation, including topic-based progress for:
- LeetCode topics
- SQL topics
- CS fundamentals
- backend topics

Progress must update automatically as tasks and coding sessions are completed.

### FR-05: LeetCode Sync
The app must support fetching public LeetCode profile data, including:
- total problems solved
- easy/medium/hard counts
- acceptance rate
- current streak where available
- ranking where available
- recent submissions where supported
- contest rating where available

The app should also support:
- browsing problems
- filtering by difficulty, topic, status, and company
- searching and sorting
- bookmarking problems
- assigning problems directly to the daily planner
- weekly planning for topic-based assignments
- built-in tracking for Blind 75, NeetCode 150, Striver Sheet, and custom lists

### FR-06: Pomodoro Timer
The app must include a minimal Pomodoro timer with:
- 25/5, 50/10, 90/15, and custom modes
- pause, resume, and skip controls
- sound option
- auto-start break
- auto-start next session
- focus statistics for today, this week, and this month

### FR-07: Focus Mode
The app must support a one-click focus mode that hides distractions and shows only:
- current task
- timer
- remaining time

### FR-08: Daily Reflection
At the end of the day, users should be prompted to answer three quick questions:
- What did I complete?
- What blocked me?
- What is tomorrow’s priority?

### FR-09: Analytics
The app must provide visual analytics for:
- daily hours
- weekly hours
- monthly hours
- task completion
- category distribution
- study time
- LeetCode growth
- topic coverage
- difficulty distribution
- consistency
- average completion time

### FR-10: Calendar
The app should include calendar views for:
- month
- week
- day

Users should be able to:
- drag and reschedule tasks
- manage recurring tasks

### FR-11: Habit Tracker
The app should support a simple tracker for habits such as:
- gym
- water
- reading
- sleep
- meditation
- walking
- custom habits

### FR-12: Goal Tracker
The app should allow users to track long-term goals, including:
- number of problems solved
- CS subject completion
- project milestones
- resume completion
- mock interview count

### FR-13: Placement Dashboard
The app should provide a placement health summary that combines:
- interview readiness score
- DSA progress
- CS fundamentals
- SQL progress
- projects
- resume status
- mock interviews
- contest activity
- overall completion

---

## 9. MVP Scope
The first release should focus on the core daily workflow:
- dashboard
- smart planner
- todo system
- placement roadmap
- LeetCode sync
- Pomodoro timer
- daily reflection
- basic analytics

The following can be prioritized for later releases:
- calendar enhancements
- habit tracker expansion
- detailed goal tracking
- placement dashboard refinement

---

## 10. UX and Content Requirements
- The interface should be minimal, calm, and distraction-free
- The app should feel like a personal operating system, not a generic productivity app
- The experience should support fast daily use without onboarding overhead
- The content should prioritize action over exploration

---

## 11. Technical Direction
### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- TanStack Query
- Zustand

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Redis (optional)

### Authentication
- JWT
- Refresh tokens

### Charts
- Recharts

### Drag and Drop
- dnd-kit

### Calendar
- FullCalendar

### Timer
- Native implementation

### Deployment
- Docker
- Railway or Render
- Vercel

---

## 12. Non-Functional Requirements
- Fast load times for core screens
- Smooth task and timer interactions
- Responsive design for desktop and tablet
- Reliable persistence of tasks, study time, and progress
- Clear and minimal visual hierarchy
- Low cognitive load during daily use

---

## 13. Success Metrics
The product will be considered successful if users can rely on it as their primary workspace for placement preparation over a long period.

Key indicators:
- users return daily or near-daily
- study and coding sessions are tracked consistently
- tasks are completed and progress is visible
- users can use the app for 6–12 months without switching tools

---

## 14. Development Timeline and Build Order

### Recommended Build Order
Build the product in this order so the experience becomes usable early and each layer adds value without overwhelming the user.

1. Foundation and app shell
2. Dashboard and daily planner
3. Todo system and task management
4. Pomodoro timer and focus mode
5. Placement roadmap and daily reflection
6. LeetCode sync and problem assignment flow
7. Analytics and progress visualization
8. Calendar, habits, and goal tracking
9. Placement readiness dashboard
10. Polish, testing, and deployment

### Phase 0: Foundation and Setup
Timeline: Week 1

Goals:
- initialize the repository and project structure
- set up frontend architecture with React, TypeScript, Tailwind, Zustand, and routing
- define design system, color palette, spacing rules, and component library
- establish backend structure with Node.js, Express, PostgreSQL, and Prisma
- create environment configuration and deployment plan

Deliverables:
- working project scaffold
- reusable layout and theme system
- basic API and database schema planning

Suggested commit messages:
- chore: initialize TrackForge project scaffold
- chore: setup frontend architecture and styling system
- chore: add backend structure and database schema foundation

### Phase 1: Core App Shell and Navigation
Timeline: Week 2

Goals:
- create the main app layout with sidebar or top navigation
- build route structure for dashboard, planner, roadmap, analytics, calendar, and settings
- create a persistent app state for user profile, tasks, study sessions, and timer state
- build initial empty states and loading screens

Deliverables:
- app shell is fully navigable
- consistent layout across core screens
- starter state management layer

Suggested commit messages:
- feat: build app shell and core navigation
- feat: add global state management for app data
- ui: create reusable layout and empty states

### Phase 2: Dashboard and Daily Planner
Timeline: Week 3

Goals:
- build the main dashboard with greeting, streak, progress cards, and daily timeline
- implement smart daily planner categories such as Placement, Health, Personal, and Learning
- allow users to create, edit, complete, and delete tasks
- add basic priority and category filtering

Deliverables:
- dashboard becomes the main daily starting point
- tasks can be planned and managed quickly
- the interface feels focused and minimal

Suggested commit messages:
- feat: build dashboard overview and daily progress cards
- feat: add smart daily planner with categories
- feat: implement task creation, editing, and completion flow

### Phase 3: Todo System and Productivity Engine
Timeline: Week 4

Goals:
- add advanced task behaviors: subtasks, drag and drop, dependencies, recurring tasks, notes, and deadlines
- add progress bars, completion percentage, and estimated vs actual time tracking
- create task history and task detail views

Deliverables:
- users can manage complex tasks without leaving the app
- the planner becomes a real execution system

Suggested commit messages:
- feat: add advanced todo management features
- feat: support subtasks, dependencies, and recurring tasks
- feat: track task progress and time estimates

### Phase 4: Pomodoro Timer and Focus Mode
Timeline: Week 5

Goals:
- implement a minimal Pomodoro timer with preset modes and custom durations
- add pause, resume, skip, auto-start break, and sound settings
- create focus mode that removes distractions and shows only the current task and timer
- store focus sessions for daily and weekly tracking

Deliverables:
- the app supports focused study sessions
- users can move from planning to execution without friction

Suggested commit messages:
- feat: add pomodoro timer with configurable modes
- feat: implement focus mode for distraction-free work
- feat: store and display focus session statistics

### Phase 5: Placement Roadmap and Reflection
Timeline: Week 6

Goals:
- create topic-based roadmap views for DSA, SQL, CS fundamentals, and backend topics
- add progress tracking for each roadmap section
- implement daily reflection prompts for completion, blockers, and next priorities
- link roadmap progress to tasks and study sessions

Deliverables:
- users can see where they stand in placement preparation
- daily reflection becomes part of the workflow

Suggested commit messages:
- feat: build placement roadmap and topic progress tracking
- feat: add daily reflection workflow
- feat: connect roadmap completion to study activity

### Phase 6: LeetCode Sync and Problem Workflow
Timeline: Week 7 to Week 8

Goals:
- integrate public LeetCode profile data
- show solved counts, streak, acceptance rate, ranking, recent submissions, and contest rating where available
- build a problem browser with filters and search
- allow users to assign problems to today’s planner and weekly plan
- support Blind 75, NeetCode 150, Striver Sheet, and custom lists

Deliverables:
- LeetCode becomes a first-class part of the product
- the app feels different from a generic planner

Suggested commit messages:
- feat: integrate LeetCode profile data
- feat: add problem browser with filters and search
- feat: enable daily and weekly problem assignment flow

### Phase 7: Analytics and Progress Insights
Timeline: Week 9

Goals:
- add charts for study hours, task completion, consistency, topic coverage, and difficulty distribution
- create weekly and monthly overviews
- visualize LeetCode growth and study trendlines

Deliverables:
- users can understand their improvement over time
- progress becomes visible and motivating

Suggested commit messages:
- feat: add analytics charts and progress insights
- feat: visualize study consistency and growth trends
- feat: surface learning performance across time

### Phase 8: Calendar, Habits, and Goals
Timeline: Week 10

Goals:
- add calendar views for day, week, and month
- support drag and reschedule of tasks
- implement simple habit tracking for gym, water, reading, sleep, and custom habits
- build goal tracking for problems solved, resume, projects, and mock interviews

Deliverables:
- users can manage both short-term tasks and long-term habits
- the app becomes a full preparation workspace

Suggested commit messages:
- feat: add calendar views and task rescheduling
- feat: implement habit tracker and custom habit support
- feat: add goal tracking for long-term preparation milestones

### Phase 9: Placement Readiness Dashboard
Timeline: Week 11

Goals:
- combine DSA, SQL, CS fundamentals, projects, resume, mock interviews, and contest activity into a single placement readiness view
- calculate a simple readiness score based on completed activities
- make the final dashboard feel like a health report for placement prep

Deliverables:
- the user gets a clear summary of placement readiness
- the product feels purpose-built for interviews and internships

Suggested commit messages:
- feat: build placement readiness dashboard
- feat: calculate readiness score from user activity
- ui: polish placement health overview

### Phase 10: Polish, Testing, and Launch
Timeline: Week 12

Goals:
- improve responsiveness and performance
- fix UI bugs and edge cases
- add onboarding and empty-state guidance
- test core flows end-to-end
- prepare deployment on Vercel and backend hosting
- write README and usage documentation

Deliverables:
- production-ready MVP
- confident deployment and onboarding experience

Suggested commit messages:
- refactor: polish UX and improve responsiveness
- test: add end-to-end coverage for core flows
- chore: prepare v1 deployment and documentation

### Suggested GitHub Commit Rhythm
Use small, meaningful commits throughout development:
- one commit per major feature
- one fix commit per bug or polish pass
- one refactor commit after stabilizing a feature
- one release commit for deployment preparation

### Example Commit Message Pattern
- feat: add [feature name]
- fix: resolve [bug or UX issue]
- ui: improve [screen or component]
- refactor: simplify [module or state flow]
- chore: setup [tooling, config, or deployment]

---

## 15. Release Strategy
### Phase 1: MVP
- dashboard
- planner
- todo management
- LeetCode sync
- Pomodoro timer
- reflection and analytics

### Phase 2: Growth
- habits and goals
- richer analytics
- calendar improvements
- roadmap refinement

### Phase 3: Expansion
- deeper placement readiness reporting
- advanced integrations
- mobile companion experience

---

## 16. Summary
TrackForge is not a generic to-do app. It is a focused productivity system for students preparing for placements. Its purpose is to turn scattered preparation into a measurable, repeatable daily process that helps users stay consistent and improve over time.
