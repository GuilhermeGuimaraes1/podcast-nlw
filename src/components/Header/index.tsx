import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header(){
    //colocando a data atual
    const currenDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptBR,
    })

    return(
        //logo
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>

            <p>O melhor para você ouvir, sempre</p>

            <span>{currenDate}</span>
        </header>
    );
}