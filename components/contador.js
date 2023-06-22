import { useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil'
import { estadoContador, incrementarContador, incrementarContadorX5, decrementarContador, resetearContador } from '../lib/recoil-atoms'

const useContador = () => ( {
  contador: useRecoilValue( estadoContador ),
  incrementar: useSetRecoilState( incrementarContador ),
  incrementarX5: useSetRecoilState( incrementarContadorX5 ),
  decrementar: useSetRecoilState( decrementarContador ),
  resetear: useResetRecoilState( resetearContador ),
} )

const Countador = () => {
  const { contador, incrementar, incrementarX5, decrementar, resetear } = useContador()
  return (
    <div>
      <h1>
        Contador: <span>{contador}</span>
      </h1>
      <button onClick={incrementar}>+1</button>
      <button onClick={decrementar}>-1</button>
      <button onClick={incrementarX5}>+5</button>
      <button onClick={resetear}>Reset</button>
    </div>
  )
}

export default Countador
