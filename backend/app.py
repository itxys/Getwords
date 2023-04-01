from flask import Flask, jsonify
from data import prompts  # 新增

app = Flask(__name__)

@app.route('/api/prompts', methods=['GET'])
def get_prompts():
    return jsonify(prompts)  # 使用真实数据

if __name__ == '__main__':
    app.run(debug=True)
@app.route('/api/generate', methods=['POST'])
def generate_prompt():
    data = request.get_json()
    positive_prompts = data.get('positivePrompts', [])
    negative_prompts = data.get('negativePrompts', [])
    
    # 这里可以添加使用 AI 生成内容的代码
    
    result = {
        'positivePrompts': positive_prompts,
        'negativePrompts': negative_prompts,
        'generatedContent': '这里是 AI 生成的内容',
    }
    
    return jsonify(result)
