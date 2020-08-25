import React, { useState } from 'react'
import Layout from '../components/layout/layout';
import NumberInput from '../components/numberInput/numberInput'
import { BsChevronDown } from 'react-icons/bs';

const Home = () => {
  const [stepConso, setStepConso] = useState(0.0);
  const [specialConso, setSpecialConso] = useState(0.0);
  const [special, setSpecial] = useState(0);
  const [calcul, setCalcul] = useState(false);

  function changeStepConso(value) { setStepConso(Number((stepConso + value).toFixed(2))); }
  function changeSpecialConso(value) { setSpecialConso(Number((specialConso + value).toFixed(2))); }
  function changeSpecial(value) { setSpecial(special + value); }

  return (
    <Layout>
      <div className="home">
        <div className="container">
          <NumberInput
            title={'Consommation liaison'}
            value={stepConso}
            plus={() => changeStepConso(0.1)}
            minus={() => changeStepConso(-0.1)}
          />
          <NumberInput
            title={'Consommation spéciale'}
            value={specialConso}
            plus={() => changeSpecialConso(0.1)}
            minus={() => changeSpecialConso(-0.1)}
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
              onClick={() => setCalcul(true)}
              className={`rounded-btn${(stepConso === 0 || specialConso === 0 || special === 0) ? ` disabled` : ``}`}
            >
              <BsChevronDown />
            </button>
          </div>

        </div>
        {calcul && (
          <div>
            <div className="bg-red">Début</div>
            <div className="bg-red">Fin</div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Home