from flask import Flask, request, jsonify
from flask_cors import CORS  # 👈 import CORS
import pickle
import os

app = Flask(__name__)
CORS(app)  # ✅ enable CORS for all domains (or restrict to frontend later)

# Define absolute or relative paths correctly
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.pkl")
VECTORIZER_PATH = os.path.join(os.path.dirname(__file__), "vectorizer.pkl")

# Load model and vectorizer
try:
    with open(MODEL_PATH, "rb") as f:
        model = pickle.load(f)

    with open(VECTORIZER_PATH, "rb") as f:
        vectorizer = pickle.load(f)

    print("✅ Model and vectorizer loaded.")

except Exception as e:
    print(f"❌ Failed to load model/vectorizer: {e}")
    model = None
    vectorizer = None

@app.route("/api/analyze", methods=["POST"])
def analyze():
    if model is None or vectorizer is None:
        return jsonify({"error": "Model not loaded"}), 500

    data = request.get_json()
    description = data.get("description", "")

    if not description.strip():
        return jsonify({"error": "Empty description"}), 400

    try:
        X = vectorizer.transform([description])
        prediction = model.predict(X)[0]
        return jsonify({"predicted_category": prediction})

    except Exception as e:
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
