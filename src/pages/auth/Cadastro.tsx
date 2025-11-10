import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/AuthContext'
import { apiService } from '../../services/api/apiService'
import { APIError } from '../../services/api/apiHelpers'
import { API_CONFIG } from '../../config/api'

interface AcessoFormData {
  nomeUsuario: string
  email: string
  senha: string
}

const Acessar: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [erro, setErro] = React.useState('')
  const [carregando, setCarregando] = React.useState(false)
  const [errosCampo, setErrosCampo] = React.useState<Partial<Record<keyof AcessoFormData, string>>>({})
  const [formData, setFormData] = React.useState<AcessoFormData>({
    nomeUsuario: '',
    email: '',
    senha: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Limpa erro do campo quando o usuário começa a digitar
    if (errosCampo[name as keyof AcessoFormData]) {
      setErrosCampo({
        ...errosCampo,
        [name]: undefined,
      })
    }
    // Limpa erro geral
    if (erro) {
      setErro('')
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setErro('')
      
      // Validações
      const novosErros: Partial<Record<keyof AcessoFormData, string>> = {}
      
      if (!formData.nomeUsuario.trim()) {
        novosErros.nomeUsuario = 'Nome de usuário é obrigatório.'
      }
      
      if (!formData.email.trim()) {
        novosErros.email = 'Email é obrigatório.'
      }
      
      if (!formData.senha.trim()) {
        novosErros.senha = 'Senha é obrigatória.'
      } else if (formData.senha.length < 6) {
        novosErros.senha = 'A senha deve ter no mínimo 6 caracteres.'
      }
      
      if (Object.keys(novosErros).length > 0) {
        setErrosCampo(novosErros)
        setErro('Por favor, preencha todos os campos corretamente.')
        return
      }
      
      setErrosCampo({})
      
      setCarregando(true)
      
      // Prepara os dados para acesso
      const dadosAcesso = {
        nomeUsuario: formData.nomeUsuario.trim(),
        email: formData.email.trim(),
        senha: formData.senha,
      }

      // Tenta cadastrar usando o endpoint de pacientes
      let novoUsuario
      
      try {
        const response = await fetch(`${API_CONFIG.BASE_URL}/pacientes`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dadosAcesso),
        })

        if (!response.ok) {
          throw new Error('Erro ao acessar')
        }

        novoUsuario = await response.json()
      } catch (error) {
        // Fallback: tenta usar endpoint genérico se específico não existir
        novoUsuario = await apiService.criarUsuario(dadosAcesso as any)
      }
      
      // Garante que o ID seja string (pode vir como number da API)
      if (novoUsuario?.id) {
        novoUsuario.id = String(novoUsuario.id)
      }
      
      // Garante que o nome seja preenchido (pode não vir da API)
      if (!novoUsuario?.nome && novoUsuario?.nomeUsuario) {
        novoUsuario.nome = novoUsuario.nomeUsuario
      }
      if (!novoUsuario?.nome && formData.nomeUsuario) {
        novoUsuario.nome = formData.nomeUsuario
      }
      
      // Garante que nomeUsuario esteja presente
      if (!novoUsuario?.nomeUsuario && formData.nomeUsuario) {
        novoUsuario.nomeUsuario = formData.nomeUsuario
      }
      
      console.log('✅ Acesso realizado:', novoUsuario)
      console.log('📋 Dados completos do usuário:', {
        id: novoUsuario?.id,
        nome: novoUsuario?.nome,
        nomeUsuario: novoUsuario?.nomeUsuario,
        email: novoUsuario?.email
      })
      
      login(novoUsuario)
      navigate('/dashboard')
    } catch (error) {
      if (error instanceof APIError) {
        setErro(error.message || 'Erro ao acessar')
      } else {
        const msg = error instanceof Error ? error.message : String(error)
        setErro(msg || 'Erro ao acessar. Verifique sua conexão.')
      }
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-3xl font-bold mb-2">Acessar</h1>
          <p className="text-gray-600">Acesse o sistema com os dados de administrador</p>
        </div>

        {erro && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
            {erro}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Nome de Usuário</label>
            <input
              name="nomeUsuario"
              type="text"
              value={formData.nomeUsuario}
              onChange={handleChange}
              placeholder="Seu nome de usuário"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errosCampo.nomeUsuario 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-green-600'
              }`}
            />
            {errosCampo.nomeUsuario && (
              <p className="mt-1 text-sm text-red-600">{errosCampo.nomeUsuario}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errosCampo.email 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-green-600'
              }`}
            />
            {errosCampo.email && (
              <p className="mt-1 text-sm text-red-600">{errosCampo.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Senha</label>
            <input
              name="senha"
              type="password"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Mínimo 6 caracteres"
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
                errosCampo.senha 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'focus:ring-green-600'
              }`}
            />
            {errosCampo.senha && (
              <p className="mt-1 text-sm text-red-600">{errosCampo.senha}</p>
            )}
            {!errosCampo.senha && formData.senha.length > 0 && formData.senha.length < 6 && (
              <p className="mt-1 text-sm text-yellow-600">
                A senha deve ter no mínimo 6 caracteres ({formData.senha.length}/6)
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {carregando ? 'Acessando...' : 'Acessar'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Acessar

