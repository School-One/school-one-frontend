import TeamCard from './TeamCard';
import info from './TeamInfo.json';

const Team = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <>
    {info.map((team) => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <TeamCard key={team.id} team={team} />
            ))}
  </>
    );

export default Team;
