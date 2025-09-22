const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'EduChat API',
    uptime: process.uptime()
  });
});

// API Routes
app.get('/api/dashboard/stats', (req, res) => {
  res.json({
    totalStudents: 42,
    activeToday: 28,
    messagesToday: 342,
    avgTime: '18min',
    lastUpdated: new Date().toISOString(),
    growth: {
      students: '+3 este mês',
      active: '+5 desde ontem', 
      messages: '+15% vs ontem'
    }
  });
});

app.get('/api/students', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Ana Silva',
      email: 'ana.silva@email.com',
      status: 'active',
      level: 'intermediate',
      lastAccess: new Date(Date.now() - 3600000).toISOString(),
      messages: 127
    },
    {
      id: 2,
      name: 'João Santos', 
      email: 'joao.santos@email.com',
      status: 'active',
      level: 'beginner',
      lastAccess: new Date(Date.now() - 7200000).toISOString(),
      messages: 89
    },
    {
      id: 3,
      name: 'Maria Costa',
      email: 'maria.costa@email.com',
      status: 'inactive', 
      level: 'advanced',
      lastAccess: new Date(Date.now() - 86400000).toISOString(),
      messages: 234
    }
  ]);
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 EduChat API running on port ${PORT}`);
  console.log(`📊 Health: http://localhost:${PORT}/health`);
  console.log(`📈 Stats: http://localhost:${PORT}/api/dashboard/stats`);
  console.log(`👥 Students: http://localhost:${PORT}/api/students`);
});