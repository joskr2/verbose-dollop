import { atom, selector } from 'recoil'

const estadoContador = atom( {
  key: 'contador',
  default: 0,
} )

const incrementarContador = selector( {
  key: 'incrementarContador',
  get: ( { get } ) => get( estadoContador ),
  set: ( { set } ) => set( estadoContador, ( estadoActual ) => estadoActual + 1 ),
} )
const incrementarContadorX5 = selector( {
  key: 'incrementarContadorX5',
  get: ( { get } ) => get( estadoContador ),
  set: ( { set } ) => set( estadoContador, ( estadoActual ) => estadoActual + 5 ),
} )

const resetearContador = selector( {
  key: 'resetearContador',
  get: ( { get } ) => get( estadoContador ),
  set: ( { set } ) => set( estadoContador, 0 ),
} )

const decrementarContador = selector( {
  key: 'decrementarContador',
  get: ( { get } ) => get( estadoContador ),
  set: ( { set } ) => set( estadoContador, ( estadoActual ) => estadoActual > 0 ? estadoActual - 1 : 0 ),
} )

export {
  estadoContador,
  incrementarContador,
  incrementarContadorX5,
  decrementarContador,
  resetearContador
}