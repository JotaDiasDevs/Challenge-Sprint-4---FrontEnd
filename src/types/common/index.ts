// Tipos comuns compartilhados entre diferentes partes da aplicação
// ContactFormData agora está definido em consulta.ts para melhor organização

// Intersection Types explícitos
import type { Consulta } from './consulta'
import type { Usuario } from '../auth'

export type ConsultaComUsuario = Consulta & {
  usuario: Usuario
  usuarioNome?: string
}

export type ConsultaDetalhada = Consulta & {
  usuario: Usuario
  historico?: string[]
  anexos?: string[]
}

export * from './consulta'

