interface IPeerMessage {
  id: string
  type: 'remote' | 'local'
  data: string
}
