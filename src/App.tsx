import React, { useContext, useEffect } from 'react';
import './App.css';
import PtoFunnelAppContext from './file';
import StepWizard from "react-step-wizard";
import { IFormInput } from './file'

const AppInput = (props: any) => {
  return (
    <>
      <label htmlFor={props.name} className={"form-label"}>{props.label}</label>
      <div key={props.key} className={'input-group mb-3'}>
        <input className={"form-control"} type={props.type} name={props.name} />
      </div>
    </>
  )
}

/*
  Can have one big form, but validate each set of form inputs before allowing to move on to 
  next step. This will probably tap into the same controls as rendering inline error messaging
*/

const AppForm = (props: any) => {
  const submitForm = (e: any) => {
    e.preventDefault()
    // valiidate before skipping
    props.nextStep();
  }

  return (
    <div>
      {/* <!-- Variables --> */}
      <h2>Step {props.currentStep}</h2>
      {/* <p>Total Steps: {props.totalSteps}</p>
      <p>Is Active: {props.isActive}</p> */}
      {/* <!-- Functions --> */}
      <p><button onClick={props.previousStep}>Previous Step</button></p>
      {/* <p><button onClick={props.nextStep}>Next Step</button></p> */}
      {/* <p><button onClick={()=>props.goToStep(2)}>Step 2</button></p>
      <p><button onClick={props.firstStep}>First Step</button></p>
      <p><button onClick={props.lastStep}>Last Step</button></p> */}
      <form onSubmit={(e) => submitForm(e)}>
        <div className='container-fluid'>
          {
            props.inputs.map((input: any) => {
              return <AppInput 
                  label={input.label}
                  key={input.key}
                  type={input.type}
                  name={input.name}
              />
            })
          }
          <div className={"col-12"}>
            <button className={"btn btn-primary"} type="submit">Submit form</button>
          </div>
        </div>
      </form>

    </div>
  )
}

function App() {
  const context = useContext(PtoFunnelAppContext)
  // will probably be something like context.forms.get(<props.product_id>)
  const appForm = context.forms.get(1);

  return (
    <StepWizard>
      {
        /* 
          {
            props.emailIdentified
            ?
            <IsThisYourSchool />
            :
            <FindYourSchool />
          }
          OR 
          {
            <FindYourSchool emailIdentified={props.emailIdentified}
          } 
        */
      }
      {
        appForm?.pages.map(page => {
          return <AppForm 
            inputs={page.inputs}
          />
        })
      }
    </StepWizard>
  );
}

export default App;
