const orderDonePhrases = [
    "that's all",
    "that's it for me",
    "that'll be everything",
    "I'm done ordering",
    "I'm finished with my order",
    "I'm good now",
    "I'm good",
    "I won't need anything else"
  ];

let socket = io.connect('http://localhost:5000');
socket.on('receive_requests', function(data) {
    // Handle the received notification data here
    toggleStartStop();
});

  let recognizing = false;
  
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.onend = reset;
  
  recognition.onresult = (event) => {
    let finalTranscript = "";
    let interimTranscript = "";
    for (let i = 0; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }
  
    document.getElementById("interimOutput").innerHTML = interimTranscript;
    document.getElementById("finalOutput").innerHTML = finalTranscript;
  
    if (orderDonePhrases.some(orderPhrase => finalTranscript.includes(orderPhrase))) {
      // call cohere api
      sendOrder()
      // Speak response
      readResponse("This is the response from the Cohere API")
      reset();
    }
  }
  
  function reset() {
    recognizing = false;
    button.innerHTML = "Click to Speak";
  }
  
  function toggleStartStop() {
    if (recognizing) {
      recognition.stop();
      reset();
    } else {
      recognition.start();
      recognizing = true;
      button.innerHTML = "Click to Stop";
      document.getElementById("interimOutput").innerHTML = "";
      document.getElementById("finalOutput").innerHTML = "";
    }
  }
  
  function readResponse(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }
  
  function sendOrder() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Return the response as text
      })
      .then(textData => {
        return textData; // Return the text data from the API
      })
      .catch(error => {
        console.error('API call error:', error);
        throw error; // Rethrow the error for further handling if needed
      });
  }