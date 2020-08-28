import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import NumberInput from '../components/numberInput/numberInput';
import { BsChevronDown, BsTrashFill } from 'react-icons/bs';
import SEO from '../components/seo';

const Home = () => {
  const [stepConso, setStepConso] = useState(0.20);
  const [specialConso, setSpecialConso] = useState(0.60);
  const [special, setSpecial] = useState(0);
  const [showCalcul, setShowCalcul] = useState(false);
  const [inputList, setInputList] = useState([{ name: "test", value: undefined, isStep: true, isOptional: false }]);
  const [result, setResult] = useState(undefined);

  function changeStepConso(value) { setStepConso(Number((stepConso + value).toFixed(2))); }
  function changeSpecialConso(value) { setSpecialConso(Number((specialConso + value).toFixed(2))); }
  function changeSpecial(value) { setSpecial(special + value); }

  function generateForm() {
    let tempInputList = [{ name: "step1", value: undefined, isStep: true, isOptional: false }];
    for (let i = 1; i <= special; i++) {
      if (i !== 1) {
        tempInputList.push({ name: "step" + i, value: undefined, isStep: true, isOptional: false })
      }
      tempInputList.push({ name: "special" + i, value: undefined, isStep: false, isOptional: false });
    }
    tempInputList.push({ name: "step" + (special + 1), value: undefined, isStep: true, isOptional: false });
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

  function addStep(oldIndex) {
    let list = [...inputList];
    list.splice(oldIndex + 1, 0, { name: "step" + list.length, value: undefined, isStep: true, isOptional: true });
    setInputList(list);
  }

  function deleteStep(i) {
    let list = [...inputList];
    list.splice(i, 1);
    setInputList(list);
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
              <div className="text-center">
                <div className="bg-dark-blue">Début</div>
              </div>
              <form className="custom-form" onSubmit={handleSubmit}>
                {inputList.map((input, i) => (
                  <div key={i} className="form-group">
                    <label>{input.isStep ? 'Liaison' : 'Spéciale'}</label>
                    <div className="d-flex align-items-center">
                      <input type="number" step="0.01" className="form-control" id={i} name={input.name} value={input.value} onChange={e => handleChange(e, i)} required />
                      {input.isStep && !input.isOptional && (<button type="button" className="rounded-crud-btn" onClick={() => addStep(i)}>+</button>)}
                      {input.isStep && input.isOptional && (
                        <button type="button" className="rounded-crud-btn" onClick={() => deleteStep(i)}>
                          <span><BsTrashFill /></span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="text-center">
                  <button type="submit" className="rounded-btn">=</button>
                </div>
              </form>
              <div className="text-center">
                <div className="bg-dark-blue">Fin</div>
              </div>
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