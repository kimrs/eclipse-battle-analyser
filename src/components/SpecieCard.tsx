import React from "react";

type Props = {
  name: string;
};

export const SpecieCard: React.FC<Props> = ({ name }) => <h3>{name} Specie</h3>;

export default SpecieCard;
