import React from "react";
import Serie from "./Serie";

export default class ListaSeries extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <>
                {this.props.series.map((serie) => (
                    <Serie key={serie.name} name={serie.name} img={serie.img} year={serie.year} studio={serie.studio} />
                ))}
             
             </>
        );
    }
}