from flask_socketio import SocketIO
from flask import Flask, render_template

app = Flask(__name__)
app.config["SECRET_KEY"] = "12i3u18923889sdhbjhbq23792ehiusdbfhj12bsdkhadskashd8234u92eru09sdfuksdjfksd[]lk42jh12u4"

socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template("index.html")

@socketio.on("uploadimage")
def handle(imageData):
    print("Uploaded image")
    print(imageData)

if __name__ == "__main__":
    print("Running...")
    socketio.run(app)

