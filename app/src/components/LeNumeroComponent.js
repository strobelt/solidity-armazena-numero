import React from "react";

class LeNumero extends React.Component {
    state = { dataKey: null };

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.ArmazenaNumero;

        // let drizzle know we want to watch the `NumeroArmazenado` method
        const dataKey = contract.methods["ver"].cacheCall();

        // save the `dataKey` to local component state for later reference
        this.setState({ dataKey });
    }

    render() {
        // get the contract state from drizzleState
        const { ArmazenaNumero } = this.props.drizzleState.contracts;

        // using the saved `dataKey`, get the variable we're interested in
        const NumeroArmazenado = ArmazenaNumero.ver[this.state.dataKey];

        // if it exists, then we display its value
        return <p>Meu número armazenado: {NumeroArmazenado && NumeroArmazenado.value}</p>;
    }
}

export default LeNumero;