/* eslint-disable react/react-in-jsx-scope */
import styles from '../Content.module.css';

const TeamCard = ({ team }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <>
    <div className="col-12 col-sm-12 col-md-6 col-xl-4 mb-3">
      <div className={styles.about__card}>
        <img
          src={team.src}
          className={styles.about__cardImage}
          alt=""
        />
        <div className={styles.about__cardText}>
          <h2>{team.nombre}</h2>
          <h3>{team.cargo}</h3>
        </div>
      </div>
    </div>
  </>
    );
export default TeamCard;
