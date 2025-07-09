const mongoose = require('mongoose');

const threatSchema = new mongoose.Schema({
  threat_category: String,
  iocs: String,
  threat_actor: String,
  attack_vector: String,
  geographical_location: String,
  sentiment: String,
  severity_score: Number,
  predicted_category: String,
  suggested_defense: String,
  risk_level: String,
  cleaned_description: String,
  keywords: String,
  named_entities: String,
  topic_labels: String,
  word_count: Number,
});

module.exports = mongoose.model('Threat', threatSchema);
