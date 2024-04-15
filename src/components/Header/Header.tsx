import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";

import { useState } from "react";

export const Header: React.FC = () => {
  //const [value, setValue] = useState(0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTODO List</h1>
          <span>Bem vindo Usuário</span>
        </div>
        <div>
          <StatsCard title="Tarefas Criadas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluidas" value={1} />
        </div>
      </div>
    </header>
  );
};
