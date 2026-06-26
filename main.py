from flask import Flask, render_template
import os

app = Flask(__name__)

def chunk(lst, size):
    return [lst[i:i+size] for i in range(0, len(lst), size)]

@app.route("/")
def home():
    images = sorted(os.listdir("static/images"))
    images = [f"/static/images/{img}" for img in images]

    # each spread = 4–6 images (2 pages)
    spreads_raw = chunk(images, 4)

    spreads = []

    for s in spreads_raw:
        mid = len(s) // 2
        spreads.append({
            "left": s[:mid],
            "right": s[mid:]
        })

    return render_template("index.html", spreads=spreads)

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)