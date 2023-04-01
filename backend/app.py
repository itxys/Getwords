from flask import Flask, request, jsonify
import random

app = Flask(__name__)

positive_prompts = [
    "Tell me about something that made you happy today.",
    "What is something you are proud of?",
    "What is a recent accomplishment you achieved?",
    "What is something you are looking forward to?",
    "What is something you love about yourself?",
    "What is something good that happened this week?",
    "What is something that always makes you smile?"
]

negative_prompts = [
    "Tell me about a challenge you are currently facing.",
    "What is something you have been struggling with lately?",
    "What is a recent disappointment you experienced?",
    "What is something that has been stressing you out?",
    "What is something you are afraid of?",
    "What is something that has been making you sad?",
    "What is something you wish you could change about yourself?"
]

@app.route('/')
def index():
    return "Welcome to GetWords API!"

@app.route('/prompt')
def prompt():
    prompt_type = request.args.get('type')
    if prompt_type == 'positive':
        prompt = random.choice(positive_prompts)
    elif prompt_type == 'negative':
        prompt = random.choice(negative_prompts)
    else:
        return jsonify({'error': 'Invalid prompt type.'}), 400

    return jsonify({'prompt': prompt})

if __name__ == '__main__':
    app.run(debug=True)
