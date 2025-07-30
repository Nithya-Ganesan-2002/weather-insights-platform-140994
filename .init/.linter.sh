#!/bin/bash
cd /home/kavia/workspace/code-generation/weather-insights-platform-140994/weather_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

