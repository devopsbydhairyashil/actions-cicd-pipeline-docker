# actions-cicd-docker-app

![GitHub Actions](https://img.shields.io/badge/GitHub--Actions-CI%2FCD-blue)
![Docker Compose](https://img.shields.io/badge/Docker--Compose-Multi--service-lightgrey)
![Region](https://img.shields.io/badge/Region-ap--northeast--1-orange)
![Status](https://img.shields.io/badge/Status-Ready-success)

## Overview
Multi-service Node.js (Express) app with Nginx and Redis. CI/CD implemented using GitHub Actions to build, test and deploy using Docker Compose on a remote server via SSH.

**Region:** ap-northeast-1
**Author:** devopsbydhairyashil

## Architecture (ASCII)
```
GitHub -> Actions -> Docker images -> Remote host (Docker Compose)
                  |                      |
                  v                      v
              DockerHub               Nginx reverse proxy
                                        Redis cache
```

## What is included
- `backend/` - Node.js Express app
- `nginx/` - nginx config for reverse proxy
- `docker-compose.yml` - compose file for app + redis + nginx
- `.github/workflows/ci-cd.yml` - GitHub Actions workflow
- `.env.example`, `README.md`

## Quick start (local)
1. Build images: `docker-compose build`
2. Run: `docker-compose up`
