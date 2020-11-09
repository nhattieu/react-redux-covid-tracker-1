import React from 'react';

import styles from './Loading.module.css';

Loading.propTypes = {
    
};

function Loading(props) {
    return (
        <div className={styles.container}>
            <div className={styles.loader__content}>
                <div className={styles.loader}>
                <div className={styles.loader}>
                <div className={styles.loader}>
                <div className={styles.loader}>
                <div className={styles.loader}>

                </div>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;