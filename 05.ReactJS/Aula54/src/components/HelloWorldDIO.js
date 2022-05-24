import HelloDev from './HelloDev';

// Declarandoocomponente de função
function HelloWorldDIO() {

    // Retornando um componente HTML
    return (
        //Componente HTML que será renderizado no browser
    <div>
        <HelloDev/>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem, doloremque.
        </p>
    </div>
    );
}

//Exportar o componente para ser consumido em outros componentes ou paginas

export default HelloWorldDIO

