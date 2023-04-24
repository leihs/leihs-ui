import React from 'react'
import ListMenu from './ListMenu'

export default {
  title: 'MobileApp/Design Components/Layout/ListMenu',
  component: ListMenu
}

function clickHandler(e) {
  e.preventDefault()
  alert('click')
}

export function listMenu() {
  return (
    <>
      <h1>ListMenu</h1>
      <p className="text-muted">A compact simple menu intended as side nav</p>
      <div style={{ maxWidth: '300px' }}>
        <ListMenu>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Mikrophone
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Lautsprecher
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Analoge Peripheriegeräte
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Voluptatibus nobis sed id modi dolor unde veritatis? Provident?
          </ListMenu.Link>{' '}
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Voluptatibusnobissedidmodidolorundeveritatis?Provident?
          </ListMenu.Link>
          <ListMenu.Button onClick={clickHandler}>This is a button (not a link)</ListMenu.Button>
        </ListMenu>
      </div>
    </>
  )
}

export function menuWithBreadcrumbs() {
  return (
    <>
      <h1>ListMenu</h1>
      <p className="text-muted">Menu with breadcrumbs</p>
      <div style={{ maxWidth: '300px' }} className="ms-4 mb-5">
        <ListMenu>
          <ListMenu.CurrentItem>Fotografie</ListMenu.CurrentItem>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Fotografie analog
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Fotografie digital
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Blitz/Licht/Studio
          </ListMenu.Link>
        </ListMenu>
      </div>

      <div style={{ maxWidth: '300px' }} className="ms-4 mb-5">
        <ListMenu>
          <ListMenu.Link isBreadcrumb onClick={clickHandler} href="#some/route">
            Fotografie
          </ListMenu.Link>
          <ListMenu.CurrentItem>Fotografie digital</ListMenu.CurrentItem>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Digitale Mittelformatkameras
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Digitale Spiegelreflexkameras
          </ListMenu.Link>
          <ListMenu.Link onClick={clickHandler} href="#some/route">
            Kompaktkameras
          </ListMenu.Link>
        </ListMenu>
      </div>

      <div style={{ maxWidth: '300px' }} className="ms-4 mb-5">
        <ListMenu>
          <ListMenu.Link isBreadcrumb onClick={clickHandler} href="#some/route">
            Fotografie
          </ListMenu.Link>
          <ListMenu.Link isBreadcrumb onClick={clickHandler} href="#some/route">
            Fotografie digital
          </ListMenu.Link>
          <ListMenu.CurrentItem>Digitale Spiegelreflexkameras</ListMenu.CurrentItem>
        </ListMenu>
      </div>
    </>
  )
}
