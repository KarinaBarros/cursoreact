const AnotherComponent = () => {
    const handleClick = () => {
        console.log("clickou no botão!");
    };
return(
    <div>
        <p>Segundo Componente</p>
        <button onClick={handleClick}>Evento de clique</button>
        <hr/>
        <button onClick={() => console.log("teste")}>Evento no elemento</button>
    </div>
);
};
export default AnotherComponent