import os
import sys
import pickle
import json

# Get the absolute path of the current file
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, "model.pkl")
vectorizer_path = os.path.join(current_dir, "vectorizer.pkl")
print(f"Loading model from: {model_path}")
print(f"Loading vectorizer from: {vectorizer_path}")

# Load model and vectorizer
with open(model_path, "rb") as f:
    model = pickle.load(f)

with open(vectorizer_path, "rb") as f:
    vectorizer = pickle.load(f)

# Read input
description = sys.argv[1]

# Predict
X_vect = vectorizer.transform([description])
prediction = model.predict(X_vect)

print(json.dumps({ "predicted_category": prediction[0] }))
