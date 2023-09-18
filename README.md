# Be Our Guest

## Introduction
Be Our Guest is an innovative restaurant chatbot powered by LLM (Large Language Model) technology. It is designed to enhance the dining experience by alleviating common pain points faced by patrons (ordering, checking, obtaining details about the menu, etc).

## Inspiration
- Restaurants often struggle with under-staffing, leading to a subpar customer experience and reduced business.
- Patrons face challenges in getting servers' attention and encounter unnecessary wait times
- Patrons feel pressure order quickly rather take time to explore the menu

## Features
Be Our Guest provides a streamlined and user-friendly ordering experience that enhances customer service, reduces human errors, and decreases wait times.

## Technology Stack
- Python/Flask API for backend functionality.
- Web Speech API for speech recognition and synthesis, enabling voice-based interactions.
- Custom LLM model developed with Cohere for natural language understanding processing (Generate, Summarise, Classify, and Embed)
- HTML, CSS, and JavaScript for a responsive web app interface.
- Arduino paired with ultrasonic sensor for motion detection.

## Challenges we ran into
- Initially, we struggled to integrate motion sensing with the system but resolved it by implementing socketio.
- Learning to process real-time speech recognition output presented a learning curve.
- Hardware shortages led us to pivot to a web app demo from our original "smart table" concept.

## Achievements
- Optimization of prompts for the Cohere API to ensure precise information is sent to the kitchen.
- Building a functional system that improves the restaurant experience.

## What we learned
- While LLMs hold immense potential, there is ongoing work required to tailor them to specific use cases.
- The importance of prompt engineering in optimizing LLM performance for a particular application.

## Future Developments

- Expanding features to streamline reservations and restaurant check-in processes.
- Integration of custom hardware directly into restaurant tables for enhanced functionality.
- Enhancing the chatbot's empathy by recognizing returning customers and offering personalized recommendations.
- Leveraging data from sensors and customer interactions for in-depth analytics, optimizing costs and improving metrics analysis
