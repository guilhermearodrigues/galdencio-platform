export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'rgba(255,255,255,0.95)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: '#4c6ef5',
            marginBottom: '10px' 
          }}>
            🚀 EduChat AI Platform
          </h1>
          <p style={{ color: '#666', fontSize: '1.2rem' }}>
            Dashboard do Professor - Versão 1.0
          </p>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>👥</div>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Total de Alunos</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4c6ef5' }}>42</div>
            <div style={{ color: '#22c55e', fontSize: '0.9rem' }}>+3 este mês</div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🟢</div>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Alunos Ativos</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4c6ef5' }}>28</div>
            <div style={{ color: '#22c55e', fontSize: '0.9rem' }}>+5 desde ontem</div>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💬</div>
            <h3 style={{ color: '#333', marginBottom: '10px' }}>Mensagens Hoje</h3>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4c6ef5' }}>342</div>
            <div style={{ color: '#22c55e', fontSize: '0.9rem' }}>+15% vs ontem</div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333', marginBottom: '20px' }}>🎉 Deploy Realizado com Sucesso!</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3 style={{ color: '#4c6ef5' }}>✅ Frontend</h3>
              <p>Next.js rodando perfeitamente</p>
              <p>Build estático otimizado</p>
              <p>Interface responsiva</p>
            </div>
            <div>
              <h3 style={{ color: '#6c5ce7' }}>✅ Backend</h3>
              <p>API Express funcionando</p>
              <p>Endpoints configurados</p>
              <p>Ready para produção</p>
            </div>
          </div>
          
          <div style={{ 
            marginTop: '20px', 
            padding: '20px', 
            backgroundColor: '#f0f9ff', 
            borderRadius: '10px',
            border: '1px solid #e0f2fe'
          }}>
            <h4 style={{ color: '#0369a1', marginBottom: '10px' }}>🔗 API Endpoints:</h4>
            <div style={{ color: '#334155', lineHeight: '1.6' }}>
              <div><strong>GET /health</strong> - Status da API</div>
              <div><strong>GET /api/dashboard/stats</strong> - Estatísticas</div>
              <div><strong>GET /api/students</strong> - Lista de alunos</div>
            </div>
          </div>
        </div>

        <footer style={{ 
          textAlign: 'center', 
          marginTop: '40px',
          color: '#666'
        }}>
          <p>🚀 Deployed with Coolify on Hetzner</p>
          <p style={{ fontSize: '0.9rem' }}>
            Frontend: Next.js | Backend: Node.js + Express
          </p>
        </footer>
      </div>
    </div>
  )
}