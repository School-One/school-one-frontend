import React, { useState, useContext } from 'react';
import styles from './Settings.module.css';
import DefaultPhotograph from './default_photograph.png';
import MaterialIcon from 'material-icons-react';
import StartScreen from '../../Start/StartScreen';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../../graphql/query';
import LoadingBox from '../../../components/main/loadingBox/LoadingBox';
import MessageBox from '../../../components/main/messageBox/MessageBox';
import { AuthContext } from '../../../context/auth';
export default function SettingScreen(props) {
  const [photograph, setPhotograph] = useState(DefaultPhotograph);
  const { user } = useContext(AuthContext);
  if (!user) {
    props.history.push('/');
  }
  function handleChangePhotograph(event) {
    setPhotograph(URL.createObjectURL(event.target.files[0]));
  }
  const { error, data: { getUser } = {} } = useQuery(GET_USER, {
    variables: {
      userId: user.id,
    },
  });

  let SettingMarkup;

  if (!getUser) {
    SettingMarkup = <LoadingBox />;
  } else {
    const { id, name, lastname, cellphone, email } = getUser;

    SettingMarkup = (
      <StartScreen>
        {error ? (
          <MessageBox variant="danger">{error.message}</MessageBox>
        ) : (
          <>
            <div className={styles.Settings}>
              <div className={styles.SettingsContainer}>
                <h1 className={styles.SettingsTitle}>
                  Configuración de usuario
                </h1>
                <div className={styles.SettingsPhotographRow}>
                  <img
                    src={photograph}
                    className={styles.SettingsPhotograph}
                    alt="Fotografía de perfil"
                  />
                  <br />
                  <span className={styles.SettingsFileButton}>
                    <MaterialIcon icon="upload" color="#843bc7" />
                    &nbsp;
                    {photograph === DefaultPhotograph
                      ? 'Subir fotografía'
                      : '¡Listo! Ahora puedes actualizar tu fotografía'}{' '}
                    <input
                      type="file"
                      name=""
                      accept="image/gif, image/jpeg, image/png"
                      onChange={handleChangePhotograph}
                    />
                  </span>
                  <br />
                </div>
                <div className={styles.SettingsRow}>
                  <div className={styles.SettingsLabel}>Nombre completos</div>
                  <input type="text" name="" className={styles.SettingsInput} value={name} />
                </div>
                <div className={styles.SettingsRow}>
                  <div className={styles.SettingsLabel}>Apellido completo</div>
                  <input type="text" name="" className={styles.SettingsInput} value={lastname} />
                </div>
                <div className={styles.SettingsRow}>
                  <div className={styles.SettingsLabel}>Correo electrónico</div>
                  <input
                    type="text"
                    name="username"
                    value={email}
                    className={styles.SettingsInput}
                  />
                </div>
                <button type="submit" className={styles.SettingsUpdateButton}>
                  <MaterialIcon icon="edit" color="#FFFFFF" />
                  &nbsp; Actualizar información
                </button>
              </div>
            </div>
          </>
        )}
      </StartScreen>
    );
  }

  return SettingMarkup;
}
