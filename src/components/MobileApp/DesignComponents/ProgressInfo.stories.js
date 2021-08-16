import React from 'react'
import ProgressInfo from './ProgressInfo'

export default {
  title: 'MobileApp/Design Components/Content/ProgressInfo',
  component: ProgressInfo
}

export const progressInfo = () => {
  return (
    <div>
      <h1>ProgressInfo</h1>
      <p className="text-muted">A progressbar with a title and an info line.</p>
      <ProgressInfo title="Download in progress" info="33% done" totalCount="100" doneCount="33" />
    </div>
  )
}
progressInfo.storyName = 'ProgressInfo'

export const options = () => {
  return (
    <div>
      <h1>ProgressInfo</h1>
      <p className="text-muted">Smaller font size (typically used in list items):</p>
      <div className="d-flex flex-column gap-3 mb-4">
        <ProgressInfo
          title="Download in progress (small)"
          info="33% done"
          totalCount="100"
          doneCount="33"
          small={true}
        />
        <ProgressInfo title="Download in progress (normal)" info="33% done" totalCount="100" doneCount="33" />
      </div>
      <p className="text-muted">Combinations:</p>
      <div className="d-flex flex-column gap-3 mb-4">
        <ProgressInfo title="Download in progress" totalCount="100" doneCount="33" />
        <ProgressInfo info="33% of download done" totalCount="100" doneCount="33" />
        <ProgressInfo totalCount="100" doneCount="33" />
        <ProgressInfo
          title="Text only"
          info={
            <>
              No progressbar when <code>!totalCount</code>
            </>
          }
        />
      </div>
      <p className="text-muted">Set arbitrary attributes with restProps:</p>
      <div className="d-flex flex-column gap-3 mb-4">
        <ProgressInfo
          title="Download in progress"
          info="66% done"
          totalCount="100"
          doneCount="66"
          className="text-primary"
        />
      </div>
    </div>
  )
}
