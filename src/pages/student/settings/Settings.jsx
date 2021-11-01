import React from "react";
import styles from "./Settings.module.css";
import DefaultPhotograph from "./default_photograph.png";
import MaterialIcon from "material-icons-react";

export default class Settings extends React.Component {
    constructor() {
        super();
        this.state = {
            photograph: DefaultPhotograph,
        };
        this.handleChangePhotograph = this.handleChangePhotograph.bind(this);
    }
    handleChangePhotograph(event) {
        this.setState({
            photograph: URL.createObjectURL(event.target.files[0]),
        });
    }
    render() {
        return (
            <div className={styles.Settings}>
                <div className={styles.SettingsContainer}>
                    <h1 className={styles.SettingsTitle}>
                        Configuración de usuario
                    </h1>
                    <div className={styles.SettingsPhotographRow}>
                        <img
                            src={this.state.photograph}
                            className={styles.SettingsPhotograph}
                            alt="Fotografía de perfil"
                        />
                        <br />
                        <span className={styles.SettingsFileButton}>
                            <MaterialIcon icon="upload" color="#843bc7" />&nbsp;
                            {this.state.photograph === DefaultPhotograph
                                ? "Subir fotografía"
                                : "¡Listo! Ahora puedes actualizar tu fotografía"}{" "}
                            <input
                                type="file"
                                name=""
                                accept="image/gif, image/jpeg, image/png"
                                onChange={this.handleChangePhotograph}
                            />
                        </span>
                        <br />
                    </div>
                    <div className={styles.SettingsRow}>
                        <div className={styles.SettingsLabel}>
                            Nombre de usuario
                        </div>
                        <input
                            type="text"
                            name="username"
                            className={styles.SettingsInput}
                        />
                    </div>
                    <div className={styles.SettingsRow}>
                        <div className={styles.SettingsLabel}>
                            Nombre completo
                        </div>
                        <input
                            type="password"
                            name="username"
                            className={styles.SettingsInput}
                        />
                    </div>
                    <div className={styles.SettingsRow}>
                        <div className={styles.SettingsLabel}>
                            Correo electrónico
                        </div>
                        <input
                            type="password"
                            name="username"
                            className={styles.SettingsInput}
                        />
                    </div>
                    <button
                        type="submit"
                        className={styles.SettingsUpdateButton}
                    >
                        <MaterialIcon icon="edit" color="#FFFFFF" />&nbsp;
                        Actualizar información
                    </button>
                </div>
            </div>
        );
    }
}
