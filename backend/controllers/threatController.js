const Threat = require('../models/Threat');

// GET /api/threats
exports.getThreats = async (req, res) => {
    const { page = 1, limit = 10, category, search } = req.query;
    const pageNum = Math.max(parseInt(page), 1);
    const limitNum = Math.max(parseInt(limit), 1);
    const query = {};

    if (category) query.threat_category = { $regex: category, $options: 'i' };
    if (search) query.cleaned_description = { $regex: search, $options: 'i' };

    try {
        const threats = await Threat.find(query)
            .skip((pageNum - 1) * limitNum)
            .limit(limitNum);

        const total = await Threat.countDocuments(query);
        const totalPages = Math.ceil(total / limitNum);

        const response = {
            data: threats,
            total,
            totalPages,
            currentPage: pageNum,
        };

        res.json(response);
    } catch (err) {
        console.error('❌ Error:', err.message);
        res.status(500).json({ error: err.message });
    }
};



// GET /api/threats/:id
exports.getThreatById = async (req, res) => {
    try {
        const threat = await Threat.findById(req.params.id);
        if (!threat) return res.status(404).json({ message: 'Threat not found' });
        res.json(threat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET /api/threats/stats
exports.getThreatStats = async (req, res) => {
    try {
        const total = await Threat.countDocuments();

        const byCategory = await Threat.aggregate([
            { $group: { _id: '$threat_category', count: { $sum: 1 } } }
        ]);

        const bySeverity = await Threat.aggregate([
            { $group: { _id: '$severity_score', count: { $sum: 1 } } }
        ]);

        res.json({ total, byCategory, bySeverity });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
