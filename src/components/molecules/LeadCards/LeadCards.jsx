import "./LeadCards.scss"
import { Fragment } from "react"
import LeadCard from "../../atoms/LeadCard/LeadCard"

const LeadCards = ({leads=[]}) => {
  return (
    <div className="lead-cards">
        {
            leads.map(lead =>
                <Fragment key={lead.leadIn}>
                    <LeadCard type={lead.type} source={lead.source} leadIn={lead.leadIn} vehicle={lead.vehicle} status={lead.status} active={lead.active}/>
                </Fragment>
            )
        }
    </div>
  )
}

export default LeadCards