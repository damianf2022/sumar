import React from 'react'
import './stylesPages/tablero.css'
const Tableros = () => {
    return (
        <div className='tablerocontent'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-tableros.jpg" alt="" />
            </div>

            <div className='subtablerocontent'>
                <h1><strong>Tablero de transferencia automática</strong></h1>
                <p>
                    Para cuando se necesita la certeza de contar con un suministro constante de energía eléctrica, no basta solo con tener un grupo electrógeno, si no se tiene la seguridad de que el mismo comience su funcionamiento de forma inmediata, al momento del un corte de suministro. Para tener la seguridad lo ideal sería tener como complemento del grupo electrógeno, un tablero de transferencia automática. Este tablero nos asegura un constante monitoreo de la red externa, para así de producirse una falla (baja o sobre tensión) o un corte, se ponga de inmediato en funcionamiento del grupo electrógeno.
                    <br /><br />
                    El TTA generalmente funciona al accionar distintos dispositivos como pueden ser contactores, llaves de transferencia o llaves motorizadas, correspondientes al a red externa y y grupo, y de un central PLC, que se encarga de accionar dichos dispositivos y cambiar el suministro de energía de la red a grupo, luego de cumplir con los parámetros de encendido que se previeron en su configuración.
                </p>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Tableros_imagen-1.png" alt="" />

                <h2>Módulo de paralelismo</h2>
                <p>El módulo de paralelismo, en un sistema que consta de una central DSE que es la encargada de medir, proteger y comandar la sincronización remota de grupos electrógenos con la red eléctrica.
                    <br /><br />
                    Cuando se necesita mayor potencia de la que solo un grupo electrógeno puede entregarnos, surge la posibilidad de trabajar con una o más plantas en paralelo, para ello, fabricamos equipos con módulos de sincronía para disponer de varias plantas de acuerdo a la demanda de la carga, optimizando de esta manera el consumo de combustible y garantizando un sistema de energía ininterrumpido por la detención de equipos al momento de realizar mantenimientos. Además ofrecemos adaptación de este sistema a cualquier equipo que lo requiera, cómo así modernización de sistemas obsoletos; adicionando también tableros de transferencia automática con transición sin cortes para la vuelta a la red, poniendo el sincronía las plantas con la red, evitando de esta manera un corte de suministro innecesario el cual puede llegar a afectar un proceso productivo.
                </p>

                <div className='fototable'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Tableros_imagen-2.png" alt="" />
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Tableros_imagen-3.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Tableros