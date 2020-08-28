import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import NumberInput from '../components/numberInput/numberInput';
import { BsChevronDown } from 'react-icons/bs';
import SEO from '../components/seo';

const Home = () => {
  const [stepConso, setStepConso] = useState(0.20);
  const [specialConso, setSpecialConso] = useState(0.60);
  const [special, setSpecial] = useState(0);
  const [showCalcul, setShowCalcul] = useState(false);
  const [inputList, setInputList] = useState([{ name: "test", value: undefined, isStep: true }]);
  const [result, setResult] = useState(undefined);

  function changeStepConso(value) { setStepConso(Number((stepConso + value).toFixed(2))); }
  function changeSpecialConso(value) { setSpecialConso(Number((specialConso + value).toFixed(2))); }
  function changeSpecial(value) { setSpecial(special + value); }

  function generateForm() {
    let tempInputList = [{ name: "step1", value: undefined, isStep: true }];
    for (let i = 1; i <= special; i++) {
      if (i !== 1) {
        tempInputList.push({ name: "step" + i, value: undefined, isStep: true })
      }
      tempInputList.push({ name: "special" + i, value: undefined, isStep: false });
    }
    tempInputList.push({ name: "step" + (special + 1), value: undefined, isStep: true });
    setInputList(tempInputList);
    setShowCalcul(true);
  }

  function handleChange(e, id) {
    const list = [...inputList];
    list[id].value = e.target.value === '' ? undefined : Number(e.target.value);
    setInputList(list);
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    let essence = 0;
    inputList.forEach(input => {
      essence += input.isStep ? input.value * stepConso : input.value * specialConso;
    });
    setResult(essence.toFixed(2));
  }

  return (
    <Layout>
      <SEO title="Accueil" />
      <div className="home">
        <div className="container">
          <NumberInput
            title={'Consommation liaison'}
            value={stepConso}
            plus={() => changeStepConso(0.01)}
            minus={() => changeStepConso(-0.01)}
          />
          <NumberInput
            title={'Consommation spéciale'}
            value={specialConso}
            plus={() => changeSpecialConso(0.01)}
            minus={() => changeSpecialConso(-0.01)}
          />
          <NumberInput
            title={'Spéciales'}
            value={special}
            plus={() => changeSpecial(1)}
            minus={() => changeSpecial(-1)}
          />
          <div className="text-center">
            <button
              disabled={stepConso === 0 || specialConso === 0 || special === 0}
              onClick={() => generateForm()}
              className={(stepConso === 0 || specialConso === 0 || special === 0) ? `rounded-btn-disabled` : `rounded-btn`}
            >
              <BsChevronDown />
            </button>
          </div>
          {showCalcul && (
            <div id="calculator">
              <div className="bg-dark-blue">Début</div>
              <form className="custom-form" onSubmit={handleSubmit}>
                {inputList.map((input, i) => (
                  <div key={i} className="form-group">
                    <label>{input.isStep ? 'Liaison' : 'Spéciale'}</label>
                    <input type="number" step="0.1" className="form-control" id={i} name={input.name} value={input.value} onChange={e => handleChange(e, i)} required />
                  </div>
                ))}
                <div className="text-center">
                  <button type="submit" className="rounded-btn">=</button>
                </div>
              </form>
              <div className="bg-dark-blue">Fin</div>
            </div>
          )}
          {result && (
            <div className="result mx-auto d-block">
              <h3>{result} L</h3>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Home;