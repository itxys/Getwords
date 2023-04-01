from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 在这里定义一个空的词汇表
vocab = {}

# 添加一个 API 路由
@app.route('/api/getwords', methods=['POST'])
def get_words():
    # 从 POST 请求的 JSON 中获取参数
    category = request.json.get('category')
    search_text = request.json.get('searchText')

    # 在词汇表中查找与搜索文本匹配的单词
    results = []
    for word, info in vocab.items():
        if category == 'all' or info['category'] == category:
            if search_text.lower() in word.lower():
                results.append({'word': word, 'info': info})

    # 返回匹配的单词
    return jsonify(results)

if __name__ == '__main__':
    # 在这里载入你的词汇表
    # ...
    
    app.run()
