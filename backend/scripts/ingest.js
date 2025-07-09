const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Threat = require('../models/Threat');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const threats = [];

fs.createReadStream('data/threats.csv')
  .pipe(csv())
  .on('data', async (row) => {
  console.log('CSV row:', row); // 🔍 Add this to check parsed data

  const threat = new Threat({
    threat_category: row['Threat Category'],
    iocs: row['IOCs (Indicators of Compromise)'],
    threat_actor: row['Threat Actor'],
    attack_vector: row['Attack Vector'],
    geographical_location: row['Geographical Location'],
    sentiment: row['Sentiment in Forums'],
    severity_score: Number(row['Severity Score']),
    predicted_category: row['Predicted Threat Category'],
    suggested_defense: row['Suggested Defense Mechanism'],
    risk_level: row['Risk Level Prediction'],
    cleaned_description: row['Cleaned Threat Description'],
    keywords: row['Keyword Extraction'],
    named_entities: row['Named Entities (NER)'],
    topic_labels: row['Topic Modeling Labels'],
    word_count: Number(row['Word Count']),
  });

  console.log('Parsed threat:', threat); // 🔍 Add this

  try {
    await threat.save();
  } catch (e) {
    console.error('Save error:', e);
  }
})
