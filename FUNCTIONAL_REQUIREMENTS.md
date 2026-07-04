# TrackForge Functional Requirements and Implementation Plan

## 1. Product Objective
TrackForge is a minimal placement-preparation operating system for software engineering students. It helps users plan their day, manage study sessions, solve DSA problems, track habit consistency, and monitor placement readiness from a single focused dashboard.

The core experience should stay simple: open the app, see what to do next, complete it, and improve consistently.

---

## 2. Development Plan

### Phase 1 — Foundation
Build the base application shell and setup the architecture.

Goals:
- initialize frontend and backend structure
- configure routing, state management, theme, and layout
- create authentication base and user profile model
- prepare the database and basic API structure

Deliverables:
- working frontend shell
- backend API foundation
- database connection and initial schema

Suggested commit messages:
- chore: initialize TrackForge project structure
- feat: build app shell and core navigation
- chore: setup backend and database connection

---

### Phase 2 — Core Productivity Layer
Build the essential daily workflow features.

Goals:
- create dashboard widgets
- implement planner and task management
- enable task completion, categories, priorities, and tags
- add daily timeline and progress summary

Deliverables:
- dashboard with daily overview
- planner with categorized tasks
- basic task CRUD workflow

Suggested commit messages:
- feat: add dashboard overview and progress cards
- feat: implement smart daily planner
- feat: add task CRUD and category management

---

### Phase 3 — Focus and Study Execution
Add the tools that make daily execution measurable.

Goals:
- implement Pomodoro timer
- add focus mode
- record study sessions and focus statistics
- create daily reflection flow

Deliverables:
- timer experience for deep work
- distraction-free mode
- reflection prompts at the end of the day

Suggested commit messages:
- feat: add Pomodoro timer with presets
- feat: implement focus mode
- feat: record study sessions and focus stats

---

### Phase 4 — Placement Preparation Module
Introduce roadmap and placement-specific preparation features.

Goals:
- build roadmap for DSA, SQL, CS fundamentals, and backend topics
- allow users to mark topics as in progress or completed
- connect roadmap progress to tasks and study sessions

Deliverables:
- roadmap tracker
- topic-level progress representation
- placement-focused workflow support

Suggested commit messages:
- feat: build placement roadmap and topic tracker
- feat: connect roadmap progress to study activity
- feat: add topic completion tracking

---

### Phase 5 — LeetCode Integration
Add the core differentiator of the product.

Goals:
- fetch public LeetCode profile data
- display solved counts, acceptance rate, ranking, recent submissions, and contest rating where available
- add problem browser with filters and search
- support assignment of problems to today’s plan

Deliverables:
- LeetCode profile summary
- problem browser and assignment workflow
- daily and weekly problem planning

Suggested commit messages:
- feat: integrate LeetCode profile data
- feat: add problem browser and filters
- feat: enable daily problem assignment flow

---

### Phase 6 — Analytics and Insights
Turn user activity into visible progress.

Goals:
- add charts for study time, consistency, task completion, and LeetCode growth
- build weekly and monthly views
- show improvement trends over time

Deliverables:
- analytics dashboard
- trend reports and progress visualization

Suggested commit messages:
- feat: add analytics charts and progress insights
- feat: visualize study consistency and growth
- feat: add weekly and monthly trend reports

---

### Phase 7 — Habits, Goals, and Calendar
Expand the product into a complete preparation operating system.

Goals:
- add calendar views and rescheduling
- add habit tracker
- add goal tracker for long-term milestones
- add placement readiness summary

Deliverables:
- calendar and habit workflow
- long-term goals tracking
- placement health overview

Suggested commit messages:
- feat: add calendar and task rescheduling
- feat: implement habit tracker
- feat: add goal tracking and readiness summary

---

### Phase 8 — Polish and Launch
Ensure the MVP is stable and production-ready.

Goals:
- fix bugs and improve responsiveness
- add onboarding and empty states
- test core flows
- prepare deployment

Deliverables:
- polished MVP
- deployment-ready build
- documentation and setup instructions

Suggested commit messages:
- refactor: polish UX and improve responsiveness
- test: add end-to-end coverage for core flows
- chore: prepare v1 deployment and documentation

---

## 3. Required API Endpoints

### Authentication
- POST /api/auth/register
  - register a new user
- POST /api/auth/login
  - login and return access token
- POST /api/auth/refresh
  - refresh an access token
- POST /api/auth/logout
  - invalidate refresh token

### Users
- GET /api/users/me
  - get current user profile
- PUT /api/users/me
  - update profile details

### Tasks
- GET /api/tasks
  - get all tasks for the current user
- POST /api/tasks
  - create a task
- GET /api/tasks/:id
  - get a single task
- PUT /api/tasks/:id
  - update a task
- DELETE /api/tasks/:id
  - delete a task
- PATCH /api/tasks/:id/complete
  - mark task as complete or incomplete
- PATCH /api/tasks/:id/reorder
  - reorder tasks with drag/drop

### Subtasks
- POST /api/tasks/:taskId/subtasks
  - create a subtask
- PUT /api/subtasks/:id
  - update a subtask
- DELETE /api/subtasks/:id
  - delete a subtask

### Study Sessions
- GET /api/study-sessions
  - get study sessions for the current user
- POST /api/study-sessions
  - create a new study session
- PUT /api/study-sessions/:id
  - update session details

### Pomodoro Sessions
- GET /api/pomodoro-sessions
  - get pomodoro session history
- POST /api/pomodoro-sessions
  - create a pomodoro session record

### Reflections
- GET /api/reflections
  - fetch daily reflections
- POST /api/reflections
  - create a reflection entry

### Roadmap Topics
- GET /api/roadmap/topics
  - get roadmap topics and progress
- PUT /api/roadmap/topics/:id
  - update topic progress status

### LeetCode Data
- GET /api/leetcode/profile
  - fetch or sync LeetCode profile information
- GET /api/leetcode/problems
  - fetch problems with filters and search
- POST /api/leetcode/problems/assign
  - assign a problem to today’s planner

### Analytics
- GET /api/analytics/summary
  - get dashboard analytics summary
- GET /api/analytics/trends
  - get weekly and monthly progress trends

### Habits
- GET /api/habits
  - get all habits
- POST /api/habits
  - create a habit
- PUT /api/habits/:id
  - update a habit
- PATCH /api/habits/:id/check
  - mark a habit as completed

### Goals
- GET /api/goals
  - get all goals
- POST /api/goals
  - create a goal
- PUT /api/goals/:id
  - update a goal

### Placement Readiness
- GET /api/placement/readiness
  - get overall placement readiness summary

---

## 4. MongoDB Schema Design

### User
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "passwordHash": "string",
  "username": "string",
  "role": "string",
  "avatarUrl": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Task
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "title": "string",
  "description": "string",
  "category": "string",
  "priority": "high | medium | low",
  "status": "pending | in-progress | completed | archived",
  "estimatedMinutes": "number",
  "actualMinutes": "number",
  "deadline": "Date",
  "tags": ["string"],
  "subtasks": [
    {
      "title": "string",
      "completed": "boolean"
    }
  ],
  "dependsOn": ["ObjectId"],
  "recurring": "boolean",
  "recurrencePattern": "string",
  "notes": "string",
  "history": [
    {
      "action": "string",
      "timestamp": "Date"
    }
  ],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### StudySession
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "taskId": "ObjectId",
  "topic": "string",
  "durationMinutes": "number",
  "type": "study | revision | coding | project",
  "startTime": "Date",
  "endTime": "Date",
  "notes": "string",
  "createdAt": "Date"
}
```

### PomodoroSession
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "durationMinutes": "number",
  "mode": "25/5 | 50/10 | 90/15 | custom",
  "completed": "boolean",
  "startedAt": "Date",
  "endedAt": "Date",
  "createdAt": "Date"
}
```

### Reflection
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "date": "Date",
  "completed": "string",
  "blocked": "string",
  "tomorrowPriority": "string",
  "createdAt": "Date"
}
```

### RoadmapTopic
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "category": "leetcode | sql | cs | backend",
  "name": "string",
  "status": "not-started | in-progress | completed",
  "progressPercent": "number",
  "updatedAt": "Date"
}
```

### LeetCodeProfile
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "username": "string",
  "totalSolved": "number",
  "easySolved": "number",
  "mediumSolved": "number",
  "hardSolved": "number",
  "acceptanceRate": "number",
  "ranking": "number",
  "currentStreak": "number",
  "contestRating": "number",
  "lastSyncedAt": "Date",
  "recentSubmissions": [
    {
      "title": "string",
      "status": "string",
      "timestamp": "Date"
    }
  ]
}
```

### Habit
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "name": "string",
  "category": "string",
  "frequency": "daily | weekly | custom",
  "completedDates": ["Date"],
  "createdAt": "Date"
}
```

### Goal
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "title": "string",
  "type": "problems | projects | resume | interviews | subjects",
  "target": "number",
  "current": "number",
  "unit": "string",
  "completed": "boolean",
  "createdAt": "Date"
}
```

### PlacementReadiness
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "readinessScore": "number",
  "dsaProgress": "number",
  "sqlProgress": "number",
  "csProgress": "number",
  "projectsProgress": "number",
  "resumeStatus": "string",
  "mockInterviewsCompleted": "number",
  "contestActivity": "number",
  "updatedAt": "Date"
}
```

---

## 5. Suggested GitHub Commit Message Sequence

### Early commits
- chore: initialize TrackForge project structure
- feat: build app shell and core navigation
- feat: add dashboard overview and progress cards
- feat: implement smart daily planner

### Mid development
- feat: add task CRUD and category management
- feat: add Pomodoro timer with presets
- feat: implement focus mode
- feat: build placement roadmap and topic tracker
- feat: integrate LeetCode profile data

### Later commits
- feat: add analytics charts and progress insights
- feat: add calendar and task rescheduling
- feat: implement habit tracker
- feat: add goal tracking and readiness summary
- refactor: polish UX and improve responsiveness
- test: add end-to-end coverage for core flows
- chore: prepare v1 deployment and documentation

---

## 6. Implementation Notes
- Keep the first version focused on the daily workflow before adding advanced integrations.
- Use MongoDB for flexibility with nested task data, study sessions, and progress entities.
- Prefer simple, minimal UI patterns over feature-heavy screens.
- Make the dashboard the central entry point for all actions.

---

## 7. Summary
This plan gives TrackForge a practical build path from MVP to a complete placement-preparation platform. It includes the required API surface, MongoDB schema structure, and a commit-message roadmap for development.
