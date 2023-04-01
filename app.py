from flask import Flask, render_template, request, jsonify
from get_words import GetWords

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/getwords', methods=['POST'])
def get_words():
    text = request.form['text']
    result = GetWords(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
    app.run(host='0.0.0.0', port=5000, debug=True)
