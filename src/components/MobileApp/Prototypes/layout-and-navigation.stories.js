import React, { useState } from 'react'

import Navbar from '../DesignComponents/Navbar'
import Menu from '../DesignComponents/Menu'
import PageLayout from '../DesignComponents/PageLayout'

export default {
  title: 'MobileApp/Prototypes/Layout And Navigation',
  parameters: { layout: 'fullscreen' }
}

export function layoutAndNavigation() {
  const [overlay, setOverlay] = useState('') // '' | 'main' | 'user' | 'app'
  function onMainMenubuttonClick() {
    setOverlay(x => (x === 'main' ? '' : 'main'))
  }
  function onUserMenuButtonClick() {
    setOverlay(x => (x === 'user' ? '' : 'user'))
  }
  function onAppButtonClick() {
    setOverlay(x => (x === 'app' ? '' : 'app'))
  }

  const dismissOverlay = () => {
    setOverlay('')
  }

  return (
    <PageLayout
      topBar={
        <Navbar
          brandName="Leihs"
          brandLinkProps={{ role: 'button', onClick: dismissOverlay }}
          mainMenuIsOpen={overlay === 'main'}
          mainMenuLinkProps={{ onClick: onMainMenubuttonClick, 'aria-controls': 'menu' }}
          cartItemCount={0}
          cartItemLinkProps={{ onClick: dismissOverlay }}
          userMenuIsOpen={overlay === 'user'}
          userProfileShort="AB"
          userMenuLinkProps={{
            onClick: onUserMenuButtonClick,
            'aria-controls': 'user-menu'
          }}
          appMenuIsOpen={overlay === 'app'}
          appMenuLinkLabel="Bereich"
          appMenuLinkProps={{
            onClick: onAppButtonClick,
            'aria-controls': 'app-menu'
          }}
        />
      }
      nav={
        <Menu id="menu">
          <Menu.Group className="d-none d-lg-block">
            <Menu.Link onClick={dismissOverlay} isSelected>
              Katalog
            </Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Warenkorb</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Meine Bestellungen</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Favoriten</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Inventarparks</Menu.Link>
          </Menu.Group>
          <Menu.Group className="d-none d-lg-block">
            <Menu.Link onClick={dismissOverlay}>Dokumentation</Menu.Link>
          </Menu.Group>

          <Menu.Group title="Ausleihen" className="d-lg-none">
            <Menu.Link onClick={dismissOverlay}>Katalog</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Warenkorb</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Meine Bestellungen</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Favoriten</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Inventarparks</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Dokumentation</Menu.Link>
          </Menu.Group>
          <Menu.Group title="Weitere Bereiche" className="d-lg-none">
            <Menu.Link onClick={dismissOverlay}>Leihs Admin</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Bedarfsermittlung</Menu.Link>
            <Menu.Link onClick={dismissOverlay}>Ausleihe Toni-Areal</Menu.Link>
          </Menu.Group>
        </Menu>
      }
      navShown={overlay === 'main'}
      flyout={
        overlay === 'user' ? (
          <Menu id="user-menu">
            <Menu.Group title="Anna Beispiel">
              <Menu.Link href="">Benutzerdaten</Menu.Link>
              <Menu.Link href="">Abmelden</Menu.Link>
            </Menu.Group>
            <Menu.HorizontalGroup title="Sprache">
              <Menu.Link href="" isSelected>
                de
              </Menu.Link>
              <Menu.Link href="">en</Menu.Link>
              <Menu.Link href="">fr</Menu.Link>
            </Menu.HorizontalGroup>
            <Menu.Group title="Profil wechseln">
              <p className="text-muted">(only for users with delegations - see separate story)</p>
            </Menu.Group>
          </Menu>
        ) : (
          <Menu id="app-menu">
            <Menu.Group title="Bereich">
              <Menu.Link onClick={dismissOverlay} isSelected>
                Ausleihen
              </Menu.Link>
              <Menu.Link onClick={dismissOverlay}>Leihs Admin</Menu.Link>
              <Menu.Link onClick={dismissOverlay}>Bedarfsermittlung</Menu.Link>
              <Menu.Link onClick={dismissOverlay}>Ausleihe Toni-Areal</Menu.Link>
            </Menu.Group>
          </Menu>
        )
      }
      flyoutShown={overlay === 'user' || overlay === 'app'}
      onContentClick={dismissOverlay}
    >
      <PageLayout.Header title="Page Title"></PageLayout.Header>
      <p className="text-muted d-lg-none">Click the hamburger icon to open the main menu.</p>
      <p className="text-muted d-none d-lg-block">
        Click the button &quot;Bereich&quot; to open the app switcher menu.
      </p>
      <p className="text-muted">
        Click the button with the user&apos;s initials (&quot;AB&quot;) to open the user menu.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum ducimus perspiciatis voluptatibus
        molestiae deserunt suscipit nobis temporibus saepe quos. Quos id amet a nam dicta distinctio unde minima
        obcaecati? Laboriosam velit in dicta dignissimos ullam, suscipit dolore? Facilis corrupti amet, facere placeat,
        inventore dolorum nemo molestias repellat consequuntur error iure architecto necessitatibus tenetur voluptas
        fugiat, totam maiores odio illo?
      </p>
      <p>
        Ut animi nostrum explicabo, exercitationem cupiditate quia perferendis labore ex blanditiis architecto!
        Architecto cum repellat laudantium impedit quo? Quo velit facilis qui fugiat eos dicta dolores cum fugit
        voluptatum quaerat! Unde optio voluptatem sed laboriosam dolorum doloribus itaque vel cum harum animi, possimus
        illo magni cupiditate non minus quos soluta quasi excepturi accusantium sit deleniti provident dicta eos quas?
        Voluptas? Velit voluptatum labore consectetur expedita corporis perferendis fugit non doloremque tempore nisi
        corrupti, beatae voluptates soluta, nemo omnis reiciendis pariatur magnam quasi veritatis sapiente eveniet! Odio
        neque officia at praesentium.
      </p>
      <p>
        Amet tenetur, quibusdam tempore consectetur aut vel reprehenderit corrupti minus distinctio ipsum
        necessitatibus, fugiat nemo tempora. Suscipit sequi officia qui delectus autem beatae quasi! Architecto odio
        delectus facere numquam repellendus! Optio nam consequuntur eaque, nobis accusamus officia. Fuga obcaecati
        deserunt consectetur saepe voluptatibus officia necessitatibus in rem nisi beatae, perspiciatis corrupti ad
        vitae suscipit corporis quas nulla odit. Esse, consequatur.
      </p>
    </PageLayout>
  )
}
