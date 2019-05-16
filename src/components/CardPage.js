import React from 'react'

export const Card = ({ title, children }) => (
  <section
    className="card shadow-sm text-center p-4 pb-5 pb-sm-4 m-auto"
    style={{
      maxWidth: '30rem'
    }}
  >
    <h1 className="h3 my-2 font-weight-normal">{title}</h1>
    <hr className="xmb-3" />
    {children}
  </section>
)

export const CenterOnPage = ({ children }) => {
  return (
    <div
      className="m-auto d-flex minh-100 pb-sm-5"
      style={{
        maxWidth: '42rem'
      }}
    >
      <div className="p-sm-4 pb-sm-5 m-sm-auto w-100 minw-100">{children}</div>
    </div>
  )
}

export const CenteredCard = props => (
  <CenterOnPage>
    <Card {...props} />
  </CenterOnPage>
)
