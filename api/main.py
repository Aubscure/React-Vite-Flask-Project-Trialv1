from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")


@app.route('/api/users', methods=['GET'])

def get_users():
    return jsonify({
        "data": [
            {"id": 1, "name": "John Doe"},
            {"id": 2, "name": "Jane Smith"},
            {"id": 3, "name": "Alice Johnson"}
        ]
    })

if __name__ == '__main__':
    app.run(debug=True, port=8080)