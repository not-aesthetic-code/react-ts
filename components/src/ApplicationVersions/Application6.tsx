import * as React from 'react';
import { fetchDogFacts, DogFactType } from '../modules/dog-facts'

type FormProps = {
    onSubmit: (numberOfFacts: number) => void
}

function Form({onSubmit}: FormProps){
    const [value,setValue] = React.useState(1);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" value={value} onChange={onChangeForm} min="1" max="10" id="number-of-facts" />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );


  function onChangeForm(event: React.ChangeEvent<HTMLInputElement>){
    setValue(+event.target.value)
  }

};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
    const [facts,setFacts] = React.useState<DogFactType[]>([])

  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>{
          facts.map(fact => <Fact key={fact.id} fact={fact.fact} />)}
      </section>
    </main>
  );


  function handleSubmit(numberOfFacts: number){
      fetchDogFacts(numberOfFacts).then(facts=> setFacts(facts))


  }
  function handleFacts(facts: []){
    setFacts(facts)
}


};

export default Application;
