from flask import Flask
from pymongo import MongoClient

client = MongoClient("mongodb://findme:findme@localhost:27017/findme")
app = Flask(__name__)
db = client['your-database']

@app.route("/")
def hello_world():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True)