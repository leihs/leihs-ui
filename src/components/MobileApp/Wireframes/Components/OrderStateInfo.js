import React from 'react'

export default function OrderStateInfo({ order }) {
  return order.stateGroups.map((stateGroup, i) => {
    return (
      <div key={i} className="mb-2">
        <OrderStateGroupInfo stateGroup={stateGroup} />
      </div>
    )
  })
}

function OrderStateGroupInfo({ stateGroup }) {
  switch (stateGroup.type) {
    case 'inApproval':
      return <InApproval {...stateGroup} />
    case 'inHandOver':
      return <InHandOver {...stateGroup} />
    case 'lent':
      return <Lent {...stateGroup} />
    case 'inReturn':
      return <InReturn {...stateGroup} />
    case 'allItemsReturned':
      return <AllItemsReturned {...stateGroup} />
    case 'allItemsRejected':
      return <AllItemsRejected {...stateGroup} />
    case 'transferred':
      return <Transferred {...stateGroup} />
    default:
      return <div className="alert alert-danger">(missing component for state group type {stateGroup.type})</div>
  }
}

function InApproval({ totalPoolCount, approvedPoolCount }) {
  const props = {
    title: 'In der Genehmigung',
    info2: `${approvedPoolCount} von ${totalPoolCount} Geräteparks genehmigt`,
    totalCount: totalPoolCount,
    doneCount: approvedPoolCount
  }
  return <StateInfoTemplate {...props} />
}

function InHandOver({ totalCount, handedOverCount }) {
  const props = {
    title: 'Bereit zur Abholung',
    info2: `${handedOverCount} von ${totalCount} Gegenständen abgeholt`,
    totalCount,
    doneCount: handedOverCount
  }
  return <StateInfoTemplate {...props} />
}

function Lent({ durationDays, remainingDays }) {
  const props = {
    title: 'Ausgeliehen',
    info2: `${remainingDays} Tage bis zur ersten Rückgabe`,
    totalCount: durationDays,
    doneCount: durationDays - remainingDays
  }
  return <StateInfoTemplate {...props} />
}

function InReturn({ totalCount, returnedCount }) {
  const props = {
    title: 'Teilweise zurückgebracht',
    info2: `${returnedCount} von ${totalCount} Gegenständen zurückgebracht`,
    totalCount,
    doneCount: returnedCount
  }
  return <StateInfoTemplate {...props} />
}

function AllItemsReturned() {
  const props = {
    title: 'Alle Gegenstände zurückgebracht'
  }
  return <StateInfoTemplate {...props} />
}

function AllItemsRejected() {
  const props = {
    title: 'Abgelehnt'
  }
  return <StateInfoTemplate {...props} />
}

function Transferred({ transferUser }) {
  const props = {
    title: `An “${transferUser.name}” übertragen`
  }
  return <StateInfoTemplate {...props} />
}

function StateInfoTemplate({ title, info1, info2, totalCount, doneCount }) {
  return (
    <div>
      <div className="small">{title}</div>
      {info1 && <div className="very-small">{info1}</div>}
      {totalCount && <StateProgress totalCount={totalCount} doneCount={doneCount} />}
      {info2 && <div className="very-small">{info2}</div>}
    </div>
  )
}

function StateProgress({ totalCount, doneCount }) {
  if (totalCount === 0) {
    return null
  }
  var percent = Number(doneCount / totalCount).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 })

  return (
    <div className="progress order-state-progress">
      <div
        className="progress-bar rounded"
        role="progressbar"
        style={{ width: percent }}
        aria-valuenow={doneCount}
        aria-valuemin="0"
        aria-valuemax={totalCount}
      ></div>
    </div>
  )
}
