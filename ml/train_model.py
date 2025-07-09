import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import pickle
import os

# Paths
csv_path = os.path.join("backend", "data", "threats.csv")
model_path = os.path.join("backend", "ml", "model.pkl")
vectorizer_path = os.path.join("backend", "ml", "vectorizer.pkl")

# Load and clean data
df = pd.read_csv(csv_path)
df.columns = df.columns.str.strip()  # Remove any extra spaces

# Rename to match expected keys
df = df.rename(columns={
    'Cleaned Threat Description': 'cleaned_description',
    'Threat Category': 'threat_category'
})

# Drop rows with missing required values
df = df.dropna(subset=['cleaned_description', 'threat_category'])

# Feature and label
X = df['cleaned_description']
y = df['threat_category']

# Train model
vectorizer = TfidfVectorizer()
X_vect = vectorizer.fit_transform(X)

model = LogisticRegression(max_iter=1000)
model.fit(X_vect, y)

# Save model artifacts
with open(model_path, "wb") as model_file:
    pickle.dump(model, model_file)

with open(vectorizer_path, "wb") as vect_file:
    pickle.dump(vectorizer, vect_file)

print("✅ Model and vectorizer saved successfully.")
