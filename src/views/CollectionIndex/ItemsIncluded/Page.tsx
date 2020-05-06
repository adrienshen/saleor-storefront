import * as React from 'react';
import { PageHeader } from "../../../components/Header/PageHeader";

export const Page = (props) => {

  const handleClick = () => {
    props.history.goBack()
  }
  localStorage.setItem('show', "true")

  return (
    <div className="inner-page-wrapper">
      <PageHeader back={true} cart={true} search={true} handleClick={handleClick}/>
      <div>
        <div className="wrapper-header">Set Details</div>
        <div className="wrapper-coming-soon">
          <span className="text">Coming Soon...</span>
        </div>
      </div>
    </div>
  )

}

export default Page