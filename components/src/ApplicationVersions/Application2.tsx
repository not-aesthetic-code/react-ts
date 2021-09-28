import * as React from 'react';

import {
  CharacterType,
  fetchCharacter,
} from '../components/stateWithoutDefaultValue/characters';

import { Loading } from '../components/stateWithoutDefaultValue/Loading';
import { CharacterInformation } from '../components/stateWithoutDefaultValue/CharacterInformation';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, 1000);
  }, []);

  return (
    <main>
      {loading && <Loading />}
      {character && <CharacterInformation character={character} />}

      {/* {
        Possible issue -> !character doesnt exists but it doesn't imply that it's true
        loading &&  !character ? <Loading /> : <CharacterInformation character= {character}/>
      } */}
    </main>
  );
};

export default Application;
