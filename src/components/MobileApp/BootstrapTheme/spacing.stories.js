import React from 'react'
import Section from '../DesignComponents/Section'

export default {
  title: 'MobileApp/BootstrapTheme/Spacing'
}

const lorem =
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

export function spacing() {
  return (
    <div>
      <Section title="Schema">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>size</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
            </tr>
            <tr>
              <th>Bootstrap default</th>
              <td>4</td>
              <td>8</td>
              <td>16</td>
              <td>24</td>
              <td>48</td>
            </tr>
            <tr>
              <th>Borrow app theme</th>
              <td>5</td>
              <td>10</td>
              <td>15</td>
              <td>30</td>
              <td>50</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section title="In action">
        <h1 className="border">Heading 1</h1>
        <h2 className="border">Heading 2</h2>
        <h3 className="border">Heading 3</h3>
        <p className="border">Paragraph: {lorem}</p>
        <hr />
        {[1, 2, 3, 4, 5].map(x => (
          <div key={x} className={`border m-${x} p-${x}`}>
            m-{x} p-{x}
          </div>
        ))}
      </Section>
    </div>
  )
}
