# Be Our Guest

## Introduction
Be Our Guest revolutionizes the dining landscape with its cutting-edge chatbot, powered by Cohere's Large Language Models (LLMs). This chatbot not only elevates the customer experience by streamlining common tasks such as ordering and bill payment but also empowers restaurants and small businesses to optimize their resource management.

## Inspiration
- The restaurant industry has grappled with understaffing issues since 2019, resulting in compromised customer service, inflated operational costs, and diminished revenue. Interestingly, the quality and flavor of the food have generally improved over this period.
- Diners often find it difficult to catch the attention of servers, leading to frustrating delays—from securing a table to settling the bill.
- Customers frequently feel rushed to place their orders, missing the opportunity to fully explore the menu.

## Features
Be Our Guest offers an intuitive, user-centric ordering experience that elevates customer service, minimizes human error, and reduces waiting times. Our Cohere LLM (Coral) powered table engages in verbal interactions with patrons, displaying the empathy and courtesy of a human host. It efficiently takes orders, suggests upsells when appropriate, and communicates these orders seamlessly to the kitchen staff.

## Technology Stack
- Backend functionality is handled by a Python/Flask API.
- The Web Speech API facilitates speech recognition and synthesis, enabling voice-activated interactions.
- A custom LLM model, developed in collaboration with Cohere, performs natural language understanding tasks such as generation, summarization, classification, and embedding.
- The front-end employs HTML, CSS, and JavaScript to create a responsive web application interface.
- An Arduino, paired with an ultrasonic sensor, is used for motion detection.

## Challenges Encountered
- Initially, integrating motion detection proved difficult, but this was overcome by implementing SocketIO.
- Mastering real-time speech recognition output posed a steep learning curve.
- Hardware shortages necessitated a pivot from our original "smart table" concept to a web app demo.

## Achievements
- Custom, engineered prompts for the Cohere API to ensure the kitchen receives accurate and concise information.
- Successfully built a system that significantly enhances the overall restaurant experience.

## Lessons Learned
- While LLMs offer tremendous potential, they require ongoing customization for specialized applications.
- The art of prompt engineering is crucial for optimizing LLM performance in specific use cases.

## Future Developments

- Expanding features to streamline reservations and restaurant check-in processes.
- Integration of custom hardware directly into restaurant tables for enhanced functionality.
- Enhancing the chatbot's empathy by recognizing returning customers and offering personalized recommendations.
- Leveraging data from sensors and customer interactions for in-depth analytics, optimizing costs and improving metrics analysis
