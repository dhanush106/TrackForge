# description.md

# TrackForge

### *Minimal Placement Operating System for Developers*

---

# Overview

**TrackForge** is a productivity-first placement preparation dashboard designed specifically for software engineering students.

Unlike traditional productivity applications that try to manage every aspect of life, TrackForge focuses on one thing:

> **Helping a student become placement-ready through consistent execution.**

The application combines a minimal daily planner, an intelligent task organization system, LeetCode synchronization, study tracking, Pomodoro timer, and progress analytics into one distraction-free workspace.

There is **no AI**, **no note-taking overload**, and **no unnecessary features**.

Everything inside the application exists for a single purpose:

> **Wake up → Open TrackForge → Know exactly what to do → Finish it → Improve every day.**

---

# Vision

Most placement preparation fails because students know *what* they should study but don't know:

* what to solve today
* what topic they're currently on
* how consistent they are
* whether they're actually improving
* how much time they're spending
* what remains before interviews

TrackForge becomes a personal operating system that organizes every day of placement preparation.

---

# Target Users

* Placement Preparation Students
* GATE + Placement Aspirants
* Software Engineering Students
* Competitive Programming Beginners
* Developers preparing for internships
* Final-year students preparing for SDE interviews

---

# Design Philosophy

The application should feel like:

* Linear
* Fast
* Minimal
* Calm
* Productivity-focused

No social feed.

No AI assistant.

No notifications overload.

No unnecessary animations.

Every screen should answer only one question:

> "What should I do next?"

---

# Core Modules

---

# 1. Dashboard

The dashboard is the heart of the application.

It immediately tells the user where they currently stand.

Sections include:

---

## Today's Progress

Displays

* Today's Date
* Greeting
* Current Streak
* Tasks Completed
* Study Hours
* Active Timer
* Today's Focus

---

## Daily Progress Ring

Shows

* Tasks Completed
* Study Goal %
* Pomodoro Completion
* LeetCode Goal

---

## Quick Statistics

Examples

Current Streak

18 Days

Problems Solved Today

4

Study Hours

5.2 hrs

Pomodoros

9

Completion %

82%

Pending Tasks

6

---

## Weekly Heatmap

GitHub-style heatmap

Shows

* productive days
* inactive days
* streak visualization

---

## Daily Timeline

Visual schedule

Example

7:00
Morning Routine

8:00
DBMS

10:00
LeetCode

11:30
Break

12:00
Project

2:00
Lunch

3:00
SQL

5:00
Revision

7:00
Gym

---

# 2. Smart Daily Planner

Instead of a normal todo list...

Tasks belong to categories.

Examples

Placement

* LeetCode
* SQL
* Aptitude
* CS Subjects
* Projects

Health

* Gym
* Walk
* Water

Personal

* Reading
* Journal

Learning

* Backend
* React
* System Design

Each task contains

* Title
* Description
* Category
* Priority
* Estimated Time
* Deadline
* Status
* Tags

---

# 3. Powerful Todo System

Features

Multiple priorities

* High
* Medium
* Low

Drag & Drop

Subtasks

Task Dependencies

Recurring Tasks

Deadline Alerts

Task History

Task Notes

Estimated vs Actual Time

Progress Bar

Completion Percentage

---

# 4. Placement Roadmap

One dedicated section.

Example

LeetCode

□ Arrays

□ Strings

□ Linked List

□ Stack

□ Queue

□ Binary Search

□ Trees

□ Graphs

□ DP

□ Greedy

□ Tries

□ Segment Tree

SQL

□ Basics

□ Group By

□ Joins

□ Window Functions

□ CTE

□ Recursive Queries

CS Subjects

□ OS

□ DBMS

□ CN

□ OOP

□ System Design

Backend

□ REST APIs

□ JWT

□ Redis

□ Docker

□ AWS

Progress is automatically tracked.

---

# 5. LeetCode Sync (Core Feature)

This is the main differentiator.

The application automatically fetches your public LeetCode profile.

It should display

* Total Problems Solved
* Easy
* Medium
* Hard
* Current Streak (if available through the chosen data source)
* Acceptance Rate
* Ranking (if available)
* Recent Submissions (where supported)
* Contest Rating (if available)

---

## Problem Browser

Automatically fetches problems.

Filters

Difficulty

* Easy
* Medium
* Hard

Topic

* Arrays
* Trees
* DP
* Graph
* Sliding Window
* Heap
* BFS
* DFS
* Binary Search

Status

* Solved
* Unsolved

Companies (where available through the chosen source)

Search

Sorting

Bookmark

---

## Daily Assignment

The user can select problems directly from the fetched list.

Example

Today's Problems

✓ Two Sum

✓ Merge Intervals

✓ LRU Cache

✓ Word Ladder

Each problem becomes a task inside Today's Planner.

No manual entry required.

---

## Weekly Planning

Select

Monday

2 Arrays

Tuesday

2 Trees

Wednesday

Graphs

Thursday

DP

Friday

Heap

Saturday

Revision

Sunday

Contest

The planner automatically creates daily tasks.

---

## Blind 75

Built-in tracking.

NeetCode 150

Built-in tracking.

Striver Sheet

Built-in tracking.

Custom Lists

Supported.

---

# 6. Pomodoro Timer

Minimal timer.

Modes

25/5

50/10

90/15

Custom

Features

Pause

Resume

Skip

Sound

Auto Start Break

Auto Start Next Session

Focus Statistics

Today's Focus Time

Weekly Focus Time

Monthly Focus Time

---

# 7. Focus Mode

One click.

Everything disappears.

Only

Current Task

Timer

Remaining Time

Nothing else.

---

# 8. Daily Reflection

At night

Three questions

What did I complete?

What blocked me?

Tomorrow's priority?

Takes less than one minute.

---

# 9. Analytics

Charts include

Daily Hours

Weekly Hours

Monthly Hours

Task Completion

Category Distribution

Study Time

LeetCode Growth

Topic Coverage

Difficulty Distribution

Consistency

Average Completion Time

---

# 10. Calendar

Monthly view

Weekly view

Daily view

Drag tasks

Reschedule

Recurring tasks

---

# 11. Habit Tracker

Simple.

Gym

Water

Reading

Sleep

Meditation

Walking

Custom Habits

Minimal interface.

---

# 12. Goal Tracker

Examples

Solve

500 Problems

Current

273

Progress

████████░░

Complete

DBMS

78%

Complete

OS

62%

Projects

2/5

Resume

Done

Mock Interviews

6/20

---

# 13. Placement Dashboard

Displays

Interview Readiness Score

DSA Progress

CS Fundamentals

SQL Progress

Projects

Resume

Mock Interviews

Contest Activity

Overall Completion

This becomes your placement health report.

---

# 14. Daily Workflow

Morning

Open TrackForge

↓

Review Dashboard

↓

Start Timer

↓

Complete Assigned Tasks

↓

Sync Progress

↓

Review Analytics

↓

Plan Tomorrow

↓

Close

No extra steps.

---

# Future Enhancements (Optional)

* GitHub contribution tracking
* Codeforces profile synchronization
* CodeChef profile synchronization
* HackerRank progress
* Resume checklist
* Interview tracker
* Company-wise preparation lists
* Custom study templates
* Offline mode
* Mobile companion application

---

# Technical Direction

Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* TanStack Query
* Zustand

Backend

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* Redis (optional)

Authentication

* JWT
* Refresh Tokens

Charts

* Recharts

Drag & Drop

* dnd-kit

Calendar

* FullCalendar

Timer

* Native implementation

Deployment

* Docker
* Railway / Render
* Vercel

---

# Why This Project Stands Out

Most planners help users manage tasks.

TrackForge helps users **become employable**.

It transforms scattered placement preparation into a measurable, repeatable daily system by combining planning, execution, time management, and coding practice in one focused workspace. Instead of asking users to remember what to study next, it continuously surfaces the right work for the day, integrates coding progress from LeetCode, and visualizes long-term consistency. The result is a lightweight operating system built specifically for placement success rather than a generic productivity app.

---

# Success Metric

A user should be able to prepare for placements for **6–12 months** using only TrackForge as their daily workspace, with every coding problem, study session, project task, and interview milestone organized, tracked, and measurable from a single dashboard.
